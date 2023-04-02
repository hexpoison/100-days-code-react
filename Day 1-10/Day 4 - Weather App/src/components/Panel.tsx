import Card from './Card'
import Search from './Search'

function Panel() {
  return (
    <div className="panel">
      <div className='wrapper'>
        <Search />
        <div className='top-card'>
          <Card />
        </div>
        <div className='future-cards'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Panel;
