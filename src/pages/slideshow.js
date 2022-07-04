import React from "react";
import "./slideshow.css";

import boat1 from "./images/boat-party-1.jpg";
import boat2 from "./images/boat-party-2.jpg";
import welcome1 from "./images/welcome-night-1.jpg";
import welcome2 from "./images/welcome-night-2.jpg";
import industry1 from "./images/industry-night-1.jpg";
import industry2 from "./images/industry-night-2.jpg";

function SlideShow(){
    return(
        <div>

            <div class="container">

                <div class="row">
                    <div class="column">
                        <img class="demo cursor" src={welcome1} onclick="currentSlide(1)" alt="Conversations With Friends" />
                    </div>
                    <div class="column">
                        <img class="demo cursor" src={welcome2} onclick="currentSlide(2)" alt="Cinque Terre" />
                    </div>
                    <div class="column">
                        <img class="demo cursor" src={industry1} onclick="currentSlide(3)" alt="Mountains and fjords" />
                    </div>
                    <div class="column">
                        <img class="demo cursor" src={industry2} onclick="currentSlide(4)" alt="Northern Lights" />
                    </div>
                    <div class="column">
                        <img class="demo cursor" src={boat1} onclick="currentSlide(5)" alt="Nature and sunrise" />
                    </div>    
                    <div class="column">
                        <img class="demo cursor" src={boat2} onclick="currentSlide(6)" alt="Snowy Mountains" />
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default SlideShow;

/* <script>
                let slideIndex = 1;
                showSlides(slideIndex);

                function plusSlides(n) {'{'}
                    showSlides(slideIndex += n);
                {'}'}

                function currentSlide(n) {'{'}
                    showSlides(slideIndex = n);
                {'}'}

                function showSlides(n) {'{'}
                    let i;
                    let slides = document.getElementsByClassName("mySlides");
                    let dots = document.getElementsByClassName("demo");
                    let captionText = document.getElementById("caption");
                    if (n &gt; slides.length) {'{'}slideIndex = 1{'}'}
                    if (n &lt; 1) {'{'}slideIndex = slides.length{'}'}

                    for (i = 0; i &lt; slides.length; i++) {'{'}
                        slides[i].style.display = "none";
                    {'}'}

                    for (i = 0; i &lt; dots.length; i++) {'{'}
                        dots[i].className = dots[i].className.replace(" active", "");
                    {'}'}

                    slides[slideIndex-1].style.display = "block";
                    dots[slideIndex-1].className += " active";
                    captionText.innerHTML = dots[slideIndex-1].alt;
                {'}'}
            </script>*/

            /* <div class="mySlides">
                    <div class="numbertext">1 / 6</div>
                    <img src={welcome1} alt="Conversations With Friends"/>
                </div>

                <div class="mySlides">
                    <div class="numbertext">2 / 6</div>
                    <img src={welcome2} alt="Conversations With Friends"/>
                </div>

                <div class="mySlides">
                    <div class="numbertext">3 / 6</div>
                    <img src={industry1} alt="Conversations With Friends"/>
                </div>
                    
                <div class="mySlides">
                    <div class="numbertext">4 / 6</div>
                    <img src={industry2} alt="Conversations With Friends"/>
                </div>

                <div class="mySlides">
                    <div class="numbertext">5 / 6</div>
                    <img src={boat1} alt="Conversations With Friends"/>
                </div>
                    
                <div class="mySlides">
                    <div class="numbertext">6 / 6</div>
                    <img src={boat2} alt="Conversations With Friends"/>
                </div>
                    
                <a class="prev" onclick="plusSlides(-1)" href="/">❮</a>
                <a class="next" onclick="plusSlides(1)" href="/">❯</a>

                <div class="caption-container">
                    <p id="caption"></p>
                </div>
            */