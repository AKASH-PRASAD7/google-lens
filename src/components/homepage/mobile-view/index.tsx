import {
  Camera,
  FlaskConical,
  GraduationCap,
  Image,
  Languages,
  Mic,
  Music2,
  Search,
} from "lucide-react";
import React, { useState } from "react";
import "../../../App.css";
import SmallWidget from "./small-widget";
import WidgetCard from "./widget-card";
import BottomNav from "./bottom-nav";
import GoogleAccountPopup from "./account-popup";

interface MobileViewProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const smallWidget = [
  {
    id: 1,
    title: "New York",
    msg: "18°",
  },
  {
    id: 2,
    title: "Air quality",
    msg: "Good",
  },
];

const widgets = [
  {
    id: 1,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3PNNRDmwDV_an6mG4zJJyuV3ixJDdEDnIeq_jgXR_RmGHc4qGFI8Fkg2dPq3qcoD_ir0&usqp=CAU",
    title:
      "I Quit Nest.js in 2025: Here's What I Chose Instead | by Aleksei Aleinikov | Apr, 20...",
    sourceName: "DataDrivenInvestor",
    time: "9h",
  },
  {
    id: 2,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3PNNRDmwDV_an6mG4zJJyuV3ixJDdEDnIeq_jgXR_RmGHc4qGFI8Fkg2dPq3qcoD_ir0&usqp=CAU",
    title:
      "I Quit Nest.js in 2025: Here's What I Chose Instead | by Aleksei Aleinikov | Apr, 20...",
    sourceName: "DataDrivenInvestor",
    time: "9h",
  },
  {
    id: 3,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3PNNRDmwDV_an6mG4zJJyuV3ixJDdEDnIeq_jgXR_RmGHc4qGFI8Fkg2dPq3qcoD_ir0&usqp=CAU",
    title:
      "I Quit Nest.js in 2025: Here's What I Chose Instead | by Aleksei Aleinikov | Apr, 20...",
    sourceName: "DataDrivenInvestor",
    time: "9h",
  },
  {
    id: 4,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3PNNRDmwDV_an6mG4zJJyuV3ixJDdEDnIeq_jgXR_RmGHc4qGFI8Fkg2dPq3qcoD_ir0&usqp=CAU",
    title:
      "I Quit Nest.js in 2025: Here's What I Chose Instead | by Aleksei Aleinikov | Apr, 20...",
    sourceName: "DataDrivenInvestor",
    time: "9h",
  },
  {
    id: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3PNNRDmwDV_an6mG4zJJyuV3ixJDdEDnIeq_jgXR_RmGHc4qGFI8Fkg2dPq3qcoD_ir0&usqp=CAU",
    title:
      "I Quit Nest.js in 2025: Here's What I Chose Instead | by Aleksei Aleinikov | Apr, 20...",
    sourceName: "DataDrivenInvestor",
    time: "9h",
  },
];

const MobileView = ({ search, setSearch }: MobileViewProps) => {
  const [activeItem, setActiveItem] = useState("home");
  const [showAccountPopup, setShowAccountPopup] = useState(false);

  return (
    <>
      <main>
        <header className="header">
          <span className="icons">
            <FlaskConical size={24} />
          </span>
          <button
            onClick={() => setShowAccountPopup((prevValue) => !prevValue)}
            className="sign-in"
          >
            Sign in
          </button>
        </header>
        <section className="main-mobile">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google Logo"
            className="logo"
          />
          <div className="search-bar search-bar-mobile">
            <div className="search-container search-container-mobile">
              <Search />
              <input
                className="search search-mobile"
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Mic />
              <Camera />
            </div>
          </div>
          <div className="search-btm-mobile">
            <span className="search-btm-icon image-icon">
              <Image size={20} />
            </span>
            <span className="search-btm-icon lang-icon">
              <Languages size={20} />
            </span>
            <span className="search-btm-icon grad-icon">
              <GraduationCap size={20} />
            </span>
            <span className="search-btm-icon music-icon">
              <Music2 size={20} />
            </span>
          </div>
        </section>
        <section className="small-widget">
          {smallWidget.map((item) => (
            <SmallWidget
              key={item.id}
              title={item.title}
              msg={item.msg}
              id={item.id}
            />
          ))}
        </section>
        <section className="widgets">
          {widgets.map((item) => (
            <WidgetCard
              key={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              sourceName={item.sourceName}
              time={item.time}
            />
          ))}
        </section>
        <BottomNav activeItem={activeItem} setActiveItem={setActiveItem} />
        {showAccountPopup && (
          <GoogleAccountPopup
            userName="AKASH"
            userEmail="akashkvas@gmail.com"
            profileImageUrl="https://via.placeholder.com/40/000000/FFFFFF/?text=A"
            onClose={() => setShowAccountPopup(false)}
          />
        )}
      </main>
    </>
  );
};

export default MobileView;
