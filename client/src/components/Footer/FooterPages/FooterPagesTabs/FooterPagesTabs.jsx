import React, { useEffect, useState } from "react";

import { styled } from "@mui/system";
import { Box, Link } from "@mui/material";

import {
  TabUnstyled,
  TabsUnstyled,
  TabsListUnstyled,
  TabPanelUnstyled,
} from "@mui/base";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

import PageContacts from "../PageContacts/PageContacts";
import FooterHeader from "../FooterHeader/FooterHeader";
import Footer from "../../Footer/Footer";
import PageAboutBrand from "../PageAboutBrand/PageAboutBrand";
import NotFindedPage from "../../../NotFindedPage/NotFindedPage";
import PagePersonalInfo from "../PagePersonalInfo/PagePersonalInfo";

import { useSelector } from "react-redux";
import { footerPages } from "../../Company/Company";

const Tab = styled(TabUnstyled)`
  color: rgb(18, 18, 18);
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  font-size: 12px;
  font-weight: 600;
  padding: 10px 0px 10px 0px;
  border: none;
  display: flex;
  flex-wrap: nowrap;
  &:focus {
    padding: 10px 0px 10px 0px;
    border-bottom: 2px solid rgb(18, 18, 18);
    @media (max-width: 425px) {
    }
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  padding: 15px 30px 40px;
`;

const TabsList = styled(TabsListUnstyled)`
  margin: 0px 15px;
  padding: 0px 20px 0px 25px;
  background-color: rgb(255, 255, 255);
  margin-bottom: 16px;
  gap: 70px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  box-sizing: border-box;
  white-space: nowrap;
  @media (max-width: 768px) {
    gap: 40px;
    overflow: scroll;
  }
  @media (max-width: 425px) {
    gap: 20px;
    overflow: scroll;
    margin-right: -10px;
  }
`;

const headerObj = [
  {
    link: "Main",
    text: "Team",
    title: "Team",
  },
  {
    link: "Main",
    text: "About Brand",
    title: "About Brand",
  },
  {
    link: "Main",
    text: "Contacts",
    title: "Contacts",
  },
  {
    link: "Main",
    text: "Wholesale buyers",
    title: "Wholesale buyers",
  },
  {
    link: "Main",
    text: "Dealers",
    title: "Dealers",
  },
];

const FooterPagesTabs = () => {
  const [value, setValue] = useState(0);
  const [header, setHeader] = useState("");
  const [isActive, setIsActive] = useState(headerObj[0]);
  const activeTab = useSelector((state) => state.pagesReducer.page);

  const handleChange = (page) => {
    setHeader(page.name);
    const activeObj = headerObj.find((obj) => page.name === obj.title);

    console.log(activeObj);
    setIsActive(activeObj);
    setValue(page.value);
  };

  useEffect(() => {
    if (activeTab) {
      handleChange(activeTab);
    }
  }, [activeTab]);

  return (
    <TabsUnstyled value={value}>
      <Box sx={{ backgroundColor: "rgb(249, 249, 249)" }}>
        <FooterHeader obj={isActive} />
        <TabsList>
          {footerPages.map((page) => (
            <Tab onClick={() => handleChange(page)} key={page.value}>
              {page.name}
            </Tab>
          ))}

          <Box
            component={"div"}
            sx={{
              ml: "auto",
              display: "flex",
              alignItems: "center",
              "@media (max-width: 425px)": {
                margin: 0,
              },
            }}
          >
            <Link
              href="https://www.facebook.com/Pridebikes/"
              component={"a"}
              sx={{ color: "rgb(18,18,18)", mr: 1 }}
            >
              <FacebookIcon />
            </Link>
            <Link
              href="https://www.youtube.com/user/pridebikes"
              component={"a"}
              sx={{ color: "rgb(18,18,18)", mr: 1 }}
            >
              <InstagramIcon />
            </Link>
            <Link
              href="https://www.instagram.com/pridebikes/"
              component={"a"}
              sx={{ color: "rgb(18,18,18)" }}
            >
              <YouTubeIcon />
            </Link>
          </Box>
        </TabsList>
        <TabPanel value={0}>
          <NotFindedPage />
        </TabPanel>
        <TabPanel value={1}>
          <PageAboutBrand />
        </TabPanel>
        <TabPanel value={2}>
          <PageContacts />
        </TabPanel>
        <TabPanel value={3}>
          <NotFindedPage />
        </TabPanel>
        <TabPanel value={4}>
          <PagePersonalInfo />
        </TabPanel>
      </Box>
    </TabsUnstyled>
  );
};

export default FooterPagesTabs;
