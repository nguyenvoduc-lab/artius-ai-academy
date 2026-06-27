import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrainingTracks from "@/components/TrainingTracks";
import WhoJoins from "@/components/WhoJoins";
import RegisterForm from "@/components/RegisterForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <TrainingTracks />
        <WhoJoins />
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
}
