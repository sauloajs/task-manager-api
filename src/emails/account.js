const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'silvasaulo471@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'silvasaulo471@gmail.com',
        subject: 'Account deleted',
        text: `Hello ${name}. I hope to see you back soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}