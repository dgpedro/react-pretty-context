import { createContext } from "@src";

interface PersonalDetails {
    name: string;
    lastName: string;
}

interface Address {
    street: string;
    city: string;
}

interface State {
    personal: PersonalDetails;
    address: Address;
    email: string;
}

const defaultState: State = {
    address: {
        city: "City",
        street: "Street",
    },
    email: "email@email.com",
    personal: {
        lastName: "Last name",
        name: "name",
    },
};

const actions = {
    setName: (state: State, name: string) => {
        return { ...state, personal: { ...state.personal, name } };
    },
    setLastName: (state: State, lastName: string) => {
        return { ...state, personal: { ...state.personal, lastName } };
    },
    setAddress: (state: State, address: Partial<Address>) => {
        return { ...state, address: { ...state.address, ...address } };
    },
    setEmail: (state: State, email: string) => {
        return { ...state, email };
    },
};

export const {
    useActions,
    useContextSelector,
    ContextProvider,
} = createContext({
    actions,
    defaultState,
    displayName: "ShippingDetails",
});
