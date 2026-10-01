"use client";
import Inicio from "./sections/Inicio";
import SobreMi from "./sections/SobreMi";
import Equipo from "./sections/Equipo";
import Terapias from "./sections/Terapias";
import Testimonios from "./sections/Testimonios";
import Footer from "./Footer";
import WhatsAppButton from "./ui/WhatsAppButton";
import InstagramButton from "./ui/InstagramButton";

function Main() {
  return (
    <>
      <main className="pt-16">
        <Inicio />
        <SobreMi />
        <Equipo />
        <Terapias />
        <Testimonios />

        {/* Floating Buttons */}
        <InstagramButton />
        <WhatsAppButton />
      </main>
      <Footer />
    </>
  )
}
export default Main