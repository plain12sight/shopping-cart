import logo from "./logo.svg";
import "./App.css";
import Header from "./component.jsx/Header";
import Main from "./component.jsx/Main";
import Basket from "./component.jsx/Basket";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div>
        <Main> </Main>
        <Basket> </Basket>
      </div>
    </div>
  );
}

export default App;
