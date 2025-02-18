import { useState } from "react";
import Item from "./components/Item";
import "./styles/app.css"
 function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const addList = (e) => {
    e.preventDefault();
    setList([...list, input]);
    setInput("");
  };

  const handleDelete = (ind) => {
    const filteredList = list.filter((items, index) => index !== ind);
    setList(filteredList);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <div className="wrapper">
        <div className="inputBx">
          <form onSubmit={addList}>
            <input type="text" value={input} onChange={handleInputChange} />
            <button className="add-btn">Add</button>
          </form>
        </div>
        <ul className="list-items">
          {list.map((items, ind) => {
            return (
              <Item
                key={ind}
                ind={ind}
                items={items}
                handleDelete={handleDelete}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default App;