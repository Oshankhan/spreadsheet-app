// store.js
import { create } from "zustand";
//Creating store form zustand
export const useStore = create((set) => ({
  //initial state
  //Search query for the intial value
  searchQuery: "",
  //Filling the array with 100 elements which is the fille withe the object
  cells: Array(1000).fill({
    value: "",
    alignment: "left",
    fontSize: "medium",
    validation: null,
  }),
  //History is to store the history of the user input
  history: [],
  //Future is to store the future of the user input
  future: [],
  //Updating the values of the user input in the specific innput field
  updateCell: (index, value) =>
    //Index  is the value that is coming when the funtion is called with  it's respective value
    set((state) => {
      //Set function sets the state of the reducer file
      //It takes a call back of state which contians every inital value assigned to in the current state which is useStore
      const newCells = [...state.cells];
      // Clone the cell to avoid direct mutation.
      //A shallow copy is made of the state.cell element
      const prevState = [...state.history];
      //A shallow copy is made of the state.history element
      //It is done because of the fact in we want to store the changes made by the user
      newCells[index] = { ...newCells[index], value };
      //The new value is assigned to the newCells array at the index of the cell that is
      //Object spread operator is used to make a shallow copy and the assign the value do value ofn newCell[index]

      //Returning the values
      return {
        cells: newCells,
        history: [...prevState, state.cells],
        future: [],
      };
    }),
  undo: () =>
    // Undo: Restores the previous state by popping the last history state
    // and updating the current cells with it. Moves the current state to 'future'.
    set((state) => {
      if (state.history.length > 0) {
        const prevState = [...state.history];
        // Clone the history to avoid direct mutation.
        const currentCells = state.cells;
        // Store the current state of cells before undoing.
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
      // Updates the validation for a specific cell based on the index provided.
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
    // Sets a specific style for a cell based on the index provided.
    // 'style' is the key (e.g., 'fontWeight'), and 'typeOfStyle' is the value (e.g., 'bold').
    set((state) => {
      const newCells = [...state.cells];
      newCells[index] = { ...newCells[index], validation };
      return { cells: newCells };
    }),
  setFormat: (index, style, typeOfStyle) =>
    // Sets the search query state for filtering cells or other purposes.
    set((state) => {
      const newCells = [...state.cells];
      newCells[index] = { ...newCells[index], [style]: typeOfStyle };
      return { cells: newCells };
    }),
  // Updates the current page in the paginated grid.
  setSearchQuery: (query) => set({ searchQuery: query }),
  setPage: (page) => set({ currentPage: page }),
}));
