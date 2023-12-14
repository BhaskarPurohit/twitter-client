import Image from "next/image";
import React from "react";
import img from "../FeedCard/profile-photo.jpg"
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import {FaRetweet} from "react-icons/fa"
import {AiOutlineHeart} from "react-icons/ai"

const FeedCard: React.FC = () => {
    
  return (
    <div className="border border-r-0 border-l-0 border-b-0 p-5 border-gray-600 p-4 hover:bg-slate-800 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
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
            <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
                <div>
                    <BiMessageRounded/>
                </div>
                <div>
                    <FaRetweet/>
                </div>
                <div>
                    <AiOutlineHeart/>
                </div>
                <div>
                    <BiUpload/>
                </div>
                <div>
                    <BiMessageRounded/>
                </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
