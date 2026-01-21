import React from 'react'
import { useState } from 'react'
import "./Question.css"

export default function Question(){

    const [ques1 , setQues1] = useState("hide")

    function HandleClick()
    {
        if(ques1=="hide")
        {
            setQues1("show")
        }
        else
        {
            setQues1("hide")
        }
    }
    

    const [ques2 , setQues2] = useState("hide")

    function HandleClick2()
    {
        if(ques2 == "hide")
        {
            setQues2("show")
        }
        else
        {
            setQues2("hide")
        }
    }

    const [ques3 , setQues3] = useState("hide")

    function HandleClick3()
    {
        if(ques3 == "hide")
        {
            setQues3("show")
        }
        else
        {
            setQues3("hide")
        }
    }

    const [ques4 , setQues4] = useState("hide")

    function HandleClick4()
    {
        if(ques4 == "hide")
        {
            setQues4("show")
        }
        else
        {
            setQues4("hide")
        }
    }

  return (
    <div className='questions'>

        <div className='question1'>
            <p>What is frontend mentor, and how will it help me?</p>
            <img src={ques1=="hide"?"/icon-plus.svg" : "/icon-minus.svg"} onClick={HandleClick}></img>
        </div>

        <div className="answer1">
        <p className= {ques1}>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.</p>
        </div>

        <div className='question2'>
            <p>Is Frontend Mentor free?</p>
            <img src={ques2=="hide"?"/icon-plus.svg" : "/icon-minus.svg"} onClick={HandleClick2}></img>
        </div>

        <div className="answer2">
        <p className= {ques2}>Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.</p>
        </div>

        <div className='question3'>
            <p>Can I use Frontend Mentor projects in my portfolio?</p>
            <img src={ques3=="hide"?"/icon-plus.svg" : "/icon-minus.svg"} onClick={HandleClick3}></img>
        </div>

        <div className="answer3">
        <p className= {ques3}>Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!</p>
        </div>

        <div className='question4'>
            <p>How can I get help if I'm stuck on a Frontend Mentor challenge?</p>
            <img src={ques4=="hide"?"/icon-plus.svg" : "/icon-minus.svg"} onClick={HandleClick4}></img>
        </div>

        <div className="answer4">
        <p className= {ques4}>The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.</p>
        </div>
    </div>

  )
}
