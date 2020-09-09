import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux'
import { setPageTitle } from '../../reducers/action'
import Publication  from '../Publication'



class Project extends Component {

	render(){
        let publications = [
            {title: "Calliope: Automatic Visual Data Story Generation from a Spreadsheet",
             author: "Danqing Shi, Xinyue Xu, Fuling Sun, Yang Shi, Nan Cao",
             conf: "TVCG 2020",
             img: "./papers/2020VIS-Calliope.png",
             file: ""
            }, 
            {title: "My first work in research",
             author: "me and others",
             conf: "hope",
             img: "",
             file: ""
            }
        ]
        let projects = [
            {title: "ECOLOGICAL BALANCE SIMULATOR",
             author: "Fuling Sun and Nan Chen",
             conf: "A simple ecosystem involving seaweeds and fishes with interactions, simulating how human behaviors will impact the ecosystem.",
             skill: "P5.js",
             img: "./papers/ecosystem.png",
             file: "https://soundquiet.github.io/Ecosystem-Simulator/"
            },
            {title: "科技发展70迈，我们在裸奔",
             author: "Fuling Sun, Nan Chen, Ying Sun",
             conf: "通过记录手机APP在一天中访问隐私权限的情况，我们利用可视化与scrollytelling讲述了用户隐私被获取的途径及可能的危害.",
             skill: "JavaScript, CSS, JQuery",
             img: "./papers/2019Viscourse.png",
             file: "https://soundquiet.github.io/hollow_man/"
            } 
            
        ]
		return (
			<div className="project">
                <div className="publicationView">
                    <h2>Publications</h2>
                    {publications.map((pub, index)=>{
                        return <Publication key={index} data={pub} isProject={false}></Publication>
                    })}
                </div>
                <div className="projectView">
                    <h2>Projects</h2>
                    {projects.map((pub, index)=>{
                        return <Publication key={index} data={pub} isProject={true}></Publication>
                    })}
                </div>
                
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
export default connect(mapStateToProps, mapDispatchToProps)(Project)