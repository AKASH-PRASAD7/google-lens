import { ArrowLeft, History, Mic, ScanSearch } from "lucide-react"; // Use ScanSearch for Lens-like icon
import { historyItems } from "../../../../constants";

interface SearchHistoryProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  onBackClick?: () => void;
}

const SearchFeed = ({ search, setSearch, onBackClick }: SearchHistoryProps) => {
  return (
    <div className="search-history-screen">
      {/* Header */}
      <header className="search-history-header">
        <button
          className="search-action-button"
          onClick={onBackClick}
          aria-label="Go back"
        >
          <ArrowLeft size={24} />
        </button>
        {/* <div className="search-input-placeholder">Search...</div> */}
        <input
          className="search-input-placeholder"
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="search-action-button mic-button"
          aria-label="Voice search"
        >
          {/* Note: Lucide doesn't easily support multi-color like Google's mic. */}
          {/* We'll use the theme color. */}
          <Mic size={22} />
        </button>
        <button
          className="search-action-button lens-button"
          aria-label="Search by image"
        >
          {/* Using ScanSearch as a stand-in for Google Lens */}
          <ScanSearch size={22} />
        </button>
      </header>

      {/* History List */}
      <ul className="history-list">
        {historyItems.map((item, index) => (
          <li key={index} className="history-item">
            <div className="history-icon-wrapper">
              <History size={20} className="history-icon" />
            </div>
            <span className="history-text">{item}</span>
            {/* Optional: Add a remove/action button here if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFeed;
