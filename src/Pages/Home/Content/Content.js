import React from 'react';
import '../../../Content.css'
import image1 from '../../../img/sayed-bg2.png';
import image2 from '../../../img/about-us.png';
import Banner from '../Banner/Banner';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Content = () => {
    return (
        <div>
            <section className="top-banner-section flex-display">
                <div className="half-width ">
                    <div>
                        <h1 className='h-52 font-bold tracking-widerfont-bold tracking-wider'>Welcome Dear...!!!</h1>
                        <h3 className='h-28 font-medium font-serif'>
                            <Banner></Banner>
                        </h3>
                        <p className="heading-pra mb-8 text-xl font-mono font-semibold text-yellow-400">
                            I am a front-end web developer. I can provide clean code and pixel-perfect design. I also make websites more & more interactive with web animations. Client satisfaction is my first priority.
                        </p>
                    </div>
                    <PrimaryButton>
                        <a target="_blank" href="https://drive.google.com/file/d/1PczMe78RZNn2qS-PRE1SoO-cQZM4-60f/view?usp=sharing">Download resume</a>
                    </PrimaryButton>
                </div>
                <div className="half-widht">
                    <img className="img" src={image1} alt="" />
                </div>
            </section>
            <section className="big-dream flex-display">
                <div className="half-width">
                    <img className="img-dream" src={image2} alt="" />
                </div>
                <div className="half-width">
                    <h1 className='text-6xl font-bold mb-8 tracking-[.25em]'>LET ME <br />
                        INTRODUCE <br />
                        MYSELF</h1>
                    <p className="middle-section-pra mb-8 text-xl font-semibold text-gray-400 font-mono">
                        My name is Abu sayed. I am from Bangladesh and I study at Barisal Jamia Islamia Mahmudia Madrasha of Takmil (master's). <br /> <br />
                        I am an expert web developer. I can build a website's design and development. I have good experience in back-end development. And I am also an expert on Front-end. I always try to build my work for the user interface.

                    </p>

                    <a className="link-button" target="_blank" href="https://www.linkedin.com/in/abu-sayed-b30812189/">DOWNLOAD RESUME</a>
                </div>
            </section>
        </div>
    );
};

export default Content;