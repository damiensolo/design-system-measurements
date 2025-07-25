
import React, { useState, useRef, useEffect } from 'react';
import s from './ChatComponent.module.css';

const ChatComponent = ({ task, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim() || isLoading) return;

    const userMessage = { text: question, user: true, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setQuestion('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: question, 
          taskId: task.id, 
          taskTitle: task.title 
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const aiMessage = { 
        text: data.response, 
        user: false, 
        timestamp: new Date() 
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = { 
        text: 'Sorry, I encountered an error. Please try again.', 
        user: false, 
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className={s.overlay}>
      <div className={s.container}>
        <div className={s.header}>
          <div>
            <h3 className={s.title}>Ask about: {task.title}</h3>
            <p className={s.description}>{task.description}</p>
          </div>
          <button className={s.closeButton} onClick={onClose} aria-label="Close chat">
            ×
          </button>
        </div>
        
        <div className={s.messagesContainer}>
          {messages.length === 0 && (
            <div className={s.emptyState}>
              <p>Ask me anything about this checklist item. I'm here to help!</p>
            </div>
          )}
          
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`${s.message} ${message.user ? s.userMessage : s.aiMessage} ${message.isError ? s.errorMessage : ''}`}
            >
              <div className={s.messageContent}>
                {message.text}
              </div>
              <div className={s.timestamp}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className={`${s.message} ${s.aiMessage}`}>
              <div className={s.messageContent}>
                <div className={s.typing}>Thinking...</div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        <form onSubmit={handleSubmit} className={s.inputForm}>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask a question about this checklist item..."
            className={s.textarea}
            rows="2"
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className={s.submitButton}
            disabled={!question.trim() || isLoading}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatComponent;
