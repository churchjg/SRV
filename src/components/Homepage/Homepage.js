import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./Header.js";
import MainFeaturedPost from "./MainFeaturedPost";
import Footer from "./Footer";
import MobileHeader from "./MobileHeader";
import { Hidden } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  mobileMenu: {
    fontSize: "30px",
    position: "absolute",
    right: 25,
    top: 10,
  },
  
}));


const sections = [
  // { title: "Home", Link: "/" },
  { title: "About Us", url: "/about" },
  { title: "Wine Shop", url: "/products" },
  { title: "Events", url: "/event" },
  { title: "Gallery", url: "/gallery" },
  { title: "Contact Us", url: "/contact"},
];

const mainFeaturedPost = {
  title: "Senedo Ridge Vineyard",
  description:
    "Family owned and operated",
  image: "https://i.imgur.com/hRMV0G1.jpg",
  imgText: "main image description",
//   linkText: "Browse Wines",
};




export default function Homepage({cart, totalItems}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="100%">
      
        <Header  title="Senedo Ridge Vineyard" sections={sections}   /> 
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
        </main>
      </Container>
      
      <Footer
        title="Senedo Ridge Vineyard"
        description="Estate Grown & Operated"
      />
    </React.Fragment>
  );
}
