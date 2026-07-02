// import React, {Fragment, useState} from 'react';

// const CounterView = ({counterValue, onIncrement}) => {
//     <Fragment>
//         <p>{counterValue}</p>
//         <button type="button" onClick={onIncrement}>
//             Increment
//         </button>
//     </Fragment>
// }

// const Counter = () => {
//     const [counter, setCounter] = useState(0);

//     const onIncrementHandler = () => {
//         setCounter(counter + 1);
//     };

//     return (
//         // <Fragment>
//         //     <p>{counter}</p>
//         //     <button type="button" onClick={onClickHandler}>
//         //         Increment
//         //     </button>
//         // </Fragment>
//         <CounterView
//          counterValue={counter} 
//          onIncrement={onIncrementHandler}
//         />
//     );
// };

// export default Counter;
//
//
import React, {useState} from 'react';
import InteractiveView from './InteractiveView';


const Counter = () => {
    const [counter, setCounter] = useState(0);

    const onIncrementHandler = () => {
        setCounter(counter + 1);
    };

    return (
        // <Fragment>
        //     <p>{counter}</p>
        //     <button type="button" onClick={onClickHandler}>
        //         Increment
        //     </button>
        // </Fragment>
        <InteractiveView
            value={counter}
            onAction={onIncrementHandler} 
            actionText="Increment"
        />
    );
};

export default Counter;