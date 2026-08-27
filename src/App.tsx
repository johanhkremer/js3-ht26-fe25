import './App.css'
import Greeting from './Greet';

function App() {

  const test = (text: string) => {
    return text
  }

  console.log(test("test 🔥"))

  return (
    <>
      <h1>Min första React app!</h1>
      <Greeting name="Johan" age={45} />
    </>
  )
}

export default App
