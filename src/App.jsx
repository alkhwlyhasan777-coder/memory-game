import FruitGrid from './components/FruitGrid';
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
