import React ,{Component} from 'react';
import "./TourListComponent.css";
import Tour from "../Tour/TourComponent";
import {tourData} from "../../data/tourData";

 export default class Tourlist extends Component
 {
 	state={
 		tours:tourData
 	};
 	removeTour=id=>{
 		const sortedTours=this.state.tours.filter(tour=> tour.id !==id)
 		this.setState({
 			tours:sortedTours
 		});
 	}
 	render(){
 		return(
 			<section className="tour-list">
 			{this.state.tours.map(tour=>{
 				return <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
 			})}
 				
 			
 			</section>
 			);
 	}
 }