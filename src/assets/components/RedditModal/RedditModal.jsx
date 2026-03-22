import React from "react";
import "./RedditModal.scss";

const RedditModal = ({ modal, windowAnimation, toggleModal, modalTitle = "Music Player", modalImage, type, buttonArray, subButtonClick, width, height, switchHue }) => {
  if (!modal) return null;

  return (
    <div className={windowAnimation ? "mainWindow open" : "mainWindow close"} style={{ width, height }}>
      <div className="flexTitleBar">
        <div className="windowTitle">{modalTitle}</div>
        <div
          className="closeButton"
          onClick={() =>
            toggleModal({
              title: modalTitle,
              type: "subButton",
              array: buttonArray,
            })
          }
        >
          <div>X</div>
        </div>
      </div>

      <div className="arrayButtons">
        {buttonArray?.map((button) => (
          <div
            key={button.id}
            className="selectButton"
            onClick={() => {
              if (type === "themeButton") {
                switchHue(button.hue);
              } else if (type === "musicButton") {
                subButtonClick(button);
              } else if (type === "backgroundButton") {
                subButtonClick(button);
              }
            }}
          >
            {button.icon && <img src={button.icon} alt={button.label} />}
            <div>{button.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RedditModal;
