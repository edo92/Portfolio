# Typography System - Usage Guide

## Overview

This typography system provides a comprehensive set of text styles based on Vercel's design language. It uses semantic naming for better developer experience while maintaining the underlying font size definitions in the Tailwind configuration.

## Variant Categories

### Headings

- `hero` (72px) - For landing page hero sections and major marketing elements
- `display` (64px) - For feature highlights and visual impact sections
- `title` (56px) - For main page titles
- `h1` (48px) - For major section headings
- `h2` (40px) - For secondary section headings
- `h3` (32px) - For subsection headings
- `h4` (24px) - For card titles and small section headings
- `h5` (20px) - For minor headings
- `h6` (16px) - For the smallest headings

### Navigation

- `navlink` (0.875rem) - For navigation menu items
- `breadcrumb` (0.875rem) - For breadcrumb navigation

### Buttons

- `button-lg` (1rem) - For large buttons
- `button-md` (0.875rem) - For medium buttons (default)
- `button-sm` (0.75rem) - For small buttons

### Form Labels

- `label-lg` (1.25rem) - For large form labels
- `label-md` (1rem) - For medium form labels (default)
- `label-sm` (0.875rem) - For small form labels
- `label-xs` (0.75rem) - For extra small form labels

### Body Text

- `body-xl` (1.5rem) - For featured quotes and testimonials
- `body-lg` (1.25rem) - For lead paragraphs
- `body-md` (1.125rem) - For enhanced body text
- `body` (1rem) - For default body text
- `body-sm` (0.875rem) - For secondary text
- `body-xs` (0.75rem) - For captions and footnotes

### Special Text

- `caption` ('0.75rem) - For image captions
- `metadata` ('0.75rem) - For timestamps and metadata
- `tooltip` (0.8125rem) - For tooltips
- `badge` ('0.75rem) - For status badges

## Additional Variant Properties

### Alignment

- `align="left"` (default)
- `align="center"`
- `align="right"`

### Font Weight

- `weight="regular"` (default for body text)
- `weight="medium"` (default for buttons and labels)
- `weight="semibold"` (default for some headings)
- `weight="bold"` (default for major headings)

### Text Transformation

- `transform="normal"` (default)
- `transform="uppercase"`
- `transform="lowercase"`
- `transform="capitalize"`

### Color

- `color="default"` (black/white depending on theme)
- `color="primary"` (blue)
- `color="secondary"` (gray)
- `color="success"` (green)
- `color="danger"` (red)
- `color="warning"` (amber)
- `color="muted"` (light gray)

## Usage Examples

```jsx
// Basic usage
<Typography variant="heading1">Page Title</Typography>
<Typography variant="body">Standard paragraph text</Typography>

// Combining variants
<Typography
  variant="body-lg"
  weight="semibold"
  color="primary"
>
  Important notice
</Typography>

// Customizing HTML element
<Typography variant="heading3" as="div">
  This renders as a div instead of h4
</Typography>

// Using with additional classes
<Typography
  variant="button-md"
  className="px-4 py-2 bg-blue-500 rounded"
>
  Button Text
</Typography>
```

## Best Practices

1. Use semantic variants that describe the purpose rather than just the size
2. Maintain consistency by using the predefined variants instead of custom font sizes
3. Layer additional styling with className when needed
4. Override the HTML element with the `as` prop when semantically appropriate
5. Use color variants consistently across the application
6. Adapt the system to your brand by updating the underlying Tailwind configuration
