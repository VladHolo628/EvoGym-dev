import { Navbar } from "@/widgets/Navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types/enums";
import { Home } from "@/entities/Home";
import { Benefits } from "@/entities/Benefits";
import { OurClasses } from "@/entities/OurClasses";
import { ContactUs } from "@/entities/ContactUs";
import { Footer } from "@/widgets/Footer";



export function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  });
  return (
    <div className="app bg-gray-50">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
