import React, { useEffect, useRef, useState } from 'react'
import { data } from '../JS/data';
import '../css/HOME.scss';




export const Home = () => {

const listRef = useRef();
const [currentIndex, setCurrentIndex] = useState(0);
const handleComprarClick = () => {
    alert('PRODUCT PURCHASED!!!');
};

useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
        imgNode.scrollIntoView({
            behavior: "smooth"
        });
    }

}, [currentIndex]);


const scrollToImage = (direction) => {
    if (direction === 'prev') {
        setCurrentIndex(curr => {
            const isFirstSlide = currentIndex === 0;
            return isFirstSlide ? 0 : curr - 1;
        })
    } else {
        const isLastSlide = currentIndex === data.length - 1;
        if (!isLastSlide) {
            setCurrentIndex(curr => curr + 1);
        }
    }
}

const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
}

return (
    <body className='colorbody'>
        <section className='section'>
            <h2 className='text'>THE BEST VEGETARIAN FOOD AT BARGAIN PRICE</h2>
            <div className="main-container">
                <div className="slider-container">
                    <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
                    <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
                    <div className="container-images">
                        <ul ref={listRef}>
                            {
                                data.map((item) => {
                                    return <li key={item.id}>
                                        <img src={item.imgUrl} width={500} height={280} />
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="dots-container">
                        {
                            data.map((_, idx) => (
                                <div key={idx}
                                    className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
                                    onClick={() => goToSlide(idx)}>
                                    &#9865;
                                </div>))
                        }
                    </div>
                </div>
            </div>
        </section>
        <section className='section2'>
            <div className="recuadro2">
                <img className='img01' height={300} src="https://culturabienestar.com/wp-content/uploads/2020/06/Dise%C3%B1o-sin-t%C3%ADtulo-1.jpg" alt="Imagen 2" />
                <div className="contenido">
                    <h2>DISH OF THE DAY 1</h2>
                    <p>LEGUME VEGETABLES... TOTALLY VEGETARIAN</p>
                    <p>PRICE: $20</p>
                    <button onClick={handleComprarClick}>BUY</button>
                </div>
            </div>
            <div className="recuadro2">
                <img className='img01' height={300} src="https://www.cardamomo.news/__export/1607369512302/sites/debate/img/2020/12/07/cxmo_incrementar_el_consumo_de_alimentos_saludables_en_cinco_pasos_encontrx_esta_imagen_crop1607369431826.jpeg_242310155.jpeg" alt="Imagen 2" />
                <div className="contenido">
                    <h2>DISH OF THE DAY 2</h2>
                    <p>LEGUME VEGETABLES... TOTALLY VEGETARIAN</p>
                    <p>PRICE: $10</p>
                    <button onClick={handleComprarClick}>BUY</button>
                </div>
            </div>
            <div className="recuadro2">
                <img className='img01' height={300} src="https://th.bing.com/th/id/R.794e42f5c5a5451aa22634e55b601b76?rik=6bgzdksV8mSncA&pid=ImgRaw&r=0" alt="Imagen 2" />
                <div className="contenido">
                    <h2>DISH OF THE DAY 3</h2>
                    <p>LEGUME VEGETABLES... TOTALLY VEGETARIAN</p>
                    <p>PRICE: $15</p>
                    <button onClick={handleComprarClick}>BUY</button>
                </div>
            </div>
            <div className="recuadro2">
                <img className='img01' height={300} src="https://heraldodemexico.com.mx/u/fotografias/m/2021/2/25/f768x1-326806_326933_7.jpg" alt="Imagen 2" />
                <div className="contenido">
                    <h2>DISH OF THE DAY 4</h2>
                    <p>LEGUME VEGETABLES... TOTALLY VEGETARIAN</p>
                    <p>PRICE: $30</p>
                    <button onClick={handleComprarClick}>BUY</button>
                </div>
            </div>
        </section>
    </body>
)
}


export default Home;



