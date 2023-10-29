import { useState } from "react";

const Test = () => {
  const [num, setNum] = useState(0);
  const increase = () => {
    setNum((prev) => prev + 1);
  };
  const decrease = () => {
    if (num <= 0) {
      alert("Number cannot be less than 0.");
    } else {
      setNum((prev) => prev - 1);
    }
  };

  const datas = [
    { name: "ateeth", age: 21 },
    { name: "bibek", age: 20 },
    { name: "aarju", age: 15 },
  ];
  return (
    <>
      &nbsp; &nbsp;
      <button onClick={decrease}>-</button>
      &nbsp; &nbsp;
      {num}
      &nbsp; &nbsp;
      <button onClick={increase}>+</button>
      <hr />
      <br />
      {datas.map((data) => (
        <li>{data.name}</li>
      ))}
    </>
  );
};

export default Test;
