import type  { ReactNode } from "react";

const AppButton: React.FC<{ children: ReactNode; onClick: () => void }> = ({
  children,
  onClick,
}) => {
  return (
    <button onClick={onClick} className="app-button">
      {children}
    </button>
  );
};

export default AppButton;
