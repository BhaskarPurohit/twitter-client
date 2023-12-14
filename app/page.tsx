import Image from "next/image";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import {SlOptions} from "react-icons/sl"
import { Inter } from "next/font/google";
import FeedCard from "@/components/FeedCard";
const inter = Inter({ subsets: ["latin"] });

interface TwitterSideBarButton {
  title: String;
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSideBarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },

  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More Options",
    icon: <SlOptions />,
  },
];

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen px-56 w-screen">
        <div className="  col-span-3  ml-28 pt-1">
          <div className="text-2xl h-fit w-fit hover:bg-gray-600 p-4  rounded-full cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-1 text-1xl  pr-4">
            <ul>
              {sideBarMenuItems.map((item) => (
                <li className="flex justify-start items-center gap-4 hover:bg-gray-600 rounded-full px-3 py-3 cursor-pointer w-fit mt-2">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-xl">{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[#1B8FDB] font-semibold text-lg py-2  px-4 rounded-full w-full mt-5 ">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-600 h-screen overflow-scroll">
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        </div>
        <div className="col-span-3">
          
        </div>
      </div>
    </div>
  );
}
