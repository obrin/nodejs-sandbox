import './compose'
import _ from 'lodash'
import { compose } from 'pointfree-fantasy'

const hello = compose()

// console.log('===========-----------', hello('yoyo', 'sdf'))

import fs from 'fs'
import path from 'path'
const dir = './utils/hello/me.js'

console.log(path.basename(dir))

function addVariableValues(variables, params) {
  return variables.map(variable => {
    const value = params[variable.name]

    return value
      ? { ...variable, value }
      : variable
  })
}


const variables = [
  {
    "name": "PMUSER_ALLOWMETHODS",
    "description": null,
    "hidden": false,
    "sensitive": false
  }
]

const params = {
  "PMUSER_ALLOWMETHODS": "adf"
}



const v = addVariableValues(variables, params)

// console.log(variables)


const hapy = {
  get() {
    console.log('get')
  },
  update() {
    this.get()
    console.log('update')
  }
}


function fakeApi2(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}

function fakeApiReject(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('bad----'))
    }, 1000)
  })
}

async function run() {
  const arr = [1, 2, 3, 4, 5]

  const newArr = ['new']
  arr.forEach(async (num) => {
    const getNum = await fakeApi2(num)
    newArr.push(getNum)
    console.log(newArr)
  })

  console.log('------')
}

// run()


import Placeholders from 'placeholders'
// const placeholders = Placeholders({ regex: /<<([^.<>]+)>>/ })

// const string = '<<hello>> world <<hehe>> <<sheep>>'
// const fullPath = placeholders(string, {hello: 'ads', hehe: 'blabla', sheep: 'black'})
// console.log(fullPath)


async function run5() {
  const data = [fakeApi2(1), fakeApi2(2), fakeApiReject(3).catch(err => {
    console.log(err)
    throw new Error('asdf')
    // return 'hello'
  })]

  console.log('---------')

  const dataWait = await Promise.all(data)

  console.log(dataWait)
}

// run5()

import s from 'ht-schema'

const schemaSeasons = s.Object({
  year: s.String()
})

const schemaMain = s.Object({
  title: s.String(),
  year: s.String(),
  season: s.Number({ strict: true })
  // seasons: s.Array([ schemaSeasons ])
})

const data = {
  title: 'bacon',
  year: '2012',
  season: '10000'
  // seasons: [ {
  //   year: null
  // }]
}

const data2 =   {
  "id": 10606,
  "title": {
    "en_US": "Mary Jane's Last Dance"
  },
  "categoryName": "Mary Jane's Last Dance",
  "episodeNumber": 13,
  "seasonNumber": 6,
  "parentalGuidance": "TV-14",
  "synopsis": {
    "en_US": "Grayson tries to prevent Jules from running her birthday; everyone experiences major life changes."
  },
  "duration": 1245,
  "originalTitle": {
    "en_US": "Mary Jane's Last Dance"
  },
  "descriptionShort": {},
  "downloadable": true,
  "contentStartOffset": 0,
  "contentEndOffset": -1
}


const episodesSchema = s.Object({
  id: s.Number(),
  title: s.Object({ strict: false }),
  categoryName: s.String(),
  episodeNumber: s.Number(),
  seasonNumber: s.Number(),
  synopsis: s.Object({ strict: false }),
  duration: s.Number(),
  originalTitle: s.Object({ strict: false }),
  descriptionShort: s.Object({ strict: false }),
  downloadable: s.Boolean(),
  contentStartOffset: s.Number(),
  contentEndOffset: s.Number(),
})

// try {
//   episodesSchema.validate(data2)
// } catch (err) {
//   console.log('ERROR:', err)
// }


// console.log(data.season)

const tagNames = ['a', 'b']



// let template = tag._i18n && tag._i18n[tagName] || {}



// function Bacon(opts) {
//   // callback(error='baby')
//   this.hello = opts.hello
// }
//
// Bacon.prototype.request = function(callback) {
//   this.error = 'null'
//   callback(error='you----')
// }
//
//
// const barn = new Bacon({hello: 'banana'})
//
// barn.request((error) => {
//   console.log(error)
// })



