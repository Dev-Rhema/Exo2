import { useState } from "react";

export const VimeoPlayer = ({
  videoId,
  onPlay = () => {},
  ariaLabel = "Play video",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (typeof fbq !== "undefined") {
      fbq("track", "ViewContent");
    }
    setIsPlaying(true);
    onPlay();
  };

  return (
    <section className="w-full max-w-2xl aspect-video rounded-md mx-auto overflow-hidden bg-black shadow-lg relative">
      {isPlaying ? (
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&byline=0&portrait=0&sharing=0&dnt=1&autoplay=1&muted=0`}
          className="w-full h-full"
          style={{ border: 0 }}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share;"
          referrerPolicy="strict-origin-when-cross-origin"
          title={ariaLabel}
        />
      ) : (
        <button
          onClick={handlePlayClick}
          type="button"
          className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-30 hover:bg-opacity-40 transition duration-300 cursor-pointer"
          aria-label={ariaLabel}
        >
          <svg
            className="w-20 h-20 text-white drop-shadow-lg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
    </section>
  );
};
