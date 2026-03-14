import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function PromoBanner() {
  return (
    <section className="bg-gradient-to-br from-[#f0fbff] to-[#e8f5ff] py-12 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-3xl font-bold text-gray-900 mb-2">First Time? Get 10% Off</h3>
            <p className="text-gray-600 font-sans text-lg">
              Use code <strong className="text-primary">WELCOME10</strong> on your first booking.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <Link href="/booking" className="flex-1 md:flex-none">
              <Button className="w-full">Book Now & Save</Button>
            </Link>
            <a href="tel:+18001234567" className="flex-1 md:flex-none">
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                Call 1-800-XXX-XXXX
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
