import React from 'react';
import Helmet from 'react-helmet';




const MetaData = ({ title }) => {
    return (


        <Helmet>

            <title>{`${title} - Lina's Gift Shop`}</title>

        </Helmet>


    )
};


export default MetaData;