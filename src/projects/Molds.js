import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-1.svg";
import { css } from "styled-components/macro";

import { SRLWrapper } from "simple-react-lightbox"
import ScrollArrow from "../components/ScrollArrow";

import Cover from "../images/Molds/TempMoldsCover.png"
import MasterPart from "../images/Molds/Screen Shot 2021-05-07 at 1.54.13 AM.png"
import MoldDesign from "../images/Molds/Screen Shot 2021-05-07 at 2.15.59 AM.png"
import MoldCloseUp from "../images/Molds/Screen Shot 2021-05-07 at 2.16.05 AM.png"
import MoldSpout from "../images/Molds/Screen Shot 2021-05-07 at 3.11.37 AM.png"

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
                    <h6>CAD Modeling and 3D Modeling</h6>

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
                            This webpage will be updated once the lamp is complete since I like to do it all at once. So
                            in the mean time, here's some images of the master part and the mold I made for it. To be continued... :)
                        </p>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div className="BaseCampPersonaLayout">
                                <img className="BaseCampPersona" src={MasterPart} alt="Extruded nautical anchor for master part"/>
                                <img className="BaseCampPersona" src={MoldDesign} alt="Anchor extruded into two rectangles for mold" />
                            </div>
                            <div className="BaseCampPersonaLayout">
                                <img className="BaseCampPersona" src={MoldCloseUp} alt="Closer up view of mold parts" />
                                <img className="BaseCampPersona" src={MoldSpout} alt="Pour spouts for plaster to create silicone anchors" />
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
    gitFiles: "https://github.com/Krocketeer/HCDE533-webpage/tree/master/ProjectFiles/HW4Mesh",
}

const lightboxOptions = {
    showDownloadButton: false,
}