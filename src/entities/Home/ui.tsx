import useMediaQuery from "@/shared/hooks/useMediaQuery";
import HomePageText from "@/shared/assets/HomePageText.png";
import HomePageGraphic from "@/shared/assets/HomePageGraphic.png";
import { SelectedPage } from "@/shared/types/enums";
import { IHomeProps } from "./types";
import { ActionButton } from "@/shared/ui/ActionButton";
import { Sponsors } from "@/widgets/Sponsors";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

export const Home = ({ setSelectedPage }: IHomeProps) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id={SelectedPage.Home}
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      <motion.div
        className="pt-32 md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className=" z-10 md:basis-3/5">
          <motion.div
            className=" mb-6"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="mb-6 before:absolute before:-top-20 before:-left-10 md:before:content-evolvetext before:z-[-1] ">
                <img src={HomePageText} alt="home page text" />
              </div>
            </div>
            <p>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          <motion.div
            className="flex gap-8 items-center"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              Learn More
            </AnchorLink>
          </motion.div>
        </div>
        <div className=" flex basis-3/5 justify-center md:z-10 md:ml-40 mb-[20px]">
          <img src={HomePageGraphic} alt="home page graphic" />
        </div>
      </motion.div>
      {isAboveMediumScreen && <Sponsors />}
    </section>
  );
};
