'use client'
import {
  Animator,
  Fade,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  batch,
} from "react-scroll-motion";
import Gallery from "../Gallery";



const Clem = () => {
  return (
    <div>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <Gallery />
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
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <div>
              <p>coucou</p>
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default Clem;
