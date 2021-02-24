import React, { useEffect } from "react";
import { createContext } from "use-context-selector";

import { Actions } from "./types";
import { contexts, Context } from "./contexts";
import { useStateManager } from "./use-state-manager";

export interface ContextManagerProps<TContext> {
    id: string;
    initialContext: TContext;
    actions: Actions<TContext>;
    displayName?: string;
}

export function ContextManager<TContext>({
    actions,
    children,
    displayName,
    id,
    initialContext,
}: React.PropsWithChildren<ContextManagerProps<TContext>>)
     {
    useEffect(
        () => () => {
            delete contexts[id];
        },
        [id],
    );

    const { actionsDispatcher, context } = useStateManager({
        actions,
        initialContext,
    });

    if (!contexts[id]) {
        contexts[id] = createContext({
            actions: null,
            context: null,
        });
    }

    const Context = contexts[id];
    const contextValue: Context<TContext, Actions<TContext>> = {
        actions: actionsDispatcher,
        context,
    };

    Context.displayName = displayName;

    return (
        <Context.Provider value={contextValue}>{children}</Context.Provider>
    );
}