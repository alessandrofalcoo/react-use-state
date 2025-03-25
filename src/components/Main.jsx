import Button from './Buttons'
import Languages from '../data/Languages'
import { useState } from 'react'

export default function Main() {

    const [language, setLanguage] = useState(0)
    const [description, setDescription] = useState(0)

    return (
        <>
            <div className='buttons'>
                {Languages.map((element) => (
                    <Button id={element.id} title={element.title}  >{element}</Button>
                ))}
            </div>
            <div className='paragraph'>
                <h3>{language}</h3>
                <p>{description}</p>
            </div>
        </>
    )
}