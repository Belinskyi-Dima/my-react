import React from 'react';

import ClientBasicInfo from '../ClientBasicInfo/ClientBasicInfo';
import ClientPasswordInfo from '../ClientPasswordInfo/ClientPasswordInfo';
import ClientAdressInfo from '../ClientAdressInfo/ClientAdressInfo';
import ClientPaymentInfo from '../ClientPaymentInfo/ClientPaymentInfo';

const ClientInformation = () => {
  return (
      <div>
        <ClientBasicInfo />
        <ClientPasswordInfo />
        {/* <ClientAdressInfo />
        <ClientPaymentInfo /> */}
      </div>
  );
};

export default ClientInformation;
