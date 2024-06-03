import React, {useState, useEffect} from "react";
import Menu from './components/Menu'
import NewsGrid from './components/NewsGrid' 
import './App.css'; 
import cllgLogo from './synergy-img.jpg'; 

function App() {
  const [items, setItems] = useState([]); 
  const [active, setActive] = useState(1); 
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("in"); 

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=09eb9963367042899ad261762b8e9fae`)
    .then(res => res.json())
    .then( data => setItems(data.articles));
  }, [category, country])

  return (
    <div className="App">
      <div className="title">
        <img className="title-img" src= {cllgLogo} alt="Synergy Logo" />
        <h1 className="title-text">News Aggregator</h1>
      </div>
      <Menu active={active} setActive={setActive} setCategory={setCategory} setCountry={setCountry}/>
      <NewsGrid items={items}/>
    </div>
  );
}

export default App;
