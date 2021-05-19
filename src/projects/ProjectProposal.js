import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-1.svg";
import { css } from "styled-components/macro";

import { SRLWrapper } from "simple-react-lightbox"
import ScrollArrow from "../components/ScrollArrow";

import Cover from "../images/Ice/RenderCover.png"
import Sketch from "../images/Ice/IMG_CE31.jpeg"

import MasterPart from "../images/Molds/Screen Shot 2021-05-07 at 1.54.13 AM.png"
import MoldDesign from "../images/Molds/Screen Shot 2021-05-07 at 2.15.59 AM.png"
import MoldNegative from "../images/Molds/Screen Shot 2021-05-18 at 4.56.14 PM.png"
import Mold from "../images/Molds/IMG_2643.png"
import SiliconeMold from "../images/Molds/IMG_2644.jpeg"
import MoldPrep from "../images/Molds/IMG_2673.jpeg"
import PlasterPrep from "../images/Molds/IMG_2676.jpeg"
import PlasterPour from "../images/Molds/IMG_2677.jpeg"
import Anchor from "../images/Molds/IMG_2672.jpeg"


const Container = tw.div`relative`;
// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 top-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;
const SvgDotPattern = tw(SvgDecoratorBlob1)`
    absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24
`;

export default function ProjectProposal() {
    return <>
        <Container>
            <DecoratorBlob1 style={{top: "23rem"}} />
            <SvgDotPattern />
        </Container>
        <SRLWrapper options={lightboxOptions}>
            <ScrollArrow />
            <div className="pageLayout">
                <div className="pageCover">
                    <img src={Cover} alt="Spherical ice rendering" style={{width: "100%", height: "100%", cursor: "zoom-in"}} />
                </div>
                <div className="pageHeader">
                    <h3 tw="text-primary-500">Final Project Proposal</h3>
                    <h6>CAD & 3D Modeling, and Molding</h6>

                    <div className="details" style={{marginTop: "50px"}}>
                        <div className="info">
                            <h6 tw="text-primary-500">Tools</h6>
                            <div>Cura</div>
                            <div>Rhino</div>
                            <div>Silicon</div>
                        </div>
                        <div id="problemSpace" style={{paddingBottom: "50px"}}>
                            <h6 tw="text-primary-500">The Goal</h6>
                            <p>
                                To create a spherical ice mold by first designing the master part in CAD, designing
                                the mold, then designing a mold to cast the original mold in. The silicone used to cast
                                the mold will then be used to create the ice itself.
                            </p>
                        </div>
                    </div>
                    <div id="moodBoard">
                        <h6 tw="text-primary-500">Background</h6>
                        <div style={styles.centerDiv50}>
                            <p style={{paddingBottom: "25px"}}>
                                As an avid drinker of water and sparkling water, I have found that my enjoyment of water
                                exponentially increases when it's chilled. Thinking back to popular culture, one thing
                                that's always fascinated me is that people who like to drink whisky on the rocks usually
                                drink it with spherical ice. Not only are the spherical ice cool looking, they serve a
                                practical purpose of maintaining optimal chill temperature without diluting the whisky too
                                much. I wanted the to do the same thing but instead for my water (because I don't drink
                                that much). So my idea for the final project is to create molds to create spherical ice.
                            </p>
                            <img id="SeaTransMoodBoard" src={Sketch} alt="Sketch of spherical ice mold" />
                        </div>
                    </div>
                    <div>
                        <h6 tw="text-primary-500">The Plan</h6>
                        <div style={styles.centerDiv50}>
                            <p style={{paddingBottom: "25px"}}>
                                In order to achieve this task, this is the tentative plan I have set forward: I need
                                to create the 3D models for the ice mold. I imagine this part will take the longest so
                                I am allocating 1 week to do this. Mainly, I need to get the correct shape for the mold
                                and do some test 3D prints so that it comes out as I want it to. During this time, I
                                will also need to purchase some
                                <a href={links.foodSafeSilicone} style={{color: "rgb(100, 21, 255)"}}> food safe silicone </a>
                                to use to create the mold (~$50). With the
                                power of Amazon Prime, this shouldn't take too long but I will set out to have this
                                ordered and shipped to my house by the end of the first week. That way, I can start
                                making the molds and testing that as soon as the 3D prints are good to go. I imagine
                                testing the molds will not take too long, but I am giving myself ample time before the
                                project due date since (from the brief research I've done), food safe silicone takes up
                                to 24 hours to cure as opposed to Smooth-On Oomoo which cures in a much shorter time.
                                During this curing time, I will aim to print another mold so that I can create silicone
                                molds twice as fast. This will enable me to achieve the goal of getting 3 silicone ice
                                molds as fast as I can. If all goes well, I will still have half a week to troubleshoot
                                and difficulties that come up. Although half a week doesn't sound like a lot, I will tap
                                into my power of all nighters (I already have done 3 all nighters at this point in the
                                quarter so I might as well try to go for a new record) to get the project done on time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </SRLWrapper>
    </>
};

const styles = {
    centerDiv25: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "25px"
    },
    centerDiv50: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "50px"
    },
    centerDiv: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

}

const links = {
    foodSafeSilicone: "https://www.amazon.com/Smooth-Sil-Grade-Making-Silicone-Rubber/dp/B00EOA25X2/ref=sr_1_4?dchild=1&keywords=food+grade+silicone&qid=1621422426&sr=8-4"
}

const lightboxOptions = {
    showDownloadButton: false,
}