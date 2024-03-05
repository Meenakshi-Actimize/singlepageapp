import React from "react";



function Cards(){

    const cardData = [{cardd: "./assets/images/card1.jpg", name:"Flowers", cost:"Rs. 1,499.00"}, {cardd: "./assets/images/card2.jpg", name:"Leaf 'N' Love", cost:"Rs. 1,399.00"},{cardd: "./assets/images/card3.jpg", name:"Pretty Floral", cost:"Rs. 1,399.00"},{cardd: "./assets/images/card4.jpg", name:"Tie & Dye", cost:"Rs. 1,399.00"}]

    return(
   

        <div class="d-flex mx-2 row">
        {cardData.map((item) => (
            <>
            <div class="col-md-3">
            <div class="card ">
            <img src={item.cardd} class="card-img-top" alt="..." />
            <div class="card-body">
                <p style={{textAlign:'start', fontSize:'10px', color:'GrayText'}}>HAY!</p>
                <p style={{textAlign:'start', fontSize:'20px', color:'dark'}}>{item.name}</p>
                <p style={{textAlign: 'start'}}>{item.cost}</p>
                
                <div>
                    
                    <span class="size-box">S</span>
                    <span class="size-box">M</span>
                    <span class="size-box">L</span>
                    <span class="size-box">XL</span>
                    <span class="size-box">XXL</span>
                    
                </div>
            </div>
            </div>
            </div>
            </>

    ))}


    </div>

        
    );

}

export default Cards;