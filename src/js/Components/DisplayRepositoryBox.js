import React from 'react';
import ModalCategory from './ModalCategory';

export default class DisplayRepositoryBox extends React.Component{


	render(){
		var RepoObject=this.props.RepositoryObject;
		var searchOption=this.props.searchOption;
		if(searchOption==="UserName"){
			return (
			<div style={{marginTop:'50'}}>
			<div className="container">
			<div className="row">
			<div className="col-lg-10">
			 <h3> Repository ID:<small style={{fontSize:"20px",color:"white"}}> {RepoObject.id} </small></h3>
			 </div>
			 </div>
			 <div className="row">
			<div className="col-lg-10">
			<h3> Repository Name:  <small style={{fontSize:"20px",color:"white"}}> {RepoObject.name} </small></h3>
			</div>
			</div>
			<div className="row">
			<div className="col-lg-10">
			<h3> Star-Rating:  <small style={{fontSize:"20px",color:"white"}}> {RepoObject.stargazers_count} </small></h3>
			</div>
			</div>
			<br></br>
			 <div className="row">
			<div className="col-lg-10">
			 <a href={RepoObject.html_url} target="_blank" role="button" className="btn btn-info"> View Repository on Github </a>&emsp;&nbsp;&emsp;
			</div>
			</div>
			</div>
			<br></br>
			<hr></hr>
			<ModalCategory onAdd={this.handleAddRepository} id={RepoObject.id} RepoObj={RepoObject}></ModalCategory>
			</div>
			);
		}
	}
}
