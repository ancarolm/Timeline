import React from "react";
import timelineData from "../data";
import timelineitem from "./timelineintem";

const timeline = () => timelineData.length > 0 && (

    <div className= "timeline-container">
        {timelineData.map((data, idx) => (

                <timelineitem data={data} key= {idx}/>


        ))}

    </div>
);

export default timeline;