const a = {
  "contractId" : "ctr_M-1PLOTR7",
  "groupId" : "grp_90944",
  "propertyId" : "<<propertyId>>",
  "rules" : {
    "name" : "default",
    "uuid" : "default",
    "behaviors" : [ {
      "name" : "originCharacteristics",
      "options" : {
        "country" : "UNKNOWN"
      },
      "uuid" : "d1942360-d4d7-47dd-b9ae-c22d1f99efd5"
    }, {
      "name" : "contentCharacteristics",
      "options" : {
        "objectSize" : "LESS_THAN_1MB",
        "popularityDistribution" : "ALL_POPULAR",
        "catalogSize" : "SMALL",
        "contentType" : "UNKNOWN"
      },
      "uuid" : "3d66a07b-0363-44ff-9cd4-1da99ab0e8b4"
    }, {
      "name" : "restrictObjectCaching",
      "options" : {
        "disableHtml" : "",
        "maximumSize" : ""
      },
      "uuid" : "55fad69d-4fab-42c4-9667-38fce7128b7f"
    }, {
      "name" : "origin",
      "options" : {
        "originType" : "NET_STORAGE",
        "netStorage" : {
          "downloadDomainName" : "<<downloadDomainName>>",
          "cpCode" : "123",
          "g2oToken" : null
        }
      },
      "uuid" : "8fed03a8-07c8-48cc-9788-e98041082690"
    }, {
      "name" : "cpCode",
      "options" : {
        "value" : {
          "id" : 495817
        }
      },
      "uuid" : "0cc935ae-cf25-43b1-a87f-00b14b3fcc16"
    }, {
      "name" : "report",
      "options" : {
        "logHost" : true,
        "logReferer" : true,
        "logUserAgent" : true,
        "logAcceptLanguage" : false,
        "logCookies" : "OFF"
      },
      "uuid" : "506958f4-426f-4df1-8c16-840c57b08a17"
    }, {
      "name" : "clientCharacteristics",
      "options" : {
        "country" : "ASIA_PACIFIC"
      },
      "uuid" : "f32021b4-28c8-468f-97e5-b3f374b5ce23"
    }, {
      "name" : "gzipResponse",
      "options" : {
        "behavior" : "ALWAYS"
      },
      "uuid" : "514da39e-af9c-44a7-9b07-0c0c03d20961"
    }, {
      "name" : "caching",
      "options" : {
        "behavior" : "MAX_AGE",
        "mustRevalidate" : false,
        "ttl" : "600s"
      },
      "uuid" : "ade30cb2-e20f-4aae-b036-6c21291e3dfc"
    } ],
    "children" : [ {
      "name" : "CORS Policy",
      "uuid" : "66ccab5f-b34a-4f7c-84a1-71b663bffc35",
      "behaviors" : [ {
        "name" : "modifyOutgoingResponseHeader",
        "options" : {
          "action" : "MODIFY",
          "avoidDuplicateHeaders" : false,
          "newHeaderValue" : "*",
          "standardModifyHeaderName" : "ACCESS_CONTROL_ALLOW_ORIGIN"
        },
        "uuid" : "98a28851-b59b-4393-b33b-1c171d123d94"
      }, {
        "name" : "modifyOutgoingResponseHeader",
        "options" : {
          "action" : "MODIFY",
          "avoidDuplicateHeaders" : false,
          "newHeaderValue" : "GET",
          "standardModifyHeaderName" : "ACCESS_CONTROL_ALLOW_METHODS"
        },
        "uuid" : "4b3565f6-3dac-4f22-af63-4fb3d1f37497"
      }, {
        "name" : "modifyOutgoingResponseHeader",
        "options" : {
          "action" : "MODIFY",
          "avoidDuplicateHeaders" : false,
          "newHeaderValue" : "Authorization",
          "standardModifyHeaderName" : "ACCESS_CONTROL_ALLOW_HEADERS"
        },
        "uuid" : "5c188ca4-70b9-47ab-8ea7-86570e503bcd"
      }, {
        "name" : "modifyOutgoingResponseHeader",
        "options" : {
          "action" : "MODIFY",
          "avoidDuplicateHeaders" : false,
          "newHeaderValue" : "3000",
          "standardModifyHeaderName" : "ACCESS_CONTROL_MAX_AGE"
        },
        "uuid" : "928ad49d-ba59-4aba-b4af-bc4e2ed00b2f"
      } ],
      "children" : [ ],
      "criteria" : [ ],
      "criteriaMustSatisfy" : "all",
      "comments" : ""
    }, {
      "name" : "<<X-Cache-Headers-name>>",
      "uuid" : "<<X-Cache-Headers-uuid>>",
      "behaviors" : [ {
        "name" : "advanced",
        "options" : {
          "description" : "",
          "xml" : "<edgeservices:modify-incoming-request.add-header>\n    <status>on</status>\n    <name>Pragma</name>\n    <value>akamai-x-cache-on, akamai-x-cache-remote-on, akamai-x-check-cacheable</value>\n</edgeservices:modify-incoming-request.add-header>\n<match:metadata-stage value=\"client-response\">\n    <!-- Set CACHE_STATUS to MISS initially.  Override based on specific status -->\n    <assign:variable>\n        <name>CACHE_STATUS</name>\n        <value>MISS</value>\n    </assign:variable>\n    <!-- Check X-Cache first - If it is a hit, X-Cache-remote won't match and the result will be correct -->\n    <match:response.header name=\"X-Cache\" value=\"*_HIT*\" value-case=\"off\" value-wildcard=\"on\">\n        <assign:variable>\n            <name>CACHE_STATUS</name>\n            <value>HIT</value>\n        </assign:variable>\n    </match:response.header>\n    <!-- This status matches above so we have to change it to MISS -->\n    <match:response.header name=\"X-Cache\" value=\"TCP_REFRESH_FAIL_HIT\" value-case=\"off\">\n        <assign:variable>\n            <name>CACHE_STATUS</name>\n            <value>MISS</value>\n        </assign:variable>\n    </match:response.header>\n    <match:response.header name=\"X-Cache-Remote\" value=\"*_HIT*\" value-case=\"off\" value-wildcard=\"on\">\n        <assign:variable>\n            <name>CACHE_STATUS</name>\n            <value>HIT</value>\n        </assign:variable>\n    </match:response.header>\n    <!-- This status matches above so we have to change it to MISS -->\n    <match:response.header name=\"X-Cache-Remote\" value=\"TCP_REFRESH_FAIL_HIT\" value-case=\"off\">\n        <assign:variable>\n            <name>CACHE_STATUS</name>\n            <value>MISS</value>\n        </assign:variable>\n    </match:response.header>\n    <!-- Extract X-Check-Cacheable as-is -->\n    <assign:extract-value>\n        <variable-name>CACHEABLE</variable-name>\n        <location>Client_Response_Header</location>\n        <location-id>X-Check-Cacheable</location-id>\n    </assign:extract-value>\n</match:metadata-stage>\n\n\n<!--Find Origin IP which Akamai Went forward to-->\n<match:metadata-stage value=\"client-response\">\n    \n\n<match:request.type result=\"false\" value=\"CLIENT_REQ\">\n<match:forward.server-type value=\"AKAMAI_ORIGIN_ACS\">\n<match:response.header name=\"X-DC-Origin-IP\" result=\"false\">\n<edgeservices:modify-outgoing-response.add-header>\n<edge-only>off</edge-only>\n<name>X-DC-Origin-IP</name>\n<value>%(AK_FORWARD_IP)</value>\n<status>on</status>\n</edgeservices:modify-outgoing-response.add-header>\n</match:response.header>\n</match:forward.server-type>\n</match:request.type>\n\n\n<match:request.type result=\"true\" value=\"CLIENT_REQ\">\n\n<match:forward.server-type value=\"CACHEH ICP\" result=\"true\">\n<assign:variable>\n<name>FORWARD_PARENT_IP</name>\n<value>%(AK_FORWARD_IP)</value>\n</assign:variable>\n</match:forward.server-type>\n\n<!-- if at child request was directly to origin populate FORWARD_ORIGIN_IP with AK_FORWARD_IP-->\n        <match:forward.server-type value=\"AKAMAI_ORIGIN_ACS\">\n        <assign:variable>\n        <name>FORWARD_ORIGIN_IP</name>\n        <value>%(AK_FORWARD_IP)</value>\n        </assign:variable>\n        </match:forward.server-type>\n\n        <!-- if at child request was to parent  populate FORWARD_ORIGIN_IP with AK_FORWARD_IP from the header from parent-->\n\n\n        <match:forward.server-type result=\"false\" value=\"AKAMAI_ORIGIN_ACS\">\n        <!-- default the value to NO_ORIGIN_IP if a cache hit at parent -->\n        <assign:variable>\n        <name>FORWARD_ORIGIN_IP</name>\n        <value>NO_ORIGIN_IP</value>\n        </assign:variable>\n\n        <match:response.header name=\"X-DC-Origin-IP\" result=\"true\">\n        <assign:extract-value>\n        <variable-name>FORWARD_ORIGIN_IP</variable-name>\n        <location>Response_Header</location>\n        <location-id>X-DC-Origin-IP</location-id>\n        </assign:extract-value>\n                <!-- Remove the header on outgoing client response -->\n        <edgeservices:modify-outgoing-response.remove-header>\n        <name>X-DC-Origin-IP</name>\n        <status>on</status>\n        <edge-only>on</edge-only>\n        </edgeservices:modify-outgoing-response.remove-header>\n        </match:response.header>\n        </match:forward.server-type>\n\n</match:request.type>\n</match:metadata-stage>\n\n\n\n<reporting:lds.custom-field>%(CACHE_STATUS):%(CACHEABLE);EDGE_IP=%(AK_GHOST_IP);P=%(FORWARD_PARENT_IP);O=%(FORWARD_ORIGIN_IP);%(AK_CLIENT_TRANSFER_TIME)</reporting:lds.custom-field>"
        },
        "uuid" : "<<X-Cache-Headers-behaviour-uuid>>"
      } ],
      "children" : [ ],
      "criteria" : [ ],
      "criteriaMustSatisfy" : "all",
      "comments" : ""
    } ],
    "options" : {
      "is_secure" : true
    },
    "variables" : [ ],
    "comments" : ""
  }
}

