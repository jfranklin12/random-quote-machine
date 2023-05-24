import './App.scss';
import React, {useState} from 'react';
import quotes from './quotes';



function App() {
  
  const randomQuote = () => quotes[Math.floor(Math.random()*quotes.length)];

  const [quote, setQuote] = useState(randomQuote);

  return (
    <div className='App'>
      <div id='quote-box'>
        <p id='text'>{quote.text}</p>
        <p id='author'>{quote.from}</p>
        <button id='new-quote' onClick={() => setQuote(randomQuote)}>New Quote</button>
        <a id='tweet-quote' target='blank' href='twitter.com/intent/tweet'>Tweet Quote</a>
      </div>
    </div>
  );
}

export default App;
