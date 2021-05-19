import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-1.svg";
import { css } from "styled-components/macro";

import { SRLWrapper } from "simple-react-lightbox"
import ScrollArrow from "../components/ScrollArrow";

import Cover from "../images/Molds/MoldsCover.png"
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

export default function Molds() {
    return <>
        <Container>
            <DecoratorBlob1 style={{top: "23rem"}} />
            <SvgDotPattern />
        </Container>
        <SRLWrapper options={lightboxOptions}>
            <ScrollArrow />
            <div className="pageLayout">
                <div className="pageCover">
                    <img src={Cover} alt="3D printed cubes and tubes" style={{width: "100%", height: "100%", cursor: "zoom-in"}} />
                </div>
                <div className="pageHeader">
                    <h3 tw="text-primary-500">Molds</h3>
                    <h6>CAD & 3D Modeling, Casting, and Molding</h6>

                    <div className="details" style={{marginTop: "50px"}}>
                        <div className="info">
                            <h6 tw="text-primary-500">Tools</h6>
                            <div>Cura</div>
                            <div>Rhino</div>
                            <div>Silicon & Plaster</div>
                        </div>
                        <div id="problemSpace" style={{paddingBottom: "50px"}}>
                            <h6 tw="text-primary-500">The Goal</h6>
                            <p>
                                To create a 2-part silicone mold by first designing the master part in CAD, designing
                                the mold, then designing a mold to cast the original mold in. The mold will be used to
                                cast at least 4 identical parts in plaster.
                            </p>
                        </div>
                    </div>
                    <div id="goal" style={{paddingBottom: "50px"}}>
                        <h6 tw="text-primary-500">The Master Part</h6>
                        <p style={{paddingBottom: "25px"}}>
                            The first part in this assignment was creating the master part itself. I didn't particularly
                            know what I wanted to model but after taking a look at my desk for inspiration, I figured
                            why not create an anchor? (For context, I have 3 different wooden anchors on my desk as
                            gifts from some friends). Going back to the skills I learned in the first week, I found an
                            image of an anchor on Google, exported it to Photoshop and Illustrator and vectorized it.
                            Afterwards, I loaded up the file in Rhino and started to create the master part. Initially,
                            I misinterpreted the assignment so I ended up creating the mold to pour plaster into when I
                            should have created the negative – the silicone should make the mold. However, it was a
                            quick fix since all I had to do was put a box around my molds and take the difference of
                            the two. All the files for the mold, which includes Rhino and STLs can be found on
                            <a href={links.rhinoSTLFiles} style={{color: "rgb(100, 21, 255)"}}> Github</a>.
                        </p>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div className="BaseCampPersonaLayout">
                                <img className="BaseCampPersona" src={MasterPart} alt="Extruded nautical anchor for master part"/>
                                <img className="BaseCampPersona" src={MoldDesign} alt="Anchor extruded into two rectangles for mold" />
                            </div>
                            <div className="BaseCampPersonaLayout">
                                <img className="BaseCampPersona" src={MoldNegative} alt="Negative of original mold" />
                                <img className="BaseCampPersona" src={Mold} alt="3D print of negative" />
                            </div>
                        </div>
                    </div>
                    <div id="moodBoard">
                        <h6 tw="text-primary-500">Creating Silicone Molds</h6>
                        <div style={styles.centerDiv50}>
                            <p style={{paddingBottom: "25px"}}>
                                Once I had my negative, it was now time to create the silicone positive of the mold.
                                After carefully reading through the instructions for Smooth-On Oomoo and taking the
                                necessary precautions, it was now to time to mix. I poured equal parts by volume of the
                                2-part silicone and then carefully mixed them together. Once the color evened out, I
                                poured the silicone into each mold half and waited overnight for them to cure. The next
                                day, it was time to take them out. I heard from a friend that it was recommended that we
                                break our 3D printed negatives in order to free the molds, but not wanting to do that, I
                                instead spent some time to carefully pull the silicone out from the negatives.
                            </p>
                            <img id="SeaTransMoodBoard" src={SiliconeMold} alt="Silicone pouring into molds" />
                        </div>
                    </div>
                    <div>
                        <h6 tw="text-primary-500">Making Anchors</h6>
                        <div style={styles.centerDiv50}>
                            <p style={{paddingBottom: "25px"}}>
                                After securing a pound of plaster from campus (although a bit suspiciously since I
                                was walking around with a ziplock bag of white powder), it was now time to casts some
                                anchors. Following the
                                <a href={links.plasterInstructions} style={{color: "rgb(100, 21, 255)"}}> instructions</a>
                                {" "}for the plaster, I carefully mixed it with some water and poured it into my molds.
                                I initially thought that my pour spouts in my molds were too small but the plaster
                                mixture was surprisingly liquidy enough that it went in without any problems. After
                                waiting approximately 1 hour for the plaster to cure, I removed them from the molds.
                                There were some spots in the anchor that did not fill in properly but that was to be
                                expected from the shape of the anchor itself and the position of the pour spout. Overall
                                though, I was pretty happy with the anchor. After repeating this process three more
                                times over the course of the day, I was finally done with this week's assignment.
                            </p>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                <div className="BaseCampPersonaLayout">
                                    <img className="BaseCampPersona" src={MoldPrep} alt="Preparing molds for plaster by spraying with water"/>
                                    <img className="BaseCampPersona" src={PlasterPrep} alt="Measuring plaster on scale" />
                                </div>
                                <div className="BaseCampPersonaLayout">
                                    <img className="BaseCampPersona" src={PlasterPour} alt="Pouring plaster into mold" />
                                    <img className="BaseCampPersona" src={Anchor} alt="Anchor casted out of plaster" />
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
    gitFiles: "https://github.com/Krocketeer/HCDE533-webpage/tree/master/ProjectFiles/HW6Molds",
    plasterInstructions: "https://images.thdstatic.com/catalog/pdfImages/ba/ba6e9278-18b0-4c8b-8765-1ea7790faf3e.pdf"
}

const lightboxOptions = {
    showDownloadButton: false,
}