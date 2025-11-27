# BadSite – Expected Behavior

## Overview

This document describes the expected appearance and functionality of the BadSite project after all HTML, CSS, and JavaScript bugs have been fixed. It serves as a reference for the final, working version of the site.

---

## Layout & Styling

* **Page Background:** Blue

* **Font:** Comic Sans MS for all text

* **Max width:** 1024px, centered on the page

* **Header (`<h1>`):**

  * Centered text
  * Responsive font size between 1rem and 3rem
  * White color

* **Container (`#container`):**

  * Background: Red
  * Border: 1px solid yellow
  * Padding: 20px
  * Minimum width: 300px

* **Paragraph (`<p>`):**

  * Font size responsive between 0.8rem and 1rem

* **Button (`#b1`):**

  * Green background, white text
  * 5px padding
  * Dotted pink border
  * On hover: visually noticeable (optional styling)

* **Other Buttons:**

  * Orange background

---

## Functionality

* **Initial List:**

  * Three list items (`Item 1`, `Item 2`, `Item 3`) displayed in order

* **Button Click Behavior:**

  * Clicking **“CLICK ME MAYBE”** adds exactly **one new item** to the list
  * Each new item is numbered sequentially (`Item 4`, `Item 5`, …)
  * No duplicate or missing numbers
  * Only one item added per click

* **JavaScript Behavior:**

  * No automatic item creation on page load
  * No nested or duplicated event listeners
  * Counter increments reliably with each click
  * DOM references are correct and consistent

---

## Expected User Interaction

1. Open the page in any modern browser
2. See the header, container, paragraph, button, and initial list
3. Click the button multiple times

   * Each click adds **exactly one new list item** at the end
   * The numbering continues sequentially
4. Visual layout remains intact on different screen sizes (responsive)

---

## Notes

* This file serves as a **reference for testing and verification**.
* Any deviation from this description indicates a **bug or incomplete fix**.
* It can also be used to create automated tests or manual QA checklists.
