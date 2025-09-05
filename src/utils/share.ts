"use client"

const ShareLink = (link:string)=> {

if (navigator.share) {

    const shareData = {
        title: 'Web Share API Demo',
        text: 'Check out this link!',
        url: link
    };


    navigator.share(shareData)
}
}

export default ShareLink