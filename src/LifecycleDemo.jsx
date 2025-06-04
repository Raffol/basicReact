import React, {useEffect, useState} from "react";

  export const LifecycleDemo = () => {
    const [message, setMessage] = useState('Hehlo!');
    useEffect(()=>{
        console.log("Component Mounted!");
        return()=>{
            console.log("UnComponent Mounted!");
        }
    },[]);
      useEffect(() => {
          console.log(`Message changed to: ${message}`);
      }, [message]);
      return(
        <div className="lifecycledemo">
            <h3>LifeCycleDemo</h3>
            <input type="text"
                   value={message}
                   onChange={(e)=>setMessage(e.target.value)}
                   placeholder="Введите текст"
            />
        </div>
      );
  };

  export default function Cycle(){
      const [showComponent, setShowComponent] = useState(true);
      return(
          <div className="Cyc">
              <h1>Learning useEffect</h1>
              <button onClick={() =>
                        setShowComponent(prev => !prev)}>
                  {showComponent ? 'Hide' : 'Show'} Component
              </button>
              {showComponent && <LifecycleDemo/>}
          </div>
      );
  }

