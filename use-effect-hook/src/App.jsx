import { useState, useEffect } from 'react'
import DataFetcher from './components/DataFetcher';



function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]); // Only runs when 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <DataFetcher/>
    </div>
  );
}
export default App;
