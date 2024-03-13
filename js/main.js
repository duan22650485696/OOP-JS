import Album from './album.js';

// Sample data for albums

const albumsData = [
    {
        name: 'The Weeknd - Dawn FM',
        cover: './images/dfm-cover.jpg',
        description: 'Dawn FM is the fifth studio album by Canadian singer the Weeknd. It was released on January 7, 2022, through XO and Republic Records. The album features narration by Jim Carrey, guest vocals from Tyler, the Creator and Lil Wayne, and spoken word appearances from Quincy Jones and Josh Safdie. '
    },

    {
        name: 'The Beatles - Abbey Road',
        cover: './images/Abbey Road.jpg',
        description: 'Abbey Road is the eleventh studio album by the English rock band the Beatles, released on 26 September 1969. It is the last album the group recorded, although Let It Be was the last album completed before the band s break-up in April 1970.'
    },
    {
        name: 'Creedence Clearwater Revival - Willy & Poor Boys ',
        cover: './images/CCR- Green River.jpg',
        description: 'The Band that Fogerty Built was truly an American phenomenon during their relatively short recording career. Each of their albums, beginning with 1969s Bayou Country, was a Top 40 hit-making machine.'
    },
    {
        name: 'Nirvana - Nevermind',
        cover: './images/Nirvana - Nevermind.jpg',
        description: 'Nevermind is the second studio album by the American rock band Nirvana, released on September 24, 1991, by DGC Records. It was Nirvana first release on a major label and the first to feature drummer Dave Grohl.'
    },
    {
        name: 'R.E.M - Out of Time',
        cover: './images/Out of Time.jpg',
        description: 'Fine Line is the second studio album by English singer and songwriter Harry Styles, released on 13 December 2019 by Columbia Records and Erskine. This album themes revolve around breakups, happiness, sex and sadness.'
    },
    {
        name: 'Harry Style - Fine Line',
        cover: './images/Fine Line.jpg',
        description: 'Fine Line is the second studio album by English singer and songwriter Harry Styles, released on 13 December 2019 by Columbia Records and Erskine. This album themes revolve around breakups, happiness, sex and sadness.'
    },
    {
        name: 'Taylor Swift - 1989 (Taylor Version)',
        cover: './images/1989 (Taylor Version).png',
        description: 'Fine Line is the second studio album by English singer and songwriter Harry Styles, released on 13 December 2019 by Columbia Records and Erskine. This album themes revolve around breakups, happiness, sex and sadness.'
    },
    
];

// Display albums on the page
const albumsContainer = 'albums'; // ID of the container element where albums will be displayed

albumsData.forEach(albumData => {
    const album = new Album(albumData.name, albumData.cover, albumData.description);
    album.display(albumsContainer);
});
