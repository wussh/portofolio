# Portfolio Website

A simple, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Modern UI with smooth animations
- Navigation menu with smooth scrolling
- Mobile-friendly navigation with hamburger menu
- Sections for about, experience, skills, education, and contact information

## How to Use

1. Clone or download this repository
2. Open `index.html` in your web browser to view the website
3. Customize the content in `index.html` to match your personal information
4. Modify the styles in `styles.css` to change colors, fonts, or layout
5. Update the JavaScript in `script.js` if you need additional functionality

## Customization

### Changing Colors

The color scheme can be easily modified by changing the CSS variables at the top of the `styles.css` file:

```css
:root {
    --primary-color: #0d47a1;
    --secondary-color: #1976d2;
    --accent-color: #2196f3;
    --light-color: #f5f5f5;
    --dark-color: #333;
    --text-color: #555;
    --border-color: #ddd;
    --transition: all 0.3s ease;
}
```

### Adding New Sections

To add a new section:

1. Create a new section in `index.html` following the existing pattern
2. Add appropriate styles in `styles.css`
3. Update the navigation links in the header

### Changing Background Image

To change the hero section background image, modify the following line in `styles.css`:

```css
#hero {
    /* ... other styles ... */
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('YOUR_IMAGE_URL_HERE');
    /* ... other styles ... */
}
```

## Technologies Used

- HTML5
- CSS3 (with CSS variables and flexbox/grid layouts)
- JavaScript (ES6+)
- Font Awesome icons

## License

This project is open source and available for personal use.

## Credits

- Font Awesome for icons
- Unsplash for the background image 