import React from "react";

interface NameAvatarProps {
  name: string;
  size: number;
}

const NameAvatar: React.FC<NameAvatarProps> = ({ name, size }) => {
  const firstLetter = name.toUpperCase().charAt(0);

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3498db",
        color: "#fff",
        fontSize: size * 0.5,
        fontWeight: "bold",
        borderRadius: "50%",
        cursor: "pointer",
      }}
    >
      {firstLetter}
    </div>
  );
};

export default NameAvatar;
