import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-1.svg";
import { css } from "styled-components/macro";

import { SRLWrapper } from "simple-react-lightbox"
import ScrollArrow from "../components/ScrollArrow";

import Cover from "../images/Lamp/LampCover.png"
import LampPlans from "../images/Lamp/Screen Shot 2021-05-05 at 6.12.48 PM.png"
import Cura from "../images/CubesTubes/CuraCubesTubes.png";
import NestRhino from "../images/ClipNest/NestRhinoandGrasshopper.png";
import NestAdhesion from "../images/ClipNest/NestAdhesion.png";
import NestMisprint from "../images/ClipNest/IMG_2590.jpeg";
import NestedShapes from "../images/ClipNest/IMG_2588.jpeg";
import Printer from "../images/CubesTubes/63790200217__51F2136B-1C15-4F22-86DC-1E11DA4A817A.jpeg";

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
                    <img src={Cover} alt="3D printed cubes and tubes" style={{width: "100%", height: "100%", cursor: "zoom-in"}} />
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
                            This webpage will be updated once the lamp is complete since I like to do it all at once. So
                            in the mean time, here's an image of the plan for my lamp. To be continued... :)
                        </p>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <img style={{width: "50%", height: "50%"}} id="SeaTransMoodBoard" src={LampPlans} alt="Ender 3 Pro 3D printer" />
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
    blueShell: "https://www.thingiverse.com/thing:1952442/files",
    dragon: "https://www.thingiverse.com/thing:1624412",
    gitFiles: "https://github.com/Krocketeer/HCDE533-webpage/tree/master/ProjectFiles/HW4Mesh",
}

const lightboxOptions = {
    showDownloadButton: false,
}