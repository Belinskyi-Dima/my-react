import React from "react";

import { Box } from "@mui/system";
import { Grid, styled } from "@mui/material";

const TitleContact = styled("h3")({
  fontSize: 36,
  fontWeight: 600,
  lineHeight: "42px",
});

const BoxColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 24,
});

const BoxSocial = styled("div")({
  display: "flex",
  flexDirection: "column",
  fontSize: 24,
  fontWeight: 600,
  lineHeight: 1.3,
});

const Span = styled("p")({
  fontSize: 18,
  fontWeight: 600,
  color: "rgb(18,18,18)",
  opacity: 0.6,
});

const LinkContacts = styled("a")({
  fontWeight: 600,
  fontSize: "24px",
  lineHeight: "30px",
  color: "rgb(18,18,18)",
  paddingBottom: 4,
});

const LinkSocial = styled("a")({
  color: "rgb(18,18,18)",
});

const Paragraf = styled("p")({
  fontSize: 24,
  fontWeight: 600,
});

const Img = styled("img")({
  width: "100%",
  display: 'flex',
  alignItems: 'center',
});

const PageContacts = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(249, 249, 249)",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <Grid Grid container spacing={6} columns={{ xs: 6, sm: 12, md: 12 }}>
        <Grid item xs={2} sm={12} md={6}>
          <BoxColumn>
            <TitleContact>Contacts</TitleContact>
            <Span>Email</Span>
            <LinkContacts href="mailto:contacts@onlyBike.com" underline="none">
              contact@onlyBike.com
            </LinkContacts>
            <Span>Hotline phone</Span>
            <LinkContacts href="tel:+38068121736" underline="none">
              +38(068)-12-17-36
            </LinkContacts>
            <Span sx={{ pt: 4 }}>Social networks</Span>
            <BoxSocial>
              <LinkSocial
                href="https://www.facebook.com/Pridebikes/"
                underline="none"
              >
                Facebook
              </LinkSocial>
              <LinkSocial
                href="https://www.youtube.com/user/pridebikes"
                underline="none"
              >
                Youtube
              </LinkSocial>
              <LinkSocial
                href="https://www.instagram.com/pridebikes/"
                underline="none"
              >
                Instagram
              </LinkSocial>
            </BoxSocial>

            <Span>Work schedule</Span>
            <Paragraf>Mon - Fri from 09:00 to 18:00</Paragraf>
          </BoxColumn>
        </Grid>
        <Grid item xs={10} sm={12} md={6}>
            <TitleContact sx={{mb: 3}}>
                Google-Maps
            </TitleContact>
          <Img
            src="/assets/google-map/google-map.png"
          ></Img>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PageContacts;
