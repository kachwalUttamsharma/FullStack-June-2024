## Hooks Overview

- **`useMemo`**: Caches the return value of a function for specific inputs, recomputing only when dependencies change.
- **`React.memo`**: Caches the component based on props, re-rendering only when props change.
- **`useCallback`**: Caches a function, returning the same instance unless dependencies change, preventing unnecessary function recreation.
- **`useState`**: Manages state in a functional component.
- **`useEffect`**: Handles side effects in functional components, running code after renders.
