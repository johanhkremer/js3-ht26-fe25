import ConditionalRendering from "./ConditionalRendering";
import Counter from "./Counter";
import MultiState from "./MultiState";


function App() {

  return (
    <>
      <h1>React</h1>

      <h2>Use State</h2>
      <Counter />
      <Counter />

      <h2>Use state + conditional render</h2>
      <ConditionalRendering />

      <h2>Multi state</h2>
      <MultiState />
    </>
  )
}

export default App
