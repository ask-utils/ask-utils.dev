---
templateKey: blog-post
title: Get Random message by getRandomMessage() function from ask-utils
date: 2019-05-10T00:48:25.518Z
description: >-
  getRandomeMessage() provides you to get the randomized message. Let's make your skill more engaging.
featuredpost: false
# featuredimage: /img/assets/youtube_profile_image.png 
tags:
  - ask-utils
  - how-to
---
Alexa team told us to make our skill interactions more natural and conversational.  
-> [Alexa Skill Recipe: Randomize Your Responses to Add Variety to Your Skill](https://developer.amazon.com/ja/blogs/alexa/post/37e732b7-48fa-4940-9f12-9ffde7eeeaf8/alexa-skill-recipe-randomize-your-responses-to-add-variety-to-your-skill)

And the blog post tell us the example code to get the randomized message.  

```javascript
function randomPhrase(myData) {
  // the argument is an array [] of words or phrases
  var i = 0;
  i = Math.floor(Math.random() * myData.length);
  return(myData[i]);
}
const confirmations = ['ok','got it','roger that', 'sounds good', 'great'];
const message = "Here’s your random confirmation message, " + randomPhrase(confirmations))
```

## ask-utils provides simple helper function.
The ask-utils provides a useful helper function.   
The function is `getRandomMessage()`.  
When use the function, you don't have to define these a helper function.

```typescript
import { getRandomMessage } from 'ask-utils'
const message = "Here’s your random confirmation message, " + getRandomMessage([
    'ok',
    'got it',
    'roger that',
    'sounds good',
    'great'
  ]
)
```

