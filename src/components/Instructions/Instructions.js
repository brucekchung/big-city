import React from 'react'
import './Instructions.css'

const Instructions = () => (
  <div className="Instructions">
    <div>
      <h2>how it works:</h2>
    </div>
    <div className="steps">
      <div className="card one">
        <h3>1</h3>
        Pledge support by buying tickets for your group.
      </div>
      <div className="card two">
        <h3>2</h3>
        Go on the scavenger hunt with your team before the day of the big event at any of Let's Roam locations
      </div>
      <div className="card three">
        <h3>3</h3>
        During the hunt, your team will receive trivia and photo challenges related to the American Red Cross
      </div>
      <div className="card four">
        <h3>4</h3>
        In addition, you and your team will go out exploring your city in a fun and engaging way
      </div>
      <div className="card five">
        <h3>prizes</h3>
        Each member of the top two teams, will each receive a family four pack to be used at any of our locations. In addition, our sponsor AMC will also give the winning teams 10 free movie tickets to each winning team
      </div>
      <div className="card six">
        <h3>selection</h3>
        How the winner is picked: During the scavenger hunts, you will receive points for answering location based questions, completing photo questions, answering Red Cross themed trivia, and for time. The top ten teams as of August 30th, will then undergo a secondary screening where judges from the Red Cross rank their photos for fun, creativity, and relevancy to the Red Cross's goals.
      </div>
    </div>
  </div>
)

export default Instructions
