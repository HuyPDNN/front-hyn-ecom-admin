import React from "react";
import { Route, Routes } from "react-router-dom";
import TodoFeature from "../features/Todo";
import AlbumFeature from "../features/Album";

function App() {
  return (
    <div className="App">
      Home Page
      <Routes>
        <Route path="/todos" Component={TodoFeature} />
        <Route path="/albums" Component={AlbumFeature} />
      </Routes>
    </div>
  );
}

export default App;
