import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

export default function WatchVideo() {
  const { videoId} = useParams();

  const playerRef = useRef(null);
  const intervalRef = useRef(null);
  const lastTimeRef = useRef(0);
  const completedRef = useRef(false); // 🔥 important

  useEffect(() => {
    let player;

    const loadYouTubeAPI = () => {
      return new Promise((resolve) => {
        if (window.YT && window.YT.Player) {
          resolve();
        } else {
          const tag = document.createElement("script");
          tag.src = "https://www.youtube.com/iframe_api";
          window.onYouTubeIframeAPIReady = () => resolve();
          document.body.appendChild(tag);
        }
      });
    };

    const hitCompleteAPI = async () => {
      if (completedRef.current) return; // 🔥 prevent double call
      completedRef.current = true;
      console.log("🚀 Hitting API...");
    };

    const initializePlayer = async () => {
      await loadYouTubeAPI();

      player = new window.YT.Player("yt-player", {
        videoId: videoId,
        playerVars: {
          enablejsapi: 1,
          controls: 0,
          disablekb: 1,
          rel: 0,
          fs: 0,
        },
        events: {
          onReady: () => {
            startTracking();
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              hitCompleteAPI();
            }
          },
        },
      });

      playerRef.current = player;
    };

    const startTracking = () => {
      intervalRef.current = setInterval(() => {
        if (!playerRef.current) return;

        const state = playerRef.current.getPlayerState();
        const currentTime = playerRef.current.getCurrentTime();
        const duration = playerRef.current.getDuration();

        if (state === window.YT.PlayerState.PLAYING) {
          // Prevent skip
          if (currentTime > lastTimeRef.current + 1.5) {
            playerRef.current.seekTo(lastTimeRef.current);
          } else {
            lastTimeRef.current = currentTime;
          }

          // 95% watched
          if (
            duration > 0 &&
            currentTime >= duration * 0.95
          ) {
            hitCompleteAPI();
          }
        }
      }, 1000);
    };

    initializePlayer();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (playerRef.current) playerRef.current.destroy();
    };
  }, [videoId]); // 🔥 removed completed

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
      }}
    >
      <div
        id="yt-player"
        style={{
          width: "100%",
          height: "100%",
        }}
      ></div>
    </div>
  );
}