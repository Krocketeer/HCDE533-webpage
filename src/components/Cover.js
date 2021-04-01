import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-1.svg";
import serverIllustration from "../images/server-secure-illustration.svg"
import printerIllustration from "../images/3d-printer-svgrepo-com.svg"
import { css } from "styled-components/macro"; //Despite what ESLint says, is necessary

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;
const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;
const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;
const SvgDotPattern = tw(SvgDecoratorBlob1)`
    absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24
`;

export default function Cover() {
    return <Container>
        <TwoColumn>
            <LeftColumn>
                <Heading>
                    <span tw="text-primary-500">HCDE 533:</span>
                    <div>Digital Fabrication</div>
                </Heading>
            </LeftColumn>
            <RightColumn>
                <IllustrationContainer>
                    <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" style={{width: "20rem", height: "20rem"}} src={printerIllustration} alt="Design Illustration" />
                </IllustrationContainer>
            </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
        <SvgDotPattern />
    </Container>
};
