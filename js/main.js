(function () {
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0 && element.classList.contains('hidden')) {
                element.classList.add('fade-in-element');
                element.classList.remove('hidden');
            }

            if (positionFromTop - windowHeight >= 0 && element.classList.contains('fade-in-element')) {
                element.classList.remove('fade-in-element');
                element.classList.add('hidden');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();