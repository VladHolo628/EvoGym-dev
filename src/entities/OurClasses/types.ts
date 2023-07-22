import { SelectedPage } from "@/shared/types/enums";

export interface IOurClassesProps {
  setSelectedPage: (value: SelectedPage) => void;
}

export interface IClassItem {
  image: string;
  title: string;
  description?: string;
}
