# Next.js 13 App Directory: getStaticProps Empty Object Issue

This repository demonstrates a bug in Next.js 13's App directory where using `getStaticProps` and returning an empty object results in a blank page instead of rendering the default component. 

## Bug Report

The issue occurs when the `getStaticProps` function in a page component returns an empty object (`{}`).  Instead of rendering the component, the page remains blank.  This behavior is unexpected and inconsistent with how it works in the pages directory.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `http://localhost:3000`. You'll see a blank page.

## Expected Behavior

The page should render the default component (`<div>Hello World!</div>`) since `getStaticProps` returns an empty object which is a valid result for this function.

## Workaround

To resolve this issue, you can ensure to return at least a `props` object, even if it's empty. This is demonstrated in the `bugSolution.js` file.