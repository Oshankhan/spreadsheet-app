
# Spreadsheet Application

This project is a frontend application that mimics the functionality of a spreadsheet. It is built using Next.js and styled with Tailwind CSS. The application features a grid of editable cells, basic formatting options, data validation, and advanced functionalities such as undo/redo, search and filter, and pagination.

## Features

- **Grid Rendering**: Renders a grid of 1000 editable cells.
- **Cell Editing**: Allows users to input and update content dynamically in each cell.
- **Data Storage**: The data entered in each cell is stored in memory.
- **Cell Formatting**: Supports text alignment and font size adjustments.
- **Data Validation**: Basic rules such as numeric-only validation.
- **Search and Filter**: Quickly locate specific data within the grid.
- **Undo/Redo**: Revert changes made to the cells.
- **Pagination**: Handles large datasets efficiently.

## Technologies Used

- **Framework**: Next.js
- **State Management**: Zustand
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- **Node.js** (>=14.0.0)
- **npm** or **yarn**

### Installation

1. **Clone the Repository**
   
   git clone https://github.com/your-username/spreadsheet-app.git
   cd spreadsheet-app
   
2. **Install Dependencies**
 
   npm install
   
   OR
   
   yarn install
   

3. **Run the Development Server**
  
   npm run dev
  
   OR
  
   yarn dev
  
   This will start the application in development mode at `http://localhost:3000`.

4. **Build for Production**
   
   npm run build
   npm start
   
   OR
   
   yarn build
   yarn start
   

## Usage

### Editing Cells
- Click on any cell in the grid to start editing. The content is automatically saved in memory and persists as you navigate through the grid.

### Cell Formatting
- Use the toolbar to align text (left, center, right) and adjust font size (small, medium, large).

### Data Validation
- Restrict input in a cell to numeric values using the "Numeric Only" option in the toolbar. Use the "No Validation" option to remove validation.

### Undo/Redo
- Use the undo and redo buttons in the toolbar to revert or reapply changes made to the grid.

### Search and Filter
- Use the search bar to filter and find specific data within the grid.

### Pagination
- Navigate through large datasets with smooth scrolling or pagination controls.
