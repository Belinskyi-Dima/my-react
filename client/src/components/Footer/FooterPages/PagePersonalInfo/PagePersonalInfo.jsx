import { Link, styled, Typography } from "@mui/material";
import React from "react";

const BoxContainer = styled("div")({
  "@media (max-width: 1024px)": {
    maxWidth: "840px",
    padding: "75px 85px 50px",
  },
  "@media (max-width: 768px)": {
    padding: "24px",
  },
  "@media (max-width: 425px)": {
    padding: "24px",
  },

  backgroundColor: "rgb(255, 255, 255)",
  boxSizing: "border-box",
  padding: "75px 85px 50px",
  color: "rgb(160, 160, 160)",
});

const Paragraf = styled("p")({
  fontSize: "16px",
  margin: "15px 0px",
  lineHeight: "20px",
  fontWeight: 500,
});

const InternalLink = styled("a")({
  color: "rgb(84, 197, 236)",
  fontWeight: 500,
  padding: 5,
});

function PagePeronalInfo() {
  return (
    <BoxContainer>
      <Paragraf>
        The
        <InternalLink href="https://pridebikes.com/" underline="none">
          pridebikes.com
        </InternalLink>
        online store may collect, process and use information, including your
        personal data, which could be entered during the ordering process or in
        any other forms on the
        <InternalLink href="https://pridebikes.com/" underline="none">
          pridebikes.com
        </InternalLink>
        website, solely for the purpose of processing orders, organizing and
        transferring/delivery of products as well as for the purpose of
        informing about promotions and events, conducting market research,
        surveys, etc.
      </Paragraf>
      <Paragraf>
        Any materials, information and data provided to you on the
        <InternalLink href="https://pridebikes.com/" underline="none">
          pridebikes.com
        </InternalLink>
        website are confidential and may not be disclosed to third parties
        without consent, except as required by applicable law.
      </Paragraf>
      <Paragraf>
        Access to your data may only be granted to authorized employees and only
        for the purposes listed above, as well as to ensure the protection of
        data processing. The
        <InternalLink href="https://pridebikes.com/" underline="none">
          pridebikes.com
        </InternalLink>
      </Paragraf>
      <Paragraf>
        You provide consent to the processing of your personal data by filling
        out any electronic form on the
        <InternalLink href="https://pridebikes.com/" underline="none">
          pridebikes.com
        </InternalLink>
        website
      </Paragraf>
    </BoxContainer>
  );
}

export default PagePeronalInfo;
