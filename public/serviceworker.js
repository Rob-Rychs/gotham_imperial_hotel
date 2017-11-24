var responseContent = "<html>" +
"<body>" +
"<style>" +
"body {text-align: center; background-color: #333; color: #eee;}" +
"</style>" +
"<h1>Gotham Imperial Hotel</h1>" +
"<p>There seems to be a problem with your connection.</p>" +
"<p>Come visit us at 1 Imperial Plaza, Gotham City for free WiFi.</p>" +
"</body>" +
"</html>";


self.addEventListener('fetch', (event) => {
  // 1. log all request URLs to console
  // console.log('fetch request for:', event.request.url);
  // 2. create a new Response with headers on the fly for requests for bootstrap.min.css
  // if (event.request.url.includes('bootstrap.min.css')) {
  //   event.respondWith(
  //     new Response(
  //       '.hotel-slogan {background: green!important;} nav {display: none}', { headers: { 'Content-Type': 'text/css' }}
  //     )
  //   );
  // }
  // 3. flip the logo
  // if (event.request.url.includes('/img/logo.png')) {
  //   event.respondWith(
  //     fetch('/img/logo-flipped.png')
  //   );
  // }
  // 4. .catch the failure of the fetch() call to handle offline connection
  // event.respondWith(
  //   fetch(event.request).catch(() => {
  //     new Response(
  //       "Welcome to the Gotham Imperial Hotel. \n"+
  //       "There seems to be a problem with your connection. \n"+
  //       "We look forward to telling you bout our hotel as soon as you go online."
  //     );
  //   })
  // );
  // 6. clean it up with html response
  event.respondWith(
    fetch(event.request).catch(function() {
      return new Response(responseContent, {headers: {"Content-Type": "text/html"}});
    })
  );
});

/*
fetch(request,[options]);

the first argument in fetch is mandatory and can contain either a request object, or a string with a relative or absolute URL:

// Fetch by URL
fetch('/img/logo.png');
// Fetch by the URL in the request object
fetch(event.request.url);
// Fetch by passing a request object.
// In addition to the URL, the request object may contain additional headers, form data, etc
fetch(event.request);

the second argument is optional and can contain an object with options for the request
the following sample makes a POST request for an image and includes cookies in the headers (credentials default value is omit, meaning cookies are not sent by default when fetching):

fetch(/img/logo.png', {
  method: 'POST',
  credentials: 'include'
});


*/