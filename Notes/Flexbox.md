# Flexbox Documentation

Flexbox, or the Flexible Box Layout, is a layout model in CSS designed to distribute space along a single axis, either horizontally or vertically, with the ability to manage the alignment and distribution of elements within a container.

## Reference Site

https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/#bonus-unpacking-the-demo-16

## Practice Site

FlexBoxFroggy : https://flexboxfroggy.com/

## Flex Container Properties

### `display`

- **Description:** Defines a flex container and enables a flex context for all its direct children.
- **Values:**
  - `flex`: Block-level flex container.

### `flex-direction`

- **Description:** Establishes the main axis, determining the direction flex items are placed in the flex container.
- **Values:**
  - `row`: Left to right (default).
  - `row-reverse`: Right to left.
  - `column`: Top to bottom.
  - `column-reverse`: Bottom to top.

### `flex-wrap`

- **Description:** Controls whether flex items are forced onto one line or can wrap onto multiple lines.
- **Values:**
  - `nowrap`: Single line (default).
  - `wrap`: Multiple lines, from top to bottom.
  - `wrap-reverse`: Multiple lines, from bottom to top.

### `flex-flow`

- **Description:** Shorthand for `flex-direction` and `flex-wrap`.
- **Values:** Any combination of `flex-direction` and `flex-wrap`.

### `justify-content`

- **Description:** Aligns flex items along the main axis.
- **Values:**
  - `flex-start`: Items are packed toward the start of the flex container (default).
  - `flex-end`: Items are packed toward the end of the flex container.
  - `center`: Items are centered along the main axis.
  - `space-between`: Items are evenly distributed, with the first item at the start and the last item at the end.
  - `space-around`: Items are evenly distributed with equal space around them.
  - `space-evenly`: Items are evenly distributed with equal space between them.

### `align-items`

- **Description:** Aligns flex items along the cross axis.
- **Values:**
  - `stretch`: Items stretch to fill the container (default).
  - `flex-start`: Items are aligned toward the start of the cross axis.
  - `flex-end`: Items are aligned toward the end of the cross axis.
  - `center`: Items are centered along the cross axis.
  - `baseline`: Items are aligned along their baselines.

## Flex Item Properties

### `order`

- **Description:** Controls the order in which flex items appear within the flex container.
- **Values:** Any integer (default is `0`).

### `flex-grow`

- **Description:** Defines the ability for a flex item to grow if necessary.
- **Values:** A unitless number (default is `0`).

### `flex-shrink`

- **Description:** Defines the ability for a flex item to shrink if necessary.
- **Values:** A unitless number (default is `1`).

### `flex-basis`

- **Description:** Defines the default size of an element before the remaining space is distributed.
- **Values:** Can be a length (e.g., `20%`, `10px`, `auto`).

### `flex`

- **Description:** Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
- **Values:** One or more of the values for `flex-grow`, `flex-shrink`, and `flex-basis`.
