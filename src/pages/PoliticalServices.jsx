import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScopeCards from "../components/ScopeCards";
import SocialAccounts from "../components/SocialAccounts";
import { DoorOpen,    MapPin} from "lucide-react";
import { Users, UserStar, Megaphone, MapPinHouse, Landmark, UsersRound, ChartNoAxesCombined } from "lucide-react";
const PoliticalServices = () => {

const campaigns = [
  {
    icon: <DoorOpen size={36} color="white" />,
    bg: "bg-red-600",
    title: "DOOR-TO-DOOR (D2D) CAMPAIGN",
    titleColor: "text-red-600",
    description:
      "Directly connect with every household and understand their needs.",
  },
  {
    icon: <Users size={36} color="white" />,
    bg: "bg-[#071B5B]",
    title: "INFLUENCER & INTELLECTUAL MEETS",
    titleColor: "text-[#071B5B]",
    description:
      "Engage influencers, professionals and thought leaders for valuable insights.",
  },
  {
    icon: <MapPin size={36} color="white" />,
    bg: "bg-red-600",
    title: "WARD-LEVEL AREA VISITS",
    titleColor: "text-red-600",
    description:
      "Regular visits to key areas in every ward to build strong local connect.",
  },
  {
    icon: <Megaphone size={36} color="white" />,
    bg: "bg-[#071B5B]",
    title:
      "SPECIAL CAMPAIGNS - SECTOR-SPECIFIC PROGRAMS & RALLIES",
    titleColor: "text-[#071B5B]",
    description:
      "Strengthening the image through impactful and targeted campaigns.",
  },
];
const headingRef = useRef(null);
const paraRef = useRef(null);
    const decisions = [
  {
    number: 1,
    title: "ESTABLISH THE LEADER",
    description: "Establish as a leader in the business community",
    color: "#B00000",
    icon: <UserStar size={50} color="white" />,
  },
  {
    number: 2,
    title: "INCREASE THE OUTREACH",
    description: "Build a robust grassroots structure",
    color: "#0B3D91",
    icon: <Users size={50} color="white" /> ,
  },
  {
    number: 3,
    title: "BECOME THE VOICE",
    description: "Be vocal about local issues",
    color: "#6A1B9A",
    icon: <Megaphone size={50} color="white" /> ,
  },
  {
    number: 4,
    title: "WIN THE STATE",
    description: "Form a stable government in upcoming elections",
    color: "#4CAF50",
    icon: <MapPinHouse size={50} color="white" /> ,
  },
];

useEffect(() => {
  gsap.to(headingRef.current, {
    marginTop: "1rem",
    scale: 0.375,
    duration: 2,
    ease: "power2.inOut",
  });

  gsap.fromTo(
    paraRef.current,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: 3,
    }
  );
}, []);

  return (
    <div className="relative min-h-screen">
      <div className="flex flex-col items-center">
        <h1
          ref={headingRef}
          className="text-8xl font-bold text-[#B00000] text-center mt-[35vh]"
        >
          Political Services
        </h1>

        <p className="max-w-4xl text-center text-md px-6 font-semibold"   ref={paraRef}
>
          Dhwaja Flare empowers political leaders through data-driven
          research, strategic campaigning, grassroots outreach, and digital
          media management, creating impactful connections with voters and
          delivering measurable electoral success across diverse voter
          communities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="flex flex-col items-center">
            <h3 className=" text-4xl font-bold">
            <span className="text-[#0B1F4D]">Scope</span>{" "}
            <span className="text-[#B00000]">of Work</span>
            </h3>
            <img src="/politicalservicesimage1.png" alt="Political Services" className="w-full h-auto mt-4" />
            </div>
            <div className="flex flex-col items-center">
                <ScopeCards />
            </div>
        </div>
        <div className="flex flex-col items-center mt-10">
            <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-[#0B1F4D] mt-10">
                Digital Social Media Campaign
            </h3>
            <div className="mt-2 flex gap-0.5">
                <div className="h-[3px] w-50 bg-[#0B1F4D]" />
                <div className="h-[3px] w-50 bg-red-600" />
            </div>
            </div>
            <img src="/politicalservicesimage2.png" alt="Digital Social Media Campaign" className="w-[50%] h-auto mt-4" />
            <SocialAccounts className="" />
            <div className="relative w-[800px] mx-auto my-10">
            <div
            className="bg-[#071B5B] h-24 flex justify-center items-end pb-1"    style={{
                clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
                }}
            >
                <h2 className="text-white text-3xl font-bold">
                The Four Strategic Decisions
                </h2>
            </div>
            </div>  
            <div className="max-w-7xl mx-auto pb-3 px-6">

                {/* Top Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {decisions.map((item) => (
                    <div
                        key={item.number}
                        className="flex flex-col items-center text-center relative"
                    >
                        {/* Top Icon */}
                        <div
                        className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                        style={{ backgroundColor: item.color }}
                        >
                        {item.icon}
                        </div>

                        {/* Title */}
                        <h3
                        className="font-bold text-xl"
                        style={{ color: item.color }}
                        >
                        {item.number}. {item.title}
                        </h3>

                        {/* Decorative Line */}
                        <div className="flex items-center my-2">
                        <div
                            className="h-[2px] w-12"
                            style={{ backgroundColor: item.color }}
                        />
                        <div
                            className="w-2 h-2 rounded-full mx-1"
                            style={{ backgroundColor: item.color }}
                        />
                        <div
                            className="h-[2px] w-12"
                            style={{ backgroundColor: item.color }}
                        />
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 font-semibold mb-6 max-w-[220px]">
                        {item.description}
                        </p>
                    </div>
                    ))}
                </div>

                {/* Bottom Info Boxes */}
                <div className=" space-y-4">

                    <div className="border rounded-xl p-4 flex items-center gap-4 border-red-500">
                    <div className="bg-red-600 p-3 rounded-lg">
                        <UsersRound size={25} color="white" />
                    </div>

                    <h4 className="font-bold text-red-600">
                        PROFESSIONAL VOLUNTEER NETWORK:
                    </h4>

                    <p className="font-semibold">
                        Use youth power to take the brand and candidate into people's homes
                    </p>
                    </div>

                    <div className="border rounded-xl p-4 flex items-center gap-4 border-[#0B3D91]">
                    <div className="bg-[#0B3D91] p-3 rounded-lg">
                        <Megaphone size={25} color="white" />
                    </div>

                    <h4 className="font-bold text-[#0B3D91]">
                        MASS PUBLICITY:
                    </h4>

                    <p className="font-semibold">
                        Use digital and traditional media, telephony, and OOH spaces to amplify campaign messages
                    </p>
                    </div>

                    <div className="border rounded-xl p-4 flex items-center gap-4 border-purple-600">
                    <div className="bg-purple-600 p-3 rounded-lg">
                        <ChartNoAxesCombined size={25} />
                    </div>

                    <h4 className="font-bold text-purple-600">
                        GRASSROOTS INTELLIGENCE & ANALYTICS:
                    </h4>

                    <p className="font-semibold">
                        Use surveys, feedback, and campaign data to gauge sentiment and optimize strategy
                    </p>
                    </div>

                </div>
                </div>
        </div>
        <div className="flex flex-col items-center mt-5">
            <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-[#0B1F4D] mt-10">
                Public Outreach Campaigns
            </h3>
            <div className="mt-2 flex gap-0.5">
                <div className="h-[3px] w-50 bg-[#0B1F4D]" />
                <div className="h-[3px] w-50 bg-red-600" />
            </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div className="space-y-6">
          {campaigns.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 pb-3 border-b border-gray-300"
            >
              {/* Icon */}
              <div
                className={`w-15 h-15 rounded-full ${item.bg} flex items-center justify-center flex-shrink-0`}
              >
                {item.icon}
              </div>

              {/* Vertical Line */}
              <div className="w-[2px] bg-gray-300"></div>

              {/* Text */}
              <div>
                <h3
                  className={`font-bold text-lg ${item.titleColor}`}
                >
                  {item.title}
                </h3>

                <p className="text-gray-700 mt-1 text-m">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/campaign-activities.png"
            alt="Campaign Activities"
            className="w-full max-w-xl object-contain"
          />
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticalServices;