import { SelectedPage } from "@/shared/types/enums";

export interface INavbarProps {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}
