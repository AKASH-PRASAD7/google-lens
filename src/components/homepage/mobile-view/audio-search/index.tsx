import { ArrowLeft, Globe } from "lucide-react";
import { AudioSearchProps } from "../../../../utils/types";

const SpeakNowScreen = ({ setShowAudioSearch }: AudioSearchProps) => {
  return (
    <div className="speak-now-screen">
      <header className="speak-now-header">
        <button
          className="speak-action-button"
          onClick={() => setShowAudioSearch(false)}
          aria-label="Go back"
        >
          <ArrowLeft size={22} />
        </button>
        <button className="speak-action-button" aria-label="Language settings">
          <Globe size={22} />
        </button>
      </header>

      <main className="speak-now-content">
        <p className="speak-now-text">Speak now</p>

        <div className="google-dots">
          <span className="dot dot-blue"></span>
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
      </main>
    </div>
  );
};

export default SpeakNowScreen;
