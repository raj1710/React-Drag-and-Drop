import React from "react";
import Board from "./Component/Both/Board";
import VerticalBoard from "./Component/VerticalBoard";

import HorizontalBoard from "./Component/Horizontal/HorizontalBoard";
import Kanban from "./Component/Both/Kanban"
import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <VerticalBoard />
        <HorizontalBoard />
        {/* <Kanban /> */}
        <Board />
      </QueryClientProvider>
    </div>
  );
}

export default App;
