# ndsamples

ndsamples are [ndarrays](https://npmjs.org/ndarray) in a format for audio.

[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

## spec

### data frame

a frame of ndsamples **must** have a shape of:

```
[length, channels]
```

for example, a frame of 1024 samples per channel and 2 channels (stereo) has the shape `[1024, 2]`.

### audio [samples](https://en.wikipedia.org/wiki/Sampling_(signal_processing))

[each sample is described by n channels](https://en.wikipedia.org/wiki/Surround_sound#Standard_speaker_channels), such as:

```
[center] // 1.0 mono
[front left, front right] // 2.0 stereo
[front left, front right, front center] // 3.0 stereo
[front left, front right, back center] // 3.0 surround
[front left, front right, back left, back right] // 4.0 quad
[front left, front right, front center, back center] // 4.0 surround
...
```

### format

`ndsamples` _should_ also have a `format` property containing:

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
