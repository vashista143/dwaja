// ClientsSection.jsx
import { Phone } from "lucide-react";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const clients = [
  {
    logo:
      "https://media.licdn.com/dms/image/v2/D4E0BAQE7VdRrpAo3Wg/company-logo_100_100/B4EZsDkrlwGUAQ-/0/1765291507141/ceela_sports_logo?e=2147483647&v=beta&t=H_Up5lYwAO_H8qmVEFY-7EdEnsViE9A0CmcgK3tcDh0",
    text:
      "Dhwaja Flare's digital campaigns significantly boosted our audience engagement and brand visibility across multiple platforms.",
    author: "Ceela Sports",
  },
  {
    logo:
      "https://veernayak8.wordpress.com/wp-content/uploads/2023/08/breaking-news-made-with-postermywall-recovered.png",
    text:
      "Their content strategy and media outreach helped us reach a wider audience and establish a stronger online presence.",
    author: "Veer Nayak Media",
  },
  {
    logo:
      "https://nitisabha.com/wp-content/uploads/2023/07/cropped-RAIRAKHOL-1_page-0001-e1691589732329-150x97.jpg",
    text:
      "Working with Dhwaja Flare enhanced our public communication efforts and improved our campaign effectiveness.",
    author: "Niti Sabha",
  },
  {
    logo:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAADVCAMAAACMuod9AAAAh1BMVEX/////AAD/vr7/gYH/amr/SUn/0ND/RUX/9/f/1dX/3Nz/h4f/paX/zc3/u7v/ZWX/dnb/JSX/rKz/HR3/UVH/xcX/W1v/trb/cnL/6en/enr/X1//w8P/mpr/9PT/q6v/kpL/5OT/VFT/ODj/oqL/i4v/Fhb/Pj7/kJD/LCz/Ojr/JCT/l5dIKgnJAAAE3UlEQVR4nO3Yi3KiSBQGYFoQFQQVRUCFiNeQ5P2fb/uc042QSXZrYirZpP6vahJosem/b5BxHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+KkC77tb8IVOavjdTfg6qVKr727D14l+atrxuKqKoq4DMhG+EXWl6W43GMRxnGVZ/FPTdo3HRR1MojROpuVj6O7DTe5tD8PrsVmqntNvSNui8a4lePZwKvfn0N3kuTcztolSh+9u49fJlGrGn1ifPyDp7cSUT2J9HNOdqnjQEVfBLt1VujyIkweR+XSdfBzI1/VhVMSDuJBTXYU9pLtVuorAqTsVR4W57HYjXTLn6VzrWyTZLijuT7uVBRLxyUwfma6U4pBy95dS5OofgVMseqUD+w1V2a8/jfWPnM8i+sBtD88TPj31ahhWbRVtk0Z8MDmbksts6t+X1jM1je2JpH25tf1VWj/ktLN+qWqbOrRpR1wdn7ncVj7M9VHhc0dO+zWM/kw75IPUeW6UOup/anma3Jv2QsO0tU3htDQsDSXe6Bm7Wq/XPAX07/UqkLR0fvU2ZK1sCY/3qU2r3w3UwJzxJXK4cm5pt7IdcayCP8wSMS1s2p3+Wn14qopQXe6czZS2oDqzbtqQC47cBLGw4+S4NtvI1rHnAdA/ZpRP1TatY3ox0PfQ9yn1oX6AqriT1m5BdEOfrne7jZO0A+6mF33TwC6UO9Iq2vo4l01L8ReyxuxL+RtpQ1tHxBEUPS2ohqZN+6i4eaUOrfvhqsvXXM0tbdWpgjusmW3ZOm/T7qQND7qF1aXt4o+n5b1qdEs7N1Pwauffm2n3tg6fZwLPUeci3XDh+mp9knA104r7s5LR+zOtz3fsLtumTTs4yCMjXNI4TO9PS+tUvXDKsQztE31IPb5+N+3Z1jHppJ3IBiNpaVMdcXUBLYtEjw9339tpd5x2KXgQJW2cX+Wi5Zn+TrhnLpt9k58RtStp+/vt5L20ua1jYAeG9mPa2y7Os6RNKFDGX32kjtPpj47zxrrN/mXdZiEveVr/erV5ufNx9qFD28RxyydBL6x5UX0jrSp9frXPFtwnJi1Pf28haWnOnNfcMdSfO/3voZc2ydieO5s3uvYvhqpNS8u/OT6NVmpx2HrKa4XpB9PyBqz4ZEU33czJplHmzeN12lG/S/T8UmaXLkzJyFZPk9FpH6bjXtqOy6vnbdam3XeLR72Zt/m7tO3rU22+z4PQ2I/pkUJzj3cfKdpw2rjf1JybylfKDi9bsKwQeY4d7IVS+vpdSm/J76RNym7xddC7KvmrtFPXNf0Tb1zilLokaj8/u+68lt9mST3kc0+3PnK3I9lQmuuc7qkv2MsVJVckJ1wp72c7OtzwFh948zxxUrkhC+llwukUuBvfpp32JgENRBH4aVKe8+vFdPCvIGlPST+tN9sers3FnN/3uvF/Imlfeqvm2J/vKvrvan4ISfuY/pl2NZ1URXB6preE30LShkU37cLpDuhJ/pz5FYZmsvIL2nE1L8vTaaofD521OlHf17xPZtKq1P6NvVx5iWNf3UUavPftn+Zqp28WtTN57ZT9iz7z/60AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4Kv9A5bEQv7YVOClAAAAAElFTkSuQmCC",
    text:
      "The team's strategic planning and execution delivered measurable growth and improved audience trust.",
    author: "Rome Productions",
  },
  {
    logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_SziAJfoUJO2rdQsPBUGoiTysb10kuLHQ3Bbq0qmrw&s=10",
    text:
      "Dhwaja Flare helped us strengthen our digital identity with impactful branding and consistent engagement.",
    author: "TSM",
  },
  {
    logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtmN7bkx2Q8NwG8JbJ3qPGD6GSbS-LUyUVswF7XmUTA&s",
    text:
      "Their creative campaigns and audience insights played a key role in expanding our reach.",
    author: "Filmbook",
  },
];
const ClientsSection = () => {

const [touchStart, setTouchStart] = useState(null);
const [touchEnd, setTouchEnd] = useState(null);
const minSwipeDistance = 50;

const onTouchStart = (e) => {
  setTouchEnd(null);
  setTouchStart(e.targetTouches[0].clientX);
};

const onTouchMove = (e) => {
  setTouchEnd(e.targetTouches[0].clientX);
};

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return;

  const distance = touchStart - touchEnd;

  const isLeftSwipe = distance > minSwipeDistance;
  const isRightSwipe = distance < -minSwipeDistance;

  if (isLeftSwipe && mobileIndex < clients.length - 1) {
    nextMobileSlide();
  }

  if (isRightSwipe && mobileIndex > 0) {
    prevMobileSlide();
  }
};

  const cardsPerView = 4;
  const [desktopIndex, setDesktopIndex] = useState(0);
