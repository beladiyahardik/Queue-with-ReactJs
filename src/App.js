import './App.css';
import {useEffect, useState} from 'react';

function App() {
  //Hook
  const [queue , setQueue] = useState([]);
  const [queueIs , setQueueIs ] = useState('');
  const [revArr , setRevArr] = useState([]);

  useEffect(()=>{
    const notice = document.querySelector('.notice');
    notice.textContent = ""
    notice.style.visibility = "hidden";
  } , [])

  useEffect(()=>{
    console.log(queue);
    const reverseItem = queue.map(item => item).reverse();
    setRevArr(reverseItem);

    const notice = document.querySelector('.notice');
    notice.style.visibility = "hidden"

  },[queue])

  //Function For Add Queue
  const queueIt = () =>{
    if(queueIs !== ''){
      if(queue.length < 5){
        setQueue([...queue , queueIs])
        setQueueIs('');
      }
      else{
        const notice = document.querySelector('.notice');
        notice.style.visibility = "visible";
        notice.textContent = "Queue Overflow";
      }
    }else{
      console.log("Enter Queue first");
      const notice = document.querySelector('.notice');
      notice.style.visibility = "visible";
      notice.textContent = "Enter Queue";
    }
  }

  //Function For Remove Queue
  const fireIt = () => {
    if(queue.length > 0){
      queue.shift();
      setQueue([...queue]);
    }
    else{
      const notice = document.querySelector('.notice');
      notice.style.visibility = "visible";
      notice.textContent = "Queue Underflow"
    }
  }

  return (
    <div className="App">
      <div className="inputs">
        <input type="text" 
        
         value={queueIs} placeholder="Enter Queue" onChange={e => setQueueIs(e.target.value)}/>
        <button onClick={queueIt}>Queue It</button>
        <button onClick={fireIt}>Fire It</button>

        <div className="queueList">
          {
            revArr.map((item)=>(
              <p className="queueSingle">{item}</p>
            ))
          }
        </div>

      </div>
        <div className="notice">
          <div className="noticeText"></div>
        </div>
    </div>
  );
}

export default App;
