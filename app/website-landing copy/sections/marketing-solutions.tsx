import {
  LayoutDashboard,
  RefreshCw,
  Smile,
  Mail,
  ArrowRight,
} from "lucide-react";
export default function MarketingSolutions() {
  const cards = [
    {
      title: ["Content", "Marketing"],
      description: [
        "Create and distribute valuable",
        "content to attract and engage",
      ],
      icon: <LayoutDashboard className="size-8" />,
    },
    {
      title: ["Marketing", "Automation"],
      description: [
        "Streamline marketing processes",
        "and deliver experiences at scale",
      ],
      tilted: true,
      icon: <RefreshCw className="size-8" />,
    },
    {
      title: ["Influencer", "Marketing"],
      description: [
        "Partner with trusted voices to",
        "amplify your brand's reach",
      ],
      icon: <Smile className="size-8" />,
    },
    {
      title: ["Email", "Marketing"],
      description: [
        "Create and distribute valuable",
        "content to attract and engage",
      ],
      icon: <Mail className="size-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20">
          <h1 className="text-5xl lg:text-6xl font-[500] text-gray-100 font-Cormorant leading-tighter">
            Solutions Tailored for
            <br />
            <span className="font-Grostek text-[#FF4040]">Your Growth</span>
          </h1>

          <div className="lg:text-right">
            <p className="text-gray-400 text-sm mb-4 max-w-xs">
              We fuel bold ideas, driving them
              <br />
              forward with sharp strategy
            </p>

            <button className="bg-[#ff4040] text-sm lg:text-md flex items-center gap-2 text-slate-50 px-6 py-3 rounded-full font-medium   transition">
              Get Started <ArrowRight />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group  lg:h-[350px] flex flex-col relative border border-gray-500 rounded-xl p-4 transition-all duration-500  transform hover:-rotate-3 hover:scale-105 hover:bg-gray-50"
            >
              {/* Top Content */}
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center group-hover:text-slate-950 justify-center mb-4">
                  {card.icon}
                </div>

                <h3 className="text-2vw lg:text-3xl group-hover:text-slate-900 font-medium">
                  {card.title.map((t, idx) => (
                    <span key={idx}>
                      {t}
                      <br />
                    </span>
                  ))}
                </h3>
              </div>

              {/* Bottom Description */}
              <p className="text-gray-400 group-hover:text-slate-800 mt-auto text-sm leading-relaxed">
                {card.description.map((d, idx) => (
                  <span key={idx}>
                    {d}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
