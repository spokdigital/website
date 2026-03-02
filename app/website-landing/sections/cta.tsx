import { ChevronRight, Zap, Star } from "lucide-react";
export default function CTASection() {
  return (
    <div className="w-full pt-8 pb-20 ">
      <div className="max-w-6xl container mx-auto">
        {/* CTA Card with Gradient Background */}
        <div className="relative overflow-hidden border border-red-100 rounded-3xl bg-gradient-to-br from-red-300/80 via-white to-red-300/80 px-12 py-16">
          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Badge */}
            <div className="inline-flex mb-5 items-center gap-3 bg-red-100 text-gray-800 px-5 py-2 rounded-full shadow-sm">
              {/* Stars */}
              <div className="flex items-center gap-1 ">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-primary stroke-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm font-medium">
                Rated <span className="font-bold">5.0</span> with{" "}
                <span className="font-bold">100+ reviews</span>
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-5xl md:text-6xl max-w-4xl mx-auto font-[500] font-Grostek text-gray-900 mb-3">
              Trusted by 100+ growing businesses
            </h2>

            {/* Subheading */}
            <p className="text-gray-600 text-lg mb-4 max-w-2xl mx-auto">
              High converting websites built in 14 days.
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
              <button className="px-6 py-3 text-gray-100 bg-gray-800 font-medium hover:text-gray-50 hover:scale-[1.01] rounded transition-colors">
                Get in touch
              </button>
              <button className="px-6 py-3 bg-primary hover:scale-[1.01] hover:bg-primary/90 text-white font-medium rounded  transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/30">
                Book a call
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-200/40 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-200/40 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
}
