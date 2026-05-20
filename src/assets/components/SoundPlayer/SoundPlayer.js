export const SoundPlayer = (soundType, volume = 0.4, extension = "mp3") => {
  // sounds need to be all mp3 for compression reasons
  const audio = new Audio(`/sounds/ui/${soundType}.${extension}`);
  audio.volume = volume;
  audio.play();
};
