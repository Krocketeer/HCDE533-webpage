import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-1.svg";
import { css } from "styled-components/macro";

import { SRLWrapper } from "simple-react-lightbox"
import ScrollArrow from "../components/ScrollArrow";

import Cover from "../images/ClipNest/ClipNestCover.png"
import ClipsRhino from "../images/ClipNest/ClipsRhinoAndGrasshopper.png"
import ClipsCura from "../images/ClipNest/ClipsCura.png"
import ClipsPrint from "../images/ClipNest/IMG_2582.jpeg"
import ClipsBox from "../images/ClipNest/IMG_2583.jpeg"
import NestRhino from "../images/ClipNest/NestRhinoandGrasshopper.png"
import NestAdhesion from "../images/ClipNest/NestAdhesion.png"
import NestedShapes from "../images/ClipNest/IMG_2588.jpeg"
import NestMisprint from "../images/ClipNest/IMG_2590.jpeg"

const Container = tw.div`relative`;
// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 top-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;
const SvgDotPattern = tw(SvgDecoratorBlob1)`
    absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24
`;

export default function ClipNest() {
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
                    <h3 tw="text-primary-500">Clips & Nests</h3>
                    <h6>CAD Modeling and 3D Printing</h6>

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
                                To create a gGrasshopper definition of a clip that connects a piece of cardboard to
                                another piece of cardboard. The Grasshopper definition should allow the variation of the
                                thickness of the cardboard. In addition, create a Grasshopper definition of a nesting
                                structure with any geometry
                            </p>
                        </div>
                    </div>
                    <div id="goal" style={{paddingBottom: "50px"}}>
                        <h6 tw="text-primary-500">Designing the Clips</h6>
                        <p style={{paddingBottom: "25px"}}>
                            When the assignment was first introduced to us, for some reason the first thing that came to
                            mind was corner clips that joined things together at a ninety degree angle as opposed to
                            clips that stacked things on top of each other. With that in mind, I first measured the
                            width of my cardboard with some callipers and then went into Grasshopper to model the clips.
                            Since the clips would be joining two pieces of cardboard on the z-axis, that meant that I
                            would need to model this in three dimensions as opposed to just two. Using a sphere as a
                            base, I then used two rectangles to model the cardboard slots and did some math in
                            Grasshopper to ensure they were centered align on each axis no matter how wide the
                            rectangles were. Once that was done, I baked the Grasshopper definitions into Rhino, cut
                            out the extraneous parts, exported and sliced it in Cura and sent it to the printer for
                            testing. All of the STL, Rhino, and Grasshopper files can be found on
                            <a href={links.gitFiles} style={{color: "rgb(100, 21, 255)"}}> Github</a>.
                        </p>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div className="BaseCampPersonaLayout">
                                <img className="BaseCampPersona" src={ClipsRhino} alt="Modeling of clips in Rhino and Grasshopper"/>
                                <img className="BaseCampPersona" src={ClipsCura} alt="Slicing the clips in Cura" />
                            </div>
                        </div>
                    </div>
                    <div id="goal" style={{paddingBottom: "50px"}}>
                        <h6 tw="text-primary-500">Printing and Clipping Cardboard</h6>
                        <p style={{paddingBottom: "25px"}}>
                            The first two prints weren't holding on to the cardboard as tight as I wanted them
                            to and so after a few more adjustments of decreasing the width of the cardboard slots,
                            the third iteration snuggly held the cardboard! It was now time to wait for the other seven
                            clips to print (p.s. don't start your prints at 11 pm or else you'll be staying up until 4
                            am waiting for them to finish ._.). Once they were all printed, I cut out some spare USPS
                            approved cardboard I had around and clipped them together to make a box. Now it was time to
                            test how well the clips held together my cardboard box. Luckily enough, I was also doing a
                            machine learning project in another class about creating a box detector so why not combine
                            the two into one? The ML model worked most of the time but the box held together the entire
                            time :).
                        </p>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div className="BaseCampPersonaLayout">
                                <img className="BaseCampPersona" src={ClipsPrint} alt="Printing the clips at 4 AM"/>
                                <img className="BaseCampPersona" src={ClipsBox} alt="Assembled cardboard box and clips" />
                            </div>
                            <div style={styles.centerDiv}>
                                <iframe className="DemoVideo"
                                        title="Cardboard Clips Durability Test"
                                        src="https://www.youtube.com/embed/vMDBAlKwRiM"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen />
                            </div>
                        </div>
                    </div>
                    <div id="moodBoard">
                        <h6 tw="text-primary-500">Creating Nested Objects</h6>
                        <div style={styles.centerDiv50}>
                            <p style={{paddingBottom: "25px"}}>
                                The second part of this week's assignment was creating nested objects in Grasshopper. I
                                have always been fascinated by isometric patterns so I used that as inspiration for each
                                design. I ultimately decided on creating ones out of a triangle, a square, and a hexagon
                                (because <a href={links.hexagon} style={{color: "rgb(100, 21, 255)"}}>
                                    hexagons are the bestagons</a>). Like with the clips, I designed each nested shape
                                in Grasshopper, baked them to Rhino where I then extruded them to 3D space, exported
                                them to Cura where they were sliced, and finally printed (All of the STL, Rhino, and
                                Grasshopper files can be found on
                                <a href={links.gitFiles} style={{color: "rgb(100, 21, 255)"}}> Github</a>).
                                However, the biggest mistake I made in this whole process was printing all three nested
                                shapes at once which resulted in a 7.5 hour print them. Normally this wouldn't be too
                                bad, but I had to run this in the background of my classes and when one of them
                                misprinted from it not adhering properly to the bed, I had to wait until the rest
                                finished before I could do a reprint. Though in the end, everything worked out once it
                                was printed again, even though it took another 2.5 hours to print.
                            </p>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                <div className="BaseCampPersonaLayout">
                                    <img className="BaseCampPersona" src={NestRhino} alt="Modeling the nested shapes in Rhino and Grasshopper"/>
                                    <img className="BaseCampPersona" src={NestAdhesion} alt="The shapes slowly becoming unstuck from print bed" />
                                </div>
                                <div className="BaseCampPersonaLayout">
                                    <img className="BaseCampPersona" src={NestMisprint} alt="Misprint of hexagon after not sticking"/>
                                    <img className="BaseCampPersona" src={NestedShapes} alt="Nested shapes on top of box" />
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
    hexagon: "https://www.youtube.com/watch?v=thOifuHs6eY",
    gitFiles: "https://github.com/Krocketeer/HCDE533-webpage/tree/master/ProjectFiles/HW3ClipNest",
}

const lightboxOptions = {
    showDownloadButton: false,
}