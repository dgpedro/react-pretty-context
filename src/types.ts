export type ActionFunction<TContext> = (context: TContext, ...args: unknown[]) => TContext;
export type ActionDispatcherFunction = (...args: unknown[]) => void;

export type ActionsDispatcherObject = Record<string, ActionDispatcherFunction>;

export type Actions<TContext> = Record<string, ActionFunction<TContext>>;

type DropFirst<T extends unknown[]> = T extends [unknown, ...(infer U)] ? U : never;
export type ActionsDispatcher<T extends ActionsDispatcherObject> = {
    [index in keyof T]: (...args: DropFirst<Parameters<T[index]>>) => void;
};

export interface ContextProviderProps<TContext> {
    initialContext?: TContext;
}

export interface CreateContextParam<TContext, TActions extends Actions<TContext>> {
    actions: TActions;
    defaultContext: TContext;
    displayName?: string;
}

export type ActionsHook<TActions extends ActionsDispatcherObject> = () => ActionsDispatcher<TActions>;
export type SelectorHook<TContext> = <TSelectedContext>(
    selectorFn: (context: TContext) => TSelectedContext,
) => TSelectedContext;
