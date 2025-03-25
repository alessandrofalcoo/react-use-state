import Button from './Buttons'
import Languages from '../data/Languages'

export default function Main() {

    return (
        <div className='buttons'>
            {Languages.map((element) => (
                <Button id={element.id} title={element.title} >{element}</Button>
            ))}
        </div>
    )
}