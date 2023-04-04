import './index.css'
import React from "react"
import { createRoot } from 'react-dom/client'
import App from './App'
import { useParams } from 'react-router'


createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    );

//}

//export default BlogParams;