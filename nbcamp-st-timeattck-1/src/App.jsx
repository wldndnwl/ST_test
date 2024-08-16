import { useState } from "react";
import "./App.css";

function App() {
  const [Input, setInput] = useState("");
  const [Gold, setGold] = useState("");
  const [Silver, setSilver] = useState("");
  const [Bronze, setBronze] = useState("");
  const [skfks, setNewc] = useState([]);

  const addName = (e) => {
    e.preventDefault();
    const newC = {
      name: Input,
      gold: Gold,
      sliver: Silver,
      bronze: Bronze,
    };
    setNewc([...skfks, newC]);

    console.log(skfks);
  };

  return (
    <div className="main">
      <h3>파리 올림픽</h3>
      <form onSubmit={addName}>
        <label>국가명</label>
        <input
          type="text"
          placeholder="국가 입력"
          id="name"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <div>
          <label>금메달</label>
          <input
            type="number"
            placeholder="0"
            id="gold"
            onChange={(e) => {
              setGold(e.target.value);
            }}
          />
        </div>
        <div>
          <label>은메달</label>
          <input
            type="number"
            placeholder="0"
            id="silver"
            onChange={(e) => {
              setSilver(e.target.value);
            }}
          />
        </div>
        <div>
          <label>동메달</label>
          <input
            type="number"
            placeholder="0"
            id="bronze"
            onChange={(e) => {
              setBronze(e.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit">국가 추가</button>
          <button>업데이트</button>
        </div>
      </form>
      <div>
        <table>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
          </tr>
          <tbody>
            {skfks.map(function (skfk) {
              return (
                <tr>
                  <td>{skfk.name}</td>
                  <td>{skfk.gold}</td>
                  <td>{skfk.silver}</td>
                  <td>{skfk.bronze}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
