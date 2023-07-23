import { Navbar } from "@/widgets/Navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types/enums";
import { Home } from "@/entities/Home";
import { Benefits } from "@/entities/Benefits";
import { OurClasses } from "@/entities/OurClasses";
import { ContactUs } from "@/entities/ContactUs";
import { Footer } from "@/widgets/Footer";
import { usePageControlStore } from "@/shared/store/PageControlStore";

export function App() {
  const setIsTopOfPage: (value: boolean) => void = usePageControlStore(
    (state) => state.setIsTopOfPage
  );

  const setSelectedPage = usePageControlStore((state) => state.setSelectedPage);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
        return;
      }
      setIsTopOfPage(false);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  });
  return (
    <div className="app bg-gray-50">
      <Navbar />
      <Home />
      <Benefits />
      <OurClasses />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
