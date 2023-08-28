const amqp = require('amqplib');

async function sendMessage() {
  try {
    // Create a connection to the RabbitMQ server
    const connection = await amqp.connect('amqp://user:password@localhost/?heartbeat=60');

    // Create a channel
    const channel = await connection.createChannel();

    // Define the queue name
    const queueName = 'hello_queue';

    // Declare a queue
    await channel.assertQueue(queueName, { durable: false });

    // Message content
    const message = 'Hello, World!';

    // Send the message to the queue
    channel.sendToQueue(queueName, Buffer.from(message));

    console.log(`Message sent: ${message}`);

    // Close the channel and connection
    setTimeout(() => {
      channel.close();
      connection.close();
    }, 500);
  } catch (error) {
    console.error('Error:', error);
  }
}

sendMessage();
