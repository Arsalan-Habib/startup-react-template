import React, { Fragment } from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjThree, homeObjFour, homeObjTwo } from "./Data";

function Home() {
    return (
        <Fragment>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjFour} />
        </Fragment>
    );
}

export default Home;
