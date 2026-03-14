import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { HomeLight } from "@/pages/HomeLight";
import { Booking } from "@/pages/Booking";
import { Quote } from "@/pages/Quote";
import { GenericPage } from "@/pages/GenericPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

const makePage = (title: string, subtitle: string) => () => (
  <GenericPage title={title} subtitle={subtitle} />
);

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomeLight} />
      <Route path="/booking" component={Booking} />
      <Route path="/quote" component={Quote} />

      <Route path="/airport" component={makePage("Airport Transfers", "Flat-rate luxury transportation to Pearson YYZ, Billy Bishop, and Buffalo.")} />
      <Route path="/corporate" component={makePage("Corporate Car Service", "Monthly billing, dedicated accounts, and executive roadshows.")} />
      <Route path="/wedding" component={makePage("Wedding Transportation", "Immaculate vehicles and coordinated logistics for your special day.")} />
      <Route path="/events" component={makePage("Events & Concerts", "Arrive in style and skip the parking hassle at major GTA venues.")} />
      <Route path="/hourly" component={makePage("Hourly Hire", "Flexible directed service with a dedicated chauffeur at your disposal.")} />
      <Route path="/tours" component={makePage("Tours & City Transfers", "Niagara wine tours and comfortable inter-city travel across Ontario.")} />
      <Route path="/fleet" component={makePage("Our Fleet", "Explore our collection of Executive Sedans, SUVs, and Sprinter Vans.")} />
      <Route path="/locations" component={makePage("Service Locations", "Serving 15+ cities across the Greater Toronto Area and Southern Ontario.")} />
      <Route path="/contact" component={makePage("Contact Us", "Get in touch with our 24/7 dispatch team for immediate assistance.")} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
