---
templateKey: blog-post
title: Hello ask-utils.dev
date: 2019-04-30T00:48:25.518Z
description: >-
  This is our first posts about ask-utils.dev.We can get information about how
  to make your Alexa skill more easily.
featuredpost: false
featuredimage: /img/assets/youtube_profile_image.png 
tags:
  - information
---
## What about ask-utils?

ask-utils is the utility function library for ask-sdk to create a Alexa custom skill.

### Install

```bash
$ npm i -S ask-sdk ask-utils
```

### Before ask-utils

```typescript
import { getRequestType } from 'ask-sdk'
const LaunchRequestHandler = {
  canHandle (handlerInput) {
    return getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest'
  },
  handle (handlerInput) {
    const speechText = 'This is example skill'

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard(SKILL_NAME, speechText)
      .getResponse()
  }
}
```


### After ask-utils

```typescript
import { isLaunchReques } from 'ask-utils'
const LaunchRequestHandler = {
  canHandle (handlerInput) {
    return isLaunchRequest(handlerInput)
  },
  handle (handlerInput) {
    const speechText = 'This is example skill'

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard(SKILL_NAME, speechText)
      .getResponse()
  }
}
```

## Features

- Make random message
- Persistant attribute manager helper
- Resolve slot value
- Provide a Interceptor
