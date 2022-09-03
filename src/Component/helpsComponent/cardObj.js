
export const cardObj = (num) => {
    const info= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
    
    switch(num){
        case 2 : return{
            id:num, 
                        h4: 'lifestyle',
            h2 : 'More than just a music festival ',
            p: info
        }
        case 3 : return{
            id:num, 
            h4: 'lifestyle',
            h2 : 'Life tastes better with coffee ',
            p: info
        }
        case 4 : return{
            id:num, 
           h4: 'photodiary',
            h2 : 'American dream ',
            p: info ,
            comment : 19
        }
        case 5 : return{
            id:num, 
            h4: 'photodiary',
            h2 : 'A day exploring the Alps ',
            p: info,
            comment : 24
        }
        case 6: return{
            id:num, 
            h4: 'lifestyle',
            h2 : 'Top 10 song for running ',
            p: info
        }
        case 7 : return{
            id:num, 
            h4: 'lifestyle',
            h2 : 'Cold winter days',
            p: info,
            comment : 15
        }
        default: return ''
    }
  
    
  
};

export const commentArr = [{
            id: 9,
            img:true,
            name: 'John',
            surname: 'Doe',
            comment : 'Set up perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo '
            
        },{
            img:false,
            name: 'Jone',
            surname: 'Doe',
            comment : 'Set up perspiciatis unde omnis iste natus error sit voluptatem.'
            
          }] 
         