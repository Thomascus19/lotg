
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
      type: "text",
      text: "Can you name the 8 cautionable offences?",
      answer: "Cautionable offences- A player is cautioned if guilty of: \n<br><br> • delaying the restart of play \n<br> • dissent by word or action \n<br> • entering, re-entering or deliberately leaving the field of play without the referee’s permission \n<br> • failing to respect the required distance when play is restarted with a dropped ball, corner kick, free kick or throw-in \n<br> • persistent offences (no specific number or pattern of offences constitutes ‘persistent’) \n<br> • unsporting behaviour \n<br> • entering the referee review area (RRA) \n<br> • excessively using the ‘review’ (TV screen) signal",
      law: "Law 12.3",
      quote: "Cautionable offences- A player is cautioned if guilty of: \n delaying the restart of play \n dissent by word or action \n entering, re-entering or deliberately leaving the field of play without the referee’s permission \n failing to respect the required distance when play is restarted with a dropped ball, corner kick, free kick or throw-in \n persistent offences (no specific number or pattern of offences constitutes ‘persistent’) \n unsporting behaviour \n entering the referee review area (RRA) \n excessively using the ‘review’ (TV screen) signal"
    },
    {
      type: "text",
      text: "Can you name the 9 dismissal offences?",
      answer: "A player, substitute or substituted player who commits any of the following offences is sent off: \n<br><br> • denying the opposing team a goal or an obvious goal-scoring opportunity by committing a deliberate handball offence (except a goalkeeper within their penalty area) \n<br> • denying the opposing team a goal or an obvious goal-scoring opportunity by committing a non-deliberate handball offence outside their own penalty area \n<br> • denying a goal or an obvious goal-scoring opportunity to an opponent whose overall movement is towards the offender’s goal by an offence punishable by a free kick (unless as outlined below) \n<br> • serious foul play \n<br> • biting or spitting at someone \n<br> • violent conduct \n<br> • using offensive, insulting or abusive language and/or action(s) \n<br> • receiving a second caution in the same match \n<br> • entering the video operation room (VOR)",
      law: "Law 12.3",
      quote: "A player, substitute or substituted player who commits any of the following offences is sent off: \n denying the opposing team a goal or an obvious goal-scoring opportunity by committing a deliberate handball offence (except a goalkeeper within their penalty area) \n denying the opposing team a goal or an obvious goal-scoring opportunity by committing a non-deliberate handball offence outside their own penalty area \n denying a goal or an obvious goal-scoring opportunity to an opponent whose overall movement is towards the offender’s goal by an offence punishable by a free kick (unless as outlined below) \n serious foul play \n biting or spitting at someone \n violent conduct \n using offensive, insulting or abusive language and/or action(s) \n receiving a second caution in the same match \n entering the video operation room (VOR)"
    },
    {
      type: "multiple",
      text: "The ball becomes defective at the taking of a free kick. What should the referee do?",
      options: ["Restart the game with a dropped ball at the point of the final touch","Restart the game with the freekick","Allow play to continue until the ball goes out of play"],
      answer: 1,
      law: "Law 2",
      quote: "If the ball becomes defective at a kick-off, goal kick, corner kick, free kick, penalty kick or throw-in, the restart is re-taken. If the ball becomes defective during a penalty kick or penalties (penalty shoot-out) as it moves forward and before it touches a player, crossbar or goalposts the penalty kick is retaken."
    },
    {
      type: "multiple",
      text: "At a dropped ball, which of the following statements is true?",
      options: ["All other players must be 4m away from the ball until it is in play","All opposition players must be 4m away from the ball","Two players from the same team can be within 4m of the ball"],
      answer: 0,
      law: "Law 8.2",
      quote: "All other players (of both teams) must remain at least 4 m (4.5 yds) from the ball until it is in play"
    },
    {
      type: "multiple",
      text: "A defending player intentionally handles the ball in an attempt to deny a clear and obvious goal. The attempt is unsuccessful and the ball still goes in. What should you do?",
      options: ["Award a penalty kick and send off the defender","Award a goal and send off the defender","Award a goal and caution the defender","Award a goal and take no diciplinary action"],
      answer: 2,
      law: "Law 12.3",
      quote: "If the referee plays the advantage for an offence for which a caution/sending-off would have been issued had play been stopped, this caution/sending-off must be issued when the ball is next out of play. However, if the offence was denying the opposing team an obvious goal-scoring opportunity the player is cautioned for unsporting behaviour; if the offence was interfering with or stopping a promising attack, the player is not cautioned."
    },
    {
      type: "multiple",
      text: "A player who is off the field of play receiving treatment re-enters the field of play without permission and commits a careless tackle on an opponent. What is the correct outcome?",
      options: ["Award an indirect free kick and take no diciplinary action","Award an indirect free kick and caution the player","Award a dropped ball and take no diciplinary action","Award a direct free kick and caution the player", "Award a direct free kick and dismiss the player"],
      answer: 3,
      law: "Law 3.8, 12.3",
      quote: "A player is cautioned if guilty of: \n entering, re-entering or deliberately leaving the field of play without the referee’s permission. Explanation: As the player had not commited a second cautionable offence, they would not be sent off. \n \n Restart - Law 3.8 \n If a player who requires the referee’s permission to re-enter the field of play re-enters without the referee’s permission, the referee must: \n stop play (not immediately if the player does not interfere with play or a match official or if the advantage can be applied \n caution the player for entering the field of play without permission \n If the referee stops play, it must be restarted: \n with a direct free kick from the position of the interference \n with an indirect free kick from the position of the ball when play was stopped if there was no interference"
    },
    {
      type: "mutliple",
      text: "A player who is off the field of play receiving treatment re-enters the field of play without permission and commits a reckless tackle on an opponent. What is the correct outcome? ",
      options: ["Award an indirect free kick, caution the player twice and dissmiss them","Award a direct free kick, caution the player twice and dismiss them","Award an indirect free kick and take no diciplinary action", "Award a dropped ball and take no diciplinary action","Award a dropped ball, caution the player twice and dismiss them"],
      answer: 1,
      law: "12.3, 3.8",
      quote: "Where two separate cautionable offences are committed (even in close proximity), they should result in two cautions, for example if a player enters the field of play without the required permission and commits a reckless tackle or stops a promising attack with a foul/handball \n Law 3.8 - If a player who requires the referee’s permission to re-enter the field of play re-enters without the referee’s permission, the referee must: \n stop play (not immediately if the player does not interfere with play or a match official or if the advantage can be applied \n caution the player for entering the field of play without permission \n If the referee stops play, it must be restarted: \n with a direct free kick from the position of the interference \n with an indirect free kick from the position of the ball when play was stopped if there was no interference"
    },
    {
      type: "multiple",
      text: "At a dropped ball you drop the ball to a home team player, who dribbles 20 yards before shooting and scoring directly in the opposition goal. What do you do?",
      options: ["Award the goal", "Award a corner", "Award a goal kick", "Retake the dropped ball"],
      answer: 2,
      law: "8.2",
      quote: "If a dropped ball enters the goal without touching at least two players, play is restarted with: \n a goal kick if it enters the opponents’ goal \n a corner kick if it enters the team’s goal"
    },
    {
      type: "multiple",
      text: "Play is restarted with a dropped ball for team A and the player kicks the ball before it hits the ground. What should the referee do?",
      options: ["Allow play to continue", "Award an indirect free kick to team B", "Award a direct free kick to team B", "Retake the dropped ball"],
      answer: 3,
      law: "8.2",
      quote: "The ball is dropped again if it: \n touches a player before it touches the ground"
    },
    {
      type: "multiple",
      text: "A player accidentally loses his footware and then scores a goal before the ball goes out of play. Should the goal stand?",
      options: ["Yes", "No"],
      answer: 0,
      law: "4.2",
      quote: "A player whose footwear or shinguard is lost accidentally must replace it as soon as possible and no later than when the ball next goes out of play; if before doing so the player plays the ball and/or scores a goal, the goal is awarded."
    },
  ],


  restarts: [
    {
      type: "multiple",
      text: "During open play, the referee accidentally blows the whistle. How is play restarted?",
      options: ["Allow play to continue", "Dropped ball", "Indirect free kick to the team who touched it last", "Direct free kick to the team who touched it last"],
      answer: 1,
      law: "Law 8/2. Dropped ball procedure",
      quote: "A kick-off starts both halves of a match, both halves of extra time and restarts play after a goal has been scored. Free kicks (direct or indirect), penalty kicks, throw-ins, goal kicks and corner kicks are other restarts (see Laws 13–17). A dropped ball is the restart when the referee stops play and the Law does not require one of the above restarts. If an offence occurs when the ball is not in play, this does not change how play is restarted."
    },
    {
      type: "multiple",
      text: "What is the minimum distance opponents must retreat at a free kick?",
      options: ["9.15 metres","11 yards", "7.5 metres"],
      answer: 0,
      law: "Law 13 – Free kicks",
      quote: "Opponents must remain at least 9.15 m (10 yds) from the ball until it is in play."
    },
    {
      type: "multiple",
      video: "videos/clip1.mp4",
      text: "Watch the clip. What is the correct decision?",
      options: ["Allow play to continue", "Award an indirect free kick to the attacking team and caution the goalkeeper for stopping a promising attack", "Award an indirect free kick to the attacking team and dismiss the goalkeeper for denying a goalscoring opportunity", "Award an indirect free kick and take no diciplinary action"],
      answer: 3,
      law: "12.1",
      quote: "If the goalkeeper handles the ball inside their penalty area when not permitted to do so, an indirect free kick is awarded but there is no disciplinary sanction. However, if the offence is playing the ball a second time (with or without the hand/arm) after a restart before it touches another player, the goalkeeper must be sanctioned if the offence stops a promising attack or denies an opponent or the opposing team a goal or an obvious goal-scoring opportunity."
    },
    {
      type: "multiple",
      text: "At the taking of a quick free kick, a defender who was less than the required distance intercepts the ball. What is the referee's decision?",
      options: ["Allow play to continue","Award an indirect free kick and caution the player", "Award a direct free kick and caution the player", "Award an indirect free kick and take no diciplinary action"],
      answer: 0,
      law: "Law 13.3 – Free kicks",
      quote: "If a player takes a free kick quickly and an opponent who is less than 9.15 m (10 yds) from the ball intercepts it, the referee allows play to continue."
    },
    {
      type: "text",
      text: "An attacking player is fouled outside the penalty area but falls into the penalty area. How is play restarted?",
      answer: "Offences are penalised at the point on the field where the offence occurred so a foul outside the penalty area is a free kick offence even if the player falls into the penalty area.",
      law: "Law 13.3 – Free kicks",
      quote: "Offences are penalised at the point on the field where the offence occurred so a foul outside the penalty area is a free kick offence even if the player falls into the penalty area."
    },
    {
      type: "multiple",
      text: "A dog enters the field of play during the match and prevents a goal being scored by stopping the ball on the goal line. The dog's interference does not prevent any defending player from playing the ball. What is the referee's decision?",
      options: ["Award the goal","Award a dropped ball to the goalkeeper", "Award a dropped ball to the attacking team", "Award a penalty kick"],
      answer: 1,
      law: "3.7",
      quote: ""
    },
    {
      type: "multiple",
      text: "A defender takes a direct free kick and passes the ball back to a goalkeeper. The goalkeeper fails to kick the ball and does not touch it. After that, the ball enters the goal. What is the correct decision?",
      options: ["Award the goal","Award a corner", "Award a goal kick", "Retake the free kick"],
      answer: 1,
      law: "Law 13 – Free kicks",
      quote: "If a free kick is kicked directly into the team's own goal, the referee awards a corner kick to the opposing team."
    },
    {
      type: "multiple",
      text: "During open play, an attacker strikes a shot on goal, which deflects off a balloon, preventing the goalkeeper making a save, and goes into the goal. What should the referee do?",
      options: ["Award the goal","Award a dropped ball where the offence took place"],
      answer: 1,
      law: "Law 5.3 – The Referee",
      quote: "stops, suspends or abandons the match for any offences or because of outside interference. e.g: \n an extra ball, other object or animal enters the field of play during the match, the referee must: \n stop play (and restart with a dropped ball) only if it interferes with play - unless the ball is going into the goal and the interference does not prevent a defending player playing the ball, the goal is awarded if the ball enters the goal (even if contact was made with the ball) unless the interference was by the attacking team"
    },
    {
      type: "text",
      text: "Name the 8 reasons time should be added to each half",
      answer: "Allowance is made by the referee in each half for all playing time lost in that half through: \n<br> substitutions \n<br> assessment and/or removal of injured players \n<br> wasting time \n<br> disciplinary sanctions \n<br> medical stoppages permitted by competition rules e.g. ‘drinks’ breaks (which should not exceed one minute) and ‘cooling’ breaks (ninety seconds to three minutes) \n<br> delays relating to VAR 'checks' and 'reviews' \n<br> goal celebrations \n<br> any other cause, including any significant delay to a restart (e.g. due to interference by an outside agent) \n<br> The fourth official indicates the minimum additional time decided by the referee at the end of the final minute of each half. The additional time may be increased by the referee but not reduced. \n<br> The referee must not compensate for a timekeeping error during the first half by changing the length of the second half.",
      law: "Law 7",
      quote: "Allowance is made by the referee in each half for all playing time lost in that half through: \n substitutions \n assessment and/or removal of injured players \n wasting time \n disciplinary sanctions \n medical stoppages permitted by competition rules e.g. ‘drinks’ breaks (which should not exceed one minute) and ‘cooling’ breaks (ninety seconds to three minutes) \n delays relating to VAR 'checks' and 'reviews' \n goal celebrations \n any other cause, including any significant delay to a restart (e.g. due to interference by an outside agent) \n The fourth official indicates the minimum additional time decided by the referee at the end of the final minute of each half. The additional time may be increased by the referee but not reduced. \n The referee must not compensate for a timekeeping error during the first half by changing the length of the second half."
    },
    {
      type: "multiple",
      text: "What is the maximum length of a drinks break",
      options: ["30 seconds","60 seconds", "90 seconds", "120 seconds"],
      answer: 1,
      law: "Law 7",
      quote: "‘drinks’ breaks (which should not exceed one minute)"
    },
    {
      type: "multiple",
      text: "The referee accidentally blows for half time 5 minutes early. What should he do?",
      options: ["Play 45 minutues in the second half, + 5 minutes added to conpensate lost time","Play 45 minutes and do not conpensate any time", "Play 50 minutes second half + any stoppages", "Play 40 minutes second half to make it equal"],
      answer: 1,
      law: "Law 7",
      quote: "The referee must not compensate for a timekeeping error during the first half by changing the length of the second half."
    },
    {
      type: "text",
      text: "In which three situations should you stop the game if the ball hits the referee",
      answer: "it touches a match official, remains on the field of play and: \n<br> a team starts a promising attack or \n<br> the ball goes directly into the goal or \n<br> the team in possession of the ball changes",
      law: "Law 9",
      quote: "it touches a match official, remains on the field of play and: \n a team starts a promising attack or \n the ball goes directly into the goal or \n the team in possession of the ball changes"
    },
    {
      type: "text",
      text: "A subtitute was a few metres on the field of play when the goal was scored by their team but did not interfere with play. After that, before play restarts, the referee realises that the extra person was on the field. What is the correct decision? What is the correct diciplinary sanciton? What is the correct restart?",
      answer: "The law does not expect the referee to penalise encroachment onto the field of play if it does not impact the play. The goal is allowed and the team that conceded the goal restarts play with a kick off. There is no diciplinary sanction.",
      law: "Law 9",
      quote: "it touches a match official, remains on the field of play and: \n a team starts a promising attack or \n the ball goes directly into the goal or \n the team in possession of the ball changes"
    },
    {
      type: "text",
      text: "An attacker does not control a pass from a team-mate, accidentally falls to the ground and the ball goes out for a goal kick. The attacker gets up as quickly and runs away as quickly as possible. The goalkeeper kicks the ball when the attacker is still inside the penalty area with their backs towards the goal. After that, the attacker intercepts the ball and scores a goal. What is the correct decision, diciplinary action and restart?",
      answer: "The goal is awarded. There is no offence as the attacker did not have enough time to leave the penalty area and was allowed to touch the ball once it was in play. There is no diciplinary action and play is restarted with a kick off.",
      law: "Law 16.2",
      quote: "If, when a goal kick is taken, any opponents are inside the penalty area because they did not have time to leave, the referee allows play to continue. If an opponent who is in the penalty area when the goal kick is taken, or enters the penalty area before the ball is in play, touches or challenges for the ball before it is in play, the goal kick is retaken."
    },
    {
      type: "text",
      text: "A team has fewer than 7 players because one player has deliberately left the field of play. May the match continue?",
      answer: "The referee is not obligied to stop play and the advantage may be applied, but the match must not resume after the ball has gone out of play.",
      law: "Law 3.1",
      quote: "Above"
    },
    

    
    
    
  ]
};
