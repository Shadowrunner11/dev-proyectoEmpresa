export const animation = ()=>{
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
}