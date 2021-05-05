import React, {useState, useEffect} from 'react';
import Name from "../../components/Name";
import Forms from "../../components/Forms";


function Home(props){
    console.log('home',props)
    const[count, setCount] = useState(0);
    const[email, setEmail] = useState("")

    useEffect(()=>{
        let mounted = false;
        if(!mounted) {
            setCount(8);
        }
        return () => {mounted = true}
    },[])

    const handleChangeEmail =(event) => {
        setEmail(event.target.value)
    }
    const handleSave = (event) => {
        alert("Email " + email)
        event.preventDefault();
    }

    return(
        <div>
            Hello Home functional {props.name ? props.name : ''}
            <Name count={count}/>
            Email: {email}

            <Forms handleSave={handleSave} text={email} handleChangeText={handleChangeEmail}/>

            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )

}
export default Home;