import React from 'react'
import {Helmet,HelmetProvider }from "react-helmet-async"
import Myform from '../component/Myform'


const Add = () => {
  return (
    <> <HelmetProvider>
    <Helmet>
        <title>Home</title>
    </Helmet>
  <Myform/>
</HelmetProvider></>
  )
}

export default Add