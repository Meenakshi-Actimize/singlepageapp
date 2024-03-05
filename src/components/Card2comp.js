import React from "react";

function Cardds(){
    const botData = [{cards: "./assets/images/botcard1.jpg", name:"Churidar Leggings"}, {cards: "./assets/images/botcard2.jpg", name:"Straight Pant"},{cards: "./assets/images/botcard3.jpg", name:"Harem"}]

    return(
        <div class="d-flex mx-2 align-items-center">

        {botData.map((item) => (
            <>        
            <div class="card mx-2" style={{width: '25rem'}}>

            <img src={item.cards} class="card-img-top" alt="..." />
            <figcaption class="text-start" style={{position: 'absolute', bottom: '0', left: '0', right: '0', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px'}}>{item.name}</figcaption>
            </div>
            </>
        
        ))}
        </div>
        
    )
}

export default Cardds;