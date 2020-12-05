import './Nav.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

export default function Nav () {
    console.log("nav")
    const dispatch = useDispatch()
    const open = useSelector(state => state.dataReducer.open)
    console.log(open)
    const [menu, setMenu] = useState(false)
    const nav = (state) => {
        if(state) {
            return (
                <div className="navigation">
                    <div className="menubar">
                        <div className="menuArea">
                            <div className={`menu ${menu ?  "close": ""}`} onClick={() => setMenu(!menu)}>
                                <div className="bar bar1"></div>
                                <div className="bar bar2"></div>
                                <div className="bar bar3"></div>
                            </div>
                        </div>
                        <div className="user">

                        </div>
                    </div>
                </div>
            )
        }else {
            return (
                <div className="intro">
                    <h1>W e l c o m e ~ !</h1>
                    <h1>M - NOTE</h1>
                    <div className="click" onClick={() => dispatch({type:"OPEN", open: true})}>Click Here</div>
                </div>
            )
        }
    }
    return (
        <div className={`nav ${open? "opened" : ""}`}>
            {nav(open)}
        </div>
    )
}