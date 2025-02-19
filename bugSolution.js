```javascript
// pages/index.js

export default function Home() {
  return (
    <div>Hello World!</div>
  );
}

export async function getStaticProps() {
  return {
    props: {}, // Return an empty props object
  };
}
```