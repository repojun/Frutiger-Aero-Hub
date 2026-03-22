export const SoundPlayer = (soundType, volume = 0.4, extension = "wav") => {
  const audio = new Audio(`/sounds/ui/${soundType}.${extension}`);
  audio.volume = volume;
  audio.play();
};