/**
 * Hacky way to ensure that cpCode is a integer
 */
// a.rules.behaviors.forEach((behaviour) => {
//   if (behaviour.name === 'origin' && behaviour.options.originType === 'NET_STORAGE') {
//     const cpCode = behaviour.options.netStorage.cpCode
//     const cpCodeInt = parseInt(cpCode, 10)
//
//     if (!cpCodeInt) {
//       throw new Error(`invalid cpCode: ${cpCode}`)
//     }
//
//     behaviour.options.netStorage.cpCode = cpCodeInt
//   }
// })

// console.log(JSON.stringify(a, 0, 2))

var countries        = require('country-data').countries,
  currencies       = require('country-data').currencies,
  regions          = require('country-data').regions,
  languages        = require('country-data').languages,
  callingCountries = require('country-data').callingCountries;

// .all gives you an array of all entries
// console.log( countries.all );
// console.log( currencies.all );

// countries are found using alpha2 or alpha3 (both uppercase)
// console.log( countries.BE.name );        // 'Belgium'
// console.log( countries.FRA.currencies ); // ['EUR']

// callingCountries is like countries but only has entries with dialing codes.

// currencies are accessed by their code (uppercase)
// console.log( currencies.USD.name ); // 'United States dollar'

// regions are accessed using a camel case name
// console.log( regions.europe.countries )


