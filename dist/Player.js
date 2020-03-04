import React, { useRef, useEffect, useState, useCallback } from 'react';
import Player from '@vimeo/player';
export default function VimeoPlayer({
  id = null,
  width = '500px',
  height = '',
  controls = false,
  autoplay = false,
  muted = false,
  play = false,
  getTime = false,
  setTime = null
}) {
  const container = useRef(document.createElement('div'));
  const player = useRef();
  const [ready, setReady] = useState(false);
  const [noID, setNoID] = useState(false);
  const videoRef = useCallback(node => {
    if (node !== null) {
      node.appendChild(container.current);
    }
  }, []);
  useEffect(() => {
    if (!id) {
      setNoID(true);
    } else {
      if (player.current) {
        container.current = document.createElement('div');
        setReady(false);
      }

      (async () => {
        player.current = await new Player(container.current, {
          id: id,
          width: width,
          height: height,
          controls: controls,
          autoplay: autoplay,
          muted: muted
        });
        setReady(true);
      })();
    }
  }, [id, width, height, controls, autoplay, muted]);
  useEffect(() => {
    if (player.current !== undefined) {
      if (play) {
        player.current.play();
      } else {
        player.current.pause();
      }
    }
  }, [play]);
  useEffect(() => {
    if (getTime) {
      player.current.getCurrentTime().then(secs => {
        setTime(secs);
      });
    }
  }, [getTime, setTime]);
  return React.createElement("div", null, ready && React.createElement("div", {
    ref: videoRef
  }), noID && React.createElement("p", null, "Invalid video ID. Failed to initialize player."));
}