import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-1.svg";
import { css } from "styled-components/macro";

import { SRLWrapper } from "simple-react-lightbox"
import ScrollArrow from "../components/ScrollArrow";

import Cover from "../images/Mesh/MeshCover.png"
import STLImage from "../images/Mesh/Screen Shot 2021-05-02 at 2.52.44 AM.png"
import BooleanDifference  from "../images/Mesh/Screen Shot 2021-05-02 at 2.54.21 AM.png"
import Merge from "../images/Mesh/Screen Shot 2021-05-02 at 3.03.04 AM.png"
import Final from "../images/Mesh/Screen Shot 2021-05-02 at 3.03.22 AM.png"

const Container = tw.div`relative`;
// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 top-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;
const SvgDotPattern = tw(SvgDecoratorBlob1)`
    absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24
`;

export default function Mesh() {
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
                    <h3 tw="text-primary-500">Meshes</h3>
                    <h6>CAD Modeling</h6>

                    <div className="details" style={{marginTop: "50px"}}>
                        <div className="info">
                            <h6 tw="text-primary-500">Tools</h6>
                            <div>Rhino</div>
                        </div>
                        <div id="problemSpace" style={{paddingBottom: "50px"}}>
                            <h6 tw="text-primary-500">The Goal</h6>
                            <p>
                                To modify the mesh of two STLs to produce a single STL. The STLs may come from any
                                source (e.g. Thingiverse). When the meshes are merged together, it should pass all checks
                                for rapid prototyping.
                            </p>
                        </div>
                    </div>
                    <div id="goal" style={{paddingBottom: "50px"}}>
                        <h6 tw="text-primary-500">Working with Meshes</h6>
                        <p style={{paddingBottom: "25px"}}>
                            For this assignment, I didn't particularly have anything in mind when it came to merging two
                            STLs into one. As a result, I was just scrolling through Thingiverse looking for anything
                            that might make an interesting combination. After a bit of scrolling I came across a file
                            for a
                            <a href={links.blueShell} style={{color: "rgb(100, 21, 255)"}}> blue shell</a> from Mario
                            Kart. Looking at the renders, it vaguely reminded me of a helmet and so I thought why not
                            use the shell as a helmet. Some more scrolling later, I stumbled upon a
                            <a href={links.dragon} style={{color: "rgb(100, 21, 255)"}}> dragon file</a> and I knew I
                            had found my second STL to add a helmet to. After loading both files in Rhino, I reduced
                            each file so that they were more manageable to work with. I didn't have to do too much with
                            the dragon STL since all I wanted to do was put a helmet on it. However, I had some things I
                            had to cut out of the blue shell STL to make it an actual helmet. Using some polygons, I
                            converted those into meshes and then made BooleanDifferences on the shell to cut out
                            unnecessary parts. Going through this wasn't too time consuming, though I had to be careful
                            about not creating non-manifold edges or openings in the mesh. Once that was all done, I
                            BooleanUnion'd the two meshes together and I now had a head protected dragon! Like with
                            every assignment, the final Rhino can be found on
                            <a href={links.gitFiles} style={{color: "rgb(100, 21, 255)"}}> Github</a>.
                        </p>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div className="BaseCampPersonaLayout">
                                <img className="BaseCampPersona" src={STLImage} alt="Dragon and blue shell STLs in Rhino as meshes"/>
                                <img className="BaseCampPersona" src={BooleanDifference} alt="Using shapes to cut out unwanted part of meshes" />
                            </div>
                            <div className="BaseCampPersonaLayout">
                                <img className="BaseCampPersona" src={Merge} alt="Aligning the shell on the dragon's head"/>
                                <img className="BaseCampPersona" src={Final} alt="Merging the shell and the dragon into one mesh" />
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
    blueShell: "https://www.thingiverse.com/thing:1952442/files",
    dragon: "https://www.thingiverse.com/thing:1624412",
    hexagon: "https://www.youtube.com/watch?v=thOifuHs6eY",
    gitFiles: "https://github.com/Krocketeer/HCDE533-webpage/tree/master/ProjectFiles/HW3ClipNest",
}

const lightboxOptions = {
    showDownloadButton: false,
}