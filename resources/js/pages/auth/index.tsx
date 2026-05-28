import { Link, useForm } from '@inertiajs/react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { fields } from '@/constants';
import auth from '@/routes/auth';
import type { FormDataInterface } from '@/types/form';

const AuthPage = () => {
    const [step, setStep] = useState<'login' | 'register'>('login');
    const currentStep = step.charAt(0).toUpperCase() + step.slice(1);
    const [showPass, setShowPass] = useState<boolean>(false);
    const { post, data, setData } = useForm<FormDataInterface>({
        email: '',
        password: '',
        name: '',
        confirm_password: '',
    });

    const handleLogin = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(auth.login.post().url);
    };

    const handleRegister = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(auth.register.post().url);
    };

    return (
        <div className="flex h-dvh items-center justify-center">
            <Card className="min-w-md">
                <CardHeader>
                    <CardTitle>{currentStep}</CardTitle>
                    <CardDescription>
                        {step === 'login'
                            ? 'Enter your credentials to continue.'
                            : 'Create an account to continue.'}
                    </CardDescription>
                    <CardAction>
                        <Button
                            variant="link"
                            onClick={() =>
                                setStep((prev) =>
                                    prev === 'login' ? 'register' : 'login',
                                )
                            }
                        >
                            {step === 'login' ? 'Register' : 'Login'}
                        </Button>
                    </CardAction>
                </CardHeader>

                <CardContent>
                    <form
                        onSubmit={
                            step === 'login' ? handleLogin : handleRegister
                        }
                    >
                        <FieldGroup>
                            {fields[step].map((field) => (
                                <div key={field.id}>
                                    <Field>
                                        <div className="flex items-center justify-between">
                                            <FieldLabel htmlFor={field.id}>
                                                {field.label}
                                            </FieldLabel>
                                            {field.hasAction && (
                                                <Button variant="link" asChild>
                                                    <Link href="/forgot-password">
                                                        Forgot password?
                                                    </Link>
                                                </Button>
                                            )}
                                        </div>
                                        <Input
                                            name={field.id}
                                            id={field.id}
                                            placeholder={field.placeholder}
                                            type={
                                                showPass &&
                                                field.type === 'password'
                                                    ? 'text'
                                                    : field.type
                                            }
                                            onChange={(e) =>
                                                setData(
                                                    field.id,
                                                    e.target.value,
                                                )
                                            }
                                            value={data[field.id]}
                                        />
                                        {((step === 'login' &&
                                            field.id === 'password') ||
                                            (step === 'register' &&
                                                field.id ===
                                                    'confirm_password')) && (
                                            <Field orientation="horizontal">
                                                <Checkbox
                                                    defaultChecked={showPass}
                                                    id="show_pass"
                                                    onCheckedChange={(
                                                        val: boolean,
                                                    ) => setShowPass(val)}
                                                />
                                                <FieldLabel htmlFor="show_pass">
                                                    Show password
                                                </FieldLabel>
                                            </Field>
                                        )}
                                    </Field>
                                </div>
                            ))}
                            <Field>
                                <Button type="submit">{currentStep}</Button>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default AuthPage;
