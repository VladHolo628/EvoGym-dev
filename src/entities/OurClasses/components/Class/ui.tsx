import { IClassItem } from "../../types";

export const Class = ({ image, title, description }: IClassItem) => {
  const overlayStyles = `p-5 absolute z-30 flex
    h-[380px] w-[450px] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`;
  return (
    <div className="relative inline-block w-[450px] h-[380px] transition-all">
      <div className={overlayStyles}>
        <h1 className="text-2xl">{title}</h1>
        <p className="py-5">{description}</p>
      </div>
      <img className="h-full" src={image} alt={title} />
    </div>
  );
};
