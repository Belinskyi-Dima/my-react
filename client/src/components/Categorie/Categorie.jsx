import React from "react";

import PropTypes from 'prop-types';




const Categorie = ({categorieId}) => {

    return (
        <h1>
            {categorieId}
        </h1>
    )

}

Categorie.propTypes = {
    categorieId: PropTypes.string,
}

export default Categorie