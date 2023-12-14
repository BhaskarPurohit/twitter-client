import Image from "next/image";
import React from "react";
import img from "../FeedCard/profile-photo.jpg"

const FeedCard: React.FC = () => {
    
  return (
    <div className="border border-gray-600 p-4 hover:bg-slate-800 transition-all cursor-pointer">
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Image className="rounded-full"
            src={img}
            width={50}
            height={50}
            alt="user-image"
          />
          
        </div>
        <div className="col-span-11">
          <h5>Bhaskar Purohit</h5>
          
            <p>
            MERN Stack Developer || React Js || Front End || Node JS || Backend

            
            </p>
          
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
