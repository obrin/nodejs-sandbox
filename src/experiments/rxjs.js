import { Observable } from 'rxjs';
import axios from 'axios';
/*


 export async function fetchRoot(region) {
 return qCategories.add(() => _fetchRoot(region));
 }

 async function _fetchRoot(region) {
 log.verbose(`Fetching site root for ${region}.......`);
 const regionBase = region ? `${region}-web` : 'web';
 return await axios.get(`${ apiPath }/layer/siteroot/${regionBase}`)
 .then(res => res.data)
 .catch(err => {
 // if root can't be found then return null
 if (err.status !== 404) {
 throw new Error(`${JSON.stringify(err)}`);
 } else {
 return null;
 }
 });
 }
 */

function promiseApi(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('api resolved ' + data);
    }, 500)
  });
  //return promise;
}


function callbackApi(data, cb) {
  setTimeout(() => {
    cb('callback ' + data)
  }, 500)
}
var observeCallback = Observable.bindCallback(callbackApi);


const arr = [1, 2, 3, 4];

const countries = ['my', 'th'];

function getCountryData(data, cb) {
  setTimeout(() => {
    cb([1 + data, 2 + data, 3 + data, 4 + data])
  }, 500)
}
var getCountryDataOb = Observable.bindCallback(getCountryData);

function getHome(data, cb) {
  setTimeout(() => {
    cb(['extra meta ' + data])
  }, 500)
}
var getHomeOb = Observable.bindCallback(getHome);

const dataBuild =
  Observable.from(countries)
    .flatMap(country => {
      const countryDatas = getCountryDataOb(country);
      return Observable.from(countryDatas)
        .concatMap(countryData => getHomeOb(countryData))
        .map(homeData => {
          return { country: country, home: homeData }
        })
    });

dataBuild.subscribe(x => console.log(x));

