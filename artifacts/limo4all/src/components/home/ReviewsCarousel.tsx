import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Jonathan M.",
    role: "Frequent Business Traveler — Toronto",
    text: "I travel weekly for business and Limo4All handles all my airport transfers. The Escalade is always spotless and their flight tracking is flawless — they are always waiting when I land."
  },
  {
    name: "Sarah & Michael T.",
    role: "Wedding Clients — Oakville",
    text: "Booked the Suburban for our wedding day and it was absolutely perfect. The chauffeur was early, the vehicle was immaculate. Made our day completely stress-free."
  },
  {
    name: "David K.",
    role: "Corporate Account — Mississauga",
    text: "Our corporate account has been running two years. Consistent, professional, always on time. The monthly invoicing makes expensing seamless. Highly recommended for any business."
  },
  {
    name: "Amanda R.",
    role: "Group Tour — Hamilton",
    text: "Took the Sprinter for a group of 10 to Niagara. Driver was knowledgeable, punctual and professional the entire day. Best group transport experience we've had."
  }
];

export function ReviewsCarousel() {
  return (
    <section className="py-24 bg-card border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              What Our <span className="italic text-primary font-normal">Clients Say</span>
            </h2>
            <div className="flex flex-wrap gap-6 text-sm text-white/70 font-sans">
              <span className="flex items-center gap-2"><Star className="w-4 h-4 text-primary" /> GTAA Licensed</span>
              <span className="flex items-center gap-2"><Star className="w-4 h-4 text-primary" /> Background-Checked</span>
              <span className="flex items-center gap-2"><Star className="w-4 h-4 text-primary" /> 2,000+ 5-Star Rides</span>
            </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 p-6 rounded-sm text-center min-w-[200px]">
            <div className="font-display text-5xl font-bold text-primary leading-none mb-2">4.9</div>
            <div className="flex justify-center gap-1 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />)}
            </div>
            <div className="font-caps text-[10px] uppercase tracking-widest text-white/50">500+ Google Reviews</div>
          </div>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-card to-transparent z-10" />
        
        <div className="py-4 animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] flex w-max gap-6 px-6">
          {[...REVIEWS, ...REVIEWS].map((review, i) => (
            <div key={i} className="w-[400px] bg-white/5 border border-white/10 p-8 rounded-sm shrink-0 flex flex-col hover:border-primary/50 transition-colors">
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-yellow-500 text-yellow-500" />)}
              </div>
              <blockquote className="text-white/70 font-sans font-light italic leading-relaxed mb-8 flex-1">
                "{review.text}"
              </blockquote>
              <div className="pt-6 border-t border-white/10 mt-auto">
                <strong className="block font-display text-lg text-white mb-1">{review.name}</strong>
                <span className="font-caps text-[10px] uppercase tracking-widest text-primary">{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
