import React from 'react';
import AngularIcon from './angular-icon.png';
import AngularIcon2x from './angular-icon@2x.png';
import AngularIcon3x from './angular-icon@3x.png';
import ReactIcon from './react-icon.png';
import ReactIcon2x from './react-icon@2x.png';
import ReactIcon3x from './react-icon@3x.png';
import TimeIcon from './time-icon.svg';
import VueIcon from './vue-icon.png';
import VueIcon2x from './vue-icon@2x.png';
import VueIcon3x from './vue-icon@3x.png';

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="22"
    fill="none"
    viewBox="0 0 24 22"
  >
    <g clipPath="url(#a)">
      <path
        fill="#DD0031"
        d="M12 8.229C12.234 7.109 13.547 2 17.382 2 19.602 2 22 3.551 22 7.003c0 3.907-3.627 8.47-10 12.629C5.627 15.473 2 10.91 2 7.003c0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zM0 7.003C0 11.071 3.06 16.484 12 22c8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737C9.662-1.996 0-1.004 0 7.003z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v22H0z" />
      </clipPath>
    </defs>
  </svg>
);

const HeartIconFill = () => (
  <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#a)">
      <path d="M12 3.248C8.852-2.154 0-.577 0 6.192 0 10.853 5.571 15.619 12 22c6.43-6.381 12-11.147 12-15.808C24-.6 15.125-2.114 12 3.248Z" fill="#DD0031" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v22H0z" />
      </clipPath>
    </defs>
  </svg>
);
export {
  AngularIcon,
  AngularIcon2x,
  AngularIcon3x,
  HeartIcon,
  HeartIconFill,
  ReactIcon,
  ReactIcon2x,
  ReactIcon3x,
  TimeIcon,
  VueIcon,
  VueIcon2x,
  VueIcon3x,
};
