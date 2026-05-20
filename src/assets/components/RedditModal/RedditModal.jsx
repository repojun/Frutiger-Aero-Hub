import React from "react";
import "./RedditModal.scss";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import { addWaitlist } from "../../../api/email";
import { showErrorToast, showToast } from "../Toast/Toast";

const RedditModal = ({ modal, windowAnimation, toggleModal, modalTitle = "Music Player", modalImage, type, buttonArray, subButtonClick, width, height, switchHue, description }) => {
  if (!modal) return null;
  const [disabled, setDisabled] = useState(false);
  const [email, setEmail] = useState("");

  const submitWaitlist = async () => {
    setDisabled(true);
    // email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      showErrorToast("Fill all required fields!");
      setDisabled(false);
      return;
    }

    if (!emailRegex.test(email)) {
      showErrorToast("Please enter a valid email!");
      setDisabled(false);
      return;
    }

    try {
      const { data, error } = await addWaitlist(email);
      if (error) {
        showErrorToast(error);
        setDisabled(false);
        return;
      }
      showToast("Email Submitted!");
      setDisabled(true);
    } catch (err) {
      console.log(err);
      showErrorToast("Something went wrong!");
    }
  };

  return (
    <div className="modal-wrapper">
      <div className={windowAnimation ? "mainWindow open" : "mainWindow close"} style={{ width, height }}>
        <div className="flexTitleBar">
          <div className="windowTitle">{modalTitle}</div>
          <div
            className="closeButton"
            onClick={() =>
              toggleModal({
                title: modalTitle,
                type: type,
                array: buttonArray,
                description: description,
              })
            }
          >
            <div>X</div>
          </div>
        </div>
        <div></div>

        {type === "About" ? (
          <div
            className="credits"
            style={{
              fontSize: "2rem",
            }}
          >
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
        ) : (
          <></>
        )}
        {type === "Credits" ? (
          <div>
            <div className="credits">
              <ReactMarkdown>{description}</ReactMarkdown>
            </div>
            <div className="modal-input-container">
              <div className="shop-input-container">
                <input
                  className={disabled ? "shop-input disabled" : "shop-input"}
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  disabled={disabled}
                  maxLength={300}
                  style={{ maxWidth: "97%", minWidth: "97%", width: "16rem", height: "1.5rem", maxHeight: "8rem", alignSelf: "center" }}
                />
              </div>
              <div className={disabled ? "submit-button disabled" : "submit-button"} onClick={disabled ? () => showCooldown() : submitWaitlist} style={{ width: "8rem" }}>
                <img src="icons/forward.webp" className="icon" />
                <span>Sign up!</span>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="arrayButtons">
          {buttonArray?.map((button) => (
            <div
              key={button.id}
              className="selectButton"
              onClick={() => {
                // Need to change subButtonClick so it has more relevant name
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
    </div>
  );
};

export default RedditModal;
