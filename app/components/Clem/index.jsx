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
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.124952567947!2d-0.5424504237519604!3d44.7782578789438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e745720d09%3A0x2be563342a7d92c3!2sMy%20baby%20love%20-%20Doula!5e0!3m2!1sfr!2sfr!4v1707322023998!5m2!1sfr!2sfr" width="200" height="350" className="rounded-xl" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    </div>
  );
};

export default Clem;
