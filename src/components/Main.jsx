import Button from './Buttons'
import Languages from '../data/Languages'

export default function Main() {

    return (
        <>
            {Languages.map((element) => (
                <Button >{element}</Button>
            ))}
        </>
    )
}