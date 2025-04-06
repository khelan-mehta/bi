import React, { MutableRefObject, useEffect, useRef } from 'react';



const FireCursor = () => {
  const cursorRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
//   const trailsRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    const coords = { x: 0, y: 0 };
    let overPara = false;
    let cursorText = "";
    const trailsRef: NodeListOf<HTMLDivElement & {x: number, y: number}> = document.querySelectorAll(".trail");

    trailsRef.forEach(trail => {
      trail.x = 0;
      trail.y = 0;
      trail.style.backgroundColor = "white";
    })
    
    const updateCursor = (e: MouseEvent) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
      overPara = document.elementFromPoint(coords.x, coords.y) instanceof HTMLParagraphElement;
      cursorText = overPara ? "TEST" : "";
    };

    const animateTrail = () => {
      let x = coords.x
        let y = coords.y
        // console.log(coords);
        if(cursorRef.current) {
          cursorRef.current.style.top = String(y);
        cursorRef.current.style.left = String(x);
        }
      trailsRef.forEach((trail, idx) => {
        trail.animate([{top: `${y-(trail.offsetHeight/2)}px`, left: `${x - (trail.offsetWidth/2)}px`}], {
          fill: 'forwards',
          duration: 400,
          easing: "ease-in-out"
        });
        trail.x = x;
        trail.y = y;
        // trail.style.scale = overPara ? 4 : (10 - idx)/10;
        trail.innerText = overPara ? cursorText : "";
        trail.animate([{transform: `scale(${overPara ? 4 : (10 - idx)/10})`}], {
          fill: 'forwards',
          duration: 600,
          easing: "ease-out"
        });
        // trail.style.scale = overPara && 10;
        const nxtCircle = trailsRef[idx+1] || trailsRef[0];
        x += (nxtCircle.x - x) * 0.2;
        y += (nxtCircle.y - y) * 0.2;
      })
    // // need to add a blast behaviour
    // let angleOffset = Math.floor(360 / particles.length)*(Math.PI/180); // particles should follow a projectile and shoot off at equal angles in radians
    // const radius = 600; // determines how further div's will travel
    // window.onclick = e => {
    //   // console.log(angleOffset);
    //   particles.forEach((particle, idx) => {
    //     particle.x = coords.x;
    //     particle.y = coords.y;
    //     let nx = radius*Math.cos(angleOffset*idx);
    //     let ny = radius*Math.sin(angleOffset*idx);
    //     // console.log(nx, ny);
    //     particle.x = particle.x + nx;
    //     particle.y = particle.y - ny;
    //     particle.animate([{top: `${nx}px`, left: `${ny}px`}], {
    //       fill: 'forwards',
    //       duration: 800,
    //       easing: "ease-in-out"
    //     });
    //   })
    // }
        requestAnimationFrame(animateTrail) // calls callback fn on every repaint i.e for 60hz screen it will 60 times/frames per second
      // runs the callback fn one time - pass it as recursive fn
    }

    window.addEventListener('mousemove', updateCursor);
    animateTrail();

    return () => {
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <div className="cursor" ref={cursorRef}>
      {Array.from({ length: 10 }).map((_, idx) => (
        <div
          key={idx}
          className="trail"
        ></div>
      ))}
    </div>
  );
};

export default FireCursor;
