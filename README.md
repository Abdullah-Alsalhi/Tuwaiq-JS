# Tuwaiq-JS

**Tuwaiq-Academey course of JavaScript programming language.**

## React API

***Do the followings:***

1. create get function to send GET request to api
```javascript
const getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((response) => {
      setTask(response.data);
      // console.log(response.data);
    });
  };
```
2. Get All button to send GET request to api change on state with name tasks.
3. create Todo component and use it in App.js
4. pass tasks array as props to Todo.
5. show these data in Todo
6. additional : instead of using button use useEffect function.
```javascript
useEffect(() => { // when the page rendered this function will call getData() directly
    getData();
  }, []);
```