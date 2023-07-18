import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Row,Button} from 'react-bootstrap';  
import { motion } from "framer-motion";


const Projects = () => {
  return(<div className="cardnew">
    <Card style={{ width: '40rem' }} className="border border-primary border-4">
      <Card.Body>
        <Card.Title>AKIIMOVIES | MERN STACK Project</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Built MERN-stack movie ticket booking applications from scratch.</Card.Subtitle>
        <Card.Text>
        Tech used: ReactJs | NodeJs | MongoDb | Express | Redux Toolkit | Stripe
payment | Github 
 <p>JWT Authentication and Password Hashing using BCrypt.Ant Design Library
for UI Components, Separate stylesheets overriding ANTD Components, and
reusable classes.</p><p>
Separate UserInterfaces for Users, Admins, and Theatre Owners,Admin can
upload the movies and allow theatre owners to add shows forthe movies ,users
can book ticket and make payment using stripe payment gateway</p>
        </Card.Text>
        <Card.Link href="https://akiimovie.onrender.com/login">LIVE</Card.Link>
        <Card.Link href="https://github.com/akritisrivastava2/movieticketapp">CODE</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '40rem' }} className="border border-primary border-4">
      <Card.Body>
        <Card.Title>SPOTIFY CLONE | FRONTEND PROJECT</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">It is frontend clone of basic music player.</Card.Subtitle>
        <Card.Text>
        Tech used: HTML | CSS | JavaScript | Github
        <p>
        Spotify clone aims to mimic the functionality and userinterface of a basic music
player.Play,pause,forward,backward buttons are added with full functionality.
        </p>
        </Card.Text>
        <Card.Link href="https://akritisrivastava2.github.io/spotifyclone/">LIVE</Card.Link>
        <Card.Link href="https://github.com/akritisrivastava2/spotifyclone">CODE</Card.Link>
      </Card.Body>
    </Card></div>
  );
};

export default Projects;
