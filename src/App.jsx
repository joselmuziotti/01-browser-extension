import './App.css'
import FilterBar from './components/filter-bar/FilterBar'
import Header from './components/header/Header'

function App() {

  return (
    <>
  <Header />
  <FilterBar />
    <main>
      <section>

        <article>
          <img src="/images/logo-devlens.svg" alt="" />
            <div>
              <span>DevLens</span>
              <p>Quickly inspect page layouts and visualize element boundaries.</p>
            </div>
        </article>

        <div className='bottom-card' >
          <button>Remove</button>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
        </div>

      </section>
    </main>
  </>
  )
}

export default App
