import { useState } from 'react';
import Card from '../card/Card';
import FilterBar from '../filter-bar/FilterBar';
import Modal from '../modal/Modal';
import data from '../../js/data.json';
import './index.css';

const Board = () => {
  const [info, setInfo] = useState(data);
  const [filter, setFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [extensionToDelete, setExtensionToDelete] = useState(null);

  const toggleActive = (name) => {
    const updated = info.map((filter) =>
      filter.name === name ? { ...filter, isActive: !filter.isActive } : filter
    );
    setInfo(updated);
  };

  const handleRemoveClick = (name) => {
    setExtensionToDelete(name);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    const updated = info.filter(extension => extension.name !== extensionToDelete);
    setInfo(updated);
    setIsModalOpen(false);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
  };

  const filteredExtensions = info.filter(ext => {
    if (filter === 'all') return true;
    return ext.isActive === filter;
  });

  return (
    <>
      <FilterBar setFilter={setFilter} />
      <main>
        {filteredExtensions.map((info) => (
          <Card 
            key={info.name}
            name={info.name}
            logo={info.logo}
            description={info.description}
            isActive={info.isActive}
            toggleActive={toggleActive}
            remove={handleRemoveClick}
          />
        ))}
      </main>

      <Modal isOpen={isModalOpen} onClose={cancelDelete}>
        <h3>Confirmar Eliminación</h3>
        <p>¿Estás seguro de que deseas eliminar la extensión "<span className='span'>{extensionToDelete}</span>"?</p>
        <div className="modal-actions">
          <button className="modal-btn modal-btn-cancel" onClick={cancelDelete}>
            Cancelar
          </button>
          <button className="modal-btn modal-btn-confirm" onClick={confirmDelete}>
            Eliminar
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Board;