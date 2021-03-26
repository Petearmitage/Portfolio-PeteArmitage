import React from 'react';
import './Home.css';


export default function Home() {
    return (
        <div className="home">
            <div className="homeWrapper">
                <h1><span style={{textDecoration:"line-through"}}>Pete is</span> <em>I am</em> a designer and an artist who is deeply in love with storytelling.</h1>
                <div className="homeLine"></div>
                <p className="homeShortBio">I do UX design, content strategy and art direction.<br/>
                Currently I am available for freelance work.</p>
                <a className="ctaLink" href="mailto:someone@yoursite.com">get in touch</a>
                <ul className="profileLinkList">
                    <a href="https://www.linkedin.com/in/pete-armitage1/" target="_blank" rel='noreferrer noopener'><img src="/akar-icons_linkedin-fill.svg" alt="linkedin"/></a>
                    <a href="https://twitter.com/petearmitage3" target="_blank" rel='noreferrer noopener'>
                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.643 2.93699C22.808 3.30699 21.911 3.55699 20.968 3.66999C21.941 3.08778 22.669 2.17145 23.016 1.09199C22.1019 1.63497 21.1014 2.01718 20.058 2.22199C19.3564 1.47285 18.4271 0.976312 17.4143 0.809459C16.4016 0.642607 15.3621 0.814777 14.4572 1.29924C13.5524 1.7837 12.8328 2.55335 12.4102 3.48869C11.9875 4.42403 11.8855 5.47274 12.12 6.47199C10.2677 6.37898 8.45564 5.89753 6.80144 5.05889C5.14723 4.22025 3.68785 3.04315 2.51801 1.60399C2.11801 2.29399 1.88801 3.09399 1.88801 3.94599C1.88757 4.71298 2.07644 5.46823 2.43789 6.14472C2.79934 6.82121 3.32217 7.39802 3.96001 7.82399C3.22029 7.80045 2.49688 7.60057 1.85001 7.24099V7.30098C1.84994 8.37673 2.22204 9.41936 2.90319 10.252C3.58434 11.0846 4.53258 11.6559 5.58701 11.869C4.9008 12.0547 4.18135 12.0821 3.48301 11.949C3.78051 12.8746 4.36001 13.684 5.14038 14.2639C5.92075 14.8438 6.86293 15.1652 7.83501 15.183C6.18484 16.4784 4.1469 17.1811 2.04901 17.178C1.67739 17.1781 1.30609 17.1564 0.937012 17.113C3.06649 18.4822 5.54535 19.2088 8.07701 19.206C16.647 19.206 21.332 12.108 21.332 5.95199C21.332 5.75199 21.327 5.54998 21.318 5.34999C22.2293 4.69096 23.0159 3.87488 23.641 2.93999L23.643 2.93699Z" fill="white"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/peopleclub/?hl=en" target="_blank" rel='noreferrer noopener'><img src="/bx_bxl-instagram-alt.svg" alt="instagram"/></a>
                </ul>
                <img className="homeImage" src="https://res.cloudinary.com/dc5skapdx/image/upload/v1616506857/Profile_photo_awu3du.jpg" alt="Pete"/>
            </div>
           
                <svg style={{marginTop:"37px", marginBottom:"8px"}} width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z" fill="#C4C4C4"/>
                </svg>

                <svg width="2" height="103" viewBox="0 0 2 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 102.001L1 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                <p className="brands">Some brands I have worked with</p>

                <div className="brandLogoWrap">
                    <a href="https://iemusic.co.uk/" target="_blank" rel='noreferrer noopener'><img src="/brandsImages/ie_music.png" alt="ie music"/></a>

                    <a href="https://www.crashrecords.co.uk/" target="_blank" rel='noreferrer noopener'><img src="/brandsImages/crash records.png" alt="crach records"/></a>

                    <a href="https://www.guitarcenter.com/" target="_blank" rel='noreferrer noopener'><img src="/brandsImages/guitar center.png" alt="guitar center"/></a>

                    <a href="https://www.kissyourears.com/" target="_blank" rel='noreferrer noopener'><img src="/brandsImages/kiss your ears.png" alt="kiss your ears"/></a>

                    <a href="https://www.azzurrigroup.co.uk/" target="_blank" rel='noreferrer noopener'><img src="/brandsImages/Azzurri Group.png" alt="azzuri group"/></a>

                    <a href="https://salamisocialclub.de/" target="_blank" rel='noreferrer noopener'><img src="/brandsImages/Salami Social Club.png" alt="salami social club"/></a>
                </div>

                <p className="copyright">© Pete Armitage 2021</p>
        </div>
    )
}