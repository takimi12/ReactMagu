// FakeRegisterComponent.js
import React, { useState } from 'react';

const FakeRegisterComponent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        const { firstName, username, email, password, confirmPassword } = formData;

        if (!firstName) newErrors.firstName = 'Imię jest wymagane.';
        if (!username) newErrors.username = 'Nazwa użytkownika jest wymagana.';
        if (!email) {
            newErrors.email = 'Email jest wymagany.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Podaj poprawny adres email.';
        }
        if (!password) newErrors.password = 'Hasło jest wymagane.';
        if (password !== confirmPassword) newErrors.confirmPassword = 'Hasła muszą być takie same.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // True if no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Formularz został poprawnie przesłany:', formData);
        }
    };

    return (
        <div>
            <h2>Rejestracja</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Imię:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    {errors.firstName && <p>{errors.firstName}</p>}
                </div>
                <div>
                    <label>Nazwa użytkownika:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                    <label>Hasło:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div>
                    <label>Potwierdź hasło:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>
                <button type="submit">Zarejestruj się</button>
            </form>
        </div>
    );
};

export default FakeRegisterComponent;
