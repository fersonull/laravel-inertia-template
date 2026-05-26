export const fields = {
    login: [
        {
            id: 'email',
            label: 'Email',
            type: 'email',
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
            type: 'name',
            placeholder: 'John Doe',
            hasAction: false,
        },
        {
            id: 'email',
            label: 'Email',
            type: 'email',
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
            id: 'confirm_password',
            label: 'Confirm password',
            type: 'confirm_password',
            placeholder: '',
            hasAction: false,
        },
    ],
};
