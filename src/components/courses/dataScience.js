import React, { useState }  from 'react';

const Data = () => {
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
      <h1>Data Science</h1>
      <p>
      Learn In-demand data skills & become a Data Expert,<br /> from Data Analysis, Data Visualization to Advance Data Science,<br /> AI & Machine Learning.
      </p>

      <h2>Course Offerings</h2>
      <p>
        Data Science Bootcamp<br />
        Full-time Remote, Full-time Hybrid, Part-time Remote<br />
        Data Analytics with Excel and Power BI<br />
        Part-time Remote<br />
        Data Visualization with Python<br />
        Part-time Remote
      </p>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div>
        <div className="container mt-5">
          <p style={{ margin: 0, fontSize: '48px', fontWeight: 'bold' }}>
          Data Science Bootcamp
          </p>
          <p style={{  fontSize: '18px', lineHeight: '1.5' }}>
          An intensive Data Science Bootcamp for those looking to upskill or launch a career in Data Science. Master Data Analytics, Python, Machine Learning and AI.
          </p>
        </div>
        <div className="container mt-5">
          <p style={{ margin: 0, fontSize: '30px', fontWeight: 'bold' }}>
          Acquire in-demand data skills that are transforming businesses and industries today
          </p>
          <p style={{  fontSize: '18px', lineHeight: '1.5' }}>
          If you aspire to be a Data Scientist, Data Analyst, or Machine Learning Engineer, this program is perfect for you.

Our comprehensive Data Science course will guide you from beginner to mid-level, covering essential topics such as Python for Data Science, data cleaning, analysis, visualization, and machine learning. You’ll gain hands-on experience through practical projects and receive mentorship from industry experts.

By the end of the program, you’ll be an exceptionally skilled professional, ready to tackle real-world challenges using the power of data!
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
          What is Data Science?
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
            

            Data Science is an interdisciplinary field that deploys algorithms, and other scientific methods
             and processes to acquire insights and knowledge from data. Data Scientists are equipped with the
              knowledge of how to use data, tell a story, and derive insights for businesses. Many industries 
              are now leveraging data for decision-making in their day-to-day operations and forecasting.
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
            

            Aspiring data scientists and data analysts who are eager to harness the power of data to drive decisions.
            Ongoing university student/graduate who has taken a course that has math and statistics concepts and/or IT related related courses.
            Working professionals who work with data e.g fintech, banking, research
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
                <li style={{ marginBottom: '10px', fontSize: '18px', color: 'black' }}>Have a basic understanding or strong background in math & statistics concepts.</li>
                <li style={{ marginBottom: '10px', fontSize: '18px', color: 'black' }}>Have a university/college education (ongoing or graduated).</li>
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
          Why learn Data Science?
          
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
            

            In-demand Skill Set: Data science is at the forefront of the digital age. As businesses increasingly rely on data for decision-making, professionals with data science skills are in high demand across various industries.
            Career Opportunities: Learning data science opens up a wide array of career opportunities, ranging from data analyst and machine learning engineer to data scientist and AI specialist
            Innovation: Whether in healthcare, finance, marketing, or other fields, data science plays a pivotal role in driving innovation and creating new possibilities.
            High Earning Potential: Data scientists are often among the top earners in the technology sector.
            Global Impact: Data science has the potential to address global challenges, such as healthcare optimization, climate change analysis, and more. By learning data science, you can contribute to solving critical issues on a global scale.
            </p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Data;
