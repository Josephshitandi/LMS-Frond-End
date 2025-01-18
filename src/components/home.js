import React, { useState } from 'react';

function App() {
  // States to track visibility for each paragraph
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  // Functions to toggle visibility
  const toggleParagraph1 = () => {
    setIsVisible1(!isVisible1);
  };

  const toggleParagraph2 = () => {
    setIsVisible2(!isVisible2);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div>
        <div className="container mt-5">
          <p style={{ margin: 0, fontSize: '48px', fontWeight: 'bold' }}>
            Full Stack Software Engineering
          </p>
          <p style={{ marginTop: '20px', fontSize: '18px', lineHeight: '1.5' }}>
            An intensive software engineering program designed to launch your career in tech.
            <br />
            Master Front-End and Back-End technologies to become a full-stack developer.
          </p>
        </div>
        <div className="container mt-5">
          <p style={{ margin: 0, fontSize: '30px', fontWeight: 'bold' }}>
            Fast-track your journey into the tech industry
          </p>
          <p style={{ marginTop: '20px', fontSize: '18px', lineHeight: '1.5' }}>
            Accelerate your career with our immersive Software Engineering Bootcamp, designed to equip you with advanced skills in coding, web development, software architecture, and collaborative tools like Git. Through hands-on projects and in-depth training, this program prepares you to tackle real-world challenges and thrive in the ever-evolving tech industry. Part Time & Full Time (Hybrid and online) options available with admissions entry guided by a technical assessment to ensure you’re ready to excel.
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
        }}
      >
        <p style={{ margin: 0, fontSize: '30px', fontWeight: 'bold' }}>
          Course Details
        </p>
        <div style={{ backgroundColor: 'white', marginTop: '20px', padding: '15px' }}>
          <p style={{ fontSize: '18px', lineHeight: '1.5', color: 'black' }}>
            What is Software Engineering?
          </p>
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
          </button>
        </div>
        {isVisible1 && (
          <div style={{ backgroundColor: 'white', marginTop: '20px', padding: '15px' }}>
            <p style={{ fontSize: '18px', lineHeight: '1.5', color: 'black' }}>
              Software engineering is the process of designing, building, and maintaining software systems. It involves using programming, problem-solving, and engineering principles to create software that meets user needs and works efficiently. Essentially, it’s about turning ideas into functional, reliable software applications.
            </p>
          </div>
        )}

        <div style={{ backgroundColor: 'white', marginTop: '20px', padding: '15px' }}>
          <p style={{ fontSize: '18px', lineHeight: '1.5', color: 'black' }}>
            Why Choose Software Engineering?
          </p>
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
          </button>
        </div>
        {isVisible2 && (
          <div style={{ backgroundColor: 'white', marginTop: '20px', padding: '15px' }}>
            <p style={{ fontSize: '18px', lineHeight: '1.5', color: 'black' }}>
              Software engineering is a highly sought-after career with excellent growth opportunities. It provides the skills to solve real-world problems, create innovative solutions, and build a sustainable, rewarding career.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
