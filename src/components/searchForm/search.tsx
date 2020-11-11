import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import './style.css'
interface Prop{
    text: string | number
    handleInput: ()=>void
    handleTextChange: ( ev: React.ChangeEvent<HTMLInputElement> )=>void
}
const SearchForm:React.FC<Prop> =({text, handleInput, handleTextChange})=>{
    return (
      <form className="input">
          <h2>Input a name or 
            <span className="pokedex"> Pokédex </span>
            number of pokemon you want
          </h2>
          <TextField 
            id="outlined-basic" 
            name="input" 
            variant="outlined" 
            value={text} 
            onChange={handleTextChange} />
          <Button 
              id="submit-button"
              onClick={handleInput}
              endIcon={<SearchIcon 
                  color="primary" 
                  style={{ fontSize: 40 }} />}
          />  
      </form>
    )
}
export default SearchForm