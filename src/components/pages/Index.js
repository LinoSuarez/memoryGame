import React, { Component } from "react";
import Cards from "./elements/Cards";

class Home extends Component {

  state = {
    ImagesLink: [
      "img/2C.png","img/2D.png","img/2S.png", "img/2H.png", 
      "img/3C.png","img/3D.png","img/3S.png", "img/3H.png",
      "img/4C.png","img/4D.png","img/4S.png", "img/4H.png",
      "img/5C.png","img/5D.png","img/5S.png", "img/5H.png",
      "img/6C.png","img/6D.png","img/6S.png", "img/6H.png",
      "img/7C.png","img/7D.png","img/7S.png", "img/7H.png",
      "img/8C.png","img/8D.png","img/8S.png", "img/8H.png",
      "img/9C.png","img/9D.png","img/9S.png", "img/9H.png",
      "img/10C.png","img/10D.png","img/10S.png", "img/10H.png",
      "img/AC.png","img/AD.png","img/AS.png", "img/AH.png", 
      "img/JC.png","img/JD.png","img/JS.png", "img/JH.png",
      "img/KC.png","img/KD.png","img/KS.png", "img/KH.png",
      "img/QC.png","img/QD.png","img/QS.png", "img/QH.png"
    ],
    randLinks: [],
    correctGuesses: 0,
    chosenCards: []
  };

  randomCard = () => {
    var min = 0;
    var max = this.state.ImagesLink.length -1
    var size = 18;

    var values = [];

    while (values.length < size) {

      var created = this.state.ImagesLink[Math.floor(Math.random() * ( max - min + 1) + min)]
      !values.includes(created) ? values.push(created) : false

    }

    this.setState({
      randLinks: values
    })
    console.log(values)
    // return values;
  }
  // loadImgs = () => {
  //   this.state.BreedList.map(data => <img src={data}/>)
  // }

  componentDidMount() {
    this.randomCard();
  }

  clickedCard = (card) => {
    // console.log("fuck")
    var cardLink = card.props.link;

    this.setState({
      correctGuesses : this.state.correctGuesses + 1
    })
    this.randomCard();
    console.log()

    !this.state.chosenCards.includes(cardLink) ? this.state.chosenCards.push(cardLink) :
      this.setState({
        chosenCards: [],
        correctGuesses: 0
      })
    
    


  }
  render = () =>
  <div>
    <h1 className="text-center">Card Game</h1>
    <h3 className="text-center">You have {this.state.correctGuesses} / 52 points </h3>
    {/* <img src={this.state.ImagesLink[0]}/> */}
    {/* <div class="col-lg-2 col-md-4 col-xs-6">
      <a href="#" class="d-block mb-4 h-100">
        <img class="img-fluid img-thumbnail" src={this.state.ImagesLink[0]} alt=""/>
      </a>
    </div> */}

    {/* {this.state.ImagesLink.map(element => 
      <div class="col-lg-2 col-md-4 col-xs-6">
        <a href="#" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail" src={element} alt=""/>
        </a>
      </div>
    )} */}
    <div className="container">
    <div className="row text-center text-lg-left">
    {this.state.randLinks.length > 0 ? this.state.randLinks.map((element, id) => <Cards clickedCard={this.clickedCard} link={element} key={id}/>) : false}
    </div>
    </div>
    
  </div>
}
export default Home;
