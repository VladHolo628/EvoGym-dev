import { SelectedPage } from "../types/enums";

export interface IState {
  selectedPage: SelectedPage;
  isTopOfPage: boolean;
  setSelectedPage: (value: SelectedPage) => void;
  setIsTopOfPage: (value: boolean) => void;
}
