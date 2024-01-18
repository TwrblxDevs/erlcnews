import React from 'react';


const DiscordWidget = () => {
  return (
    <div>
      <h2>Join our Discord community</h2>
      <iframe
        title="Discord Widget"
        src="https://discord.com/widget?id=1147973837842042952&theme=dark"
        width="350"
        height="500"
        allowTransparency="true"
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
};

export default DiscordWidget;