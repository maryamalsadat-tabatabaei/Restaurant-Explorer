import React ,{Component} from 'react';
import "../TourList/TourListComponent.css";
import { baseUrl } from '../../shared/baseUrl';

 export default class Tour extends Component
 {
 	state={
 		showInfo:false
 }	
 	handleInfo=()=>{
 		this.setState({
 			showInfo:!this.state.showInfo
 		});
 	}
 	render(){
 		return(
 			<article className="tour">
 				 <div className="img-container">
 				 <img width="200" src={ baseUrl + this.props.tour.img} alt="" />
 				 <span className="close-btn" 
 				 onClick={()=>{this.props.removeTour(this.props.tour.id)}}>
 				 	<i className="fa fa-window-close" />
 				 </span>
 				 <div className="tour-info">
 				 	<h3>{this.props.tour.city}</h3>
 				 	<h4>{this.props.tour.name}</h4>
 				 	<h5>info{" "} 
 				 	<span onClick={this.handleInfo}>
 				 	<i className="fa fa-caret-square-o-down"></i></span>
 				 	</h5>
 				 	{this.state.showInfo && <p>{this.props.tour.info}</p>}
 				 	
 				 </div>
 				 </div>
 			</article >

 			);
 	}
 }