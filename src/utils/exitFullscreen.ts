const exitFullscreen = () => {
    if (window.innerWidth <= 768) {
        const doc = document as Document & {
            mozCancelFullScreen?: () => Promise<void>;
            webkitExitFullscreen?: () => Promise<void>;
            msExitFullscreen?: () => Promise<void>;
        };

        if (document.fullscreenElement || (doc as any).webkitFullscreenElement || (doc as any).mozFullScreenElement || (doc as any).msFullscreenElement) {
            try {
                if (doc.exitFullscreen) {
                    doc.exitFullscreen();
                } else if (doc.mozCancelFullScreen) { // Firefox
                    doc.mozCancelFullScreen();
                } else if (doc.webkitExitFullscreen) { // Chrome, Safari, and Opera
                    doc.webkitExitFullscreen();
                } else if (doc.msExitFullscreen) { // IE/Edge
                    doc.msExitFullscreen();
                }
            } catch (error) {
            }
        }
    }
};

export default exitFullscreen;
