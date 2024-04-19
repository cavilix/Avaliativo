import './Continent.css'

const CardInput = ({Titulo, subTitulo, propaganda, btnLogar, pTermos}) =>{
    return(
        <>
        <article className='Titulo'>
            <h1>{Titulo}</h1>
            <p className='p2'>{subTitulo}</p>
        </article>

        <section>

        <button className='propaganda'>{propaganda}</button>

        <div className="login">
            
            <input type="text" placeholder='Your Name'/>
            <input type="text" placeholder='Last Name'/>
            <input type="email" placeholder='Enail Address'/>
            <input type="password" placeholder='Password'/>
            <button className='logar'>{btnLogar}</button>
            <p className='p'>{pTermos}</p>
        </div>
        </section>
        </>
    )
}
export default CardInput;