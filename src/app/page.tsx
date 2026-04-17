import { Hero } from "@/components/Hero";
import { TrustBanner } from "@/components/TrustBanner";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Hero />
      <TrustBanner />
      <Services />
      <ContactForm />
      <Footer />
    </main>
  );
}
