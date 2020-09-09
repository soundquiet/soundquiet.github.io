import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setPageTitle } from './reducers/action'
import Header from './views/Header/index';
import Footer from './views/Footer/index';
import Container from './views/Container/index';


class HomePage extends Component {

	render(){
        const {pageTitle} = this.props;
		return (
			<div className="home_page">
                <Header/>
                <Container/>
                {pageTitle === "home" && <Footer/>}
			</div>
		  );
    }
    
};


const mapStateToProps = (state) => {
    return {
        pageTitle: state.pageTitle,
    }
}
// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
return {
    setPageTitle (data) {
        dispatch(setPageTitle(data))
    }
}
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)