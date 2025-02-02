import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState([]);


  useEffect(() => {
    fetch('http:/localhost:5002/data')
      .then(res => res.json())
      .then(data => setCount(data))
  },[])

  return (
    <div>
      <p>my data {count.length}</p>
    </div>
  );
}

export default App;
