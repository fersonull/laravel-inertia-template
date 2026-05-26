import { Link } from '@inertiajs/react';
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

const AuthPage = () => {
    const [step, setStep] = useState<'login' | 'register'>('login');

    return (
        <div className="flex h-dvh items-center justify-center">
            <Card className="min-w-md">
                <CardHeader>
                    <CardTitle>
                        {step.charAt(0).toUpperCase() + step.slice(1)}
                    </CardTitle>
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
                    <form>
                        <FieldGroup>
                            {fields[step].map((field) => (
                                <>
                                    <Field key={field.id}>
                                        <div className="flex items-center justify-between">
                                            <FieldLabel htmlFor={field.id}>
                                                {field.label}
                                            </FieldLabel>
                                            {field.hasAction && (
                                                <Button variant="link" asChild>
                                                    <Link>Forgot password</Link>
                                                </Button>
                                            )}
                                        </div>
                                        <Input
                                            name={field.id}
                                            id={field.id}
                                            placeholder={field.placeholder}
                                        />
                                        {((step === 'login' &&
                                            field.id === 'password') ||
                                            (step === 'register' &&
                                                field.id ===
                                                    'confirm_password')) && (
                                            <Field orientation="horizontal">
                                                <Checkbox id="show_pass" />
                                                <FieldLabel htmlFor="show_pass">
                                                    Show password
                                                </FieldLabel>
                                            </Field>
                                        )}
                                    </Field>
                                </>
                            ))}
                            <Field>
                                <Button type="submit">Submit</Button>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default AuthPage;
