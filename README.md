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

## Homework:

1. create Login component
1. use this component inside App.js and create an array of users to pass them as props to Login.
1. Create state inside this component , email and password with initial values "".
1. save the values of input to state.
1. create Login button : --> check if the inputs of user are correct or not 
1. create register button : --> to recreate new document
1. additional: --> show success message with green color || failed message and red color
1. additional: --> add button change from Login and Register