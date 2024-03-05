import React from "react";

function MyRoundimage(){



const imageData = [{img:'assets/images/round1.jpg', name:'NewArrivals'}, {img:'assets/images/round2.jpg',name:'Bestsellers'}, {img:'assets/images/round3.jpg',name:'Maternity'}, {img:'assets/images/round4.jpg',name:'StayComfort'}, {img:'assets/images/round5.jpg',name:'Product of the year'}]

return(
    
   <div class="container row">
    <div class= "col-md-4"></div>
    <div class= "col-md-5 d-flex">
            { imageData.map((item) => (
        <>
        <div class="">


        <img src={item.img} alt="" 
        width={'70%'}
        
        className="rounded-circle border-secondary mx-2 my-3" 
        style={{marginTop:'10%', border:'3px solid black'}}/>
        <p style={{fontSize:'9px'}}>{item.name}</p>
        </div>
        </>
        
    ))}
    </div>
       <div class= "col-md-3"></div>
 
   </div>


);
}
export default MyRoundimage;