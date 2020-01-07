import React from 'react';
import { Col, Row } from 'react-bootstrap';
import food1 from '../../images/food.jpg';
import food2 from '../../images/food2.jpg';
import food3 from '../../images/food3.jpg';
import food4 from '../../images/food4.jpg';
import food5 from '../../images/food5.jpg';
import food6 from '../../images/food6.jpg';
import food7 from '../../images/food7.jpg';
import food8 from '../../images/food8.jpg';


const pics = [food1, food2, food3, food4, food5, food6, food7, food8]

// const imgOver = {
//     'zIndex': '10',
//     'transform': 'scale(2)',
//     'position': 'absolute'
// }

const Gallery = () => {
    return (
        <Row className="gallery bg-purple m-0">
            {pics.map(pic => {
                return (<Col xs={12} sm={6} md={3} className="p-1" key={pic} style={{'position': 'unset'}}>
                    <img src={pic} alt="" className="w-100 gallery-img"/>
                </Col>)
            })}
        </Row>
    )
}



export default Gallery;