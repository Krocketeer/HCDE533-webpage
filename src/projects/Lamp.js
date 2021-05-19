import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-1.svg";
import { css } from "styled-components/macro";

import { SRLWrapper } from "simple-react-lightbox"
import ScrollArrow from "../components/ScrollArrow";

import Cover from "../images/Lamp/LampCover.png"
import LampCover from "../images/Lamp/LampCover2.png"
import LampPlans from "../images/Lamp/Screen Shot 2021-05-05 at 6.12.48 PM.png"
import V1LampDesign from "../images/Lamp/Screen Shot 2021-05-05 at 12.02.46 AM.png"
import V2LampDesign from "../images/Lamp/Screen Shot 2021-05-12 at 2.10.00 AM.png"
import ShadeDesign from "../images/Lamp/Screen Shot 2021-05-12 at 2.07.24 AM.png"
import ShadeCreation from "../images/Lamp/Screen Shot 2021-05-12 at 2.08.32 AM.png"
import LampShade from "../images/Lamp/IMG_2631.jpeg"
import ShadeMismatch from "../images/Lamp/IMG_2640.jpeg"
import BrokenShade from "../images/Lamp/IMG_2639.jpeg"
import V2Shade from "../images/Lamp/IMG_2634.jpeg"
import AssembledLamp from "../images/Lamp/IMG_2636.jpeg"

const Container = tw.div`relative`;
// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 top-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;
const SvgDotPattern = tw(SvgDecoratorBlob1)`
    absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24
`;

