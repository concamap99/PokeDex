import React, {useEffect} from 'react'
import {Stat} from '../../TypeAndInterface'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import './stats-style.css'
interface Props{
    stats: Array<Stat> //optional thì sai
}
const Stats:React.FC<Props> =({stats})=>{
    return (
        <div className="stats">
            <h3>Stat</h3>
            <div className="stat-detail">
                HP: { stats[0].base_stat} <br />
                ATK: {stats[1].base_stat}<br/>
                DEF: {stats[2].base_stat}<br/>
                SP.AKT: {stats[3].base_stat}<br/>
                SP.DEF: {stats[4].base_stat}<br/>
                SPD: {stats[5].base_stat}
            </div>
        </div>
    )
}
export default Stats