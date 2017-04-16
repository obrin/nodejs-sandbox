import fs from 'fs'


const fileConfig = {
  'partner-pages-images': '0B5Q3O8hIn54qQW9xOEQzdzkyNlU'
}
// import './quickstart'
var google = require('googleapis');
var service = google.drive('v3');
import axios from 'axios'

function getFiles() {
  // var fileId = '0B5Q3O8hIn54qd2tJUUZwaUo1Y0E'
  // var fileId = '0BwwA4oUTeiV1UVNwOHItT0xfa2M';
  var fileId = '0B5Q3O8hIn54qQW9xOEQzdzkyNlU'
  var dest = fs.createWriteStream('./tmp/asdf.png');
  service.files.get({
      fileId: fileId,
      alt: 'media',
      key: 'AIzaSyDhVBw_RAbVeui2kCn_P2WZYHq1EWT7TW4'
    })
    .on('end', function() {
      console.log('Done');
    })
    .on('error', function(err) {
      console.log('Error during download', err);
    })
    .pipe(dest);
}

// getFiles()

function getList() {
  service.files.list({
      key: 'AIzaSyDhVBw_RAbVeui2kCn_P2WZYHq1EWT7TW4',
      // corpus: "domain"
    })
    .on('end', function() {
      console.log('Done');
    })
    .on('error', function(err) {
      console.log('Error during download', err);
    })
  // .pipe(dest);
}

// getList()

var folderId = '0B5Q3O8hIn54qQW9xOEQzdzkyNlU'
function getChildren() {
  service.files.list({
      key: 'AIzaSyDhVBw_RAbVeui2kCn_P2WZYHq1EWT7TW4',
      folderId: folderId,
      // usp: 'sharing'
      // corpus: "domain"
    })
    .on('end', function() {
      console.log('Done');
    })
    .on('error', function(err) {
      console.log('Error during download', err);
    })
  // .pipe(dest);
}

// getChildren()

var dest = fs.createWriteStream('./tmp/abc.png');

const url = 'https://www.googleapis.com/drive/v3/files/0B5Q3O8hIn54qQjJSSnJTQVAzM3c?alt=media&key=AIzaSyDhVBw_RAbVeui2kCn_P2WZYHq1EWT7TW4'

// const url = 'https://www.googleapis.com/drive/v3/files?corpus=user&q=%270B5Q3O8hIn54qQW9xOEQzdzkyNlU%27+in+parents&key=AIzaSyDhVBw_RAbVeui2kCn_P2WZYHq1EWT7TW4'
// axios.get(url)
//   // .then(res => console.log(res.data))
//   .then(res => {
//     // res.data.pipe(dest)
//     // dest.write(res.data)
//   })

// var fs=require('fs');
var http=require('http');

var f=fs.createWriteStream('name.jpeg');

var options={
  host:'upload.wikimedia.org',
  port:80,
  path:'/wikipedia/commons/1/15/Jagdschloss_Granitz_4.jpg'
}

http.get(options,function(res){
  res.on('data', function (chunk) {
    f.write(chunk);
  });
  res.on('end',function(){
    f.end();
  });
});

// https://www.googleapis.com/drive/v3/files?corpus=user&q=%270B5Q3O8hIn54qQW9xOEQzdzkyNlU%27+in+parents&key=AIzaSyDhVBw_RAbVeui2kCn_P2WZYHq1EWT7TW4



// const apple = { ...{hello: 'world'}, ...''}
// console.log('apple', apple); // TODO: REMOVE CONSOLE LOG
