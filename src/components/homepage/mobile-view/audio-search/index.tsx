import { ArrowLeft, Globe, Music2 } from "lucide-react";
import "./SpeakNowScreen.css";

// Interface for Props (Optional)
// interface SpeakNowScreenProps {
//   onBackClick?: () => void;
//   onGlobeClick?: () => void;
//   onSearchSongClick?: () => void;
// }

const SpeakNowScreen = ({
  onBackClick = () => console.log("Back clicked"),
  onSearchSongClick = () => console.log("Search song clicked"),
}) => {
  return (
    <div className="speak-now-screen">
      {/* Header */}
      <header className="speak-now-header">
        <button
          className="speak-action-button"
          onClick={onBackClick}
          aria-label="Go back"
        >
          <ArrowLeft size={22} />
        </button>
        <button className="speak-action-button" aria-label="Language settings">
          <Globe size={22} />
        </button>
      </header>

      {/* Main Content */}
      <main className="speak-now-content">
        <p className="speak-now-text">Speak now</p>

        {/* Google Dots Placeholder */}
        {/* A real implementation would involve complex animation (e.g., scaling, slight bounce) */}
        {/* with delays applied to each dot. */}
        <div className="google-dots">
          <span className="dot dot-blue"></span>
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
      </main>

      {/* Footer Action */}
      <footer className="speak-now-footer">
        <button className="search-song-button" onClick={onSearchSongClick}>
          <Music2 size={18} className="music-icon" />
          Search a song
        </button>
      </footer>
    </div>
  );
};

export default SpeakNowScreen;
