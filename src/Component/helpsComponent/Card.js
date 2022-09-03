
import "../../index.scss"
const Card=(props)=>{
    return <div className="cardItem">
        <img alt="" src={require(`../../image/image_${props.item.id}.jpg`)}/>
        <h4>{props.item.h4}</h4>
       
        <h2>{props.item.h2}</h2>
        <p>{props.item.p}</p>
    </div>
}

export default Card