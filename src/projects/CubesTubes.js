import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-1.svg";
import { css } from "styled-components/macro";

import { SRLWrapper } from "simple-react-lightbox"
import ScrollArrow from "../components/ScrollArrow";
import CubesTubesTable from "../components/CubesTubesTable";

import Cover from "../images/CubesTubes/CubesTubesCover.png"
import Printer from "../images/CubesTubes/63790200217__51F2136B-1C15-4F22-86DC-1E11DA4A817A.jpeg"
import Rhino from "../images/CubesTubes/RhinoCubesTubes.png"
import Cura from "../images/CubesTubes/CuraCubesTubes.png"
import Misprint from "../images/CubesTubes/IMG_2493.jpeg"
import InProgress from "../images/CubesTubes/64015505595__720E76F1-CDC4-4641-8897-166F179F2F7E.jpeg"
import Cube from "../images/CubesTubes/IMG_2494.jpeg"
import BedLeveling from "../images/CubesTubes/IMG_2503.jpeg"
import AllPrints from "../images/CubesTubes/IMG_2577.jpeg"
import Trial6Width from "../images/CubesTubes/IMG_2542.jpeg"
import Trial6Length from "../images/CubesTubes/IMG_2543.jpeg"
import Trial6Diameter from "../images/CubesTubes/IMG_2540.jpeg"


const Container = tw.div`relative`;
// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 top-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;
const SvgDotPattern = tw(SvgDecoratorBlob1)`
    absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24
`;

