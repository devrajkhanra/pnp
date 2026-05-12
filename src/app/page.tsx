import { Hero } from "@/components/Hero";
import { TrustBanner } from "@/components/TrustBanner";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "64px" }}>
        <Hero />
        <TrustBanner />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}