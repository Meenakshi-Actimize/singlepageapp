import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Roundimage from "./Roundimage";
import NavbarComp from "./Navbar";
import MyCarousel from "./Carousel";
import MyRoundimage from "./Roundimage";
import Asidecom from "./Asidecomp";
import Cards from "./Cardcomp";
import Buttoncomp from "./Buttonview";
import BanComp from "./Banner";
import Cardds from "./Card2comp";
import Footercomp from "./Footer";

function Hayapp(){
    return(
        <>
            <NavbarComp />
            <MyCarousel />
            <MyRoundimage />
            <Asidecom />
            <h2 class="my-4">New Arrivals</h2>
            <Cards />
            <Buttoncomp />
            <BanComp />
            <h2 class="my-3">The Bottomwear Lounge</h2>

            <Cardds />
            <Footercomp />

            </>
    );
}

export default Hayapp;