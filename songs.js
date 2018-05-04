$(document).ready(function() {

    // Use jQuery to get a reference to `load-songs`
    const btn = $("#load-songs")

    // Use jQuery to get a reference to `song-list`
    const output = $("#song-list")


    /*
        Attach a click handler to the button with jQuery. When
        the button is clicked, use $.ajax() to load `songs.json`
        from the file system
    */
    btn.on("click", () => {
        const fragment = document.createDocumentFragment()
        $.ajax("http://127.0.0.1:8080/songs.json")
            .then(response => {
                response.songs.forEach(song => {
                    const songSection = document.createElement("section")
                    songSection.classList = "song"

                    const songTitle = document.createElement("h1")
                    songTitle.classList = "song__title"
                    songTitle.textContent = song.title
                    songSection.append(songTitle)

                    const songDescription = document.createElement("section")
                    songDescription.classList = "song__description"
                    songDescription.textContent = `Performed by ${song.artist} on the album ${song.album}`
                    songSection.append(songDescription)
                    fragment.append(songSection)
                })
                output.append(fragment)
            })       
    })


    /*
        Chain a `.then()` method to the ajax call, and when
        it is complete build a DOM component for each song with
        the following structure. Use the jQuery append() method
        to put an HTML representation of each song the DOM as a
        child component of the .

            <section class="song">
                <h1 class="song__title">{Title of song}</h1>
                <section class="song__description">
                    Performed by {artist} on the album {album}
                </section>
            </section>
    */
})