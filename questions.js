
const allQuestions = {
  general: [
    {
      type: "multiple",
      text: "An offside-positioned attacker is running toward the ball but before he touches it, a defender steps up and deliberately pushes that attacker, fouling him. The attacker had not yet played the ball. What is the correct call?",
      options: ["Award a direct free kick for the attacking team, as the foul happened before the offside offence.", "Award offside, as the player has interfered with play by getting fouled.", "Allow play to continue", "Award a dropped ball to the defending team as the offside player has obstructed play."],
      answer: 0,
      law: "Law 11",
      quote: "a player in an offside position is moving towards the ball with the intention of playing the ball and is fouled before playing or attempting to play the ball, or challenging an opponent for the ball, the foul is penalised as it has occurred before the offside offence"
    },
    {
      type: "text",
      text: "What are the 4 considerations for DOGSO?",
      answer: "Distance, Defenders, Direction, Control",
      law: "Law 12 – Denying a goal or an obvious goal-scoring opportunity",
      quote: "The 4 DOGSO considerations are Distance to goal, number of Defenders, Direction of play, and likelihood of Control of the ball."
    },
    {
      type: "multiple",
      text: "A defender near his own goal line tries to be clever: he flicks the ball up with his foot and deliberately heads it back to his goalkeeper so the keeper can catch it. What should the referee do?",
      options: ["Allow play to continue, as the defender used his head to pass it back to the goalkeeper, he is permitted to pick it up.", "Award a penalty to the attacking team", "Award an indirect free kick to the attacking team", "Award an indirect free kick to the attacking team and caution the defender for unsporting behaviour"],
      answer: 3,
      law: "Law 12",
      quote: "Cautions for unsporting behaviour: initiates a deliberate trick for the ball to be passed (including from a free kick or goal kick) to the goalkeeper with the head, chest, knee etc. to circumvent the Law, whether or not the goalkeeper touches the ball with the hands; the goalkeeper is cautioned if responsible for initiating the deliberate trick"
    },
    {
      type: "text",
      text: "A team official (not a player) from Team E’s bench area enters the field to argue with the referee about a call while the ball is in play. What should the referee do? What is the restart?",
      answer: "The referee must stop play (assuming there is an interference) and send off the team official for entering the field and confronting a match official. The restart would be a direct free kick (or penalty) for the opposing team from where the person entered/interfered.",
      law: "12, 3",
      quote: "The coach and other officials named on the team list (with the exception of players or substitutes) are team officials. Anyone not named on the team list as a player, substitute or team official is an outside agent. If a team official, substitute, substituted or sent-off player or outside agent enters the field of play, the referee must: \n • only stop play if there is interference with play \n • have the person removed when play stops \n • take appropriate disciplinary action If play is stopped and the interference was by: \n • a team official, substitute, substituted or sent-off player, play restarts with a direct free kick or penalty kick \n • an outside agent, play restarts with a dropped ball If a ball is going into the goal and the interference does not prevent a defending player playing the ball, the goal is awarded if the ball enters the goal (even if contact was made with the ball) unless the interference was by the attacking team.",
    },
    {
      type: "multiple",
      text: "In open play, a ball is lofted over the top toward an attacker. The attacker sprints after it, but just as he’s about to reach it, the opposing team’s assistant coach who is standing near the touchline steps a foot onto the field and stops the ball with his foot. What is the referee’s decision?",
      options: ["Stop play, restart with a direct free kick (or penalty) to the attacking team and caution the assistant manager", "Stop play, and restart with a dropped ball to the attacking team. No diciplinary action can be taken", "Stop play, dismiss the assistant manager and restart with a direct free kick (or penalty) to the attacking team", "Stop play, dismiss the assistant manager and restart play with an indirect free kick"],
      answer: 2,
      law: "12, 3",
      quote: "Sending-off: entering the field of play to: confront a match official (including at half-time and full-time. interfere with play, an opposing player or a match official \n Law 3.7: If play is stopped and the interference was by: \n a team official, substitute, substituted or sent-off player, play restarts with a direct free kick or penalty kick \n an outside agent, play restarts with a dropped ball",
    },
    {
      type: "text",
      text: " A defender intentionally handles the ball to break up a promising through-pass by the attack (not an obvious goal chance, but a promising attack). The handling occurs just outside the penalty area. What action does the referee take?",
      answer: "Award a direct free kick and caution the defender for stopping a promising attack.",
      law: "12",
      quote: "Law 12.3 - Cautions for unsporting behaviour \n handles the ball to interfere with or stop a promising attack, except where the referee awards a penalty kick for a non-deliberate handball offence",
    },
    {
      type: "multiple",
      text: "A team official (coach) in the technical area throws a water bottle onto the field in frustration and it strikes the ball (which is in play), slightly altering its path. What action does the referee take?",
      options: ["Stop play, award a direct free kick to the opposing team and send off the manager", "Stop play, award a dropped ball and caution the manager", "Allow play to continue provided possesion does not turn over, Caution the manager the next time the ball goes out","Stop play, award a direct free kick to the opposing team but no diciplinary action is taken"],
      answer: 0,
      law: "12",
      quote: "Law 12.3 - Sending-off offences include (but are not limited to): \n deliberately throwing/kicking an object onto the field of play \n \n Law 12.4 - If a substitute, substituted or sent-off player, player temporarily off the field of play or team official throws or kicks an object onto the field of play and it interferes with play, an opponent or match official, play is restarted with a direct free kick (or penalty kick) where the object interfered with play or struck or would have struck the opponent, match official or the ball.",
    },
    {
      type: "multiple",
      text: "A team official is observed using a mobile phone to communicate tactical instructions from the stands, which is not allowed by competition rules. The fourth official reports that the device is being used improperly (not for permitted medical reasons). What is the sanction?",
      options: ["Allow play to continue, report the incident to the relevant authority after the match.", "Warn the team official the device is not allowed to be used, and caution them if it happens again","Send off the team official for using unauthorised electronic equipment at the next stoppage in play","Ignore it"],
      answer: 2,
      law: "12",
      quote: "Law 12 (Team Officials) forbids the use of unauthorized communication equipment. Specifically, “using unauthorised electronic or communication equipment and/or behaving in an inappropriate manner as a result” is listed as a sending-off offence for team staff​. In this scenario, the coach (or whoever) using a phone or receiving instructions from outside violates that. The referee should dismiss that person from the technical area. No direct impact on play, so if play wasn’t stopped, the referee can simply send the official off at the next stoppage with a red card. This ensures compliance with the rule that technology is only allowed for approved purposes (e.g., medical/analysis, not coaching if competition bans it).",
    },
    {
      type: "text",
      text: "Just as a corner kick is about to be taken, two opposing players (one from each team) start shoving and swinging at each other at the edge of the box. The referee sees punches thrown by both before the kick is taken. What actions does the referee take, and how is play restarted?",
      answer: "The referee should send off both players for violent conduct (for the punching). Since this occurred before the corner kick was taken (ball out of play), the restart remains a corner kick for the attacking team.",
      law: "12",
      quote: "Law 12.3 Sending-off offences (Players) \n violent conduct \n \n Law 12.4 - If the ball is out of play, play is restarted according to the previous decision.",
    },
    {
      type: "multiple",
      text: "An offside-positioned attacker comes back into their own half to collect a through-ball from a teammate and touches it. Where is the restart for the offside infraction?",
      options: ["On the halfway line", "Where the attacker touched/interfered with play", "Where the pass was played","Where the attacker was originally positioned before interfering with play"],
      answer: 1,
      law: "11",
      quote: "Offside is determined at the moment a teammate plays the ball, but the location of the offence is where the offside player becomes involved in play. Law 11 confirms that the indirect free kick is taken “where the offence occurred, including if it is in the player’s own half of the field”​",
    },
    {
      type: "text",
      text: "An attacking player in an offside position receives a rebound after the goalkeeper makes a save and then scores. What is the decision?",
      answer: "Disallow the goal for offside",
      law: "11",
      quote: "Law 11.4 - If an offside offence occurs, the referee awards an indirect free kick where the offence occurred, including if it is in the player’s own half of the field of play.​",
    },
    {
      type: "text",
      text: "A defending player is already on a caution, the same player recklessly fouls an attacker and stops a promising attack, before the referee has time to begin the diciplinary procedure, the attacking team play a quick free kick and have a clear goal scoring opportunity, which they score from. Should the goal stand? What diciplinary action should be taken? ",
      answer: "The referee should and go back and caution (therefore dissmiss) the defender at the next stoppage as he commited a reckless challenge. The referee allows the goal as the attacking team took a quick free kick, the referee had not started diciplinary action and there was a clear goalscoring opportunity.",
      law: "12.3",
      quote: "Once the referee has decided to caution or send off a player, play must not be restarted until the sanction has been administered, unless the non-offending team takes a quick free kick, has a clear goal-scoring opportunity and the referee has not started the disciplinary sanction procedure. The sanction is administered at the next stoppage; if the offence was denying the opposing team an obvious goal-scoring opportunity, the player is cautioned; if the offence interfered with or stopped a promising attack, the player is not cautioned.​",
    },
    {
      type: "multiple",
      text: "A defending player commits a careless foul, which stops a promising attack. However, the referee applies advantage and the attacking team score. What should the referee do?",
      options: ["The referee should allow the goal and caution the player for unsporting behaviour", "The referee should allow the goal, no diciplinary action should follow", "The referee should allow the goal and dismiss the player for unsporting behaviour", "The referee should disallow the goal, award a direct free kick to the attacking team and caution the defender for unsporting behaviour"],
      answer: 1,
      law: "12.3",
      quote: "Once the referee has decided to caution or send off a player, play must not be restarted until the sanction has been administered, unless the non-offending team takes a quick free kick, has a clear goal-scoring opportunity and the referee has not started the disciplinary sanction procedure. The sanction is administered at the next stoppage; if the offence was denying the opposing team an obvious goal-scoring opportunity, the player is cautioned; if the offence interfered with or stopped a promising attack, the player is not cautioned.​",
    },
    {
      type: "multiple",
      text: "A defending player commits a careless foul, which stops a promising attack. However, the referee applies advantage and the attacking team score. What should the referee do?",
      options: ["The referee should allow the goal and caution the player for unsporting behaviour", "The referee should allow the goal, no diciplinary action should follow", "The referee should allow the goal and dismiss the player for unsporting behaviour", "The referee should disallow the goal, award a direct free kick to the attacking team and caution the defender for unsporting behaviour"],
      answer: 1,
      law: "12.3",
      quote: "If the referee plays the advantage for an offence for which a caution/sending-off would have been issued had play been stopped, this caution/sending-off must be issued when the ball is next out of play. However, if the offence was denying the opposing team an obvious goal-scoring opportunity the player is cautioned for unsporting behaviour; if the offence was interfering with or stopping a promising attack, the player is not cautioned.​",
    },
    {
      type: "text",
      text: "A player is cautioned (yellow card, YC) during extra time. After the match has ended, the same player receives a YC during penalties. What is the referee’s decision?",
      answer: "Warnings and cautions (YCs) issued during the match (including during extra time) are not carried forward into penalties (penalty shoot-out). A player who receives a YC during both the match and penalties (penalty shoot-out) is not sent off. The two separate cautions are reported to the appropriate authorities.",
      law: "10.3",
      quote: "warnings and cautions issued to players and team officials during the match are not carried forward into penalties (penalty shoot-out).​",
    },
    
  ],

  offside: [
    {
      type: "multiple",
      text: "this section is still being developed, please refresh the page and click general quiz.",
      options: ["Allow the goal", "Offside offence – disallow goal", "Award penalty kick", "Indirect free kick"],
      answer: 1,
      law: "Law 11/2. Offside offence",
      quote: "A player in an offside position is penalised if they gain an advantage by playing the ball after it has deflected off an opponent."
    },
    {
      type: "text",
      text: "Name one situation where a player is NOT penalised for being in an offside position.",
      answer: "Receiving the ball directly from a throw-in",
      law: "Law 11/3. No Offence",
      quote: "There is no offside offence if a player receives the ball directly from a goal kick, corner kick, or throw-in."
    }
  ],

  restarts: [
    {
      type: "multiple",
      text: "This section is still being developed, please refresh the page and click general.",
      options: ["Allow play to continue", "Dropped ball for defending GK", "Indirect free kick", "Dropped ball for attacker"],
      answer: 1,
      law: "Law 8/2. Dropped ball procedure",
      quote: "The ball is dropped for the defending team goalkeeper in their penalty area if, when play was stopped, the ball was in or last touched in the penalty area."
    },
    {
      type: "text",
      text: "What is the minimum distance opponents must retreat at a free kick?",
      answer: "9.15 metres",
      law: "Law 13 – Free kicks",
      quote: "Opponents must remain at least 9.15 m (10 yds) from the ball until it is in play."
    },
    {
      type: "multiple",
      video: "https://www.example.com/video2.mp4",
      text: "Watch the clip. What is the correct restart after the ball hits the referee and changes possession?",
      options: ["Allow play to continue", "Dropped ball for last team in control", "Indirect free kick", "Retake the previous restart"],
      answer: 1,
      law: "Law 8/1. Ball hits match official",
      quote: "If the ball touches a match official and a team starts a promising attack or possession changes, a dropped ball is awarded."
    }
  ]
};
