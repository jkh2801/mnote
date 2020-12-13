import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import './Profile.scss'

export default function Profile() {
    console.log("profile")
    const open = useSelector(state => state.dataReducer.open)
    const menu = useSelector(state => state.dataReducer.menu)
    const [file, setFile] = useState({file: null, imgPreviewUrl: ""})
    const fileInput = useRef()
    const fileHandler = (e) => {
        console.log(e)
        let reader = new FileReader()
        reader.onloadend = () => {
            setFile({file: e.target.files[0], imgPreviewUrl: reader.result})
        }
        reader.readAsDataURL(e.target.files[0])
    }
    console.log(file)
    console.log(fileInput)
    return (
        <div className={`profilePage ${open? "opened" : ""} ${menu? "navi": ""}`}>
            <div className="profile-container">
                <div className="profile-intro">
                    <div className="profile-upload">
                        <div className="profile-upload-content">
                            {
                            file.imgPreviewUrl === "" ? 
                            <div className="profile-preview" onClick={() => fileInput.current.click()}></div> :
                            <div className="profile-preview" onClick={() => fileInput.current.click()}>
                                <img src={file.imgPreviewUrl} alt=""></img>
                            </div>
                            }
                            <input type="file" onChange={fileHandler} hidden ref={fileInput}></input>
                        </div>
                    </div>
                    <div className="profile-form">
                        <form>
                            <div className="profile-form-name">
                                <label>
                                    이름
                                    <input type="text"></input>
                                </label>
                            </div>
                            <div className="profile-form-phonenumber">
                                <label>
                                    전화번호
                                    <input type="text"></input>
                                </label>
                            </div>
                            <div className="profile-form-email">
                                <label>
                                    이메일
                                    <input type="text"></input>
                                </label>
                            </div>
                            <div className="profile-form-git">
                                <label>
                                    GIT
                                    <input type="text"></input>
                                </label>
                            </div>
                            <div className="profile-form-website">
                                <label>
                                    개인 웹사이트
                                    <input type="text"></input>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="profile-main">
                    <div className="profile-timeline-form">
                        <form>
                            <div className="timeline-form-git">
                                <label>
                                    GIT<br/>
                                    <input type="text"></input>
                                </label>
                            </div>
                            <div className="timeline-form-git">
                                <label>
                                    GIT<br/>
                                    <input type="text"></input>
                                </label>
                            </div>
                            <div className="timeline-form-git">
                                <label>
                                    GIT<br/>
                                    <input type="text"></input>
                                </label>
                            </div>
                            <div className="timeline-form-git">
                                <label>
                                    GIT<br/>
                                    <input type="text"></input>
                                </label>
                            </div>
                            <div className="timeline-form-git">
                                <label>
                                    GIT<br/>
                                    <input type="text"></input>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="profile-timeline">

                    </div>
                </div>
            </div>
        </div>
    )
}