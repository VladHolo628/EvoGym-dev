import { ISectionHeadingProps } from "./types";

export const SectionHeading = ({ children }: ISectionHeadingProps) => {
  return (
    <h1 className=" basis-3/5 font-montserrat text-3xl font-bold uppercase">
      {children}
    </h1>
  );
};
