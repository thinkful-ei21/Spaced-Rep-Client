Live version of app: https://leo-spaced-rep-client.herokuapp.com/dashboard
(free heroku server may fall asleep.  If app will not log in please visit https://leo-spaced-rep-server.herokuapp.com/ and try again)


spanGlish
--------------

Using a singly linked list, learn vocab words in Spanish and English

Features:
 Login and registration using JWT, connected via MongoDB
 Spaced repition algoroithm to learn the vocab words. As you guess the words correctly, they will appear less often. Failed words
  will show up more often.
 Toggle between english and spanish, to practice full laungage comprehension 
 
Reach Goals:
 Spellcheck: Dev work was put in to allow users at a second chance for near misses. Work has to be done on the back end to increase   the accuracy of the program.
   Issues: Can only check front facing words, a jam in logic prevents otherwise. Check engine/secondChance.js
 Session tracking: To properly doccument learning curve on client side, session's must be implemented. 
   User Story: What if I want to be able to see how I do on a series of lessons over an extended period of time?
   
  
