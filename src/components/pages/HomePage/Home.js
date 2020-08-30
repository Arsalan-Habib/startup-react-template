import React, { Fragment } from "react";
import HeroSection from "../../HeroSection";
import {
    homeObjOne,
    homeObjThree,
    homeObjFour,
    homeObjTwo,
    homeObjFive,
} from "./Data";
import Pricing from "../../Pricing";

function Home() {
    return (
        <Fragment>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <Pricing />
            <HeroSection {...homeObjFive} />
            <HeroSection {...homeObjFour} />
        </Fragment>
    );
}

export default Home;
