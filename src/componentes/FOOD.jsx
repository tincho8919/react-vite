
import React from 'react';
import '../css/FOOD.scss';

function Producto({ imagenSrc, nombre, descripcion, precio }) {
    const handleComprarClick = () => {
        alert(`YOU BOUGHT ${nombre} FOR $${precio}!`);
    };

    return (
        <tr>
            <td className='td01'>
                <img src={imagenSrc} alt={nombre} style={{ maxWidth: '200px', maxHeight: '200px' }} />
            </td>
            <td className='td01'>
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
            </td>
            <td className='td01'>${precio}</td>
            <td className='td01'>
                <button className='button01' onClick={handleComprarClick}>BUY</button>
            </td>
        </tr>
    );
}

function FOOD() {
    const productos = [
        {
            imagenSrc: 'https://th.bing.com/th/id/R.0879ac148e3b069387f1c6c99ff0d161?rik=h7i4ppTDEggfsw&pid=ImgRaw&r=0',
            nombre: 'NONANA',
            descripcion: 'VEGETARIAN TOTAL',
            precio: 10,
        },
        {
            imagenSrc: 'https://th.bing.com/th/id/OIP.NBnt6XQr7TW2qkGqFHw5-QHaFC?pid=ImgDet&rs=1',
            nombre: 'ALGHO',
            descripcion: 'VEGETARIAN TOTAL',
            precio: 15,
        },
        {
            imagenSrc: 'https://allweeat.com/wp-content/uploads/2020/06/anewsalad-scaled-1.jpg',
            nombre: 'PEPA',
            descripcion: 'VEGETARIAN TOTAL',
            precio: 20,
        },
        {
            imagenSrc: 'https://www.medicmagz.com/wp-content/uploads/2022/08/harvard-healthy-eating-plate-recipes-harvard-healthy-eating-plate-breakfast.jpg',
            nombre: 'ARRIN',
            descripcion: 'VEGETARIAN TOTAL',
            precio: 10,
        },
        {
            imagenSrc: 'https://huli.ir/upload/2021/08/14/cache/thum_12d485004bcce1-51b2e1a53d5-659d1d18fb.jpg',
            nombre: 'MNTO',
            descripcion: 'VEGETARIAN TOTAL',
            precio: 15,
        },
        {
            imagenSrc: 'https://i.pinimg.com/originals/9e/05/7a/9e057a638adf6174fa536c388e88dd46.jpg',
            nombre: 'MIIL',
            descripcion: 'VEGETARIAN TOTAL',
            precio: 20,
        },
        {
            imagenSrc: 'https://g.denik.cz/124/8e/shutterstock-1440760505_kondice-800-16x9.jpg',
            nombre: 'COCHO',
            descripcion: 'VEGETARIAN TOTAL',
            precio: 10,
        },
        {
            imagenSrc: 'https://thumbs.dreamstime.com/b/buddha-bowl-salad-baked-sweet-potatoes-chickpeas-quinoa-tomatoes-arugula-avocado-sprouts-light-blue-background-napkin-187014721.jpg',
            nombre: 'FRONDE',
            descripcion: 'VEGETARIAN TOTAL',
            precio: 15,
        },
        {
            imagenSrc: 'https://th.bing.com/th/id/OIP.CgcqCZN0RaAOuNkxVnAcyAHaJ4?pid=ImgDet&rs=1',
            nombre: 'SOSUPE',
            descripcion: 'VEGETARIAN TOTAL',
            precio: 20,
        },
    ];

    return (
        <section className='tabla01'>
        <div className='container01'>
            <h1 className='h01'> FOOD ONLINE</h1>
            <table className='table01'>
                <thead>
                    <tr>
                        <th className='th01'>IMAGE</th>
                        <th className='th01'>PRODUCT</th>
                        <th className='th01'>PRICE</th>
                        <th className='th01'>ACTION</th>
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

export default FOOD;

