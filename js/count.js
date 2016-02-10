$(document).ready(function () {
    $(function () {
        var oTop = $('.big').offset().top - window.innerHeight;
        $(window).scroll(function () {

            var pTop = $(document).scrollTop();
            console.log(pTop + ' - ' + oTop);
            if (pTop > oTop) {
                start_count();
            }
        })
    })
});

function start_count() {
    $('.big').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({
            countNum: $this.text()
        }).animate({
                countNum: countTo
            },

            {

                duration: 3000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    //alert('finished');
                }

            });



    });
};