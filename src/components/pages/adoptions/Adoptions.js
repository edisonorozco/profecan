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
                "image": "../images/img-1.jpg",
                "description": "perrito_2"
            },
            {
                "image": "../images/img-2.jpg",
                "description": "perrito_3"
            },
            {
                "image": "../images/img-3.jpg",
                "description": "perrito_4"
            },
            {
                "image": "../images/img-4.jpg",
                "description": "perrito_5"
            },
            {
                "image": "../images/img-5.jpg",
                "description": "perrito_6"
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