import React, { useState }  from 'react';

const Cyber = () => {
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
      <h1>Cyber Security</h1>
      <p>
      Your journey to becoming a cybersecurity expert starts here,<br />
       beginner to advance level training available.
      </p>

      <h2>Course Offerings</h2>
      <p>
        Introduction to Cybersecurity<br />
        Full-time Remote, Part-time Remote<br />
        Cybersecurity Bootcamp<br />
        Full-time Remote, Part-time Remote<br />
      </p>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div>
        <div className="container mt-5">
          <p style={{ margin: 0, fontSize: '48px', fontWeight: 'bold' }}>
          Introduction to Cybersecurity
          </p>
          <p style={{  fontSize: '18px', lineHeight: '1.5' }}>
          An introductory course designed to prepare you for the Cybersecurity bootcamp.
           Learn the building blocksof cybersecurity, networking & IT.
          </p>
        </div>
        <div className="container mt-5">
          <p style={{ margin: 0, fontSize: '30px', fontWeight: 'bold' }}>
          Your pathway to a rewarding career in Cybersecurity starts here
          </p>
          <p style={{  fontSize: '18px', lineHeight: '1.5' }}>
          Are you new to the world of cybersecurity as a professional, 
           or just interested in getting started in this industry? This introductory course is for you.

          Learners explore topics from cyber threats to cyber
           intelligence while gaining practical insight into governance, risk & compliance.
            At the end of the course, you will earn a 
          certificate of completion from Moringa and be well-prepared to take up 
          the professional certification exams for beginners such as the (ISC)², Network+, CompTIA A+ etc.

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
          What is Cybersecurity?
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
            Cybersecurity refers to the practice of protecting systems, networks,
            and programs from digital attacks, unauthorized access, damage, or theft. 
            It encompasses a wide range of technologies, processes, and practices designed to safeguard computers,
            servers, mobile devices, electronic systems, networks, and data from cyber threats.
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
            If you are looking to start your career in cybersecurity from scratch you qualify. No one is left out!

            High School Graduates: Ideal for recent high school graduates looking to explore and gain early experience in a promising field.
            University Ongoing Students & Graduates: seeking to bridge the gap between academic knowledge and practical, job-ready skills in cybersecurity.
            Professionals interested in changing their careers to cybersecurity.
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
                <li style={{ marginBottom: '10px', fontSize: '18px', color: 'black' }}>Have basic IT/computer skills.</li>
                <li style={{ marginBottom: '10px', fontSize: '18px', color: 'black' }}>Proficiency in English – both spoken and written</li>
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
          Why learn Cybersecurity?
          
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
            Growing Demand for Cybersecurity Professionals: As cyber threats become more prevalent, there is a high demand for talent, leading to numerous job opportunities and career growth potential.
            Foundation for Further Specialization: Starting with cybersecurity fundamentals can pave the way for more specialized areas within the field, such as ethical hacking, threat intelligence, or security architecture.
            Global Relevance: Cybersecurity knowledge is applicable worldwide, making it easier to find job opportunities in various countries and industries.
            Career readiness: explore job trends and position yourself for a prospective job as the cybersecurity industry continues to grow.
            Upskill in a new field: Learn what cybersecurity is and its potential impact on you & understand the most common threats, attacks, and vulnerabilities. Also, gain insights into how businesses protect their operations from attacks.
            </p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Cyber;
