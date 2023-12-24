import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <div className="card-list">
          <Card 
            img = {require("./images/katie-zaferes.png")}
            rating = "5.0"
            views = "(6) ."
            country = "USA"
            text = "Life lessons with Katie Zaferes"
            price = "$140"
          />

          <Card 
            img = {require("./images/katie-zaferes.png")}
            rating = "5.0"
            views = "(6) ."
            country = "USA"
            text = "Life lessons with Katie Zaferes"
            price = "$140"
          />

          <Card 
            img = {require("./images/katie-zaferes.png")}
            rating = "5.0"
            views = "(6) ."
            country = "USA"
            text = "Life lessons with Katie Zaferes"
            price = "$140"
          />

          <Card 
            img = {require("./images/katie-zaferes.png")}
            rating = "5.0"
            views = "(6) ."
            country = "USA"
            text = "Life lessons with Katie Zaferes"
            price = "$140"
          />
        </div>
        
    </div>
  );
}

export default App;
