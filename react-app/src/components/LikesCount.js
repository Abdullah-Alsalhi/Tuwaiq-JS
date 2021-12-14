import React, { useState } from "react";

export default function LikesCount() {
  const [count, setCount] = useState(5);
  const incCount = () => {
    setCount(count + 1);
  };

  const decCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={incCount}>UP</button>
      <button onClick={decCount}>DOWN</button>
      <p>Likes: {count}</p>
    </div>
  );
}
