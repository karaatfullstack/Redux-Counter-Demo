# Setup - Install Redux Toolkit and React-Redux
This project was first initialized with [Create React App](https://create-react-app.dev/). If you want to start from scratch, use this command rather than cloning the project:
```
npx create-react-app name-of-your-app
```
Make sure to run npm install in your project, and also to add the Redux Toolkit and React-Redux packages to your project:

```
npm install @reduxjs/toolkit react-redux
```
### Note: The only files you need to uncomment in are index.js and counter.js.

# Store Configuration
## What is the store? (`store.js`)
We already have a boilerplate `store.js` to build from (located at `./redux/store.js`)
This is where we will add the slices we create. A slice is a piece of your redux store that holds specific functionality or data. For our example we will be creating a simple counter slice/reducer to hold our current count.

## Adding `<Provider>` 
1. Go to `src > index.js`. You will see 4 lines commented out - these are the 4 lines we need to add in to make this work with Redux.
By uncommenting the <Provider> which wraps around the <App>, we are 'providing' our newly-created Redux store to the index.js. 

2. We also need to uncomment the two imports at the top to bring in the store and provider. With the <App> wrapped in the <Provider>, our component and all children components (in this case, just the <Counter>) can now read state from the store and dispatch actions to it. 

  3. We tell React-Redux which store we want to use in our components by passing the Redux store as a prop to `<Provider>` (on line 10, store={store}). After we do this onc, every component in the application will be able to access the Redux store if it needs to.
Make sure all 4 lines are uncommented in index.js.

## Create a Redux State Slice
1. We already have a file named `./redux/slice/counterSlice.js`. In that file we import the `createSlice` API from Redux Toolkit.

2. Creating a slice requires three things: a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators (line 23) and the reducer function (line 25) for the whole slice.

3. Redux requires that we write all state updates immutably, by making copies of data and updating the copies. Fortunately, Redux Toolkit's createSlice and createReducer APIs allow us to write "mutating" update logic which will become immutable updates.

## Use Redux State and Actions in a React Component
  1. Go to `./redux/store.js`, which is where we're bringing in the default export from counterSlice. By adding the counter field in the reducer, and the  `counterReducer` import to the Store configuration, we are telling the store to use this slice reducer function to handle all updates to the counter slice state.

  2. In`./component/Counter.js`, there are several lines to uncomment. Start with the import statements at the top: one brings in named exports from counterSlice, and the other brings in two functions we need from react-redux.

  3. Next, uncomment lines 6 and 10, and take note of the comments that are left.
  - dispatch triggers the reducer, which updates the state
  - useSelector reacts to value changes in the store to update the component
 
  4. Finally, uncomment lines 17 and 26, which allow our buttons to run dispatch() with onClick() events.

Now we're using the React-Redux hooks to let React components interact with the Redux store. We can read data from the store with `useSelector`, and dispatch actions using `useDispatch`.

## Result
Any time you click the "Increment" and "Decrement" buttons:

- The corresponding Redux action will be dispatched to the store
- The counter slice reducer will see the actions and update its state
- The `<Counter>` component will see the new state value from the store and re-render itself with the new data


## Quick Recap
- Create a Redux store with `configureStore`
  - `configureStore` accepts a `reducer` function as a named argument
  - `configureStore` automatically sets up the store with good default settings
- Provide the Redux store to the React application components
  - Put a React-Redux `<Provider>` component around your `<App />`
  - Pass the Redux store as `<Provider store={store}>`
- Create a Redux "slice" reducer with `createSlice`
  - Call `createSlice` with a string name, an initial state, and name reducer functions
  - Reducer functions may "mutate" the state using Immer under the hood
  - Export the generated slice reducer and action creators
- Use the React-Redux `useSelector/useDispatch` hooks in React components
  - Read data from the store with the `useSelector` hook
  - Get the `dispatch` function with the `useDispatch` hook, and dispatch actions as needed
