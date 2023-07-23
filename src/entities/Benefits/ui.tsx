import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { SelectedPage } from "@/shared/types/enums";
import { motion } from "framer-motion";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { BenefitItem } from "./components/BenefitItem";
import { IBenefitItem } from "./components/BenefitItem/types";
import { ActionCallSection } from "./components/ActionCallSection";
import { usePageControlStore } from "@/shared/store/PageControlStore";

const animationContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.4 },
  },
};

export const Benefits = () => {
  const setSelectedPage = usePageControlStore((state) => state.setSelectedPage);

  const benefits: IBenefitItem[] = [
    {
      icon: <HomeModernIcon className="h-6" />,
      title: "State Of The Art Facilities",
      text: "We provide world class fitness equipment, trainers and classes",
      linkText: "Learn more",
      linkTo: SelectedPage.ContactUs,
      setSelectedPage: setSelectedPage,
    },
    {
      icon: <UserGroupIcon className="h-6" />,
      title: "100's of Diverce Classes",
      text: "We provide world class fitness equipment, trainers and classes",
      linkText: "Learn more",
      linkTo: SelectedPage.ContactUs,
      setSelectedPage: setSelectedPage,
    },
    {
      icon: <AcademicCapIcon className="h-6" />,
      title: "Highly Trained and Cericified Coaches",
      text: "We provide world class fitness equipment, trainers and classes",
      linkText: "Learn more",
      linkTo: SelectedPage.ContactUs,
      setSelectedPage: setSelectedPage,
    },
  ];
  return (
    <section
      id={SelectedPage.Benefits}
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SectionHeading> More than just a gym</SectionHeading>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        <motion.ul
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          variants={animationContainer}
          className=" grid md:grid-rows-1 md:grid-cols-3 gap-8 py-10 items-center "
        >
          {benefits.map(
            ({
              icon,
              title,
              text,
              linkText,
              linkTo,
              setSelectedPage,
            }: IBenefitItem) => {
              return (
                <li key={title} className="h-full self-center">
                  <BenefitItem
                    icon={icon}
                    title={title}
                    text={text}
                    linkText={linkText}
                    linkTo={linkTo}
                    setSelectedPage={setSelectedPage}
                  />
                </li>
              );
            }
          )}
        </motion.ul>
      </motion.div>
      <ActionCallSection setSelectedPage={setSelectedPage} />
    </section>
  );
};
