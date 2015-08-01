# ndsamples

ndsamples are [ndarrays](https://npmjs.org/ndarray) in a format for audio.

[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

## spec

each `ndsamples` frame should have the follow properties:

### `shape`

should be an `Array` of the form:

```
[length, numberOfChannels]
```

for example, a frame of 1024 samples per channel and 2 channels (stereo) has the shape `[1024, 2]`.

### `data`

should be a `Float32Array` of [samples](https://en.wikipedia.org/wiki/Sampling_%28signal_processing%29) between `-1.0` and `+1.0`.

if we [`.pick(time)`](https://github.com/scijs/ndarray#arraypickp0-p1-), we should see [channel data](https://en.wikipedia.org/wiki/Surround_sound#Standard_speaker_channels) in a form such as:

```
[center] // 1.0 mono
[front left, front right] // 2.0 stereo
[front left, front right, front center] // 3.0 stereo
[front left, front right, back center] // 3.0 surround
[front left, front right, back left, back right] // 4.0 quad
[front left, front right, front center, back center] // 4.0 surround
...
```

TODO: support other common data types? (`uint8`, `int16`, `float64`, ...)

### `format`

should be an `Object` with the following properties:

```
{
  sampleRate: 44100
}
```

TODO: should there be a format identifier to store channel configuration of a frame?

## modules

some modules use ndsamples. 

- [read-audio](https://github.com/livejs/read-audio)

feel free to add what's missing. :)

## `ndsamples` factory

### install

with [npm](https://npmjs.org/), do

```
npm i --save ndsamples
```

### usage

```
var ndsamples = require('ndsamples')

var samples = ndsamples({
  data: [0, 0.5, -0.5, 0, 1, -1, -1, 1],
  shape: [4, 2],
  format: {
    sampleRate: 44100
  }
})
```

the `ndsamples` factory returns an `ndarray` with:

- your data cast into a `Float32Array`, if necessary
- a getter for `length` (`shape[0]`)
- a getter for `numberOfChannels` (`shape[1]`)
- a getter for `format` as given

## license

ISC
