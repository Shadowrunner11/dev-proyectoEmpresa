$( document ).ready(()=>{
    console.log('load')
    $(".burger").click((e)=>{
        console.log('click')
        $("#up-burger").toggleClass('up-burger-a')
        $("#down-burger").toggleClass('down-burger-a')
        $("#middle-burger").toggleClass('middle-burger-a')
        $("#links").slideToggle()     
    })
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")
    if(darkThemeMq)
        localStorage.setItem("theme","dark")
    else
        $("main, header").toggleClass('light-mode')

    $("#change-theme").click(()=>{
        $("main, header").toggleClass('light-mode')
        localStorage.setItem("theme",localStorage.getItem("theme")==='dark' ? "ligth":"dark")
    })

    const text = `let myVar = "Hello world"`
    let cont = 1
    setInterval(()=>{
        if(cont<=text.length)
            $("#hello-world").text(text.slice(0,cont)+"|")
        else if(cont%2)
            $("#hello-world").text(text+"    ")
        else
            $("#hello-world").text(text+"|")
        cont++
        hljs.highlightAll()
        if (cont>text.length+10) cont = 1
    },300)
})