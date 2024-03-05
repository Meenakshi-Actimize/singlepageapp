import React from 'react';

function Footercomp(){
    const footele = [{ele: "Payments"},{ele: "Shipping & Exchange"},{ele:"Bulk queries"}, {ele:"Terms & Conditions"},{ele: "Privacy policy"},{ele:"Fabric/Print disclaimer"}]
    const footelem = [{elem: "About"},{elem: "Our Company"},{elem:"Contact us"}, {elem:"Store locator"},{elem: "Franchise Enquiry"}]
    const footeleme = [{eleme:"Track Order"},{eleme:"Exchange Request"}]

    return(
        <div class="container-fluid bg-black text-white my-3">
            <div class="row">
                <div class="col-md-2">
                    <span><p class="text-start mx-4 my-5" style={{fontSize:'15px'}}>SHIPPING INFO</p>
                    {footele.map((item) => (
                                            <p class="text-start mx-4" style={{fontSize:'13px'}}>{item.ele}</p>
                    )
                    )}
                  
                    </span>
                </div>
                <div class="col-md-2">
                <span><p class="text-start mx-4 my-5" style={{fontSize:'15px'}}>THE COMPANY</p>
                    {footelem.map((item) => (
                                            <p class="text-start mx-4" style={{fontSize:'13px'}}>{item.elem}</p>
                    )
                    )}
                  
                    </span>
                </div>
                <div class="col-md-2">
                <span><p class="text-start mx-4 my-5" style={{fontSize:'15px'}}>MY ACCOUNT</p>
                    {footeleme.map((item) => (
                                            <p class="text-start mx-4" style={{fontSize:'13px'}}>{item.eleme}</p>
                    )
                    )}
                  
                    </span>
                </div>
                <div class="col-md-3"></div>
                <div class="col-md-3">
                        <div class="text-start mx-4 my-5">EXCLUSIVE BENEFITS</div>
                        <div class="text-start"><input type="email" class="bg-black" placeholder='Enter email here' style={{width:"80%"}}></input>
                        <i class="bi bi-arrow-right"></i></div>
                        <div>Apply for our free membership to receive exclusive deals, news, and events.</div>
                        <p class="text-start"><i class="bi bi-facebook"></i>
                        <i class="bi bi-instagram mx-3"></i></p>
                    
                </div>

            </div>
            <p class="text-start" style={{fontSize:'13px'}}>© 2024, Hay Clothing. All rights reserved.</p>

        </div>
    )
}

export default Footercomp;