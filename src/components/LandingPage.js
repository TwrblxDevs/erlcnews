// // import React from 'react';
// // import './LandingPage.css';
// // import logo from '../assets/Logo.png';

// // const LandingPage = () => {
// //   return (
// //     <div className="hero-container">
// //       <div className="logo-container">
// //         <img src={logo} alt="Logo" className="logo" />
// //       </div>
// //       <div className="hero-content">
// //         <h1>Welcome to ER:LC Update News!</h1>
// //         <p>
// //           Stay tuned for the latest updates, exciting teasers, upcoming events, and important announcements related to ER:LC.
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // // export default LandingPage;
// // import React, { useState } from 'react';
// // import './LandingPage.css';
// // import logo from '../assets/Logo.png';
// // import video from '../assets/video.mp4';

// // const LandingPage = () => {
// //   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

// //   const playVideo = () => {
// //     setIsVideoPlaying(true);
// //   };

// //   return (
// //     <div className="hero-container" onClick={playVideo}>
// //       <div className="video-container">
// //         {isVideoPlaying && (
// //           <video autoPlay loop playsInline className="video-bg">
// //             <source src={video} type="video/mp4" />
// //             Your browser does not support the video tag.
// //           </video>
// //         )}
// //       </div>
// //       <div className="content-container">
// //         <div className="logo-container">
// //           <img src={logo} alt="Logo" className="logo" />
// //         </div>
// //         <div className="hero-content">
// //           <h1>Welcome to ER:LC Update News!</h1>
// //           <p>
// //             Stay tuned for the latest updates, exciting teasers, upcoming events, and important announcements related to ER:LC.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LandingPage;

// // import React, { useState, useRef } from 'react';
// // import './LandingPage.css';
// // import logo from '../assets/Logo.png';
// // import video from '../assets/video.mp4';

// // const LandingPage = () => {
// //   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
// //   const [volume, setVolume] = useState(0.5);
// //   const videoRef = useRef(null);

// //   const toggleVideo = () => {
// //     setIsVideoPlaying(!isVideoPlaying);
// //     if (isVideoPlaying) {
// //       videoRef.current.pause();
// //     } else {
// //       videoRef.current.play();
// //     }
// //   };

// //   const handleVolumeChange = (e) => {
// //     setVolume(e.target.value);
// //     videoRef.current.volume = e.target.value;
// //   };

// //   return (
// //     <div className="hero-container">
// //       <div className="content-container">
// //         <div className="logo-container">
// //           <img src={logo} alt="Logo" className="logo" />
// //         </div>
// //         <div className="hero-content">
// //           <h1>Welcome to ER:LC Update News!</h1>
// //           <p>
// //             Stay tuned for the latest updates, exciting teasers, upcoming events, and important announcements related to ER:LC.
// //           </p>
// //         </div>
// //       </div>
// //       <div className="video-box">
// //         <div className="video-controls">
// //           <button onClick={toggleVideo}>{isVideoPlaying ? 'Pause' : 'Play'}</button>
// //           <input
// //             type="range"
// //             min="0"
// //             max="1"
// //             step="0.01"
// //             value={volume}
// //             onChange={handleVolumeChange}
// //           />
// //         </div>
// //         <video ref={videoRef} loop playsInline className={`video-bg ${isVideoPlaying ? 'playing' : ''}`}>
// //           <source src={video} type="video/mp4" />
// //           Your browser does not support the video tag.
// //         </video>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LandingPage;

// // import React, { useState, useRef } from 'react';
// // import './css/LandingPage.css';
// // import logo from '../assets/Logo.png';
// // import video from '../assets/video.mp4';

// // const LandingPage = () => {
// //   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
// //   const [volume, setVolume] = useState(0.5);
// //   const videoRef = useRef(null);

// //   const toggleVideo = () => {
// //     setIsVideoPlaying(!isVideoPlaying);
// //     if (isVideoPlaying) {
// //       videoRef.current.pause();
// //     } else {
// //       videoRef.current.play();
// //     }
// //   };

// //   const handleVolumeChange = (e) => {
// //     setVolume(e.target.value);
// //     videoRef.current.volume = e.target.value;
// //   };

// //   return (
// //     <div className="hero-container">
// //       <div className="content-container">
// //         <div className="text-content">
          
// //           <div className="hero-content">
// //             <h1>Welcome to ER:LC Update News!</h1>
// //             <p>
// //               Stay tuned for the latest updates, exciting teasers, upcoming events, and important announcements related to ER:LC.
// //             </p>
// //             <a href="https://www.roblox.com/games/2534724415/Emergency-Response-Liberty-County#" className='buttonA'>Play ER:LC</a>
// //             <a href="https://www.roblox.com/groups/4328109/Police-Roleplay-Community" className='buttonE'>PRC Roblox Group</a>
// //           </div>
// //         </div>
     
