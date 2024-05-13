import './contact.css'

const Contact = () => {
    return (
        <div className='contactContainer'>
            <div className='contactText'>
                <h1 className='contactTitle'>Contactate <br/>Conmigo</h1>
                <p>
                    Si tienes alguna oportunidad de trabajo o quieres conectar conmigo,
                    no dudes en enviarme un mensaje.
                </p>
            </div>
            <form className='contactForm'>
                <div className='inputGroup'>
                    <label>Nombre</label>
                    <input type="text" placeholder="..." className='contactInput'/>
                </div>
                <div className='inputGroup'>
                    <label>Email</label>
                    <input type="email" placeholder="..." className='contactInput'/>
                </div>
                <div className='inputGroup'>
                    <label>Compañia</label>
                    <input type="text" placeholder="..." className='contactInput'/>
                </div>
                <div className='inputGroup'>
                    <label>Asunto</label>
                    <input type="text" placeholder="..." className='contactInput'/>
                </div>
                <div className='inputGroup message'>
                    <label>Mensaje</label>
                    <textarea className='contactMessage'/>
                </div>
                <button type="submit" className='contactSubmit'>Enviar</button>
            </form>
        </div>
    )
}

export default Contact

