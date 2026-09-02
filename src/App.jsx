import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import CTABanner from "./components/CTABanner";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import ServiceAreas from "./components/ServiceAreas";
import FAQ from "./components/FAQ";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";
import StickyCallBar from "./components/StickyCallBar";
import Snowfall from "./components/Snowfall";

export default function App() {
  return (
    <>
      <Snowfall />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <CTABanner
          variant="pine"
          heading="Not sure which package fits your home?"
          sub="Send us a photo of your house and we'll sketch a free custom design."
          primaryLabel="Get My Free Design"
        />
        <WhyChooseUs />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <CTABanner
          variant="berry"
          heading="Spots for this season are filling up."
          sub="Book your free consultation now to lock in your preferred install date."
          primaryLabel="Reserve My Install Date"
        />
        <ServiceAreas />
        <FAQ />
        <QuoteForm />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
