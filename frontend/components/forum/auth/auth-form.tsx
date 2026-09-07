"use client";

import { CheckCircle2, Github } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

function SocialButtons() {
  const [message, setMessage] = useState("");
  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        <button type="button" onClick={() => setMessage("Login GitHub preparado para integração com o backend.")} className="flex h-11 items-center justify-center gap-2 rounded-md border border-[#dde3e8] text-xs font-medium text-[#4e5b67] transition hover:bg-[#f7f9fa]">
          <Github className="size-4" /> GitHub
        </button>
        <button type="button" onClick={() => setMessage("Login Google preparado para integração com o backend.")} className="flex h-11 items-center justify-center gap-2 rounded-md border border-[#dde3e8] text-xs font-medium text-[#4e5b67] transition hover:bg-[#f7f9fa]">
          <span className="text-sm font-semibold">G</span> Google
        </button>
      </div>
      {message ? <p className="mt-3 text-center text-[11px] text-[#6f7c87]">{message}</p> : null}
      <div className="my-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.14em] text-[#b0b7be]"><span className="h-px flex-1 bg-[#e9ecef]" />ou<span className="h-px flex-1 bg-[#e9ecef]" /></div>
    </div>
  );
}

const inputClass = "mt-1.5 h-11 w-full rounded-md border border-[#dfe4e8] bg-white px-3.5 text-sm text-[#2f3b47] outline-none transition placeholder:text-[#b3bac1] focus:border-[#aebcc7] focus:ring-4 focus:ring-[#eff7fb]";

export function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    window.setTimeout(() => router.push("/"), 450);
  }

  return (
    <>
      <SocialButtons />
      <form onSubmit={submit} className="space-y-4">
        <label className="block text-xs font-medium text-[#5f6b76]">E-mail<input type="email" required placeholder="usuario@ateliux.test" className={inputClass} /></label>
        <label className="block text-xs font-medium text-[#5f6b76]">Senha<input type="password" required minLength={6} placeholder="••••••••" className={inputClass} /></label>
        <div className="flex items-center justify-between gap-4"><label className="flex items-center gap-2 text-xs text-[#7b8792]"><input type="checkbox" className="size-4 rounded border-[#d8dee3]" />Manter conectado</label><a href="/forgot-password" className="text-xs font-medium text-[#3c9ac5] hover:text-[#267da5]">Esqueci minha senha</a></div>
        <button type="submit" disabled={loading} className="h-11 w-full rounded-md bg-[#263241] text-xs font-semibold text-white transition hover:bg-[#18222d] disabled:opacity-60">{loading ? "Entrando..." : "Entrar"}</button>
      </form>
    </>
  );
}

export function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    window.setTimeout(() => router.push("/u/usuario-ateliux"), 450);
  }

  return (
    <>
      <SocialButtons />
      <form onSubmit={submit} className="space-y-4">
        <label className="block text-xs font-medium text-[#5f6b76]">Nome de exibição<input required defaultValue="Usuário Ateliux" className={inputClass} /></label>
        <label className="block text-xs font-medium text-[#5f6b76]">Username<input required defaultValue="usuario-ateliux" pattern="[a-z0-9-]+" className={inputClass} /></label>
        <label className="block text-xs font-medium text-[#5f6b76]">E-mail<input type="email" required placeholder="usuario@ateliux.test" className={inputClass} /></label>
        <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1"><label className="block text-xs font-medium text-[#5f6b76]">Senha<input type="password" required minLength={6} className={inputClass} /></label><label className="block text-xs font-medium text-[#5f6b76]">Confirmar senha<input type="password" required minLength={6} className={inputClass} /></label></div>
        <label className="flex items-start gap-2 text-xs leading-5 text-[#7b8792]"><input type="checkbox" required className="mt-0.5 size-4 rounded border-[#d8dee3]" />Concordo com os Termos de Uso e as Diretrizes da Comunidade.</label>
        <button type="submit" disabled={loading} className="h-11 w-full rounded-md bg-[#263241] text-xs font-semibold text-white transition hover:bg-[#18222d] disabled:opacity-60">{loading ? "Criando conta..." : "Criar conta"}</button>
      </form>
    </>
  );
}

export function PasswordRequestForm({ reset = false }: { reset?: boolean }) {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }

  if (sent) {
    return <div className="rounded-xl border border-[#dfe7e5] bg-[#f7fbfa] p-5 text-center"><CheckCircle2 className="mx-auto size-7 text-[#4fae9d]" /><p className="mt-3 text-sm font-medium text-[#3f4d57]">{reset ? "Senha atualizada" : "Solicitação enviada"}</p><p className="mt-2 text-xs leading-5 text-[#7b8792]">Este fluxo está pronto visualmente para ser conectado ao backend.</p></div>;
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      {reset ? (
        <><label className="block text-xs font-medium text-[#5f6b76]">Nova senha<input type="password" required minLength={6} className={inputClass} /></label><label className="block text-xs font-medium text-[#5f6b76]">Confirmar nova senha<input type="password" required minLength={6} className={inputClass} /></label></>
      ) : (
        <label className="block text-xs font-medium text-[#5f6b76]">E-mail<input type="email" required placeholder="usuario@ateliux.test" className={inputClass} /></label>
      )}
      <button type="submit" className="h-11 w-full rounded-md bg-[#263241] text-xs font-semibold text-white transition hover:bg-[#18222d]">{reset ? "Atualizar senha" : "Enviar link de recuperação"}</button>
    </form>
  );
}
