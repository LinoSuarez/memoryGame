import React, { Component } from "react";

 class Card extends Component{

    state = {
      ImageURL: "",
      Count: 0
    };

    componentDidMount() {
    //   this.getRandURL()
    }

    render = () =>
    
    <div className="col-lg-2 col-md-4 col-xs-6">
        <a className="d-block mb-2 h-100">
          <img className="img-fluid img-thumbnail" src={this.props.link} alt="" key={this.props.id} onClick={() => this.props.clickedCard(this)}/>
        </a>
    </div>
    
 }
export default Card;