import {
  X,
  Camera,
  ChevronDown,
  ShieldAlert,
  AlertCircle,
  History,
  Compass,
  ShieldCheck,
  User,
  CheckSquare,
} from "lucide-react";

const menuItems = [
  {
    id: "recommend",
    Icon: ShieldAlert,
    text: "Recommended actions",
    Secondary: <AlertCircle size={20} className="warning-icon" />,
  },
  {
    id: "history",
    Icon: History,
    text: "Search history",
    secondaryText: "Saving",
  },
  { id: "delete", text: "Delete last 15 minutes" }, // No icon
  { id: "personalization", Icon: Compass, text: "Search personalization" },
  { id: "safesearch", Icon: ShieldCheck, text: "SafeSearch" },
  { id: "results", Icon: User, text: "Results about you" },
  { id: "tasks", Icon: CheckSquare, text: "Tasks" },
];

interface GoogleAccountPopupProps {
  userName: string;
  userEmail: string;
  profileImageUrl: string;
  onClose: () => void;
}

const GoogleAccountPopup = ({
  userName = "AKASH",
  userEmail = "akashkvas@gmail.com",
  profileImageUrl = "https://via.placeholder.com/40/000000/FFFFFF/?text=A",
  onClose = () => {},
}: GoogleAccountPopupProps) => {
  return (
    <div className="popup-overlay">
      <div className="google-popup">
        {/* Header */}
        <div className="popup-header">
          <button
            className="popup-action-button close-button"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <h2 className="popup-title">Google</h2>
          {/* Placeholder for potential right-side action */}
          <div style={{ width: "40px" }}></div>
        </div>

        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-pic-wrapper">
            <img
              src={profileImageUrl}
              alt="User profile"
              className="profile-pic"
            />
            <div className="camera-overlay">
              <Camera size={14} strokeWidth={2} />
            </div>
          </div>
          <div className="profile-info">
            <span className="profile-name">{userName}</span>
            <span className="profile-email">{userEmail}</span>
          </div>
          <button
            className="popup-action-button account-switcher"
            aria-label="Switch account"
          >
            <ChevronDown size={20} />
          </button>
        </div>

        {/* Google Account Button */}
        <button className="google-account-button">Google Account</button>

        {/* Divider */}
        <hr className="popup-divider" />

        {/* Menu Items Section */}
        <div className="menu-section">
          {menuItems.map((item) => (
            <button
              key={item.id || item.text}
              className={`menu-item ${!item.Icon ? "no-icon" : ""}`}
            >
              {item.Icon && (
                <div className="menu-icon-wrapper">
                  <item.Icon
                    size={20}
                    strokeWidth={1.5}
                    className="menu-icon"
                  />
                </div>
              )}
              <span className="menu-item-text">{item.text}</span>
              {item.secondaryText && (
                <span className="menu-item-secondary text">
                  {item.secondaryText}
                </span>
              )}
              {item.Secondary && (
                <span className="menu-item-secondary icon">
                  {item.Secondary}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoogleAccountPopup;
