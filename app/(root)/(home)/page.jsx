import Contact from "@/components/forms/contact";
import Blog from "@/components/Home/blogs";
import Faq from "@/components/Home/faq";
import Feature from "@/components/Home/feature";
import Hero from "@/components/Home/hero";
import Partners from "@/components/Home/partners";
import Pricing from "@/components/Home/pricing";
import QuickAbout from "@/components/Home/quick-about";

export default function Home() {
  return (
    <div>
      <Hero />
      <QuickAbout />
      <Feature />
      <Pricing />
      <Partners />
      <Blog />
      <Faq />
      <Contact />
    </div>
  );
}
