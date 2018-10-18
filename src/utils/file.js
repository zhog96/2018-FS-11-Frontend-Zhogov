const KB = 1024;
const MB = 1024 * KB;
const GB = 1024 * MB;
const TB = 1024 * GB;

function getReadableSize(size) {
    if(size / TB > 10) return Math.round(size / TB) + " TB";
    if(size / GB > 10) return Math.round(size / GB) + " GB";
    if(size / MB > 10) return Math.round(size / MB) + " MB";
    if(size / KB > 10) return Math.round(size / KB) + " KB";
    return Math.round(size) + " B";
}

export {KB, MB, GB, TB, getReadableSize};
