import { AboutUs } from "@/components/AboutUs";
import { Faqs } from "@/components/Faqs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ContactUs } from "@/components/ContactUs";
import { PrimaryFeatures } from "@/components/PrimaryFeatures";
import { SecondaryFeatures } from "@/components/SecondaryFeatures";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <AboutUs />
        {/* <CallToAction /> */}
        <Testimonials />
        <ContactUs />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}
