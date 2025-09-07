import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Technologies2 from "@/components/Technologies2";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurApproach from "@/components/OurApproach";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      {/* <Technologies /> */}
      <WhyChooseUs />
      <OurApproach />
      <Technologies2 />
      <Projects />
      {/* <div className="text-center mb-8 bg-blue-50 py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Why Hire Us?
        </h2>
        <p className="text-xl text-muted-foreground max-w-7xl mx-auto">
          We&#39;re experts in android and iOS app development. We&#39;ve
          developed and designed numerous mobile apps in diverse niches. Also,
          we&#39;ve been working on website development using different
          technologies. We listen and understand our customers demand and
          implement methodologies accordingly to help their brands gain
          excellence. Our developers are always at your service to assist you
          with the years of experience.
        </p>
      </div> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
