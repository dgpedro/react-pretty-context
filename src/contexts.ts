import { Context as ContextSelector } from "use-context-selector";
import { ActionsDispatcherObject, ActionsDispatcher } from "./types";

export interface Context<TContext, TActions extends ActionsDispatcherObject> {
    context: TContext;
    actions: ActionsDispatcher<TActions>;
}

export const contexts: Record<string, ContextSelector<Context<any, any>>> = {};
