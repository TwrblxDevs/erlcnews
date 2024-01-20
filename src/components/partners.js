import React from 'react';
import './css/trustedsources.css'; // Create a new CSS file for styling
import VRP from '../assets/Partners/Velocity_Logo.png';
import JRP from '../assets/Partners/Justice_Roleplay.png'

const TrustedSources = () => {
  return (
    <div className="trusted-sources-container">
      <div className="source">
        <img src={JRP} alt="Source 1 Logo" className="source-logo" />
        <a href="https://twitter.com/erlc_wiki" className="source-button" target="_blank" rel="noopener noreferrer">
          JRP Discord
        </a>
        <a href="https://discord.com/invite/D5emTKEd" className="source-button" target="_blank" rel="noopener noreferrer">
        JRP Roblox Group
        </a>
      </div>
      <div className="source">
        <img src={VRP} alt="Source 1 Logo" className="source-logo" />
        <a href="https://twitter.com/prc_roblox" className="source-button" target="_blank" rel="noopener noreferrer">
          VRP Group
        </a>
        <a href="https://discord.gg/prc" className="source-button" target="_blank" rel="noopener noreferrer">
        VRP Discord
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

export default TrustedSources;
