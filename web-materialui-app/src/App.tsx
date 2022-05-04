import "./App.css";
import NavBar from "./components/NavBar";
import CenteredText from "./components/CenteredText";
import TextWithImage from "./components/TextWithImage";
import { TContent } from "./models";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { primaryColor, secondaryColor } from "./theme/color-palette";
import theme from "./theme";

const myContent: TContent[] = [
  {
    title: "PERSONAL SHOPPER",
    subTitle:
      "Do you want to feel happy, confident, InStyle and avoid wasting money?",
    descriptions: [
      "The main objective of our personal shopping experience is to discover the clothing and accessories which best represent yourself. I am here to help you do just that, by materializing the style you’ve always dreamed of. Whether you’re considering a stylish design for an elegant night out, or a wardrobe to get you through the seasons.",
      "Every shopping session revolves around what works for you and your own taste, with a tailor made & curated shopping routes, starting 2h up to a full day based on your needs.",
    ],
    finishingText: "Get to know more details and book your appointment now :)",
    img: "https://freedesignfile.com/upload/2017/02/Girl-shopping-HD-picture-03.jpg",
  },
  {
    title: "PERSONAL SHOPPER FOR MEN",
    subTitle:
      "Dear men, do you feel exhausted everytime you go shopping? Do you know what suits you? Do you always end up buying the same things? Do you need a change of style?",
    descriptions: [
      "No worries! I have your back. I created this service exclusively for men, to provide a personalized and stress-free shopping experience.",
      "How?",
      "I find the best stores that fit your body and your lifestyle.",
      "I will give you tips to easily manage your own wardrobe, including outfit ideas for work, nights out and your free time.",
    ],
    finishingText: "Get to know more details and book your appointment now :)",
    img: "http://daman.co.id/daman.co.id/wp-content/uploads/2017/05/18160966_1300500379997093_1978007820502564864_n-1024x1024.jpg",
  },
];

function App() {
  return (
    <>
       <ThemeProvider theme={theme}>
      <NavBar />
      <CenteredText />
      {myContent.map((item, index) => (
        <TextWithImage
          key={index}
          textToTheRight={index % 2 === 0}
          content={item}
        />
      ))}
      </ThemeProvider>
    </>
  );
}

export default App;
