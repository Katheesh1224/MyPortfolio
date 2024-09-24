import '../App.css';
import React, { useState, useEffect } from 'react';

const rotatingTexts = ["beautiful graphics", "functional websites", "working mobile apps"]; 

const Land = () =>{

    useEffect(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
        setTimeout(() => {
            preloader.style.transition = 'opacity 1.0s ease';
            preloader.style.opacity = '0';

            setTimeout(() => {
            preloader.remove();
            }, 500); // Matches the 'slow' fade out timing (500ms)
        }, 100); // Delay before starting the fade out
        }
    }, []);

    const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3000); // Rotation speed in milliseconds

    return () => clearInterval(interval);
  }, []);   
   
    return(
        <div>
            <div id="preloader"></div>

            <section id="hero">
                <div class="hero-container">
                    <div class="wow fadeIn">
                        <div class="hero-logo">
                        {/* <img src="../Image/OIP.jpeg" alt="" /> */}
                        </div>
                        <h1>Hi there</h1>
                        <h1>It's me GOBIKATHEESH</h1>
                        <h2>I create <span class="rotating">{rotatingTexts[currentTextIndex]}</span></h2>
                        <div class="actions">
                            <a href="#about" class="btn-get-started">Get Strated</a>
                            <a href="#services" class="btn-services">Our Services</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )

}

export default Land;