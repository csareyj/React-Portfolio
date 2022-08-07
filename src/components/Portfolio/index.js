import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'JavaScript Quiz',
			description:
				'A simple Javascript Quiz testing your knowledge of basic functions and syntax.',
			image: 'JavascriptQuiz.JPG',
			technologies: [
				'HTML/CSS',
				'JavaScript'
			],
			github: 'https://github.com/csareyj/Javascript-Quiz',
			deployed: 'https://csareyj.github.io/Javascript-Quiz/',
		},
		{
			name: 'Day Planner',
			description:
				'A scheduling app used to help you keep track of your day with vibrant colors!',
			image: 'DayPlanner.JPG',
			technologies: [
				'HTML/CSS',
				'JavaScript'
			],
			github: 'https://github.com/csareyj/Day-Planner',
			deployed: 'https://csareyj.github.io/Day-Planner/',
		},
		{
			name: 'Weather App',
			description:
				'An application that informs you of the forecast for a selected city as well as the following 5 days.',
			image: 'WeatherApp.JPG',
			technologies: [
				'HTML/CSS',
				'JavaScript'
			],
			github: 'https://github.com/csareyj/Weather-App',
			deployed: 'https://csareyj.github.io/Weather-App/',
		},
		{
			name: 'Movie Watchlist',
			description:
				'A database which utlizizes an API to pull film information in order to save a personalized watch list.',
			image: 'MovieWatchlist.png',
			technologies: [
				'HTML/CSS',
				'JavaScript'
			],
			github: 'https://github.com/binnie51/movie-watchlist',
			deployed: 'https://binnie51.github.io/movie-watchlist/',
		},
		{
			name: 'Employee Tracker',
			description:
				'An Employee Database used to track an Employee ID, Email and Github.',
			image: 'EmpTrack.JPG',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'My SQL',
				'Inquirer'
			],
			github: 'https://github.com/csareyj/Employee-Tracker',
			deployed: 'https://www.youtube.com/watch?v=wICbf-RsAF8&feature=youtu.be&ab_channel=curtisarey',
		},
		{
			name: 'Tech Blog',
			description:
				'A Tech Blog where a user can create a user account, login, logout, and post a forum subject which can take subsequent user comments.',
			image: 'IMG1.JPG',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'My SQL',
				'Express.js',
				'Heroku',
				'Handlebars',
				'Bcrypt'

			],
			github: 'https://github.com/csareyj/Tech-Blog',
			deployed: 'https://hmwtech-blog.herokuapp.com/',
		},
		{
			name: 'Video Game Databse',
			description:
				'A Database of Video games where a user can log in and search for video game titles and learn more information about them.',
			image: 'GD.JPG',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'My SQL',
				'Express.js',
				'Heroku',
				'Handlebars',
				'Seqelize',
				'Bcrypt'
			],
			github: 'https://github.com/stefcarter/project-two',
			deployed: 'https://project-two-upload.herokuapp.com/',
		},
		{
			name: 'Text Editor',
			description:
				'A simple Text Editor meeting PWA requirments, is installable, and can be cached to work offline.',
			image: 'IMG5.JPG',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Service Worker',
				'WebPack',
				'Express.js',
				'Manifest.json Plugin',
				'Heroku'

			],
			github: 'https://github.com/csareyj/Text-Editor',
			deployed: 'https://texts-editor.herokuapp.com/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
					<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[6]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[7]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;