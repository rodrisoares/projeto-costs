import styles from './Contact.module.css'
import { FaRegEnvelope } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import { FaPeriscope } from "react-icons/fa"

function Contact() {
    return (

    <div className={styles.contact_container}>
        <h1>Contato</h1>
        <div>
             <h2> <FaPeriscope /> Endereço: Av. Paulista, 7668 -
            Jardins, São Paulo -  
            CEP: 01311-200</h2>
            <h2> <FaPhoneAlt /> Telefone: (11) 99999 - 9999</h2>
            <h2> <FaRegEnvelope /> E-mail: admin.tec@costs.com</h2>
        </div>
    </div>
    )
}

export default Contact