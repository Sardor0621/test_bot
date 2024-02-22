import React from 'react'
import "./main.css"

export default function Index() {
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-md-3 offset-1">
                <h2>Расскажите о себе</h2>
            </div>
            <div className="malumotlar offset-1">

            <div className="malumot ">

                <input className='form-control my-3' type="text" placeholder='Ваше имя' />
                <input className='form-control my-3' type="number" placeholder='Мобильный телефон' />
                <input className='form-control my-3' type="text" placeholder='Электронная почта' />

            </div>
            <div className="rubl">

            </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-1">
                    <button className='btn btn-dark'>
                    Отправить заявку
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
