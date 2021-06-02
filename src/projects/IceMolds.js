import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-1.svg";
import { css } from "styled-components/macro";

import { SRLWrapper } from "simple-react-lightbox"
import ScrollArrow from "../components/ScrollArrow";

import Cover from "../images/Ice/RenderCover.png"

import GrassHopperDesign from "../images/IceMolds/Screen Shot 2021-05-25 at 12.39.28 PM.png"
import BakedDesign from "../images/IceMolds/Screen Shot 2021-05-25 at 12.39.15 PM.png"
import NegativeMoldCreation from "../images/IceMolds/Screen Shot 2021-05-25 at 12.45.39 PM.png"
import NegativeMold from "../images/IceMolds/Screen Shot 2021-05-25 at 12.49.24 PM.png"
import SiliconePrep from "../images/IceMolds/IMG_2745.jpeg"
import PouredSilicone from "../images/IceMolds/IMG_2749.jpeg"
import MoldHousing from "../images/IceMolds/IMG_2762.jpeg"
import Molds from "../images/IceMolds/IMG_2763.jpeg"
import FrozenMolds from "../images/IceMolds/IMG_2781.jpeg"
import Ice from "../images/IceMolds/IMG_2783.jpeg"
import IceTop from "../images/IceMolds/IMG_2766.jpeg"
import Drink from "../images/IceMolds/IMG_2788.jpeg"

import Sketch from "../images/Ice/IMG_CE31.jpeg";


const Container = tw.div`relative`;
// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 top-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;
const SvgDotPattern = tw(SvgDecoratorBlob1)`
    absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24
`;

export default function IceMolds() {
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
                    <h3 tw="text-primary-500">Ice Molds</h3>
                    <h6>CAD & 3D Modeling, Casting, and Molding</h6>

                    <div className="details" style={{marginTop: "50px"}}>
                        <div className="info">
                            <h6 tw="text-primary-500">Tools</h6>
                            <div>Cura</div>
                            <div>Grasshopper</div>
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
                    <div id="goal" style={{paddingBottom: "50px"}}>
                        <h6 tw="text-primary-500">Designing the Master Part</h6>
                        <p style={{paddingBottom: "25px"}}>
                            Similar to the last casting assignment, I first had to create the master part in Rhino. Since
                            I wanted to create spherical ice cubes, all I had to do was create a simple sphere. However,
                            I had an extra challenge since I wanted to create two different sized spherical ice molds.
                            Instead of manually doing this, which would have taken quite some time, I decided to create
                            it in Grasshopper so that it could easily be scaled. After measuring my hydroflasks to
                            determine what size spheres I wanted, I then created the molds in Grasshopper, baked it to
                            Rhino, and then union and deleted the parts until I had the molds. Like with my last molding
                            assignment, it didn't intuitively make sense to me how to make the negative of the molds so
                            that silicone could form the actual molds themselves. Instead, I opted to just create a 3D
                            printed version of the mold, and then take the difference to get the negative I needed.
                            Afterwards, it was straight to the 3D printer where I waited around 24 hours to get the
                            pieces needed to make 4 ice molds. All the files for the mold, which includes Rhino and
                            STLs can be found on
                            <a href={links.rhinoSTLFiles} style={{color: "rgb(100, 21, 255)"}}> Github</a>.
                        </p>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <div className="BaseCampPersonaLayout">
                                <img className="BaseCampPersona" src={GrassHopperDesign} alt="Using grasshopper to create shapes for molds"/>
                                <img className="BaseCampPersona" src={BakedDesign} alt="Baking grasshopper designs to Rhino" />
                            </div>
                            <div className="BaseCampPersonaLayout">
                                <img className="BaseCampPersona" src={NegativeMoldCreation} alt="Creating the negative of the molds" />
                                <img className="BaseCampPersona" src={NegativeMold} alt="Both negative molds" />
                            </div>
                        </div>
                    </div>
                    <div id="moodBoard">
                        <h6 tw="text-primary-500">Creating Silicone Molds</h6>
                        <div style={styles.centerDiv50}>
                            <p style={{paddingBottom: "25px"}}>
                                Once I had my negatives, it was now time to create the silicone positive of the mold.
                                Instead of using the Smooth-On Oomoo 25, I had to order some food grade silicone since
                                the ice would be used in drinks and naturally consumed. The process for this was
                                virtually the same as my last mold making assignment: pouring the correct 10:1 ratio of
                                each mix by weight according to instructions, mixing thoroughly, and then pouring into
                                the molds before the initial set time. The only difference, however, was that I decided
                                to pour my silicon during class and my professor had spotlighted my video so it was like
                                I was on a cooking show. I then waited for two days for the silicone to cure (cure time
                                is 24 hours but I didn't get an opportunity to continue working on this until two days
                                later) at which point I carefully extracted the silicone molds from the 3D printed
                                negatives with a box cutter.
                            </p>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                <div className="BaseCampPersonaLayout">
                                    <img className="BaseCampPersona" src={SiliconePrep} alt="Prepping all 4 molds for silicone pouring"/>
                                    <img className="BaseCampPersona" src={PouredSilicone} alt="After pouring silicone into the molds" />
                                </div>
                                <div className="BaseCampPersonaLayout">
                                    <img className="BaseCampPersona" src={MoldHousing} alt="Removal of half of a mold from the negative" />
                                    <img className="BaseCampPersona" src={Molds} alt="Both silicone molds" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6 tw="text-primary-500">Making Ice</h6>
                        <div style={styles.centerDiv50}>
                            <p style={{paddingBottom: "25px"}}>
                                Once the molds were complete it was now time to make ice! First I rinsed out each mold
                                to remove any residual silicone that hadn't completely set with the mold and then
                                started to pour water through the pour spouts that I made. That wasn't so successful so
                                I ended up using a syringe to fill the molds. Like with the last molds I rubber band the
                                two halves together to ensure that there would be no leaks after filling them. When one
                                was filled to the brim, I put it in the freeze as a test. To my surprise a few hours
                                later, I had created a spherical ball of ice, mostly. I noticed that the water expanded
                                as it froze which pushed water out through the pour spout and flexed part of the silicone
                                mold on the bottom where it was the thinnest. Taking that into account, I poured less
                                water into the next batch of spherical ice and set them on something flat in the freezer
                                to discourage expansion downwards. After a few more hours of waiting, the spherical ice
                                had come out like I imagined they would! With that, I celebrated the end of the quarter
                                with some sparkling water served with spherical ice.
                            </p>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                <div className="BaseCampPersonaLayout">
                                    <img className="BaseCampPersona" src={FrozenMolds} alt="Molds after removal from freezer"/>
                                    <img className="BaseCampPersona" src={Ice} alt="Spherical ice in mold" />
                                </div>
                                <div className="BaseCampPersonaLayout">
                                    <img className="BaseCampPersona" src={IceTop} alt="Top view of spherical ice in mold" />
                                    <img className="BaseCampPersona" src={Drink} alt="Spherical ice in glass of water" />
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
    gitFiles: "https://github.com/Krocketeer/HCDE533-webpage/tree/master/ProjectFiles/FinalProject",
}

const lightboxOptions = {
    showDownloadButton: false,
}