import React from 'react';
import { NavLink } from 'react-router-dom';


const About = () => {
    return (
        <div className="text-center">
            <div className="p-4">
                <div>
                    <h4 className='text-warning'>PROGRAM</h4>
                    <h2>Some Of Our Activities</h2>
                </div>
                <div className='d-flex p-5'>
                    <div className='w-50 me-2'>
                        <img width="550px" src="https://bloximages.chicago2.vip.townnews.com/qctimes.com/content/tncms/assets/v3/editorial/b/9e/b9ef4fca-d27f-5ce7-a4e8-c1a7a784035e/5e29fa8f40a8d.image.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsoZifXk46U8KDjb8O91lfP4j7H3kc7QM5Q&usqp=CAU" alt="" />
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7JpO0yJv02kDGocUok2S2Be1aHgkTHXtYA&usqp=CAU" alt="" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGbTcgqYa270VSfUcIkcUF1WJ3mtTiUoKaw&usqp=CAU" alt="" />
                        </div>
                    </div>
                </div>

            </div>

            <div style={{
                backgroundImage: 'url(https://d22g5lrmqfbqur.cloudfront.net/assets/studios/register_background.png)',
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '85px 12px'
            }} className="text-light">
                <h1 className=" fw-bold">Affordable for Everyone</h1>
                <div className=' d-flex justify-content-between align-items-center'>
                    <div className="ms-5">
                        <h2>Monthly Plan</h2>
                        <h6>With A 14-Day Free Trial</h6>
                        <h1><small>$</small> 100 <small>/month</small></h1>
                        <NavLink to="/home" className="bg-info px-4 py-2 text-decoration-none fs-5 text-light rounded">Start Free Trial</NavLink>
                    </div>
                    <div className="me-5">
                        <h2>Anual Plan</h2>
                        <h6>With A 14-Day Free Trial</h6>
                        <h1><small>$</small> 67 <small>/month</small></h1>
                        <NavLink to="/home" className="bg-info px-4 py-2 text-decoration-none fs-5 text-light rounded ">Start Free Trial</NavLink>
                    </div>
                </div>
            </div>
            <div>
                <h3>Contact Us</h3>
                <p>Email: <a href="#">color.steps4545@gmail.com</a> </p>
            </div>
        </div>
    );
};

export default About;