import React from 'react'

interface Props {
    subject: string
    message: string
    email: string
}

const ResponseEmailSend = ({subject, message, email}: Props) => {
    return (
        <div>
            <p>From: {email}</p>
            <p>Message:</p>
            <p>{message}</p>
        </div>
    )
}

export default ResponseEmailSend