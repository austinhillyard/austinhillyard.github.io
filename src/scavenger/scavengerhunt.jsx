import React, { useState } from 'react';

const scavengerData = [
  {cat: "Rare", item: "Find any book older than 1300", points: 30},
  {cat: "Rare", item: "Find a non-religion/spiritual book older than 1900", points: 15},
  {cat: "Rare", item: "Find a Charles Dickens book printed before 1980", points: 15},
  {cat: "Rare", item: "Find a C.S. Lewis book printed before 1980", points: 15},
  {cat: "Rare", item: "Find a copy of The Hobbit older than 1980", points: 15},
  {cat: "Rare", item: "Find a first edition Harry Potter book", points: 20},
  {cat: "Rare", item: "Find a signed book by the author", points: 25},
  {cat: "Rare", item: "Find a non-copy handwritten letter or manuscript", points: 20},
  {cat: "Rare", item: "Find an early U.S. history item", points: 15},

  {cat: "Books You've Read", item: "Find 1 book you've read", points: 5},
  {cat: "Books You've Read", item: "Find 3 books you've read (not same author)", points: 10},
  {cat: "Books You've Read", item: "Find 5 books you've read (not same author)", points: 15},
  {cat: "Books You've Read", item: "Find 10 books you've read (not same author)", points: 25},
  {cat: "Books You've Read", item: "Find 1 book you've both read", points: 10},
  {cat: "Books You've Read", item: "Find 3 books you've both read (not same author)", points: 20},
  {cat: "Books You've Read", item: "Find 5 books you've both read (not same author)", points: 30},

  
  {cat: "Personal Connections", item: "A book that matches your date's vibe (they must agree)", points: 20},
  {cat: "Personal Connections", item: "A book that reminds you of a childhood memory", points: 10},
  {cat: "Personal Connections", item: "Find a book you think your date would like (points if they agree)", points: 20},
  {cat: "Personal Connections", item: "Find a book in a non-English language you know (read aloud & translate)", points: 40},
  {cat: "Personal Connections", item: "Find a Book of Mormon in a non-English language you know", points: 15},

  {cat: "Bonus", item: "Find a book turned into a movie AND a reference to that movie in the store", points: 30},
  {cat: "Bonus", item: "Find a lethal weapon", points: 15},
  {cat: "Bonus", item: "Buy a book from the store!", points: 50},
  {cat: "Bonus", item: "Be on a date with a cool person!", points: 20}
];

const CategoryHeader = ({ title }) => (
  <h2 style={{ marginTop: '30px', borderBottom: '1px solid #ccc' }}>{title}</h2>
);

const ScavengerItem = ({ item, points, checked, onChange }) => (
  <div style={{ margin: '5px 0' }}>
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} /> {item} — <strong>{points} pts</strong>
    </label>
  </div>
);

const MoonsScavengerHunt = () => {
  const [checkedState, setCheckedState] = useState(Array(scavengerData.length).fill(false));

  const handleToggle = (index) => {
    const updatedState = [...checkedState];
    updatedState[index] = !updatedState[index];
    setCheckedState(updatedState);
  };

  const totalPoints = checkedState.reduce((sum, checked, idx) => checked ? sum + scavengerData[idx].points : sum, 0);

  let lastCategory = "";

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Moon's Rare Books Scavenger Hunt</h1>
      <h3>Total Points: {totalPoints}</h3>
      {scavengerData.map((entry, index) => {
        const showCategory = entry.cat !== lastCategory;
        lastCategory = entry.cat;
        return (
          <React.Fragment key={index}>
            {showCategory && <CategoryHeader title={entry.cat} />}
            <ScavengerItem
              item={entry.item}
              points={entry.points}
              checked={checkedState[index]}
              onChange={() => handleToggle(index)}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default MoonsScavengerHunt;
