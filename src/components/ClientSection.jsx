import React from 'react'
const leaders = [
  {
    id: 1,
    image: "/mohinder.png",
    name: "Mohinder Bhagat",
    designation:
      "Minister of Defence Services Welfare, Freedom Fighters & Horticulture, MLA Jalandhar West, Aam Aadmi Party - Punjab",
  },
  {
    id: 2,
    image: "/sheetal.png",
    name: "Sheetal Angural",
    designation: "Former MLA Jalandhar West, Punjab",
  },
  {
    id: 3,
    image: "/mohammed.png",
    name: "Mohammed Moquim",
    designation:
      "Former Member of Odisha Legislative Assembly (2019-2024)",
  },
  {
    id: 4,
    image: "/sarabjit.png",
    name: "Sarabjit Singh Khalsa",
    designation: "Shiromani Akali Dal (Amritsar)",
  },
  {
    id: 5,
    image: "/pavankumar.png",
    name: "Pawan Kumar",
    designation: "Movie Director",
  },{
    id: 6,
    image: "/sushil.png",
    name: "Sushil Sharma",
    designation:
      "Disstt. President Jalandhar (BJP)",
  },
  {
    id: 7,
    image: "/amarjeet.png",
    name: "Amarjeet Singh Amri",
    designation: "Disstt. President Jalandhar  Rural (BJP)",
  },
];
const subleaders = [
  {
    id: 1,
    image: "/rajeev.png",
    name: "Rajeev Dhingra",
    designation:
      "Sr. BJP Executive Member & Ex General Sec. BJP SC Morcha, Ex President BJP Jalandhar",
  },
  {
    id: 2,
    image: "/ashok.png",
    name: "Ashok Duggal",
    designation: "Yuva Morcha BJP",
  },
  {
    id: 3,
    image: "/bhagwant.png",
    name: "Bhagwant Prabhakar",
    designation: "BJP Jalandhar",
  },
  {
    id: 4,
    image: "/ajay.png",
    name: "Ajay Chopra",
    designation: "BJP Jalandhar",
  },
  {
    id: 5,
    image: "/hitesh.png",
    name: "Hitesh Syal",
    designation: "BJP Jalandhar",
  },
  {
    id: 6,
    image: "/davinder.png",
    name: "Davinder Bhardwaj",
    designation: "BJP Jalandhar West",
  },
  {
    id: 7,
    image: "/sourabh.png",
    name: "Sourabh Seth",
    designation: "Aam Aadmi Party, Jalandhar",
  },
  {
    id: 8,
    image: "/kaku.png",
    name: "Kaku Ahluwalia",
    designation: "Aam Aadmi Party",
  },
  {
    id: 9,
    image: "/rajeesh.png",
    name: "Rajeesh Kapoor",
    designation:
      "BJP Jalandhar City (General Secretary)",
  },
  {
    id: 10,
    image: "/nps.png",
    name: "NPS Dhillon",
    designation: "BJYM Jalandhar",
  },
  {
    id: 12,
    image: "/kumarb.png",
    name: "Kumar Brajesh Sharma",
    designation: "spokesperson BJP Jalandhar",
  },
  {
    id: 13,
    image: "/surya.png",
    name: "Surya Mishra",
    designation: "Founder Member NGO Nayi Disha Nayi Soch Punjab",
  },
];
const LeaderCard = ({ image, name, designation }) => {
  return (
    <div className="w-64 flex flex-col items-center text-center ">
      {/* Image */}
      <div className="w-20 h-28 md:w-40 md:h-48 overflow-hidden rounded-t-full ">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-0 md:mt-3 max-w-[180px]">
        <h3 className="font-semibold text-[5px] md:text-lg leading-tight">
           {name}
        </h3>

        <p className="text-[10px] md:text-sm text-black mt-2 leading-relaxed">
          {designation}
        </p>
      </div>
    </div>
  );
};

const SubLeaderCard = ({ image, name, designation }) => {
  return (
    <div className="flex-shrink-0 flex flex-col items-center text-center">
      {/* Image */}
<div className="w-16 h-20 overflow-hidden rounded-t-full">
            <img
          src={image}
          alt={name}
          className="w-16 h-20 object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-1 w-24">
        <h3 className="font-semibold text-xs leading-tight">
          {name}
        </h3>

        <p className="text-xs text-black mt-2 leading-relaxed">
          {designation}
        </p>
      </div>
    </div>
  );
};
const ClientPeople = () => {
  return (
    <section className=" min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-wrap justify-center gap-y-2 gap-x-10">
        {leaders.map((leader) => (
        <LeaderCard
            key={leader.id}
            image={leader.image}
            name={leader.name}
            designation={leader.designation}
        />
        ))}
        </div>
      <div className="flex justify-center gap-x-1 overflow-x-auto py-4">
  {subleaders.map((subleader) => (
    <SubLeaderCard
      key={subleader.id}
      image={subleader.image}
      name={subleader.name}
      designation={subleader.designation}
    />
  ))}
</div>

      </div>
    </section>
  );
};


export default ClientPeople
