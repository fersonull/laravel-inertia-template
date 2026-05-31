export interface FormDataInterface {
    email: string;
    password: string;
    name: string;
    password_confirmation: string;
}

export interface FieldsInterface {
    login: Fields[];
    register: Fields[];
}

export interface Fields {
    id: keyof FormDataInterface;
    label: string;
    type: string;
    placeholder: string;
    hasAction: boolean;
}
