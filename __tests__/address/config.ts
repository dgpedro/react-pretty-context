import {createContext} from "@src";

interface Context {
    street: string;
    postalCode: string;
}

const defaultContext: Context = {
    postalCode: "postal code",
    street: "street",
};

const actions = {
    setStreet: (context: Context, street: string) => {
        return {...context, street};
    },
    setPostalCode: (context: Context, postalCode: string) => {
        return {...context, postalCode};
    },
};


export const {
    ContextProvider: AddressProvider,
    useActions,
    useContextSelector,
} = createContext({
    actions,
    defaultContext,
});