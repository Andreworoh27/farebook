import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="w-full flex flex-row items-center">
      <img src="../../../public/assets/2021_Facebook_icon.png" alt="" className="w-9 h-9 mx-5" />
      <SearchBar className="mr-5" />
      <div className="w-1/2 mx-auto justify-self-center flex flex-row items-center justify-around">
        <a href="#">
          <img src="../../../public/assets/Home Page Icons/home icon.png" alt="home icon" className="h-7 w-7" />
        </a>
        <a href="#">
          <img src="../../../public/assets/Home Page Icons/friends icon.png" alt="icon" className="h-7 w-7" />
        </a>
        <a href="#">
          <img src="../../../public/assets/Home Page Icons/shop icon.png" alt="icon" className="h-7 w-7" />
        </a>
        <a href="#">
          <img src="../../../public/assets/Home Page Icons/group icon.png" alt="icon" className="h-7 w-7" />
        </a>
      </div>
    </div>
  );
}
