var google = require("googleapis"),
  drive = google.drive("v2"),
  fs = require("fs");

var config = {
  "client_id": "914486586747-jhesioo49p4h8dhdqdgdhamg4kvmgddg.apps.googleusercontent.com",
  "client_secret": "NW99bHuwAC95YZy0JIduGLwd",
  // "scope": "scope",
  "redirect_url": "urn:ietf:wg:oauth:2.0:oob",
  "tokens": {
    "access_token": "access_token",
    "token_type": "Bearer",
    "id_token": "id_token",
    "refresh_token": "refresh_token",
    "expiry_date": "expiry_date"
  }
};

function buildClient() {
  var client = new google.auth.OAuth2(
    config.client_id,
    config.client_secret,
    config.redirect_url
  );
  // client.setCredentials(config.tokens);
  return client;
}

var client = buildClient(),
  folderId = "0B5Q3O8hIn54qQW9xOEQzdzkyNlU"; // The Google Drive Folder Id

// Request all image files from folder
drive.children.list({
  auth: client,
  folderId: folderId,
  q: "mimeType contains 'image' and trashed = false"
}, function(error, response) {
  if (error) { return console.log("ERROR", error); }

  response.items.forEach(function(item) {
    var file = fs.createWriteStream("./" + item.title);
    file.on("finish", function() {
      console.log("downloaded", item.title);
    });

    // Download file
    drive.files.get({
      auth: client,
      fileId: item.id,
      alt: "media"
    }).pipe(file);
  });
});
