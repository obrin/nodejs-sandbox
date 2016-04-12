'use strict';

import fs from 'fs';
import _ from 'lodash';
//import config from 'config';

const langKey = '@xml:lang';
const defaultLang = 'en_US';

export function mkdir(dir) {
  try {
    !fs.existsSync(dir) && fs.mkdirSync(dir)
  } catch(e) {
    if(e.code !== 'EEXIST') throw e;
  }
}

/**
 * Transforms metadata to ideal modal
 *
 * @param m
 * @param key
 * @param split Boolean
 * @returns {*}
 */
export function meta(m, key, split) {

  let keyData = m[key];

  if(keyData === undefined) {
    keyData = {};
    return split ? [] : keyData['*'] = "";
  }

  let data = parseLanguages(key, keyData);

  if(data.$ || data['*']) {
    data = data.$ || data['*'];
    if(split) data = data.split(',');
  }

  return data;
}

// Transform metadata key value pairs that contain languages
// returns flat object
export function parseLanguages(key, data) {
  if(!Array.isArray(data)) return parseLanguage(key, data);
  for(var i = 0; i < data.length; i++) {
    data[i] = parseLanguage(key, data[i]);
  }
  return flattenObjects(data.filter(Boolean));
}

function parseLanguage(key, item) {
  let lang = item[langKey];

  // do not mutate if no language key
  if(lang) {
    lang === '*' ? item['*'] = item.$ : item[lang] = item.$;
    delete item[langKey];
    delete item.$;
  }
  return item;
}

export function specialTrim(obj) {
  if(typeof obj === 'string') return obj.trim();
  for(var k in obj) {
    obj[k] = obj[k].trim();
  }
  return obj;
}

export function flattenObjects(arr) {
  let out = {};
  for(var i = 0; i < arr.length; i++) {
    for(var k in arr[i]) {
      out[k] = arr[i][k];
    }
  }
  return out;
}

/**
 *
 * @param assets: assets to be filters
 * @param ratings: array of allowed ratings
 * @returns {*}
 */
export function pgFilter(assets, ratings) {
  return assets.filter(asset => ratings.indexOf(asset.parentalGuidance) > -1)
}

/**
 * Returns allowed ratings to be mapped based on the given key
 *
 * @param key
 * @returns {Array}
 */
export function getRatings(key) {
  const pgMap = [
    {
      key: 'adults',
      value: 'TV-Y,TV-Y7,TV-G,TV-PG,G,PG,TV-14,PG-13,TV-MA,R'
    },
    {
      key: 'teens',
      value: 'TV-Y,TV-Y7,TV-G,TV-PG,G,PG,TV-14,PG-13'
    },
    {
      key: 'bigKids',
      value: 'TV-Y,TV-Y7,TV-G,TV-PG,G,PG'
    },
    {
      key: 'smallKids',
      value: 'TV-Y'
    }
  ];

  let pg = pgMap.map(pg => {
    if(pg.key === key) {
      return pg.value.split(',')
    }
  }).filter(Boolean);

  return _.flatten(pg);
}
//
//export function getImageUrl(data, coverSize) {
//  let IMAGE_PACK = 'image-pack';
//  let item = data || {};
//  let size = coverSize || config.coverSize;
//  let url = item.imageUrl || config.defaultCover;
//  let id;
//
//  if (item.imagePackId){
//    url = config.imageService + item.imagePackId + size;
//  } else if (item.metadata && item.metadata[IMAGE_PACK]) {
//    id = meta(item.metadata, IMAGE_PACK);
//    url = config.imageService + id + size;
//  } else if (item.imageUrl && item.imageUrl.indexOf('/static_assets/') === -1) {
//    if (item.imageUrl.indexOf('?') > -1) {
//      url = item.imageUrl.replace(/width=[0-9]*&height=[0-9]*/, size);
//    }
//    else {
//      url = item.imageUrl + '?' + size;
//    }
//  }
//  return url;
//}
