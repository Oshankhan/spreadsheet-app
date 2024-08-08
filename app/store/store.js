// store.js
import create from "zustand";

export const useStore = create((set) => ({
  searchQuery: "",
  cells: Array(1000).fill({
    value: "",
    alignment: "left",
    fontSize: "medium",
    validation: null,
  }), // Adding validation field
  updateCell: (index, value) =>
    set((state) => {
      const newCells = [...state.cells];
      newCells[index] = { ...newCells[index], value };
      return { cells: newCells };
    }),
  setValidation: (index, validation) =>
    set((state) => {
      const newCells = [...state.cells];
      newCells[index] = { ...newCells[index], validation };
      return { cells: newCells };
    }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
