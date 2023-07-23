import { SelectedPage } from "@/shared/types/enums";
import { motion } from "framer-motion";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import ContactUsGraphics from "@/shared/assets/ContactUsPageGraphic.png";
import { ContactForm } from "@/widgets/ContactForm";
import { usePageControlStore } from "@/shared/store/PageControlStore";

export const ContactUs = () => {
  const setSelectedPage = usePageControlStore((state) => state.setSelectedPage);

  return (
    <section id={SelectedPage.ContactUs} className="py-20 w-5/6 mx-auto">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView={"visible"}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { x: 20, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
        >
          <SectionHeading>
            <span className="text-primary-500">Join now</span> to get in shape
          </SectionHeading>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>
        <motion.div
          className="md:flex justify-between items-center gap-8"
          initial="hidden"
          whileInView={"visible"}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
        >
          {/* Form */}
          <div className="md:w-[800px]">
            <ContactForm />
          </div>

          <motion.div
            className="relative basis-2/5"
            initial="hidden"
            whileInView={"visible"}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <div className="w-full before:absolute md:before:content-evolvetext before:-bottom-20 before:-right-20 before:z-[-1]">
              <img
                className="mt-8 mx-auto md:mt-0"
                src={ContactUsGraphics}
                alt=""
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
