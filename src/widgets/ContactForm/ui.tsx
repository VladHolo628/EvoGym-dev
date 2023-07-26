import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

export const ContactForm = () => {
  const [popupIsShown, setPopupIsShown] = useState<boolean>(false);

  const inputStyles = `mt-5 mb-2 w-full rounded-lg bg-primary-300
    px-5 py-3 placeholder-white relative`;

  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const formSubmitHander = (data: FieldValues) => {
    console.log(data);
    setPopupIsShown(true);
    setTimeout(() => {
      setPopupIsShown(false);
    }, 2000);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  return (
    <form onSubmit={handleSubmit(formSubmitHander)} className="w-full relative">
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
          {errors.email.type === "pattern" && "Invalid E-Mail Address"}
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
      {popupIsShown && (
        <div className="w-2/5 h-2/5  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-100 rounded-md shadow-2xl flex justify-center items-center uppercase">
          <p className="uppercase font-bold">Succsessfully Submitted !</p>
        </div>
      )}
    </form>
  );
};
