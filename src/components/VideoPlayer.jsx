"use client";

import React, { useRef, useState, useEffect, forwardRef } from 'react';
import "video.js/dist/video-js.css";
import { useVideoJS } from "react-hook-videojs";
import Image from 'next/image';

const VideoPlayer = forwardRef((props, ref) => {
    const playerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(true);
    const [isMovedControls, setIsMovedControls] = useState(false);
    const [minTime, setMinTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [current, setCurrent] = useState(0);
    const className = "tv-player video-js vjs-default-skin vjs-16-9 vjs-big-play-centered";
    const widthSize = props.width || "100%";
    
    const { Video, player } = useVideoJS(
        { sources: [{ src: props.src, type: 'application/x-mpegURL' }] },
        className,
        { controls: true }
    );

    useEffect(() => {
        if (player && player.isReady_) {
            setIsVideoLoaded(true);
            var myButton = player.controlBar.addChild("button");
            let playerDuration = player.liveTracker.lastSeekEnd_;
            let playerPosition = player.liveTracker.lastTime_
            if (!isMovedControls) {
                moveControls(myButton);
                setIsMovedControls(true);
            }
            if(playerPosition > 0 && playerDuration > 0){
                setMinTime(player.liveTracker.lastSeekEnd_)
                setDuration(player.liveTracker.lastTime_)
            }


            // console.log(formatTime(player.liveTracker.lastTime))
            // console.log(player.liveTracker.pastSeekEnd());
            // console.log(player.liveTracker.lastTime)
            console.log("Video player is ready.");

            const timeUpdateHandler = () => {
                updateProgress()
            };



            player.on('timeupdate', timeUpdateHandler);
            // player.on('play', playHandler);

            return () => {
                player.off('timeupdate', timeUpdateHandler);
            };
        }
    }, [player, isMovedControls]);

    const handlePlayToggle = () => {
        if (player) {
            if (player.paused()) {
                player.play().catch(error => {
                    console.error('Error attempting to play the video:', error);
                    setIsVideoLoaded(false);
                });
                setIsPlaying(true);
            } else {
                player.pause();
                setIsPlaying(false);
            }
        }
    };

    const handleForward = () => {
        if (player) {
            player.currentTime(player.currentTime() + 10);
        }
    };

    const handleReplay = () => {
        if (player) {
            player.currentTime(player.currentTime() - 10);
        }
    };

    const handleSeekToLive = () => {
        if (player.seekable().length > 0) {
            var liveTime = player.seekable().end(0);
            console.log('Seeking to live time:', liveTime);
            player.currentTime(liveTime);
        } else {
            console.log('No seekable ranges available.');
        }
    };

    const handleFullscreenToggle = () => {
        if (player) {
            const videoElement = player.el();
            if (videoElement) {
                if (!document.fullscreenElement && !document.webkitFullscreenElement) {
                    if (videoElement.requestFullscreen) {
                        videoElement.requestFullscreen();
                    } else if (videoElement.webkitRequestFullscreen) {
                        videoElement.webkitRequestFullscreen();
                    }
                    setIsFullscreen(true);
                } else {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    }
                    setIsFullscreen(false);
                }
            }
        }
    };

    const moveControls = (button) => {
        const controls = document.getElementById('controls');
        const targetElement = button.el();
    
        if (controls && targetElement) {
            targetElement.style.width = "100%";
            targetElement.innerHTML = `<div class="video-controls">${controls.innerHTML}</div>`;
    
            targetElement.querySelectorAll('.video-replay').forEach(el => {
                el.removeEventListener('click', handleReplay);
                el.addEventListener('click', handleReplay);
            });
    
            targetElement.querySelectorAll('.video-play').forEach(el => {
                el.removeEventListener('click', handlePlayToggle);
                el.addEventListener('click', handlePlayToggle);
            });
    
            targetElement.querySelectorAll('.video-forward').forEach(el => {
                el.removeEventListener('click', handleForward);
                el.addEventListener('click', handleForward);
            });
    
            targetElement.querySelectorAll('.video-live').forEach(el => {
                el.removeEventListener('click', handleSeekToLive);
                el.addEventListener('click', handleSeekToLive);
            });
    
            targetElement.querySelectorAll('.video-fs').forEach(el => {
                el.removeEventListener('click', handleFullscreenToggle);
                el.addEventListener('click', handleFullscreenToggle);
            });

            targetElement.querySelectorAll('.progress-bar').forEach(el => {
                el.removeEventListener('input', handleProgressChange);
                el.addEventListener('input', handleProgressChange);
            });
        } else {
            console.error('Controls or target element not found');
        }
    };

    const updateProgress = () => {
        const progressBar = document.querySelectorAll(".progress-bar");
        const labelCurrentTime = document.querySelectorAll(".current-time");
        const labelDuration = document.querySelectorAll(".duration-time");

        const videoMinTime = player.liveTracker.lastSeekEnd_;
        const videoMaxTime = player.liveTracker.lastTime_;
        const videoCurrentTime = player.currentTime()
        progressBar.forEach(el => {
            el.max = videoMaxTime
            el.min = videoMinTime
            el.value = videoCurrentTime
        })
        labelCurrentTime.forEach(el => {
            el.innerText = formatTime(videoCurrentTime)
        })
        labelDuration.forEach(el => {
            el.innerText = formatTime(0)
        })
    };

    const handleProgressChange = (e) => {
        const newTime = e.target.value;
        if (playerRef.current) {
          playerRef.current.currentTime(player.liveTracker.lastSeekEnd_);
          player.currentTime(newTime)
        }
    };

    const formatTime = (time) => {
        if (isNaN(time)) {
          return '0:00';
        }
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        if (player) {
            playerRef.current = player;
        }
    }, [player]);

    return (
        <div id="video-player" style={{width: widthSize}}>
          {isVideoLoaded ? (
            <>
              <Video controls />
              <div id="controls" style={{ display: 'none' }}>
                <div className="left-controls">
                    <Image onClick={handleReplay} className="video-replay" src="/static/icons/ic_backward.png" width={30} height={30} alt="backward_10sec" />
                    <Image onClick={handlePlayToggle} className="video-play" src={isPlaying ? "/static/icons/ic_pause.png" : "/static/icons/ic_play.png"} width={30} height={30} alt="play_pause" />
                    <Image onClick={handleForward} className="video-forward" src="/static/icons/ic_forward.png" width={30} height={30} alt="forward_10sec" />
                    <Image onClick={handleSeekToLive} className="video-live" style={{display: 'none'}} src="/static/icons/ic_live.png" width={30} height={30} alt="live" />
                </div>
                <div className="progress-container">
                    <div className="time-display">
                        <span className="current-time">{formatTime(minTime)}</span> / <span className="duration-time">{formatTime(duration)}</span>
                    </div>
                    <input
                    type="range"
                    // min={minTime}
                    // max={duration}
                    // value={minTime}
                    step={1}
                    className="progress-bar"
                    style={{ width: "95%" }}
                    disabled={true}
                    />
                </div>
                <div className="right-controls">
                    <Image onClick={handleFullscreenToggle} className="video-fs" src="/static/icons/ic_fs.png" width={30} height={30} alt="fullscreen" />
                </div>
              </div>
            </>
          ) : null}
        </div>
    );
});

export default VideoPlayer;
