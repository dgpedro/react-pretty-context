# react-pretty-context

Simple and easy way to manage react context state.
This package makes use of [use-context-selector](https://github.com/dai-shi/use-context-selector) and allows context state updates by dispatching defined actions.

## Install

---

**NOTE**: _As mentioned in [use-context-selector](https://github.com/dai-shi/use-context-selector#install) it's also required to install peer dependencies:_

```
npm install --save react-pretty-context react scheduler
```

---

## Usage

`context-config.js`

```javascript
import { createContext } from "react-pretty-context";

// Context object that will be used as default
const initialContext = {
  firstName: "Default first name",
  lastName: "Default last name",
};

// Defined actions that perform context state updates
// For every action the first argument is always the current context object
// Every action returns a new context object updated or the current one
const actions = {
  setFirstName: (context, firstName) => {
    // New object which reflects the update
    return { ...context, firstName };
  },
  setLastName: (context, lastName) => {
    // Context update can be avoided by returning current context object
    if (context.firstName === "foo") {
      return context;
    }

    return { ...context, lastName };
  },
};

export const {
  ContextProvider, // Context provider
  defaultContext, // For convenience :)
  useActions, // Hook to access actions object
  useContextSelector, // Hook to select context using a selector function
} = createContext({
  actions,
  defaultContext: initialContext,
});
```

`some-component.jsx`

```javascript
import React from "react";
import { ContextProvider } from "./context-config";

const SomeComponent = () => {
  return (
      <ContextProvider
        // Optional prop to override defaultContext
        initialContext={{
            firstName: "First name",
            lastName: "Last name",
        }}
      >
        <PersonalDetails>
      </ContextProvider>
  );
}
```

`personal-details.jsx`

```javascript
import React from "react";
import { useContextSelector, useActions } from "./context-config";

const PersonalDetails = () => {
  // useContextSelector accepts as first argument the context selector function
  // Only when the return value/reference changes, the component updates
  const firstName = useContextSelector((context) => context.firstName);
  const lastName = useContextSelector((context) => context.lastName);

  // Direct access to context dispatch actions
  const { setFirstName, setLastName } = useActions();

  const onChangeFirstName = (ev) => {
    // Dispatch action
    setFirstName(ev.target.value);
  };

  const onChangeLastName = (ev) => {
    // Dispatch action
    setLastName(ev.target.value);
  };

  return (
    <div>
      <div>
        First name:
        <input value={firstName} onChange={onChangeFirstName} type="text" />
      </div>
      <div>
        Last name:
        <input value={lastName} onChange={onChangeLastName} type="text" />
      </div>
    </div>
  );
};
```

## Demo
Simple demo can be found [here](https://dgpedro.github.io/react-pretty-context/).
