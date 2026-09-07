import Link from "next/link";
import { AuthShell } from "@/components/forum/auth/auth-shell";
import { PasswordRequestForm } from "@/components/forum/auth/auth-form";
export default function ForgotPasswordPage(){return <AuthShell eyebrow="Recuperação" title="Recuperar acesso" description="Informe seu e-mail para receber as instruções de recuperação." footer={<Link href="/login" className="font-semibold text-[#3b98c2]">Voltar para o login</Link>}><PasswordRequestForm /></AuthShell>}
