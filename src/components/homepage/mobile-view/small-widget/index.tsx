import { Moon, Waves } from "lucide-react";

interface SmallWidgetProps {
  id: number;
  title: string;
  msg: string;
}

const SmallWidget = ({ id, title, msg }: SmallWidgetProps) => {
  return (
    <>
      <div className="aq-card">
        <div className="aq-title">{title}</div>
        <div className="aq-status-line">
          <span className="aq-status-text">{msg}</span>
          <div className="aq-icon-wrapper">
            {id === 1 ? (
              <Moon size={18} strokeWidth={2.5} />
            ) : (
              <Waves size={18} strokeWidth={2.5} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallWidget;
