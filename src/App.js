import './App.scss';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import quotes from './quotes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';



function App() {

  const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

  const [quote, setQuote] = useState(randomQuote);

  return (
    <div class="bg-secondary bg-gradient min-vh-100 d-flex align-items-center">
<Container fluid >
<Row className="justify-content-center" md={3}>
  <Col >
    <Card id='quote-box'>
    
      <Card.Body>
        <div className="quote-text">
        <FontAwesomeIcon icon={faQuoteLeft} />
        <Card.Title id='text'>{quote.text}</Card.Title>
        </div>
        <Card.Subtitle id='author' className="blockquote-footer text-end">{quote.from}</Card.Subtitle>
        <Button id='new-quote' onClick={() => setQuote(randomQuote)}>New Quote</Button>
        <Card.Link id='tweet-quote' target='blank' href='twitter.com/intent/tweet'>Tweet Quote</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </div>
  );
}

export default App;
