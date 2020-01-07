import React from 'react';
import { Card } from 'react-bootstrap';

import vasoFront from '../../images/vasoFront.jpg';

const Header = () => (
      <Card className="text-white header container-fluid p-0 border-0 h-100">
        <Card.Img src={vasoFront} alt="Vaso" className="bg-header rounded-0" />
        <Card.ImgOverlay className="header-wrapper flex">
          <div className="header-div bg-purple p-md-5 p-0 w-100 text-center">
              <h1>Vasiliki Vourliotaki<span className="small text-light font-med"> - Chef de Cuisine. </span></h1>
              <p className="text-light font-med text-center">Innovative approach to Greek-inspired Mediterranean cuisine. </p> 
          </div>
        </Card.ImgOverlay>
      </Card>   
)

export default Header;


