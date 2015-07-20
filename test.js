var test = require('tape')

test('module usage', function (t) {
  var ndsamples = require('./')
  t.ok(ndsamples)
  var data = [
    0, 0.5,
    -0.5, 0,
    1, -1,
    -1, 1
  ]
  var shape = [4, 2]
  var format = {
    sampleRate: 44100
  }
  var samples = ndsamples({
    data: data,
    shape: shape,
    format: format
  })
  t.ok(samples)
  t.equal(samples.data.constructor.name, 'Float32Array')
  t.deepEqual([].slice.call(samples.data), data)
  t.deepEqual(samples.shape, shape)
  t.deepEqual(samples.format, format)
  t.equal(samples.length, shape[0])
  t.equal(samples.numberOfChannels, shape[1])
  t.end()
})
