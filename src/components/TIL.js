import './TIL.scss'
import { useSelector } from 'react-redux'

export default function TIL() {
    const open = useSelector(state => state.dataReducer.open)
    return (
        <div className={`til ${open? "opened" : ""}`}>
            
        </div>
    )
}