# Tuwaiq-JS

**Tuwaiq-Academey course of JavaScript programming language.**

## React State

*Do the followings:*

1. create component LinkesCount.js
1. use this component in App.js
1. create state inside this component and with initial state = 5
1. add up button and down button 
1. up : --> increase likes + 1
1. down : --> decrease likes -1
```javascript
      <button onClick={incCount}>UP</button>
      <button onClick={decCount}>DOWN</button>
```
```javascript
const [count, setCount] = useState(5);
  const incCount = () => {
    setCount(count + 1);
  };

  const decCount = () => {
    setCount(count - 1);
  };
```