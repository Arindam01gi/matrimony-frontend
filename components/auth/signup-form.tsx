"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { FormEvent } from "react";

import { signupProfileOptions } from "@/components/auth/auth-content";
import { FormField } from "@/components/auth/form-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AUTH_LOGIN_PATH, ONBOARDING_PATH } from "@/lib/routes";

export function SignupForm() {
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(ONBOARDING_PATH);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <Link
        className="type-button inline-flex cursor-pointer items-center gap-2 text-primary transition-transform hover:-translate-x-1"
        href={AUTH_LOGIN_PATH}
      >
        <ArrowLeft className="size-4" />
        Back to Login
      </Link>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField htmlFor="firstName" label="First Name">
          <Input
            className="type-body h-12 rounded-xl border-none bg-surface-variant/40 px-4 focus-visible:ring-primary/35"
            id="firstName"
            placeholder="Ananya"
            type="text"
          />
        </FormField>
        <FormField htmlFor="lastName" label="Last Name">
          <Input
            className="type-body h-12 rounded-xl border-none bg-surface-variant/40 px-4 focus-visible:ring-primary/35"
            id="lastName"
            placeholder="Das"
            type="text"
          />
        </FormField>
      </div>

      <FormField htmlFor="mobile" label="Mobile Number">
        <Input
          className="type-body h-12 rounded-xl border-none bg-surface-variant/40 px-4 focus-visible:ring-primary/35"
          id="mobile"
          placeholder="+91 98765 43210"
          type="tel"
        />
      </FormField>

      <FormField htmlFor="email" label="Email Address">
        <Input
          className="type-body h-12 rounded-xl border-none bg-surface-variant/40 px-4 focus-visible:ring-primary/35"
          id="email"
          placeholder="ananya.das@example.com"
          type="email"
        />
      </FormField>

      <FormField htmlFor="profileFor" label="Profile For">
        <Select defaultValue="myself">
          <SelectTrigger
            className="type-body h-12 w-full rounded-xl border-none bg-surface-variant/40 px-4 text-on-surface focus-visible:ring-primary/35"
            id="profileFor"
          >
            <SelectValue placeholder="Select profile type" />
          </SelectTrigger>
          <SelectContent>
            {signupProfileOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>

      <p className="type-caption px-2 text-center leading-5 text-on-surface-variant">
        By clicking &ldquo;Join Now&rdquo;, you agree to our{" "}
        <a className="font-semibold text-primary underline" href="#">
          Terms of Use
        </a>{" "}
        and{" "}
        <a className="font-semibold text-primary underline" href="#">
          Privacy Policy
        </a>
        .
      </p>

      <Button
        className="h-14 w-full rounded-xl bg-primary-container text-on-primary shadow-lg shadow-primary/10 transition-all hover:scale-[1.01] hover:bg-primary active:scale-[0.98]"
        type="submit"
      >
        Join Shubho Shomproti
      </Button>
    </form>
  );
}
