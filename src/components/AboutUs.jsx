import React, { useState } from "react";
import leftArrow from "../assets/left.svg";
import rightArrow from "../assets/right.svg";
import personImage1 from "../assets/person1.svg";
import personImage2 from "../assets/person2.svg";
import phoneImage from "../assets/Rectangle.svg";
import arrow from "../assets/Arrow 2.svg";

const users = [
  {
    name: "Laurey Maupay",
    role: "Entrepreneur",
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum. Lorem ipsum dolor sit amet consectetur.",
    rating: 5,
    image: personImage1,
  },
  {
    name: "Violet S. Amelia",
    role: "Crypto Enthusiast",
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum. Lorem ipsum dolor sit amet consectetur.",
    rating: 5,
    image: personImage2,
  },
  {
    name: "Abatan Divine",
    role: "Investor",
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum. Lorem ipsum dolor sit amet consectetur.",
    rating: 1,
    image: personImage1,
  },
  {
    name: "Samuel Divine",
    role: "Gym Instructor",
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum. Lorem ipsum dolor sit amet consectetur.",
    rating: 3,
    image: personImage1,
  },
  {
    name: "Kelvin Cable",
    role: "Investor",
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum. Lorem ipsum dolor sit amet consectetur.",
    rating: 4,
    image: personImage2,
  },
];

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? users.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {/* Testimonial Section */}
      <div className="px-4 lg:px-14 py-16 w-full bg-primaryColor7 flex items-center justify-center relative">
        <div className="max-w-[1202px] text-center">
          <div className="text-accentColor1">
            <h4 className="font-bold text-4xl max-w-[632px] mx-auto">
              What our users say about us
            </h4>
            <p className="max-w-[700px] font-light text-sm mt-6 mx-auto">
              Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus.
              Tincidunt cum. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 mt-20 items-center">
            {/* Testimonial Cards Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {users
                .slice(
                  currentIndex,
                  currentIndex + (window.innerWidth >= 1024 ? 2 : 1)
                )
                .map((user, index) => (
                  <div
                    key={index}
                    className="bg-primaryLight text-accentColor1 p-6 rounded-lg shadow-lg"
                  >
                    <div className="flex flex-col max-w-[411px] relative items-center">
                      <img
                        src={user.image}
                        alt={user.name}
                        className="rounded-full w-16 h-16 absolute top-[-61px] left-[77px]"
                      />
                      <h4 className="text-lg font-bold mt-5">{user.name}</h4>
                      <p className="font-medium">{user.role}</p>
                      <p className="font-light text-sm mt-4 text-center max-w-[219px]">
                        {user.feedback}
                      </p>
                      <div className="flex justify-center mt-4">
                        {Array.from({ length: user.rating }).map((_, idx) => (
                          <span key={idx} className="text-yellow-500">
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Pagination and Controls */}
            <div className="flex gap-2 items-center w-1/5">
              <button onClick={handlePrev} className="p-2 rounded-full">
                <img src={leftArrow} alt="Previous" />
              </button>
              <button onClick={handleNext} className="p-2 rounded-full">
                <img src={rightArrow} alt="Next" />
              </button>
            </div>
          </div>

          {/* Phone Image Overlapping - hidden on small screens */}
          <img
            src={phoneImage}
            alt="Phone Display"
            className="hidden md:block absolute bottom-[-380px] right-[50px] h-[500px] w-auto object-contain z-10"
          />
        </div>
      </div>

      <div className="px-4 hidden md:block lg:px-14 py-16 w-full bg-primaryLight relative">
        <div className="flex gap-20 max-w-[1202px] md:flex-row">
          <div className="max-w-[629px] mt-10">
            <div className="text-accentColor1">
              <h4 className="font-bold text-4xl max-w-[632px]">
                Get ready to explore crypto world.{" "}
              </h4>
              <h3 className="font-semibold text-2xl text-secondaryColor mt-4 max-w-[509px]">
                Join Our Widely Used Trading Platform.
              </h3>

              <p className="max-w-[551px] font-light text-sm mt-6">
                Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus.
                Tincidunt cum. Lorem ipsum dolor sit amet consectetur. Senectus
                eu ac mi purus. Tincidunt cum.
              </p>
              <button className="text-primaryColor6 flex justify-center items-center gap-5 bg-secondaryColor mt-4 px-12 py-3 rounded-full font-semibold">
                Let get Started <img src={arrow} alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
