import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/templar-theme.mp3");
    audio.loop = true;
    audio.volume = 0.25;
    audio.preload = "auto";

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (document.hidden) {
        audio.pause();
      }
    };

    const handlePageHide = () => {
      const audio = audioRef.current;
      if (!audio) return;

      audio.pause();
      audio.currentTime = 0;
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", handlePageHide);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", handlePageHide);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      console.error("Audio error:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={toggleMusic}
      aria-label="Toggle music"
      title={isPlaying ? "Pause music" : "Play music"}
      className={cn(
        "fixed top-24 right-6 z-50",
        "px-4 py-2 rounded-lg border border-red-800/40",
        "bg-black/40 backdrop-blur-md",
        "text-red-700 font-serif font-bold",
        "hover:bg-red-900/20 hover:text-red-500 transition-all duration-300",
        "flex items-center gap-2 whitespace-nowrap"
      )}
    >
      {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
      <span className="text-sm">{isPlaying ? "On" : "Off"}</span>
    </button>
  );
};

export default MusicPlayer;