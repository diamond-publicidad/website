# Header home link and locale reset

## Objective

Ensure the header logo always returns to the home page of the current locale, and the language selector loads the selected locale from its root instead of keeping the current nested route.

## Requirements

- The brand logo on the left side of the header must navigate to the home page of the active locale from any page, including service and history pages.
- The home destination must be based on the current locale root, not on the current page path or a relative path that resolves incorrectly on nested routes.
- When the user changes the language, the site must reload the page for the selected locale from that locale root instead of preserving the current route.
- The behavior must work consistently for the configured locales and the GitHub Pages base path used by the site.
- The navigation must remain accessible and usable with keyboard, mouse, and screen readers.
- The change must not modify the visual identity or content structure of the header beyond the required navigation behavior.

## Acceptance Criteria

- From a service page or story page, clicking the header logo redirects to the home page of the same locale.
- Switching from one language to another from a nested route does not keep the previous route; it loads the selected locale home page.
- The locale switch behavior is a full page reload to the locale root, matching the expected navigation pattern.
- The behavior works correctly for the public site URLs generated under the configured base path.
- The logo remains a valid, keyboard-focusable link with accessible name and semantic structure.
- No broken links, repeated redirects, or locale mismatches are introduced by the header navigation.

## Scope

This spec covers only the header brand link behavior and the language switch reset behavior. It does not introduce a new design system, new pages, or additional navigation flows.

## Implementation Notes

### Changes made

- The brand link in the header was decoupled from the global scroll-to-top behavior so it uses a direct locale-aware home URL instead of a class that also triggers the shared scroll action.
- The language selector now computes the selected locale root and redirects to `${basePath}${locale}/` with a full page reload, ensuring the page resets to the top instead of preserving the prior nested route.
- The scroll restoration logic was explicitly reset when the locale changes so the previous scroll offset is not restored after the locale reload.
- The navigation still preserves the site locale structure and GitHub Pages base path, without altering the existing visual identity or header structure beyond the required behavior.

### Verified decisions

- The home link target is derived from the active locale and the configured public base path, so it resolves correctly from `/es-co/servicios/` and `/es-co/nuestra-historia/`.
- The locale switch uses a full page navigation to the selected locale root, which prevents route retention and avoids restoring the previous nested scroll position.
- The fix keeps the header link accessible and keyboard-operable, with the same semantic structure and label as before.
- Validation was completed with the project checks: `npm run check` and `npm run build`, both successful.

### Validation result

- Astro check: 0 errors, 0 warnings, 0 hints.
- Astro build: successful static generation for the locale routes and homepage, with no route or asset regressions.
