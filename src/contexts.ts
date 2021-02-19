import { Context as ContextSelector } from "use-context-selector";
import { ActionsDispatcherObject, ActionsDispatcher } from "./types";

export interface Context<TState, TActions extends ActionsDispatcherObject> {
    state: TState;
    actions: ActionsDispatcher<TActions>;
}

export const contexts: Record<string, ContextSelector<Context<any, any>>> = {};
