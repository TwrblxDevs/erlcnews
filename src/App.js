// // import React from 'react';
// // import { BrowserRouter as Router, Route, NavLink, Switch, Routes } from 'react-router-dom';
// // import RecentUpdates from './components/RecentUpdates';
// // import Teasers from './components/Teasers';
// // import Events from './components/Events';
// // import Announcements from './components/Announcements';
// // import './App.css';

// // const App = () => {
// //   return (
// //     <Router>
// //       <div>
// //         <nav>
// //           <ul>
// //             <li>
// //               <NavLink to="/recent-updates" activeClassName="active">
// //                 Recent Updates
// //               </NavLink>
// //             </li>
// //             <li>
// //               <NavLink to="/teasers" activeClassName="active">
// //                 Teasers
// //               </NavLink>
// //             </li>
// //             <li>
// //               <NavLink to="/events" activeClassName="active">
// //                 Events
// //               </NavLink>
// //             </li>
// //             <li>
// //               <NavLink to="/announcements" activeClassName="active">
// //                 Announcements
// //               </NavLink>
// //             </li>
// //           </ul>
// //         </nav>

// //         <Routes>
// //           <Route path="/recent-updates">
// //             <RecentUpdates />
// //           </Route>
// //           <Route path="/teasers">
// //             <Teasers />
// //           </Route>
// //           <Route path="/events">
// //             <Events />
// //           </Route>
// //           <Route path="/announcements">
// //             <Announcements />
// //           </Route>
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, NavLink, Routes, Navigate,  } from 'react-router-dom';
// import RecentUpdates from './components/RecentUpdates';
// import Teasers from './components/Teasers';
// import Events from './components/Events';
// import Announcements from './components/Announcements';
// import Discord from './components/Discord'
// import './App.css';
// import logo from './assets/Logo.png';

// // const App = () => {
// //   const navigate = useNavigate();

// //   const openDiscord = () => {
// //     window.open('https://discord.gg/utEFnYU4FU', '_blank');
// //     navigate('/');
// //   };

// //   return (
// //     <Router>
// //       <div>
// //         <header>
// //           <div className="logo-container">
// //             <img src={logo} alt="Logo" className="logo" />
// //           </div>
// //           <nav>
// //             <ul>
// //               <li>
// //                 <NavLink to="/recent-updates" activeClassName="active">
// //                   Recent Updates
// //                 </NavLink>
// //               </li>
// //               <li>
// //                 <NavLink to="/teasers" activeClassName="active">
// //                   Teasers
// //                 </NavLink>
// //               </li>
// //               <li>
// //                 <NavLink to="/events" activeClassName="active">
// //                   Events
// //                 </NavLink>
// //               </li>
// //               <li>
// //                 <NavLink to="/announcements" activeClassName="active">
// //                   Announcements
// //                 </NavLink>
// //               </li>
// //               {/* Add a link that opens Discord in a new window/tab */}
// //               <li>
// //                 <button onClick={openDiscord}>Open Discord</button>
// //               </li>
// //             </ul>
// //           </nav>
// //         </header>

// //         <Routes>
// //           <Route path="/recent-updates" element={<RecentUpdates />} />
// //           <Route path="/teasers" element={<Teasers />} />
// //           <Route path="/events" element={<Events />} />
// //           <Route path="/announcements" element={<Announcements />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <header>
//           <div className="logo-container">
//             <img src={logo} alt="Logo" className="logo" />
//           </div>
//         <nav>
//           <ul>
//             <li>
//               <NavLink to="/recent-updates" activeClassName="active">
//                 Recent Updates
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/teasers" activeClassName="active">
//                 Teasers
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/events" activeClassName="active">
//                 Events
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/announcements" activeClassName="active">
//                 Announcements
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/discord" activeClassName="active">
//                 Discord
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//         </header>

//         <Routes>
//           <Route path="/recent-updates" element={<RecentUpdates />} />
//           <Route path="/teasers" element={<Teasers />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/announcements" element={<Announcements />} />
//           <Route
//             path="/discord"
//             element={<Navigate to={() => window.open('https://discord.gg/utEFnYU4FU', '_blank')} />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RecentUpdates from './components/RecentUpdates';
import Teasers from './components/Teasers';
import Events from './components/Events';
import Announcements from './components/Announcements';
import NotFound from './components/404'
import Rules from './components/rules'
import TrustedSources from './components/trustedsources';
import './App.css';
import logo from './assets/Logo.png';
// import DiscordWidget from './components/Discord';
import ERLCWikiLogo from './assets/trustedsources/ERLC_WIKI512.png'
import Creators from './components/Creators';
import Email from './components/Contact'

import Wiki from "./components/redirects/erlcwiki"
import Discord from "./components/redirects/discord"

import Partners from "./components/partners"

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/recent-updates" activeClassName="active">
                  Recent Updates
                </NavLink>
              </li>
              <li>
                <NavLink to="/teasers" activeClassName="active">
                  Teasers
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" activeClassName="active">
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/announcements" activeClassName="active">
                  Announcements
                </NavLink>
              </li>
              <li>
                <NavLink to="/rules" activeClassName="active">
                  Rules
                </NavLink>
              </li>
              <li>
                <NavLink to="/trusted-sources" activeClassName="active">
                  Trusted Sources
                </NavLink>
              </li>
              <li>
                <NavLink to="/creators" activeClassName="active">
                  Content Creators
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/partners" activeClassName="active">
                  Partners
                </NavLink>
              </li>
              {/* <li>
              <NavLink to="/discord" activeClassName="active">
                Discord
              </NavLink>
            </li> */}
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/recent-updates" element={<RecentUpdates />} />
          <Route path="/teasers" element={<Teasers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/rules" element={<Rules />} />
          {/* <Route path="/discord" element={<DiscordWidget />} /> */}
          <Route path="/trusted-sources" element={<TrustedSources />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/contact" element={<Email />} />
          <Route path="/erlcwiki" element={<Wiki />} />
          <Route path="/discord" element={<Discord />} />
          <Route path='/partners' element={<Partners />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
