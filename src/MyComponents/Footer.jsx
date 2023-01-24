import React from "react";

export const Footer = () => {
  let footerStyle = {
    opacity: "70%",
    position: "relative",
    top: "95%",
    width: "100%",
    border: "2px solid cyan",
  };
  return (
    <div className="bg-dark text-light py-2" style={footerStyle}>
      <p>Copyright &copy; MyTodoList.com</p>
    </div>
  );
};
