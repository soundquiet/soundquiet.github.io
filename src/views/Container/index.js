import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../Home'
import Project from '../Project'

class Container extends Component {

	render(){
        const {pageTitle} = this.props;
		return (
			<div className="container">
                {pageTitle === "home" && <Home/>}
                {pageTitle === "project" && <Project/>}
			</div>
		  );
	}
};

const mapStateToProps = (state) => {
    return {
        pageTitle: state.pageTitle,
    }
}

export default connect(mapStateToProps)(Container)