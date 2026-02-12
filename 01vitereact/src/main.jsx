import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1> Custom App !</h1>
    </div>
  )

}

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
        
},
        children: 'click me to visit google'

}


ReactDOM.createRoot(document.getElementById('root')).render(
  


ReactElement


)


