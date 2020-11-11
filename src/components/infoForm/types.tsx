import React from 'react'
import './types.css'
interface Props {
    data: string
}
const Types:React.FC<Props> =({data})=> {
    const typeColor: {[key: string]: string} = {
        normal : '#A8A878',
        fire : '#F08030',
        flying : '#9bcc50',
        poison : '#A040A0',
        ground : '#E0C068',
        rock : '#B8A038',
        bug : '#A8B820',
        ghost : '#705898',
        steel : '#B8B8D0',
        fighting : '#C03028',
        water : '#6890F0',
        grass : '#78C850',
        electric : '#F8D030',
        psychic : '#F85888',
        ice : '#98D8D8',
        dragon : '#7038F8',
        dark : '#705848',
        fairy : '#EE99AC',
      };
    const setTypeColor =(type: string): string => {
        return typeColor[type]
    }
    const handleString =(string: string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <label id="label" style={{backgroundColor: setTypeColor(data) }}>{ handleString(data) }</label>
    )
}
export default Types