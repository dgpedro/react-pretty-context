export type ActionFunction<TState> = (state: TState, ...args: unknown[]) => TState;
export type ActionDispatcherFunction = (...args: unknown[]) => void;

export type ActionsDispatcherObject = Record<string, ActionDispatcherFunction>;

export type Actions<TState> = Record<string, ActionFunction<TState>>;

type DropFirst<T extends unknown[]> = T extends [unknown, ...(infer U)] ? U : never;
export type ActionsDispatcher<T extends ActionsDispatcherObject> = {
    [index in keyof T]: (...args: DropFirst<Parameters<T[index]>>) => void;
};

export interface ContextProviderProps<TState> {
    initialState?: TState;
}

export interface CreateContextParam<TState, TActions extends Actions<TState>> {
    actions: TActions;
    defaultState: TState;
    displayName?: string;
}

export type ActionsHook<TActions extends ActionsDispatcherObject> = () => ActionsDispatcher<TActions>;
export type StateHook<TState> = <TSelectedState>(
    selectorFn: (state: TState) => TSelectedState,
) => TSelectedState;
