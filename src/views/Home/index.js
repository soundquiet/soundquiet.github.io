import React, { Component } from 'react';
// import {Row, Col } from 'react-flexbox-grid';
import './index.css';
import { connect } from 'react-redux';
import { setPageTitle } from '../../reducers/action';

// import nav from '../../reducers/reducers'

// const store = createStore(nav)

class Home extends Component {
  render() {
    return (
      <div className="home intro">
        <header className="post-header">
          <img src="./fl.jpg" className="home-avatar" alt="avatar" />
          <h1 className="post-title">Fuling Sun</h1>
          <p className="post-intro">
            Human-Computer Interaction <br /> Information Visualization{' '}
          </p>
        </header>
        <article className="post-content">
          <div className="home">
            I am Fuling Sun, a Ph.D. student at the University of California San Diego, in the Department of Cognitive
            Science. I am working with{' '}
            <a className="links" href="https://haijunxia.ucsd.edu/" target="_blank" rel="noopener noreferrer">
              Prof. Haijun Xia
            </a>{' '}
            in the{' '}
            <a className="links" href="https://hci.ucsd.edu/" target="_blank" rel="noopener noreferrer">
              Foundation Interface Lab
            </a>{' '}
            and{' '}
            <a className="links" href="https://designlab.ucsd.edu/" target="_blank" rel="noopener noreferrer">
              Design Lab
            </a>
            .<br></br>
            <br></br>
            My research interests are information visualization and Human-Computer Interaction. I study how we can
            design representations that let people work more directly and fluidly with data. <br></br>
            <br></br>I received my master's degree from College of Design and Innovation, Tongji University, when I
            studied and worked at the{' '}
            <a className="links" href="http://idvxlab.com/" target="_blank" rel="noopener noreferrer">
              iDV<sup>x</sup> Lab
            </a>{' '}
            with{' '}
            <a className="links" href="http://nancao.org/" target="_blank" rel="noopener noreferrer">
              Prof. Nan Cao
            </a>{' '}
            and{' '}
            <a
              className="links"
              target="_blank"
              rel="noopener noreferrer"
              href="https://tjdi.tongji.edu.cn/TeacherDetail.do?id=5056&lang=en"
            >
              Prof. Qing Chen
            </a>
            . I received my B.S. from the University of Electronic Science and Technology of China (UESTC) in 2019.
            <br />
            <br />
            <div className="home-links">
              <a
                href="https://drive.google.com/file/d/18eiG382GL4T2bDCkTPjl3x-qw5kluERp/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>
              <br />
              <a href="https://www.linkedin.com/in/fuling-sun/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <br />
              <a
                href="https://scholar.google.com/citations?user=Ow9YuWYAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar
              </a>
              <br />
              <a href="https://www.github.com/soundquiet" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </div>
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
