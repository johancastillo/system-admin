import "./ToUp.css"

import { useEffect, useState } from "react";

const ToUp = () => {
    const [scroll, setScroll] = useState(0)

    const handleClick = () => {
        window.scroll(0,0)
    }

    useEffect( () => {
        window.addEventListener('scroll', e => setScroll(window.scrollY) )
    }, [] )

    return(
        <div className="to-up" onClick={ handleClick }
        style={ scroll > 100 ? {opacity: 1} : {opacity: 0} }>
            <span className="icon-chevron-up"></span>
        </div>
    )
}

export default ToUp
