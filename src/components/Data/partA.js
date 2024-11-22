const partA = (
    // to do: create an "END" state - with a general reflection question.
   {
      "1": {
        question:
          `<p>"I think I've been raped," Sergeant Ruiz mutters, sobbing into her hands.</p>

          <p>You remain silent. You are partially taken aback, and not entirely sure what to say.</p>
          
         <p> Sergeant Ruiz exhales and says, "I don't really know what happened. I went out with some of my friends last night. We were having a good time until we ran into Staff Sergeant Saunders and some of his buddies. He tried to sit next to me and  then began grabbing my hand. I kept pushing him back and then went to the other side of the bar. I was so angry that I just kept on drinking. I don't remember much after that - just waking up this morning in the barracks with my clothes on the floor..."</p><p>What do you say next?</p>`,
        options: [
          { text: `"It's great that you came to see me. How much did you have to drink exactly?"`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not the right choice. The focus of this conversation should be on supporting Sergeant Ruiz through her experience of sexual assault. Asking her how much she had to drink points blame at her for the violence perpetrated against her.` },
          { text: `"I'm so glad you came to see me. What can I do to help?"`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice out of the three options. Asking Sergeant Ruiz what you can do to help establishes your role as a supportive helper in this situation and may help Sergeant Ruiz open up further about what she needs from you.` },
          { text: `"I'm so glad you came to see me. Let's get you some medical attention."`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This statement is not the right choice. While you may be thinking that Sergeant Ruiz could benefit from medical attention, you don't know what kind of support she's seeking at the moment. Pushing her towards the help you think she should get may prevent her from trusting you.` },
        ],
        multipleSelect: false,
        type: "choice"
      }, 
      "2": {
        question: `<strong>You pause and say, "I'm so glad you came to see me. What can I do to help?"</strong><br/><p>She replies, "Please - I don't want anyone to know. I have my suspicions, but I just can't go there…I don't know what the repercussions might be." She pauses to choose her next words carefully. "I don't think I want you to do anything. I don't even exactly know why I came. I guess I just felt like I had to talk with someone."</p>

        <p>You pause to consider her request and all that she had shared. She came to you in confidence as a spiritual provider. Even if she is not seeking overtly spiritual guidance, her communication is privileged and should be treated with the utmost respect. You know that in the military, this type of information shared with a chaplain is considered 100% confidential.</p>
        
        `, 
        options: [
            {text: `What are you feeling right now? How did your feelings influence your responses to Sergeant Ruiz?`, conditions: {type: null, command: '', index: null}, feedback: ``}
            
        ],
        multipleSelect: false,
        type: "open", 
        popUp: true, 
      popUpContent: `<p>Some questions to consider:</p><ul>
        <li>What's your next step while Sergeant Ruiz is in your office?</li>
        <li>What's are your options once Sergeant Ruiz leaves your office?</li>
        <li>Do you tell anyone about the alleged incident?</li>
        <li>What's your follow-up plan with Sergeant Ruiz?</li>
        <li>How do you provide spiritual care for Sergeant Ruiz? For Staff Sergeant Saunders? For others who observed the dynamics between them?</li>
        </ul>`
    }, 
    "3": {
        question: `<p>With all that swirling through your mind, you have to act. What can be done to ensure that Sergeant Ruiz gets the help she needs at this difficult moment?</p><p>What do you say next?</p>`,
        options: [ 
           
            {text: `I promise I will not tell anyone. You can always talk to me.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `While this isn't the worst choice, you should consider the complexity of the situation before promising Sergeant Ruiz that you will never tell anyone else about what she shared. You can help her access resources, and you should let her know that you can be a supportive person to her through this process.`},
            {text: `I know you fear the repercussions, but what if he does this again, or to someone else?`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not a good choice. You should support Sergeant Ruiz at this moment. It is not her responsibility to stop her rapist from acting again, especially as she has fears about the consequences of reporting the assault.`},
            {text: `I can keep this confidential for you, but I can also help you share this with some other helpers.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice. You affirmed Sergeant Ruiz's desire for confidentiality, but also let her know that you can continue to help her seek additional support and care.`}
           
        ], 
        multipleSelect: false, 
        type: "choice", 
        popUp: true, 
        popUpContent: `<p>For more on chaplain confidentiality in the military, see Rule 503 of the Uniform Code of Military Justice.  For discussion related specifically to confidentiality in U.S. Army chaplaincy, see paragraph 16-2 in Army  Regulation 165-1, Army Chaplain Corps Activities (5 March 2024).</p><p>Learn more about <a href="https://sapr.mil/reporting-options" target="_blank" rel="noopener noreferrer">reporting sexual assault in the military</a>.</p>`
    },
    "4": {
      question: `<p>"I can keep this confidential for you, but I can also help you share this with some other helpers. I understand your desire for privacy, Sergeant Ruiz," you say, "and I can't begin to imagine what  you are feeling right now. Thank you for coming and sharing this with me. I feel so privileged to sit with you,  even here in the midst of confusion and pain. I want to help you work through what happened to you – both  right now and in the days to come. I also want you to know that I will be limited in the help that I can give you  if we don't share what happened to you with other helpers." </p><p>"What do you mean, 'other helpers'?" she asks.</p>
      <p>"There are some things we can't go back and do later," you reply.</p><p>"We want to get you medical care  after what happened, and we should also preserve any evidence that may be able to prove what happened  and hold those who did it responsible. A nurse could help us with these things while keeping the situation confidential." Sergeant Ruiz nods.</p>
      <p>You continue, "There are others, like myself, who can help you work through the emotional and  spiritual trauma you experienced. We can work together to get you the care that you desire and you need."</p>`,
      multipleSelect: false, 
      type: "none", 
      popUp: true, 
      popUpContent: `<p>Additional military resources to consider in this situation could be the Sexual Assault Response  Coordinator (SARC), Victim Advocate, and Family Advocacy Program (FAP) as outlined at <a href="https://www.armyresilience.army.mil/sharp/" target="_blank" rel="noopener noreferrer">Sexual Harassment/Assault Response and Prevention Program</a> and in DoD Directive 6495.01 "Sexual Assault Prevention and  Response (SAPR) Program."</p>`
  },
  "5": {
    question: `<p>Sergeant Ruiz agrees to go with you to the hospital to receive care. You partner with the  medical staff and sexual assault response coordinators to help Sergeant Ruiz during this difficult time.</p><p>In the end, she decides that she will only file a restricted report about what happened and not press charges or pursue legal or judicial recourse.</p>`,
    multipleSelect: false, 
    type: "none"
    },
    "6": {
      question: `<h3>Two months later</h3><p>You meet with Sergeant Ruiz a few times right after the incident happened. In those conversations, she shared that she was trying to make sense of it all by asking herself questions like: </p><ul><li>Why did this happen to me?</li><li>Was I at fault?</li><li>Who am I now that this happened?</li><li>What would others think of me if they knew?</li><li>How could God have let this happen?</li></ul><p>You slowly help her process the issues of meaning, purpose, and identity that Sergeant Ruiz is experiencing. She makes some progress in talking through them with you, and then the  conversations seem to cut too deep. She isn't willing to go to those places of difficulty yet. Slowly she begins  to disengage - at first showing up late for appointments, and then not showing up at all.</p>`,
      multipleSelect: false, 
      type: "none"
      },
      "7": {
        question: `<p>Now you see Sergeant Ruiz every week or two, while visiting soldiers in the motor pool. When she sees you, she politely nods and smiles, but keeps her distance.</p><p>What do you do?</p>`,
        options: [ 
           
            {text: `Ignore Sergeant Ruiz to respect the boundary she set.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not the best choice in this situation. Sergeant Ruiz's growing distance could be an indication of a deepening mental health crisis brought on by the assault. Continue to extend friendliness towards her so that she knows you can be a resource to her should she need you.`},
            {text: `Appraoch Sergeant Ruiz and let her know you would be happy to meet with her again.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is a good choice in this situation. Sergeant Ruiz's growing distance could be an indication of a deepening mental health crisis brought on by the assault. It is wise to offer to meet with her and to screen for spiritual distress.`},
            {text: `Ask Sergeant Ruiz if she plans to pursue any future recourse for the sexual assault.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the wrong choice. You should not bring up the details of her situation in front of others as this violates her confidentiality.`}
           
        ], 
        multipleSelect: false, 
        type: "choice", 
        popUp: true, 
        popUpContent: `<p>For more on chaplain confidentiality in the military, see Rule 503 of the Uniform Code of Military Justice.  For discussion related specifically to confidentiality in U.S. Army chaplaincy, see paragraph 16-2 in Army  Regulation 165-1, Army Chaplain Corps Activities (5 March 2024).</p><p>Learn more about <a href="https://sapr.mil/reporting-options" target="_blank" rel="noopener noreferrer">reporting sexual assault in the military</a>.</p>`
    },
      "8": {
        question: `<p>You reach out to Sergeant Ruiz to check in on her and let her know you would be happy to meet with her if it would be helpful. She smiles, but doesn't take you up on your offer.</p>
        <p>You can never be fully sure what happened that night, or whether Saunders had any part in it. You hope not, but in either case Saunders remains one of the soldiers under your spiritual  care, whatever that may involve in the present or the future. As you pull out of the parking lot in the evening, a silent prayer emerges from the depths:</p>
        <p>"May truth come to light; may justice be done; may unseen wounds heal; may each one under my spiritual care deeply flourish."</p>`,
        
        multipleSelect: false, 
        type: "none",
        end: true
    }
  }
  )
  export default partA;