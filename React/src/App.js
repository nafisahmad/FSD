// import React from 'react'; 
import React,{useState} from 'react'; 

// import Hello from './sayHello';
import Tweet from './tweet';

function App() {
  // 1.const sayHello = () =>{
  //   console.log("hey");
  // };

  // 2.const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  

  //2.  const increment = () =>{
  //   setCount(count+1);
  //   setRed(!isRed);
  // };
  const [users, setUsers] = useState([
    {name: 'sam', message: "hwyio"},
    {name: 'sm', message: "hwio"},
    {name: 'am', message: "hyio"},
  ]);

  return(
    <div className="app">
      {/* {/* <h1>Hello React</h1>
      <button onCLick={sayHello}> CLick Me</button> */}
      {/* <h1>This is app component</h1>
      <Hello/> */} 

      {/* <h1>Hello react</h1> */}
      {/* <Tweet name="Sam Nfs" message="kmsdkamdsamd"/>
      <Tweet name="Nfs 1331" message="asjisdfoidsds"/>
      <Tweet name="Sam jon" message="lolololo"/>
      <Tweet name="Sa s" message="lets gooo"/> */}
      {/* 2. <h1 className={isRed ? 'red' : "" }>Change my color</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1> */}

      {users.map(user =>{
        <Tweet name={user.name} message={user.message}/>
      })}
    </div>
  );
}

export default App;
