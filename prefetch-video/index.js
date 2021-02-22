function waitUntilInstalled(registration) {
  return new Promise(function(resolve, reject) {
    if (registration.installing) {
      registration.installing.addEventListener('statechange', function(e) {
        if (e.target.state === 'installed') {
          resolve();
        } else if (e.target.state === 'redundant') {
          reject();
        }
      });
    } else {
      resolve();
    }
  });
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js', {
    scope: './'
  })
    .then(waitUntilInstalled)
    .catch(console.error);
} else {
  console.error('Service workers unsupported');
}
