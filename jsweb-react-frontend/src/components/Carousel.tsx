import React, { useState, useEffect } from "react";
import { Box, Icon } from "@mui/material";
import { IconButton } from "@mui/material";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import { HomePageContent } from "./HomePageContent";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

/** ------------------------------------
 *  Carousel
 *  ------------------------------------
 *  Component to render a dynamic slideshow of pages.
 *
 *  React, useState, useEffect: These are fundamental hooks from React. useState lets us maintain state in our component, and useEffect allows us to run side-effects (like fetching data or updating the DOM).
 *  Followed the following page for guidance: https://medium.com/@ltomblock/crafting-a-professional-looking-carousel-with-react-and-mui-746a86af0ab0
 * ------------------------------------ */

export interface CarouselCards {
  content: CardContent[];
}

interface CardContent {
  title: string;
  subtitle: string;
  buttonlink: string;
  buttontext: string;
  colour: string;
  buttonvisible: boolean;
  subcontent: any;
}

export const Carousel = (Props: CarouselCards) => {
  const [cards, setCards] = useState<React.ReactElement[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState<
    "right" | "left" | undefined
  >("left");

  const cardsPerPage = 1; //defines how many cards show per page
  const duplicateCards: React.ReactElement[] = Array.from(
    { length: Props.content.length },
    (_, i) => (
      <HomePageContent
        title={Props.content[i].title}
        subtitle={Props.content[i].subtitle}
        buttonlink={Props.content[i].buttonlink}
        buttontext={Props.content[i].buttontext}
        colour={Props.content[i].colour}
        enablebutton={Props.content[i].buttonvisible}
        subcontent={Props.content[i].subcontent}
        key={i}
      />
    )
  );

  const handleNextPage = () => {
    setSlideDirection("left");
    currentPage == maxCards - 1
      ? setCurrentPage(0)
      : setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setSlideDirection("right");
    currentPage == 0
      ? setCurrentPage(maxCards-1)
      : setCurrentPage((prevPage) => prevPage - 1);
  };
  const maxCards = Math.ceil((cards.length || 0) / cardsPerPage)


  useEffect(() => {
    setCards(duplicateCards);
  }, []); //Here, we’re using the useEffect hook to initially set our cards to the duplicateCards array when the component mounts. The empty array [] means this effect runs only once, similar to componentDidMount in class components. When creating a more dynamic site, which we will cover in another tutorial, this would most be linked to some sort of call to collect the relevant data and then set the state of the “cards” array.

  return (
    <Box className = "Carousel"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <IconButton
        onClick={handlePrevPage}
        sx={{ margin: 5 }}
      >
        <NavigateBeforeIcon />
      </IconButton>
      <Box className = "Carousel-Content"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          paddingBottom:"2vh"
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={"card-${index}"}
            sx={{
              width: "100%",
              height: "100%",
              display: currentPage === index ? "flex" : "none",
            }}
          >
            <Slide direction={slideDirection} in={currentPage === index}>
              <Stack spacing={2} direction="row">
                {" "}
                {cards.slice(
                  index * cardsPerPage,
                  index * cardsPerPage + cardsPerPage
                )}
              </Stack>
            </Slide>
          </Box>
        ))}
      </Box>
      <IconButton
        onClick={handleNextPage}
        sx={{ margin: 5 }}
        
      >
        <NavigateNextIcon />
      </IconButton>
    </Box>
  );
};
