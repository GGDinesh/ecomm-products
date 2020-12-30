import React from 'react'
import Footer from './components/Footer';
import Header from './components/Headers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Homescreen from './screens/Homescreen';
import Productscreen from './screens/Productscreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main style={{ marginTop: '63px' }}>
        <Container>
          <Route path='/' exact component={Homescreen} />
          <Route path='/product/:id' component={Productscreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
