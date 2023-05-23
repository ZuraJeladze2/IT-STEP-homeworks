let vidArray = [
    {
        vidLink: 'https://www.youtube.com/embed/6Ku7osHfLXE',
        vidName: 'Phonk musics'
    },
    
    {
        vidLink: 'https://www.youtube.com/embed/rLSZKcKQmvc',
        vidName: '240sx Drift'
    },
    
    {
        vidLink: 'https://www.youtube.com/embed/qZTcUswMMqg',
        vidName: 'AE 86 - OPTIONS'
    },
    
    {
        vidLink: 'https://www.youtube.com/embed/8mzgDdFDnJE',
        vidName: 'Miata Drift - Happy Holidays'
    },
    {
        vidLink: 'https://www.youtube.com/embed/6Ku7osHfLXE',
        vidName: 'Phonk musics'
    },
    
    {
        vidLink: 'https://www.youtube.com/embed/rLSZKcKQmvc',
        vidName: '240sx Drift'
    },
    
    {
        vidLink: 'https://www.youtube.com/embed/qZTcUswMMqg',
        vidName: 'AE 86 - OPTIONS'
    },
    
    {
        vidLink: 'https://www.youtube.com/embed/8mzgDdFDnJE',
        vidName: 'Miata Drift - Happy Holidays'
    },
    {
        vidLink: 'https://www.youtube.com/embed/6Ku7osHfLXE',
        vidName: 'Phonk musics'
    },
    
    {
        vidLink: 'https://www.youtube.com/embed/rLSZKcKQmvc',
        vidName: '240sx Drift'
    },
    
    {
        vidLink: 'https://www.youtube.com/embed/qZTcUswMMqg',
        vidName: 'AE 86 - OPTIONS'
    },
    
    {
        vidLink: 'https://www.youtube.com/embed/8mzgDdFDnJE',
        vidName: 'Miata Drift - Happy Holidays'
    }   
];
let displayMainVid = (arr, i) => {
    let mainDiv = document.querySelector('.main-vid-wrapper');
    let iFrame = document.createElement('iframe');
    iFrame.setAttribute('src', arr[i].vidLink);
    mainDiv.appendChild(iFrame);
}

let generateListItem = (item, index) => {
     item = document.createElement('div');
    item.className = 'list-item';
    item.id = `video-${index}`;
    item.setAttribute('videoLink', vidArray[index].vidLink);
    item.innerHTML = `
        <p>${vidArray[index].vidName}</p>
    `;
    console.log(item);
    return item;
}

let displayListItems = arr => {
    let mainVid = document.querySelector('.main-vid-wrapper iframe')
    let listItems = arr.map(generateListItem);
    listItems.forEach(element => {
        element.addEventListener('click', (e) => {
            let link = e.target.getAttribute('videoLink');
            mainVid.setAttribute('src', link);
        })
    });
    let listDiv = document.querySelector('.vid-wrapper');
    listDiv.append(...listItems);
}

displayMainVid(vidArray, 0);
displayListItems(vidArray);