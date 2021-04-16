import React, {Component} from "react";


class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  componentDidMount(){
    console.log("/about")
  }


  render(){
    return (
     <div className="foreground">
        <h1 id="pp">About me.</h1>
        <div id="aboutParagraphs">
          {/* put your <p>'s here b */}
        </div>
        <footer></footer>
     </div>
    );
  }
}

export default About;
