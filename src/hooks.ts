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

export function useContextSelectorBuilder<TState>(id: string) {
    return function useContextSelector<TSelectedState>(selectorFn: (state: TState) => TSelectedState) {
        if (!contexts[id]) {
            noContextError(id);
            return null;
        }
        const selectedState = useContextSelectorHook(contexts[id], ({ state }) => selectorFn(state));
        return selectedState;
    };
}
