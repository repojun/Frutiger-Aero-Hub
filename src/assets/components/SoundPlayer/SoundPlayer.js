export const SoundPlayer = (soundType, volume = 0.4, extension = "wav") => {
  // sounds need to be all mp3 for compression reasons, but for now there are lots of wav
  const audio = new Audio(`/sounds/ui/${soundType}.${extension}`);
  audio.volume = volume;
  audio.play();
};
