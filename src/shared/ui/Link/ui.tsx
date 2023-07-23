import AnchorLink from "react-anchor-link-smooth-scroll";
import { ILinkProps } from "./types";
import { SelectedPage } from "@/shared/types/enums";
import { usePageControlStore } from "@/shared/store/PageControlStore";

export const Link = ({ page }: ILinkProps) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  const selectedPage = usePageControlStore((state) => state.selectedPage);

  const setSelectedPage = usePageControlStore((state) => state.setSelectedPage);

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
      }}
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
    >
      {page}
    </AnchorLink>
  );
};
