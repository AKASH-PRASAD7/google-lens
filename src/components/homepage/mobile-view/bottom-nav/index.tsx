import { Home, Search, Bookmark, Bell } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", Icon: Home },
  { id: "search", label: "Search", Icon: Search },
  { id: "bookmarks", label: "Bookmarks", Icon: Bookmark },
  { id: "notifications", label: "Notifications", Icon: Bell },
];

interface BottomNavProps {
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}

const BottomNav = ({ activeItem, setActiveItem }: BottomNavProps) => {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const isActive = item.id === activeItem;
        return (
          <button
            key={item.id}
            className={`nav-item ${isActive ? "active" : ""}`}
            onClick={() => setActiveItem(item.id)}
            aria-label={item.label} // Accessibility: Label for screen readers
            aria-current={isActive ? "page" : undefined} // Accessibility: Indicate current page
          >
            <div className="nav-icon-wrapper">
              <item.Icon
                className="nav-icon"
                size={24}
                strokeWidth={isActive ? 2.5 : 2}
                fill={isActive ? "currentColor" : "none"}
              />
            </div>
            {isActive && <span className="nav-label">{item.label}</span>}
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
