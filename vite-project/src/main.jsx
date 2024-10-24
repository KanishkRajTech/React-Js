import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1> Costum MyApp</h1>
        </div>
    )
}

// const reactElement = {
//     type: 'a',
//     props:{
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }
const anotherUser = "Kanishk raj"
const anotherElement = (
    <a href="https://google.com" target='_blank'>visit google</a>,
    anotherUser
)



const reactElement = React.createElement(
    'a',
    {herf: 'https://google.com', target:'_blank'},
    'click me to visit'
)

createRoot(document.getElementById('root')).render(

        // reactElement,
        anotherElement
        // <App/>
)
