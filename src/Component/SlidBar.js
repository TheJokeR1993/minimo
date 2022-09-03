import { useEffect, useState } from "react"
import '../index.scss'

const SlideBar = ()=>{
    const [num,setNum]= useState(1)
    const [interval,setInterval]= useState(true)
    let image = require(`../image/image_${num}.jpg`)
const arr=[1,2,3,4,5]
console.log(num);
const click =(arg)=>{
   
    if(arg==num) return
    let count =num
    arg==='prev'
        ?count-1==0?count=5:--count
        : arg
            ? count= arg
            : count+1==6?count=1:++count
        
    console.log(num);
    setNum(count)
   interval&& setInterval(false)
}


useEffect(()=>{
    console.log("___");
    
    
    interval && setTimeout(() => {
      click()
      setInterval(true)
     }, 5000);
},[num])


    return <div className="container">
        <div className="slideBar">
            <div className="arrow prev" onClick={()=>click('prev')}> &lt;</div>
            <img src={image} alt=""/>
            <div className="arrow next" onClick={()=>click()}> &gt;</div>
            <div className="circle">{arr.map(i=><b onClick={()=>click(i)} key={i}>{num!==i?'○':'◉'}</b>)}</div>
        
        </div>
    </div>
}

export default SlideBar