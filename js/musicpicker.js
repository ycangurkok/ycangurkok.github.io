let musiclist = ["https://www.youtube.com/watch?v=1qCc7Hh0A5A",
"https://www.youtube.com/watch?v=-9EhHqqzJFQ",
"https://www.youtube.com/watch?v=NtBlW-soukA",
"https://www.youtube.com/watch?v=VzdHWUlb-6o",
"https://www.youtube.com/watch?v=S4_pnV8j_bM",
"https://www.youtube.com/watch?v=0alDMvVk4jY",
"https://www.youtube.com/watch?v=DVdHw4fskj4",
"https://www.youtube.com/watch?v=LITp8cIL904",
"https://www.youtube.com/watch?v=0fre6EGqBXg",
"https://www.youtube.com/watch?v=2Bc0O72UN3k",
"https://www.youtube.com/watch?v=l9q_KrrdEB8",
"https://www.youtube.com/watch?v=TMETa77dUrg",
"https://www.youtube.com/watch?v=FAPKM0RZ4as",
"https://www.youtube.com/watch?v=qv96yJYhk3M",
"https://www.youtube.com/watch?v=Tn7wvu8R4Wk"]


function getSong(){
    var song = musiclist[Math.floor(Math.random()*musiclist.length)]
    window.open(song)
    changeListening()
}

function changeListening(){
    document.getElementById("listening").innerHTML = '<img src="./images/music.svg" alt="Music" width="20" /> Another one?'
}