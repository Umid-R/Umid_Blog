---
title: 'Sign Language Detection'
summary: 'Real-time recognition of the ASL alphabet and digits from a normal webcam, turning hand signs into readable text.'
repo: 'https://github.com/Umid-R/Sign_Language_Detection'
role: 'Solo: data collection, pipeline, model training, evaluation, real-time app'
duration: 'About 5 days'
stack: ['Python', 'MediaPipe', 'OpenCV', 'TensorFlow', 'NumPy', 'pandas', 'scikit-learn']
---

<figure>
  <img src="/projects/sign-language-detection/demo.gif" width="560" alt="Live demo: signing letters builds a sentence on screen" />
  <figcaption>Live demo on my webcam and a laptop CPU: the hand skeleton, the predicted sign with its confidence, and the sentence it builds.</figcaption>
</figure>

## The problem

Most people can't read sign language. I wanted a small system that turns a hand sign into a letter or digit, **live**, using only a normal webcam.

- **Input:** live webcam video (one hand in view)
- **Output:** the predicted letter (A–Z) or digit (0–9) with a confidence bar, plus a sentence builder that joins letters into words
- **Classes:** 36 (26 letters + 10 digits), left or right hand
- **Who it could help:** people learning ASL, and a base for tools that translate signs for people who don't know them

## Results

| Metric | Value |
|---|---|
| Overall test accuracy | **98.87%** |
| Average prediction confidence | 99.4% |
| Speed | Real time on a laptop CPU (no GPU) |
| Model size | 806 KB, about 60,000 parameters |
| Training time | About 5 minutes on a laptop |
| Letters A–Z | 94–100% per letter |
| Weakest classes | Digit 0 (88.2%), digit 1 (82.8%) |

<div class="gallery two">
  <img src="/projects/sign-language-detection/confusion_matrix.png" alt="Confusion matrix" />
  <img src="/projects/sign-language-detection/training_curves.png" alt="Training curves" />
</div>

**Honest note:** the test set is a random split of the same dataset, and many images are similar frames of the same hand. Accuracy on a brand-new person or camera is likely lower. Testing on new signers is the first thing I'd do next.

## How it works

```
Webcam frame
   ↓  MediaPipe Hands: 21 hand landmarks (x, y, z)
   ↓  Normalize: wrist at the origin, scaled by hand size
   ↓  63 numbers (21 × 3)
   ↓  Neural network (MLP)
   ↓  36 class probabilities
   ↓  Confidence ≥ 0.85 and majority vote over the last 7 frames
Letter / digit on screen
```

Instead of feeding raw images to a big image model, I extract the hand skeleton first and classify only 63 numbers. That keeps the model tiny, fast on a CPU, and independent of the background, hand position and hand size.

**Model:** 63 → Dense(256) → Dense(128) → Dense(64) → Dense(36, softmax), with BatchNorm and Dropout(0.3) after each hidden layer. Adam (lr 0.001), early stopping.

## Dataset

| Source | Content |
|---|---|
| Kaggle "ASL Alphabet" | About 3,000 images per letter |
| My own webcam frames | 300 frames for each of the 36 classes |
| **Total** | **88,800 images** → 72,901 usable samples after hand detection |

## Problems I hit and how I solved them

**1. Library version conflicts.** MediaPipe, OpenCV, NumPy, protobuf and TensorFlow kept breaking each other. I built a clean conda environment and pinned exact versions.

**2. 17.9% of images had no detectable hand.** I dropped those instead of guessing, leaving 72,901 clean samples.

**3. Imbalanced classes.** Letters have 3,300 images, digits only 300, which is why digits 0 and 1 are the weakest. More digit data is the fix.

**4. Predictions flickered on live video.** I added a confidence threshold (below 0.85 shows "Unknown") and a majority vote over the last 7 frames, which made the output stable.

**5. The repository was 1.2 GB.** I'd committed all 88,800 training images by mistake. I removed them from the whole git history, so it now clones in seconds.

## Limitations and next steps

- J and Z are drawn in the air, but the model looks at one frame at a time, so they're less reliable.
- Test on other signers, and split train/test by person instead of randomly.
- Add a spell-corrector or a model for whole-word signs.
