export function PromoBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-xs md:text-sm font-sans font-medium tracking-wide flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
      <span>
        <strong>Upfront Pricing. No Surprises.</strong> — Airport Transfers from $75
      </span>
      <span className="hidden md:inline text-primary-foreground/60">|</span>
      <span>Corporate, Wedding & Events</span>
      <span className="hidden md:inline text-primary-foreground/60">|</span>
      <span>
        Call <a href="tel:+18001234567" className="underline hover:text-white transition-colors">1-800-XXX-XXXX</a>
      </span>
    </div>
  );
}
