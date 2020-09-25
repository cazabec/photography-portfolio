import React, { memo } from "react";
import Img from 'gatsby-image'

const s = {
    container: "abs fullW fullH",
    slideImage: "fullH fullW imgCover"
};

const Slide = ({ position, transition, image }) => {
    return (
        <div className={s.container + " " + position + " " + transition}>
            <Img fluid={image} className={s.slideImage} alt="slide" />
        </div>
    );
};

export default memo(Slide);
