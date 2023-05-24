import './App.scss';

function App() {
  return (
    <div className='App'>
      <div id='quote-box'>
        <p id='text'>Quote Text</p>
        <p id='author'>Quote Author</p>
        <button id='new-quote'>New Quote</button>
        <a id='tweet-quote' target='blank' href='twitter.com/intent/tweet'>Tweet Quote</a>
      </div>
    </div>
  );
}

export default App;
