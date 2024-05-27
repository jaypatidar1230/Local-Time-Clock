let clock = document.querySelector('#clock')


setInterval(function(t){
    let time = new Date()
    
    clock.textContent = time.toLocaleTimeString()
}, 1000)