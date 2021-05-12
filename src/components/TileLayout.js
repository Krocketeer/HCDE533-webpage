import React, { useState } from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "./misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { SectionHeading } from "./misc/Headings";
import { PrimaryButton } from "./misc/Buttons";

import CookieCutterCover from "../images/CookieCutters/CookieCuttersCover.png"
import CubesTubesCover from "../images/CubesTubes/CubesTubesCover.png"
import ClipNestCover from "../images/ClipNest/ClipNestCover.png"
import MeshCover from "../images/Mesh/MeshCover.png"
import LampCover from "../images/Lamp/LampCover2.png"

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
    ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
    ${props => props.featured && css`
        ${tw`w-full!`}
        ${Post} {
            ${tw`sm:flex-row! h-full sm:pr-4`}
        }
        ${Image} {
            ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
        }
        ${Info} {
            ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
        }
        ${Description} {
            ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
    }`}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
    ${props => css`background-image: url("${props.imageSrc}");`}
    ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default ({
                    headingText = "Projects",
                    posts = [assignment5(), assignment1(), assignment2(), assignment3(), assignment4(), assignment6(), finalProject()]
                }) => {
    const [visible, setVisible] = useState(7);
    const onLoadMoreClick = () => {
        setVisible(v => v + 6);
    };
    return <AnimationRevealPage>
        <Container>
            <ContentWithPaddingXl>
                <HeadingRow>
                    <Heading>{headingText}</Heading>
                </HeadingRow>
                <Posts>
                    {posts.slice(0, visible).map((post, index) => (
                        <PostContainer key={index} featured={post.featured}>
                            <Post className="group" as="a" href={post.url}>
                                <Image imageSrc={post.imageSrc} />
                                <Info>
                                    <Category>{post.category}</Category>
                                    <CreationDate>{post.date}</CreationDate>
                                    <Title>{post.title}</Title>
                                    {post.featured && post.description && <Description>{post.description}</Description>}
                                </Info>
                            </Post>
                        </PostContainer>
                    ))}
                </Posts>
                {visible < posts.length && (
                    <ButtonContainer>
                        <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
                    </ButtonContainer>
                )}
            </ContentWithPaddingXl>
        </Container>
    </AnimationRevealPage>
};

const getPlaceholderPost = () => ({
    imageSrc:
        "https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
    category: "Travel Guide",
    date: "April 19, 2020",
    title: "Visit the beautiful Alps in Switzerland",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://reddit.com"
});
const assignment1 =()=> ({
    imageSrc: CookieCutterCover,
    category: "Assignment 1",
    date: "",
    title: "First Rhino Model",
    description: "Using images to create cookie cutters models in Rhino",
    url: "/CookieCutters",
    featured: false
})
const assignment2 =()=> ({
    imageSrc: CubesTubesCover,
    category: "Assignment 2",
    date: "",
    title: "Cubes & Tubes",
    description: "Getting started with 3D printing using both Rhino to model and Cura to slice",
    url: "/CubesTubes",
    featured: false
})
const assignment3 =()=> ({
    imageSrc: ClipNestCover,
    category: "Assignment 3",
    date: "",
    title: "Clips & Nests",
    description: "Using Grasshopper to create cardboard clips and nested shapes",
    url: "/ClipNest",
    featured: false
})
const assignment4 =()=> ({
    imageSrc: MeshCover,
    category: "Assignment 4",
    date: "",
    title: "Meshes",
    description: "Using Rhino to modify and combine existing meshes",
    url: "/Mesh",
    featured: false
})
const assignment5 =()=> ({
    imageSrc: LampCover,
    category: "Assignment 5",
    date: "Assignment 5",
    title: "Lamp",
    description: "Using Rhino, Grasshopper, and all the other tools we learned in previous weeks, design and create a lamp!",
    url: "/Lamp",
    featured: true
})
const assignment6 =()=> ({
    imageSrc: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
    category: "Assignment 6",
    date: "Assignment 6",
    title: "Assignment 6 Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "/",
    featured: false
})
const finalProject =()=> ({
    imageSrc: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
    category: "Final Project",
    date: "Final Project",
    title: "Assignment 7 Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "/",
    featured: false
})