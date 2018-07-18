var observer = new PerformanceObserver(list => {
  console.log('GOT NOTIFICATION IN WORKER');
  list.getEntries().forEach(entry => {
    // Display each reported measurement on console
    if (console) {
      console.log(entry);
      console.log("Name: "       + entry.name      +
                  ", Type: "     + entry.entryType +
                  ", Start: "    + entry.startTime +
                  ", Duration: " + entry.duration  + "\n");
    }
  })
});
observer.observe({entryTypes: ['paint', 'mark', 'measure'], buffered: true});
performance.mark('registered-observer');
console.log('OBSERVING FROM WORKER');
