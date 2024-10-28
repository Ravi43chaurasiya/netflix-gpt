#CRA

#Header

#Login Page
#form
#form validation
#routing
-useRef Hook
-Firebase Setup
-deploying my app to production
-created SignUp user account
-Implement SignIn user Api
-Created Redux Store with userSlice
-implemented Sign out feature
-update profile

BugFix:if the user is not nogged in redirect to login page and vice-versa

-unsubscribe to onAuthStateChanged call back

-fetch from TMDB Movies
  
  -register TMDB API and create an app and get access token.

  -get Data from TMDB now playing movies list api.

  - custom Hook for nowPlayingmovies
  - create movieSlice
  - update Store with movie Data
  - planning for main container and secondary container
  - fetch data for trailer video
  - update store with trailer video data
  - Embeded the yutube video and make it autoplay and mute
  - build secondary component
    - movie list
     - movie card
    - now playing movies
    - popular movies
    - top rated movies
    - custom hooks for the above three
  - GPT Search Feature
   - gpt search page
   - gpt search bar
   - multi language feature in our gpt search page
  - get openAI key from plateform.openAI->login if not==>profile=>api key
  - npm openAi(search)
    - npm install openai
    - import OpenAI from 'openai';

- const client = new OpenAI({
 -  apiKey: process.env['OPENAI_API_KEY'], // This  - is the default and can be omitted
- });
- see gptsearchBar.js for 
- {
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });
- }

- search npm openai to know more .

- created movies card based on the gpt result on search page.
- .env file included to secure the api keys of open ai and tmdb.



  


  
  


