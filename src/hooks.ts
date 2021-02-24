import { useContextSelector as useContextSelectorHook } from "use-context-selector";
import { ActionsDispatcherObject, ActionsDispatcher } from "./types";
import { contexts } from "./contexts";

function noContextError(id: string) {
    if (process.env.NODE_ENV !== "production") {
        throw new Error(`No context found for the id '${id}'. Maybe ContextProvider is missing???`);
    }
}

export function useActionsBuilder<TActions extends ActionsDispatcherObject>(id: string) {
    return () => {
        if (!contexts[id]) {
            noContextError(id);
            return null;
        }
        const actions = useContextSelectorHook(contexts[id], (context) => context.actions);
        return actions as ActionsDispatcher<TActions>;
    };
}

export function useContextSelectorBuilder<TContext>(id: string) {
    return function useContextSelector<TSelectedContext>(selectorFn: (context: TContext) => TSelectedContext) {
        if (!contexts[id]) {
            noContextError(id);
            return null;
        }
        return useContextSelectorHook(contexts[id], ({ context }) => selectorFn(context));
    };
}
