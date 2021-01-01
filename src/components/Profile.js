import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import './Profile.scss'

export default function Profile() {
    console.log("profile")
    const open = useSelector(state => state.dataReducer.open)
    const menu = useSelector(state => state.dataReducer.menu)
    const user = useSelector(state => state.dataReducer.user)
    console.log(user)
    const [type, setType] = useState("read")
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
    const [start, setStart] = useState(moment())
    const [end, setEnd] = useState(moment())
    const [isDatepick, setisDatepick] = useState(0)
    const [year, setYear] = useState(start.clone().year())
    const changeYear = (num, date) => {
        setisDatepick(num)
        setYear(date.year())
    }
    const [tag, setTag] = useState([])
    const [project, setProject] = useState([
        {
            projectName : "test",
            projectIntro : "test",
            start : "2020-12",
            end : "2020-12",
            tag : ["tag"],
            projectDesc: "test",
            projectGit: "test"
        }
    ])
    const tagArea = () => {
        const tagClose = (key) => {
            setTag(tag.filter((item, idx) => idx !== key))
        }
        const keyPress = (e) => {
            if (e.key === "Enter") {
                if (e.target.value.trim() !== "" && !tag.includes(e.target.value.trim())) setTag(tag.concat(e.target.value.trim()))
                e.target.value = ""
              }
        }
        return (
            <ul className="tagArea">
                <li><input type="text" onKeyPress={keyPress}/></li>
                {tag.map((item, idx) => <li className="tag" key={idx}>{item}<span className="close" onClick={() => tagClose(idx)}></span></li>)}
            </ul>
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        console.log(e.target.form.projectGit)
        const addData = {
            projectName : e.target.form.projectName.value,
            projectIntro : e.target.form.projectIntro.value,
            start : start.year()+"-"+(start.month()+1),
            end : end.year()+"-"+(end.month()+1),
            tag : tag,
            projectDesc: e.target.form.projectDesc.value,
            projectGit: e.target.form.projectGit.value
        }
        console.log(addData)
    }
    const projectTimeline = () => {
        return (
            <div className="profile-timeline-container">
                {project.map((item, idx) => {
                    return (
                        <div key={idx} className="profile-timeline-content">
                            <div className="profile-timeline-project">
                                

                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
    const typePage = () => {
        if(type === "read") {
            return (
                <div className="profile-container">
                    <div className="typeButton"><button type="button" onClick={() => setType("update")}>수정</button></div>
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
                </div>
            )
        }else if (type === "update") {
            return (
                <div className="profile-container">
                    <div className="typeButton"><button type="button" onClick={() => setType("read")}>저장</button></div>
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
                            <div className="buttonArea"><button type="button" onClick = {(e) => handleSubmit(e)}>추가</button></div>
                            <div className="timeline-form">
                                <label>
                                    프로젝트 이름<br/>
                                    <input type="text" name="projectName"></input>
                                </label>
                            </div>
                            <div className="timeline-form">
                                <label>
                                    특징<br/>
                                    <input type="text" name="projectIntro"></input>
                                </label>
                            </div>
                            <div className="timeline-form">
                                <label>
                                    제작기간<br/>
                                    <div className={`start ${isDatepick === 1? 'selected':''}`}>
                                        <div className="dateText" onClick={() => isDatepick === 1 ? setisDatepick(0) : changeYear(1, start)}>{start.year()} - {start.month()+1}</div>
                                        <div className="picker">
                                            <div className="year">
                                                <div className="arrow"><i className="fa fa-angle-left" onClick={() => setYear(year-1)} ></i></div>
                                                <div>{year}</div>
                                                <div className="arrow"><i className="fa fa-angle-right" onClick={() => setYear(year+1)}></i></div>
                                            </div>
                                            <div className="months">
                                                {Array(12).fill(1).map((n, idx) => <div key={idx} className={n+idx === start.clone().month()+1? 'selected' : ''} onClick={() => {
                                                    setStart(start.clone().year(year).month(n+idx-1))
                                                    setisDatepick(0)
                                                    }}>{n+idx}</div>)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`end ${isDatepick === 2? 'selected':''}`}>
                                        <div className="dateText" onClick={() => isDatepick === 2 ? setisDatepick(0) : changeYear(2, end)}>{end.year()} - {end.month()+1}</div>
                                        <div className="picker">
                                            <div className="year">
                                                <div className="arrow"><i className="fa fa-angle-left" onClick={() => setYear(year-1)} ></i></div>
                                                <div>{year}</div>
                                                <div className="arrow"><i className="fa fa-angle-right" onClick={() => setYear(year+1)}></i></div>
                                            </div>
                                            <div className="months">
                                                {Array(12).fill(1).map((n, idx) => <div key={idx} className={n+idx === end.clone().month()+1? 'selected' : ''} onClick={() => {
                                                    setEnd(end.clone().year(year).month(n+idx-1))
                                                    setisDatepick(0)
                                                    }}>{n+idx}</div>)}
                                            </div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className="timeline-form">
                                <label>
                                    기술 스택<br/>
                                    {tagArea()}
                                </label>
                            </div>
                            <div className="timeline-form">
                                <label>
                                    주요 업무<br/>
                                    <textarea name="projectDesc"></textarea>
                                </label>
                            </div>
                            <div className="timeline-form">
                                <label>
                                    GIT<br/>
                                    <input type="text" name="projectGit"></input>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="profile-timeline">
                        {projectTimeline()}
                    </div>
                </div>
            </div>
            )
        }
    }
    return (
        <div className={`profilePage ${open? "opened" : ""} ${menu? "navi": ""}`}>
            {typePage()}
        </div>
    )
}