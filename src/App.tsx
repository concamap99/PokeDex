import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import {DataOfAPokemon, DataOfAPokemonClass} from './TypeAndInterface';
import SearchForm from './components/searchForm/search'
import InfoForm from './components/infoForm/info'
import Stats from './components/stats/stats'
function App() {
  const fakeData = new DataOfAPokemonClass;
  const [data, setData] = useState<DataOfAPokemon>(fakeData);
  const [text, setText] = useState<number | string>(25);
  const [show, setShow] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const handleTextChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    setText(ev.target.value);
  }
  const handleInput =()=> {
     setShow(!show)
  }
  useEffect(()=>{
    setLoading(true)
    axios.get<DataOfAPokemon>(`https://pokeapi.co/api/v2/pokemon/${text}`)
      .then( response => {
        setData(response.data)
        setLoading(false)
      })
      .catch(err=>{
        setText( Math.floor(Math.random() * 890) + 1 )
        setShow(!show)
        alert('Không tìm thấy :D')
      })
  }, [show])
  return (
    <div className="App">
      <SearchForm text={text} handleInput={handleInput} handleTextChange={handleTextChange}  />
      <InfoForm data={data} loading={loading}  />
      <Stats stats={data.stats} />
    </div>
  );
}

export default App;
