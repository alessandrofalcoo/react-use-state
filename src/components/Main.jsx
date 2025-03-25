import Button from './Buttons'
import Languages from '../data/Languages'
import { useState } from 'react'

export default function Main() {

    const [language, setLanguage] = useState('')
    const [description, setDescription] = useState('')

    return (
        <>
            <div className='buttons'>
                {Languages.map((element) => (
                    <Button
                        id={element.id}
                        title={element.title}
                        onClick={() => {
                            setDescription(element.description);
                            setLanguage(element.title);
                        }}
                    >{element.title}</Button>
                ))}
            </div >
            <div className='paragraph'>
                <h2>{language}</h2>
                <p>{description}</p>
            </div>
        </>
    )
}