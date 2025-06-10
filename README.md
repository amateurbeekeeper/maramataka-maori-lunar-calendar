# Maramataka NPM Package

A simple package to get current Maramataka (Māori lunar calendar) information. This package provides easy access to Maramataka data, including the current lunar phase name and description.

## Author
Created by [James Ian Rowles](https://james-ian-rowles.co.nz)

## Installation

### NPM
```bash
npm install maramataka-npm
```

### Browser (via jsDelivr)
```html
<script src="https://cdn.jsdelivr.net/npm/maramataka-npm@1.0.4/dist/maramataka.bundle.js"></script>
```

## Usage

### Node.js
```javascript
const maramataka = require('maramataka-npm');

// Get the current Maramataka name
const name = maramataka.getMaramatakaName();
console.log('Current Maramataka:', name);

// Get the current Maramataka description
const description = maramataka.getMaramatakaDescription();
console.log('Description:', description);

// Get the current date in NZ format
const date = maramataka.getCurrentDate();
console.log('Current Date:', date);
```

### Browser
```html
<script src="https://cdn.jsdelivr.net/npm/maramataka-npm@1.0.4/dist/maramataka.bundle.js"></script>
<script>
    // The maramataka object is available globally
    const name = maramataka.getMaramatakaName();
    const description = maramataka.getMaramatakaDescription();
    const date = maramataka.getCurrentDate();
    
    console.log('Current Maramataka:', name);
    console.log('Description:', description);
    console.log('Current Date:', date);
</script>
```

## API Reference

### `getMaramatakaName()`
Returns the name of the current Maramataka phase.

### `getMaramatakaDescription()`
Returns the description of the current Maramataka phase.

### `getCurrentDate()`
Returns the current date in New Zealand format (e.g., "15 March 2024").

### `createMaramatakaBar()`
Creates a Maramataka information bar for web pages. Returns an object with:
- `styles`: CSS styles for the bar
- `barHTML`: HTML for the bar
- `init()`: Function to initialize the bar on the page

Example:
```javascript
const bar = maramataka.createMaramatakaBar();
bar.init();
```

## Example

Here's a complete example of how to use the package in a web page:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Maramataka Example</title>
    <script src="https://cdn.jsdelivr.net/npm/maramataka-npm@1.0.4/dist/maramataka.bundle.js"></script>
</head>
<body>
    <div id="maramataka-info"></div>
    
    <script>
        window.addEventListener('load', function() {
            const infoDiv = document.getElementById('maramataka-info');
            
            const name = maramataka.getMaramatakaName();
            const description = maramataka.getMaramatakaDescription();
            const date = maramataka.getCurrentDate();
            
            infoDiv.innerHTML = `
                <h2>Today's Maramataka</h2>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Phase:</strong> ${name}</p>
                <p><strong>Description:</strong> ${description}</p>
            `;
        });
    </script>
</body>
</html>
```

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 