import {
  Camera,
  FlaskConical,
  Grid3x3,
  History,
  Mic,
  Search,
} from "lucide-react";
import "../../../App.css";
import React, { useEffect, useRef, useState } from "react";
import { historyItems } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSearchResults,
  fecthAutoCompleteSearchResults,
  fetchSearchResults,
} from "../../../redux/slice/search";
import { AppDispatch, RootState } from "../../../redux/store";

interface WebViewProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const WebView = ({ search, setSearch }: WebViewProps) => {
  const [showHisory, setShowHistory] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const { autoCompleteResults: AutoCompleteSearchResult } = useSelector(
    (state: RootState) => state.search
  );
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!showHisory) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        // Clicked outside!
        dispatch(clearSearchResults());
        setShowHistory(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showHisory]);

  useEffect(() => {
    if (search.trim().length === 0) {
      dispatch(clearSearchResults());
    }
  }, [search]);

  const handleHistoryItemClick = (item: string) => {
    try {
      dispatch(fetchSearchResults(item))
        .unwrap()
        .then((data) => {
          setShowHistory(false);
          window.location.href = data.search_metadata.html_url;
        });
    } catch (error) {
      console.error("Error handling history item click:", error);
    }
  };

  const getSearchResults = async () => {
    try {
      await dispatch(fetchSearchResults(search))
        .unwrap()
        .then((data) => {
          setShowHistory(false);
          window.location.href = data.search_metadata.html_url;
        });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        getSearchResults();
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
  };

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setShowHistory(false);
    if (search.trim().length === 0) {
      dispatch(clearSearchResults());
    }
    // Debounce logic
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current); // Clear the previous timeout
    }

    debounceTimeout.current = setTimeout(() => {
      try {
        if (e.target.value.length === 0) {
          clearSearchResults();
          setShowHistory(false);
        } else {
          dispatch(fecthAutoCompleteSearchResults(e.target.value));
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }, 300); // 300ms debounce delay
  };

  const length = AutoCompleteSearchResult.length;
  const searchLength = search.length;
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
        <div className="search-bar" ref={searchContainerRef}>
          <div
            className={`${
              length > 0 && searchLength > 0
                ? "border-radius"
                : showHisory
                ? "border-radius"
                : "search-container"
            }`}
          >
            <Search onClick={getSearchResults} />
            <input
              className="search"
              type="text"
              placeholder="Search Google or type a URL"
              value={search}
              onChange={(e) => handleOnchange(e)}
              onClick={() => setShowHistory(true)}
              onFocus={() => setShowHistory(true)}
              onKeyDown={handleKeyDown}
            />
            <Mic />
            <Camera />
            <ul className="history-container">
              {search.length > 0
                ? AutoCompleteSearchResult.map((item, index) => (
                    <li
                      // onClick={() => handleHistoryItemClick(item.value)}
                      key={index}
                      className="history-item"
                    >
                      <div className="history-icon-wrapper">
                        <Search size={20} className="history-icon" />
                      </div>
                      <span className="history-text">{item.value}</span>
                    </li>
                  ))
                : showHisory &&
                  historyItems.map(
                    (item, index) =>
                      index < 6 && (
                        <li
                          onClick={() => handleHistoryItemClick(item)}
                          key={index}
                          className="history-item"
                        >
                          <div className="history-icon-wrapper">
                            <History size={20} className="history-icon" />
                          </div>
                          <span className="history-text">{item}</span>
                        </li>
                      )
                  )}
            </ul>
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
