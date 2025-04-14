import { Globe, MoreVertical } from "lucide-react";

const WidgetCard = ({
  imageUrl = "https://via.placeholder.com/400x225/666/ccc?text=Image+Placeholder", // Default placeholder
  title = "I Quit Nest.js in 2025: Here's What I Chose Instead | by Aleksei Aleinikov | Apr, 20...",
  sourceName = "DataDrivenInvestor",
  time = "9h",
}) => {
  return (
    <>
      <div className="article-card">
        <img src={imageUrl} alt={title} className="article-image" />
        <div className="article-content">
          <h3 className="article-title">{title}</h3>
          <div className="article-metadata">
            <div className="article-source-info">
              <Globe size={16} className="article-favicon-icon" />

              <span className="article-source-name">{sourceName}</span>
              <span className="article-separator">·</span>
              <span className="article-time">{time}</span>
            </div>
            <button
              className="article-options-button"
              aria-label="More options"
            >
              <MoreVertical size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WidgetCard;
