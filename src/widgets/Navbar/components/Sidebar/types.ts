import { SelectedPage } from "@/shared/types/enums";

export interface ISidebarProps {
  setIsMenuToggled: (value: boolean) => void;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}
