import React, { useState } from 'react';
import { useCheckItem } from '../../utilities/checklistsContext';
import ChatComponent from '../ChatComponent';
import s from './ChecklistItem.module.css';

const ChecklistItem = ({ title, description, id }) => {
  const { add, remove, checked } = useCheckItem(id);
  const [showChat, setShowChat] = useState(false);

  const handleChange = (e) => {
    const { checked } = e.target;

    if (checked) add(id);
    if (!checked) remove(id);
  };

  const handleChatClick = (e) => {
    e.preventDefault();
    setShowChat(true);
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };

  return (
    <>
      <li className={s.container}>
        <input className={s.input} type="checkbox" id={id} onChange={handleChange} checked={checked} />
        <label className={s.label} htmlFor={id}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.description}>{description}</p>
        </label>
        <button 
          className={s.chatButton}
          onClick={handleChatClick}
          aria-label={`Ask questions about ${title}`}
          title="Ask AI about this item"
        >
          💬
        </button>
      </li>
      {showChat && (
        <ChatComponent 
          task={{ id, title, description }}
          onClose={handleCloseChat}
        />
      )}
    </>
  );
};

export default ChecklistItem;
