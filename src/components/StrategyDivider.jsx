import React from "react";

const leftLogos = [
  "https://media.licdn.com/dms/image/v2/D4E0BAQE7VdRrpAo3Wg/company-logo_100_100/B4EZsDkrlwGUAQ-/0/1765291507141/ceela_sports_logo?e=2147483647&v=beta&t=H_Up5lYwAO_H8qmVEFY-7EdEnsViE9A0CmcgK3tcDh0",
  "https://veernayak8.wordpress.com/wp-content/uploads/2023/08/breaking-news-made-with-postermywall-recovered.png",
  "https://nitisabha.com/wp-content/uploads/2023/07/cropped-RAIRAKHOL-1_page-0001-e1691589732329-150x97.jpg",
];

const rightLogos = [
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAADVCAMAAACMuod9AAAAh1BMVEX/////AAD/vr7/gYH/amr/SUn/0ND/RUX/9/f/1dX/3Nz/h4f/paX/zc3/u7v/ZWX/dnb/JSX/rKz/HR3/UVH/xcX/W1v/trb/cnL/6en/enr/X1//w8P/mpr/9PT/q6v/kpL/5OT/VFT/ODj/oqL/i4v/Fhb/Pj7/kJD/LCz/Ojr/JCT/l5dIKgnJAAAE3UlEQVR4nO3Yi3KiSBQGYFoQFQQVRUCFiNeQ5P2fb/uc042QSXZrYirZpP6vahJosem/b5BxHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+KkC77tb8IVOavjdTfg6qVKr727D14l+atrxuKqKoq4DMhG+EXWl6W43GMRxnGVZ/FPTdo3HRR1MojROpuVj6O7DTe5tD8PrsVmqntNvSNui8a4lePZwKvfn0N3kuTcztolSh+9u49fJlGrGn1ifPyDp7cSUT2J9HNOdqnjQEVfBLt1VujyIkweR+XSdfBzI1/VhVMSDuJBTXYU9pLtVuorAqTsVR4W57HYjXTLn6VzrWyTZLijuT7uVBRLxyUwfma6U4pBy95dS5OofgVMseqUD+w1V2a8/jfWPnM8i+sBtD88TPj31ahhWbRVtk0Z8MDmbksts6t+X1jM1je2JpH25tf1VWj/ktLN+qWqbOrRpR1wdn7ncVj7M9VHhc0dO+zWM/kw75IPUeW6UOup/anma3Jv2QsO0tU3htDQsDSXe6Bm7Wq/XPAX07/UqkLR0fvU2ZK1sCY/3qU2r3w3UwJzxJXK4cm5pt7IdcayCP8wSMS1s2p3+Wn14qopQXe6czZS2oDqzbtqQC47cBLGw4+S4NtvI1rHnAdA/ZpRP1TatY3ox0PfQ9yn1oX6AqriT1m5BdEOfrne7jZO0A+6mF33TwC6UO9Iq2vo4l01L8ReyxuxL+RtpQ1tHxBEUPS2ohqZN+6i4eaUOrfvhqsvXXM0tbdWpgjusmW3ZOm/T7qQND7qF1aXt4o+n5b1qdEs7N1Pwauffm2n3tg6fZwLPUeci3XDh+mp9knA104r7s5LR+zOtz3fsLtumTTs4yCMjXNI4TO9PS+tUvXDKsQztE31IPb5+N+3Z1jHppJ3IBiNpaVMdcXUBLYtEjw9339tpd5x2KXgQJW2cX+Wi5Zn+TrhnLpt9k58RtStp+/vt5L20ua1jYAeG9mPa2y7Os6RNKFDGX32kjtPpj47zxrrN/mXdZiEveVr/erV5ufNx9qFD28RxyydBL6x5UX0jrSp9frXPFtwnJi1Pf28haWnOnNfcMdSfO/3voZc2ydieO5s3uvYvhqpNS8u/OT6NVmpx2HrKa4XpB9PyBqz4ZEU33czJplHmzeN12lG/S/T8UmaXLkzJyFZPk9FpH6bjXtqOy6vnbdam3XeLR72Zt/m7tO3rU22+z4PQ2I/pkUJzj3cfKdpw2rjf1JybylfKDi9bsKwQeY4d7IVS+vpdSm/J76RNym7xddC7KvmrtFPXNf0Tb1zilLokaj8/u+68lt9mST3kc0+3PnK3I9lQmuuc7qkv2MsVJVckJ1wp72c7OtzwFh948zxxUrkhC+llwukUuBvfpp32JgENRBH4aVKe8+vFdPCvIGlPST+tN9sers3FnN/3uvF/Imlfeqvm2J/vKvrvan4ISfuY/pl2NZ1URXB6preE30LShkU37cLpDuhJ/pz5FYZmsvIL2nE1L8vTaaofD521OlHf17xPZtKq1P6NvVx5iWNf3UUavPftn+Zqp28WtTN57ZT9iz7z/60AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4Kv9A5bEQv7YVOClAAAAAElFTkSuQmCC",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_SziAJfoUJO2rdQsPBUGoiTysb10kuLHQ3Bbq0qmrw&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtmN7bkx2Q8NwG8JbJ3qPGD6GSbS-LUyUVswF7XmUTA&s",
];

const StrategyDivider = () => {
  return (
    <div>
      {/* Top Marquee */}
      <div className="overflow-hidden bg-[#D00000] py-1">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="mx-6 text-white text-xs md:text-sm">
                STRATEGY. CONTENT
              </span>
              <span className="mx-6 text-white text-xs md:text-sm">
                STRATEGY. CONTENT
              </span>
              <span className="mx-6 text-white text-xs md:text-sm">
                GROWTH. WE MAKE IT HAPPEN!
              </span>
              <span className="mx-6 text-white text-xs md:text-sm">
                VISION OF GROWTH
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="w-full bg-cover bg-center py-6"
        style={{ backgroundImage: "url('/strategybg.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
            
            {/* Left Logos */}
            <div className="flex items-center gap-20">
              {leftLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt=""
                  className="h-10 md:h-10 object-contain opacity-80"
                />
              ))}
            </div>

            {/* Center Text */}
            <div className="text-center">
              <h2 className="text-white text-sm md:text-xl md:text-3xl font-bold uppercase leading-tight">
                Clients
              </h2>

              <p className="text-white text-sm md:text-xl md:text-2xl font-bold uppercase">
                We have worked with
              </p>
            </div>

            {/* Right Logos */}
            <div className="flex items-center gap-20">
              {rightLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt=""
                  className="h-10 md:h-10 object-contain opacity-80"
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyDivider;