import React from 'react';

import prcugc from "../assets/Teasers/prcugc.png"
import prcugc2 from "../assets/Teasers/prcugc2.png"

import prcEv1 from '../assets/Teasers/prcev1.png'
import prcEv2 from '../assets/Teasers/prcev2.png'

const Teasers = () => {
  return (
    <div className="content">
      <h2>Teasers</h2>
      <h2>New UGC Item's</h2>
      <img src={prcugc} className="TeaserImg"/>
      <img src={prcugc2} className="TeaserImg"/>
      <h2>Electric Vehicles</h2>
      <img src={prcEv1} className="TeaserImg"/>
      <img src={prcEv2} className="TeaserImg"/>
    </div>
  );
};

export default Teasers;
