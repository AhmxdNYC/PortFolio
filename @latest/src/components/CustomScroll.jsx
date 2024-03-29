import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "./ModeContext";
const ScrollProgressIndicator = ({ skillsRef, projectsRef }) => {
  const { theme } = useTheme();
  const [progress, setProgress] = useState(0);
  const [isTrackVisible, setIsTrackVisible] = useState(false);
  const [isIndicatorVisible, setIsIndicatorVisible] = useState(false);

  // Define an offset to control when the indicator specifically becomes visible after the track is visible
  const indicatorVisibilityAfterTrackOffset = 300; // Adjust this value as needed

  const calculateVisibilityAndProgress = () => {
    if (!skillsRef.current || !projectsRef.current) {
      setIsTrackVisible(false);
      setIsIndicatorVisible(false);
      return;
    }

    const scrollPosition = window.scrollY;
    const trackVisibilityPoint = skillsRef.current.offsetTop; // The point where the track becomes visible
    const indicatorVisibilityPoint =
      trackVisibilityPoint + indicatorVisibilityAfterTrackOffset; // The point where the indicator becomes visible

    // Control the visibility of the track
    if (scrollPosition >= trackVisibilityPoint) {
      setIsTrackVisible(true);
    } else {
      setIsTrackVisible(false);
    }

    // Control the visibility of the indicator within the track
    if (scrollPosition >= indicatorVisibilityPoint) {
      setIsIndicatorVisible(true);
      // Calculate progress for the indicator's movement
      const adjustedScroll = scrollPosition - indicatorVisibilityPoint;
      const totalHeight =
        projectsRef.current.offsetTop +
        projectsRef.current.offsetHeight -
        indicatorVisibilityPoint;

      // Adjust the progress calculation to prevent the indicator from exceeding the track height
      // Subtract the height of the indicator from the totalHeight to ensure it doesn't go past the track
      let progress = (adjustedScroll / (totalHeight + 57)) * 100; // Assuming the indicator's height is 20px

      setProgress(Math.min(progress, 100));
    } else {
      setIsIndicatorVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", calculateVisibilityAndProgress);
    return () =>
      window.removeEventListener("scroll", calculateVisibilityAndProgress);
  }, [skillsRef, projectsRef]);

  const trackStartFromTop = "10rem";
  const trackHeight = "500px";

  const trackStyle = {
    display: isTrackVisible ? "block" : "none",
    position: "fixed",
    top: trackStartFromTop,
    left: "8.3rem",
    height: trackHeight,
    width: "6px", // Width of the track
    backgroundColor: "", // Use backgroundColor to fill the entire track
    borderRadius: "3px", // Half of the width for a fully rounded effect
    zIndex: 1000,
  };

  const indicatorStyle = {
    display: isIndicatorVisible ? "block" : "none",
    position: "absolute",
    top: `${progress}%`,
    left: "-1px", // Adjust based on the width of your track to center the indicator
    height: "20px",
    width: "6px", // Match the track's width
    backgroundColor: "yellow",
    borderRadius: "3px", // Apply rounding here as well to match the track's appearance
    transition: "",
  };

  return (
    <div
      className={`${
        theme === "dark"
          ? "border border-[#2c2c2c] bg-black  shadow-[0_0_8px_rgba(255,255,0,0.6)]"
          : "border border-gray-300 bg-gray-50 shadow-md"
      }`}
      style={trackStyle}
    >
      <div
        className={`${
          theme === "dark"
            ? "border border-[#2c2c2c] bg-black  shadow-[0_0_8px_rgba(255,255,0,0.6)]"
            : "border border-gray-300 bg-white shadow-xl"
        }`}
        style={indicatorStyle}
      />
    </div>
  );
};

export default ScrollProgressIndicator;
