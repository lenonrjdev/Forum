import { AuthShell } from "@/components/forum/auth/auth-shell";
import { PasswordRequestForm } from "@/components/forum/auth/auth-form";
export default function ResetPasswordPage(){return <AuthShell eyebrow="Segurança" title="Definir nova senha" description="Escolha uma nova senha para sua conta do Fórum Ateliux."><PasswordRequestForm reset /></AuthShell>}
