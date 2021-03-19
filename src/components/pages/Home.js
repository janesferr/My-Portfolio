import React from "react";

function Home() {
  return (
  <>
   


    <main className="main">
        <div className="card bg-light mb-3">
            <div className="card-body">
                <h1> About Me </h1>
                <hr>
                </hr>
                <img src="./goodpic.jpeg"
                    alt="landscapeimage pic " />
                <p className="card-text">
                Web Developer & Technical Trainer A dynamic web designer and applications trainer with freelance, agency and classroom, virtual
and individual teaching experience. Develops customized curricula and designs solutions to improve productivity and implement best
practices. Collaborates with organizational stakeholders to deliver a product fully aligned with needs and expectations. Leverages
both creative and technical approaches to create best-in-class websites and training programs. Areas of Expertise Consultation ~
Client Relations ~ Compliance ~ Innovative Solutions Project Management ~ Leadership ~ Presentations ~ Cross Functional
Collaboration ~ Issue Resolution ~ Research
            
                </p>
            </div>
        </div>
    </main>
    <footer>
        <hr className="lineinFooter">
        </hr>
        <p >&copy; Copyright</p>
    </footer>
    </>
  );
}

export default Home;
