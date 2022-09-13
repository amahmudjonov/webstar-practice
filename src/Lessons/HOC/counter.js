// import React, { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }
//   return (
//     <div>
//       <button onClick={increment}>{count} marta bosildi</button>
//     </div>
//   );
// };

// export default Counter;
import React, { Component } from 'react';
import withCoounter from './withCoounter';

class Counter extends Component {
    constructor(){
        super();
        this.state={
            count: 0
        }
    }
    render() {
        const {increment, count} = this.props
        return (
            <div>
                <button onClick={increment}>{count} marta bosildi</button>
            </div>
        );
    }
}

export default withCoounter(Counter);