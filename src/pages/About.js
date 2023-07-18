import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="about">
        <h2>About</h2>
        <>
          <article>
            <p>
            My name is Akriti Srivastava .I am from Lucknow .I completed my secondary and higher secondary education from Red Rose School (Lucknow).
            <b>I am currently pursuing a <ul>B.Tech in Computer Science and Engineering (CSE)(final year)</ul> from Madan Mohan Malaviya University of Technology </b>
             while nurturing my passion for coding. <b><ul>My current cgpa is 8.2.</ul></b></p>
            <p>
            Additionally, my experience extends to full-stack MERN projects, where I have harnessed my skills as a web developer. My main programming skills encompass C and C++, while my development expertise spans HTML, CSS, JavaScript, MongoDB, React, and frameworks like Node.js and Express. Moreover, I possess additional proficiency in MySQL and Git, enhancing my abilities to deliver efficient and collaborative solutions.
            </p>
            
            
              
            <h2>SKILLS</h2>
            <p>
              <dl>
                <dt>
Languages:
                </dt>
                <dd>C , C++ ,HTML ,CSS ,JAVASCRIPT ,JAVA</dd>
                <dt>Lib/Frameworks/Database:
</dt><dd>ReactJS ,NodeJS ,MongoDb ,MySQL</dd>
<dt>Tools:</dt><dd>Github</dd>
              </dl>
            </p>
            
          </article>
        </>
      </div>
    </>
  );
};

export default About;
