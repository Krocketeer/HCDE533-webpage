import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-1.svg";
import { css } from "styled-components/macro";

import { SRLWrapper } from "simple-react-lightbox"
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
import ScrollArrow from "../components/ScrollArrow";

const Container = tw.div`relative`;
// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 top-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;
const SvgDotPattern = tw(SvgDecoratorBlob1)`
    absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24
`;

export default function ProjectTemplate() {
    return <>
        <Container>
            <DecoratorBlob1 style={{top: "23rem"}} />
            <SvgDotPattern />
        </Container>
        <SRLWrapper options={lightboxOptions}>
            <ScrollArrow />
            <div className="pageLayout">
                <div className="pageCover">
                    <img src={SeaTransitCover} alt="Seattle Transit Rebrand"
                         style={{width: "100%", height: "100%", cursor: "zoom-in"}} />
                </div>
                <div className="pageHeader">
                    <h3 tw="text-primary-500">Seattle Public Transit</h3>
                    <h6>Visual Design & Brand Identity</h6>

                    <div className="details" style={{marginTop: "50px"}}>
                        <div className="info">
                            <h6 tw="text-primary-500">Tools</h6>
                            <div>Figma</div>
                            <div>Illustrator</div>
                            <div>Lucid Chart</div>
                            <div>Photoshop</div>
                        </div>
                        <div id="problemSpace" style={{paddingBottom: "50px"}}>
                            <h6 tw="text-primary-500">Problem Space</h6>
                            <p> Living in a high density city often means using public transportation as a way of commuting.
                                Whether it’s traveling to school, to work, or anything in between, a city’s public
                                transportation service must be extensive enough to support its community. For the city of
                                Seattle, two transit agencies — King County Metro and Sound Transit — fulfills the
                                community’s public transportation needs. King County Metro operates the majority of the
                                local busses within the city while Sound Transit operates regional busses in addition to the
                                city’s rail service. While both agencies serve the city of Seattle, they both maintain a
                                different visual branding on their buses and rail service from each other. This often causes
                                confusion for out of city visitors and generally those who are not familiar with how public
                                transit works in Seattle. </p>
                        </div>
                    </div>
                    <div id="goal" style={{paddingBottom: "50px"}}>
                        <h6 tw="text-primary-500">The Goal</h6>
                        <p> The rebrand of King County Metro and Sound Transit aims to unify the
                            two into one cohesive brand that represents Seattle public transit. </p>
                    </div>
                    <div id="moodBoard">
                        <h6 tw="text-primary-500">Setting the Mood</h6>
                        <div style={styles.centerDiv50}>
                            <p> The first step in creating a rebrand for Seattle public transit was figuring out what feeling
                                the rebrand should embody. I chose images that represent the lively night life of Seattle and
                                the numerous rich-nature colors that exist in and around the city. Particularly, I wanted to
                                incorporate things and places that were iconic to Seattle, such as Pike Place Market, and be
                                able to represent them in the rebrand. </p>
                            <img id="SeaTransMoodBoard" src={moodBoard} alt="Mood board" />
                            {/*<figcaption className="caption">Visual representation of the direction for the rebrand of Seattle public transit</figcaption>*/}
                        </div>
                    </div>
                    <div>
                        <h6 tw="text-primary-500">Colors</h6>
                        <div style={styles.centerDiv50}>
                            <p style={{paddingBottom: "25px"}}>
                                Inspired by the mood board, the color palette pulls from many
                                of the vibrant imagery that exists in and around the city. Midnight serves as a base color that
                                many Seattlites are used to while ocean blue, blizzard blue, and minty green act as an accent
                                that is visible in bright and dark environments. Pine green and slate purple were chosen to
                                stand out against the other blues and greens while still being cohesive with the
                                color scheme. </p>
                            <img id="SeaTransColor" src={colors} alt="Color palette for rebrand" />
                        </div>
                    </div>
                    <div>
                        <h6 tw="text-primary-500">Typography</h6>
                        <div style={styles.centerDiv50}>
                            <p> One of the main ways to communicate information towards riders of Seattle public transit is
                                through text. As a result, the typefaces of the text need to be visually distinct enough for
                                riders to be able to read, even if they are rushing to get where they are going. Cabin was
                                chosen for its modern look while being bold enough to catch riders’ eyes. Open Sans was chosen
                                as the font pairs well with Cabin, creating a cohesive system.
                            </p>
                            <img id="SeaTransType" src={type} alt="Typography layout for rebrand" />
                        </div>
                    </div>
                    <div>
                        <h6 tw="text-primary-500">User Flows & Low-Fi Designs</h6>
                        <div style={styles.centerDiv}>
                            <p style={{paddingBottom: "25px"}}>
                                Before designing a mobile and kiosk application for Seattle public transit, a user flow was
                                created out of interviews and observations to reflect the needs of riders. User flows focused
                                on core functionalities of a mobile and kiosk application that could best serve riders in their
                                commutes. The user flows then served as a grounding base for me as I created low-fidelity
                                designs of the mobile and kiosk applications.
                            </p>
                            <div id="SeaTransPDFs">
                                <div style={styles.centerDiv50}>
                                    {/*<embed id="SeaTransUserFlow" src={userFlow} allowFullScreen/>*/}
                                    <object id="SeaTransUserFlow" data={userFlow} type="application/pdf">User Flow Diagram</object>
                                    <i>User Flow Diagram</i>
                                </div>
                                <div style={styles.centerDiv50}>
                                    {/*<embed id="SeaTransLowFi" src={lowFi} allowFullScreen/>*/}
                                    <object id="SeaTransLowFi" data={lowFi} type="application/pdf">Low-fidelity mockups of App and Kiosk tasks</object>
                                    <i>Low-fidelity mockups of App and Kiosk tasks</i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6 tw="text-primary-500">Iconography</h6>
                        <div style={styles.centerDiv50}>
                            <p style={{paddingBottom: "25px"}}>
                                One of the core visual aspects of a design is the usage of icons. Icons were selected based
                                on their clarity in helping riders understand information at a quick glance, either in person
                                or on an application.
                            </p>
                            <div style={styles.centerDiv}>
                                <img id="SeaTransIcons" src={icons} alt="list of icons used in high fidelity wireframes" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6 tw="text-primary-500">High-Fi Interactive Prototype</h6>
                        <div style={styles.centerDiv50}>
                            <p> Equipped with a visual system and low-fidelity designs, I then created high-fidelity
                                wireframes of a mobile and kiosk application for Seattle public transit as well as an
                                interactive prototype. These wireframes focused on functionality, while maintaining a
                                simple and elegant design.  (Not working? Click here to view
                                the <a href={links.figmaAppWireframe}>App Prototype</a> or the
                                <a href={links.figmaKioskWireframe}> Kiosk Prototype</a> in Figma)
                            </p>
                            <div style={styles.centerDiv}>
                                <iframe id="figmaAppFrame"
                                        src={links.figmaAppEmbed}
                                        allowFullScreen title="Seattle Transit Rebrand App" />
                                <iframe id="figmaKioskFrame"
                                        src={links.figmaKioskEmbed}
                                        allowFullScreen title="Seattle Transit Rebrand Kiosk" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6 tw="text-primary-500">Wayfinding System</h6>
                        <div>
                            <p style={{paddingBottom: "25px"}}>
                                An essential part of public transit is the usage of wayfinding in order to help riders navigate
                                the public transit system. Wayfinding signs were created to be big and visually distinct so
                                that riders can easily understand the information on the signs as they are heading to their
                                destination. In addition, the ORCA card was updated to a more modern and simplistic design to
                                compliment the styles shown in the rebrand. </p>
                            <div style={styles.centerDiv}>
                                <img id="SeaTransWayfinding" src={busMockup} alt="Mockup of Signs at a Bus Stop" />
                                <img id="SeaTransWayfinding" src={busMockup2} alt="Mockup of Signs at a Bus Stop" />
                                <img id="SeaTransWayfinding" src={lightRailSign} alt="Mockup of Light Rail navigational signs" />
                                <img id="SeaTransWayfinding" src={railStationMockup} alt="Mockup of Light Rail navigational signs" />
                                <img id="SeaTransWayfinding" src={ORCA} alt="Mockup of front and back of ORCA card" />
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
