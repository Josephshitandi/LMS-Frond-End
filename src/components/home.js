import React, { useState } from 'react';

function App() {
  // State to track visibility of the paragraphs
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  // Functions to toggle visibility
  const toggleParagraph1 = () => setIsVisible1(!isVisible1);
  const toggleParagraph2 = () => setIsVisible2(!isVisible2);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div>
        <div className="container mt-5">
          <p style={{ margin: 0, fontSize: '48px', fontWeight: 'bold' }}>
            Full Stack Software Engineering
          </p>
          <p style={{  fontSize: '18px', lineHeight: '1.5' }}>
            An intensive software engineering program designed to launch your career in tech.
            <br />
            Master Front-End and Back-End technologies to become a full-stack developer.
          </p>
        </div>
        <div className="container mt-5">
          <p style={{ margin: 0, fontSize: '30px', fontWeight: 'bold' }}>
            Fast-track your journey into the tech industry
          </p>
          <p style={{  fontSize: '18px', lineHeight: '1.5' }}>
            Accelerate your career with our immersive Software Engineering Bootcamp, designed to equip you with advanced skills in coding, web development, software architecture, and collaborative tools like Git. Through hands-on projects and in-depth training, this program prepares you to tackle real-world challenges and thrive in the ever-evolving tech industry. Part Time & Full Time(Hybrid and online) options available with admissions entry guided by a technical assessment to ensure you’re ready to excel.
          </p>
        </div>
      </div>
      <div
  style={{
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px',
    backgroundColor: 'black',
    color: 'white',
    maxWidth: '1100px', // Specify a width or maxWidth
    margin: '50px auto', // Center horizontally
    // borderRadius: '10px', // Optional: Add a rounded border for aesthetics
  }}
>
  <p style={{ margin: 0, fontSize: '30px', fontWeight: 'bold' }}>Course Details</p>

        {/* First Section */}
        <div
          style={{
            backgroundColor: 'white',
            padding: '15px',
            borderRadius: '5px',
          }}
        >
          <p style={{ fontSize: '18px', lineHeight: '1.5', color: 'black' }}>
            What is Software Engineering?
          <button
            onClick={toggleParagraph1}
            style={{
              marginLeft: '10px',
              cursor: 'pointer',
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '5px 10px',
              backgroundColor: '#f0f0f0',
              fontSize: '16px',
            }}
          >
            {isVisible1 ? '-' : '+'}
          </button></p>
        </div>
        {isVisible1 && (
          <div
            style={{
              backgroundColor: 'white',
              padding: '15px',
              borderRadius: '5px',
              marginBottom: '10px',
              
            }}
          >
            <p style={{ fontSize: '18px', lineHeight: '1.5', color: 'black' }}>
              Software engineering is the process of designing, building, and maintaining software
              systems. It involves using programming, problem-solving, and engineering principles to
              create software that meets user needs and works efficiently. Essentially, it’s about
              turning ideas into functional, reliable software applications.
            </p>
          </div>
        )}

        {/* Second Section */}
        <div
          style={{
            backgroundColor: 'white',
            padding: '15px',
            borderRadius: '5px',
          }}
        >
          <p style={{ fontSize: '18px', lineHeight: '1.5', color: 'black' }}>
            Why Learn Software Engineering?
          
          <button
            onClick={toggleParagraph2}
            style={{
              marginLeft: '10px',
              cursor: 'pointer',
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '5px 10px',
              backgroundColor: '#f0f0f0',
              fontSize: '16px',
            }}
          >
            {isVisible2 ? '-' : '+'}
          </button></p>
        </div>
        {isVisible2 && (
          <div
            style={{
              backgroundColor: 'white',
              padding: '15px',
              borderRadius: '5px',
              marginBottom: '10px',
              
            }}
          >
            <p style={{ fontSize: '18px', lineHeight: '1.5', color: 'black' }}>
              Learning software engineering opens doors to various industries, offering opportunities
              to innovate and solve problems. It’s a career path with high demand, excellent
              remuneration, and continuous learning.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
