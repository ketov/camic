$(document).ready(function () {
    $(function () {
        $('.event-col').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });
        
        /*$('.fc tbody .fc-row .fc-content-skeleton table').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });
        
        $('.fc-content-skeleton').matchHeight({
            byRow: true,
            property: 'height', 
            target: null,
            remove: false
        });*/
        
        /*$('.fc td').matchHeight({
            byRow: true,
            property: 'height', 
            target: null,
            remove: false 
        });*/
        
    });

    if ($('.p-events').length > 0) {
        $('#calendar').fullCalendar({
            eventSources: [
                {
                    events: [
                        {
                            title: 'event1',
                            start: '2017-05-01',
                            className: 'event-1'
                        },
                        {
                            title: 'event2 sadf asdf asf adsf as fas f',
                            start: '2017-05-05',
                            className: 'event-2'
                        },
                        {
                            title: 'event3',
                            start: '2017-05-09',
                            className: 'event-3'
                        }
                    ],
                    color: '#000',
                    textColor: 'yellow'
                }
            ]
        });

        $('.calendarEvent').on('click', function () {
            var thisButton = $(this);
            var thisButtonEvent = thisButton.data('event');
            $('.event-active').removeClass('event-active');
            $('.' + thisButtonEvent).addClass('event-active');

            var top = $(window).scrollTop() + 40;
            $('#calendar').css({'top': top});
            $('.black-bg').fadeIn(400);
            setTimeout(function () {
                $('#calendar').fadeIn(400);
            }, 480);
        });

        $('.icon-container--calendar').on('click', function () {
            //var thisButton = $(this);
            //var thisButtonEvent = thisButton.data('event');
            $('.event-active').removeClass('event-active');
            //$('.' + thisButtonEvent).addClass('event-active');

            var top = $(window).scrollTop() + 40;
            $('#calendar').css({'top': top});
            $('.black-bg').fadeIn(400);
            setTimeout(function () {
                $('#calendar').fadeIn(400);
            }, 480);
        });

        setTimeout(function () {
            $('#calendar').hide();
        }, 1400);

        setTimeout(function () {
            $('#calendar').css({'opacity': 1, 'z-index': 3});
        }, 1800);

        $('.black-bg').click(function (event) {
            if ($(event.target).closest("#calendar").length)
                return;
            $("#calendar").fadeOut(600);
            setTimeout(function () {
                $('.black-bg').fadeOut(400);
            }, 600);
        });
    }


});