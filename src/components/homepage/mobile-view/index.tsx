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
import React from "react";
import "../../../App.css";

interface MobileViewProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const MobileView = ({ search, setSearch }: MobileViewProps) => {
  return (
    <>
      <main>
        <header className="header">
          <span className="icons">
            <FlaskConical size={24} />
          </span>
          <button className="sign-in">Sign in</button>
        </header>
        <section className="main main-mobile">
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
      </main>
    </>
  );
};

export default MobileView;
