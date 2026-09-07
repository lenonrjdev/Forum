import Link from "next/link";
import { AuthShell } from "@/components/forum/auth/auth-shell";
import { LoginForm } from "@/components/forum/auth/auth-form";
export default function LoginPage(){return <AuthShell eyebrow="Acesso" title="Entrar no fórum" description="Acesse sua conta para comentar, salvar e acompanhar discussões." footer={<>Ainda não possui conta? <Link href="/register" className="font-semibold text-[#3b98c2]">Criar conta</Link></>}><LoginForm /></AuthShell>}
