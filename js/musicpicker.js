let musiclist = ["https://www.youtube.com/watch?v=1qCc7Hh0A5A",
"https://www.youtube.com/watch?v=-9EhHqqzJFQ",
"https://www.youtube.com/watch?v=NtBlW-soukA",
"https://www.youtube.com/watch?v=VzdHWUlb-6o",
"https://www.youtube.com/watch?v=Tn7wvu8R4Wk"]


function getSong(){
    var song = musiclist[Math.floor(Math.random()*musiclist.length)]
    window.open(song)
    changeListening()
}

function changeListening(){
    document.getElementById("listening").innerHTML = '<img src="./images/music.svg" alt="Music" width="20" /> Another one?'
}