import React from 'react'
import '../css/PROMOTION.scss';



function Producto({ imagenSrc, nombre, descripcion, precio }) {
    const handleComprarClick = () => {
        alert(`YOU BOUGHT ${nombre} FOR $${precio}!`);
    };

    return (
        <tr>
            <td className='td02'>
                <img src={imagenSrc} alt={nombre} style={{ maxWidth: '200px', maxHeight: '200px' }} />
            </td>
            <td className='td02'>
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
            </td>
            <td className='td02'>${precio}</td>
            <td className='td02'>
                <button className='button02' onClick={handleComprarClick}>BUY</button>
            </td>
        </tr>
    );
}

function PROMOTION() {
    const productos = [
        {
            imagenSrc: 'https://th.bing.com/th/id/OIP.MfU_ovLgXhx8Hy3JtjWTJQHaHa?pid=ImgDet&rs=1',
            nombre: 'PROMOTION 1',
            descripcion: 'VEGETARIAN DRINKS AND DISHES',
            precio: 10,
        },
        {
            imagenSrc: 'https://th.bing.com/th/id/R.2161d24770ab3a9c33074a4dae4d57f5?rik=LyVoW%2bOShvXYkg&riu=http%3a%2f%2fcde.3.elcomercio.pe%2fima%2f0%2f1%2f3%2f0%2f7%2f1307034.jpg&ehk=ee3NYyFZYbG1pPXC1T95YsfHjXTCA5lZxMF0taxucGA%3d&risl=&pid=ImgRaw&r=0',
            nombre: 'PROMOTION 2',
            descripcion: 'VEGETARIAN DRINKS AND DISHES',
            precio: 15,
        },
        {
            imagenSrc: 'https://i.pinimg.com/736x/c8/90/94/c890940e2f2fd7d9fe58ba0f0ae009e2.jpg',
            nombre: 'PROMOTION 3',
            descripcion: 'VEGETARIAN DRINKS AND DISHES',
            precio: 20,
        },
        {
            imagenSrc: 'https://i.pinimg.com/originals/8b/37/0b/8b370b9f8ab23a7a6173706b81f470ae.jpg',
            nombre: 'PROMOTION 4',
            descripcion: 'VEGETARIAN DRINKS AND DISHES',
            precio: 10,
        },
        {
            imagenSrc: 'https://th.bing.com/th/id/OIP.SkMviMMUJTKlcaiDq1BE3QAAAA?pid=ImgDet&rs=1',
            nombre: 'PROMOTION 5',
            descripcion: 'VEGETARIAN DRINKS AND DISHES',
            precio: 15,
        },
        {
            imagenSrc: 'https://th.bing.com/th/id/OIP.eMXp4lf2n2LveIymy3vHEQHaH5?pid=ImgDet&rs=1',
            nombre: 'PROMOTION 6',
            descripcion: 'VEGETARIAN DRINKS AND DISHES.',
            precio: 20,
        },
        {
            imagenSrc: 'https://th.bing.com/th/id/R.559dd6f01423f2d45c3d886b8c20ec0d?rik=PWgVojSi3HsbMQ&riu=http%3a%2f%2fgaleriacosmo.com%2fwp-content%2fuploads%2f2014%2f03%2fIMG_0113.jpg&ehk=91B%2f4hV%2f95BO5%2f3GOnrgU7f2OBxCeUcmaheuhJifKw8%3d&risl=&pid=ImgRaw&r=0',
            nombre: 'PROMOTION 7',
            descripcion: 'VEGETARIAN DRINKS AND DISHES',
            precio: 10,
        },
        {
            imagenSrc: 'https://th.bing.com/th/id/OIP.hM94dSH0BD4NrOZaw-GjKwHaHa?pid=ImgDet&rs=1',
            nombre: 'PROMOTION 8',
            descripcion: 'VEGETARIAN DRINKS AND DISHES',
            precio: 15,
        },
        {
            imagenSrc: 'https://th.bing.com/th/id/OIP.-bBBWlSk_4W6Uy46coTTuwHaJ4?pid=ImgDet&rs=1',
            nombre: 'PROMOTION 9',
            descripcion: 'VEGETARIAN DRINKS AND DISHES',
            precio: 20,
        },
    ];

    return (
        <section className='tabla02'>
        <div className='container02'>
            <h1 className='h02'>PROMOTION ONLINE</h1>
            <table className='table02'>
                <thead>
                    <tr>
                        <th className='th02'>IMAGE</th>
                        <th className='th02'>PRODUCT</th>
                        <th className='th02'>PRICE</th>
                        <th className='th02'>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto, index) => (
                        <Producto
                            key={index}
                            imagenSrc={producto.imagenSrc}
                            nombre={producto.nombre}
                            descripcion={producto.descripcion}
                            precio={producto.precio}
                        />
                    ))}
                </tbody>
            </table>
        </div>
        </section>
    );
}

export default PROMOTION;
