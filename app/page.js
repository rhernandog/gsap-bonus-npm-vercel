'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import useIsomorphicLayoutEffect from '../helpers/isomorphicEffect';

const HomePage = () => {
  const container = useRef();
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: '.box-c',
        pin: true,
        start: 'center center',
        end: '+=300',
        markers: true,
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <main className="home" ref={container}>
      <div className="header">
        <h1 className="title">ScrollSmoother NextJS App Folder</h1>
        <p>
          Simple example for setting up GSAP ScrollSmoother in a NextJS App
          using the the experimental{' '}
          <strong>
            <i>App</i>
          </strong>{' '}
          folder
        </p>
      </div>
      <div className="box box-a" data-speed="0.5">
        a
      </div>
      <div className="box box-b" data-speed="0.8">
        b
      </div>
      <div className="box box-c" data-speed="1.5">
        c
      </div>
      <div className="line"></div>
    </main>
  );
};

export default HomePage;
