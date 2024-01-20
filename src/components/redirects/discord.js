import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import '../css/redirect.css'


const RedirectPage = () => {
  const [seconds, setSeconds] = useState(5)

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      clearInterval(countdown);
      window.location.href = 'https://discord.gg/b3fkC6za5q';
    }, 5000);

    return () => {
      clearInterval(countdown);
      clearTimeout(redirectTimeout);
    };
  }, []);

  return (
    <div>
      {/* <h1>Redirecting...</h1>
      <p>You will be redirected in {seconds} seconds</p> */}
    </div>
  );
};

export default RedirectPage;
