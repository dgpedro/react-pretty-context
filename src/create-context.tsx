import React from "react";
import { v4 as uuid } from "uuid";

import { Actions, ActionsDispatcherObject, ActionsHook, SelectorHook, CreateContextParam, ContextProviderProps } from "./types";
import { ContextManager } from "./context-manager";
import { useActionsBuilder, useContextSelectorBuilder } from "./hooks";

interface ContextProviderReturn<TActions extends ActionsDispatcherObject, TContext> {
    ContextProvider: React.FC<ContextProviderProps<TContext>>;
    useActions: ActionsHook<TActions>;
    useContextSelector: SelectorHook<TContext>;
}

export function createContext<TContext, TActions extends Actions<TContext>>({
    actions,
    defaultContext,
    displayName,
}: CreateContextParam<TContext, TActions>): ContextProviderReturn<TActions, TContext> {
    const id = uuid();

    return {
        ContextProvider: ({ children, initialContext }) => (
            <ContextManager
                actions={actions}
                displayName={displayName}
                id={id}
                initialContext={initialContext || defaultContext}
            >
                {children}
            </ContextManager>
        ),
        useActions: useActionsBuilder<typeof actions>(id),
        useContextSelector: useContextSelectorBuilder(id),
    };
}
