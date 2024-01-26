import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


export function BgPageTitle(props) {

    const location = useLocation();
    const [fontSize, setFontSize] = useState(16); // 16px = 1rem
    const [isFontSizeCalculated, setIsFontSizeCalculated] = useState(false);

    useEffect(() => {

        const title:string = (props.title);
        const titleCharLength:number = title.length;

        let availableHeight:number = document.querySelector('section.page').offsetHeight;
        let newFontSize:number = Math.ceil(availableHeight / titleCharLength) / 16;

        setFontSize(newFontSize * scaleFactor());
        setIsFontSizeCalculated(true);

    }, [location]);

    return (
        <>
            { isFontSizeCalculated && <h1 className="title" style={{ fontSize: fontSize + 'rem' }}>{props.title}</h1> }
        </>
    )
}


/* Problema: La dimensione del font-family influisce sulla dimensione a 16px (1rem) del carattere font-size, c'è un modo per compensare questa cosa?
** Copilot Chat
"Sì, la dimensione del font-family può influenzare la dimensione effettiva del carattere font-size. Questo perché diverse famiglie di font hanno diverse
metriche e possono apparire più grandi o più piccole a parità di dimensione font-size. Un modo per compensare questo effetto è calcolare un fattore di
scala basato su un carattere di riferimento. Ad esempio, potresti creare un elemento invisibile con il font che intendi utilizzare e un altro elemento con
un font di riferimento. Entrambi gli elementi avrebbero lo stesso testo e la stessa dimensione del font. Potresti quindi confrontare le loro dimensioni
effettive e calcolare un fattore di scala."
*/

function scaleFactor() {

    // Crea un elemento invisibile con il font di riferimento
    const referenceElement = document.createElement('span');
    referenceElement.style.fontFamily = 'Arial'; // Font di riferimento
    referenceElement.style.fontSize = '16px';
    referenceElement.style.position = 'absolute';
    referenceElement.style.visibility = 'hidden';
    referenceElement.textContent = 'M'; // Carattere di riferimento
    document.body.appendChild(referenceElement);

    // Crea un elemento invisibile con il font che intendi utilizzare
    const testElement = document.createElement('span');
    testElement.style.fontFamily = 'Raleway'; // Il tuo font
    testElement.style.fontSize = '16px';
    testElement.style.position = 'absolute';
    testElement.style.visibility = 'hidden';
    testElement.textContent = 'M'; // Carattere di riferimento
    document.body.appendChild(testElement);

    // Calcola il fattore di scala
    const scaleFactor = testElement.offsetWidth / referenceElement.offsetWidth;

    // Rimuovi gli elementi
    document.body.removeChild(referenceElement);
    document.body.removeChild(testElement);

    return scaleFactor;

}