import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types/enums";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { classes } from "./services/classes";
import { Class } from "./components/Class";
import { usePageControlStore } from "@/shared/store/PageControlStore";

export const OurClasses = () => {
  const setSelectedPage = usePageControlStore((state) => state.setSelectedPage);
  return (
    <section id={SelectedPage.OurClasses} className="bg-primary-100 py-20">
      <motion.div
        className="mx-auto w-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <div>
          <SectionHeading>Our classes</SectionHeading>
          <p className="py-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae est
            aut ratione porro officia numquam provident, distinctio, consectetur
            eos eveniet omnis, corporis deleniti ipsum quia officiis ex quod
            itaque.
          </p>
        </div>
        <div className="w-full h-[350px] overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] flex gap-5">
            {classes.map((classItem) => {
              return (
                <li
                  className="z-10"
                  key={`${classItem.title}-${classItem.image}`}
                >
                  <Class
                    image={classItem.image}
                    title={classItem.title}
                    description={classItem.description}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
