import AnchorLink from "react-anchor-link-smooth-scroll";
import { IActionButtonProps } from "./types";
import { SelectedPage } from "@/shared/types/enums";
import { usePageControlStore } from "@/shared/store/PageControlStore";

export const ActionButton = ({ children }: IActionButtonProps) => {
  const setSelectedPage = usePageControlStore((state) => state.setSelectedPage);

  return (
    <AnchorLink
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};
