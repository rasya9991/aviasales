import React from 'react';import './Loader.css';const Loader = () => {  return (    <>      <div className="lds-ring">        <div></div>        <div></div>        <div></div>        <div></div>        <span className="Loading">Loading...</span>      </div>    </>  );};export default Loader;