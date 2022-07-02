$( document ).ready(()=>{
    console.log('load')
    $(".burger").click((e)=>{
        console.log('click')
        $("#up-burger").toggleClass('up-burger-a')
        $("#down-burger").toggleClass('down-burger-a')
        $("#middle-burger").toggleClass('middle-burger-a')
    })
})