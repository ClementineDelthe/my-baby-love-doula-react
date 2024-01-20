"use client";
// import dynamic from "next/dynamic";
// const Animator = dynamic(
//   import("react-scroll-motion").then((it) => it.Animator),
//   { ssr: false }
// );

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
// import {
//   Animator,
//   ScrollContainer,
//   ScrollPage,
//   batch,
//   Fade,
//   FadeIn,
//   FadeOut,
//   Move,
//   MoveIn,
//   MoveOut,
//   Sticky,
//   StickyIn,
//   StickyOut,
//   Zoom,
//   ZoomIn,
//   ZoomOut,
// } from "react-scroll-motion";
import Gallery from "../Gallery";

const Clem = () => {

  return (
    <div>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Move(), Sticky())}>
            {/* <Gallery /> */}
            <p>CLEM CLEM CLEM </p>
          </Animator>
        </ScrollPage>
        {/* <ScrollPage> */}
          {/* <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <div>
              <p>coucou</p>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <div>
              <p>coucou</p>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <div>
              <p>coucou</p>
            </div>
          </Animator> */}
        {/* </ScrollPage> */}
      </ScrollContainer>
    </div>
  );
};

export default Clem;
