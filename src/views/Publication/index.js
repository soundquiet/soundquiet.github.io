import React, { Component } from 'react';
import './index.css';


export default class Publication extends Component {

	render(){
        let { data, isProject } = this.props;
        let authorlist = data.author.replace("Fuling Sun", "<strong>Fuling Sun</strong>")
		return (
			<div className="publication-item">
                { data.img.length>0 && <div className="pubImg" style={{backgroundImage: `url(${data.img})`}}></div>}
                { data.img.length===0 && <div className="pubImg dummyImg"></div>}
                <div className="pubInfo">
                    <div className="pubTitle"> 
                        { data.title } 
                        {isProject && <span className="pubPDF">{ data.file.length ?  <a href={data.file} target="_blank" rel="noopener noreferrer">      LINK</a> : 'To Appear'} </span>}
                    </div>
                    <div className="pubAuthor" dangerouslySetInnerHTML={{ __html: authorlist }}></div>
                    <div className="pubConf"> 
                        { data.conf } 
                        {isProject && <span className="skill"> ({data.skill})</span>}
                    </div>
                    {!isProject && <div className="pubPDF">{ data.file.length ?  <a href={data.file} target="_blank" rel="noopener noreferrer">Link</a> : 'To Appear'} </div>}
                </div>
			</div>
		  );
	}
};
