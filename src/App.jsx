import './App.css'
import Header from './components/header/Header'

function App() {

  return (
    <>
  <Header />
  <section>
    <span>Extensions List</span>
    <ul>
      <button>All</button>
      <button>Active</button>
      <button>Inactive</button>
    </ul>
  </section>
  </>
  )
}

export default App
