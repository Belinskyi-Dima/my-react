import React from "react";
import { useDispatch } from "react-redux";
import { getFooterPages } from "../../../store/footerpages/footerpages.action";

import { Link } from "react-router-dom";


export const footerPages = [{
  name: 'Team',
  value: 0
},
{
  name: 'About Brand',
  value: 1
},
{
  name: 'Contacts',
  value: 2
},
{
  name: 'Wholesale buyers',
  value: 3
},
{
  name: 'Dealers',
  value: 4
}
]




const Company = () => {


const dispatch = useDispatch();

const handleChange = (page) => {
  dispatch(getFooterPages(page))
}

  return (
    <div>
        <p className="footer-title">Company</p>
        <ul  className="footer-list">
          {footerPages.map(page => <Link className="li-list" key={page.value} to='/company'><li onClick={() => handleChange(page)}>{page.name}</li></Link>)}
          
        </ul>
    </div>
  );
};

export default Company;