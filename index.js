var createNdarray = require('ndarray')

module.exports = createNdsamples

function createNdsamples (opts) {
  opts = typeof opts != 'object' ? {} : opts

  // get options
  var data = opts.data
  var shape = opts.shape
  var stride = opts.stride
  var format = opts.format == null ? {} : opts.format

  // cast to float32 typed array
  if (
    data && data.constructor &&
      data.constructor.name !== 'Float32Array'
  ) {
    data = toFloat32Array(data)
  }

  // create ndarray
  var arr = createNdarray(
    data, shape, stride
  )

  // assign ndsamples-specific properties
  Object.defineProperties(arr, {
    // values
    format: {
      get: function () {
        return format
      },
      enumerable: true
    },
    // getters
    length: {
      get: function () {
        return this.shape[0]
      }
    },
    numberOfChannels: {
      get: function () {
        return this.shape[1]
      }
    }
  })

  return arr
}

function toFloat32Array (data) {
  var newData = new Float32Array(data.length)
  for (var i = 0; i < data.length; i++) {
    newData[i] = data[i]
  }
  return newData
}
