import { SelectedPage } from "@/shared/types/enums";
import React from "react";

export interface IActionButtonProps {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
}
