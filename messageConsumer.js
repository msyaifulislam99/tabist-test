const amqp = require('amqplib');

async function consumeMessages() {
  try {
    // Create a connection to the RabbitMQ server
    const connection = await amqp.connect('amqp://user:password@localhost/?heartbeat=60');

    // Create a channel
    const channel = await connection.createChannel();

    // Define the queue name
    const queueName = 'hello_queue';

    // Declare the queue (this will ensure the queue exists)
    await channel.assertQueue(queueName, { durable: false });

    console.log(`Waiting for messages from ${queueName}. To exit, press CTRL+C`);

    // Consume messages from the queue
    channel.consume(queueName, (msg) => {
      const message = msg.content.toString();
      console.log(`Received message: ${message}`);
    }, { noAck: true }); // Auto-acknowledgment

  } catch (error) {
    console.error('Error:', error);
  }
}

consumeMessages();
