import { AuthPanel } from "@/components/auth/auth-panel";
import { AuthVisualPanel } from "@/components/auth/auth-visual-panel";
import type { AuthMode } from "@/components/auth/auth-types";

interface AuthPageProps {
  mode: AuthMode;
}

export function AuthPage({ mode }: AuthPageProps) {
  return (
    <main className="flex min-h-screen overflow-hidden bg-surface">
      <AuthVisualPanel />
      <AuthPanel mode={mode} />
    </main>
  );
}
