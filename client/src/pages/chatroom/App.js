import React, { Component } from 'react';
import MessageList from '../../components/MessageList';
import MessageBox from '../../components/MessageBox';
import Header from '../../components/Header';
import firebase from 'firebase';

class ChatApp extends Component {

constructor(props){
  super(props);
  var config = {
    apiKey: "AIzaSyBj1soUHbjxmpLgprklibH-pi5WKABolEY",
    authDomain: "vibezchat.firebaseapp.com",
    databaseURL: "https://vibezchat.firebaseio.com",
    projectId: "vibezchat",
    storageBucket: "",
    messagingSenderId: "857761788728"
  };
  firebase.initializeApp(config);
}

  render() {
    return (
      <div className="container">
            <Header title="Vibez Chat" />
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageList db={firebase} />
              </div>
            </div>
            <div className="columns">
            <div className="column is-3"></div>
            <div className="column is-6">
              <MessageBox db={firebase} />
            </div>
          </div>
        </div>
    );
  }
}

export default ChatApp;
