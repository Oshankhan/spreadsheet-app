// store.js
import { create } from "zustand";

export const useStore = create((set) => ({
  searchQuery: "",
  cells: Array(1000).fill({
    value: "",
    alignment: "left",
    fontSize: "medium",
    validation: null,
  }),
  currentPage: 1,
  pageSize: 100,

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
  setFormat: (index, style, typeOfStyle) =>
    set((state) => {
      const newCells = [...state.cells];
      newCells[index] = { ...newCells[index], [style]: typeOfStyle };
      return { cells: newCells };
    }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setPage: (page) => set({ currentPage: page }),
}));
