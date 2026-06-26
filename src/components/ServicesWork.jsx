import {
  Paintbrush,
  Clapperboard,
  Search,
  ChartColumn,
  TrendingUp,
  Users,
} from "lucide-react";

const services = [
  {
    title: "GRAPHICS",
    icon: <Paintbrush size={34} />,
  },
  {
    title: "REELS\nVIDEOS",
    icon: <Clapperboard size={34} />,
  },
  {
    title: "SEARCHES &\nASSETS",
    icon: <Search size={34} />,
  },
];

const works = [
  {
    title: "TRENDS &\nAUDIENCES",
    icon: <ChartColumn size={34} />,
  },
  {
    title: "GROWTH\nMARKETING",
    icon: <TrendingUp size={34} />,
  },
  {
    title: "MARKETINGS &\nRETARGETING",
    icon: <Users size={34} />,
  },
];

const Card = ({ icon, title }) => (
  <div className="bg-white border border-gray-200 rounded-md p-2 flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow-md transition">
    <div className="text-[#D00000]">{icon}</div>

    <h3 className="text-center font-bold text-sm md:text-base whitespace-pre-line">
      {title}
    </h3>
  </div>
);

const ServicesWork = () => {
  return (
    <section className="py-5 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-7 md:gap-14">
          {/* OUR SERVICES */}
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-center mb-2 md:mb-4">
              OUR SERVICES
            </h2>

            <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
              {services.map((item, index) => (
                <Card
                  key={index}
                  icon={item.icon}
                  title={item.title}
                />
              ))}
            </div>
          </div>

          {/* OUR WORK */}
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-center mb-2 md:mb-4">
              OUR WORK
            </h2>

            <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
              {works.map((item, index) => (
                <Card
                  key={index}
                  icon={item.icon}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWork;