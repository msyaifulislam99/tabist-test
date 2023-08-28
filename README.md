# Message Producer and Consumer with RabbitMQ

This repository contains a simple example of a message producer and consumer implemented using Node.js and RabbitMQ. It also demonstrates an inheritance hierarchy example.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Docker](https://www.docker.com/) installed to set up RabbitMQ using Docker Compose.

## Setup

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/rabbitmq-message-example.git
   cd rabbitmq-message-example
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Start RabbitMQ server using Docker Compose:

   ```bash
   docker-compose up -d
   ```

## Usage
- Message Producer and Consumer
Run the message producer and consumer:

   ```bash
   node messageProducer.js
   node messageConsumer.js
   ```

    - The message producer (messageProducer.js) sends a "Hello, World!" message to a RabbitMQ queue.
    - The message consumer (messageConsumer.js) subscribes to the messages sent by the producer and prints them to the console.


- Inheritance Hierarchy Example
Run the inheritance hierarchy example:
    ```bash
    node index.js
    ```
    The example demonstrates an abstract class Shape with subclasses Circle and Rectangle.
    It calculates and displays the areas of instances of Circle and Rectangle.

## Troubleshooting
If you encounter any issues with RabbitMQ authentication, make sure to check the credentials and consult the RabbitMQ server logs for details.
Ensure that you have the required ports available and not blocked by firewalls.
If you need assistance, refer to the documentation or seek help online.