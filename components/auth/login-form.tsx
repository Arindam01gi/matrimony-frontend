"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { useState, type FormEvent } from "react";

import { FormField } from "@/components/auth/form-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AUTH_REGISTER_PATH, PROFILE_DETAILS_PATH } from "@/lib/routes";

export function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(PROFILE_DETAILS_PATH);
  };

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <FormField htmlFor="identifier" label="Email or Phone Number">
          <Input
            className="h-14 rounded-xl border-none bg-surface-variant/30 px-4 text-base text-on-surface shadow-none placeholder:text-on-surface-variant/70 focus-visible:ring-2 focus-visible:ring-primary"
            id="identifier"
            name="identifier"
            placeholder="e.g. ananya.das@email.com"
            type="text"
          />
        </FormField>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <label
              className="ml-1 text-sm leading-5 font-semibold tracking-[0.01em] text-on-surface-variant"
              htmlFor="password"
            >
              Password
            </label>
            <a
              className="text-xs leading-4 font-medium text-primary transition-colors hover:text-primary-container hover:underline"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="relative">
            <Input
              className="h-14 rounded-xl border-none bg-surface-variant/30 px-4 pr-12 text-base text-on-surface shadow-none placeholder:text-on-surface-variant/70 focus-visible:ring-2 focus-visible:ring-primary"
              id="password"
              name="password"
              placeholder="********"
              type={showPassword ? "text" : "password"}
            />
            <button
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-on-surface-variant transition-colors hover:text-primary"
              onClick={() => setShowPassword((currentValue) => !currentValue)}
              type="button"
            >
              {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
            </button>
          </div>
        </div>

        <label className="ml-1 flex cursor-pointer items-center gap-3 py-2 text-base text-on-surface-variant select-none">
          <input
            className="size-5 cursor-pointer appearance-none rounded border border-outline-variant bg-transparent text-primary transition-colors checked:border-primary checked:bg-primary focus:ring-2 focus:ring-primary"
            id="remember"
            type="checkbox"
          />
          Stay logged in
        </label>

        <Button
          className="h-14 w-full rounded-xl bg-primary-container text-sm font-semibold text-on-primary shadow-lg shadow-primary/10 transition-all hover:scale-[1.01] hover:bg-primary-container hover:shadow-primary/20 active:scale-[0.98]"
          type="submit"
        >
          Login to Profile
        </Button>
      </form>

      <div className="relative flex items-center py-4">
        <div className="grow border-t border-outline-variant/40" />
        <span className="mx-4 shrink text-xs leading-4 font-medium tracking-[0.16em] text-on-surface-variant/60 uppercase">
          or continue with
        </span>
        <div className="grow border-t border-outline-variant/40" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          className="flex h-14 cursor-pointer items-center justify-center rounded-xl border border-outline-variant/30 bg-white text-on-surface transition-colors hover:bg-surface-variant/20"
          type="button"
        >
          <svg className="mr-3 size-5" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          <span className="text-sm leading-5 font-semibold">Google</span>
        </button>
        <button
          className="flex h-14 cursor-pointer items-center justify-center rounded-xl border border-outline-variant/30 bg-white text-on-surface transition-colors hover:bg-surface-variant/20"
          type="button"
        >
          <svg
            aria-hidden="true"
            className="mr-3 size-5 text-[#1877F2]"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle cx="10" cy="12" r="6.5" stroke="currentColor" strokeWidth="2" />
            <path
              d="M6.5 11.5c1.2-1 5.6-1 7 0M7.7 14.4c1.3 1 3.3 1 4.6 0"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.8"
            />
            <circle cx="8.2" cy="12.2" r="0.7" fill="currentColor" />
            <circle cx="11.8" cy="12.2" r="0.7" fill="currentColor" />
            <path
              d="M16 8.2c1.9.6 3.2 2.2 3.2 4.1 0 1.3-.6 2.5-1.6 3.2m1.7-7.7 2.1-2.1m-1 5.7h2.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.8"
            />
          </svg>
          <span className="text-sm leading-5 font-semibold">Facebook</span>
        </button>
      </div>

      <footer className="pt-4 text-center">
        <p className="text-base leading-6 text-on-surface-variant">
          Don&apos;t have an account?
          <Link
            className="ml-2 cursor-pointer font-semibold text-primary transition-colors hover:text-primary-container hover:underline"
            href={AUTH_REGISTER_PATH}
          >
            Create Profile
          </Link>
        </p>
      </footer>
    </>
  );
}
