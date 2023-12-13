import Image from "next/image";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import { Inter } from "next/font/google";
const inter = Inter({subsets:["latin"]})

interface TwitterSideBarButton {
  title: String;
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSideBarButton[] = [
  {
    title:"Home",
    icon:<BiHomeCircle/>
  },
  {
    title:"Explore",
    icon:<BiHash/>
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
    title: "Profile",
    icon: <BiUser />,
  },

];

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen px-56 w-screen">
        <div className="  col-span-3   pt-8">
          <div className="text-4xl h-fit hover:bg-gray-600 p-2  rounded-full cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-4 text-2xl font-bold">
            <ul >
              {sideBarMenuItems.map((item) => (
                <li  className="flex justify-start items-center gap-4 hover:bg-gray-600 rounded-full px-5 py-2 cursor-pointer w-fit mt-2" >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-r-white">
          twitter
        </div>
        <div className="col-span-3">twitter</div>
      </div>
    </div>
  );
}
