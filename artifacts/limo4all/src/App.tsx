import { Switch, Route, useParams } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { HomeLight } from "@/pages/HomeLight";
import { Booking } from "@/pages/Booking";
import { Quote } from "@/pages/Quote";
import { GenericPage } from "@/pages/GenericPage";
import { ContentPage } from "@/pages/ContentPage";
import NotFound from "@/pages/not-found";
import { HubPage } from "@/pages/HubPage";
import { AppLayout } from "@/components/layout/AppLayout";
import { VehiclesSection } from "@/components/home/VehiclesSection";
import { ToursSection } from "@/components/home/ToursSection";
import { CTABand } from "@/components/home/CTABand";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

import {
  getCityContent,
  getCorporateContent,
  getWeddingContent,
  getCarServiceContent,
  getAirportContent,
  getHubContent,
  getPageContent,
} from "@/lib/content";

const queryClient = new QueryClient();

// ─── Styled service hub pages (keep existing design) ─────────────────────────

const AirportHub = () => <HubPage hub="airport" />;
const CorporateHub = () => <HubPage hub="corporate" />;
const WeddingHub = () => <HubPage hub="wedding" />;

const EventsHub = () => (
  <GenericPage
    title="Events & Concerts"
    subtitle="Arrive in style and skip the parking hassle at major GTA venues — Scotiabank Arena, Rogers Centre, Budweiser Stage and more."
  />
);

const HourlyHub = () => (
  <GenericPage
    title="Hourly Charter"
    subtitle="Flexible directed service with a dedicated chauffeur at your disposal. Ideal for business meetings, medical appointments, or shopping."
  />
);

const ToursHub = () => (
  <AppLayout>
    <section className="pt-32 pb-20 bg-card border-b border-border text-center px-4">
      <span className="section-label mb-4 inline-block">Limo4All Tours</span>
      <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
        Wine & <span className="italic text-primary font-normal">City</span> Tours
      </h1>
      <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto mb-10">
        Chauffeured day trips across Ontario — Niagara Falls, Muskoka cottage country, Stratford Festival and beyond. Every tour is door-to-door in an executive vehicle.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/booking"><Button>Book a Tour</Button></Link>
        <Link href="/quote"><Button variant="outline">Request Quote</Button></Link>
      </div>
    </section>
    <ToursSection />
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 text-center mb-12">
          Why Tour <span className="italic text-primary font-normal">with Limo4All</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-200 rounded-sm">
            <h4 className="font-bold font-display text-xl mb-2 text-gray-900">Door-to-Door</h4>
            <p className="text-sm text-gray-600 font-sans">We pick you up at home and drop you back — no parking, no driving, no stress. Pure enjoyment from start to finish.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-sm">
            <h4 className="font-bold font-display text-xl mb-2 text-gray-900">Your Pace</h4>
            <p className="text-sm text-gray-600 font-sans">Flexible itineraries tailored to you. Linger at a winery, add a stop, or skip ahead — your chauffeur waits.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-sm">
            <h4 className="font-bold font-display text-xl mb-2 text-gray-900">Executive Comfort</h4>
            <p className="text-sm text-gray-600 font-sans">Travel in a late-model Escalade, Suburban, or Sprinter Van — climate controlled, Wi-Fi ready, fully stocked with refreshments.</p>
          </div>
        </div>
      </div>
    </section>
    <CTABand />
  </AppLayout>
);

const FleetPage = () => (
  <AppLayout>
    <section className="pt-32 pb-20 bg-card border-b border-border text-center px-4">
      <span className="section-label mb-4 inline-block">Limo4All Fleet</span>
      <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
        Our Premium <span className="italic text-primary font-normal">Fleet</span>
      </h1>
      <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto mb-10">
        Executive Sedans, SUVs, Sprinter Vans and Stretch Limousines — every vehicle meticulously maintained, fully insured, and driven by a licensed professional chauffeur.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/booking"><Button>Book Now</Button></Link>
        <Link href="/quote"><Button variant="outline">Get a Quote</Button></Link>
      </div>
    </section>
    <VehiclesSection />
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 text-center mb-12">
          Fleet <span className="italic text-primary font-normal">Standards</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-200 rounded-sm">
            <h4 className="font-bold font-display text-xl mb-2 text-gray-900">Immaculate Condition</h4>
            <p className="text-sm text-gray-600 font-sans">Every vehicle is cleaned, detailed, and inspected before every trip. Late-model fleet with under 50,000 km on each car.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-sm">
            <h4 className="font-bold font-display text-xl mb-2 text-gray-900">Licensed & Insured</h4>
            <p className="text-sm text-gray-600 font-sans">$5M commercial liability coverage on all vehicles. GTAA-certified chauffeurs with clean driver abstracts and criminal record checks.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-sm">
            <h4 className="font-bold font-display text-xl mb-2 text-gray-900">Amenities Included</h4>
            <p className="text-sm text-gray-600 font-sans">Complimentary Wi-Fi, bottled water, phone chargers, and premium audio in every vehicle. Child seats available on request.</p>
          </div>
        </div>
      </div>
    </section>
    <CTABand />
  </AppLayout>
);

