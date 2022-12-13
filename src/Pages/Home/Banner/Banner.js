import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div>
            <TypeAnimation
                // Same String at the start will only be typed once, initially
                sequence={[
                    `Hi, It's Me Abu Sayed.`,
                    1000,
                    `Hi, I'm a jr. front-end web developer.`,
                    1000,
                    `Hi, I have basic knowledge of back-end web development.`,
                    1000,
                    `Hi, If You Want me for your projects please contact me.`,
                    1000,
                ]}
                speed={30} // Custom Speed from 1-99 - Default Speed: 40
                style={{ fontSize: '2em' }}
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
        </div>
    );
};

export default Banner;