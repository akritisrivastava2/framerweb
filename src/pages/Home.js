import React from "react";
import { motion } from "framer-motion";
import { ListGroup } from "react-bootstrap";
const Home = () => {
  return (
    <div className="home">
         <motion.div
        className="name"
        initial={{
          x: -300,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1 }}
      >
        Akriti Srivastava<font> </font>
      </motion.div>
      <motion.div
        class="desc"
        initial={{
          x: 300,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 1 }}
      >
        <font>FullStack</font> Developer and <font>Coding </font> Enthusiast
        
      </motion.div>
      <p className="linked">
      <ListGroup horizontal>
      <ListGroup.Item>
                  <a href="https://github.com/akritisrivastava2">GitHub</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="https://www.codechef.com/users/srivastavaakii">CodeChef </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="https://www.linkedin.com/in/akriti-srivastava-0b4b97215">Linkedin</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="https://auth.geeksforgeeks.org/user/akritisrivastava25">
                    GeeksforGeeks
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="https://leetcode.com/akritisrivastava/">LeetCode</a>
                </ListGroup.Item>
              </ListGroup>
      </p>
    </div>
  );
};

export default Home;
