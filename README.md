# Introduction
Lets take about Redux Toolkit this demo will briefly introduce you to Redux Toolkitand teach you how to start using it correctly.

# Setup - Install Redux Toolkit and React-Redux
Add the Redux Toolkit and React-Redux packages to your project:

```
npm install @reduxjs/toolkit react-redux
```
### Note: The only files I need to uncomment in are index.js, store.js, then Counter.js.

# Store configuration
## What is the store (`store.js`)
I have already create a boilerplate `store.js` to build from (show `./redux/store.js`)
This is where we will add our slices that we create. If you are not fimilar with the term Slice in terms of redux, you
can think of it as a "slice" of your redux store that holds specific functionality or data. For our example we will be
creating a simple couner slice/reducer to hold our current count.

## Adding `<Provider>` To provide our store to our app
(Go to index.js)
By uncommenting the provider and adding in the two imports, we are providing our newly created redux store to the index.js by using the `<Provider>` element. Its provided to our `index.js` because that  wraps our app.

Our `App` component and all children components can now read state from the store, and dispatch actions to the store. However, we're still missing something. Where and how are the React-Redux hooks finding the right Redux store? A hook is a JS function, so it can't automatically import a store from store.js by itself.

Instead, we have to specifically tell React-Redux what store we want to use in our components. We do this by rendering a `<Provider>` component around our entire `<App>`, and passing the Redux store as a prop to `<Provider>`. After we do this "once", every component in the application will be able to access the Redux store if it needs to.

Let's add that to our main index.js file:

## Create a Redux State Slice
I have already added the file named `./redux/slice/counterSlice.js`. In that file we import `createSlice` API from Redux Toolkit.

Creating a slice requires three things: a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators (line 23) and the reducer function (line 25) for the whole slice.

Redux requires that we write all state updates immutably, by making copies of data and updating the copies. However, Redux Toolkit's createSlice and createReducer APIs "inside" to allow us to write "mutating" update logic that becomes correct immutable updates.

## Add our new Slice Reducer to the Store
Instructor Note : Go to `./redux/store.js` and uncomment out the import statement and the line in the reducer object. 

We're bringing in the default export from counterSlice here. By adding the counter field and `counterReducer` import to the Store configuration we are telling the store to use this slice reducer function to handle all updates to the counter slice state.

## Use Redux State and Actions in a React Component
Instructor Note : Go to `./component/Counter.js` and uncomment out the import statements and the lines in component.

Now we can use the React-Redux hooks to let React components interact with the Redux store. We can read data from the store with `useSelector`, and dispatch actions using `useDispatch`.

## Result
Now, any time you click the "Increment" and "Decrement" buttons:

- The corresponding Redux action will be dispatched to the store
- The counter slice reducer will see the actions and update its state
- The `<Counter>` component will see the new state value from the store and re-render itself with the new data

# What You've Learned
That was a brief overview of how to set up and use Redux Toolkit with React. Recapping the details:

## SUMMARY
- Create a Redux store with `configureStore`
  - `configureStore` accepts a `reducer` function as a named argument
  - `configureStore` automatically sets up the store with good default settings
- Provide the Redux store to the React application components
  - Put a React-Redux `<Provider>` component around your `<App />`
  - Pass the Redux store as `<Provider store={store}>`
- Create a Redux "slice" reducer with `createSlice`
  - Call `createSlice` with a string name, an initial state, and name reducer functions
  - Reducer functions may "mutate" the state using Immer
  - Export the generated slice reducer and action creators
- Use the React-Redux `useSelector/useDispatch` hooks in React components
  - Read data from the store with the `useSelector` hook
  - Get the `dispatch` function with the `useDispatch` hook, and dispatch actions as needed