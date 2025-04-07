import About from "@/components/About-us";
import BlogNews from "@/components/Blogs";
import WhyChooseUs from "@/components/choose-us";
import ContactPage from "@/components/Contacts";
import Experiences from "@/components/Experiences";
import FeaturedWorks from "@/components/Featured-work";
import Footer from "@/components/Footer";
import AwardsSection from "@/components/Journey";
import NewsletterSection from "@/components/Letter";
import NavBar from "@/components/nav-bar";
import FAQSection from "@/components/Que-section";
import Services from "@/components/Services";
import Slide from "@/components/slide";
import Stats from "@/components/Status";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import WorkProcess from "@/components/Work";
export default function page() {
  return (
    <section>
      <NavBar />
      <Experiences />
      <Slide />
      <About />
      <Services />
      <WorkProcess />
      <Slide />
      <WhyChooseUs />
      <Slide />
      <FeaturedWorks />
      <AwardsSection />
      <ContactPage />
      <Slide />
      <Testimonials />
      <Slide />
      <Team />
      <Stats />
      <BlogNews />
      <FAQSection />
      <NewsletterSection />
      <Footer />
    </section>
  );
}
