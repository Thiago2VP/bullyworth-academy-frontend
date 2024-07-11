import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Form } from '../../styles/GlobalStyles';
import { SectionRegist } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Register() {
    const dispatch = useDispatch();

    const id = useSelector((state) => state.auth.user.id);
    const nameStored = useSelector((state) => state.auth.user.name);
    const emailStored = useSelector((state) => state.auth.user.email);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const emailOld = emailStored;

    React.useEffect(() => {
        if (!id) return;

        setName(nameStored);
        setEmail(emailStored);
    }, [emailStored, id, nameStored]);

    async function handleSubmit(e) {
        e.preventDefault();

        let formErrors = false;

        if (name.length < 3 || name.length > 255) {
            formErrors = true;
            toast.error('Name characters must be 3 to 255');
        }

        if (!isEmail(email)) {
            formErrors = true;
            toast.error('Invalid email.');
        }

        if (password.length > 200 || !password) {
            formErrors = true;
            toast.error('Invalid password');
        }

        if (password !== repassword) {
            formErrors = true;
            toast.error('Passwords must be equal');
        }

        if (formErrors) return;

        dispatch(actions.registerRequest({ name, email, password, id }));

        if (email !== emailOld) {
            toast.success('Email Changed');
            dispatch(actions.loginFailure());
            window.location = '/login';
        }
    }

    return (
        <Container>
            <SectionRegist>
                <Form onSubmit={handleSubmit}>
                    <label htmlFor="name">
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Obrigatory" />
                    </label>

                    <label htmlFor="email">
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Valid email" />
                    </label>

                    <label htmlFor="password">
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Maximum of 200 characters"
                        />
                    </label>

                    <label htmlFor="repassword">
                        Retype Password:
                        <input
                            type="password"
                            value={repassword}
                            onChange={(e) => setRepassword(e.target.value)}
                            placeholder="Passwords must be equal"
                        />
                    </label>

                    <button type="submit">{id ? 'Salvar' : 'Register'}</button>
                </Form>
            </SectionRegist>
        </Container>
    );
}
