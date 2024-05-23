import ContactForm from "@/components/index/ContactForm";
import { Hero } from "@/components/index/Hero";
import { Information } from "@/components/index/Information";
import { Reviews } from "@/components/index/Reviews";

export default function HomePage() {
  return (
    <main className="flex justify-between items-center mx-auto px-4 sm:px-2  py-4 max-w-screen-sm md:max-w-7xl ">
      <div>
        <Hero />
        <Information />
        <Reviews />
        <ContactForm />
      </div>
    </main>
  );
}
