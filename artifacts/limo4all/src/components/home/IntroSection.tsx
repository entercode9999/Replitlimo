import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

const CHECKLIST = [
  "Professional uniformed chauffeur",
  "Real-time flight monitoring",
  "Meet and greet inside arrivals",
  "60 minutes complimentary wait",
  "All tolls and airport fees included",
  "Luggage loading and unloading",
  "Complimentary bottled water",
  "No surge pricing, ever",
];

export function IntroSection() {
  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar Stats */}
          <aside className="hidden lg:flex lg:col-span-3 flex-col gap-8">
            <div className="bg-gray-50 border border-gray-200 p-8 text-center rounded-sm">
              <div className="font-display text-6xl font-bold text-primary mb-2">15<sup className="text-3xl">+</sup></div>
              <span className="font-caps text-sm font-bold uppercase tracking-widest text-gray-500">Cities Across Ontario</span>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-8 text-center rounded-sm">
              <div className="font-display text-6xl font-bold text-primary mb-2">60<span className="text-2xl font-sans font-light text-gray-400 ml-1">min</span></div>
              <span className="font-caps text-sm font-bold uppercase tracking-widest text-gray-500">Complimentary Wait</span>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-display text-xl font-bold border-b border-gray-200 pb-2">Quick Links</h4>
              <Link href="/airport" className="text-sm font-sans font-semibold text-gray-600 hover:text-primary flex justify-between group">
                Airport Limo — From $75 <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
              </Link>
              <Link href="/corporate" className="text-sm font-sans font-semibold text-gray-600 hover:text-primary flex justify-between group">
                Corporate Hourly — From $85/hr <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
              </Link>
              <Link href="/wedding" className="text-sm font-sans font-semibold text-gray-600 hover:text-primary flex justify-between group">
                Wedding Packages <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
              </Link>
              <Link href="/tours" className="text-sm font-sans font-semibold text-gray-600 hover:text-primary flex justify-between group">
                Niagara & Wine Tours <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-9">
            <span className="section-label">Toronto & GTA Chauffeur Service</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-gray-900">
              Ontario's Trusted <span className="italic text-primary font-normal">Limo & Chauffeur</span> Service
            </h2>
            
            <div className="prose prose-lg text-gray-600 font-sans mb-10 max-w-none">
              <p>
                Toronto Pearson International Airport processes over 50 million passengers annually, making it one of the most demanding ground transportation environments in North America. From the downtown core through Yorkville, the Financial District and Harbourfront to outlying communities across the GTA, reliable transportation is not optional — it is essential. 
              </p>
              <p>
                Limo4All was built for exactly this environment. Our flat-rate structure eliminates the price uncertainty that plagues rideshare platforms on the days you can least afford a surprise. When you book at 11pm before a 6am departure, you know your driver's name, your vehicle, and your price before your alarm goes off.
              </p>
              <p>
                We serve every corner of the Greater Toronto Area and extend across Southern Ontario to Hamilton, Guelph, Kitchener-Waterloo, London, Niagara Falls, and cross-border to Buffalo. For corporate accounts, we provide monthly billing, dedicated account managers and consistent vehicle quality across every single trip — no gig economy variables.
              </p>
            </div>

            <h3 className="font-display text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-4">What's Included in Every Ride</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {CHECKLIST.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-sans text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
