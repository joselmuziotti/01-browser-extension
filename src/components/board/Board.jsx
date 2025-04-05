import { useState } from 'react'
import Card from '../card/Card'
import FilterBar from '../filter-bar/FilterBar'
import data from '../../js/data.json'
import './index.css'

const Board = () => {
  const [info, setInfo] = useState(data);
  const [filter, setFilter] = useState('all');


  const toggleActive = (name) => {
    const updated = info.map((filter) =>
      filter.name === name ? { ...filter, isActive: !filter.isActive } : filter
    );
    setInfo(updated);
  }

  const filteredExtensions = info.filter(ext => {
    if (filter === 'all') return true
    return ext.isActive === filter
  })
  
  return (
    <>
    <FilterBar setFilter={setFilter} />

    <main>

    {filteredExtensions.map((info) =>

      <Card 
      key={info.name}
      name={info.name}
      logo={info.logo}
      description={info.description}
      isActive={info.isActive}
      toggleActive={toggleActive}
      />)
      
      };

    </main>
    </>
  )
}

export default Board
