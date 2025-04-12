import { Camera, Mic, Search } from "lucide-react";
import "../../App.css";
const HomePage = () => {
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
          {/* <a className="header-links" href="#">
            <svg
              className="gb_E"
              focusable="false"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              {" "}
              <path d="M209-120q-42 0-70.5-28.5T110-217q0-14 3-25.5t9-21.5l228-341q10-14 15-31t5-34v-110h-20q-13 0-21.5-8.5T320-810q0-13 8.5-21.5T350-840h260q13 0 21.5 8.5T640-810q0 13-8.5 21.5T610-780h-20v110q0 17 5 34t15 31l227 341q6 9 9.5 20.5T850-217q0 41-28 69t-69 28H209Zm221-660v110q0 26-7.5 50.5T401-573L276-385q-6 8-8.5 16t-2.5 16q0 23 17 39.5t42 16.5q28 0 56-12t80-47q69-45 103.5-62.5T633-443q4-1 5.5-4.5t-.5-7.5l-78-117q-15-21-22.5-46t-7.5-52v-110H430Z"></path>{" "}
            </svg>
          </a> */}

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

export default HomePage;