// //         <div className="video-box">
// //           <div className={`video-controls ${isVideoPlaying ? 'visible' : ''}`}>
// //             <button onClick={toggleVideo}>{isVideoPlaying ? 'Pause' : 'Play'}</button>
// //             <input
// //               type="range"
// //               min="0"
// //               max="1"
// //               step="0.01"
// //               value={volume}
// //               onChange={handleVolumeChange}
// //             />
// //           </div>
// //           <video ref={videoRef} loop playsInline className={`video-bg ${isVideoPlaying ? 'playing' : ''}`}>
// //             <source src={video} type="video/mp4" />
// //             Your browser does not support the video tag.
// //           </video>
// //           {!isVideoPlaying && (
// //             <div className="play-button" onClick={toggleVideo}>
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 viewBox="0 0 24 24"
// //                 fill="#fff"
// //                 width="48px"
// //                 height="48px"
// //               >
// //                 <path d="M8 5v14l11-7z" />
// //               </svg>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LandingPage;


// import React, { useState, useRef } from 'react';
// import './css/LandingPage.css';
// import video from '../assets/erlcvideo.mp4';

// const LandingPage = () => {
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//   const [volume, setVolume] = useState(0.5);
//   const [searchQuery, setSearchQuery] = useState('');
//   const videoRef = useRef(null);

//   const toggleVideo = () => {
//     setIsVideoPlaying(!isVideoPlaying);
//     if (isVideoPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//   };

//   const handleVolumeChange = (e) => {
//     setVolume(e.target.value);
//     videoRef.current.volume = e.target.value;
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//     // Handle your search logic here
//   };

//   return (
//     <div className="hero-container">
//       <div className="content-container">
//         <div className="text-content">
//           <div className="hero-content">
//             <h1>Welcome to ER:LC Update News!</h1>
//             <p>
//               Stay tuned for the latest updates, exciting teasers, upcoming events,</p>
//               <p>
//               and important announcements related to ER:LC.
//             </p>
//             <a href="https://www.roblox.com/games/2534724415/Emergency-Response-Liberty-County#" className='buttonA'>Play ER:LC</a>
//             <a href="https://www.roblox.com/groups/4328109/Police-Roleplay-Community" className='buttonE'>PRC Roblox Group</a>
//           </div>
//           <div className="search-bar">
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={handleSearchChange}
//             />
//             {/* Add your search button or search logic here */}
//           </div>
//         </div>
     
//         <div className="video-box">
//           <div className={`video-controls ${isVideoPlaying ? 'visible' : ''}`}>
//             <button onClick={toggleVideo}>{isVideoPlaying ? 'Pause' : 'Play'}</button>
//             <input
//               type="range"
//               min="0"
//               max="1"
//               step="0.01"
//               value={volume}
//               onChange={handleVolumeChange}
//             />
//           </div>
//           <video ref={videoRef} loop playsInline className={`video-bg ${isVideoPlaying ? 'playing' : ''}`}>
//             <source src={video} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           {!isVideoPlaying && (
//             <div className="play-button" onClick={toggleVideo}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="#fff"
//                 width="48px"
//                 height="48px"
//               >
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </div>
//           )}
//         </div>
//       </div>
//       {/* <footer>
//       <h2>Trusted Sources</h2>
//       </footer> */}
//     </div>
   
//   );
// };

// export default LandingPage;

import React, { useState, useRef } from 'react';
import './css/LandingPage.css';
import video from '../assets/erlcvideo.mp4';

const LandingPage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = e.target.value;
    }
  };

  return (
    <div className="hero-container">
      <div className="content-container">
        <div className="text-content">
          <div className="hero-content">
            <h1>Welcome to ER:LC Update News!</h1>
            <p>
              Stay tuned for the latest updates, exciting teasers, upcoming events,
            </p>
            <p>and important announcements related to ER:LC.</p>
            <a href="https://www.roblox.com/games/2534724415/Emergency-Response-Liberty-County#" className='buttonA'>Play ER:LC</a>
            <a href="https://www.roblox.com/groups/4328109/Police-Roleplay-Community" className='buttonE'>PRC Roblox Group</a>
          </div>
        </div>
        <div className="video-box">
          <div className={`video-controls ${isVideoPlaying ? 'visible' : ''}`}>
            <button onClick={toggleVideo}>{isVideoPlaying ? 'Pause' : 'Play'}</button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
          <video ref={videoRef} loop playsInline className={`video-bg ${isVideoPlaying ? 'playing' : ''}`}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isVideoPlaying && (
            <div className="play-button" onClick={toggleVideo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
                width="48px"
                height="48px"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
