const shortid = require('shortid');

// Adds id properties to arrays to avoid using index as key
// see: https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318

const keyIndex = arr =>
  arr.map(item => (
    typeof item === 'object'
      ? Object.assign({ id: shortid() }, item)
      : Object.assign({ id: shortid() }, { value: item })
    ));

export default keyIndex;