export default function Lamp() {
    return <>
        <Container>
            <DecoratorBlob1 style={{top: "23rem"}} />
            <SvgDotPattern />
        </Container>
        <SRLWrapper options={lightboxOptions}>
            <ScrollArrow />
            <div className="pageLayout">
                <div className="pageCover">
                    <img src={LampCover} alt="3D printed cubes and tubes" style={{width: "100%", height: "100%", cursor: "zoom-in"}} />
                </div>
                <div className="pageHeader">
                    <h3 tw="text-primary-500">Lamp</h3>
                    <h6>CAD Modeling and 3D Modeling</h6>

                    <div className="details" style={{marginTop: "50px"}}>
                        <div className="info">
                            <h6 tw="text-primary-500">Tools</h6>
                            <div>Cura</div>
                            <div>Grasshopper</div>
                            <div>Rhino</div>
                        </div>
                        <div id="problemSpace" style={{paddingBottom: "50px"}}>
                            <h6 tw="text-primary-500">The Goal</h6>
                            <p>
                                To create a lamp that can be assembled around 3D printed parts. The lamp should be
                                removable from the 3D printed parts. As a result, the lamp cannot be attached to the
                                parts using glue, fasteners, adhesive, etc.
                            </p>
                        </div>
                    </div>
                    <div id="goal" style={{paddingBottom: "50px"}}>
                        <h6 tw="text-primary-500">The plan</h6>
                        <p style={{paddingBottom: "25px"}}>
                            Taking inspiration from my days a few quarters ago when I was looking for some lamps to add
                            to my room since I would be basically living in it all the time due to quarantine, I decided
                            I wanted to design a bedside lamp that would project the light upwards but also defuse the
                            light through the slows in the shade. With this in mind, I started to do some sketches of my
                            ideas, and once that was done, measuring of what would be feasible with callipers.
                            This webpage will be updated once the lamp is complete since I like to do it all at once. So
                            in the mean time, here's an image of the plan for my lamp.
                        </p>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <img style={{width: "50%", height: "50%"}} id="SeaTransMoodBoard" src={LampPlans} alt="Lamp Schematics" />
                        </div>
                    </div>
                    <div id="moodBoard">
                        <h6 tw="text-primary-500">Modeling Lamp Parts</h6>
                        <div style={styles.centerDiv50}>
                            <p style={{paddingBottom: "25px"}}>
                                With my sketches, I went into Rhino to model each part of the lamp. It was pretty
                                straight forward on how to do this since it consisted of nothing more than a couple of
                                cylinders. However, the trouble came when implementing threads to screw the shade and
                                the base together. I tried a few times (even with following Youtube tutorials) but after
                                mini prints to test the threads, I decided to scrap the idea after it became clear it
                                would be a lot more hassle. Instead I opted for insertion threads, where rectangular
                                extrusions and cutouts would hold the two parts together. After getting the base, it was
                                then time to model the lamp shade. This was by far the most tricky part, getting uniform
                                cutouts on a cylinder. After a few sleepless nights, and a very helpful office hours
                                check with Junchao, I made the cutouts! All the files for the lamp, which includes
                                gcode, Grasshopper, Rhino, and STL can be found on
                                <a href={links.rhinoSTLFiles} style={{color: "rgb(100, 21, 255)"}}> Github</a>.
                            </p>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                <div className="BaseCampPersonaLayout">
                                    <img className="BaseCampPersona" src={V1LampDesign} alt="Version 1 of the lamp featured screw threads to attach the shade to the base"/>
                                    <img className="BaseCampPersona" src={V2LampDesign} alt="Version 2 of the lamp featured rectangular inserts to attach the shade to the base" />
                                </div>
                                <div className="BaseCampPersonaLayout">
                                    <img className="BaseCampPersona" src={ShadeDesign} alt="Design pattern used to design the lamp shade" />
                                    <img className="BaseCampPersona" src={ShadeCreation} alt="After using FlowAlongSrf to put design on cylinder, inserts were then split" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6 tw="text-primary-500">Printing the Parts</h6>
                        <div style={styles.centerDiv50}>
                            <p style={{paddingBottom: "25px"}}>
                                By far, printing these parts took the longest out of all of my projects. I went through
                                a number of test prints with Version 1 before getting to Version 2 and just committing
                                to print the parts without scale tests. The base and the lamp shade took over 12 hours
                                each to print, which I let run during my day and overnight. In the past, my printer has
                                been known to have adhesion issues where the corner peels about halfway through the
                                print. To mitigate this, I added a thin layer of glue stick between the glass bed and
                                the print to ensure that no peeling would happen. While this worked successfully, it
                                also added another issue that the glue stick would work too well and the print would
                                stick to the bed. With trial and error, the best ways I found to remove the prints
                                from the print bed that has glue adhesive is to use a mix of isopropyl alcohol + water
                                or putting the entire glass print bed + print into the freeze to take advantage of
                                the differences in density when cold.
                            </p>
                            <img id="SeaTransColor" src={LampShade} alt="Lamp Shade fresh off (or stuck to) the 3d Printer" />
                        </div>
                    </div>
                    <div>
                        <h6 tw="text-primary-500">Lamp Assembly</h6>
                        <div style={styles.centerDiv50}>
                            <p style={{paddingBottom: "25px"}}>
                                share of issues that I had to work through. On the first printing of the lamp shae, I
                                accidentally shattered the shade because of how thin it was while trying to remove it
                                from the print bed. In addition, the rectangular extrusions didn't fit either since the
                                print settings add on a few layers that made it too big to fit into the inserts. Going
                                back to Rhino, I made some small adjustments (making the cutouts for the rectangular
                                extrusions bigger, cut the height of the lamp shade to reduce print time, reprinted, and
                                after a 12 hour wait, I had made a new lamp!
                            </p>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                <div className="BaseCampPersonaLayout">
                                    <img className="BaseCampPersona" src={BrokenShade} alt="I accidentally broke the lamp shade trying to remove it from the bed"/>
                                    <img className="BaseCampPersona" src={ShadeMismatch} alt="The cutouts for Version 1 of the lamp shade didn't fit the rectangular extrusions for the base" />
                                </div>
                                <div className="BaseCampPersonaLayout">
                                    <img className="BaseCampPersona" src={V2Shade} alt="Remodeled (and not broken!) lamp shade" />
                                    <img className="BaseCampPersona" src={AssembledLamp} alt="Fully assembled lamp" />
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
    gitFiles: "https://github.com/Krocketeer/HCDE533-webpage/tree/master/ProjectFiles/HW5Lamp",
}

const lightboxOptions = {
    showDownloadButton: false,
}