import create from 'zustand';
import { combine, devtools, persist } from 'zustand/middleware';

const useAccordionStore = create(
  devtools(
    persist(
      combine({ current: 0 }, set => ({
        setCurrent: (payload: number) =>
          set(state => ({
            ...state,
            current: payload,
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
