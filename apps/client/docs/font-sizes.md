# Font Size Analysis & Recommendations

## Issues Identified

1. **Inconsistent Text Hierarchy**: Different font size classes used for the same hierarchical level across components.

2. **Mixing Size Approaches**: Some components use size prop values (`size="sm"`, `size="lg"`) while others use direct Tailwind classes (`text-lg`, `text-xl`).

3. **Responsive Inconsistencies**: Some components have responsive text sizes but others don't scale with screen size.

4. **Variable Icon Sizing**: Icon sizes don't always scale proportionally with adjacent text.

5. **Overriding Size Props**: Some components override the base size with utility classes in the `className` prop.

## Specific Component Issues

### Header.tsx

- Navigation links use `size="sm"` but would be better aligned with global navigation standards

### Contact.tsx

- Label text uses inconsistent sizing (`size="xs"` vs. Tailwind classes)
- Button text sizing is inconsistent with other buttons across the site

### Hero.tsx

- Main heading uses direct text classes rather than leveraging the Heading component's size system
- Social links have different text sizing than in Footer.tsx

### Footer.tsx

- Navigation text is smaller than in Header.tsx
- Social section headings use different sizing than other section headings

### Projects.tsx

- Card titles use different sizing than other card-level titles
- Tag text sizing inconsistent with tags in other components

### Timeline.tsx

- Year labels use inconsistent text sizing compared to similar metadata elsewhere
- Timeline event titles have different text scale than other component titles

## Recommendations

### 1. Standardize Heading Levels

- `<h1>`: Use consistently for page titles (Hero, ProjectsHero)
- `<h2>`: Use for major section titles
- `<h3>`: Use for card titles and subsections
- Apply consistent size props or classes to each level

### 2. Standardize Paragraph Sizes

- `size="lg"`: Feature text, hero descriptions
- `size="md"`: Default body text
- `size="sm"`: Secondary information
- `size="xs"`: Labels, metadata, captions

### 3. Create Consistent Responsive Text

- Ensure all text components scale appropriately across breakpoints
- Use consistent breakpoint patterns for font scaling

### 4. Align Icon Sizes with Text

- Small text → `size-4` icons
- Medium text → `size-5` icons
- Large text → `size-6` icons

### 5. Standardize Interactive Element Text

- Buttons should have consistent text sizing
- Navigation links should maintain consistent sizing
- Form labels should use consistent sizing

### 6. Implementation Strategy

- Update component library to enforce consistent sizing
- Create text size utility functions/constants
- Document the typography system for the team
