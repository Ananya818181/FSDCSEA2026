import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [data, setData] = useState([]);

  async function getfetchData()
{

  const serverData= await fetch('http://localhost:4002/data');
  const jsonData=await serverData.json();
  setData(jsonData.msg);
} 
 return (
    <>
      <h2> Welcome to NODE FETCH API</h2>
      {JSON.stringify(data)}
      <button onClick={getfetchData}> fetchData</button>
    </>
  )
}

export default App
