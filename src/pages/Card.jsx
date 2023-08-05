import '../css/Card.css'
import {useState} from 'react'

function Card() {
    const [index, setIndex] = useState(0)
    const [name, setName] = useState(0)
    const [color, setColor] = useState(0)
    const indexText = [
        '1. Что разум человека может постигнуть и во что он может поверить, того он способен достичь',
        '2. Стремитесь не к успеху, а к ценностям, которые он дает',
        '3. Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.'
    ]
    const indexName = [
        'Наполеон Хилл',
        'Альберт Эйнштейн',
        'Флоренс Найтингейл'
    ]
    const indexColor = [
        'pink',
        'aqua',
        '#ff0'
    ]

    function nextBtn() {
        setIndex((item) => (item + 1) % indexText.length)
        setName((item) => (item + 1) % indexName.length)
        setColor((item) => (item + 1) % indexColor.length)
    }

    return (

        <div style={{ background: indexColor[color] }} className='card'>
            <div className='card-block'>
                <h2>
                    {indexText[index]}
                </h2>
                <p>{indexName[name]}</p>
                <button style={{background:indexColor[color]}} onClick={nextBtn} className='card-button'>Next</button>
            </div>
        </div>

    );
}

export default Card;