import Navbar from "@/ui-core/components/organisms/Navbar";
import Welcome from "@/ui-core/layouts/Welcome";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import Details from "@/ui-core/layouts/Details";
import Organization from "@/ui-core/layouts/Organization";
import ProductivitySection from "@/ui-core/layouts/ProductivitySection";
import GreenProductivity from "@/ui-core/layouts/GreenProductivity";
import LeanSixSigma from "@/ui-core/layouts/LeanSixSigma";
import QualityFunctionalDeployment from "@/ui-core/layouts/QualityFunctionalDeployment";
import EventsSection from "@/ui-core/layouts/EventsSection";
import AboutUs from "@/ui-core/layouts/AboutUs";
import ContactSection from "@/ui-core/layouts/ContactSection";
import Footer from "@/ui-core/layouts/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <div className="h-[6px] bg-yellow-200"></div>
      <Details />
      <Organization />
      <ProductivitySection />
      <GreenProductivity />
      <LeanSixSigma />
      <QualityFunctionalDeployment />
      <EventsSection />
      <AboutUs />
      <ContactSection />
      <Footer />
    </main>
  );
}
