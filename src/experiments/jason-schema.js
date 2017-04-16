// import './leetcode'
// import './objects'
// import './experiments/observer'
// import { stack } from './data-structures/stack-queue/stack'
import fs from 'fs'
import path from 'path'
import __ from 'lodash/fp'
import _ from 'lodash'
import glob from 'glob'

import JsonRefs from 'json-refs'


import i18next from 'i18next';

const conf = [{
  entry: './src/data-structures/**/*.js',
  output: './build/:country/:locale',

  options: {
    entryRoot: 'data-structures',
    basename: 'index.html',
    country: 'my',
    locale: ['en', 'fr', 'ms'],
  },
  data: {
    hello: 'world'
  },
}]

const something = {
  english: 'good'
}

function concatAll(array) {
  const results = []
  array.forEach(subArray => results.push.apply(results, subArray))
  return results
}

function concatMap(array, projectionFunctionThatReturnsArray) {
  const mappedArray =  array.map(projectionFunctionThatReturnsArray)
  return concatAll(mappedArray)
}

const _concatMap = _.curryRight(concatMap)

const attachSomething = attachData(something)

const expandConfig = _.flowRight(__.map(attachSomething), __.map(parseOutputPath), __.flatMap(expandOptions), __.flatMap(expandEntries))

function expandEntries(config) {
  const entries = glob.sync(config.entry)
  return entries.map(entry => ({ ...config, entry }))
}

function expandOptions(config) {
  return expandLocales(config.options)
    .map(options => ({ ...config, options }))

  // hardcoded to expand locales only
  function expandLocales(options) {
    const locales = options.locale
    return locales.map(locale => ({ ...options, locale}))
  }
}



function attachData(newData) {
  return (config) => {
    const data = { ...config.data, ...newData }
    return { ...config, data}
  }
}

const aba = {
  "entry": "./src/data-structures/stack-queue/stack.js",
  // "output": "./build/:country/:locale/:rootPath/:basename",
  "output": "./build/:country/:locale/",
  "options": {
    "entryRoot": "data-structures",
    "country": "my",
    "locale": "ms",
  },
  "data": {
    "hello": "world"
  }
}

function placeholder(string, options) {
  return Object.keys(options)
    .reduce((accString, key) =>
        accString.replace(`:${key}`, options[key])
      , string)
}




function parseOutputPath(config) {
  const { options } = config

  // get directory path from root
  const sliceRoot = sliceString(options.entryRoot)
  const outputDir = placeholder(config.output, options)
  const basename = _.flowRight(basenameToIndex, sliceRoot)
  const output = path.join(outputDir, basename(config.entry))


  return { ...config, output }
}

// ensures a :path/index.html output path
function basenameToIndex(file) {
  const ext = path.extname(file)
  let basename = path.basename(file, ext)
  basename = basename === 'index' ? 'index.html' : `${basename}/index.html`

  return `${path.dirname(file)}/${basename}`;
}

function sliceString(root) {
  return (entry) => entry.substring(entry.indexOf(root))
}

// const ent = expandConfig(conf)
// console.log('--------', JSON.stringify(ent, 0, 2)); // TODO: REMOVE CONSOLE LOG

const options = {
  entryRoot: 'data-structures',
  basename: 'index.html',
  country: 'my',
  locale: ['en', 'fr', 'ms'],
}

function place(string, vars) {
  Object.keys(vars)
    .reduce((accString, key) =>
        accString.replace(`:${key}`, options[key])
      , string)
}
// const hello =



// const apes = path.resolve('src/async')

// console.log('======', apes); // TODO: REMOVE CONSOLE LOG

import $RefParser from 'json-schema-ref-parser'



const mySchema = {
  "definitions": {
    // "$ref": "schemas/people.json#/hello",
    "person": {
      // references an external file
      // "$ref": "schemas/people/Bruce-Wayne.json"
      "jordan": "blue"
    },
    "place": {
      // references a sub-schema in an external file
      // "$ref": "schemas/places.yaml#/definitions/Gotham-City"
      "$ref": "schemas/people.json#/hello"
    },
    "thing": {
      // references a URL
      // "$ref": "http://wayne-enterprises.com/things/batmobile"
    },
    "color": {
      // references a value in an external file via an internal reference
      // "$ref": "#/definitions/thing/properties/colors/black-as-the-night"
      "$ref": "#/definitions/person"
    },
    "allOf": [
      {"$ref": "#/definitions/person"}
    ]

  }
}







const hello = [
  {
    "partnerName": "celcom",
    "country": "my",
    // "allOf": [
    //   { "$ref": "config/i18n.json" }
    // ],
    // "something": { "$ref": "config/i18n.json/#my" },
    // "defaultLocale": { "$ref": "config/i18n.json" },
    "projectId": { "$ref": "/i18nPartnerProjectId.json#my" },
    "sections": [
      "lang-toggle",
      "partner-intro",
      "iflix-intro",
      "feature-list",
      "call-to-action",
      "faq"
    ]
  }
]





