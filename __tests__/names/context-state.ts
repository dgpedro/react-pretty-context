export interface ContextState {
    firstName: string;
    lastName: string;
}

export const defaultContext: ContextState = {
    firstName: "Default first name",
    lastName: "Default last name",
};
