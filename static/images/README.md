# Video Optimization Guide

All `.webm` files in this directory are optimized for the web using the following process:

## Optimization Process

1. **Resolution**: Downscaled to 1080p max (preserving aspect ratio) to ensure broad compatibility and reduced file size without sacrificing readability.
2. **Encoding**: VP9 codec with a Constant Rate Factor (CRF) of 24, providing high-fidelity visual quality suitable for technical documentation.
3. **Framerate**: Set to 24 FPS for smooth playback of UI interactions.
4. **Preserved Pacing**: Original playback speed and pauses are maintained to ensure users can follow the demonstrated steps easily.

## Command Used

```bash
ffmpeg -i input.webm \
    -vf "scale='min(1920,iw)':-2" \
    -c:v libvpx-vp9 \
    -crf 24 \
    -b:v 0 \
    -deadline good \
    -cpu-used 2 \
    -row-mt 1 \
    -pix_fmt yuv420p \
    -r 24 \
    -an \
    output_op.webm
```
