export const initThemer = ()=>{
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")
    if(darkThemeMq)
        localStorage.setItem("theme","dark")
    else
        $("main, header").toggleClass('light-mode')

    $("#change-theme").click(()=>{
        $("main, header").toggleClass('light-mode')
        localStorage.setItem("theme",localStorage.getItem("theme")==='dark' ? "ligth":"dark")
    })
}