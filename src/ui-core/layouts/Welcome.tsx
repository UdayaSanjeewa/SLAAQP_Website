// "use client";
// import React from "react";
// import {
//   useKeenSlider,
//   KeenSliderPlugin,
//   KeenSliderInstance,
// } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";

// // Autoplay plugin
// const AutoplayPlugin: KeenSliderPlugin = (slider: KeenSliderInstance) => {
//   let timeout: ReturnType<typeof setTimeout>;
//   let mouseOver = false;

//   function clearNextTimeout() {
//     clearTimeout(timeout);
//   }

//   function nextTimeout() {
//     clearTimeout(timeout);
//     if (mouseOver) return;
//     timeout = setTimeout(() => {
//       slider.next();
//     }, 4000);
//   }

//   slider.on("created", () => {
//     slider.container.addEventListener("mouseover", () => {
//       mouseOver = true;
//       clearNextTimeout();
//     });
//     slider.container.addEventListener("mouseout", () => {
//       mouseOver = false;
//       nextTimeout();
//     });
//     nextTimeout();
//   });

//   slider.on("dragStarted", clearNextTimeout);
//   slider.on("animationEnded", nextTimeout);
//   slider.on("updated", nextTimeout);
// };

// function Welcome() {
//   const [sliderRef] = useKeenSlider<HTMLDivElement>(
//     {
//       loop: true,
//       slides: {
//         perView: 1,
//         spacing: 0,
//       },
//     },
//     [AutoplayPlugin]
//   );

//   const slides = [
//     "/slaaqpImages/img1.png",
//     "/slaaqpImages/img2.png",
//     "/slaaqpImages/img3.png",
//     "/slaaqpImages/img4.png",
//     "/slaaqpImages/img5.png",
//     "/slaaqpImages/img6.png",
//     "/slaaqpImages/img7.png",
//     "/slaaqpImages/img8.png",
//     "/slaaqpImages/img9.png",
//     "/slaaqpImages/img10.png",
//     "/slaaqpImages/img11.png",
//     "/slaaqpImages/img12.png",
//     "/slaaqpImages/img13.png",
//     "/slaaqpImages/img14.png",
//   ];

//   return (
//     <div className="relative w-full h-[460px] text-white">
//       {/* Background with bg-fixed */}
//       <div
//         className="absolute inset-0 bg-[url('https://slaaqp.org/wp-content/uploads/2024/01/637f71bea2f78a001d044931.jpg')] 
//         bg-cover bg-center bg-fixed z-0"
//       />

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black opacity-60 z-0" />

//       {/* Content */}
//       <div className="relative z-10 flex gap-2 container mx-auto px-10 items-center pt-10 h-full">
//         <div className="p-4 w-[50%]">
//           <h2 className="text-3xl font-bold">
//             Sri Lanka Association for the Advancement of Quality and
//             Productivity (SLAAQP)
//           </h2>
//         </div>

//         <div className="w-[50%] p-10">
//           <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden">
//             {slides.map((src, index) => (
//               <div key={index} className="keen-slider__slide min-w-full">
//                 <img
//                   src={src}
//                   alt={`Slide ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Welcome;

"use client";
import React from "react";
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

// Autoplay plugin
const AutoplayPlugin: KeenSliderPlugin = (slider: KeenSliderInstance) => {
  let timeout: ReturnType<typeof setTimeout>;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 4000);
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });

  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
};

function Welcome() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 0,
      },
    },
    [AutoplayPlugin]
  );

  const slides = [
    "/slaaqpImages/img1.png",
    "/slaaqpImages/img2.png",
    "/slaaqpImages/img3.png",
    "/slaaqpImages/img4.png",
    "/slaaqpImages/img5.png",
    "/slaaqpImages/img6.png",
    "/slaaqpImages/img7.png",
    "/slaaqpImages/img8.png",
    "/slaaqpImages/img9.png",
    "/slaaqpImages/img10.png",
    "/slaaqpImages/img11.png",
    "/slaaqpImages/img12.png",
    "/slaaqpImages/img13.png",
    "/slaaqpImages/img14.png",
  ];

  return (
    <div className="relative w-full h-[460px] text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-[url('https://slaaqp.org/wp-content/uploads/2024/01/637f71bea2f78a001d044931.jpg')] 
        bg-cover bg-center lg:bg-fixed z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row gap-2 container mx-auto px-6 md:px-10 items-center sm:pt-10 h-full lg:pt-10 md:pt-0">
        <div className="p-4 w-full md:w-[50%] text-center md:text-left">
          <h2 className="text-2xl sm:text-2xl md:text-5xl font-bold leading-[40px] mt-24 md:mt-0">
            Sri Lanka Association for the Advancement of Quality and Productivity (SLAAQP)
          </h2>
        </div>

        {/* Carousel - hidden on mobile */}
        <div className="hidden lg:block w-full md:w-[50%] p-6 md:p-10">
          <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden">
            {slides.map((src, index) => (
              <div key={index} className="keen-slider__slide min-w-full">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  width={600}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
