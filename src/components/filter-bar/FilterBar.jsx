import './index.css'

const FilterBar = ({setFilter}) => {

  return (
    <section>
      <span>Extensions List</span>
        <ul>
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter(true)}>Active</button>
          <button onClick={() => setFilter(false)}>Inactive</button>
        </ul>
  </section>
  )
}

export default FilterBar
