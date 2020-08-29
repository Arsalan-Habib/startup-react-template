import React, { Fragment } from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjThree, homeObjFour, homeObjTwo } from "./Data";
import Pricing from "../../Pricing";

function Home() {
    return (
        <Fragment>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <Pricing />
            <HeroSection {...homeObjFour} />
        </Fragment>
    );
}

export default Home;
