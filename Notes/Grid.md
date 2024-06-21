# CSS Grid Documentation

CSS Grid Layout is a two-dimensional layout system for the web, allowing the creation of complex layouts that adapt to different screen sizes and orientations.

## Grid Container Properties

### `display`

- **Description:** Defines a grid container and establishes a grid context for its contents.
- **Values:**
  - `grid`: Block-level grid container.
  - `inline-grid`: Inline-level grid container.

### `grid-template-columns`

- **Description:** Defines the column structure of the grid.
- **Values:**
  - `<track-size>`: e.g., `100px`, `1fr`.
  - `repeat(<count>, <track-size>)`: e.g., `repeat(3, 1fr)`.

### `grid-template-rows`

- **Description:** Defines the row structure of the grid.
- **Values:**
  - `<track-size>`: e.g., `100px`, `auto`.
  - `repeat(<count>, <track-size>)`: e.g., `repeat(2, 150px)`.

### `grid-template-areas`

- **Description:** Defines a grid template by referencing the names of the grid areas.
- **Values:**
  - `none`: No named grid areas.
  - String values representing grid area names, e.g.:
    ```
    "header header header"
    "sidebar main main"
    "footer footer footer"
    ```

### `grid-template`

- **Description:** Shorthand for defining `grid-template-rows`, `grid-template-columns`, and `grid-template-areas`.
- **Values:**
  - Combination of the values for `grid-template-rows`, `grid-template-columns`, and `grid-template-areas`.

### `grid-column-gap` (or `column-gap`)

- **Description:** Sets the size of the gap (gutter) between columns.
- **Values:** Length value, e.g., `10px`.

### `grid-row-gap` (or `row-gap`)

- **Description:** Sets the size of the gap (gutter) between rows.
- **Values:** Length value, e.g., `10px`.

### `grid-gap` (or `gap`)

- **Description:** Shorthand for `grid-row-gap` and `grid-column-gap`.
- **Values:** One or two length values, e.g., `10px 20px`.

### `justify-items`

- **Description:** Aligns grid items along the inline (row) axis.
- **Values:**
  - `start`: Aligns items to the start of the cell.
  - `end`: Aligns items to the end of the cell.
  - `center`: Centers items in the cell.
  - `stretch`: Stretches items to fill the cell (default).

### `align-items`

- **Description:** Aligns grid items along the block (column) axis.
- **Values:**
  - `start`: Aligns items to the start of the cell.
  - `end`: Aligns items to the end of the cell.
  - `center`: Centers items in the cell.
  - `stretch`: Stretches items to fill the cell (default).

### `place-items`

- **Description:** Shorthand for `align-items` and `justify-items`.
- **Values:** Combination of `align-items` and `justify-items` values.

### `justify-content`

- **Description:** Aligns the grid container's items along the inline (row) axis when the items do not completely fill the container.
- **Values:**
  - `start`: Aligns items to the start of the container.
  - `end`: Aligns items to the end of the container.
  - `center`: Centers items in the container.
  - `stretch`: Stretches items to fill the container.
  - `space-between`: Distributes items evenly with the first item at the start and last item at the end.
  - `space-around`: Distributes items evenly with space around them.
  - `space-evenly`: Distributes items evenly with equal space between them.

### `align-content`

- **Description:** Aligns the grid container's items along the block (column) axis when the items do not completely fill the container.
- **Values:**
  - `start`: Aligns items to the start of the container.
  - `end`: Aligns items to the end of the container.
  - `center`: Centers items in the container.
  - `stretch`: Stretches items to fill the container.
  - `space-between`: Distributes items evenly with the first item at the start and last item at the end.
  - `space-around`: Distributes items evenly with space around them.
  - `space-evenly`: Distributes items evenly with equal space between them.

### `place-content`

- **Description:** Shorthand for `align-content` and `justify-content`.
- **Values:** Combination of `align-content` and `justify-content` values.

## Grid Item Properties

### `grid-column-start`

- **Description:** Defines the grid item's starting position on the column axis.
- **Values:** Line number, `span` keyword, or named grid line.

### `grid-column-end`

- **Description:** Defines the grid item's ending position on the column axis.
- **Values:** Line number, `span` keyword, or named grid line.

### `grid-row-start`

- **Description:** Defines the grid item's starting position on the row axis.
- **Values:** Line number, `span` keyword, or named grid line.

### `grid-row-end`

- **Description:** Defines the grid item's ending position on the row axis.
- **Values:** Line number, `span` keyword, or named grid line.

### `grid-column`

- **Description:** Shorthand for `grid-column-start` and `grid-column-end`.
- **Values:** Start and end values, e.g., `1 / 3`.

### `grid-row`

- **Description:** Shorthand for `grid-row-start` and `grid-row-end`.
- **Values:** Start and end values, e.g., `2 / 4`.

### `grid-area`

- **Description:** Shorthand for `grid-row-start`, `grid-column-start`, `grid-row-end`, and `grid-column-end`, or assigns a name to the item.
- **Values:** Start and end values, e.g., `1 / 2 / 3 / 4` or a name from `grid-template-areas`.

### `justify-self`

- **Description:** Aligns the grid item along the inline (row) axis within its grid area.
- **Values:**
  - `start`: Aligns the item to the start of the area.
  - `end`: Aligns the item to the end of the area.
  - `center`: Centers the item in the area.
  - `stretch`: Stretches the item to fill the area (default).

### `align-self`

- **Description:** Aligns the grid item along the block (column) axis within its grid area.
- **Values:**
  - `start`: Aligns the item to the start of the area.
  - `end`: Aligns the item to the end of the area.
  - `center`: Centers the item in the area.
  - `stretch`: Stretches the item to fill the area (default).

### `place-self`

- **Description:** Shorthand for `align-self` and `justify-self`.
- **Values:** Combination of `align-self` and `justify-self` values.
