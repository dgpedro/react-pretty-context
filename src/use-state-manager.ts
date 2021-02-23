import { useEffect, useState, useRef, useMemo } from "react";

import { ActionsDispatcher, Actions } from "./types";

interface StateManager<TState> {
    initialState: TState;
    actions: Actions<TState>;
}

export function useStateManager<TState>({ actions, initialState }: StateManager<TState>) {
    const [state, setState] = useState(initialState);
    const unmounted = useRef(false);

    useEffect(
        () => () => {
            unmounted.current = true;
        },
        [],
    );

    const actionsDispatcher = useMemo(() => {
        const dispatcher: ActionsDispatcher<typeof actions> = {};
        if (!actions) {
            return dispatcher;
        }

        Object.keys(actions).forEach((actionKey) => {
            dispatcher[actionKey] = (...args: unknown[]) => {
                if (unmounted.current) {
                    return;
                }

                setState((prevState) => actions[actionKey](prevState, ...args));
            };
        });
        return dispatcher;
    }, [actions]);

    return {
        actionsDispatcher,
        state,
    };
}
