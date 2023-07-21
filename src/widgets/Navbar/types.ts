import { SelectedPage } from "@/shared/types/enums";

export interface INavbarProps {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}
