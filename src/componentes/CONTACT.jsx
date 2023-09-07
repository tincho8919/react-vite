
import React, { useState } from 'react';
import '../css/CONTACT.scss';

function CONTACT() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        age: '',
        dateOfBirth: '',
        gender: '', // Establece un valor predeterminado para el género
        country: '',  // Nuevo campo de país
        province: '', // Nuevo campo de provincia
        location: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Agrega la lógica para enviar los datos del formulario a donde sea necesario
    };

    return (
        <div className="formulario-container">
            <h2>REGISTRATION FORM</h2>
            <form onSubmit={handleSubmit} className="formulario">
                <div className="campo">
                    <label htmlFor="username">USERNAME:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="campo">
                    <label htmlFor="email">EMAIL:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="campo">
                    <label htmlFor="password">PASSWORD:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="campo">
                    <label htmlFor="age">AGE:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="campo">
                    <label htmlFor="dateOfBirth">DATE OF BIRTH:</label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="campo">
                    <label htmlFor="gender">SEX:</label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="male">MALE</option>
                        <option value="female">FEMALE</option>
                        <option value="other">OTHER</option>
                    </select>
                </div>
                <div className="campo">
                    <label htmlFor="country">COUNTRY:</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="province">PROVINCE:</label>
                    <input
                        type="text"
                        id="province"
                        name="province"
                        value={formData.province}
                        onChange={handleChange}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="location">LOCALITY:</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="campo">
                    <label htmlFor="description">DESCRIPTION:</label>
                    <textarea className='alto'
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className='button04' type="submit">REGISTER</button>
            </form>
        </div>
    );
}

export default CONTACT;