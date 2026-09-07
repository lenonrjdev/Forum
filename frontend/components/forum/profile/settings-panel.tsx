"use client";

import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";

const tabs = ["Perfil", "Conta", "Notificações", "Privacidade", "Aparência"] as const;
type SettingsTab = (typeof tabs)[number];
const inputClass = "mt-1.5 h-10 w-full rounded-md border border-[#dde3e7] px-3 text-sm text-[#34414d] outline-none focus:border-[#afbec8] focus:ring-4 focus:ring-[#eff7fb]";

export function SettingsPanel() {
  const [tab, setTab] = useState<SettingsTab>("Perfil");
  const [saved, setSaved] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  }

  return (
    <div className="grid grid-cols-[210px_minmax(0,1fr)] gap-12 max-md:grid-cols-1 max-md:gap-6">
      <nav className="space-y-1 max-md:flex max-md:overflow-x-auto">
        {tabs.map((item) => (
          <button key={item} type="button" onClick={() => setTab(item)} className={`w-full rounded-md px-3 py-2.5 text-left text-xs font-medium transition max-md:w-auto max-md:whitespace-nowrap ${tab === item ? "bg-[#eef3f5] text-[#263241]" : "text-[#78838e] hover:bg-[#f7f9fa]"}`}>
            {item}
          </button>
        ))}
      </nav>

      <form onSubmit={submit} className="max-w-[720px]">
        <div className="mb-6"><h2 className="text-base font-semibold text-[#34414d]">{tab}</h2><p className="mt-1 text-xs leading-5 text-[#8b95a0]">Configurações preparadas para integração posterior com a API do Fórum Ateliux.</p></div>

        {tab === "Perfil" ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1"><label className="text-xs font-medium text-[#5f6b76]">Nome de exibição<input defaultValue="Usuário Ateliux" className={inputClass} /></label><label className="text-xs font-medium text-[#5f6b76]">Username<input defaultValue="usuario-ateliux" className={inputClass} /></label></div>
            <label className="block text-xs font-medium text-[#5f6b76]">Cargo<input defaultValue="Membro da comunidade" className={inputClass} /></label>
            <label className="block text-xs font-medium text-[#5f6b76]">Biografia<textarea defaultValue="Perfil de demonstração usado para validar a experiência do Fórum Ateliux." className="mt-1.5 min-h-28 w-full resize-y rounded-md border border-[#dde3e7] px-3 py-2.5 text-sm leading-6 text-[#34414d] outline-none focus:border-[#afbec8] focus:ring-4 focus:ring-[#eff7fb]" /></label>
          </div>
        ) : null}

        {tab === "Conta" ? (
          <div className="space-y-4"><label className="block text-xs font-medium text-[#5f6b76]">E-mail<input type="email" defaultValue="usuario@ateliux.test" className={inputClass} /></label><label className="block text-xs font-medium text-[#5f6b76]">Nova senha<input type="password" placeholder="••••••••" className={inputClass} /></label><div className="rounded-lg border border-[#f0dfe2] bg-[#fffafb] p-4"><p className="text-xs font-semibold text-[#805b63]">Zona sensível</p><p className="mt-1 text-xs leading-5 text-[#96777e]">Encerramento de conta dependerá de confirmação no backend.</p></div></div>
        ) : null}

        {tab === "Notificações" ? (
          <div className="space-y-4">{["Respostas em discussões seguidas", "Menções", "Novos artigos em categorias seguidas", "Avisos do sistema"].map((label, index) => <label key={label} className="flex items-center justify-between gap-4 rounded-lg border border-[#e6eaed] p-4 text-sm text-[#5f6b76]"><span>{label}</span><input type="checkbox" defaultChecked={index < 3} className="size-4" /></label>)}</div>
        ) : null}

        {tab === "Privacidade" ? (
          <div className="space-y-4">{["Exibir histórico de atividade no perfil", "Permitir que outros usuários sigam meu perfil", "Exibir conteúdos salvos publicamente"].map((label, index) => <label key={label} className="flex items-center justify-between gap-4 rounded-lg border border-[#e6eaed] p-4 text-sm text-[#5f6b76]"><span>{label}</span><input type="checkbox" defaultChecked={index < 2} className="size-4" /></label>)}</div>
        ) : null}

        {tab === "Aparência" ? (
          <div className="space-y-4"><p className="text-xs leading-5 text-[#7f8a95]">Tema claro é o padrão desta primeira versão. O seletor abaixo deixa o fluxo visual preparado para uma futura preferência persistida.</p><div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">{["Claro", "Sistema", "Escuro"].map((item, index) => <label key={item} className="rounded-lg border border-[#e3e8eb] p-4 text-sm text-[#56636f]"><input type="radio" name="theme" defaultChecked={index === 0} className="mr-2" />{item}</label>)}</div></div>
        ) : null}

        <div className="mt-7 flex items-center gap-3"><button type="submit" className="h-10 rounded-md bg-[#263241] px-5 text-xs font-semibold text-white hover:bg-[#18222d]">Salvar alterações</button>{saved ? <span className="flex items-center gap-1.5 text-xs text-[#4e9b8d]"><CheckCircle2 className="size-4" />Salvo</span> : null}</div>
      </form>
    </div>
  );
}
