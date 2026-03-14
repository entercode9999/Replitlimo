import { ReactNode } from "react";
import { PromoBar } from "./PromoBar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      <div className="fixed top-0 w-full z-50 transition-transform duration-300">
        <PromoBar />
      </div>
      <Navbar />
      {/* Spacer to push content below fixed header elements (PromoBar + Navbar pt-4) */}
      <main className="flex-1 flex flex-col pt-[120px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
