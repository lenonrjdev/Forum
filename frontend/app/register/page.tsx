import Link from "next/link";
import { AuthShell } from "@/components/forum/auth/auth-shell";
import { RegisterForm } from "@/components/forum/auth/auth-form";
export default function RegisterPage(){return <AuthShell eyebrow="Comunidade" title="Criar sua conta" description="Participe das discussões, acompanhe categorias e mantenha seus conteúdos salvos." footer={<>Já possui conta? <Link href="/login" className="font-semibold text-[#3b98c2]">Entrar</Link></>}><RegisterForm /></AuthShell>}
