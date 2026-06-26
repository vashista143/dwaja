import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Bharath - Founder",
    image: "/founderc.png",
  },
  {
    id: 2,
    name: "Keshav Guptha -Cofounder",
    image: "/cofounderc.png",
  },
  {
    id: 3,
    name: "....",
    image: "/person3.jpg",
  },
  {
    id: 4,
    name: "....",
    image: "/person4.jpg",
  },
  {
    id: 5,
    name: "....",
    image: "/person5.jpg",
  },
];

const TeamSection = () => {
  return (
    <div>
    <h1 className="w-full text-center text-3xl font-bold mb-8 text-black">
          Our Team
        </h1>
    <div className="flex flex-wrap justify-center gap-8 py-10">
        
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="flex flex-col items-center"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-50 h-50 rounded-full object-cover border-4 border-gray-300"
          />

          <p className="mt-3 text-lg font-semibold text-center">
            {member.name}
          </p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TeamSection;