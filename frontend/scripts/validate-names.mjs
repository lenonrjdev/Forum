import { readdir, readFile, stat } from "node:fs/promises";
import { join, relative } from "node:path";

const root = new URL("../", import.meta.url).pathname;
const forbidden = [
  [103, 117, 105, 108, 104, 101, 114, 109, 101],
  [97, 108, 111, 110, 115, 111],
  [108, 101, 110, 111, 110],
  [115, 121, 110, 116, 104],
].map((codes) => String.fromCharCode(...codes));
const ignored = new Set(["node_modules", ".next", ".git"]);
const extensions = new Set([".ts", ".tsx", ".js", ".mjs", ".json", ".md", ".css", ".html"]);

function extension(path) {
  const index = path.lastIndexOf(".");
  return index >= 0 ? path.slice(index) : "";
}

async function walk(directory, results = []) {
  for (const entry of await readdir(directory)) {
    if (ignored.has(entry)) continue;
    const path = join(directory, entry);
    const info = await stat(path);
    if (info.isDirectory()) await walk(path, results);
    else if (extensions.has(extension(path))) results.push(path);
  }
  return results;
}

const files = await walk(root);
const violations = [];

for (const file of files) {
  const content = (await readFile(file, "utf8")).toLowerCase();
  for (const term of forbidden) {
    if (content.includes(term)) violations.push(`${relative(root, file)} contém nomenclatura pessoal proibida.`);
  }
}

if (violations.length) {
  console.error(violations.join("\n"));
  process.exit(1);
}

console.log("Validação de nomenclaturas pessoais concluída sem ocorrências.");
