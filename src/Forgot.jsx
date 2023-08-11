import React from 'react';

const Forgot = () => {
  return (
   <section className="forgot">
    <h2 className='greeting'>RESET YOUR PASSWORD</h2>
    <form action="#" className="forgot-form">
        <input type="text" name='username' placeholder='User Name' required/>
        <input type="email" placeholder='email' required />
        <button className='forgot-btn'>CONTINUE</button>
    </form>
   </section>
  );
}

export default Forgot;
