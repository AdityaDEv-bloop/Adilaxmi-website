import './about.css';
import { windowWidth } from '../../../const';

const About=()=>{
    if (windowWidth && windowWidth>768) {
        return(
            <div className="aboutContainer">
                <h4 className='aboutheading'>About Us</h4>
                <div className='aboutContain'>
                    <h2>An Exporter of Organic Pesticide-Free Rice with a Customer-First Approach!</h2>
                    <p>Leading basmati rice exporters in India must comprehend the needs and desires of their customers in order to provide goods of unparalleled quality and remarkable value. Harvesting the best produce from nature and packaging only the best specialized grains and consumables for families worldwide has allowed us to become one of India's top exporters of rice. From farm to fork, our fully integrated operations have access to and control over the whole supply chain. We also offer rice packaging in a variety of sizes, ranging from 1 kilogram to 50 kg, to satisfy the individual needs of the customer. These can be further tailored to the client's specifications in terms of size and packing material. Additionally, we specialize</p>
                    <h2>Reliable & Lawfully Accredited Certified Services</h2>
                    <p>
                    As a legally certified Rice Exporter in India, our services are transparent and trustworthy, and it is crucial to maintain high levels of hygiene, quality, and safety. This is why Adi Laxmi Exports adheres to stringent procedures and performs numerous quality checks to ensure that all products meet international standards for quality. This has enabled us to obtain quality and food safety certifications.
                    </p>
                    {/* <p>Being accredited to ISO 22000:2005, ISO 9001:2015, and other certifications, we make sure the entire process meets, exceeds quality and food safety standards. Be it food handling, packaging, or processing, we ensure that everything is done in accordance with strict protocols.</p> */}
                </div>
            </div>
        )
    }else{
        return(
            <div className="aboutContainer">
                <h4 className='aboutheading'>About Us</h4>
                <div className='aboutContain-small'>
                    <h2>An Exporter of Organic Pesticide-Free Rice with a Customer-First Approach!</h2>
                    <p>Leading basmati rice exporters in India must comprehend the needs and desires of their customers in order to provide goods of unparalleled quality and remarkable value. Harvesting the best produce from nature and packaging only the best specialized grains and consumables for families worldwide has allowed us to become one of India's top exporters of rice. From farm to fork, our fully integrated operations have access to and control over the whole supply chain. </p>
                    <h2>Reliable & Lawfully Accredited Certified Services</h2>
                    <p>
                    As a legally certified Rice Exporter in India, our services are transparent and trustworthy, and it is crucial to maintain high levels of hygiene, quality, and safety. This is why Adi Laxmi Exports adheres to stringent procedures and performs numerous quality checks to ensure that all products meet international standards for quality. This has enabled us to obtain quality and food safety certifications.
                    </p>
                    {/* <p>Being accredited to ISO 22000:2005, ISO 9001:2015, and other certifications, we make sure the entire process meets, exceeds quality and food safety standards. Be it food handling, packaging, or processing, we ensure that everything is done in accordance with strict protocols.</p> */}
                </div>
            </div>
        )
    }
    
}

export default About;