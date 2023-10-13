import React from'react';

import ma from '../images/discount.jpeg'
import mb from '../images/mobile.png'
import mc from '../images/electronics.png'
import md from '../images/tv.png'
import me from '../images/fashion.png'
import mf from '../images/beauty.png'
import mg from '../images/home.png'
import mh from '../images/furniture.png'
import mi from '../images/flight.png'
import mj from '../images/grocery.png'
function menu(){
    return(
        <>
        <div className='row mt-2 com'>
        <div className='col-md-1 '>
              <br></br>
        </div>
        <div className='col-md-1 '>
            <img src={ma}/>  
            <p>Top Offers</p>
        </div>
        <div className='col-md-1 '>
            <img src={mb}/>  
            <p>Mobile </p>
        </div>
        <div className='col-md-1 '>
            <img src={mc}/>  
            <p>Electronics</p> 
        </div>
        <div className='col-md-1'>
            <img src={md}/>  
            <p>TVs App</p> 
        </div>
        <div className='col-md-1 '>
        <img src={me}/>  
            <p>Fashion</p> 
        </div>
        <div className='col-md-1 '>
        <img src={mf}/>  
            <p>Beauty</p> 
        </div>
        <div className='col-md-1'>
        <img src={mg}/>  
            <p>Kitchen</p> 
        </div>
        <div className='col-md-1 '>
        <img src={mh}/>  
            <p>Furniture</p> 
        </div>
        <div className='col-md-1'>
        <img src={mi}/>  
            <p>Flights</p> 
        </div>
        <div className='col-md-1 '>
        <img src={mj}/>  
            <p>Grocery</p> 
        </div>
        <div className='col-md-1 '>
              <br></br>
        </div>
    </div>
    </>
        );
    }
    
    
    export default menu;