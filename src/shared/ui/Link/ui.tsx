import AnchorLink from "react-anchor-link-smooth-scroll";
import { ILinkProps } from "./types";
import { SelectedPage } from "@/shared/types/enums";

export const Link = ({ page, selectedPage, setSelectedPage }: ILinkProps) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

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
