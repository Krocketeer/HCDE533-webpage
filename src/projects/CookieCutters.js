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
                    <img src={Cover} alt="Cookie Cutter Outlines" style={{width: "100%", height: "100%", cursor: "zoom-in"}} />
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
                            look cool as cookie cutters. I ended up grabbing an image of a
                            <a href={links.dog} style={{color: "rgb(100, 21, 255)"}}> dog emoji</a>, the
                            <a href={links.apolloIcon} style={{color: "rgb(100, 21, 255)"}}> Apollo app icon</a>, and the
                            <a href={links.androidLogo} style={{color: "rgb(100, 21, 255)"}}> Android logo </a> as they
                            all looked like interesting shapes to work with. Opening up the images in Photoshop, I
                            desaturated all of them and turn them into a purely black and white image using a
                            combination of various tools. Once that was done, I exported each file to Illustrator where
                            they were then vectorizied using image trace. Doing all of this wasn't very new to me since
                            I had used Photoshop and Illustrator extensively in the past few years with a few personal
                            and school projects. Once I had vectors of each shape, they were now ready to be used in
                            Rhino to create cookie cutters.
                        </p>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div className="BaseCampPersonaLayout">
                                <img className="BaseCampPersona" src={Photoshop} alt="Turning dog emoji into black and white in Photoshop"/>
                                <img className="BaseCampPersona" src={Illustrator} alt="Vectorizing each shape in Illustrator" />
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
                                it all out (STL and Rhino files can be found on
                                <a href={links.rhinoSTLFiles} style={{color: "rgb(100, 21, 255)"}}> Github</a>).
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
    androidLogo: "https://github.com/Krocketeer/HCDE533-webpage/blob/master/ProjectFiles/HW1CookieCutters/AndroidLogo.png",
    apolloIcon: "https://github.com/Krocketeer/HCDE533-webpage/blob/master/ProjectFiles/HW1CookieCutters/ApolloIcon.png",
    dog: "https://github.com/Krocketeer/HCDE533-webpage/blob/master/ProjectFiles/HW1CookieCutters/Dog.png",
    rhinoSTLFiles: "https://github.com/Krocketeer/HCDE533-webpage/tree/master/ProjectFiles/HW1CookieCutters",
}

const lightboxOptions = {
    showDownloadButton: false,
}
