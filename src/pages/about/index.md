---
templateKey: 'about-page'
path: /about
title: About ASK Utils
---
### Make Alexa skill more easily
We want to make Alexa Skill more emotional and useful.  
And we make various utility functions, handler, and some Builder or Factory class.
We think these utilities should be more open, so we publish our utility function as ASK Utils.


### Easy to use
ASK Utils has a lots of helper functions.

#### Before ASK Utils

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

#### After ASK Utils

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

### TypeScript support
When we create some utility function, we have to make or take care of TypeScript.  
ASK Utils packages are almost made by TypeScript.  
So we don't have to make type definition, just import and use it.

### Amazon Pay & Proactive Event support

We provide packages for Amazon Pay and Proactive Events.
We can easy to make the payload and call the proactive event API.

#### Amazon Pay

```javascript
const AMAZONPay = require('@ask-utils/amazon-pay')
// Make Order
const SellerOrderAttributes = AMAZONPay.Setup.BillingAgreementBuilder
  .setPlatFormId('My id')
  .setSellerNote('my note')
  .setSellerBillingAgreementId('agreement id')
  .setSellerNote('My store')
  .setCustomInformation('custom info')

// Make Payload
const setupPayload = AMAZONPay.Setup.PayloadBuilder
  .setSellerId('my seller id')
  .setCountryOfEstablishment('country')
  .setLedgerCurrency('ledger currency')
  .setCheckoutLanguage('checkout lang')
  .withAmazonShippingAddress(true)
  .isSandboxMode(true)
  .setSandboxCustomerEmailId('email')
  .updateBillingAgreement(SellerOrderAttributes)
const payload = setupPayload.getPayload()

```

#### Proactive Event


```typescript
import { Client, MediaContent } from '@ask-utils/proactive-event'

// setup client
const clientSecret = 'XXXXXXXXXXXXXX'
const client = new Client({
  clientId: 'amzn1.application-oa2-client.XXXXXXXXX',
  clientSecret: 'XXXXXXXXXXXXXX',
  apiRegion: 'FE' // default: US
})
// configure event information
const PayloadBuilder = MediaContent.Available.PayloadFactory.init()
const parameters = PayloadBuilder
  .setMediaType('ALBUM')
  .setStartTime(moment('2019-03-11T10:05:58.561Z').toDate())
  .setDistributionMethod('AIR')
  .getParameter()
// configure localizedAttributes
const localizedAttributes = LocalizedAttributes.Factory.init()
  .putLocalizedAttribute('en-US', 'contentName', 'New CD')
  .putLocalizedAttribute('ja-JP', 'contentName', 'あたらしいCD')
  .getLocalizedAttributes()

// Call proactive event API
client.setEvent(parameters)
  .setRelevantAudience('Multicast')
  .setLocalizedAttributes(localizedAttributes)
  .requestEvent()
  .then(result => console.log(result))
  .catch(result => console.log(result))
```