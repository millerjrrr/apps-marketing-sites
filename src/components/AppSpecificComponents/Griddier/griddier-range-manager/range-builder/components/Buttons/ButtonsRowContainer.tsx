import type { ReactNode } from "react";

const ButtonsRowContainer: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div
      style={{
        marginTop: "0.2rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      {children}
    </div>
  );
};

export default ButtonsRowContainer;
