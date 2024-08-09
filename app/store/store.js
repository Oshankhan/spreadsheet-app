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
  history: [],
  future: [],

  updateCell: (index, value) =>
    set((state) => {
      const newCells = [...state.cells];
      const prevState = [...state.history];
      newCells[index] = { ...newCells[index], value };
      return {
        cells: newCells,
        history: [...prevState, state.cells],
        future: [],
      };
    }),
  undo: () =>
    set((state) => {
      if (state.history.length > 0) {
        const prevState = [...state.history];
        const currentCells = state.cells;
        const lastState = prevState.pop();
        return {
          cells: lastState,
          history: prevState,
          future: [...state.future, currentCells],
        };
      }
    }),
  redo: () =>
    set((state) => {
      if (state.future.length > 0) {
        const nextState = [...state.future];
        const currentCells = state.cells;
        const lastState = nextState.pop();
        return {
          cells: lastState,
          history: [...state.history, currentCells],
          future: nextState,
        };
      }
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
