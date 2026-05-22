import { LandingFooter } from "@/components/landing/landing-footer";
import { SiteNavbar } from "@/components/layout/site-navbar";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNavbar />
      <div className="flex-1">{children}</div>
      <LandingFooter />
    </div>
  );
}
