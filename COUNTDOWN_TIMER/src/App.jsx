import { useState, useEffect } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(null);
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    if (count === null) return;

    if (count === 0) {
      setBgColor("red");
      return;
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  const startCountdown = () => {
    const number = Number(inputValue);
    if (!isNaN(number) && number >= 0) {
      setCount(number);
      setBgColor("white");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: bgColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="number"
        placeholder="Enter a number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      />

      <button
        onClick={startCountdown}
        style={{ marginTop: "10px", padding: "10px 20px" }}
      >
        Start
      </button>

      {count !== null && (
        <h1 style={{ marginTop: "20px" }}>{count}</h1>
      )}
    </div>
  );
}

export default App;




