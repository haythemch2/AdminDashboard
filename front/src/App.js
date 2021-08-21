import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  let data = {};
  useEffect(() => {
    axios.get("http://localhost:8080/products?Price=42").then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">Hi</header>
    </div>
  );
}

export default App;
