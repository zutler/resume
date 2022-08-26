import create from 'zustand';
import { combine, devtools, persist } from 'zustand/middleware';

const useAccordionStore = create(
  devtools(
    persist(
      combine({ current: 0 }, (set) => ({
        setCurrent: (to: number) =>
          set((state) => ({
            ...state,
            current: to,
          })),
      })),
      {
        name: 'accordion-storage', // unique name
        getStorage: () => localStorage,
      }
    )
  )
);

export default useAccordionStore;
