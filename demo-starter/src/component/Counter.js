// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from '../redux/slice/counterSlice';

export function Counter() {
    let count = 0
    // count = useSelector(state => state.counter.value); 
    // →  lets you pull values from the state and this component pulls from the store ← //
    // →  two parts - component uses dispatch to trigger the reducer, which updates the state ← //
    // →  on the other side, useSelector reacts to value changes in the store to update the component ← //
    // const dispatch = useDispatch(); 
    // →  dispatch sends the action, increment or decrement ← //
    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                // onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                // onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};
