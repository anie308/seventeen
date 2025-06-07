# Hospital Theme System

This healthcare application now features a comprehensive theming system that allows each hospital to customize the interface to match their brand identity.

## 🎨 Features

### Customizable Color System
- **Primary Colors**: Main brand color with 9 shades (50-900)
- **Secondary Colors**: Complementary color palette
- **Surface Colors**: Modern gray scale for backgrounds and text
- **Status Colors**: Success, warning, error, and info indicators

### Pre-configured Hospital Themes
1. **Default** - Medical Blue (Professional & trustworthy)
2. **St. Mary's Hospital** - Red theme
3. **City General** - Green theme  
4. **Royal Hospital** - Purple theme

### Custom Color Support
Hospitals can set any custom primary color with automatic contrast calculation.

## 🛠 Technical Implementation

### CSS Custom Properties
The system uses CSS custom properties (variables) that can be easily overridden:

```css
:root {
  --primary-600: #0284c7;  /* Main brand color */
  --secondary-500: #14b8a6; /* Accent color */
  /* ... other color variables */
}
```

### Theme Provider
React context provides theme management:

```tsx
import { ThemeProvider, useTheme } from './components/ThemeProvider';

// Set custom theme
const { setTheme } = useTheme();
setTheme({
  hospitalName: 'Custom Hospital',
  theme: 'custom',
  primaryColor: '#dc2626'
});
```

### Tailwind Integration
Colors are mapped to Tailwind CSS utilities:

```tsx
<button className="bg-primary hover:bg-primary-700 text-white">
  Primary Button
</button>
```

## 🚀 Usage

### For Hospitals
1. Use the theme selector in the navbar
2. Choose from preset themes or set custom colors
3. Settings are automatically saved to localStorage

### For Developers
1. Use semantic color names: `primary`, `secondary`, `surface`, etc.
2. Leverage the full color scale: `primary-50` through `primary-900`
3. Use status colors: `success`, `warning`, `error`, `info`

## 🎯 Benefits

- **Brand Consistency**: Each hospital can maintain their visual identity
- **Accessibility**: High contrast ratios ensure readability
- **Scalability**: Easy to add new themes and color variations
- **Performance**: CSS custom properties provide efficient runtime theming
- **Developer Experience**: Semantic naming makes styling intuitive

## 🔧 Adding New Themes

To add a new hospital theme:

1. Add theme configuration to `src/index.css`:
```css
[data-theme="new-hospital"] {
  --primary-600: #your-color;
  --primary-700: #darker-shade;
  --primary-800: #even-darker;
}
```

2. Add to available themes in `ThemeProvider.tsx`:
```tsx
const AVAILABLE_THEMES = [
  'default',
  'st-marys',
  'city-general', 
  'royal-hospital',
  'new-hospital'  // Add here
];
```

## 💡 Design Philosophy

The new UI follows modern healthcare application design principles:

- **Clean & Professional**: Light backgrounds with subtle shadows
- **Accessible**: High contrast ratios and clear typography
- **Intuitive**: Familiar patterns and consistent interactions
- **Responsive**: Works seamlessly across all device sizes
- **Medical-friendly**: Colors and design patterns appropriate for healthcare settings

The theme system ensures that while each hospital can customize the appearance, the underlying user experience remains consistent and professional.
