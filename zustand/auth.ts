import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface InfoState {
  email: string;
  picture: string;
  setInfo: (body: object) => void;
}

export const useInfoStore = create<InfoState>()(
  persist(
    (set) => ({
      email: "",
      picture: "",
      setInfo: (newInfo) => set({ ...newInfo }),
    }),
    {
      name: "dataInfo",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
