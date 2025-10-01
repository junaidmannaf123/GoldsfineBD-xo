# Goldsfine International Ltd. - Website

A modern, responsive website for Goldsfine International Ltd., a leading manufacturer and supplier of high-quality paper and packaging products in Bangladesh.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with golden and black luxury theme
- **Fast Loading**: Optimized images and efficient CSS/JavaScript
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## Pages

1. **Home Page** (`index.html`) - Main landing page with hero section, company overview, products showcase, certificates, and partners
2. **About Us** (`about.html`) - Company story, mission, vision, and core values
3. **Products** (`products.html`) - Detailed product catalog with features and specifications
4. **Contact** (`contact.html`) - Contact form and company information

## File Structure

```
├── index.html              # Main homepage
├── about.html              # About us page
├── products.html           # Products page
├── contact.html            # Contact page
├── styles.css              # All CSS styles
├── script.js               # JavaScript functionality
├── README.md               # This file
└── images/                 # Image assets
    ├── business-award-ceremony-professional.jpg
    ├── medium-paper-rolls-packaging.jpg
    ├── liner-paper-sheets-industrial.jpg
    ├── duplex-board-cardboard-sheets.jpg
    ├── art-card-glossy-paper.jpg
    ├── folding-box-cardboard-packaging.jpg
    ├── newsprint-paper-rolls.jpg
    ├── tapioca-starch-powder-bag.jpg
    ├── waste-paper-recycling-bales.jpg
    ├── pulp-paper-raw-material.jpg
    ├── corrugated-cardboard-boxes-stacked.jpg
    ├── brown-paper-shopping-bags.jpg
    ├── kraft-paper-rolls-brown.jpg
    ├── food-packaging-boxes-containers.jpg
    ├── white-carton-product-boxes.jpg
    ├── colorful-specialty-paper-sheets.jpg
    ├── business-certificate-dhaka-chamber-of-commerce.jpg
    ├── business-certificate-.jpg
    └── google-maps-location-pin-dhaka-bangladesh.jpg
```

## Setup Instructions

### Option 1: Simple File Server
1. Download all files to a folder
2. Open `index.html` in a web browser
3. For development, use a local server like Live Server (VS Code extension) or Python's built-in server:
   ```bash
   python -m http.server 8000
   ```

### Option 2: Web Server Deployment
1. Upload all files to your web server
2. Ensure the web server serves HTML files correctly
3. Make sure all image paths are accessible

## Customization

### Colors
The website uses a golden and black color scheme. To change colors, modify the CSS variables in `styles.css`:

```css
:root {
    --golden: #d4af37;
    --golden-dark: #b8941f;
    --golden-light: #f4e5b8;
    /* ... other colors */
}
```

### Content
- Update company information in the HTML files
- Replace images in the `images/` folder
- Modify contact details in the header and footer sections

### Styling
- All styles are in `styles.css`
- Uses modern CSS with Flexbox and Grid layouts
- Responsive design with mobile-first approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## Performance

- Optimized images
- Minified CSS and JavaScript (for production)
- Efficient loading with lazy loading for images
- Fast rendering with modern CSS techniques

## Contact Information

**Goldsfine International Ltd.**
- Address: Sell Trident Tower (7th Floor), 57 Purana Paltan Line, VIP Road, Naya Paltan, Dhaka-1000, Bangladesh
- Phone: +88 01819228869
- Email: info@goldsfinebd.com
- Website: www.goldsfinebd.com

## License

This website is created for Goldsfine International Ltd. All rights reserved.

## Support

For technical support or questions about this website, please contact the development team.

---

**Note**: This website has been converted from a Next.js React application to pure HTML/CSS/JavaScript for better compatibility and easier deployment.