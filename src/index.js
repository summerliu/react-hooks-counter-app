import React from "react";
import { render } from "react-dom";
import { StoreProvider } from "./store/store";
import Counter from "./components/counter";

const App = () => (
  <StoreProvider>
    <Counter />
  </StoreProvider>
);

const rootElement = document.getElementById("root");
render(<App />, rootElement);
