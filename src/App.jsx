import moon from './moon.png';
import land from './land.png';
import cat from './cat.gif';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';

function App() {
  const ref = useRef(); // grab a component - to jump around pages more quickly, it gives us access to scroll

  return (
    <div >
      <Parallax pages={4} ref={ref}>

        <ParallaxLayer
          offset={0} 
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        >
        </ParallaxLayer>

        <ParallaxLayer 
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover'
          }}>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={ () => ref.current.scrollTo(3) } // autoscroll
          >
            <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.75 }}>
          <img src= {cat}/>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={3.2}
          speed={2}
          onClick={ () => ref.current.scrollTo(0) } // autoscroll
          >
          <h2>Web development is fun!</h2>
        </ParallaxLayer>
      
      </Parallax>
    </div>
  );
}

export default App;