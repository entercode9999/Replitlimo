import { AppLayout } from "@/components/layout/AppLayout";
import { BookingWidget } from "@/components/home/BookingWidget";

export function Booking() {
  return (
    <AppLayout>
      <section className="pt-24 pb-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,183,244,0.1)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="section-label">RESERVATIONS</span>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Book Your <span className="italic text-primary font-normal">Ride</span>
              </h1>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-8">
                Instantly secure your flat-rate premium transportation. Choose your service, select your vehicle, and receive immediate confirmation. For special requests or multi-vehicle bookings, please call our 24/7 dispatch team.
              </p>
              
              <div className="bg-secondary border border-border p-6 rounded-sm">
                <h4 className="font-caps text-sm font-bold text-white mb-4 uppercase tracking-wider border-b border-border pb-2">Need Assistance?</h4>
                <div className="flex flex-col gap-2 font-sans text-sm text-muted-foreground">
                  <p><strong>Phone:</strong> <a href="tel:+18001234567" className="text-primary hover:underline">1-800-XXX-XXXX</a> (Available 24/7)</p>
                  <p><strong>Email:</strong> <a href="mailto:info@limo4all.ca" className="text-primary hover:underline">info@limo4all.ca</a></p>
                  <p><strong>Changes:</strong> Modifications free up to 24hrs before pickup.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6">
              <BookingWidget />
            </div>

          </div>
        </div>
      </section>
    </AppLayout>
  );
}
