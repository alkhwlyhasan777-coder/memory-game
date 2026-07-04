import { useState, useEffect } from "react";
import Card from "./Card";
import { shuffleArray } from "./utils/shuffle";
import Header from "./Header";

function FruitGrid({ cardValue }) {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  console.log(matchedCards)

  useEffect(() => {
    if (score === 8) {
      if (moves <= 10) {
        setTimeout(() => {
        alert("Excellent! You won with only " + moves + " moves.");
          
        }, 100);
      } else {
        setTimeout(() => {
          alert("You've won!")
        }, 2000);;
      }
      initializeGame();
    }
  }, [score]);

  useEffect(() => {
    if (moves === 10) {
      alert("Game Over");
  
      setTimeout(() => {
        initializeGame();
      }, 1000);
    }
  }, [moves]);

  // initalize the game by shuffling the cards and setting the initial state
  const initializeGame = () => {
    const shuffledCards = shuffleArray(cardValue);
    const finalCard = shuffledCards.map((value, index) => ({
      id: index,
      value,
      isMatched: false,
      isFlipped: false,
    }));
    setCards(finalCard);
    setScore(0);
    setMoves(0);
    setMatchedCards([]);
    setFlippedCards([]);
  };

  // useEffect(() => {
  useEffect(() => {
    initializeGame();
  }, [ ]);

  const handleClickCard = (card) => {
    if (card.isFlipped || card.isMatched) {
      return;
    }
    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return { ...c, isFlipped: true };
      } else {
        return c;
      }
    }
    );


    setCards(newCards);
    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);
    if (flippedCards.length === 1) {
      const firstCard = cards[flippedCards[0]];



      if (firstCard.value === card.value) {

        setTimeout(() => {
          setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
          setScore((prev) => prev + 1);

            const newMatchCards = cards.map((c) => {
              if (c.id === card.id || c.id === firstCard.id) {
                return { ...c, isMatched: true };
              } else {
                return c;
              }
            });
          console.log(newMatchCards)
          setCards((prev) => prev.map((c) => {
            if (c.id === card.id || c.id === firstCard.id) {
              return { ...c, isMatched: true };
            } else {
              return c;
            }
          })
          );
          setFlippedCards([]);
        }, 25)
        
      } else {




        setTimeout(() => {
          const flipped = newCards.map((c) => {
            if (newFlippedCards.includes(c.id) || c.id === card.id) {
              return { ...c, isFlipped: false };
            } else {
              return c;
            }
          });
          setCards(flipped);
        }
        ,(250));
      }
      setFlippedCards([]);
      setMoves((prev) => {
        if (firstCard.value !== card.value) {
          return prev + 1;
        } else if (prev === 10){
          initializeGame();
        } else {
          return prev;
        }
      });
    }
  }


    return (
      <>
        <Header score={score} moves={moves} onReset={initializeGame} />
        <div className="cards-grid">
          {cards.map((card) => (
            <Card key={card.id} card={card} onClick={handleClickCard} />
          ))}
        </div>
      </>
    );
}
  

export default FruitGrid;




// setCards((prev) => {
//   return prev.map((c) => {
//     if (c.id === card.id || c.id === firstCard.id) {
//       return { ...c, isMatched: true };
//     }

//     return c;
//   });
// import { useState } from "react";
// import { useEffect } from "react"
// import Card from "./Card"


// function Fruitgrid({ cardValue }) {
//   const [cards, setCards] = useState([]);

//   const initalizieGame = () => {

//     const finalCard = cardValue.map((value, index) =>
//     ({
//       isMatched: false,
//       isFlipped: false,
//       value,
//       id: index
//     })
//     )
//     setCards(finalCard)
//   }
//   useEffect(() => {
//     initalizieGame()
//   },[])
//   return (
//     <div className="cards-grid">
//       {cards.map((card) => (
//         <Card
//           key={card.id}
//           card={card}
//         />
//       ))}
//     </div>
//   )
// }

// export default Fruitgrid