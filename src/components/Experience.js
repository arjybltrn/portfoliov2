import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import '../css/Nav.css'

const exp = [ 
        {
            companyName: "General Assembly",
            jobTitle: "Software Engineer Fellow",
            location: "Remote",
            jobDesc: [ 
                        "Created full-stack applications with comprehensive functionality, including Create, Read, Update, and Delete (CRUD) operations and RESTful API capabilities.",
                        "Utilized JavaScript and React for front-end web development, incorporating third-party APIs seamlessly.", 
                        "Employed Python and Django for back-end development, utilizing PostgreSQL, MongoDB, and Express for efficient data management.",
                        "Successfully completed over 450 hours in the intensive Software Engineering Immersive program."
        ],
            date: "March 2023 - May 2023"
    
        },
        {
            companyName: "Madison Group",
            jobTitle: "Customer Care Technician",
            location: "Toronto, ON",
            jobDesc: [ 
                        "Consistently upheld a professional demeanor while successfully fulfilling work orders and service calls as the company's representative.",
                        "Excelled in inspections, diagnoses, repairs, and documentation, emphasizing strong problem-solving and attention to detail.", 
        ],
            date: "March 2022 - March 2023"
    
        },
        {
            companyName: "R-MAC Solutions, Inc.",
            jobTitle: "Junior Carpenter",
            location: "Toronto, ON",
            jobDesc: [ 
                        "Applied a wide range of effective problem-solving approaches and tools to consistently achieve project deadlines and deliver high-quality results.",
                        "Exhibited strong organization in project planning, adhering to codes and safety, enhancing client satisfaction.", 
        ],
            date: "October 2021 - February 2022"
    
        },
        {
            companyName: "G Hirsch Renovations",
            jobTitle: "Apprentice Carpenter",
            location: "Toronto, ON",
            jobDesc: [ 
                        "Proficiently organized job sites, efficiently gathering tools and materials, while upholding high standards of cleanliness and safety.",
                        "Aided carpenters in structure installation, displayed problem-solving skills, and maintained workspace.", 
        ],
            date: "June 2021 - November 2021"
    
        },
        {
            companyName: "UNIQLO Canada",
            jobTitle: "Assistant Manager",
            location: "Toronto, ON",
            jobDesc: [ 
                        "Successfully achieved daily store sales target of 100% through strategic planning and effective sales management.",
                        "Oversaw store operations, prioritizing safety and excellent customer service.", 
        ],
            date: "August 2017 - July 2020"
    
        },
    
    ]

    // function ExperienceList  ({ data, renderItem, renderEmpty }) {
    //     return !data.length ? ( renderEmpty
    //         ) : ( 
    //             <div>{data.map((item) => (
    //                 <p key={item.companyName}>
    //                     {renderItem(item)}
    //                 </p>
    //             ))}    
    //             </div>
    //         )
    // }

    // export function Experience() {
    //     return (
    //       <div>
    //          <Nav />
    //          <h1>Professional Experiences</h1>
    //         <ExperienceList 
    //             data={exp}
    //             renderEmpty={<p>this list is empty</p>}
    //             renderItem={item => 
                
    //             <div className='job'>
    //                 <h1>{item.jobTitle} </h1>
    //                <h2>{item.companyName} </h2> 
    //                 <p>{item.jobDesc}</p>
    //                <h3>{item.location}</h3> 
    //                <h3> {item.date}</h3>
    //             </div>} />
    //             <Footer />
    //     </div>
    //     )
    //   }

   
    export function Experience() {
        return (
          <div className='App'>

            <div className='navbar'>
              <Nav />
            </div>
           
            {exp.map((experience, index) => (
              <div key={index}>
                <h3>{experience.companyName}</h3>
                <h4>{experience.jobTitle}</h4>
                <h5>{experience.location}</h5>
                <ul>
                  {experience.jobDesc.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
                <p>{experience.date}</p>
              </div>
            ))}
            <div className='footer'>
              <Footer/>
            </div>
          
          </div>
        );
      }