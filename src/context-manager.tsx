import React, { useEffect } from "react";
import { createContext } from "use-context-selector";

import { Actions } from "./types";
import { contexts, Context } from "./contexts";
import { useStateManager } from "./use-state-manager";

interface ContextManagerProps<TState> {
    id: string;
    initialState: TState;
    actions: Actions<TState>;
    displayName?: string;
}

export function ContextManager<TState>({
    actions,
    children,
    displayName,
    id,
    initialState,
}: React.PropsWithChildren<ContextManagerProps<TState>>) {
    useEffect(
        () => () => {
            delete contexts[id];
        },
        [id],
    );

    const { actionsDispatcher, state } = useStateManager({
        actions,
        initialState,
    });

    if (!contexts[id]) {
        contexts[id] = createContext({
            actions: null,
            state: null,
        });
    }

    const Context = contexts[id];
    const contextValue: Context<TState, Actions<TState>> = {
        actions: actionsDispatcher,
        state,
    };

    Context.displayName = displayName;

    return (
        <Context.Provider value={contextValue}>{children}</Context.Provider>
    );
}