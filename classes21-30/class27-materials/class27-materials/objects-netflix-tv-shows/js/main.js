//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeNetflixShow {
    constructor (title, genre, rating, numOfEpisodes) {
        this.title = title
        this.genre = genre
        this.rating = rating
        this.numOfEpisodes = numOfEpisodes
    }

    play() {
        console.log("playing")
    }

    pause() {
        console.log("Paused")
    }

    nextShow() {
        console.log("Playing next show")
    }
}

let bridgerton = new MakeNetflixShow('Bridgerton', 'Romantic Period Drama', '99%', 16)