// $RefParser.dereference(mySchema)
//   .then(function(schema) {
//     console.log('-------', schema); // TODO: REMOVE CONSOLE LOG
//     // console.log(schema.definitions.person.properties.firstName);
//   })
//   .catch(function(err) {
//     console.error(err);
//   });


// JsonRefs.resolveRefs(hello)
//   .then(function (res) {
//     // Do something with the response
//     //
//     // res.refs: JSON Reference locations and details
//     // res.resolved: The document with the appropriate JSON References resolved
//     // res.value: The retrieved document
//
//     console.log('res: ', JSON.stringify(res.resolved, 0, 2)); // TODO: REMOVE CONSOLE LOG
//   }, function (err) {
//     console.log(err.stack);
//   });

const baba = {
  "$schema": "http://json-schema.org/draft-04/schema#",

  "definitions": {
    "address": {
      "type": "object",
      "properties": {
        "street_address": { "type": "string" },
        "city":           { "type": "string" },
        "state":          { "type": "string" }
      },
      "required": ["street_address", "city", "state"]
    }
  },

  "type": "object",

  "properties": {
    "billing_address": { "$ref": "#/definitions/address" },
    "shipping_address": { "$ref": "#/definitions/address" }
  }
}

// JsonRefs.resolveRefsAt(baba)
//   .then(function (res) {
//     // Do something with the response
//     //
//     // res.refs: JSON Reference locations and details
//     // res.resolved: The document with the appropriate JSON References resolved
//     // res.value: The retrieved document
//
//     console.log('res: ', JSON.stringify(res.resolved, 0, 2)); // TODO: REMOVE CONSOLE LOG
//   }, function (err) {
//     console.log(err.stack);
//   });

// import schema from '../config/schema.json'

// const abc = JSON.parse(hello, function(k,v) {
//   console.log('K---', k); // TODO: REMOVE CONSOLE LOG
// })

// JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', function(k, v) {
//   console.log(k); // log the current property name, the last is "".
//   return v;       // return the unchanged property value.
// });

// console.log('--------', abc); // TODO: REMOVE CONSOLE LOG






const partners = [
  {
    partnerName: 'celcom',
    country: 'my',
    sections: [
      'lang-toggle',
      'partner-intro',
      'iflix-intro',
      'feature-list',
      'call-to-action',
      'faq',
    ],
  },
  {
    partnerName: 'digi',
    country: 'my',
    sections: [
      'lang-toggle',
      'partner-intro',
      'iflix-intro',
      'feature-list',
      'call-to-action',
      'faq',
    ],
  },
  {
    partnerName: 'tm',
    country: 'my',
    sections: [
      'lang-toggle',
      'partner-intro--black',
      'iflix-intro',
      'feature-list',
      'call-to-action',
      'faq',
    ],
  },
  {
    partnerName: 'maxis',
    country: 'my',
    sections: [
      'lang-toggle',
      'partner-intro',
      'iflix-intro',
      'feature-list',
      'call-to-action',
      'faq',
    ],
  },
  {
    partnerName: 'truetv',
    country: 'th',
    sections: [
      'lang-toggle',
      'partner-intro',
      'iflix-intro',
      'feature-list',
      'call-to-action',
      'faq',
    ],
  },
  {
    partnerName: 'truemoveh',
    country: 'th',
    sections: [
      'lang-toggle',
      'partner-intro',
      'iflix-intro',
      'feature-list',
      'call-to-action',
      'faq',
    ],
  },
  {
    partnerName: 'smart',
    country: 'ph',
    sections: [
      'lang-toggle',
      'partner-intro--black',
      'iflix-intro',
      'feature-list',
      'call-to-action',
      'faq',
    ],
  },
  {
    partnerName: 'pldt',
    country: 'id',
    sections: [
      'lang-toggle',
      'partner-intro--black',
      'iflix-intro',
      'feature-list',
      'call-to-action',
      'faq',
    ],
  },
]

const countryLocales = {
  my: {
    locales: ['en', 'ms'],
    localeDefault: ['en'],
    projectId: '0c7be6b4a8804cb37facb3ad2ea59d8a',
  },
  id: {
    locales: ['en', 'id'],
    localeDefault: ['en'],
    projectId: '9bf54391be6bf899d953932fdd1c61b2',
  },
  th: {
    locales: ['en', 'th'],
    localeDefault: ['en'],
    projectId: 'bf315a966a530b445e05aa924d0df33c',
  },
  ph: {
    locales: ['en'],
    localeDefault: ['en'],
    projectId: 'ba72951333f584fe15839a2d2ce5f546',
  },
}


// fs.writeFile('country.json', JSON.stringify(countryLocales, 0, 2))

const output = path.resolve('./build/my/en', 'celcom/index.html')

console.log('=========', output); // TODO: REMOVE CONSOLE LOG
