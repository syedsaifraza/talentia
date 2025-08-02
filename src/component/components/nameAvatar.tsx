import React from "react";

interface NameAvatarProps {
  name: string;
  size: number;
}

// Define 26 distinct colors for A-Z
const colors = [
  "#e74c3c", "#8e44ad", "#3498db", "#1abc9c", "#27ae60",
  "#f39c12", "#d35400", "#7f8c8d", "#2ecc71", "#9b59b6",
  "#16a085", "#2980b9", "#f1c40f", "#e67e22", "#34495e",
  "#95a5a6", "#c0392b", "#bdc3c7", "#2c3e50", "#ff6b6b",
  "#6c5ce7", "#fd79a8", "#00cec9", "#fab1a0", "#55efc4", "#ffeaa7"
];

// Function to get background color based on first letter
const getBackgroundColor = (char: string): string => {
  const code = char.toUpperCase().charCodeAt(0);
  // A-Z corresponds to ASCII codes 65–90
  if (code >= 65 && code <= 90) {
    return colors[code - 65];
  }
  // Fallback color for non-alphabet characters
  return "#7f8c8ds";
};

const NameAvatar: React.FC<NameAvatarProps> = ({ name, size }) => {
  const firstLetter = name.trim().toUpperCase().charAt(0);
  const backgroundColor = getBackgroundColor(firstLetter);

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor,
        color: "#fff",
        fontSize: size * 0.5,
        fontWeight: "bold",
        borderRadius: "50%",
        cursor: "pointer",
        textTransform: "uppercase"
      }}
      title={name}
    >
      {firstLetter}
    </div>
  );
};

export default NameAvatar;
