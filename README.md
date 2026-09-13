# DevStack

Explore technologies adn pick your Stack of Development skills and technologies.

## Technologies Used

- React
- TailwindCSS
- React Toastify

## Features

1. Fetch Development technologies with proper loading, and error handling.
2. Adding and removing technologies from Stack.
3. React Toastify notification on Add, Remove and Clearing stack.

## FAQ

1. What is JSX, and why is it used in React?
   **Answer:** JSX which stands for JavaScript XML lets you write HTML code in JavaScript. It is used for easier HTML code writing, management and easier debugging.

2. What is the difference between props and state?
   **Answer:** Props are read-only data passed from one component to another. State is a updatable data stored in local component. Changing state caused the component to re-render.
3. What does the `useState` hook do, and where did you use it in this project?
   **Answer:** `useState` is the state management hook which enable using and updating state values. I have used it in mainly in "Techs.tsx" file to maintain the Tech Data and user created tech stack,

4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
   **Answer:** `useEffect` runs a callback function on condition. I need it to load the JSON data so that the request is sent only when the url changes. Otherwise fetching data will keep updating the state causing the component to re-render infinitely.

5. Why does every item in a `.map()` list need a unique `key` prop?
   **Answer:** React uses virtual DOM to update elements. So it needs the key to distinguish the items one from another.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
   **Answer:** Conditional rendering is rendering a component base on some condition. Example,

```jsx
{
  !props.isAdded && (
    <Button
      size="full"
      variant="black"
      className="mt-auto"
      onClick={() => props.onAddToCart(props.techItem)}
    >
      Add to Stack
    </Button>
  );
}

{
  props.isAdded && (
    <button className="py-2 w-full text-green-500 bg-green-200 border border-green-400 rounded cursor-not-allowed mt-auto">
      ✓ Added to Stack
    </button>
  );
}
```

Here I am loading "Add to Stack" button based on if it the item is not already present.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
   **Answer:** React is a one-way data flowing framework. You can pass data from parent to child using Props. To pass data from a child to parent a callback function is used.
