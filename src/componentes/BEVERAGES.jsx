import React from 'react'
import '../css/BEVERAGES.scss';



function Producto({ imagenSrc, nombre, descripcion, precio }) {
    const handleComprarClick = () => {
        alert(`YOU BOUGHT ${nombre} FOR $${precio}!`);
    };

    return (
        <tr>
            <td className='td03'>
                <img src={imagenSrc} alt={nombre} style={{ maxWidth: '200px', maxHeight: '200px' }} />
            </td>
            <td className='td03'>
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
            </td>
            <td className='td03'>${precio}</td>
            <td className='td03'>
                <button className='button03' onClick={handleComprarClick}>BUY</button>
            </td>
        </tr>
    );
}

function BEVERAGES() {
    const productos = [
        {
            imagenSrc: 'https://th.bing.com/th/id/OIP.C_F2Uwa0gTUR7h6Q5rKs2gHaLG?pid=ImgDet&rs=1',
            nombre: 'NATURAL DRINK 1',
            descripcion: 'GOOD HEALTHY DRINK',
            precio: 10,
        },
        {
            imagenSrc: 'https://th.bing.com/th/id/OIP.KuHVVmxjPHT_-G5ixGvDUQHaJ1?pid=ImgDet&rs=1',
            nombre: 'NATURAL DRINK 2',
            descripcion: 'GOOD HEALTHY DRINK',
            precio: 15,
        },
        {
            imagenSrc: 'https://th.bing.com/th/id/OIP.2GfYCqAE70qBXKfyEBUPGAHaLH?pid=ImgDet&rs=1',
            nombre: 'NATURAL DRINK 3',
            descripcion: 'GOOD HEALTHY DRINK',
            precio: 20,
        },
        {
            imagenSrc: 'https://th.bing.com/th/id/OIP.ecIG2XlEDV5z1FfOO6LSigHaLI?pid=ImgDet&rs=1',
            nombre: 'NATURAL DRINK 4',
            descripcion: 'GOOD HEALTHY DRINK.',
            precio: 10,
        },
        {
            imagenSrc: 'https://th.bing.com/th/id/OIP.4M7MxoBylVEfE5RkWDopEQHaLH?pid=ImgDet&rs=1',
            nombre: 'NATURAL DRINK 5',
            descripcion: 'GOOD HEALTHY DRINK',
            precio: 15,
        },
        {
            imagenSrc: 'https://th.bing.com/th/id/R.abf3907f800e2e8377b01dd8253326e0?rik=%2bagoDGFOdcsMqA&riu=http%3a%2f%2fbravocooking.com%2fimg%2f2015%2f08%2fmango-frappe.jpg&ehk=RDken%2fhDThxfgFEqyCJ52aRonb6zFick%2bEq7617HBG8%3d&risl=&pid=ImgRaw&r=0',
            nombre: 'NATURAL DRINK 6',
            descripcion: 'GOOD HEALTHY DRINK',
            precio: 20,
        },
        {
            imagenSrc: 'https://th.bing.com/th/id/R.149cf2d5a58a066f9919dd81926abc10?rik=lLeVn7POsxCyTQ&riu=http%3a%2f%2fwww.sweetandsavorybyshinee.com%2fwp-content%2fuploads%2f2014%2f02%2fSuper-Green-Juice-5.jpg&ehk=I%2bzjkq7YkV4AxkvJL9PSDrG47Du3o%2fDSdQLFoAsUDX8%3d&risl=&pid=ImgRaw&r=0',
            nombre: 'NATURAL DRINK 7',
            descripcion: 'GOOD HEALTHY DRINK.',
            precio: 10,
        },
        {
            imagenSrc: 'https://th.bing.com/th/id/OIP.AQuGjdvvMAnpB78_qW4lGgHaGB?pid=ImgDet&rs=1',
            nombre: 'NATURAL DRINK 8',
            descripcion: 'GOOD HEALTHY DRINK',
            precio: 15,
        },
        {
            imagenSrc: 'https://th.bing.com/th/id/OIP.-pyn5mDOJenJPjidZ9EX7AHaLH?pid=ImgDet&rs=1',
            nombre: 'NATURAL DRINK 9',
            descripcion: 'GOOD HEALTHY DRINK',
            precio: 20,
        },
    ];

    return (
        <section className='tabla01'>
        <div className='container03'>
            <h1 className='h03'> BEVERAGES ONLINE</h1>
            <table className='table03'>
                <thead>
                    <tr>
                        <th className='th03'>IMAGE</th>
                        <th className='th03'>PRODUCT</th>
                        <th className='th03'>PRICE</th>
                        <th className='th03'>ACTION</th>
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

export default BEVERAGES;

