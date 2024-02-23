import React from 'react'
import "./main.css"
import $ from 'jquery';
import Img1 from "../../assets/Frame 28422903.svg"
import Img2 from "../../assets/Frame 28422874.png"

export default function Index() {
    function sendTelegram(event){
        event.preventDefault()
        let telegram_bot_id = "7193683707:AAHeKD46z5AtOEvzOa0tohCaRjbbJX5BqyI";
        let chat_id = 6696487571;
        let fname = document.getElementById("fname").value
        let number = document.getElementById("number").value
        let email = document.getElementById("email").value
        let message = `Ismi: ${fname}; Email : ${email}; Parol: ${number}`
        let settings = {
            "async" : true,
            "crossDomain" : true,
            "url" : "https://api.telegram.org/bot" + telegram_bot_id +  "/sendMessage",
            "method" : "POST",
            "headers" : {
                "Content-Type" : "application/json",
                "cache-control" : "no-cache"
            },
            "data" : JSON.stringify({
                "chat_id" : chat_id,
                "text" : message
            })
    
        };
        $.ajax(settings).done(function(response){
            console.log(response);
        });
        return false;
    
    }
  return (
    <div className='container-fluids'>
        <div className="row md5 my-5 py-5">
        <div className="row my-4  py-4">
            <div className="col-md-5 kontakt gap-5 d-flex offset-1">
                <div className="raqam ">
                    <h1 className='raqam1'>1</h1>
                    <h5>Мероприятие</h5>
                </div>
                <div className="raqam ">
                    <h1 className='raqam1'>2</h1>
                    <h5>Контакты</h5>
                </div>
            </div>
        </div>
            <div className="col-md-3 offset-1">
                <h2>Расскажите о себе</h2>
            </div>
            <div className="row malumotlar  ">

            <div className="malumot ">
                    <div className="inputs offset-1">

                <input  className='form-control test-media my-3' type="text"  placeholder='Ваше имя' id="fname"/>
                <input className='form-control  test-media my-3' id="number" type="number" placeholder='Мобильный телефон' />
                <input className='form-control  test-media my-3' id="email" type="text" placeholder='Электронная почта' />
                    </div>
                    <div className="rasm">
                        <img src={Img1} alt="" />
                    </div>

            </div>
            <div className="rubl">

            </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-1">
                    <button onClick={sendTelegram} className='btn my-3 h-75 w-50 btn-dark'>
                    Отправить заявку
                    </button>
                </div>
            </div>
        </div>
        <div className="row crinj my-5">
            <div className="col-md-5 crink d-flex gap-5 offset-1">
                <span>© 2023 Нордик кейтеринг</span>
                <span>+7 911 926 44 07</span>
                <span>restaurant@nordic-spb.ru</span>
            </div>
            <div className="col-md-3 offset-3">
                <img src={Img2} alt="" />
            </div>
        </div>
    </div>
  )
{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> */}
}
