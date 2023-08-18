import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="w-full flex flex-row items-center border py-1 bg-white fixed top-0 shadow-md z-10">
      <img src="../../../public/assets/2021_Facebook_icon.png" alt="" className="w-10 h-10 mx-5" />
      <SearchBar className="mr-5" />
      <div className="w-2/5 mx-auto justify-self-center flex flex-row items-center justify-around">
        <a href="#" className="p-2 w-24 flex justify-center align-middle">
          <img src="../../../public/assets/Home Page Icons/home icon.png" alt="home icon" className="h-7 w-7" />
        </a>
        <a href="#" className="p-2 w-24 flex justify-center align-middle">
          <img src="../../../public/assets/Home Page Icons/friends icon.png" alt="icon" className="h-7 w-7" />
        </a>
        <a href="#" className="p-2 w-24 flex justify-center align-middle">
          <img src="../../../public/assets/Home Page Icons/shop icon.png" alt="icon" className="h-7 w-7" />
        </a>
        <a href="#" className="p-2 w-24 flex justify-center align-middle">
          <img src="../../../public/assets/Home Page Icons/group icon.png" alt="icon" className="h-7 w-7" />
        </a>
      </div>
      <div className="ml-auto flex flex-row items-center justify-around">
        <a href="#">
          <img src="../../../public/assets/Home Page Icons/menus icon.png" alt="" className="h-7 w-7 mr-5" />
        </a>
        <a href="#">
          <img src="../../../public/assets/Home Page Icons/messenger icon.png" alt="" className="h-7 w-7 mx-5" />
        </a>
        <a href="#">
          <img src="../../../public/assets/Home Page Icons/notification icon.png" alt="" className="h-7 w-7 mx-5" />
        </a>
        <a href="#">
          <img src="../../../public/assets/Home Page Icons/default profile.png" alt="" className="h-7 w-7 mx-5" />
        </a>
      </div>
    </div>
  );
}
