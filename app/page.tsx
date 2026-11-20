import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroBanner from "@/components/IntroBanner";
import FeaturedPropertySection from "@/components/FeaturedPropertySection";
import VideoTourSection from "@/components/VideoTourSection";
import BuyersSellersSection from "@/components/BuyersSellersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import FeaturedListingsSection from "@/components/FeaturedListingsSection";
import WorkWithUsSection from "@/components/WorkWithUsSection";
import MediaSection from "@/components/MediaSection";
import InstagramSection from "@/components/InstagramSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <HeroSection />
      <IntroBanner />
      <FeaturedPropertySection />
      <VideoTourSection />
      <BuyersSellersSection />
      <TestimonialsSection />
      <AboutSection />
      <FeaturedListingsSection />
      <WorkWithUsSection />
      <MediaSection />
      <InstagramSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
