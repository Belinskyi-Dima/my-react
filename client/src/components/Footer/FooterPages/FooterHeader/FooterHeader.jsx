import React from "react";
import { Box, Typography, Link } from "@mui/material";
import PropTypes from "prop-types";

const FooterHeader = ({ obj }) => {
  const { link, text, title } = obj;

  return (
    <Box sx={{ pt: 3 }}>
      <Typography
        component="span"
        sx={{
          ml: "14px",
          fontSize: "14px",
          fontWeight: 500,
          color: "rgb(160, 160, 160)",
          lineHeight: "17px",
        }}
      >
        {link}
      </Typography>
      <Typography
        component="span"
        sx={{
          fontSize: "14px",
          fontWeight: 500,
          color: "rgb(18, 18, 18)",
          lineHeight: "17px",
          position: "relative",
          ml: "14px",
          "::before": {
            content: '" "',
            position: "absolute",
            top: "50%",
            left: "-8px",
            width: "3px",
            height: "3px",
            background: "rgb(18, 18, 18)",
            transform: "translateY(-50%)",
          },
        }}
      >
        {text}
      </Typography>
      <Typography
        component="h3"
        sx={{
          fontSize: 36,
          position: "relative",
          margin: "",
          fontWeight: 500,
          lineHeight: "42px",
          color: "rgb(18, 18, 18)",
          position: "relative",
          padding: "15px",
          boxSizing: "border-box",
          ml: "20px",
          "::before": {
            content: '" "',
            position: "absolute",
            top: "50%",
            left: "-6px",
            width: "3px",
            height: "40px",
            background: "rgb(18, 18, 18)",
            transform: "translateY(-50%)",
          },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

FooterHeader.propTypes = {
  obj: PropTypes.object,
};

export default FooterHeader;