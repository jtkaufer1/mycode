import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const socket = useRef(null);

  useEffect(() => {
    const connectWebSocket = () => {
            socket.current = new WebSocket('https://aux2-d817f926-86ab-48d3-8a77-125fc61f144d.live.alta3.com');

      socket.current.onopen = () => {
        console.log('Connected to WebSocket server');
      };

      socket.current.onmessage = (event) => {
        const { timestamp, user, message } = JSON.parse(event.data);
        setMessages((prevMessages) => [
          ...prevMessages,
          `${timestamp} - ${user}: ${message}`,
        ]);
      };

      socket.current.onclose = () => {
        console.log('Disconnected from WebSocket server');
        setTimeout(connectWebSocket, 3000); // Reconnect after 3 seconds
      };

      socket.current.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
    };

    connectWebSocket();

    return () => {
      socket.current?.close();
    };
  }, []);

  const sendMessage = () => {
    if (input) {
      const payload = JSON.stringify({ message: input });
      socket.current.send(payload);
      setInput('');
    }
  };

  return (
    <div style={styles.chatContainer}>
      <h1 style={styles.title}>Real-Time Chat</h1>
      <div style={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <div key={index} style={styles.message}>
            {msg}
          </div>
        ))}
      </div>
      <div style={styles.inputWrapper}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
}

const styles = {
  chatContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    color: '#333',
    marginBottom: '1rem',
  },
  messagesContainer: {
    border: '1px solid #ccc',
    height: '300px',
    overflowY: 'auto',
    marginBottom: '1rem',
    padding: '0.5rem',
    backgroundColor: '#fff',
    borderRadius: '5px',
  },
  message: {
    padding: '0.5rem',
    marginBottom: '0.5rem',
    borderBottom: '1px solid #eee',
    fontSize: '1rem',
    color: '#333',
  },
  inputWrapper: {
    display: 'flex',
  },
  input: {
    flexGrow: 1,
    padding: '0.5rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#0070f3',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '0.5rem',
  },
  buttonHover: {
    backgroundColor: '#005bb5',
  },
};

