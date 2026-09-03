import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { CategoryMarquee } from "@/components/sections/CategoryMarquee";
import { Products } from "@/components/sections/Products";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Vouches } from "@/components/sections/Vouches";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <CategoryMarquee />
        <Products />
        <Pricing />
        <Process />
        <Vouches />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
