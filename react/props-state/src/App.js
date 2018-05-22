import React, { Component } from 'react'
import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      header: "Ini header",
      footer: "Ini footer"
    }
  }

  changeHeader(e) {
    this.setState({header: e.target.value})
  }

  changeFooter(e) {
    this.setState({footer: e.target.value})
  }

  render() {
    return (
      <div>
        <Header dataHeader={this.state.header} />

        <Content
          dataState={this.state}
          changeHeader={this.changeHeader.bind(this)}
          changeFooter={this.changeFooter.bind(this)} />

        <Footer dataFooter={this.state.footer} />
      </div>
    );
  }
}

export default App;
