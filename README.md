## Random Number Generator

A minimal web app that generates a random integer within a user-defined range.

### Features
- Enter minimum and maximum values
- Generates an integer uniformly between min and max (inclusive)
- Inline validation with a friendly error message if inputs are invalid
- Responsive layout and simple, clean UI

### Getting Started
1. Clone or download this repository.
2. Open `index.html` directly in your browser, or serve the folder with any static server.

Optional (serve locally):
```bash
# using PowerShell in this folder
npx serve . --single --listen 5000
```
Then visit `http://localhost:5000`.

### Usage
1. Set the values in the `Minimum` and `Maximum` inputs.
2. Click `Generate`.
3. The random integer result appears in the result box.

### Input Rules
- Inputs must be valid integers
- `Minimum` must be strictly less than `Maximum`
- On invalid input, the app shows: "Please enter valid min and max values."

### How It Works
- The core logic uses `Math.floor(Math.random() * (max - min + 1)) + min` to produce an integer in the inclusive range \[min, max\].

### Tech Stack
- HTML for structure (`index.html`)
- CSS for styling (`style.css`)
- Vanilla JavaScript for behavior (`index.js`)

### Project Structure
```text
.
├─ index.html   # Markup and script/style references
├─ index.js     # Range parsing, validation, and random integer generation
├─ style.css    # Layout and component styles
└─ README.md    # This file
```

### Accessibility & UX Notes
- Labels are associated with inputs
- Large click target for the `Generate` button
- Clear feedback area for results and validation messages

### Troubleshooting
- Ensure `Minimum` is an integer smaller than `Maximum`.
- If nothing happens on click, check your browser console for errors.

### License
This project is open-source; use it freely for learning or as a starter.


