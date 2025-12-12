# Napkin Calculator Module Documentation

This module provides a tool to calculate how many napkins can be cut from a given piece of fabric, the cost per napkin, and the fabric utilization percentage. It is designed with separation of concerns and maintainability in mind, using React functional components and CSS variables for styling.

## Structure

```
app/napkin-calculator/
├── components/
│   ├── NapkinCalculator.tsx (was Napkins.tsx)
│   ├── NapkinForm.tsx
│   └── NapkinResults.tsx
└── page.tsx
```

---

## Components Overview

### 1. NapkinCalculator.tsx

**Role:** Main container and logic orchestrator.

- Holds all state: fabric price, dimensions, napkin size, and calculation result.
- Handles calculation and clearing logic.
- Renders the title, description, `NapkinForm`, and (if available) `NapkinResults`.
- Passes state and handlers as props to subcomponents.

#### Key Functions:

- `calculate`: Computes the number of napkins, cost per napkin, and utilization for both orientations (normal and rotated), and picks the best.
- `clear`: Resets all input fields and result.

### 2. NapkinForm.tsx

**Role:** Controlled form for user input.

- Receives all input values and setters as props from the parent.
- Renders input fields for fabric price, fabric width/length, napkin width/height.
- Renders two buttons: Calculate and Clear, which call the respective handlers from props.
- Uses CSS variables for color and font, and minimal Tailwind classes for layout and spacing.

#### Props:

- `fabricPrice`, `setFabricPrice`, `fabricWidth`, `setFabricWidth`, etc.
- `onCalculate`, `onClear`: event handlers.

### 3. NapkinResults.tsx

**Role:** Displays the calculation results.

- Receives a `result` object as prop.
- Shows:
  - Total napkins (with orientation info if rotated is better)
  - Cost per napkin
  - Fabric utilization percentage (with a progress bar)
- Uses CSS variables for color and font, and minimal Tailwind classes for layout and spacing.

#### Props:

- `result`: `{ totalNapkins, costPerNapkin, napkinsPerRow, napkinsPerCol, utilization, orientation }`

---

## How It Works

1. **User enters fabric and napkin data in the form.**
2. **On Calculate:**
   - The parent component (`NapkinCalculator`) parses the input values.
   - It computes how many napkins fit in both orientations (normal and rotated).
   - It selects the orientation with the highest yield.
   - It calculates the cost per napkin and the percentage of fabric used.
   - The result is passed to `NapkinResults` for display.
3. **On Clear:**
   - All fields and results are reset.

---

## File-by-File Explanation

### NapkinCalculator.tsx

- Imports React, useState, and the two subcomponents.
- Maintains all state and calculation logic.
- Handles all user interaction and data flow.
- Renders the main layout, title, description, form, and results.

### NapkinForm.tsx

- Pure presentational component.
- Receives all values and handlers as props.
- No internal state.
- Handles only rendering and user input events.

### NapkinResults.tsx

- Pure presentational component.
- Receives the result object as prop.
- No internal state.
- Handles only rendering of results and progress bar.

### page.tsx

- Imports and renders the main `NapkinCalculator` component.
- No logic or state.

---

## Styling

- Uses Tailwind CSS utility classes for layout, spacing, and responsiveness.
- Uses CSS variables (defined in `app/globals.css`) for all colors and fonts, ensuring theme consistency and easy customization.
- All color, background, and font styles reference variables like `var(--color-bg)`, `var(--color-primary)`, etc.
- The design is mobile-first and responsive.

---

## Extensibility & Best Practices

- **Separation of Concerns:** Each component has a single responsibility.
- **Reusability:** Form and results components can be reused or extended for similar tools.
- **Maintainability:** All logic is in English, with clear naming and modular structure.
- **Accessibility:** Uses semantic HTML and accessible form controls.
- **Customization:** Easily change theme by editing CSS variables in `globals.css`.

---

## Example Usage

1. Go to the Napkin Calculator page.
2. Enter the fabric price, width, length, and napkin dimensions.
3. Click Calculate to see how many napkins you can cut, the cost per napkin, and the fabric utilization.
4. Click Clear to reset the form.

---

## Authors & Credits

- Developed by Radike
- Structure and code refactor by GitHub Copilot

---

For any questions or improvements, edit the respective component or update the CSS variables in `globals.css`.
