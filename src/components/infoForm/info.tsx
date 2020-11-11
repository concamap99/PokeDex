import React from 'react'
import './info-style.css'
import Loading from '../loading/loading'
import ShowImage from './show-image'
import Types from './types'
interface Props{
    data: any //chưa hiểu điểm này
    loading: boolean
}
interface Type{
    slot: number
    type: {
        name: string
        url: string
    }
}
const InfoForm:React.FC<Props> =({data, loading})=>{
    const pokeType: Array<Type> = data.types
    return (
        <div className="show-info">
            {
                loading ?<Loading />
            : <div>
                <ShowImage 
                    data={[data.sprites.back_default, data.sprites.front_default,data.sprites.front_shiny, data.sprites.back_shiny]} 
                />
                <label className="id">#{ data?.id }</label>
                <br/>
                <label className="name">{ data?.name }</label>
                <div className="types">
                    {
                        pokeType.map((data)=>
                            <Types data={data.type.name} />
                        )
                    }
                </div>
            </div>
            }
        </div>
    )
}
export default InfoForm