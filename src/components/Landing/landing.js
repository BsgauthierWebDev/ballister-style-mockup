import React from "react";
import './landing.css';

export default function Landing() {
    return (
        <div className = 'LandingPage'>
            <div className = 'intro'>
                <h1>Ballister Style</h1>
                <hr></hr>
                <h3>Model | Stylist | Creative | Ambassador</h3>
            </div>
            <div className = 'landing__about'>
                <hr></hr>
                <h2>About</h2>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className = 'about__button'>Read More</button>
            </div>
            <div className = 'landing__partnerships'>
                <hr></hr>
                <h2>Clients & Partnerships</h2>
                <hr></hr>
                <p><i>Images from past clients with links to sites</i></p>
            </div>
            <div className = 'landing__portfolio'>
                <hr></hr>
                <p>Learn more about the history of Ballister Style</p>
                <hr></hr>
                <button className = 'portfolio__button'>View Portfolio</button>
            </div>
            <div className = 'landing__instagram'>
                <hr></hr>
                <h2>Instagram <a href = 'https://www.instagram.com/rebeccalballister/?hl=en'>@rebeccalballister</a></h2>
                <hr></hr>
                <p><i>Selected pictures from Instagram with popups</i></p>
            </div>
            <div className = 'landing__contact'>
                <div className = 'landing__group'>
                    <div className = 'landing__item'>
                        <h4>Contact</h4>
                        <p>Send an email</p>
                    </div>
                    <div className = 'landing__item'>
                        <h4>Links</h4>
                        <p>About</p>
                        <p>Portfolio</p>
                        <p>Partnerships</p>
                    </div>
                    <div className = 'landing__item'>
                        <h4>Social Media</h4>
                        <p><i>Instagram Link</i></p>
                        <p><i>Facebook Link</i></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
