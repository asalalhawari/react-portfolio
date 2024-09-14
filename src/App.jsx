import { useState } from 'react'
import './App.css'
 import picture from  "./assets/picture.jpeg"
 import pic1 from "./assets/1.jpg"
 import pic2 from "./assets/2.jpg"
 import pic3 from "./assets/3.jpg"
 import { FaLinkedin } from "react-icons/fa";
 import { FaFacebook } from "react-icons/fa";
 import { FaInstagramSquare } from "react-icons/fa";
 import { FaDiscord } from "react-icons/fa";





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header class="header">
        <a href="#home" class="logo">Asal
            <span>AL_hawari</span></a>

        <i class='bx bx-menu' id="menu-icon"></i>


        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#Services">Services</a>
            <a href="#projects">projects</a>
            <a href="#skills"> skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
        </nav>

    </header>
    <section class="home" id="home">

        <div class="home-img">
            <img src={picture} alt=""/>
        </div>
        <div class="home-content">
            <h3>Hi</h3>
            <h1>It's <span>Asal</span></h1>
            <h3 class="text-animation">
                I'm a Delovper<span></span>
            </h3>
            <p>
                currently training as a programmer at Orange Coding Academy in Aqaba Governorate.
                I'm passionate about web development and continually enhancing my skills in [mention key skills like
                HTML, CSS, JavaScript, php].
                I look forward to contributing to exciting projects and growing in the field of technology.
            </p>
            <div class="social-icons">
                <a href="https://www.linkedin.com/in/asal-alhawari-0384ba307/"> 
                <FaLinkedin/></a>
                <a href="#"><FaFacebook/></a>
                <a href="#"><FaInstagramSquare /></a>
                <a href="#"><FaDiscord/></a>
            </div>
            <a href="#" class="btn">HIER</a>
        </div>
    </section>
    <section class="Services" id="Services">
        <h2 class="heading">Services</h2>


        <div class="Services-container">
            <div class="Services-box">
                <i class='bx bx-palette'></i>
                <h3>Web Development</h3>
                <p>Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Sapiente vitae at nisi ea, explicabo
                    reiciendis!</p>


                <a href="#" class="btn">Learn More</a>
            </div>
            <div class="Services-box">
                <i class='bx bx-code-alt'></i>
                <h3>Frontend Development</h3>
                <p>Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Sapiente vitae at nisi ea, explicabo
                    reiciendis!</p>
                <a href="#" class="btn">Learn More</a>
            </div>
            <div class="Services-box">
                <i class='bx bx-code'></i>
                <h3>Graphic Design</h3>
                <p>Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Sapiente vitae at nisi ea, explicabo
                    reiciendis!</p>
                <a href="#" class="btn">Learn More</a>
            </div>
        </div>
    </section>

    <section class="projects" id="projects">
        <h2 class="heading">Projects</h2>


        <div class="projects-container">

            <div class="projects-box">
                <img src={pic1} alt=""/>
                <div class="projects-info">
                    <h4>Travello</h4>
                    <p>Travello is a Multipurpose travel and tour booking, you can book edit, and update
                        flights,admin dashboard with complete overview of all users,admins,flights,tickets,seats,profit and messages
                        all-in-one.</p>
                    <a href="#"><i class="bx 
                        bx-link"></i></a>
                </div>
            </div>
            <div class="projects-box">
                <img src={pic2} alt=""/>
                <div class="projects-info">
                    <h4>Property Nexus</h4>
                    <p>Property Nexus is a comprehensive web application designed to 
                        simplify the process of advertising, inquiring, and
                        purchasing properties. Whether you're a property owner
                         looking to list your property, a buyer searching for the 
                         perfect home, or an agent managing multiple listings.</p>
                    <a href="#"><i class="bx 
                        bx-link"></i></a>
                </div>
            </div>
            <div class="projects-box">
                <img src={pic3} alt=""/>
                <div class="projects-info">
                    <h4>Task Management System</h4>
                     <p>A web application is designed to help you 
                        manage your tasks efficiently
                        and stay organized.</p>
                    <a href="#"><i class="bx 
                        bx-link"></i></a>
                </div>
            </div>
        </div>
    </section>

    <section class="skills" id="skills">
        <h2 class="heading">Skills</h2>
        <div class="skill-bars">
            <div class="bar">
                <div class="info">
                    <span>HTML</span>
                </div>
                <div class="progress-line html">
                    <span></span>
                </div>
            </div>
            <div class="bar">
                <div class="info">
                    <span>CSS</span>
                </div>
                <div class="progress-line css">
                    <span></span>
                </div>
            </div>
            <div class="bar">
                <div class="info">
                    <span>JavaScript</span>
                </div>
                <div class="progress-line javascript">
                    <span></span>
                </div>
            </div>
            <div class="bar">
                <div class="info">
                    <span>React</span>
                </div>
                <div class="progress-line react">
                    <span></span>
                </div>
            </div>
            <div class="bar">
                <div class="info">
                    <span>MySQL</span>
                </div>
                <div class="progress-line mysql">
                    <span></span>
                </div>
            </div>
            <div class="bar">
                <div class="info">
                    <span>Laravel</span>
                </div>
                <div class="progress-line laravel">
                    <span></span>
                </div>
            </div>
        </div>
    </section>
    <section class="timeline-section" id="education">
        <h2 class="heading">Education</h2>
        <div class="timeline-items">
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2019</div>
                <div class="timeline-content">
                    <h3>High School</h3>
                    <p></p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2024</div>
                <div class="timeline-content">
                    <h3> Orange Coding Academy | May 2024 - Dec 2024</h3>
                    <p>Full-Stack Web Developer</p>
                </div>
            </div>

        </div>
    </section>
    <section class="contact" id="contact">

        <h2 class="heading">Contact <span>Me</span></h2>

        <form action="#">

            <div class="input-box">
                <input type="text" placeholder="Full Name"/>
                <input type="email" placeholder="Email"/>
            </div>

            <div class="input-box">
                <input type="number" placeholder="Phone Number"/>
                <input type="text" placeholder="Subject"/>
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message">
          </textarea>
            <input type="submit" value="Send Message" class="btn"/>

        </form>

    </section>

    <footer class="footer">
        <div class="social">
            <a href="#"><FaLinkedin class="footer-icons"/></a>
            <a href="#"><FaFacebook class="footer-icons"/></a>
            <a href="#"> <FaInstagramSquare class="footer-icons" /></a>
            <a href="#"><FaDiscord class="footer-icons"/></a>
        </div>

        <ul class="list">
            <li>
                <a href="#">FAQ</a>
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">About Me</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
            <li>
                <a href="#">Privacy Policy </a>
            </li>
        </ul>
        <p class="copyright">
            @Asal AL_hawari | All Rights Reserved
        </p>
    </footer>
    </>
  )
}

export default App