const [mobileIndex, setMobileIndex] = useState(0);

const nextMobileSlide = () => {
  if (mobileIndex < clients.length - 1) {
    setMobileIndex((prev) => prev + 1);
  }
};

const prevMobileSlide = () => {
  if (mobileIndex > 0) {
    setMobileIndex((prev) => prev - 1);
  }
};

const nextSlide = () => {
  if (desktopIndex + cardsPerView < clients.length) {
    setDesktopIndex(desktopIndex + cardsPerView);
  }
};

const prevSlide = () => {
  if (desktopIndex - cardsPerView >= 0) {
    setDesktopIndex(desktopIndex - cardsPerView);
  }
};

 const visibleClients = clients.slice(
  desktopIndex,
  desktopIndex + cardsPerView
);
  return (
    <section className="py-5 md:py-12 px-4">
      <div className="hidden max-w-7xl mx-auto md:grid md:grid-cols-[2fr_1fr] gap-8">
        
        {/* Clients */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-8">
            CLIENTS
          </h2>

          <div className="relative flex items-center">
  {/* Left Arrow */}
  <button
    onClick={prevSlide}
    disabled={desktopIndex === 0}
    className="absolute -left-5 z-10 bg-red-700 text-white p-2 rounded-full disabled:opacity-50"
  >
    <ChevronLeft size={18} />
  </button>

  {/* Cards */}
  <div className="grid md:grid-cols-4 gap-4 w-full">
    {visibleClients.map((client, index) => (
      <div
        key={index}
        className="bg-white border rounded-md p-4 shadow-sm text-center min-h-[250px] flex flex-col"
      >
        <img
          src={client.logo}
          alt="client logo"
          className="h-23 w-25 mx-auto mb-4 object-contain"
        />

        <p className="text-xs text-gray-600 mb-4 flex-grow">
          "{client.text}"
        </p>

        <p className="text-sm font-semibold">
          - {client.author}
        </p>
      </div>
    ))}
  </div>
  <button
    onClick={nextSlide}
    disabled={desktopIndex + cardsPerView >= clients.length}
    className="absolute -right-5 z-10 bg-[#D00000] text-white p-2 rounded-full disabled:opacity-50"
  >
    <ChevronRight size={18} />
  </button>
</div>

          <div className="flex justify-center gap-2 mt-6">
  {Array.from({
    length: Math.ceil(clients.length / cardsPerView),
  }).map((_, index) => (
    <button
      key={index}
      onClick={() => setDesktopIndex(index * cardsPerView)}
      className={`w-2 h-2 rounded-full ${
        desktopIndex / cardsPerView === index
          ? "bg-[#D00000]"
          : "bg-gray-300"
      }`}
    />
  ))}
</div>
        </div>

        {/* Contact Form */}
        <div id="contact-section" className="bg-gradient-to-r from-[#630101] to-[#b00000] rounded-md px-6 py-5 text-white max-w-md">
  <h2 className="text-3xl font-bold text-center mb-5">
    CONTACT US
  </h2>

  {/* Name & Email */}
  <div className="grid grid-cols-2 gap-3 mb-3">
    <div>
      <label className="block text-xs mb-1">Name</label>
      <input
        type="text"
        className="w-full h-8 bg-white rounded px-2 text-black text-sm outline-none"
      />
    </div>

    <div>
      <label className="block text-xs mb-1">Email</label>
      <input
        type="email"
        className="w-full h-8 bg-white rounded px-2 text-black text-sm outline-none"
      />
    </div>
  </div>
  <div className="mb-4">
      <label className="block text-xs mb-1">Contact no.</label>
      <input
        type="number"
        className="w-full h-8 bg-white rounded px-2 text-black text-sm outline-none"
      />
    </div>

  {/* Message */}
  <div className="mb-4">
    <textarea
      rows="4"
      placeholder="Message"
      className="w-full bg-white rounded p-2 text-black text-sm outline-none resize-none"
    />
  </div>

  {/* Footer */}
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
  <Phone size={16} />
  <p className="font-semibold text-sm">+91 93561 06000</p>
</div>
    
    <button className="bg-[#A40411] hover:bg-[#8d0310] px-5 py-2 text-xs font-semibold rounded">
      CONTACT US
    </button>
  </div>
</div>

      </div>
      <div className="md:hidden max-w-7xl mx-auto">

    <h2 className="text-3xl font-bold text-center mb-2 md:mb-6">
      CLIENTS
    </h2>

    <div className="relative overflow-hidden mb-10">
      <div
  className="flex transition-transform duration-500"
  style={{
    transform: `translateX(-${mobileIndex * 92}%)`,
  }}
  onTouchStart={onTouchStart}
  onTouchMove={onTouchMove}
  onTouchEnd={onTouchEnd}
>
        {clients.map((client, index) => (
          <div
            key={index}
            className="min-w-[90%] mr-4 bg-white border rounded-md p-6 shadow-sm text-center min-h-[280px] flex flex-col"
          >
            <img
              src={client.logo}
              alt=""
              className="h-24 w-40 md:w-24 mx-auto mb-1 md:mb-4 object-contain"
            />

            <p className="text-sm text-gray-600 flex-grow">
              "{client.text}"
            </p>

            <p className="font-semibold mt-1 md:mt-4">
              - {client.author}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={prevMobileSlide}
        disabled={mobileIndex === 0}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#D00000] text-white p-2 rounded-full"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={nextMobileSlide}
        disabled={mobileIndex === clients.length - 1}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#D00000] text-white p-2 rounded-full"
      >
        <ChevronRight size={18} />
      </button>
    </div>

    {/* Mobile contact form below */}
    <div id="contact-section" className="bg-gradient-to-r from-[#630101] to-[#b00000] rounded-md px-6 py-5 text-white max-w-md">
  <h2 className="text-3xl font-bold text-center mb-5">
    CONTACT US
  </h2>

  {/* Name & Email */}
  <div className="grid grid-cols-2 gap-3 mb-3">
    <div>
      <label className="block text-xs mb-1">Name</label>
      <input
        type="text"
        className="w-full h-8 bg-white rounded px-2 text-black text-sm outline-none"
      />
    </div>

    <div>
      <label className="block text-xs mb-1">Email</label>
      <input
        type="email"
        className="w-full h-8 bg-white rounded px-2 text-black text-sm outline-none"
      />
    </div>
  </div>

  {/* Message */}
  <div className="mb-4">
    <textarea
      rows="4"
      placeholder="Message"
      className="w-full bg-white rounded p-2 text-black text-sm outline-none resize-none"
    />
  </div>

  {/* Footer */}
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
  <Phone size={16} />
  <p className="font-semibold text-sm">+91 93561 06000</p>
</div>
    
    <button className="bg-[#A40411] hover:bg-[#8d0310] px-5 py-2 text-xs font-semibold rounded">
      CONTACT US
    </button>
  </div>
</div>

  </div>
    </section>
  );
};

export default ClientsSection;