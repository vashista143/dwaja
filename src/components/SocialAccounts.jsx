import { Facebook, Instagram, Twitter } from "lucide-react";

const socialAccounts = [
  {
    title: "FACEBOOK PAGE",
    icon: <Facebook size={40} />,
    points: [
      "Leader Activities Campaign",
      "Live Streaming Special Day Wishes",
      "Dissemination on Groups",
      "Building Followers Network",
    ],
  },
  {
    title: "INSTAGRAM ACCOUNT",
    icon: <Instagram size={40} />,
    points: [
      "Leader Activities Campaign Live Streaming",
      "Special Day Wishes",
      "Building Followers Network Reels (Video)",
    ],
  },
  {
    title: "TWITTER ACCOUNT",
    icon: <Twitter size={40} />,
    points: [
      "Leader Activities Campaign Live Streaming",
      "Special Day Wishes",
      "Building Followers Network",
    ],
  },
];

export default function SocialAccounts() {
  return (
    <section className="py-5 px-10">
      {/* Heading */}
      <div className="text-center mb-2">
        <h2 className="text-4xl font-bold uppercase text-[#B00000]">
          Social Media Accounts
        </h2>

        <p className="text-lg font-semibold text-[#0B1F4D] mt-2 uppercase">
          Account Creation, Monitoring and Maintenance
          <span className="text-[#B00000]">
        
          </span>
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 px-10 gap-6">
        {socialAccounts.map((account, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 relative"
          >
            {/* Icon */}
            <div className="absolute -left-6 top-6">
              <div className="w-20 h-20 rounded-full bg-white shadow-xl border flex items-center justify-center text-[#0B1F4D]">
                {account.icon}
              </div>
            </div>

            {/* Content */}
            <div className="ml-14">
              <h3 className="text-xl font-bold text-[#0B1F4D]">
                {account.title}
              </h3>

              {/* Underline */}
              <div className="flex items-center mt-2 mb-4">
                <div className="h-[3px] w-14 bg-[#0B1F4D]" />
                <div className="w-2 h-2 rounded-full bg-red-600 mx-1" />
                <div className="h-[3px] w-14 bg-red-600" />
              </div>

              <ul className="space-y-3">
                {account.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 text-gray-700"
                  >
                    <span className="text-red-600 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}