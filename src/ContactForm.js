import React, {useState}  from 'react';

const ContactForm = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();
    
const handleSubmit = (e) => {
    e.preventDefault(); 

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
};

    return(
        <div className="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit} className="form">  
                <input type="text" name="name" placeholder="Name" id="name" required
                value={name}
                onChange={(e) => {
                setName(e.target.value);
                }}
                />
                <input type="email" name="email" placeholder="Email" id="email" required
                value={email}
                onChange={(e) => {
                setEmail(e.target.value);
                }}
                />

                <input type="text" name="subject" placeholder="Subject" id="subject" required
                    value={subject}
                    onChange={(e) => {
                    setSubject(e.target.value);
                    }}/>

                <textarea placeholder="Message" required
                value={message}
                onChange={(e) => {
                setMessage(e.target.value);
                }}
                />
                <div>
                    <button className="button">Send</button>
                </div>
                
            </form> 
        </div>
)
}

export default ContactForm;