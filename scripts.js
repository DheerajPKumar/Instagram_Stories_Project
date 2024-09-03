const stories = [
    { id: 'story1', videoSrc: 'https://cdn.pixabay.com/video/2024/01/23/197898-905833761_tiny.mp4', imgSrc: 'https://images.unsplash.com/photo-1613431812949-77b3351bb23d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'story2', videoSrc: 'https://cdn.pixabay.com/video/2022/10/19/135658-764361528_tiny.mp4', imgSrc: 'https://images.unsplash.com/photo-1672424736050-5e04492ac37c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'story3', videoSrc: 'https://cdn.pixabay.com/video/2024/03/08/203449-921267347_tiny.mp4', imgSrc: 'https://plus.unsplash.com/premium_photo-1663047407253-e207593abd40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'story4', videoSrc: 'https://cdn.pixabay.com/video/2015/09/04/685-138357242_tiny.mp4', imgSrc: 'https://plus.unsplash.com/premium_photo-1661274118914-248c2e1b6d2c?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'story5', videoSrc: 'https://cdn.pixabay.com/video/2023/05/14/163058-827112818_tiny.mp4', imgSrc: 'https://images.unsplash.com/photo-1668425196248-8736f79130fc?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'story6', videoSrc: 'https://cdn.pixabay.com/video/2023/01/13/146336-789093861_tiny.mp4', imgSrc: 'https://images.unsplash.com/photo-1658310868281-b311aa001197?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'story7', videoSrc: 'https://cdn.pixabay.com/video/2024/01/23/197898-905833761_tiny.mp4', imgSrc: 'https://plus.unsplash.com/premium_photo-1674929041956-f9fbbbdcc227?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'story8', videoSrc: 'https://cdn.pixabay.com/video/2024/06/21/217668_tiny.mp4', imgSrc: 'https://images.unsplash.com/photo-1578588979923-639f39647d71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'story9', videoSrc: 'https://cdn.pixabay.com/video/2023/07/24/173031-848232067_tiny.mp4', imgSrc: 'https://images.unsplash.com/photo-1609660100545-05f3799a941b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'story10', videoSrc: 'https://cdn.pixabay.com/video/2023/12/10/192743-893446849_tiny.mp4', imgSrc: 'https://images.unsplash.com/photo-1502613374390-8da7aa532177?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

let prevStoryBtn = document.querySelector(".storyplayer__navigation-prevbtn");
let nextStoryBtn = document.querySelector(".storyplayer__navigation-nextbtn");
let storiesBorder = document.querySelectorAll('.storiescontainer__story-image');
let closeBtn = document.querySelector('.storyplayer__content-closebtn');
let storyplayer = document.querySelector(".storyplayer");
let storycontainer = document.querySelector(".storiescontainer");
let leftBtn = document.querySelector(".container__arrow-left");
let rightBtn = document.querySelector(".container__arrow-right");
let container = document.querySelector(".container");

let currentIndex = 0;

function storyPlay(storyId) {
    document.querySelector(".storiescontainer").style.display = "none";
    let story = stories.find(s => s.id === storyId);
    if (story) {
        let storyPlayer = document.querySelector('.storyplayer');
        let storyVideo = document.querySelector('.storyplayer__content-main--video');
        let storyPrev = document.querySelector('.storyplayer__content-prev');
        let storyNext = document.querySelector('.storyplayer__content-next');
        
        storyVideo.src = story.videoSrc;
        storyPlayer.style.display = 'flex';
        
        currentIndex = stories.findIndex(s => s.id === storyId);
        navigate();
        update();
        
        storyVideo.play();
        updateBorder();
    }
}


function navigate() {
    let prevBtn = document.querySelector('.storyplayer__navigation-prevbtn');
    let nextBtn = document.querySelector('.storyplayer__navigation-nextbtn');
    
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === stories.length - 1;
}

function update() {
    let storyPrev = document.querySelector('.storyplayer__content-prev');
    let storyNext = document.querySelector('.storyplayer__content-next');
    
    storyPrev.innerHTML = '';
    storyNext.innerHTML = '';
    
    if (currentIndex > 0) {
        let prevStory = stories[currentIndex - 1];
        // const prevImage = document.createElement('img');
        // prevImage.src = stories[currentIndex-1].imgSrc;
        // prevImage.onclick = () => storyPlay(prevStory.id);
        // storyPrev.appendChild(prevImage);
        const prevVideo = document.createElement('video');
        prevVideo.src = prevStory.videoSrc;
        prevVideo.classList.add('storyplayer__content-pVideo');
        prevVideo.controls = true;
        prevVideo.onclick = () => storyPlay(prevStory.id);
        storyPrev.appendChild(prevVideo);
    }

    if (currentIndex < stories.length - 1) {
        const nextStory = stories[currentIndex + 1];
        // const nextImage = document.createElement('img');
        // nextImage.src = stories[currentIndex+1].imgSrc;
        // nextImage.onclick = () => storyPlay(nextStory.id);
        // storyNext.appendChild(nextImage);
        const nextVideo = document.createElement('video');
        nextVideo.src = nextStory.videoSrc;
        nextVideo.classList.add('storyplayer__content-nVideo');
        nextVideo.controls = true;
        nextVideo.onclick = () => storyPlay(nextStory.id);
        storyNext.appendChild(nextVideo);
    }
}

document.querySelectorAll('.storiescontainer__story').forEach(storyElement => {
    storyElement.addEventListener('click', () => {
        storyPlay(storyElement.id);
    });
});

prevStoryBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        storyPlay(stories[currentIndex].id);
    }
});

nextStoryBtn.addEventListener('click', () => {
    if (currentIndex < stories.length - 1) {
        currentIndex++;
        storyPlay(stories[currentIndex].id);
    }
});

closeBtn.addEventListener('click', () => {
    storyplayer.style.display = "none";
    storycontainer.style.display = "block";
    leftBtn.style.display = 'block';
    rightBtn.style.display = 'block';
    let storyVideo = document.querySelector('.storyplayer__content-main--video');
    storyVideo.pause();
});

storiesBorder.forEach(story => {
    story.addEventListener('click', () => {
        story.classList.add('storiescontainer__story-grayborder');
        leftBtn.style.display = 'none';
        rightBtn.style.display = 'none';
    });
});

leftBtn.addEventListener('click', () => {
    storycontainer.scrollBy({
        left: -100,
        behavior: 'smooth'
    });
});

rightBtn.addEventListener('click', () => {
    storycontainer.scrollBy({
        left: 100,
        behavior: 'smooth'
    });
});




