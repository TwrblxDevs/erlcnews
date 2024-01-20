import React from 'react';
import './css/trustedsources.css'; // Create a new CSS file for styling
import ERLCWiki from '../assets/trustedsources/ERLC_WIKI512.png';
import PRC from '../assets/trustedsources/PRCLogo.png'

const TrustedSources = () => {
  return (
    <div className="trusted-sources-container">
      <div className="source">
        <img src={ERLCWiki} alt="Source 1 Logo" className="source-logo" />
        <a href="https://twitter.com/erlc_wiki" className="source-button" target="_blank" rel="noopener noreferrer">
          ER:LC Wiki Twitter
        </a>
        <a href="https://discord.com/invite/D5emTKEd" className="source-button" target="_blank" rel="noopener noreferrer">
        ER:LC Wiki Discord
        </a>
        <a href="/erlcwiki" className="source-button" target="_blank" rel="noopener noreferrer">
          ER:LC Wiki Page
        </a>
      </div>
      <div className="source">
        <img src={PRC} alt="Source 1 Logo" className="source-logo" />
        <a href="https://twitter.com/prc_roblox" className="source-button" target="_blank" rel="noopener noreferrer">
          PRC Twitter
        </a>
        <a href="https://discord.gg/prc" className="source-button" target="_blank" rel="noopener noreferrer">
        PRC Discord
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
