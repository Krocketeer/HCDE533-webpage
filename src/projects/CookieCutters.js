import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-1.svg";
import { css } from "styled-components/macro";

import { SRLWrapper } from "simple-react-lightbox"
import ScrollArrow from "../components/ScrollArrow";

import Cover from "../images/CookieCutters/CookieCuttersCover.png"
import Photoshop from "../images/CookieCutters/PhotoshopBWDog.png"
import Illustrator from "../images/CookieCutters/IllustratorVectorCutters.png"
import ApolloModeling from "../images/CookieCutters/ApolloModeling.png"
import AndroidVector from "../images/CookieCutters/AndroidVector.png"
import ExtrudeAndroid from "../images/CookieCutters/ExtrudeAndroid.png"
import OffsetAndroid from "../images/CookieCutters/OffsetAndroid.png"

import SeaTransitCover from "../images/SeattleTransit/STCover.png"
import moodBoard from "../images/SeattleTransit/Moodboard.png"
import colors from "../images/SeattleTransit/Colors.png"
import type from "../images/SeattleTransit/Type.png"
import userFlow from "../images/SeattleTransit/UserFlow.pdf"
import lowFi from "../images/SeattleTransit/LowFiWireframes.pdf"
import icons from "../images/SeattleTransit/Icons.png"
import busMockup from "../images/SeattleTransit/Bus Stop Mockup.png"
import busMockup2 from "../images/SeattleTransit/Bus Stop Mockup 2.png"
import lightRailSign from "../images/SeattleTransit/Light Rail Sign.png"
import railStationMockup from "../images/SeattleTransit/Rail Station Mockup.png"
import ORCA from "../images/SeattleTransit/Orca Card Mockup.png"

const Container = tw.div`relative`;
// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 top-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;
const SvgDotPattern = tw(SvgDecoratorBlob1)`
    absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24
`;

export default function CookieCutters() {
    return <>
        <Container>
            <DecoratorBlob1 style={{top: "23rem"}} />
            <SvgDotPattern />
        </Container>
        <SRLWrapper options={lightboxOptions}>
            <ScrollArrow />
            <div className="pageLayout">
                <div className="pageCover">
                    <img src={Cover} alt="Cookie Cutter Outlines"
                         style={{width: "100%", height: "100%", cursor: "zoom-in"}} />
                </div>
                <div className="pageHeader">
                    <h3 tw="text-primary-500">Cookie Cutters</h3>
                    <h6>CAD Modeling and Design</h6>

                    <div className="details" style={{marginTop: "50px"}}>
                        <div className="info">
                            <h6 tw="text-primary-500">Tools</h6>
                            <div>Illustrator</div>
                            <div>Photoshop</div>
                            <div>Rhino</div>
                        </div>
                        <div id="problemSpace" style={{paddingBottom: "50px"}}>
                            <h6 tw="text-primary-500">The Goal</h6>
                            <p> To create three different cookie cutter shapes using Rhino. The cookie cutter shapes
                                have to come from images and you must create the outlines for each image in Illustrator.
                                The STL files must contain only one surface and should not self-intersect or have other
                                discontinuities.
                            </p>
                        </div>
                    </div>
                    <div id="goal" style={{paddingBottom: "50px"}}>
                        <h6 tw="text-primary-500">Vectorizing Images</h6>
                        <p style={{paddingBottom: "25px"}}>
                            The first step in creating the cookie cutters was getting some images that I think would
                            look cool as cookie cutters. I ended up grabbing an image of a dog emoji, the Apollo App
                            icon, and the Android logo as they all looked like interesting shapes to work with. Opening
                            up the images in Photoshop, I desaturated all of them and turn them into a purely black and
                            white image using a combination of various tools. Once that was done, I exported each file
                            to Illustrator where they were then vectorizied using image trace. Doing all of this wasn't
                            very new to me since I had used Photoshop and Illustrator extensively in the past few years
                            with a few personal and school projects. Once I had vectors of each shape, they were now
                            ready to be used in Rhino to create cookie cutters.
                        </p>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div className="BaseCampPersonaLayout">
                                <img className="BaseCampPersona" src={Photoshop} alt="Turning dog image into black and white in Photoshop"/>
                                <img className="BaseCampPersona" src={Illustrator} alt="Vectorizing each image in Illustrator" />
                            </div>
                        </div>
                    </div>
                    <div id="moodBoard">
                        <h6 tw="text-primary-500">Modeling in Rhino</h6>
                        <div style={styles.centerDiv50}>
                            <p style={{paddingBottom: "25px"}}>
                                Once each vector was imported into Rhino, it was now time to model each shape into a
                                cookie cutter. I had worked in Autodesk Inventor and OnShape for some previous projects
                                but Rhino was a totally different interface and logic than what I was used to. My
                                thought process on how to extrude the shapes to create and cut didn't necessarily work
                                in Rhino but after some experimenting in class, with help from others, I finally figured
                                it all out.
                            </p>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                <div className="BaseCampPersonaLayout">
                                    <img className="BaseCampPersona" src={ApolloModeling} alt="Extruding inner curves of Apollo icon"/>
                                    <img className="BaseCampPersona" src={AndroidVector} alt="Vector of Android logo in Rhino" />
                                </div>
                                <div className="BaseCampPersonaLayout">
                                    <img className="BaseCampPersona" src={OffsetAndroid} alt="Creating offsets of the border of Android logo"/>
                                    <img className="BaseCampPersona" src={ExtrudeAndroid} alt="Extruding inner curves of Android logo" />
                                </div>
                            </div>
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
    figmaAppWireframe: "https://www.figma.com/proto/HxQYDPyEaua4wPOzOtMWkc/Seattle-Transit-Rebrand-App?node-id=2%3A10&scaling=min-zoom",
    figmaKioskWireframe: "https://www.figma.com/proto/9pk8hfFcEeL6X3KRpe91Cd/Seattle-Transit-Rebrand-Kiosk?node-id=168%3A489&scaling=min-zoom",
    figmaAppEmbed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FHxQYDPyEaua4wPOzOtMWkc%2FSeattle-Transit-Rebrand-App%3Fnode-id%3D2%253A10%26viewport%3D78%252C241%252C0.29441380500793457%26scaling%3Dscale-down&chrome=DOCUMENTATION",
    figmaKioskEmbed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9pk8hfFcEeL6X3KRpe91Cd%2FSeattle-Transit-Rebrand-Kiosk%3Fnode-id%3D168%253A489%26viewport%3D-154%252C680%252C0.17509283125400543%26scaling%3Dscale-down&chrome=DOCUMENTATION"
}

const lightboxOptions = {
    showDownloadButton: false,
}
