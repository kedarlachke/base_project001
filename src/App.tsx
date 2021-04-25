import {useEffect,useState} from 'react'
import './styles.css'
import Image from './images3.png'
import { ClickCounter } from './ClickCounter'
import FormJson from './formElement.json'
import {Typography,Container, FormControl } from '@material-ui/core'
import Element from './components/Element'

export const App = () => {
    const [element, setElement] = useState(null)
    useEffect(() => {
        setElement(FormJson[0])
    }, []);
    
    const {fields,page_label} = element??{};
    return <>
    <Container maxWidth={"lg"}>
        <Typography variant="h1" >{page_label}</Typography>

        <h1>Hello React TypeScript WebPack Starter Template - {process.env.NODE_ENV} - {process.env.name}</h1>
        {/* <img src={Image} alt="React Logo" /> */}
        {/* <p>Hi Kedar Lachke, how r u</p>
        <div>Hello Kedar</div>
<i><b>India</b><input value="123"/><input value="12345"/> <input value="7890"/></i> */}
       
        <FormControl component="fieldset">
        <ClickCounter />
        {fields && fields.map((field,i)=>{
            return <Element key={i} field={field}/>
        })}
        </FormControl>
        </Container>
    </>
}