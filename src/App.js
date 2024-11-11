import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [gifts, setGifts] = useState(data);
  const [showText, setShowText] = useState(false);
  
  const removeGift = (id) => {
    let newGift = gifts.filter(gifts => gifts.id !== id);

    setGifts(newGift)
  }

  const setShowTextClick = (element) => {
    element.showMore = !element.showMore;
     setShowText(!showText)
  }

  return (
    <div>
      <div className='container'>
      <h1>the {gifts.length}  best tech gifts</h1>
      </div>

{gifts.map((element => {
  const{ id, gift, description, image,showMore } = element;

  return ( <div key={id}>
<div className='container'>
<h2> {id} -  {gift} </h2>
</div>

<div className='container'>
<img src= {image} width="300px" alt="gadgets"/>
</div>

<div className='container'>
<p>{ showMore ? description : description.substring(0, 180) }
<button onClick={() => setShowTextClick(element)}>{showMore ? "Show less" : "Show more"}</button>
</p>
</div>

<div className='container'>
<button className='btn' onClick={() => removeGift(id)}>remove</button>
</div>

  </div>

  )
}))}

<div className='container'>
<p><button onClick={() => setGifts([])}>Delete All</button>
</p>
</div>

    </div>
  )
}

export default App;
