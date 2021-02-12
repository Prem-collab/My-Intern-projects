document.addEventListener("DOMContentLoade", () => {
    document.querySelector('body').addEventListener('mousemove', eyeball);

    function eyeball () {
        var eye = document.getElementsByClassName(".eye");

        let x = (eye.getBoudingClientRect().left) + (eye.clientWidth / 2);

        let y = (eye.getBoudingClientRect().top) + (eye.clientHeight / 2);

        let radian = Math.atan2(event.pageX - x, event.pageY - y);

        let rot = (radian * (180 / Math.PI) * -1) + 270;

        eye.style.transform = "rotate(" + rot + "deg)";
};
});



