import React from "react";
import Grid from "./component/Grid";
import SearchBar from "./component/SearchBar";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-green-50">
      <SearchBar />
      <Grid />
    </div>
  );
};

export default page;
