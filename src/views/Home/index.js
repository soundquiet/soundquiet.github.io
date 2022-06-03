import React, { Component } from 'react';
// import {Row, Col } from 'react-flexbox-grid';
import './index.css';
import { connect } from 'react-redux'
import { setPageTitle } from '../../reducers/action'

// import nav from '../../reducers/reducers'

// const store = createStore(nav)

class Home extends Component {

	render(){
		return (
			<div className="home">
                <header className="post-header">
                    <img src="./fl.jpeg" className="home-avatar" alt="avatar"/>
                    <h1 className="post-title">Fuling Sun</h1>
                    <p className="post-intro">Human-Computer Interaction <br/> Visualization Design </p>
                 </header>
                 <article className="post-content">
                    <div className="home">
                        Welcome!
                        <br/><br/>
                        I am Fuling Sun, a master's student at College of Design and Innovation, Tongji University.
                        I am currently studying and working at the <a className="links" href="http://idvxlab.com/" target="_blank" rel="noopener noreferrer">
                        iDV<sup>x</sup> Lab
                        </a>. I received my B.S. from the University of Electronic Science and Technology of China (UESTC) in 2019.
                    
                        <br/>
                        <br/>
                        My research interests are Human-Computer Interaction and visualization design, under the supervison of <a className="links" href="http://nancao.org/" target="_blank" rel="noopener noreferrer">
                         Prof. Nan Cao
                        </a> and <a className="links" target="_blank" rel="noopener noreferrer" href="https://tjdi.tongji.edu.cn/TeacherDetail.do?id=5056&lang=en">Prof. Qing Chen</a>.
                        <br/>
                    </div>

                </article>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home)