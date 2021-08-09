import react from 'react';
import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count+1)
  const decrement = () => setCount(count-1)
  const increment2 = () => setCount((previousCount) => previousCount+1)
  const decrement2 = () => setCount((previousCount) => previousCount-1)
  const resetcount = () => setCount(0)
  const x2count = () => setCount(previousCount => previousCount *2)
  const x3count = () => setCount(previousCount => {
    if((previousCount % 3) == 0) {
      return previousCount / 3
    }
  })
  
  return (
    <>
    <div>
      count:{count}
    </div>
    <div>
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
    </div>
    <div>
    <button onClick={increment2}>+1</button>
    <button onClick={decrement2}>-1</button>
    </div>
    <div>
    <button onClick={resetcount}>Reset</button>
    <button onClick={x2count}>x2</button>
    <button onClick={x3count}>x3</button>
    </div>
    </>
  );
}

export default App;
