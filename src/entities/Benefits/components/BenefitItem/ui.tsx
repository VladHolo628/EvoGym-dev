import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { IBenefitItem } from "./types";
import { SelectedPage } from "@/shared/types/enums";
import { usePageControlStore } from "@/shared/store/PageControlStore";

const childrenVariant = {
  hidden: { opacity: 0, scale: 0.5, x: -10 },
  visible: { opacity: 1, scale: 1, x: 0 },
};

export const BenefitItem = ({
  icon,
  title,
  text,
  linkText,
  linkTo,
}: IBenefitItem) => {
  const setSelectedPage = usePageControlStore((state) => state.setSelectedPage);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={childrenVariant}
      className="flex flex-col border-2 border-gray-400 rounded-md p-8 items-center h-full"
    >
      <div className="mb-5">{icon}</div>
      <h3 className=" font-bold font-montserrat mb-5 text-center">{title}</h3>
      <p className="text-center mb-8">{text}</p>
      <AnchorLink
        className="font-bold text-primary-500 hover:text-primary-300 transition"
        href={`#${linkTo}`}
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {linkText}
      </AnchorLink>
    </motion.div>
  );
};
