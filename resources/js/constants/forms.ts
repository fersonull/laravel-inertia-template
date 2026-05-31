import type { FieldsInterface } from '@/types/form';

export const fields: FieldsInterface = {
    login: [
        {
            id: 'email',
            label: 'Email',
            type: 'text',
            placeholder: 'johndoe@example.com',
            hasAction: false,
        },
        {
            id: 'password',
            label: 'Password',
            type: 'password',
            placeholder: '',
            hasAction: true,
        },
    ],

    register: [
        {
            id: 'name',
            label: 'Name',
            type: 'text',
            placeholder: 'John Doe',
            hasAction: false,
        },
        {
            id: 'email',
            label: 'Email',
            type: 'text',
            placeholder: 'johndoe@example.com',
            hasAction: false,
        },
        {
            id: 'password',
            label: 'Password',
            type: 'password',
            placeholder: '',
            hasAction: false,
        },
        {
            id: 'password_confirmation',
            label: 'Confirm password',
            type: 'password',
            placeholder: '',
            hasAction: false,
        },
    ],
};
