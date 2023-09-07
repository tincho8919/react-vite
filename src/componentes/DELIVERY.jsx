
import '../css/DELIVERY.scss';
import React, { useState } from 'react';

function DELIVERY() {
    const [deliveryLocation, setDeliveryLocation] = useState('');

    const handleDeliveryClick = () => {
        // Agrega la lógica para manejar la entrega aquí
        alert(`ORDER DELIVERED IN: ${deliveryLocation}`);
    };

    const handleLocationChange = (e) => {
        setDeliveryLocation(e.target.value);
    };

    return (
        <section className="delivery-section">
            <div className="delivery-info">
                <h2>HOME DELIVERY!!!</h2>
                <p>I ORDERED YOUR FAVORITE DISHES AND WE TOOK IT TO YOUR HOME</p>
                <div className="delivery-options">
                    <label>CHOOSE A SCHEDULE:</label>
                    <select>
                        <option value="1">08:00 AM - 10:00 AM</option>
                        <option value="2">10:00 AM - 12:00 PM</option>
                        <option value="3">12:00 PM - 15:00 PM</option>
                        <option value="4">15:00 PM - 17:00 PM</option>
                        <option value="5">17:00 AM - 20:00 PM</option>
                    </select>
                    <label>PLACE OF SHIPMENT:</label>
                    <input className='altoenvio'
                        type="text"
                        placeholder="YOUR DELIVERY ADDRESS"
                        value={deliveryLocation}
                        onChange={handleLocationChange}
                    />
                    <button onClick={handleDeliveryClick}>DELIVER</button>
                </div>
            </div>
            <div className="delivery-image">
                <img src="https://metrica.pe/blog/wp-content/uploads/2019/08/delivery-rider.jpg" alt="Delivery" />
            </div>
        </section>
    );
}

export default DELIVERY;

