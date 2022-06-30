import React, { ReactNode } from 'react';

import Image from 'next/image';

import divancelogo from '../assets/divancelogo.png';

type INavbarProps = {
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <nav className="w-full py-4 bg-white shadow">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
      <nav>
        <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
          <li>
            <Image
              src={divancelogo}
              alt="divancelogo"
              width="40px"
              height="40px"
            />
          </li>
          {props.children}
        </ul>
      </nav>

      <div className="flex items-center text-lg no-underline text-white pr-6">
        <a className="" href="#">
          <i className="fab fa-facebook"></i>
        </a>
        <a className="pl-6" href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a className="pl-6" href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a className="pl-6" href="#">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </nav>
);

export { Navbar };
