import React, { useEffect, useState } from 'react';
import './Adoptions.css'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

export default function Adoptions() {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 2; // Número de elementos por página
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const [showModal, setShowModal] = useState(false);
    const [selectedImageSrc, setSelectedImageSrc] = useState('');

    const json = {
        "pet": [
            {
                "image": "../images/PERRITO1.jpeg",
                "description": "Este tierno cachorrito es una dulce mezcla de tres meses de color marrón, con un corazón tan cálido como su suave pelaje."
            },
            {
                "image": "../images/PERRITO2.jpeg",
                "description": "Conoce a nuestro encantador cachorro negro de un año de edad, con una personalidad juguetona y unos ojos conmovedores que te robarán el corazón."
            },
            {
                "image": "../images/PERRITO3.jpeg",
                "description": "Tenemos al cachorrito marrón más lindo de tres meses, con orejas caídas y una cola moviéndose, esperando ser tu nuevo mejor amigo."
            },
            {
                "image": "../images/PERRITO4.jpeg",
                "description": "Estos hermosos cachorros tienen ambos más de dos años y están llenos de amor y afecto. Su naturaleza juguetona y dulce temperamento los convierten en una excelente opción para un hogar amoroso para siempre."
            },
            {
                "image": "../images/PERRITO5.jpeg",
                "description": "Si estás buscando un compañero leal y fiel, no busques más que nuestro cachorro tipo lobo de un año. Con su impresionante apariencia y su suave comportamiento, seguramente te hará cantar de alegría."
            }
        ]
    };

    useEffect(() => {
        cargarDatos();
    }, []);

    const cargarDatos = () => {
        {/* fetch('./adoptions.json')
            .then(response => response.json())
            .then(data => console.log(data))
            .then(data => setData(data))
    .catch(error => console.error('Error al cargar los datos:', error));*/}
        setData(json.pet);
    };

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    useEffect(() => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setData(json.pet.slice(startIndex, endIndex));
    }, [currentPage]);

    // Función para mostrar el modal
    const openModal = (src) => {
        setSelectedImageSrc(src);
        setShowModal(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className='container__adoptions'>
                <h1>Adopciones</h1>
                <table className='table-style'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Mi historia</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.description}>
                                <td>
                                    <img className='image_size' src={item.image} alt={item.description} onClick={() => openModal(item.image)} />
                                </td>
                                <td className='column__description'>{item.description}</td>
                                <td>
                                    <Link to='/contact'>
                                        <button className='button-contact' onClick={() => {

                                        }}>
                                            Contacto
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ReactPaginate className='react_pagination'
                previousLabel={'Anterior'}
                nextLabel={'Siguiente'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={Math.ceil(json.pet.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
            {showModal && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content">
                        <img src={selectedImageSrc} alt="Descripción de la imagen" className='img_modal' />
                        <i className='bx bx-x' onClick={closeModal} />
                    </div>
                </div>
            )}
        </>
    );
};