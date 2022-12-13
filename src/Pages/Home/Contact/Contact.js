import React from 'react';
import bg from '../../../img/compute-ea4c57a4.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Contact = () => {
    const handleSubmit = event => {
        event.preventDefault();
        console.log('object');
    }
    return (
        <section className="p-6"
            style={{
                background: `url(${bg})`,
                backgroundSize: 'cover'
            }}
        >
            <form
                action="https://formspree.io/f/mjvzndek"
                method="POST"
            >
                <label>
                    Your email:
                    <input type="email" name="email"/>
                </label>
                <label>
                    Your message:
                    <textarea name="message"></textarea>
                </label>
                
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;