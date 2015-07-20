# ndsamples

ndsamples are [ndarrays](https://npmjs.org/ndarray) in a format for audio.

[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

## spec

each `ndsamples` frame should have the follow properties:

### `shape`

should be an `Array` of the form:

```
[time, channels]
```

for example, a frame of 1024 samples per channel and 2 channels (stereo) has the shape `[1024, 2]`.

### `data`

should be a `Float32Array` of [samples](https://en.wikipedia.org/wiki/Sampling_%28signal_processing%29) between `-1.0` and `+1.0`.

if we [`.pick(time)`](https://github.com/scijs/ndarray#arraypickp0-p1-), we should see [channel data](hhttps://en.wikipedia.org/wiki/Sampling_(signal_processing://en.wikipedia.org/wiki/Sampling_(ttps://en.wikipedia.org/wiki/Surround_sound#Standard_speaker_channels) in a form such as:

```
[center] // 1.0 mono
[front left, front right] // 2.0 stereo
[front left, front right, front center] // 3.0 stereo
[front left, front right, back center] // 3.0 surround
[front left, front right, back left, back right] // 4.0 quad
[front left, front right, front center, back center] // 4.0 surround
...
```

TODO: support other data types?

### `format`

should be an `Object` with the following properties:

```
{
  rate: 44100
}
```

TODO: should there be a format identifier to store channel configuration of a frame?

## modules

some modules use ndsamples. 

- TODO

feel free to add what's missing. :)

## license

ISC
