# Classification NPL
 Show and analysis text with Aylient AI API 


## Getting started
Clone this repo from [here](https://github.com/abdulrahmanabdullah/taxonomies-words-js.git)

Then go into taxonomies-words-js folder and run this command 
```
npm install
``` 
OR 
``` 
yarn install 
``` 
To download all dependencies, when build successfully you will show new folders in root project called node_modules 

## Start server
**server location : src/server/server.js**

After install all dependencies, open your terminal and run 
```
yarn start
``` 
Or for development mode 
```
yarn start-dev
``` 
Notice : you can use `npm` also.

## Webpack
You notice two webpack files, First one for development mode to watch live change without reload page or build, And the other one for production mode it is the same configuration in development mode **But** this file contain [service worker plugin](https://developers.google.com/web/tools/workbox/guides/codelabs/webpack)

⚠️⚠️ Service worker not working with development mod


## Signup for an API key
First, you will need to go [here](https://developer.aylien.com/signup). Signing up will get you an API key. Don't worry, at the time of this course, the API is free to use up to 1000 requests per day or 333 intensive requests. It is free to check how many requests you have remaining for the day.

## Install the SDK
Next you'll need to get the SDK. SDK stands for Software Development Kit, and SDKs are usually a program that brings together various tools to help you work with a specific technology. SDKs will be available for all the major languages and platforms, for instance the Aylien SDK brings together a bunch of tools and functions that will make it possible to interface with their API from our server and is available for Node, Python, PHP, Go, Ruby and many others. We are going to use the Node one, the page is available [here](https://docs.aylien.com/textapi/sdks/#sdks). You get 1000 free requests per day. 

## Require the SDK package
Install the SDK in your project and then we'll be ready to set up your server/index.js file.

Your server index.js file must have these things:

Require the Aylien npm package
```
var aylien = require("aylien_textapi");
```

### Environment Variables
  After registration they will give you app_id and app_key, take this value and put it in 

  textapi instance, **you can find this variable in /src/server/route/api/** 

  to be look like.
```
// set aylien API credentias
var textapi = new aylien({
  application_id: "your-api-id",
  application_key: "your-key"
});
```

Here in my app I'm put it in .env file for secret purpose 😊😊 

Then grab this value with dotenv plugin 

*download dotenv*
```
yarn add -D dotenv
```
Now call this plugin from router file like ,
```
const dotenv = require('dotenv');
dotenv.config();
```
With ``` process.env.YOUR-CUSTOM-NAME-HERE``` we can access to this variables .👍🏻
```javascript
// set aylien API credentials
// NOTICE that textapi is the name I used, but it is arbitrary. 
// You could call it aylienapi, nlp, or anything else, 
//   just make sure to make that change universally!
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});
```

### Using the API
We're ready to go! The API has a lot of different endpoints you can take a look at [here](https://docs.aylien.com/textapi/endpoints/#api-endpoints). And you can see how using the SDK simplifies the requests we need to make. 
In this app I'M using taxonomies with text.

## Testing folder :
I'm writing some test like async testing when api is called and dom testing to check some element is empty when page loaded also express testing for testing our route.
to check it run this command : 
```
yarn test
``` 
And to keep jest track your testing when some change ocurred 
```
yarn test-watch 
``` 
