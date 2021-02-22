import React from "react";
import { v4 as uuid } from "uuid";

import { Actions, ActionsDispatcherObject, ActionsHook, StateHook, CreateContextParam, ContextProviderProps } from "./types";
import { ContextManager } from "./context-manager";
import { useActionsBuilder, useContextSelectorBuilder } from "./hooks";

interface ContextProviderReturn<TActions extends ActionsDispatcherObject, TState> {
    ContextProvider: React.FC<ContextProviderProps<TState>>;
    useActions: ActionsHook<TActions>;
    useContextSelector: StateHook<TState>;
}

export function createContext<TState, TActions extends Actions<TState>>({
    actions,
    defaultState,
    displayName,
}: CreateContextParam<TState, TActions>): ContextProviderReturn<TActions, TState> {
    const id = uuid();

    (ContextManager as React.FC).defaultProps = {
        actions,
        id,
        initialState: defaultState,
        displayName,
    };

    return {
        ContextProvider: ContextManager,
        useActions: useActionsBuilder<typeof actions>(id),
        useContextSelector: useContextSelectorBuilder(id),
    };
}
