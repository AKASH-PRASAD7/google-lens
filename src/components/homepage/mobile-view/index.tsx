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
import { useState } from "react";
import "../../../App.css";
import SmallWidget from "./small-widget";
import WidgetCard from "./widget-card";
import BottomNav from "./bottom-nav";
import GoogleAccountPopup from "./account-popup";
import SearchFeed from "./search-feed";
import { smallWidget, widgets } from "../../../constants";
import { MobileViewProps } from "../../../utils/types";
import AudioSearch from "./audio-search";

const MobileView = ({ search, setSearch }: MobileViewProps) => {
  const [activeItem, setActiveItem] = useState("home");
  const [showAccountPopup, setShowAccountPopup] = useState(false);
  const [showSearchFeed, setShowSearchFeed] = useState(false);
  const [showAudioSearch, setShowAudioSearch] = useState(false);

  return (
    <>
      <main>
        {showSearchFeed ? (
          <SearchFeed
            search={search}
            setSearch={setSearch}
            onBackClick={() => setShowSearchFeed(false)}
          />
        ) : (
          <>
            {showAudioSearch ? (
              <AudioSearch setShowAudioSearch={setShowAudioSearch} />
            ) : (
              <section>
                <header className="header header-mobile">
                  <span className="icons">
                    <FlaskConical size={24} />
                  </span>
                  <button
                    onClick={() =>
                      setShowAccountPopup((prevValue) => !prevValue)
                    }
                    className="sign-in"
                  >
                    Sign inff
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
                        onClick={() => setShowSearchFeed(true)}
                      />
                      <Mic onClick={() => setShowAudioSearch(true)} />
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
              </section>
            )}
          </>
        )}
        <BottomNav
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          setShowSearchFeed={setShowSearchFeed}
        />
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
