self.addEventListener('fetch', function(event) {
  // TODO: respond to all requests with an html response
  // containing an element with class="a-winner-is-me".
  // Ensure the Content-Type of the response is "text/html"
  // console.log(event.request);

  console.log('------===')

  // event.respondWith(
  //   new Response("<b class='a-winner-is-me'>World</b>", {
  //     headers: { 'Content-Type': 'text/html', 'foo': 'bar' }
  //   })
  // )

  // if (event.request.url.endsWith('.jpg')) {
  //   event.respondWith(
  //     fetch('/imgs/dr-evil.gif')
  //   )
  // }


  // event.respondWith(
  //   fetch(event.request).then(response => {
  //     if (response.status == 404) {
  //       // return new Response('Whoops, not found')
  //       return fetch('/imgs/dr-evil.gif')
  //     }
  //
  //     return response
  //   }).catch(() => {
  //     return new Response('Oh, that totally failed!')
  //   })
  // )


  var urlsToCache = [
    '/',
    'js/main.js',
    'css/main.css',
    'imgs/icon.png',
    'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
    'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff'
  ]

  // event.waitUntil(
  //   caches.open('wittr-static-v1').then(cache => {
  //     return cache.addAll(urlsToCache)
  //   })
  // )

  event.respondWith(
    caches.match(event.request).then(response => {
      return response
        ? response
        : fetch(event.request)
    })
  )
});


// Removing old cache 

var staticCacheName = 'wittr-static-v2'

self.addEventListener('install', function(event) {
  event.waitUntil(
    // TODO: change the site's theme, eg swap the vars in public/scss/_theme.scss
    // Ensure at least $primary-color changes
    // TODO: change cache name to 'wittr-static-v2'
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        'js/main.js',
        'css/main.css',
        'imgs/icon.png',
        'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
        'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff'
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    // TODO: remove the old cache
    // caches.delete('wittr-static-v1')
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName.startsWith('wittr-') && cacheName != staticCacheName)
          .map(cacheName => cache.delete(cacheName))
      )
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
