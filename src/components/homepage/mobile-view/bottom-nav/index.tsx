import { BottomNavProps } from "../../../../utils/types";
import { navItems } from "../../../../constants";

const BottomNav = ({
  activeItem,
  setActiveItem,
  setShowSearchFeed,
}: BottomNavProps) => {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const isActive = item.id === activeItem;
        return (
          <button
            key={item.id}
            className={`nav-item ${isActive ? "active" : ""}`}
            onClick={() => {
              setActiveItem(item.id);
              item.id === "search"
                ? setShowSearchFeed(true)
                : setShowSearchFeed(false);
            }}
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}
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
