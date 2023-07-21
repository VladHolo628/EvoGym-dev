import { ActionButton } from "@/shared/ui/ActionButton";
import { IActionCallSectionProps } from "./types";
import BenefitsGraphic from "@/shared/assets/BenefitsPageGraphic.png";
import { motion } from "framer-motion";

export const ActionCallSection = ({
  setSelectedPage,
}: IActionCallSectionProps) => {
  return (
    <div className="md:flex justify-between items-center gap-20 md:mt-28">
      <motion.img
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, x: -80 },
          visible: { opacity: 1, x: 0 },
        }}
        className="w-full h-full"
        src={BenefitsGraphic}
        alt="benefits graphic"
      />

      <motion.div
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1 }}
        variants={{
          hidden: { opacity: 0, x: 80 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="relative">
          <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
            <h2 className=" font-montserrat font-bold text-2xl uppercase mb-5">
              Millions of happy members getting{" "}
              <span className=" text-primary-500">fit</span>.
            </h2>
          </div>
        </div>

        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae est aut
          ratione porro officia numquam provident, distinctio, consectetur eos
          eveniet omnis, corporis deleniti ipsum quia officiis ex quod itaque.
          Fugit tempore eligendi eos repellat officia ratione rem voluptates
          dolor quis error esse sed perferendis veritatis numquam harum, quos et
          quidem deserunt sequi, ab ducimus omnis.
        </p>
        <p className="mb-5">
          Fugit tempore eligendi eos repellat officia ratione rem voluptates
          dolor quis error esse sed perferendis veritatis numquam harum, quos et
          quidem deserunt sequi, ab ducimus omnis.
        </p>
        <div className="relative mt-10">
          <div className="before:absolute before:z-[-1] before:-bottom-30 before:right-40 before:content-sparkles">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
