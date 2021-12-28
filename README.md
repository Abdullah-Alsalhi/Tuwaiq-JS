# Tuwaiq-JS

**Tuwaiq-Academey course of JavaScript programming language.**

## TodoList project

*Requirement*

## Day 1
- ~~initiate package.json and install express & mongoose~~
```bash
npm init
npm i express mongoose
```
- ~~create javascript files for server and db and link them together.~~
- ~~initiate the server using express and mongoose.~~
- ~~create Schema Todo consisting of ***title*** and ***isCompleted***.~~
- ~~create get function to return the data in the database.~~
- ~~create post function returns "Created New Todo Successfully".~~
- ~~create delete function returns "Deleted One Todo Successfully".~~
- ~~create put function returns "Updated One Todo Successfully".~~
- ~~initiate additional endpoint ***get, post, delete and put*** do different operations.~~
- ~~run the server using nodemon and postman.~~

## Day 2

- ~~create get function returns tasks completed.~~
- ~~create get function returns tasks not completed.~~
- ~~create delete function deletes all the tasks completed.~~
- ~~create put function update the task status (true || false).~~

## Day 3

- ~~create frontend folder using react~~
```shell
npx create-react-app frontend
```
- ~~change the code in App.js.~~
- ~~create Todo component~~
- ~~create Tasks State~~
- ~~create button GET TASKS to fetch data from Backend~~
- ~~instead of using button , use useEffect~~
- ~~show Tasks data in Todo.~~
- ~~show isCompleted data as checkbox input and Horizontal line on Title.~~


## Day -4

- ~~Add delete button.~~
- ~~when click on delete button delete chosen todo.~~
- ~~HINT: the button should be able call function in App.js from Todo.~~
- ~~should use axios on delete endpoint /tasks/:id~~
- ~~add checkbox input button ~~
- ~~when click on the button send edit to chosen Todo~~
- ~~HINT: the button should be able to call function in App.js from Todo.~~
- ~~should use axios on endPoint put --> tasks/:id~~

- ~~enhance the design using css~~
- ~~add delete button <delete all>~~
- ~~when click on <delete all> we send request to backend to delete all the tasks.~~
- ~~add button <get finished>~~
- ~~when click on <get finished> we send request to backend to get all finished todo.~~
- ~~add <get pending> button~~
- ~~when click on <get pending> we send request to backend to get all unfinished todo.~~


## Second Week

## Day 1

*Do the followings*

1. ~~create Schema Users consisting of email,password,username.~~
1. ~~create post function returns Created New User Successfully for Register.~~
1. ~~create post function return return login for Login.~~
1. ~~create Register component for react.~~
1. ~~create State with username,email,password~~
1. ~~create Register button to send post request to backend.~~
1. ~~create Login component~~
1. ~~create State with username,email~~
1. ~~create login button to send post request to backend for login~~
1. Additional: make one of Login || Register show at a time.

## Day 2

**React router**

- install react router dom
```bash
npm install react-router-dom@6
```
- create route for Home, Register and Login.
- Additional: read about Link to add buttons to go for each Route
- create button <Don't have an account?> to go to Register in Login component
- create button <Have an account?> to go to Login in Register component
- create state in App component {isLoggedIn} true || false
- create state in App component {username} => username
- create <Logout> button to logout => delete username from state
- read about route , link , Redirect 