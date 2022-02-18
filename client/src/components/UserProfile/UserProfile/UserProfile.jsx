import React from 'react';

import ClientProfileNavigation from '../ClientProfileNavigation/ClientProfileNavigation';
import ClientInformation from '../ClientInformation/ClientInformation';
import OrderHistory from '../OrderHistory/OrderHistory';
import ViewedProducts from '../ViewedProducts/ViewedProducts';
import WishList from '../WishList/WishList';

const UserProfile = () => {
  
  return (
      <div>
        <div style={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: '#121212',
          }}
        >
          <h2 style={{
              padding: '15px',
              color: 'rgb(9, 128, 87)',
              fontFamily: "Roboto, Helvetica, sans-serif",
              fontWeight: '700',
              fontSize: '24px',
            }}
          > 
            My Profile 
          </h2>
        </div>
        <ClientProfileNavigation />
        {/* <ClientInformation /> */}
        {/* <OrderHistory />
        <WishList />
        <ViewedProducts /> */}
      </div>
  );
};

export default UserProfile;
