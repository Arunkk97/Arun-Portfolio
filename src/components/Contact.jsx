import React, { useRef, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';



function Contact() {
    const [data, setData] = useState({
        name: '', email: '', message: ''
    })
    const form = useRef();
    console.log(data);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = data;

        if (name === "") {
            toast.error("You should enter Name", { position: "top-center" });
            return;
        }
        if (email === "") {
            toast.error("You should enter Email", { position: "top-center" });
            return;
        }
        if (message === "") {
            toast.error("You should enter Message", { position: "top-center" });
            return;
        }


        emailjs.sendForm(
            'service_1ket3q5',
            'template_j8t8vpn',
            form.current,
            'HiWnN0u7-HDMtxiiw'
        ).then(
            () => {
                toast.success("Email sent Successfully", { position: "top-center" });
                setData({ name: '', email: '', message: '' });
            },
            (error) => {
                toast.error("Failed to send email", { position: "top-center" });
            }
        );
    };
    return (
        <>
            <div id='contact' className='text-center mt-5 section px-3 px-lg-4 pt-5'>
                <h2 className='fw-bolder marker marker-center'>Contact Me</h2>
            </div>

            <div className='container my-5'>
                <div className='row'>
                    <div className="col-md-6">
                    <form ref={form} onSubmit={handleSubmit} name="myForm">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Name"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        name='user_name'
                                        value={data.name}
                                        onChange={e => setData({ ...data, name: e.target.value })}
                                        required
                                        type="text"
                                        placeholder="Name"
                                    />
                                </FloatingLabel>

                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        name='from_name'
                                        value={data.email}
                                        onChange={e => setData({ ...data, email: e.target.value })}
                                        required
                                        type="email"
                                        placeholder="name@example.com"
                                    />
                                </FloatingLabel>

                                <FloatingLabel
                                    controlId="floatingTextarea"
                                    label="Leave a message here"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        name='message'
                                        value={data.message}
                                        onChange={e => setData({ ...data, message: e.target.value })}
                                        required
                                        as="textarea"
                                        placeholder="Leave a message here"
                                    />
                                </FloatingLabel>

                                <button type="submit" className='btn btn-primary rounded'>Send</button>
                            </form>
                        
                    </div>
                    <div className="col-md-6">
                        <div className="mt-3 px-1">
                            <div className="h5 fw-bolder">Let’s talk how I can help you!</div>
                            <p>If you're interested in my services, please reach out to me via email or phone.</p>
                            <p>See you!</p>
                            <h6><span className='fw-bolder'>Email:</span> arunkk1997@gmail.com</h6>
                            <h6><span className='fw-bolder'>Phone:</span> +91 9539500749</h6>
                        </div>
                    </div>

                </div>
            </div>

            <ToastContainer position='top-center' theme='colored' autoClose={3000} />
        </>
    )
}

export default Contact