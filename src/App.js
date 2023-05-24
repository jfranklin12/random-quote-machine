import './App.scss';
import React, {useState} from 'react';
const Quote = require('inspirational-quotes');



function App() {
  

  const [quote, setQuote] = useState(Quote.getQuote());


  return (
    <div className='App'>
      <div id='quote-box'>
        <p id='text'>{quote.text}</p>
        <p id='author'>{quote.author}</p>
        <button id='new-quote' onClick={setQuote}>New Quote</button>
        <a id='tweet-quote' target='blank' href='twitter.com/intent/tweet'>Tweet Quote</a>
      </div>
    </div>
  );
}

export default App;
