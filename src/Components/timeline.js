import React from "react";
import timelineData from "../data";
import timelineitem from "./TimelineItem";

const Timeline = () => timelineData.length > 0 && (

    <div className= "timeline-container">
        {timelineData.map((data, idx) => (

                <timelineitem data={data} key= {idx}/>


        ))}

    </div>
);

export default Timeline;