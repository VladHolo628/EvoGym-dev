import { useForm } from "react-hook-form";

export const ContactForm = () => {
  const inputStyles = `mt-5 mb-2 w-full rounded-lg bg-primary-300
    px-5 py-3 placeholder-white relative`;

  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="w-full"
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
        <p className="mt-1 text-primary-500 ">
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
  );
};
