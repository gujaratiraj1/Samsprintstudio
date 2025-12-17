# Logo Setup Instructions

## Important: Add Logo Image

The website is configured to use a logo file at `/public/logo.png`.

### Steps to Add the Logo:

1. **Save the logo image as `logo.png`** in the `public/` folder:
   ```
   c:\Users\HI\Samsprintstudio\public\logo.png
   ```

2. The image file should be:
   - Format: PNG (transparent background preferred)
   - Size: At least 200x200px (preferably 400x400px for high DPI displays)
   - The app will scale it to 48x48px in the header

3. Once saved, the logo will appear in:
   - Browser tab (favicon)
   - Header/Navigation bar
   - Any other locations using the logo

### If You Don't Have the Image File:

If the logo image you showed is not yet saved as a file:
1. Save it as `logo.png` in the `public/` folder
2. Restart the development server: `npm start`
3. The logo will automatically appear

### Alternative: Using a Different Logo Path

If you want to use a different image path, update:
- `public/index.html` - favicon link
- `src/components/Header.jsx` - img src attribute

Currently both reference `/logo.png`
