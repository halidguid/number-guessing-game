import React, { Component } from 'react';

import { Banner, Feedback, Form, Progress, Reset, } from './components';
import { getInitialState, getFeedback } from './util';

import { Grid, Row, Col } from '@smooth-ui/core-sc';
import * as Styled from './style';
import StartNewGame from './components/Clear/Clear';

class App extends Component { 
  state = getInitialState();
  startNewGame = () => this.setState(getInitialState());

  resetGame = () => {
    this.setState( {
      
      guess: undefined,
      allGuesses: [],
      attempt: 10,
      feedbackMessage: 'Enter number..',
      block: false
    })
  }
  
    

  updateAppState = guess => {
    const { actual } = this.state;
    let absDiff = "";
    
    if (guess == actual ) {
      absDiff="pogodio"
    } else if (guess > actual) {
      absDiff="vise"
    } else {absDiff = "manje"}
    const { feedbackMessage, feedbackColor } = getFeedback(absDiff);

    this.setState(prevState => ({
        guess,
        allGuesses: [...prevState.allGuesses, {guess, feedbackColor}],
        attempt: prevState.attempt - 1,
        feedbackMessage: prevState.attempt === 1 ? "Game Over" :  feedbackMessage,
        block: (absDiff === "pogodio"|| prevState.attempt === 1), 
        isVisible: (absDiff === "pogodio" || prevState.attempt === 1) , 
      })
    ); 
  }

  render() {
    const { allGuesses, feedbackMessage, block, attempt, guess } = this.state;

    const guessList = allGuesses.map((item, index) => 
      <Styled.ListItem key={index} color={item.feedbackColor}>
        <span>{item.guess}</span>
      </Styled.ListItem>
    );

    return (
      <Grid mt={20}>
        <Row>
          <Col>
            <Styled.LandmarkContainer as="header" role="banner">
              <Banner />
            </Styled.LandmarkContainer>
          </Col>
        </Row>
        <Row mt={10}>
          <Col>
            <Styled.LandmarkContainer as="main" role="main">
              <Feedback feedback={feedbackMessage}/>

              <Form block = {block} returnGuessToApp={value => this.updateAppState(value)} />
              <Progress attempt={attempt} guess={guess} guessList={guessList}/>
            

              <Reset resetGame = {this.resetGame}/>
              
              <StartNewGame startNewGame = {this.startNewGame} isVisible={this.state.isVisible}/>
              
            </Styled.LandmarkContainer>
          </Col>
        </Row>
        <Row mt={15}>
          <Col>
            <Styled.LandmarkContainer as="footer" role="contentinfo">
              
            </Styled.LandmarkContainer>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;