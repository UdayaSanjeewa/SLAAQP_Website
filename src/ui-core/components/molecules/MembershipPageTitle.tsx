// // components/MembershipPageTitle.tsx
// import React from "react";

// const MembershipPageTitle = () => {
//   return (
//     <section className="relative h-60 bg-cover bg-center text-center flex items-center justify-center" style={{ backgroundImage: "url('/images/membership-banner.png')" }}>
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <h1 className="relative text-4xl md:text-5xl font-bold text-[#FCE3B7]">
//         SLAAQP MEMBERSHIP FEE STRUCTURE
//       </h1>
//     </section>
//   );
// };

// export default MembershipPageTitle;
// components/Membership.tsx
import React from "react";

const Membership = () => {
  return (
    <section className="relative w-full h-[260px] text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('https://slaaqp.org/wp-content/uploads/2024/01/zachary-nelson-192289-unsplash_2500.jpg')] 
        bg-cover bg-center lg:bg-fixed z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 flex lg:items-end justify-center h-full text-center px-6 pb-6 items-center">
        <h2 className="lg:text-6xl font-bold text-yellow-50 text-3xl">
        SLAAQP MEMBERSHIP FEE STRUCTURE
        </h2>
      </div>
      <div className="w-full h-2 bg-yellow-200"></div>
    </section>
  );
};

export default Membership;
