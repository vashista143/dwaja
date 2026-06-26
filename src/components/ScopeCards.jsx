import {
  ClipboardList,
  ThumbsUp,
  Megaphone,
} from "lucide-react";

const services = [
  {
    title: "Research",
    icon: <ClipboardList size={32} />,
    border: "border-b-8 border-[#0B1F4D]",
    points: [
      "Detailed Surveys",
      "Tracking opposition activities and analysis",
      "Event feedback",
      "Telephonic Survey",
      "Swing Voters Analysis",
    ],
  },
  {
    title: "Social Media",
    icon: <ThumbsUp size={32} />,
    border: "border-b-8 border-[#B00000]",
    points: [
      "Overall management of official social media handles",
      "Management of surrogate pages and accounts",
      "Content creation (Political & Neutral)",
      "Narrative building and In-Depth research",
    ],
  },
  {
    title: "Campaigning",
    icon: <Megaphone size={32} />,
    border: "border-b-8 border-[#0B1F4D]",
    points: [
      "Public Events",
      "Rallies",
      "Town Hall Meeting",
      "Milestone events and activities planned to engage with the community",
    ],
  },
];

export default function ScopeCards() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-3xl shadow-xl pt-12 pb-8 px-6 ${service.border}`}
          >
            {/* Floating Icon */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-20 h-20 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center text-[#071B5B]">
                {service.icon}
            </div>
            </div>

            {/* Header */}
            <div className="bg-[#0B1F4D] text-white rounded-t-3xl -mx-6 px-6 py-5 text-center">
              <h3 className="text-xl font-bold">
                {service.title}
              </h3>
            </div>

            {/* Content */}
            <ul className="mt-4 space-y-4">
              {service.points.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="text-red-600 mt-1">●</span>
                  <span className="text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}