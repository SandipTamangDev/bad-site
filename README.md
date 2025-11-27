# BadSite – Learning & Debugging Journey

## Overview

This project started as a small interactive webpage with a list and a button to add items dynamically. What began as a simple feature quickly turned into a **hands-on lesson in HTML, CSS, and JavaScript**, uncovering multiple bugs and teaching practical problem-solving skills.

---

## Key Lessons Learned

### 1. **HTML Best Practices**

* Use `<meta charset="UTF-8">` to ensure proper encoding.
* Use `<meta name="viewport" content="width=device-width, initial-scale=1.0">` for responsive design.
* Always set `type="button"` for buttons that are not meant to submit forms.
* Avoid inline event handlers (`onclick`) when using JavaScript event listeners.

### 2. **CSS Debugging**

* CSS requires **valid values**. Invalid entries like `font-size: not-a-number;` are ignored by browsers.
* Responsive font sizes can be implemented with `clamp()`.
* Keep CSS clean, readable, and maintainable to prevent visual bugs.

### 3. **JavaScript Fundamentals**

* **Function references vs. execution**: Don’t add parentheses when passing a function to an event listener.
* Avoid **nested event listeners** inside other handlers; they can multiply actions unexpectedly.
* Use **clear, descriptive variable and function names** to prevent confusion and errors.
* Ensure **consistent DOM references**: avoid naming collisions between variables and HTML elements.
* Keep counters and dynamic logic isolated to prevent unintended behavior.

### 4. **Debugging & Problem-Solving**

* Isolate the problem step by step instead of guessing.
* Test each fix incrementally before moving to the next.
* Recognize patterns in errors, like duplicate executions caused by multiple listeners.
* Learn to read and interpret browser console warnings and DevTools.

### 5. **Git & Workflow Practices**

* Commit **incrementally**: buggy version, small fixes, then final stable version.
* Use **clear commit messages** and optionally tie them to issues for tracking progress.
* Document expected functionality in a separate file (`EXPECTED.md`) for reference and testing.

---

## Summary

This project reinforced that **practical debugging teaches more than theory alone**. You learned:

* How HTML, CSS, and JS interact in real projects.
* The importance of clean naming, separation of concerns, and proper event handling.
* How to systematically approach and fix bugs.
* How to use Git effectively to document progress and track issues.

Even small mistakes, like a missing `()` or a bad variable name, can produce unexpected behavior—but carefully analyzing them strengthens problem-solving skills.
