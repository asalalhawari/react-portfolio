import React from 'react';

const Skills = () => {
  return (
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
  );
};

export default Skills;
