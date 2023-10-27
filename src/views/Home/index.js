import React, { Component } from "react";
// import {Row, Col } from 'react-flexbox-grid';
import "./index.css";
import { connect } from "react-redux";
import { setPageTitle } from "../../reducers/action";

// import nav from '../../reducers/reducers'

// const store = createStore(nav)

class Home extends Component {
    render() {
        return (
            <div className="home">
                <header className="post-header">
                    <img src="./fl.jpeg" className="home-avatar" alt="avatar" />
                    <h1 className="post-title">Fuling Sun</h1>
                    <p className="post-intro">
                        Human-Computer Interaction <br /> Information Visualization{" "}
                    </p>
                </header>
                <article className="post-content">
                    <div className="home">
                        Welcome!
                        <br />
                        <br />I am Fuling Sun, a Ph.D. student at the University of California, San Diego. I am working
                        with{" "}
                        <a
                            className="links"
                            href="https://haijunxia.ucsd.edu/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Prof. Haijun Xia
                        </a>{" "}
                        in the{" "}
                        <a
                            className="links"
                            href="https://creativity.ucsd.edu/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Creativity Lab
                        </a>{" "}
                        and{" "}
                        <a
                            className="links"
                            href="https://designlab.ucsd.edu/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Design Lab
                        </a>
                        . My research interests are information visualization and Human-Computer Interaction.<br></br>
                        <br></br>I received my master's degree from College of Design and Innovation, Tongji University,
                        when I studied and worked at the{" "}
                        <a className="links" href="http://idvxlab.com/" target="_blank" rel="noopener noreferrer">
                            iDV<sup>x</sup> Lab
                        </a>{" "}
                        with{" "}
                        <a className="links" href="http://nancao.org/" target="_blank" rel="noopener noreferrer">
                            Prof. Nan Cao
                        </a>{" "}
                        and{" "}
                        <a
                            className="links"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://tjdi.tongji.edu.cn/TeacherDetail.do?id=5056&lang=en"
                        >
                            Prof. Qing Chen
                        </a>
                        . I received my B.S. from the University of Electronic Science and Technology of China (UESTC)
                        in 2019.
                        <br />
                        <br />
                        <br />
                    </div>
                </article>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pageTitle: state.pageTitle,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPageTitle: (data) => dispatch(setPageTitle(data)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
