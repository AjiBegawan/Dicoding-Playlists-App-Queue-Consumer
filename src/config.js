const config = {
    app: {
        host: process.env.HOST,
        port: process.env.PORT,
    },
    rabbitMq: {
        server: process.env.RABBITMQ_SERVER,
    },
    mail: {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        user: process.env.MAIL_ADDRESS,
        password: process.env.MAIL_PASSWORD,
    },
};

module.exports = config;
