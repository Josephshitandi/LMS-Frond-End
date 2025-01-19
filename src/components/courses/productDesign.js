import React, { useState }  from 'react';

const Product = () => {
  // State to track visibility of the paragraphs
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
  
    // Functions to toggle visibility
    const toggleParagraph1 = () => setIsVisible1(!isVisible1);
    const toggleParagraph2 = () => setIsVisible2(!isVisible2);
    const toggleParagraph3 = () => setIsVisible3(!isVisible3);
    const toggleParagraph4 = () => setIsVisible4(!isVisible4);
  
  
  return (
    <div className="container mt-4">
      <h1>Product Design</h1>
      <p>
      Learn product validation, UI/UX practices, <br />Design Sprint and the process for setting and tracking actionable metrics.
      </p>

      <h2>Course Offerings</h2>
      <p>
      Product Design Bootcamp<br />
      Full-time Remote, Part-time Remote
      </p>
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
          Who is this course for?
          
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
            If you want to build a career in software engineering, this course is for you!
            Individuals new to coding who want to build a strong foundation in software development.
            Professionals looking to transition into tech and secure roles in software engineering.
            Those with some coding experience who want to enhance their skills and become full-stack developers.
            Anyone passionate about technology and problem-solving, eager to learn both front-end and back-end development.
            </p>
          </div>
        )}
        {/* Third Section */}
        <div
          style={{
            backgroundColor: 'white',
            padding: '15px',
            borderRadius: '5px',
          }}
        >
          <p style={{ fontSize: '18px', lineHeight: '1.5', color: 'black' }}>
          What are the Course Prerequisites?
          
          <button
            onClick={toggleParagraph3}
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
            {isVisible3 ? '-' : '+'}
          </button></p>
        </div>
        {isVisible3 && (
          <div
            style={{
              backgroundColor: 'white',
              padding: '15px',
              borderRadius: '5px',
              marginBottom: '10px',
              
            }}
          >
            <ol style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px', fontSize: '18px', color: 'black' }}>Have basic computer knowledge</li>
                <li style={{ marginBottom: '10px', fontSize: '18px', color: 'black' }}>Have graduated from high school</li>
                <li style={{ marginBottom: '10px', fontSize: '18px', color: 'black' }}>Complete the application process by taking a technical assessment test</li>
                <li style={{ marginBottom: '10px', fontSize: '18px', color: 'black' }}>Have a laptop with the following specs (core i5 upwards, 8GB RAM, 500GB upwards of storage).</li>
                <li style={{ marginBottom: '10px', fontSize: '18px', color: 'black'  }}>Have stable internet access</li>
            </ol>
          </div>
        )}

        {/* Forth Section */}
        <div
          style={{
            backgroundColor: 'white',
            padding: '15px',
            borderRadius: '5px',
          }}
        >
          <p style={{ fontSize: '18px', lineHeight: '1.5', color: 'black' }}>
          Why learn Software Engineering?
          
          <button
            onClick={toggleParagraph4}
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
            {isVisible4 ? '-' : '+'}
          </button></p>
        </div>
        {isVisible4 && (
          <div
            style={{
              backgroundColor: 'white',
              padding: '15px',
              borderRadius: '5px',
              marginBottom: '10px',
              
            }}
          >
            <p style={{ fontSize: '18px', lineHeight: '1.5', color: 'black' }}>
            Practical Hands-on Learning– Get job-ready with practical, hands-on learning. You’ll learn the in-demand market languages and skills, labs, and real-world portfolio development.
            Technical Mentorship Schedule – 1:1s with your instructor to work on technical concepts, plan out your pacing or check-in about your program milestones.
            Learn in Community – You may be learning online/hybrid but you’re not alone. You can schedule 1:1s with your instructor for added guidance
            Career Coaching and Graduate Support– Receive career coaching and job-hunting support for up to 12 months post graduation
            </p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Product;
