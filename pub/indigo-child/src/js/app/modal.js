import anime from 'animejs/lib/anime.es.js';

let nodeEach = function (array, callback, scope) {
    for (let i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]); // passes back stuff we need
    }
};


window.addEventListener('DOMContentLoaded', function() {

    let selector = document.querySelector('.modal-link a');
    let target = (selector && 'href' in selector && selector.href.indexOf('#') > -1) ? selector.href.split('#')[1] : false;
    if(typeof target === 'string' || target instanceof String) {
        let modalBox = document.getElementById(target);
        if(modalBox) {
            let modal = modalBox.querySelector('.modal');
            let close = modalBox.querySelector('.close-btn');

            console.log(close, modal);

            let dismissables = [modalBox, close];

            console.log(dismissables);

            let mql = window.matchMedia('(max-width: 991px)');


            if (modal) {
                function setInitialTranslate() {
                    anime({
                        targets: [modal],
                        translateY: (mql.matches) ? '-10%' : '-60%',
                    });
                }

                setInitialTranslate();

                mql.addEventListener('change', function () {
                    setInitialTranslate();
                });
            }

            let dismissModal = function (e) {

                let should_dismiss = false;
                dismissables.forEach(function (value) {
                    if(e.target === value) {
                        should_dismiss = true;
                    }
                });
                console.log(should_dismiss);
                if(!should_dismiss) return false;
                e.preventDefault();

                if('history' in window) {
                    window.history.pushState("", document.title, window.location.pathname);
                }
                modal.style.willChange = 'opacity transform';
                anime({
                    targets: [modal],
                    opacity: 0,
                    translateY: '-=10%',
                    easing: 'easeOutCirc',
                    //autoplay: false,
                    delay: anime.stagger(100),
                    duration: 200,
                    complete: function (anim) {
                        modal.style.display = "none";
                        modal.style.willChange = 'auto';
                    }
                });
                modalBox.style.willChange = 'opacity transform';
                anime({
                    targets: [modalBox],
                    opacity: 0,
                    easing: 'easeOutCirc',
                    delay: anime.stagger(100),
                    duration: 200,
                    complete: function (anim) {
                        modalBox.style.display = 'none';
                        modalBox.style.willChange = 'auto';
                    }
                });
            }

            if(window.location.hash) {
                let hashElement = document.getElementById(window.location.hash.split('#')[1]);
                if(hashElement && hashElement.className.indexOf('modal-box') > -1) {
                    hashElement.style.display = "block";
                    let modal = modalBox.querySelector('.modal');
                    modal.style.display = "block";
                    anime({
                        targets: [modal],
                        opacity: 1,
                        delay: anime.stagger(100),
                        duration: 200,
                        //autoplay: false,
                        translateY: '+=10%',
                        easing: 'easeOutCirc'
                    });
                    anime({
                        targets: [modalBox],
                        opacity: 1,
                        delay: anime.stagger(100),
                        duration: 200,
                        easing: 'easeOutCirc'
                    });
                }
            }

            if (selector) {
                selector.addEventListener('click', function(e) {
                    modalBox.style.display = "block";
                    modal.style.display = "block";
                    anime({
                        targets: [modal],
                        opacity: 1,
                        delay: anime.stagger(100),
                        duration: 200,
                        //autoplay: false,
                        translateY: '+=10%',
                        easing: 'easeOutCirc'
                    });
                    anime({
                        targets: [modalBox],
                        opacity: 1,
                        delay: anime.stagger(100),
                        duration: 200,
                        easing: 'easeOutCirc'
                    });
                });
            }

            if (close) {
                close.addEventListener('click', dismissModal);
            }

            if (modalBox) {
                modalBox.addEventListener('click', dismissModal);
            }
        }
    }
});