// console.log('--------', callingCountries)


let countryMapped = countries.all.map(country => {
  return {
    name: country.name,
    alpha2: country.alpha2,
    dialCode: country.countryCallingCodes[0]
  }
})

// console.log(countries)

countryMapped = _.keyBy(countryMapped, 'alpha2');

fs.writeFile('./country.json', JSON.stringify(countryMapped, 0, 2), 'utf8')


// console.log(countryMapped)


// // var phoneUtil = require('google-libphonenumber').phoneUtil;
// var phoneUtil = require('google-libphonenumber').phoneUtil
//   , PNF = require('google-libphonenumber').PhoneNumberFormat
//   , PNT = require('google-libphonenumber').PhoneNumberType;
//
//
// var tel = phoneUtil.parse('+12024561111');
//
// console.log(phoneUtil.format(tel, PNF.INTERNATIONAL));
// console.log(phoneUtil.format(tel, PNF.NATIONAL));
// console.log(phoneUtil.format(tel, PNF.E164));
//

// Require `PhoneNumberFormat`.
// var PNF = require('google-libphonenumber').PhoneNumberFormat;
//
// // Get an instance of `PhoneNumberUtil`.
// var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
//
// var num = '+601681954310'
// // Parse number with country code.
// var phoneNumber = phoneUtil.parse(num, 'MY');
//
// // Print number in the international format.
// console.log(phoneUtil.format(phoneNumber, PNF.INTERNATIONAL));
// // => +1 202-456-1414
//
// var swissNumberStr = "0168195430";
//
// var tel = phoneUtil.parse('+60168195430');
//
// console.log(phoneUtil.format(tel, PNF.NATIONAL));


// var fs = require('fs');

function read(file) {
  const data = fs.readFileSync(file, 'utf8')
  return data.toString().split('\n')
}

const dataFile = read(__dirname+ '/styles.css');

var styles = {}
for(var temp in dataFile){
  const match = dataFile[temp].match(/\.(.*)\{/) || []
  const className = match[1]

  // console.log(className)

  if (className) {
    styles[className] = className.trim()
  }
  // temperatures.push(+data[temp].match(/\d+/g));
}
//your 'loop' logic goes here, y = temperatures
// console.log(styles);



function getClassNames(file) {
  const data = fs.readFileSync(file, 'utf8').toString().split('\n')
  const styles = {}

  data.forEach((value => {
    const match = value.match(/\.(.*)\{/) || []
    const className = match[1]

    // console.log(className)

    if (className) {
      styles[className] = className.trim()
    }
  }))

  return styles
}

// console.log(getClassNames(__dirname+ '/styles.css'))

const res = {

}

const { status, body = {} } = res
const { errorcode } = body


console.log('---', errorcode)
