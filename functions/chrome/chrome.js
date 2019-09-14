// index.js

const createLighthouse = require('lighthouse-lambda')

exports.handler = function (event, context, callback) {
  Promise.resolve()
    .then(() => createLighthouse('https://www.google.com', { logLevel: 'info' }))
    .then(({ chrome, start }) => {
      return start()
        .then((results) => {
          return chrome.kill().then(() => callback(null, {
            statusCode: 200,
            body: "Hello, World"
          }));
        })
        .catch((error) => {
          // Handle errors when running Lighthouse
          return chrome.kill().then(() => callback(error))
        })
    })
    // Handle other errors
    .catch(callback)
}

// exports.handler = function(event, context, callback) {
//   callback(null, {
//     statusCode: 200,
//     body: "Hello, World"
//   });
// };