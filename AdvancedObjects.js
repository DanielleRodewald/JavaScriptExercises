function Video(title, uploader, seconds) {
    this.title = title; this.uploader = uploader; this.seconds = seconds
}
Video.prototype.watch = function () {
    document.write(`You watched all ${this.seconds} seconds of ${this.title}`);
};

const vid = new Video("Otters", "Cythia Holmes", 240);
vid.watch();
document.write("<br>");
const vid2 = new Video("Cats in Hats", "James Brown", 300);
vid2.watch();