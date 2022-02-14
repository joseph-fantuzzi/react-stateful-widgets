import React from "react";
import { render } from "react-dom";

import Counter from "./components/Counter";
import Input from "./components/Input";
import Moods from "./components/Moods";
import Spinner from "./components/Spinner";
import Squares from "./components/Squares";
import Programmers from "./components/Programmers";
import ToDo from "./components/ToDos";
import TicTacToe from "./components/Tic";

render(
  <>
    <Counter />
    <Moods />
    <Spinner />
    <Input />
    <Squares />
    <Programmers />
    <ToDo />
    <TicTacToe />
  </>,
  document.querySelector("#root")
);
