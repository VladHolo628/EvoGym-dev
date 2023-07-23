import { SelectedPage } from "@/shared/types/enums";

export interface IBenefitItem {
  icon: JSX.Element;
  title: string;
  text: string;
  linkText: string;
  linkTo: SelectedPage;
}
