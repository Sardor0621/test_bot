
// function sendTelegram(){
//     event.preventDefault()
//     let telegram_bot_id = "7193683707:AAHeKD46z5AtOEvzOa0tohCaRjbbJX5BqyI";
//     let chat_id = 6696487571;
//     let message = 'ok'
//     let settings = {
//         "async" : true,
//         "crossDomain" : true,
//         "url" : "https://api.telegram.org/bot" + telegram_bot_id +  "/sendMessage",
//         "method" : "POST",
//         "headers" : {
//             "Content-Type" : "application/json",
//             "cache-control" : "no-cache"
//         },
//         "data" : JSON.stringify({
//             "chat_id" : chat_id,
//             "text" : message
//         })

//     };
//     $.ajax(settings).done(function(response){
//         console.log(response);
//     });
//     return false;

// }