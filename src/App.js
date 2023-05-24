import './App.scss';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack'
import quotes from './quotes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'



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
        <FontAwesomeIcon icon={faQuoteLeft} size='2xl'/>
        <Card.Title id='text' className="text-center">{quote.text}</Card.Title>
        </div>
        <Card.Subtitle id='author' className="blockquote-footer text-end">{quote.from}</Card.Subtitle>
        <Stack direction="horizontal" className="pt-4">
        <Button id='tweet-quote' variant="dark" target='_blank' href='https://www.twitter.com/intent/tweet'><FontAwesomeIcon icon={faTwitter} size="xl"  className="link-opacity-50-hover"></FontAwesomeIcon></Button>
        <Button id='new-quote' className="ms-auto" variant="dark" onClick={() => setQuote(randomQuote)}>New Quote</Button>
        </Stack>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </div>
  );
}

export default App;
