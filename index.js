//Random Song Recommendation Button
const buttonSong = document.getElementById("randomSongButton");
const buttonArtist = document.getElementById("randomArtistButton");
//list of artists:
const artists = [
    {
        homepage: "Drake/drakeHomePage.html",
        songs: [
            "Drake/NOKIA.html",
            "Drake/clubParadise.html",
            "Drake/parisMortonMusic.html"
        ]
    },
    {
        homepage: "Kendrick/kendrickHomePage.html",
        songs: [
            "Kendrick/adhd.html",
            "Kendrick/love.html",
            "Kendrick/dieHard.html"
        ]
    },
    {
        homepage: "Joji/jojiHomePage.html",
        songs: [
            "Joji/dissolve.html",
            "Joji/pastWontLeaveMyBed.html",
            "Joji/sanctuary.html"
        ]
    },
    {
        homepage: "theKidLaroi/theKidLaroiHomePage.html",
        songs: [
            "theKidLaroi/aColdPlay.html",
            "theKidLaroi/stickWithMe.html",
            "theKidLaroi/tooMuch.html"
        ]
    },
    {
        homepage: "theNeighbourhood/theNeighbourhoodHomePage.html",
        songs: [
            "theNeighbourhood/holyGhost.html",
            "theNeighbourhood/loveBomb.html",
            "theNeighbourhood/softcore.html"
        ]
    },
    {
        homepage: "danielCaesar/danielCaesarHomePage.html",
        songs: [
            "danielCaesar/violet.html",
            "danielCaesar/toronto.html",
            "danielCaesar/whoKnows.html"
        ]
    },
    {
        homepage: "toryLanez/toryLanezHomePage.html",
        songs: [
            "toryLanez/wishINeverMetYou.html",
            "toryLanez/hurtsMe.html",
            "toryLanez/hennesseyMemories.html"
        ]
    },
    {
        homepage: "frankOcean/frankOceanHomePage.html",
        songs: [
            "frankOcean/nights.html",
            "frankOcean/dearApril.html",
            "frankOcean/whiteFerrari.html"
        ]
    }
]

//Functionality for Song Rec Button
buttonSong.addEventListener("click", ()=> {
    const randomArtistIndex = Math.floor(Math.random() * artists.length);
    const randomArtist = artists[randomArtistIndex];
    const randomSongIndex = Math.floor(Math.random() * randomArtist.songs.length);
    window.location.href = randomArtist.songs[randomSongIndex];
})

buttonArtist.addEventListener("click", ()=> {
    const randomArtistIndex = Math.floor(Math.random() * artists.length);
    window.location.href = artists[randomArtistIndex].homepage;
})