export default function CubesTubes() {
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
                    <h3 tw="text-primary-500">Cubes & Tubes</h3>
                    <h6>CAD Modeling and 3D Printing</h6>

                    <div className="details" style={{marginTop: "50px"}}>
                        <div className="info">
                            <h6 tw="text-primary-500">Tools</h6>
                            <div>Cura</div>
                            <div>Rhino</div>
                        </div>
                        <div id="problemSpace" style={{paddingBottom: "50px"}}>
                            <h6 tw="text-primary-500">The Goal</h6>
                            <p> To assemble the 3D printer and explore tolerance controls using both Cura and Rhino.
                                Prints will consist of both cubes and tubes using different settings avaliable in Cura
                                and Rhino.
                            </p>
                        </div>
                    </div>
                    <div id="goal" style={{paddingBottom: "50px"}}>
                        <h6 tw="text-primary-500">Assembling the 3D Printer</h6>
                        <p style={{paddingBottom: "25px"}}>
                            When I first signed up for this class, I was excited at the fact that not only would I learn
                            how to 3D print things, but I would have my own 3D printer as well. Fast forward a few days
                            after I put in my purchase for the recommended Ender 3 Pro 3D Printer, it finally arrived. As
                            I pulled everything out of the box, I couldn't help but notice that the instructions that
                            came with the 3D printer was reminiscent of Ikea assembly guides since it only had pictures.
                            While I was confident in my ability to assemble Ikea furniture based off pictures, I wasn't
                            so sure about doing so for a 3D printer. Instead, I found this
                            <a href={links.youtubeTutorial} style={{color: "rgb(100, 21, 255)"}}> Youtube tutorial </a>
                            that gave a very in-depth guide as well as some tips on how to assemble the printer. After a
                            very tedious four hours (and a dinner break in the middle) everything was assembled! I then
                            followed a <a href={links.bedLeveling} style={{color: "rgb(100, 21, 255)"}}> bed
                            leveling tutorial </a> from the same channel which took less time but still an equally
                            amount of tediousness to achieve (Note: the picture at the time had the filament holder
                            backwards, but it has now been fixed :) ).
                        </p>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <img style={{width: "50%", height: "50%"}} id="SeaTransMoodBoard" src={Printer} alt="Ender 3 Pro 3D printer" />
                        </div>
                    </div>
                    <div id="moodBoard">
                        <h6 tw="text-primary-500">Modeling Cubes and Tubes</h6>
                        <div style={styles.centerDiv50}>
                            <p style={{paddingBottom: "25px"}}>
                                This week was primarily focused on printing and slicing as opposed to modeling and
                                designing like we did the week prior. As a result, the only thing we had to create in
                                Rhino was cubes and tubes. The cubes were created to a 2cm x 2cm x 2cm dimension and the
                                tubes were created to a 3 cm diameter and 3 cm height. I created a total of 5 cubes — 1
                                solid 2x2x2 cube and 4 cubes with a 10 cm diameter hole in the middle as — and 2 tubes —
                                1 solid and 1 hollow. I ended up creating 4 different cubes with holes in the middle
                                since my prints of the cubes didn't quite match the expected dimensions. All of the STL
                                and Rhino files can be found on
                                <a href={links.rhinoSTLFiles} style={{color: "rgb(100, 21, 255)"}}> Github</a>.
                            </p>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                <img id="SeaTransMoodBoard" src={Rhino} alt="Rhino modeling of cubes and tubes" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6 tw="text-primary-500">Slicing in Cura</h6>
                        <div style={styles.centerDiv50}>
                            <p style={{paddingBottom: "25px"}}>
                                After exporting each of my cubes and tubes from Rhino and importing them into Cura, it
                                was now time to slice them for printing! This was my first time using Cura and at first,
                                everything was kind of overwhelming to look at since there were so many options on what
                                settings to use for a print. Though the assignment did a great job of going through the
                                core features needed for slicing and I eventually found the settings that printed
                                consistent and structurally sound prints. All of the gcode files can be found
                                <a href={links.rhinoSTLFiles} style={{color: "rgb(100, 21, 255)"}}> Github</a> as well.
                            </p>
                            <img id="SeaTransColor" src={Cura} alt="Slicing of a cube using Cura" />
                        </div>
                    </div>
                    <div>
                        <h6 tw="text-primary-500">Printing</h6>
                        <div style={styles.centerDiv50}>
                            <p style={{paddingBottom: "25px"}}>
                                Once a file was successfully sliced in Cura, I then exported it as a gcode file and
                                uploaded it to the 3D printer to print. At first everything went smoothly until after
                                about 3 or 4 prints I started to have misprints where the prints wouldn't stick to the
                                glass bed. I tried to solve this by using smearing some glue from a glue stick to the
                                bed. That worked, except it worked too well and my print was stuck to the bed where I
                                had to use a razor blade to remove it. After cleaning the bed with isopropyl alcohol and
                                releveling it to make sure everything was fine, I started printing and everything seemed
                                fine. What was interesting though was that after a couple of prints, my bed would become
                                unleveled just enough that a misprint would happen so I started to get into the habit of
                                just checking to make sure my bed was level.
                            </p>
                            {/*<img id="SeaTransType" src={type} alt="Typography layout for rebrand" />*/}
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                <div className="BaseCampPersonaLayout">
                                    <img className="BaseCampPersona" src={Misprint} alt="Misprint of cube after cube became unstuck from bed"/>
                                    <img className="BaseCampPersona" src={BedLeveling} alt="Testing the levelness of bed with bed leveling print" />
                                </div>
                                <div className="BaseCampPersonaLayout">
                                    <img className="BaseCampPersona" src={InProgress} alt="In progress of cube printing"/>
                                    <img className="BaseCampPersona" src={Cube} alt="Finished cube print" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6 tw="text-primary-500">The Results</h6>
                        <div style={styles.centerDiv}>
                            <p style={{paddingBottom: "25px"}}>
                                After everything, I ended up with the 10 required prints (4 cubes, 2 tubes, and 4
                                cylinders) as well as the 6 additional cube prints in order to get my hallowed cube to
                                tolerance. Below are the dimensions of each print as well as the time require for each
                                print.
                            </p>
                            <CubesTubesTable />
                            <div style={{paddingBottom: "25px"}}/>
                            <p style={{paddingBottom: "25px"}}>
                                It was fairly easy to get the 10 required prints since it didn't take that
                                much to model and slice them, but what took the longest was actually letting them print.
                                Each print progressively got longer in time and so I often found myself running these
                                prints while other classes were happening or when I was doing other homework. For the
                                trials to get the hollow cubes, I first started with the base 2 cm cube that I used for
                                the required prints with a 1 cm diameter hole through it. Trials 2 and 3 then varied the
                                wall thickness to see if I could get the inner hole to dimension. When that didn't work,
                                I changed the hole diameter itself in Rhino which resulted in Trials 4 and 5 (note:
                                trials 4 and 5 were both printed at once which explains why they have the same print
                                time). When I saw that trials 3 and 4 gave the most promising results, I then combined
                                them for trial 6 — having a slightly bigger hole extrusion in Rhino and a single wall
                                extrusion in Cura.
                            </p>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                <div className="BaseCampPersonaLayout">
                                    <img className="BaseCampPersona" src={AllPrints} alt="All of the prints from the project (follows table order from left to right, top to bottom)"/>
                                    <img className="BaseCampPersona" src={Trial6Diameter} alt="Measuring diameter of hole for final cube" />
                                </div>
                                <div className="BaseCampPersonaLayout">
                                    <img className="BaseCampPersona" src={Trial6Width} alt="Measuring width for final cube"/>
                                    <img className="BaseCampPersona" src={Trial6Length} alt="Measuring length for final cube" />
                                </div>
                            </div>
                            <div style={{paddingBottom: "50px"}}/>
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
    youtubeTutorial: "https://www.youtube.com/watch?v=me8Qrwh907Q",
    bedLeveling: "https://www.youtube.com/watch?v=5eqTmb01cBk",
    androidLogo: "https://github.com/Krocketeer/HCDE533-webpage/blob/master/ProjectFiles/HW1CookieCutters/AndroidLogo.png",
    apolloIcon: "https://github.com/Krocketeer/HCDE533-webpage/blob/master/ProjectFiles/HW1CookieCutters/ApolloIcon.png",
    dog: "https://github.com/Krocketeer/HCDE533-webpage/blob/master/ProjectFiles/HW1CookieCutters/Dog.png",
    rhinoSTLFiles: "https://github.com/Krocketeer/HCDE533-webpage/tree/master/ProjectFiles/HW1CookieCutters",
}

const lightboxOptions = {
    showDownloadButton: false,
}

const data = [
    {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];