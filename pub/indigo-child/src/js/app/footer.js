window.addEventListener('DOMContentLoaded', function() {
    let preFooter = document.querySelector('.pre-footer');
    let siteFooter = document.querySelector('.site-footer');
    if (preFooter) {
        let preFooterToggle = document.querySelector('[data-toggle="pre-footer"]');
        if (preFooterToggle) {
            preFooterToggle.addEventListener('click', function () {
                if(siteFooter.className.indexOf('pre-footer-open') > -1) {
                    siteFooter.classList.remove('pre-footer-open');
                } else {
                    window.scrollTo(0,document.body.scrollHeight);
                    siteFooter.classList.add('pre-footer-open');
                }
            });
        }
    }
});