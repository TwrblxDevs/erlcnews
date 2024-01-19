// ContentCreators.js
import React from 'react';
import './css/Creators.css'; // Create this CSS file

import Seth from "../assets/Creators/NotSeth.png"

// const ContentCreators = () => {
//   // You can add content creators data here or fetch it from an API

//   const contentCreatorsData = [
//     {
//       id: 1,
//       profilePicture: Seth,
//       channelLink: 'https://www.youtube.com/channel1',
//       twitter: 'N/A',
//       discord: 'https://discord.gg/ABtTQfdg',
//     },
//     {
//       id: 2,
//       profilePicture: 'url-to-image2',
//       channelLink: 'https://www.youtube.com/channel2',
//       twitter: 'https://twitter.com/contentcreator2',
//       discord: 'ContentCreator2#5678',
//     },
//     // Add more content creators as needed
//   ];

//   return (
//     <div className="content-creators-container">
//       <h2>Content Creators</h2>
//       <div className="content-creators-list">
//         {contentCreatorsData.map((creator) => (
//           <div key={creator.id} className="content-creator">
//             <div className="creator-profile">
//               <img src={creator.profilePicture} alt={`Profile of ${creator.discord}`} />
//             </div>
//             <div className="creator-info">
//               <h3>{creator.discord}</h3>
//               <a href={creator.channelLink} target="_blank" rel="noopener noreferrer">
//                 Channel
//               </a>
//               <a href={creator.twitter} target="_blank" rel="noopener noreferrer">
//                 Twitter
//               </a>
//               <span>{creator.discord}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ContentCreators;
// 

const Creators = () => {
    return (
        
       
       <div className="trusted-sources-container">
        
        <div className="source">
            
          <img src={Seth} alt="Source 1 Logo" className="source-logo" />
          <h3>"NotSethyboy is a YouTube content creator with over 15,000 subscribers!"</h3>
          <a href="discord.gg/sethyboy" className="source-button" target="_blank" rel="noopener noreferrer">
          Discord
          </a>
          <a href="https://www.youtube.com/@NotSethyboy" className="source-button" target="_blank" rel="noopener noreferrer">
          Youtube
          </a>
        </div>
       
        {/* <div className="source">
          <img src={source2Logo} alt="Source 2 Logo" className="source-logo" />
          <a href="https://twitter.com/Source2Twitter" className="source-button" target="_blank" rel="noopener noreferrer">
            Source 2 Twitter
          </a>
          <a href="https://discord.gg/Source2Discord" className="source-button" target="_blank" rel="noopener noreferrer">
            Source 2 Discord
          </a>
        </div> */}
  
      
      </div>
    );
  };
  
  export default Creators;