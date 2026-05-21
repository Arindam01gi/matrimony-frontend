import { authCopy } from "@/components/auth/auth-content";
import type { AuthMode } from "@/components/auth/auth-types";
import { LoginForm } from "@/components/auth/login-form";
import { SignupForm } from "@/components/auth/signup-form";

const formCopy: Record<AuthMode, { title: string; description: string }> = {
  login: {
    title: "Welcome Back",
    description: "Log in to continue your journey of finding a meaningful connection.",
  },
  signup: {
    title: "Start Your Journey",
    description: "Create a beautiful profile and find your perfect life partner.",
  },
};

interface AuthPanelProps {
  mode: AuthMode;
}

export function AuthPanel({ mode }: AuthPanelProps) {
  const copy = formCopy[mode];

  return (
    <section className="flex w-full flex-col justify-center bg-surface px-5 py-12 md:w-1/2 md:px-16 lg:w-2/5 lg:px-24">
      <div className="mb-12 md:hidden">
        <h1 className="font-heading text-2xl leading-8 font-semibold text-primary italic">
          {authCopy.brand}
        </h1>
      </div>

      <div className="mx-auto w-full max-w-md space-y-8">
        <header className="space-y-2">
          <h2 className="font-heading text-[32px] leading-10 font-semibold text-on-surface">
            {copy.title}
          </h2>
          <p className="text-base leading-6 text-on-surface-variant">
            {copy.description}
          </p>
        </header>

        {mode === "login" ? <LoginForm /> : <SignupForm />}
      </div>
    </section>
  );
}
