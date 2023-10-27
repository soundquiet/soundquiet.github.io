import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import "./index.css";
import { connect } from "react-redux";
import { setPageTitle } from "../../reducers/action";

// import nav from '../../reducers/reducers'

// const store = createStore(nav)

class Header extends Component {
    changeContent = (content) => {
        this.props.setPageTitle(content);
    };

    render() {
        return (
            <div className="header">
                <Row start="xs">
                    <Col xs={10} className="nav-container">
                        {/* small devices */}
                        <Row end="xs" className="nav-collapse">
                            <Col className="nav-item" onClick={() => this.changeContent("home")}>
                                Home
                            </Col>
                            <Col className="nav-item" onClick={() => this.changeContent("project")}>
                                Projects
                            </Col>
                            {/* <Col className="nav-item"><a href="https://soundquiet.github.io/blog" target="_blank" rel="noopener noreferrer">Blog</a></Col> */}
                            <Col className="nav-item">
                                <a
                                    href="https://drive.google.com/file/d/18eiG382GL4T2bDCkTPjl3x-qw5kluERp/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    CV
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
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
export default connect(mapStateToProps, mapDispatchToProps)(Header);
