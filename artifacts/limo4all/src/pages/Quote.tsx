import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Quote() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Quote request submitted! A representative will contact you shortly.");
  };

  return (
    <AppLayout>
      <section className="py-24 bg-white text-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="section-label">CUSTOM REQUESTS</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Request a <span className="italic text-primary font-normal">Detailed Quote</span>
            </h1>
            <p className="text-gray-600 font-sans text-lg">
              For complex itineraries, multi-vehicle events, corporate accounts, or FIFA 2026 group transport.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 p-8 rounded-sm shadow-sm flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-caps font-bold text-gray-700">Full Name *</label>
                <Input className="bg-white border-gray-300 text-gray-900" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-caps font-bold text-gray-700">Email Address *</label>
                <Input type="email" className="bg-white border-gray-300 text-gray-900" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-caps font-bold text-gray-700">Phone Number *</label>
                <Input type="tel" className="bg-white border-gray-300 text-gray-900" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-caps font-bold text-gray-700">Service Type</label>
                <select className="flex h-12 w-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary">
                  <option>Corporate Account Setup</option>
                  <option>FIFA 2026 Group Travel</option>
                  <option>Wedding Package</option>
                  <option>Road Show / Multi-stop</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-caps font-bold text-gray-700">Itinerary Details</label>
              <textarea 
                className="flex min-h-[120px] w-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary resize-y"
                placeholder="Please describe your requirements, dates, passenger counts, etc."
              />
            </div>

            <Button type="submit" size="lg" className="w-full mt-4">Submit Request</Button>
            <p className="text-xs text-gray-500 text-center font-sans mt-2">
              We typically respond to detailed quotes within 2 hours during business operations.
            </p>
          </form>
        </div>
      </section>
    </AppLayout>
  );
}
