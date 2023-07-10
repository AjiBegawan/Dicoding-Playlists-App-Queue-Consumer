const nodemailer = require('nodemailer');
const config = require('./config');

class MailSender {
    constructor() {
        this._transporter = nodemailer.createTransport({
            host: config.mail.host,
            port: config.mail.port,
            auth: {
                user: config.mail.user,
                pass: config.mail.password,
            },
        });
    }

    sendEmail(targetEmail, playlistId, playlistName, content) {

        const message = {
            from: 'OpenMusic Apps',
            to: targetEmail,
            subject: `Export Playlist ${playlistName} ${playlistId}`,
            text: `Daftar Music dalam ${playlistName}`,
            attachments: [
                {
                    filename: `playlist ${playlistName}.json`,
                    content,
                },
            ],
        };

        return this._transporter.sendMail(message);
    }
}

module.exports = MailSender;