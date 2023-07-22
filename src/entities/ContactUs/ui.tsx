import { SelectedPage } from "@/shared/types/enums";
import { IContactUsProps } from "./types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import ContactUsGraphics from "@/shared/assets/ContactUsPageGraphic.png";

export const ContactUs = ({ setSelectedPage }: IContactUsProps) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
    px-5 py-3 placeholder-white`;

  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   const onSubmitHandler = async (e: React.FormEvent) => {
  //     const isValid = await trigger();
  //     if (!isValid) {
  //       e.preventDefault();
  //     }
  //     return;
  //   };

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
          <form
            // target="_blank"
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
            // action="https://formsubmit.co/el/daxohe"
            // method="POST"
          >
            <input
              className={inputStyles}
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-primary-500">
                {errors.name.type === "required" && "This Field Is Required"}
                {errors.name.type === "maxLength" && "Max Length is 100"}
              </p>
            )}

            <input
              className={inputStyles}
              type="text"
              placeholder="E-MAIL"
              {...register("email", {
                required: true,
                pattern: emailPattern,
              })}
            />
            {errors.email && (
              <p className="mt-1 text-primary-500">
                {errors.email.type === "required" && "This Field Is Required"}
                {errors.email.type === "maxLength" && "Invalid E-Mail Address"}
              </p>
            )}

            <textarea
              className={`${inputStyles}`}
              placeholder="MESSAGE"
              {...register("message", {
                required: true,
                maxLength: 100,
              })}
              rows={4}
              cols={50}
            />
            {errors.message && (
              <p className="mt-1 text-primary-500">
                {errors.message.type === "required" && "This Field Is Required"}
                {errors.message.type === "maxLength" && "Max Length is 100"}
              </p>
            )}
            <div className="text-center md:text-left">
              <button
                type="submit"
                className=" mt-5 rounded-lg hover:bg-secondary-400 bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </div>
          </form>
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

          {/* IMG */}
        </motion.div>
      </motion.div>
    </section>
  );
};
