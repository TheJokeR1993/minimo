import '../../index.scss'
import Card from './Card';
import { cardObj } from './cardObj';
const MainBlock3 = () => {
    
  return (
    <div className='mainBlock3'>
      <div  className='container_content'>
        <h4>you may also like</h4>
        <div className='card'>
 {[7,5,6].map((i) => {
            return <Card key={i+'_'}  item={cardObj(i)} />;
          })}
        </div>
     
      </div>
       
    </div>
  );
};

export default MainBlock3;