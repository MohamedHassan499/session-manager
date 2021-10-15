# Session Manager
Written - from scratch - Session manager written with React.js.

## Installation
Easiest way is to just clone the repo.

## Intuition behind solution
- Have a state `MinutesRemaining` at which its value changes every 60 second using `setInterval` callback
- Used an explicit function for calculating how much time left from now till midnight
- Make the state value equals to minimum distance from now till midnight or just 30 minutes.
- Using `useEffect` hook, for every 60 seconds, decrement `MinutesRemaining` by 1.
- Alert if session ended.
- On click button, session is renewed.