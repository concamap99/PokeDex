import React from 'react'
import Grid from '@material-ui/core/Grid';
interface Props {
    data: Array<string>
}
const ShowImage:React.FC<Props> =({data})=>{
    return (
        <Grid className="poke-img"
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid>
                Gender
                <br />
                <label style={{marginLeft: '5px'}}>
                    M
                    F
                </label>
            </Grid>
            <Grid>
                <label>
                        Normal
                </label>
                <div className="default">
                    <img className="img-front" src={data[1]} />
                    <img className="img-back" src={data[0]} />
                </div>
            </Grid>
            <Grid>
                <label>
                    shiny
                </label>
                <div className="shiny">
                    <img className="img-shiny-front" src={data[2]} />
                    <img className="img-shiny-back" src={data[3]} />
                </div>
            </Grid>
        </Grid>
    )
}
export default ShowImage