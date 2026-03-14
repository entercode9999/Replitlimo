import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AppLayout } from "@/components/layout/AppLayout";

export default function NotFound() {
  return (
    <AppLayout>
      <div className="flex items-center justify-center min-h-[60vh] bg-background">
        <div className="text-center">
          <h1 className="text-8xl font-display font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-sans font-semibold text-foreground mb-6">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link href="/">
            <Button size="lg">Return to Homepage</Button>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
}
