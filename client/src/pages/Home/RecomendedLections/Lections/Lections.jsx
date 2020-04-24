import React from "react";
import classes from './Lections.module.css';
import CardItem from "./CardItem";
import {readLectures} from '../../../../api/lectures';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

  
const Lections = (props) =>{

    // state = {
    //   lection: [] 
    // };
    
  const updateLecture = () => {
    readLectures()
      .then((lection) => {
        this.setState({
          lection
        })
      })
    }

  componentDidMount(){
    this.updateLecture();
  }

  const renderLectures(arr) {
    return arr.map((item, index) => {

      return (
        <CardItem item = {item }/>
      )
    })

  }

    const { lection } = this.state;
    const lectionCard = renderLectures(lection);

    const settings = {
      dots: false,
      infinite: false,
      speed: 900,
      slidesToShow: 3,
      slidesToScroll: 3
    };

    return (
       
      <div className={classes.cardsFlex}> 
       <Slider {...settings} >
            {lectionCard}
      </Slider>
      </div>
  
    )



}



