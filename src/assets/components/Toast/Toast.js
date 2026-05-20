import { toast, Flip } from "react-toastify";
import { SoundPlayer } from "../SoundPlayer/SoundPlayer";

export const showErrorToast = (errorMessage) => {
  SoundPlayer("confirmation_negative", 0.15, "mp3");
  toast.error(errorMessage, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export const showToast = (message) => {
  SoundPlayer("confirmation_positive", 0.15, "mp3");
  toast.success(message, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Flip,
  });
};
