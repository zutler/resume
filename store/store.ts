import create from 'zustand';
import { combine, devtools, persist } from 'zustand/middleware';

const useStore = create(
  devtools(
    persist(
      combine({ color: 'white' }, (set) => ({
        changeColor: () =>
          set((state) => ({
            color: state.color === 'white' ? 'black' : 'white',
          })),
      })),
      {
        name: 'color-storage', // unique name
        getStorage: () => localStorage,
      }
    )
  )
);

export default useStore;
