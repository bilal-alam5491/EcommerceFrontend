import React from "react";

import {  Container} from "react-bootstrap";

import Loader from "../components/Loader";

const Home = () => {

  return (
    <div>

      <Container className="mt-4">
        <h4>
          WelCome 
        </h4>

     
          <Loader />
      
      </Container>
    </div>
  );
};

export default Home;
