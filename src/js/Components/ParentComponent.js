import React from 'react';
import SearchComponent from './SearchComponent';
import DisplayComponent from './DisplayComponent';

export default class ParentComponent extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			RepoData:[],
			option:''
		}
	}

	handleSearchRepo = (input, choice) => {
		alert(input+"  "+choice);
		var url='';
		if(choice==="UserName"){
		url="https://api.github.com/users/"+input+"/repos"; //Ajax Call to the github API to fetch the user Repositories
		 $.ajax({
			url:url,
			type:"GET",
			dataType:"JSON",
			success:function(data){
				console.log(data);
				this.setState({RepoData:data, option:choice});
			}.bind(this),
			error:function(err){
				console.log(err);
			}.bind(this)
		});
	}

	else{
		 url="https://api.github.com/search/repositories?q="+input+"&sort=stars&order=desc"; //Ajax Call to the github API to fetch the Technology Repositories
		 $.ajax({
		url:url,
		type:"GET",
		dataType:"JSON",
		success:function(data){
			console.log(data);
			var techRepo=[];
			for(var i=0;i<10;++i){
				techRepo.push(data.items[i]);
			}
			this.setState({RepoData:techRepo, option:choice});
		}.bind(this),
		error:function(err){
			console.log(err);
		}.bind(this)
	});
	}

}

	render(){
		return (
			<div>
				<SearchComponent onSearch={this.handleSearchRepo}></SearchComponent>
				<DisplayComponent RepoObj={this.state.RepoData} searchChoice={this.state.option}></DisplayComponent>
			</div>
			);
	}
};
