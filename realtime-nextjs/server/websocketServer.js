const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('message', (message) => {
    console.log(`Received: ${message}`);
    const broadcastMessage = JSON.stringify({
      timestamp: new Date().toISOString(),
      user: 'student',
      message: JSON.parse(message).message,
    });

    // Broadcast message to all clients
    server.clients.forEach((client) => {
      if (client !== socket && client.readyState === WebSocket.OPEN) {
        client.send(broadcastMessage);
      }
    });
  });

  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running!');

