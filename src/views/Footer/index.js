import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux'
import { setPageTitle } from '../../reducers/action'

// import nav from '../../reducers/reducers'

// const store = createStore(nav)

class Footer extends Component {


	render(){
		return (
			<div className="footer">
                <footer className="site-footer">

                <div className="wrapper">
                <div className="site site-navigation" target="_blank">
                    <p><a href="mailto:fulingsun515@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i>E-mail</a></p>
                </div>

                <div className="site site-contact" target="_blank">
                    <p><a href="https://www.github.com/soundquiet" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i> GitHub</a></p>
                </div>

                </div>

                </footer>
			</div>
		  );
	}
};

const mapStateToProps = (state) => {
    return {
        pageTitle: state.pageTitle,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPageTitle: (data) =>  dispatch(setPageTitle(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)