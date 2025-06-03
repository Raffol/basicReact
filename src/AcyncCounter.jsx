import React, {useState} from "react";

const AcyncCounter =() => {
    const [count,setCount] = useState(0);
    const handleSyncIncrease =()=>{
        setCount(count+1);
        setCount(count+1);
    };
    const handleAsyncIncrease = () => {
        setTimeout(() => {
            setCount(count+1);
            setCount(count+1);
        }, 100);
    };
    const handleFunctionalIncrease = () => {
        setTimeout(() => {
            setCount(prev => prev + 1);
            setCount(prev => prev + 1);
        }, 100);
    };
    function aC() {

    }
    return(
      <div style = {{ padding: '20px' }}>
          <h2 style={}>Счётчик: {count}</h2>

          <button onClick={handleSyncIncrease}>Увеличить</button>
          <button onClick={handleAsyncIncrease}>Асинхронное увеличение</button>
          <button onClick={handleFunctionalIncrease}>Функциональное увеличение</button>
      </div>
    );
};
export default AcyncCounter;