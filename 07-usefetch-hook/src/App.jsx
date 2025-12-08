import './App.css'
import { useFetch } from './hooks/useFetch'

function App() {
  const {finalData} = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
  <div>
    {JSON.stringify(finalData)}
  </div>
)

}

export default App
