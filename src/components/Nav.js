import './Nav.scss'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import Profile from './image/profile.png'

export default function Nav (props) {
    console.log("nav")
    console.log(props)
    const dispatch = useDispatch()
    const open = useSelector(state => state.dataReducer.open)
    console.log(open)
    const menu = useSelector(state => state.dataReducer.menu)
    const menuPush = (url) => {
        props.history.push(url)
        dispatch({type:"MENU", menu: false})
    }
    const nav = (state) => {
        if(state) {
            return (
                <div className="navigation">
                    <div className="menubar">
                        <div className="menuArea">
                            <div className={`menu ${menu ?  "close": ""}`} onClick={() => dispatch({type:"MENU", menu: !menu})}>
                                <div className="bar bar1"></div>
                                <div className="bar bar2"></div>
                                <div className="bar bar3"></div>
                            </div>
                        </div>
                        <div className="profileArea">
                            <div className="profile" onClick={() => menuPush("/profile")}>
                                <img src={Profile} alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className={`navibar`}>
                        <ul>
                            <li style={{"--i": 1}} onClick={() => menuPush("/til")}><Link to="/til" >T I L</Link></li>
                            <li style={{"--i": 2}} onClick={() => menuPush("/memoirs")}><Link to="/memoirs" >회 고</Link></li>
                        </ul>
                    </div>
                </div>
            )
        }else {
            return (
                <div className="intro">
                    <h1>W e l c o m e ~ !</h1>
                    <h1>M - NOTE</h1>
                    <div className="click" onClick={() => dispatch({type:"OPEN"})}>Click Here</div>
                </div>
            )
        }
    }
    return (
        <div className={`nav ${open? "opened" : ""} ${menu? "navi": ""}`}>
            {nav(open)}
        </div>
    )
}