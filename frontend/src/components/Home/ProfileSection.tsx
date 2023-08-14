import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProfileSection() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="pl-1 mt-3">
      <div className="flex flex-col justify-start ">
        <Link to="#" className="flex justify-start">
          <img src="../../../public/assets/Profile Section Icons/profile.png" alt="user profile" className="w-9 h-9 mx-3 my-2" />
          <div className="my-auto">user name</div>
        </Link>
        <Link to="#" className="flex justify-start ">
          <img src="../../../public/assets/Profile Section Icons/friends colored icon.png" alt="" className="w-9 h-9 mx-3 my-2" />
          <div className="my-auto">Finds Friends</div>
        </Link>
        <Link to="#" className="flex justify-start ">
          <img src="../../../public/assets/Profile Section Icons/feeds.png" alt="" className="w-9 h-9 mx-3 my-2" />
          <div className="my-auto">Feeds</div>
        </Link>
        <Link to="#" className="flex justify-start ">
          <img src="../../../public/assets/Profile Section Icons/group colored icon.png" alt="" className="w-9 h-9 mx-3 my-2" />
          <div className="my-auto">Groups</div>
        </Link>
        <Link to="#" className="flex justify-start ">
          <img src="../../../public/assets/Profile Section Icons/video.png" alt="" className="w-9 h-9 mx-3 my-2" />
          <div className="my-auto">Vidio</div>
        </Link>
        <Link to="#" className="flex justify-start content-middle">
          <img src="../../../public/assets/Profile Section Icons/saved.png" alt="" className="w-9 h-9 mx-3 my-2" />
          <div className="my-auto">Saved</div>
        </Link>

        {expanded ? (
          <>
            <Link to="#" className="flex justify-start ">
              <img src="../../../public/assets/Profile Section Icons/marketplace.png" alt="" className="w-9 h-9 mx-3 my-2" />
              <div className="my-auto">Marketplace</div>
            </Link>
            <Link to="#" className="flex justify-start ">
              <img src="../../../public/assets/Profile Section Icons/memories.png" alt="" className="w-9 h-9 mx-3 my-2" />
              <div className="my-auto">Memories</div>
            </Link>
            <Link to="#" className="flex justify-start ">
              <img src="../../../public/assets/Profile Section Icons/add center.png" alt="" className="w-9 h-9 mx-3 my-2" />
              <div className="my-auto">Add Center</div>
            </Link>
            <Link to="#" className="flex justify-start ">
              <img src="../../../public/assets/Profile Section Icons/add manager.png" alt="" className="w-9 h-9 mx-3 my-2" />
              <div className="my-auto">Add Manager</div>
            </Link>
            <Link to="#" className="flex justify-start ">
              <img src="../../../public/assets/Profile Section Icons/event.png" alt="" className="w-9 h-9 mx-3 my-2" />
              <div className="my-auto">Event</div>
            </Link>
            <Link to="#" className="flex justify-start ">
              <img src="../../../public/assets/Profile Section Icons/pages.png" alt="" className="w-9 h-9 mx-3 my-2" />
              <div className="my-auto">Pages</div>
            </Link>
          </>
        ) : null}

        <Link to="#" className="flex justify-start" onClick={toggleExpand}>
          {expanded ? (
            <img src="../../../public/assets/Profile Section Icons/up arrow.png" alt="more" className="w-9 h-9 mx-3 my-2" />
          ) : (
            <img src="../../../public/assets/Profile Section Icons/down arrow.png" alt="more" className="w-9 h-9 mx-3 my-2" />
          )}
          <div className="my-auto">{expanded ? "See Less" : "See More"}</div>
        </Link>
      </div>
      <div className="w-10/12 border border-[#d4d6d9] my-3 "></div>
      <div className="pl-1">
        <h3 className="my-3 ml-3 font-semibold text-xl text-[#6e7074]">Your Shortcuts</h3>
        <Link to="#" className="flex justify-start ">
          <img src="../../../public/assets/Profile Section Icons/8 ball pool.png" alt="" className="w-9 h-9 mx-3 my-2 border-transparent rounded-lg" />
          <div className="my-auto">8 Ball Pool</div>
        </Link>
        <Link to="#" className="flex justify-start ">
          <img src="../../../public/assets/Profile Section Icons/Army Force Firestorm.png" alt="" className="w-9 h-9 mx-3 my-2 border-transparent rounded-lg" />
          <div className="my-auto">Army Force Firestorm</div>
        </Link>
        <Link to="#" className="flex justify-start ">
          <img src="../../../public/assets/Profile Section Icons/monster legends.png" alt="" className="w-9 h-9 mx-3 my-2 border-transparent rounded-lg" />
          <div className="my-auto">Monster Legends</div>
        </Link>
      </div>
    </div>
  );
}
