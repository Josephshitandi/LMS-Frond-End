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
           Product Design Bootcamp
          </p>
          <p style={{  fontSize: '18px', lineHeight: '1.5' }}>
            Intensive program for aspiring product designers. 
            Learn the complete design process, from user research and ideation to creating user-centered digital products
          </p>
        </div>
        <div className="container mt-5">
          <p style={{ margin: 0, fontSize: '30px', fontWeight: 'bold' }}>
            Fast-track your journey into the tech industry
          </p>
          <p style={{  fontSize: '18px', lineHeight: '1.5' }}>
            The Product Design program is your gateway to an exciting world of digital product design, focusing on creating intuitive experiences for websites, mobile applications, and computer programs.

            This holistic course covers the entire UX and UI process, empowering you to design user-centered solutions. While coding knowledge is not required, we teach HTML and CSS basics to enhance your design capabilities.

            Whether you’re a high school graduate exploring future career options, a university graduate enhancing your employability, or a working professional seeking a career shift, this program equips you with essential skills to excel in the fast-growing field of Product design.
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
          What is Product Design?
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
            

            Product design is the process of creating and developing a new product or improving an existing one to meet user needs and solve problems. 
            It involves a combination of various disciplines, including research, engineering, marketing, and aesthetics. 
            The goal of product design is to enhance user experience while ensuring functionality, usability, and market viability.
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
              This course is designed for beginners, no previous UI/UX or design experience is required.

              High School Graduates: Ideal for recent high school graduates looking to explore a career in design and gain early experience in a promising field.
              University Graduates: Perfect for recent university graduates seeking to bridge the gap between academic knowledge and practical, job-ready skills.
              Professionals interested in changing their career and looking for a fast tech skill to learn or who want to expand their skill set and understanding of product design (Marketing, Graphic Design, Engineering, Product Managers)
              Front End Web developers who are looking to improve their skills in design
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
          Why learn Product Design ?
          
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
            

              High Demand for Skills: Skilled product designers are increasingly sought after by companies focused on user experience, leading to strong job prospects in various industries.
              Diverse Career Opportunities: Product design skills open doors to various career paths, including UI/UX design, industrial design, and graphic design, across multiple sectors like technology, consumer goods, and healthcare.
              Creativity and Innovation: Learning product design encourages creative thinking and problem-solving, allowing you to bring innovative ideas to life and make a meaningful impact.
              User-Centered Approach: Understanding user needs and experiences is central to product design, enabling you to create products that resonate with consumers and enhance their lives.
              Portfolio Development: As you work on projects, you’ll build a strong portfolio that showcases your skills and creativity, making you more attractive to potential employers.
            </p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Product;
