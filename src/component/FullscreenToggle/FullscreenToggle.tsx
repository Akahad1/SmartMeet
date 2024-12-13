import React, { useState } from "react";
import { ArrowsPointingOutIcon, XMarkIcon } from "@heroicons/react/24/outline";

const FullscreenToggle: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Function to toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      // Request fullscreen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (
        (
          document.documentElement as unknown as Document & {
            mozRequestFullScreen: () => void;
          }
        ).mozRequestFullScreen
      ) {
        // Firefox
        (
          document.documentElement as unknown as Document & {
            mozRequestFullScreen: () => void;
          }
        ).mozRequestFullScreen();
      } else if (document.documentElement.requestFullscreen) {
        // Chrome, Safari, Opera
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.requestFullscreen) {
        // IE/Edge
        document.documentElement.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (
        (document as Document & { mozCancelFullScreen: () => void })
          .mozCancelFullScreen
      ) {
        // Firefox
        (
          document as Document & { mozCancelFullScreen: () => void }
        ).mozCancelFullScreen();
      } else if (document.exitFullscreen) {
        // Chrome, Safari, Opera
        document.exitFullscreen();
      } else if (document.exitFullscreen) {
        // IE/Edge
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  return (
    <div className="flex items-center justify-center  dark:bg-gray-900 transition-colors duration-500">
      <button
        onClick={toggleFullscreen}
        className="p-2 rounded-full  shadow-md hover:bg-gray-200 transition-colors"
      >
        {isFullscreen ? (
          <XMarkIcon className="w-6 h-6 text-gray-600" />
        ) : (
          <ArrowsPointingOutIcon className="w-6 h-6 text-gray-600" />
        )}
      </button>
    </div>
  );
};

export default FullscreenToggle;
