import { readdir, readFile } from "node:fs/promises";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));

const forbidden = [
  [103, 117, 105, 108, 104, 101, 114, 109, 101],
  [97, 108, 111, 110, 115, 111],
  [108, 101, 110, 111, 110],
  [115, 121, 110, 116, 104],
].map((codes) => String.fromCharCode(...codes));

const ignored = new Set(["node_modules", ".next", ".git"]);
const extensions = new Set([".ts", ".tsx", ".js", ".mjs", ".json", ".md", ".css", ".html"]);

async function walk(directory, results = []) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    if (ignored.has(entry.name)) continue;

    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      await walk(path, results);
      continue;
    }

    if (entry.isFile() && extensions.has(extname(entry.name))) {
      results.push(path);
    }
  }

  return results;
}

const files = await walk(root);
const violations = [];

for (const file of files) {
  const content = (await readFile(file, "utf8")).toLowerCase();

  for (const term of forbidden) {
    if (content.includes(term)) {
      violations.push(`${relative(root, file)} contém nomenclatura pessoal proibida.`);
    }
  }
}

if (violations.length > 0) {
  console.error(violations.join("\n"));
  process.exit(1);
}

console.log("Validação de nomenclaturas pessoais concluída sem ocorrências.");
