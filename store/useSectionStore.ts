import create from 'zustand';
import { combine, devtools, persist } from 'zustand/middleware';
import { Section } from '../types';

const useSectionStore = create(
  devtools(
    persist(
      combine(
        {
          sections: [
            { id: 'info', isActive: false },
            { id: 'skills', isActive: false },
            { id: 'jobs', isActive: false },
          ],
        },
        (set) => ({
          toggleActiveState: (id: string) =>
            set((state) => ({
              ...state,
              sections: state.sections.map((section) =>
                section.id === id
                  ? ({ ...section, isActive: !section.isActive } as Section)
                  : section
              ),
            })),
        })
      ),
      {
        name: 'section-storage', // unique name
        getStorage: () => localStorage,
      }
    )
  )
);

export default useSectionStore;