const ContactPage = () => (
  <GenericPage
    title="Contact Us"
    subtitle="Get in touch with our 24/7 dispatch team for immediate assistance, corporate accounts, or custom quotes."
  />
);

// ─── Markdown-based hub pages ─────────────────────────────────────────────────

const CarServiceHub = () => <HubPage hub="car-service" />;

const AirportsHub = () => {
  const content = getHubContent("local-airports");
  if (!content) return <NotFound />;
  return <ContentPage content={content} category="page" slug="local-airports" />;
};

const LocationsHub = () => (
  <GenericPage
    title="Service Locations"
    subtitle="Serving 16+ cities across the Greater Toronto Area and Southern Ontario — flat-rate door-to-door limo service."
  />
);

// ─── City service pages (use params) ─────────────────────────────────────────

function CityPage() {
  const params = useParams<{ city: string }>();
  const content = getCityContent(params.city ?? "");
  if (!content) return <NotFound />;
  return <ContentPage content={content} category="city" slug={params.city ?? ""} />;
}

function CorporateCityPage() {
  const params = useParams<{ city: string }>();
  const content = getCorporateContent(params.city ?? "");
  if (!content) return <NotFound />;
  return <ContentPage content={content} category="corporate" slug={params.city ?? ""} />;
}

function WeddingCityPage() {
  const params = useParams<{ city: string }>();
  const content = getWeddingContent(params.city ?? "");
  if (!content) return <NotFound />;
  return <ContentPage content={content} category="wedding" slug={params.city ?? ""} />;
}

function CarServiceCityPage() {
  const params = useParams<{ city: string }>();
  const content = getCarServiceContent(params.city ?? "");
  if (!content) return <NotFound />;
  return <ContentPage content={content} category="car-service" slug={params.city ?? ""} />;
}

function AirportDetailPage() {
  const params = useParams<{ slug: string }>();
  const content = getAirportContent(params.slug ?? "");
  if (!content) return <NotFound />;
  return <ContentPage content={content} category="airport" slug={params.slug ?? ""} />;
}

// ─── Utility pages (markdown) ─────────────────────────────────────────────────

const AboutPage = () => {
  const content = getPageContent("about-us");
  if (!content) return <NotFound />;
  return <ContentPage content={content} category="page" slug="about-us" />;
};

const FaqPage = () => {
  const content = getPageContent("faq-general");
  if (!content) return <NotFound />;
  return <ContentPage content={content} category="page" slug="faq-general" />;
};

const PrivacyPage = () => {
  const content = getPageContent("privacy-policy");
  if (!content) return <NotFound />;
  return <ContentPage content={content} category="page" slug="privacy-policy" />;
};

const TermsPage = () => {
  const content = getPageContent("terms-conditions-enhanced");
  if (!content) return <NotFound />;
  return <ContentPage content={content} category="page" slug="terms-conditions-enhanced" />;
};

const WhyChooseUsPage = () => {
  const content = getPageContent("why-choose-us");
  if (!content) return <NotFound />;
  return <ContentPage content={content} category="page" slug="why-choose-us" />;
};

// ─── Routes ───────────────────────────────────────────────────────────────────

function AppRoutes() {
  return (
    <Switch>
      {/* Home */}
      <Route path="/" component={HomeLight} />

      {/* Booking & Quote */}
      <Route path="/booking" component={Booking} />
      <Route path="/quote" component={Quote} />

      {/* Service hub pages */}
      <Route path="/airport" component={AirportHub} />
      <Route path="/corporate" component={CorporateHub} />
      <Route path="/wedding" component={WeddingHub} />
      <Route path="/car-service" component={CarServiceHub} />
      <Route path="/events" component={EventsHub} />
      <Route path="/hourly" component={HourlyHub} />
      <Route path="/tours" component={ToursHub} />
      <Route path="/fleet" component={FleetPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/locations" component={LocationsHub} />

      {/* Airport detail pages */}
      <Route path="/airports" component={AirportsHub} />
      <Route path="/airports/:slug" component={AirportDetailPage} />

      {/* City service pages — specific before hub */}
      <Route path="/corporate/:city" component={CorporateCityPage} />
      <Route path="/wedding/:city" component={WeddingCityPage} />
      <Route path="/car-service/:city" component={CarServiceCityPage} />
      <Route path="/locations/:city" component={CityPage} />

      {/* Utility pages */}
      <Route path="/about" component={AboutPage} />
      <Route path="/faq" component={FaqPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/why-choose-us" component={WhyChooseUsPage} />

      {/* 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppRoutes />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
