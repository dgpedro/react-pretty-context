import { createContext } from "@src";

interface PersonalDetails {
    name: string;
    lastName: string;
}

interface Address {
    street: string;
    city: string;
}

interface Context {
    personal: PersonalDetails;
    address: Address;
    email: string;
}

const initialContext: Context = {
    address: {
        city: "",
        street: "",
    },
    email: "",
    personal: {
        lastName: "",
        name: "",
    },
};

const actions = {
    setName: (context: Context, name: string) => {
        return { ...context, personal: { ...context.personal, name } };
    },
    setLastName: (context: Context, lastName: string) => {
        return { ...context, personal: { ...context.personal, lastName } };
    },
    setAddress: (context: Context, address: Partial<Address>) => {
        return { ...context, address: { ...context.address, ...address } };
    },
    setEmail: (context: Context, email: string) => {
        return { ...context, email };
    },
};

export const {
    ContextProvider,
    defaultContext,
    useActions,
    useContextSelector,
} = createContext({
    actions,
    defaultContext: initialContext,
    displayName: "ShippingDetails",
});
