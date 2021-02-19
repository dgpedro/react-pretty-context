import React from "react";
import { v4 as uuid } from "uuid";

import { Actions, ActionsDispatcherObject, ActionsHook, StateHook, CreateContextParam, ContextProviderProps } from "./types";
import { ContextProvider as ContextProviderComponent } from "./context-provider";
import { useActionsBuilder, useContextSelectorBuilder } from "./hooks";

interface ContextProviderReturn<TActions extends ActionsDispatcherObject, TState> {
    ContextProvider: React.FC<ContextProviderProps<TState>>;
    useActions: ActionsHook<TActions>;
    useContextSelector: StateHook<TState>;
}

export function createContext<TState, TActions extends Actions<TState>>({
    actions,
    defaultState,
}: CreateContextParam<TState, TActions>): ContextProviderReturn<TActions, TState> {
    const id = uuid();
    return {
        ContextProvider: ({ children, initialState }) => (
            <ContextProviderComponent actions={actions} id={id} initialState={initialState || defaultState}>
                {children}
            </ContextProviderComponent>
        ),
        useActions: useActionsBuilder<typeof actions>(id),
        useContextSelector: useContextSelectorBuilder(id),
    };
}
