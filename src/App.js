import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { Jumbotron } from './components/Jumbotron';
import { Navbar } from './components/Navdar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <Jumbotron />
        </div>
        <div className="row">
          <div className="col">
            <Card/>
          </div>
          <div className="col">
            <Card/>
          </div>
          <div className="col">
            <Card/>
          </div>
          <div className="col">
            <Card/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
