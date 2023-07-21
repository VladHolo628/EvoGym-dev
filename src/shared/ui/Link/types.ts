import { SelectedPage } from "@/shared/types/enums";

export interface ILinkProps {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}
