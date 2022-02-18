import React, { useEffect, useState} from 'react';

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ClientInformation from '../ClientInformation/ClientInformation';
import OrderHistory from '../OrderHistory/OrderHistory';
import WishList from '../WishList/WishList';
import ViewedProducts from '../ViewedProducts/ViewedProducts';

const theme = createTheme({
    palette: {
       primary: {
          main: 'rgb(9, 128, 87)',
       },
    },
 });

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
const a11yProps = (index) => {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

const ClientProfileNavigation = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

	return (
		<Box>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{ borderBottom: 1,
                        borderColor: 'divider',
                        '&.MuiBox-root':{display:'flex', justifyContent:'center',
                            ['@media (max-width:360px)']: {
                                width: '260px',
                                flexDirection:'column'
                            }},

                    }}>
                    <Tabs value={value} onChange={handleChange}
                        aria-label="basic tabs example"
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Tab label="Basic Info" to={'/basic-info'} {...a11yProps(0)} />
                        <Tab label="Order History" to={'/order-history'} {...a11yProps(1)} />
                        <Tab label="Wish List" to={'/wish-list'} {...a11yProps(2)} />
                        <Tab label="Viewed Products" to={'/viewed-products'} {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <ClientInformation />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <OrderHistory />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <WishList />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <ViewedProducts />
                </TabPanel>
            </ThemeProvider>
		</Box>
	)
};

export default ClientProfileNavigation;
