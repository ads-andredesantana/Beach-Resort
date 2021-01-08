import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'

// Class created to display the Services inside the Component. 
export default class Services extends Component {
	// Creating a State to manage the data.
	state = {
		services: [
			{
				icon: <FaCocktail />,
				title: "Free cocktails",
				info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, fugit.'
			},
			{
				icon: <FaHiking />,
				title: "Endless Hiking",
				info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, fugit.'
			},
			{
				icon: <FaShuttleVan />,
				title: "Free Shuttle",
				info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, fugit.'
			},
			{
				icon: <FaBeer />,
				title: "Strongest Beer",
				info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, fugit.'
			}
		]
	}

	/*Accessing the Services from the Components State. We Map the items by index and destructure to display the data*/
	render() {
		return (
			<section className="services">
				<Title title="services" />
				<div className="services-center">
					{this.state.services.map((item, index) => {
						return <article key={index} className="service">
							<span>{item.icon}</span>
							<h6>{item.title}</h6>
							<p>{item.info}</p>
						</article>
					})}
				</div>
			</section>
		)
	}
}
