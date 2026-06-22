# Video Optimization Guide

All `.webm` files in this directory are optimized for the web using the following process:

## Optimization Process

1. **Pause Removal**: Used `mpdecimate` filter to drop duplicate frames (static pauses).
2. **Timing Normalization**: Used `setpts=N/FRAME_RATE/TB` to ensure smooth playback after dropping frames.
3. **Encoding**: VP9 codec with a Constant Rate Factor (CRF) of 32 for high quality and low bitrate.
4. **Framerate**: Capped at 20 FPS for screen recordings.
5. **Resolution**: Downscaled to 1080p max (preserving aspect ratio).

## Command Used

```bash
ffmpeg -i input.webm \
    -vf "mpdecimate,setpts=N/FRAME_RATE/TB,scale='min(1920,iw)':-2" \
    -c:v libvpx-vp9 \
    -crf 32 \
    -b:v 0 \
    -deadline good \
    -cpu-used 2 \
    -row-mt 1 \
    -pix_fmt yuv420p \
    -r 20 \
    -an \
    output_op.webm
```
