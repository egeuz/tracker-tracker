function cleanTrackerData(trackers) {
  return trackers.map(tracker => {
    return {
      domain: new URL(tracker.url).hostname,
      url: tracker.url,
      filter: tracker.data.filter,
      type: tracker.type,
      stack_depth: tracker.stack.length,
      stack: tracker.stack
      //clean stack in some way in the future? 
    }
  })
}

module.exports = cleanTrackerData