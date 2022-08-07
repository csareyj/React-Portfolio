import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/me.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					My name is Curtis Arey. 
                    I am a full stack web developer looking to build a more
					intuitive user experience on the web. I recently completed
					a full stack bootcamp from the University of Pennsylvania. 
                    Computers are my passion, more speicifally programs and webites.
                    With newly developed skills in JavaScript, CSS, React.js, and responsive web
					design, my aim is to best engage my audience for an impactful
					user experience.
				</p>
            </div>    
		</section>
	);
}

export default About;