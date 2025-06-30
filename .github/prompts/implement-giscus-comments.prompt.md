---
mode: agent
description: "A prompt to implement Giscus comments on the Docusaurus blog."
---

# Plan: Implement Giscus Comments in Docusaurus

This plan outlines the steps to integrate Giscus, a comment system powered by GitHub Discussions, into your Docusaurus portfolio website. This will allow visitors to leave comments on your blog posts using their GitHub accounts, with the comments stored directly in your site's GitHub repository.

## Requirements

- The comment system must be free and integrate with the existing GitHub repository.
- Users must be able to log in and comment using their GitHub accounts.
- Comments must be tied to specific blog post URLs.
- The comment section's theme should automatically adapt to the website's light and dark modes.
- The feature should be enabled on a per-post basis via front matter.

## Implementation Steps

### 1. Configure GitHub Repository

- **Enable Discussions:** In your `austenstone/portfolio` GitHub repository settings, enable the "Discussions" feature.
- **Create a Category:** Create a new discussion category specifically for blog comments (e.g., "Blog Comments") to keep them organized.

### 2. Set Up Giscus

- **Install Giscus App:** Go to the [Giscus website](https://giscus.app/) and install the Giscus GitHub App.
- **Grant Repository Access:** Authorize the app to access your `austenstone/portfolio` repository.
- **Configuration:** On the Giscus configuration page, select your repository and the newly created "Blog Comments" discussion category.
- **Get IDs:** Copy the generated Repository ID and Category ID provided by Giscus. These will be needed for the component.

### 3. Create the Giscus React Component

- **Install Dependency:** Add the `@giscus/react` package to your project by running `npm install @giscus/react`.
- **Create Component File:** Create a new file at `src/components/GiscusComponent/index.tsx`.
- **Implement Component Logic:** In this file, create a React component that uses the `<Giscus />` component from the installed package.
    - Pass the Repository ID and Category ID from the previous step as props.
    - Use the `useColorMode` hook from Docusaurus to dynamically set the Giscus `theme` prop, ensuring it matches the site's current theme.
    - Configure other Giscus settings like `mapping`, `reactionsEnabled`, etc., as required.

### 4. Integrate Component into Blog Posts

- **Swizzle `BlogPostItem`:** Use the Docusaurus swizzle command to create a customizable wrapper for the blog post component:
    ```bash
    npm run swizzle @docusaurus/theme-classic BlogPostItem -- --wrap
    ```
- **Modify Swizzled Component:** Edit the newly created file at `src/theme/BlogPostItem/index.js` (or `index.tsx`).
    - Import your `GiscusComponent`.
    - Use the `useBlogPost()` hook to access the current post's metadata and determine if it's a blog post page (`isBlogPostPage`).
    - Add logic to conditionally render the `GiscusComponent` only when `isBlogPostPage` is `true` and the post's front matter contains `enableComments: true`.

### 5. Enable Comments in Content

- **Update a Blog Post:** Select a blog post to test with, for example, `blog/2025-06-26-welcome-to-portfolio.md`.
- **Add Front Matter:** Add the field `enableComments: true` to the front matter of the selected blog post file.

## Testing

1.  **Local Development:**
    - Start the development server using `npm run start`.
    - Navigate to the blog post where comments have been enabled and verify that the Giscus widget loads correctly.
    - Navigate to a different blog post without the `enableComments` flag and confirm the widget does not appear.
    - Post a test comment to ensure it appears on the page and in the corresponding GitHub Discussion.
2.  **Theme Verification:**
    - Toggle the website between light and dark modes to ensure the Giscus component's theme updates accordingly.
3.  **Production Build:**
    - Run `npm run build` to create a production build of the site.
    - Serve the build locally (e.g., using `npm run serve`) and repeat the verification steps to ensure everything works as expected in the production environment.
