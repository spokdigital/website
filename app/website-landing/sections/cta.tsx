import { ChevronRight, Zap } from "lucide-react";
export default function CTASection() {
  return (
    <div className="w-full py-16 ">
      <div className="max-w-6xl container mx-auto">
        {/* CTA Card with Gradient Background */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-50 via-white to-red-100 px-12 py-16">
          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
              <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
                <Zap className="fill-white p-1" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                Automate with AI
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-[500] font-Grostek text-gray-900 mb-6">
              Start for free today.
            </h2>

            {/* Subheading */}
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Build AI agents in minutes to automate workflows, save
              <br />
              time, and grow your business.
            </p>

            {/* Features */}

            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
              <button className="px-6 py-3 text-gray-700 font-medium hover:text-gray-900 transition-colors">
                Get in touch
              </button>
              <button className="px-6 py-3 bg-[#ff4040] hover:bg-red-400 text-white font-medium rounded-lg  transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/30">
                Try for free
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
