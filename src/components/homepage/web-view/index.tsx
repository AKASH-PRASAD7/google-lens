import { Camera, FlaskConical, Grid3x3, Mic, Search } from "lucide-react";
import "../../../App.css";
import React from "react";

interface WebViewProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const WebView = ({ search, setSearch }: WebViewProps) => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="header-left">
          <a className="header-links" href="#">
            About
          </a>
          <a className="header-links" href="#">
            Store
          </a>
        </div>
        <div className="header-right">
          <a className="header-links" href="#">
            Gmail
          </a>
          <a className="header-links" href="#">
            Images
          </a>
          <span className="icons">
            <FlaskConical size={20} />
          </span>
          <span className="icons">
            <Grid3x3 size={20} />
          </span>

          {/* <div className="profile-icon">A</div> */}
          <button className="sign-in">Sign in</button>
        </div>
      </header>
      <div className="main">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google Logo"
          className="logo"
        />
        <div className="search-bar">
          <div className="search-container">
            <Search />
            <input
              className="search"
              type="text"
              placeholder="Search Google or type a URL"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Mic />
            <Camera />
          </div>
          <div className="search-btm-btn">
            <button className="btm-btn">Google Search</button>
            <button className="btm-btn">I'm Feeling Lucky</button>
          </div>
        </div>
        <section className="info-container">
          <div className="info">
            <p className="">🏏 Today's Googly:</p>
            <p className="link">How many creases are there in cricket?</p>
          </div>
          <div className="info">
            <p className="">Google offered in:</p>
            <p className="link">हिन्दी</p>
            <p className="link">বাংলা</p>
            <p className="link">తెలుగు</p>
            <p className="link">मराठी</p>
            <p className="link">தமிழ்</p>
            <p className="link">ગુજરાતી</p>
            <p className="link">ಕನ್ನಡ</p>
            <p className="link">മലയാളം</p>
            <p className="link">ਪੰਜਾਬੀ</p>
          </div>
        </section>
      </div>
      <footer className="footer centered">
        <div className="country">India</div>
        <section className="btm-links-container">
          <div className="btm-links">
            <a href="#">Advertising</a>
            <a href="#">Business</a>
            <a href="#">How Search works</a>
          </div>
          <div className="btm-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Settings</a>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default WebView;
