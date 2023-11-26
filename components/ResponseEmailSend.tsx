import React from 'react'

interface Props {
    subject: string
    message: string
}

const ResponseEmailSend = ({subject, message}: Props) => {
    return (
        <div>
            <h1>{subject}</h1>
            <p>Thank you for contacting us!</p>
            <p>New message submitted:</p>
            <p>{message}</p>
        </div>
    )
}

export default ResponseEmailSend