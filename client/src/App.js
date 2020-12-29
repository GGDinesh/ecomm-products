import React from 'react'
import Footer from './components/Footer';
import Header from './components/Headers';
import { Container } from 'react-bootstrap';
import Homescreen from './screens/Homescreen';
const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <Homescreen />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
