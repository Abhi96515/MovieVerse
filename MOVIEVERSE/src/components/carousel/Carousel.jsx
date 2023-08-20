import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import  Img from "../../components/lazyLoadingImage/Img";
import PosterFallback from "../../assets/Moviex-images/no-poster.png";

import "./style.scss";


const Carousel = () => {
  return (
    <div>Carousel</div>
  )
}

export default Carousel