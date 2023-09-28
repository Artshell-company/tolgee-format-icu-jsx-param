# Tolgee format ICU plugin with JSX param support

this is an alternative of [Tolgee ICU formatter](https://github.com/tolgee/tolgee-js/blob/main/packages/format-icu/README.md)
if you are using React and want to pass JSX in params when using the "argument" notation (ex: "Hello {thing}").

## Installation

```
npm install @artshell/tolgee-format-icu-jsx-param
```

## Usage

First, create a Tolgee instance and run it.

```ts
import { FormatIcu } from "@artshell/tolgee-format-icu-jsx-param";

const tolgee = Tolgee()
  .use(FormatIcu())
  .init(...)

...
```

Now you can use ICU format in your translations. Example:

```tsx
tolgee.t("test", "Hello {thing}", { thing: <strong>world</strong> });
// 'Hello <strong>world</strong>'
```

for more information refer to [Tolgee ICU formatter](https://github.com/tolgee/tolgee-js/blob/main/packages/format-icu/README.md)
