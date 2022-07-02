import React, { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Navbar } from '../navigation/Navbar';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-black px-3 md:px-0">
    {props.meta}
    <Navbar>
      <li className="mr-6 ">
        <Link href="/">
          <a className="hover:text-purple-900 hover:underline px-4">Home</a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/about/">
          <a className="hover:text-purple-900 hover:underline px-4">About</a>
        </Link>
      </li>
      <li className="mr-6">
        <a
          className="hover:text-purple-900 hover:underline px-4"
          href="https://github.com/divance-cryptos"
        >
          GitHub
        </a>
      </li>
    </Navbar>

    <div className="mx-2">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="flex h-400 flex-col items-center justify-center space-y-6 bg-gray-100 px-4 sm:flex-row sm:space-x-6 sm:space-y-0">
            <div className="font-semibold text-3xl text-purple-600">
              {AppConfig.title}
            </div>
            <Image
              src={require('../assets/astro.png')}
              alt="Astro"
              objectFit="contain"
              className="h-32 w-32"
            />
          </div>

          <div className="text-xl"></div>
        </div>
      </div>

      <div className="text-xl py-5">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by <a href="https://divance.es">Divance</a>
        <a href="https://www.freepik.com/vectors/cartoon-astronaut">
          Cartoon astronaut vector created by catalyststuff - www.freepik.com
        </a>
        {/*
         * PLEASE READ THIS SECTION
         * We'll really appreciate if you could have a link to our website
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * Thank you for your support it'll mean a lot for us.
         */}
      </div>
    </div>
  </div>
);

export { Main };
