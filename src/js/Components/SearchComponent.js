import React from 'react';

export default class SearchComponent extends React.Component {

	constructor(props){
		super(props)
		this.state={
			message:this.props.message,
			text:''
		}
	}

	value = (e) => {
		this.setState({text:e.target.value})
	}

	SearchUserRepo = (e) => {
		e.preventDefault();
		var inputField = this.state.text;
		// this.refs.inputField.value='';
		this.props.onSearch(inputField, "UserName");
	}


	render(){

		var myStyle={
			textAlign:'center',
			paddingTop:80+'px',
			marginBottom: 40+'px'
		};

		return (
			<div style={myStyle} className="container">
				<form className="form-horizontal">
							<div className="form-group">
								<label className="col-lg-4 control-label" htmlFor="inputUserName">Enter User Name: </label>
								<div className="col-lg-6">
										<input className="form-control" id="inputUserName" placeholder="User Name" type="text" onChange={this.value}/>
								</div>
							</div>
							<div className="form-group">
								<label className="col-lg-4 control-label"></label>
								<div className="col-lg-6">
									<button className="btn btn-success" onClick={this.SearchUserRepo}> Search Repository <span className="glyphicon glyphicon-search"></span></button><span>&emsp;&nbsp;&emsp;</span>
								</div>
							</div>
						</form>
						<br></br>
				<hr></hr>
			</div>
			);
	}
};
