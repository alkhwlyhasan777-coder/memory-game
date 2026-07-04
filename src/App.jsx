import FruitGrid from './components/Fruitgrid.jsx';
import './index.css'
function App() {
  const cardValues = [
    '🍓',
    '🍅',
    '🍒',
    '🍏',
    '🍇',
    '🥝',
    '🍌',
    '🥑',
    '🍓',
    '🍅',
    '🍒',
    '🍏',
    '🍇',
    '🥝',
    '🍌',
    '🥑',
  ];


  return (
      <FruitGrid cardValue={cardValues} />
  )
}

export default App
