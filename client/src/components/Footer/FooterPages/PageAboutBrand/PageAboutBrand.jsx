import React from "react";

import { Box, Button, Grid, Typography, styled } from "@mui/material";
import FooterSvgIcon from "../FooterSvgIcon/FooterSvgIcon";

const PageAboutBrand = () => {
  const Ul = styled("ul")({
    padding: "0px 0px 0px 40px",
    fontWeight: 500,
    fontSize: "14px",
  });

  const Li = styled("li")({
    margin: "10px 0px",
    position: "relative",
    color: "rgb(160, 160, 160)",
    lineHeight: "20px",
    "::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "-14px",
      width: "4px",
      height: "4px",
      backgroundColor: "rgb(160, 160, 160)",
    },
  });

  const Paragraf = styled("ul")({
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "20px",
    color: "rgb(160, 160, 160)",
    
    margin: "15px 0px",
  });

  const Titleh2 = styled("h2")({
    fontSize: 36,
    fontWeight: 600,
    marginBottom: 25,
    paddingLeft: 15,
    color: "rgb(18, 18, 18)",
  });

  const Titleh3 = styled("h3")({
    margin: "30px 0px",
    lineHeight: "45px",
    color: "rgb(18, 18, 18)",
    fontSize: 36,
    fontWeight: 600,
  });

  const TitleUpperCase = styled("h3")({
    fontWeight: 700,
    fontSize: "36px",
    lineHeight: "45px",
    color: "rgb(18, 18, 18)",
    margin: "30px 0px",
    textTransform: "uppercase",
  });

  const Img = styled("img")({
    width: "100%",
  });

  const BoxSvg = styled("div")({
    width: '40px',
    fill: "rgb(255,255,255)",
    alignContent: "center",
    pr: 1,
  });

  const ContainerBtn = styled("div")({
    display: "flex",
    width: "100%",
    backgroundColor: "rgb(9, 128, 87)",
    alignItems: "center",
    padding: "30px 0px  30px 20px",
    boxSizing: "border-box",
  });

  const ContainerText = styled("div")({
    display: "flex",
    width: "100%",
    backgroundColor: "rgb(9, 128, 87)",
    alignItems: "center",
    boxSizing: "border-box",
    margin: "48px 0px",
    padding: "30px 20px",
  });

  const TextBox = styled('p')({
    color: "rgb(255,255,255)",
    fontWeight: 400,
    fontSize: 18,
    padding: "0px 10px 0px 10px",
    lineHeight: "24px",
  })

  return (
    <Box sx={{ maxWidth: "1900px", fontFamily: "Montserrat, sans-serif" }}>
      <Titleh2>OnlyBike Brand philosophy</Titleh2>
      <Box
        sx={{
          fontSize: 14,
          fontWeight: 500,
          color: "rgb(160,160,160)",
          pl: "15px",
        }}
      >
        <Typography component="p">OUR MISSION:</Typography>
        <Typography component="p" sx={{ mb: 3 }}>
          We believe that the world will be a better place if each person spends
          a little more time for themselves.
        </Typography>
      </Box>

      <Grid
        container
        spacing={6}
        columns={{ xs: 6, sm: 12, md: 12 }}
        sx={{ alignItems: "center" }}
      >
        <Grid item xs={6} sm={12} md={6}>
          <Img
            src="/assets/about-brand-page/leonardo-zorzi-1.jpg"
            alt="leonardo-zorzi"
          ></Img>
        </Grid>
        <Grid item xs={6} sm={12} md={6}>
          <Paragraf>
            As a child, your worries had laid entirely in daylight. There were
            no routine problems, and no commitment to follow and not delegated.
            Even being an adult, you often remember your childhood, when the
            guys in the park, laughing cheerfully, drive past you on their
            bikes. Your first dream came true when you woke up on your tenth
            birthday to find a brand new bike. It seems that earlier dreams were
            more accessible, literally at arms length.
          </Paragraf>
        </Grid>

        <Grid item xs={6} sm={12} md={6}>
          <Titleh3>Nostalgia for a dream</Titleh3>
          <Paragraf>
            You grew up, became an adult, and independent, but heres the paradox
            - for some reason dreams have become difficult to achieve. You freed
            yourself from custody, but problems and troubles came in exchange.
            Life has become like an endless race with no finish line. This is
            the case when you gain not from participation but from liberation.
            Why would we regain the feeling of freedom that was once lost in
            childhood?
          </Paragraf>
        </Grid>
        <Grid item xs={6} sm={12} md={6}>
          <ContainerBtn>
            <BoxSvg>
              <FooterSvgIcon />
            </BoxSvg>
            <Box>
              <TextBox
              >
                Complete onlyBike Catalog at our site
              </TextBox>
            </Box>
            <Box sx={{ justifyContent: "center" }}>
              <Button
                sx={{
                  fontSize: 16,
                  minWidth: "175px",
                  color: "rgb(255,255,255)",
                  textTransform: "none",
                  justifyContent: "flex-end",
                  background: "rgb(18, 18, 18)",
                  borderRadius: 0,
                  justifyContent: "center",
                  margin: '0px 30px',
                  ":hover": {
                    backgroundColor: "rgb(18, 18, 18)",
                  },
                }}
              >
                To catalog
              </Button>
            </Box>
          </ContainerBtn>
        </Grid>
      </Grid>
      <Box>
        <img
          style={{ width: "100%", margin: "30px 0px" }}
          src="/assets/about-brand-page/david-marcu-2.jpg"
        ></img>
      </Box>
      <Grid container spacing={6} columns={{ xs: 6, sm: 12, md: 12 }}>
        <Grid item xs={6} sm={12} md={6}>
          <Box>
            <Box>
              <TitleUpperCase>Affordable Pleasure</TitleUpperCase>
              <Paragraf>
                Here at Pridebikes, we are committed to enjoying life. And by
                creating bicycles, we share this opportunity with others. And
                for reaching this zen, it is just enough to forget about the
                routine for a while and allow yourself to be childish — sit on a
                bicycle, put your head on airing and you will feel how the
                problems fading away with every kilometer, and you see only a
                roadbed in front of you. Even such a short-term escape from
                reality will make you happier and give you the feeling of
                flying.
              </Paragraf>
            </Box>
            <Box>
              <TitleUpperCase>Release From Worries</TitleUpperCase>
              <Paragraf>
                Returning home from a bike ride, you inevitably come back
                refreshed! This breath of freedom, albeit short-term, will
                return the pleasure forgotten from your childhood from simple
                things, will make you feel alive.
              </Paragraf>

              <Paragraf>
                Pride has always been and will remain a brand for pleasure. We
                want you to regain the ability to enjoy simple things and
                cycling. After all, each of us deserves our own personal time
                and an escape from reality, at least short, but which inevitably
                brings inspiration and thirst for new trips.
              </Paragraf>

              <Img
                src="/assets/about-brand-page/sagar-rana-3.jpg"
                alt="sagar-rana"
              ></Img>
            </Box>
            <Box>
              <TitleUpperCase>Whom is Pride Fit For</TitleUpperCase>
              <Box>
                <Ul>
                  <Li>for all those who value his freedom of movement;</Li>
                  <Li>
                    for those who, under the burden of worries, have forgotten
                    about simple pleasures;
                  </Li>
                  <Li>
                    for those who value time and are ready to spend a part of it
                    on themselves;
                  </Li>
                  <Li>
                    for parents who are ready to give their children a dream.
                  </Li>
                </Ul>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={12} md={6}>
          <Box>
            <ContainerText>
              <BoxSvg>
                <FooterSvgIcon />
              </BoxSvg>
              <Box>
                <TextBox
                >
                  PRIDE BIKES - is a brand, that gives you relief rom worries,
                  and pleasure forgotten in childhood.
                </TextBox>
              </Box>
            </ContainerText>

            <TitleUpperCase>PRIDE IS THE ME-TIME COMPANY</TitleUpperCase>
            <Paragraf>
              We believe that the world will be a better place if everyone
              spends a little more time on themselves. Because personal time is
              a basic need and a universal value. PRIDE is a me-time brand. And
              we will be very happy if you share with us your pleasant moments
              and stories of relief from worries. Its so important to know that
              your job makes people happier.
            </Paragraf>
            <Img
              src="/assets/about-brand-page/raja-sen-4.jpg"
              alt="raja-sen"
            ></Img>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PageAboutBrand;
