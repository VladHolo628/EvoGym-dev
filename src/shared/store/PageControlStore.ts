import { create } from "zustand";
import { IState } from "./types";
import { SelectedPage } from "../types/enums";

export const usePageControlStore = create<IState>((set) => ({
  selectedPage: SelectedPage.Home,
  isTopOfPage: true,

  setSelectedPage: (page) =>
    set((state) => {
      return {
        ...state,
        selectedPage: page,
      };
    }),

  setIsTopOfPage: (isTop: boolean) =>
    set((state) => {
      return {
        ...state,
        isTopOfPage: isTop,
      };
    }),
}));
