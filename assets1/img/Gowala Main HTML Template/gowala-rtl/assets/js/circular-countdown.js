
/**  circular countdown.
--------------------------------------------------------------------------------------------------- */
function JBCountDown(settings) {
    var glob = settings;

    function deg(deg) {
        return (Math.PI/180) * deg - (Math.PI/180) * 90;
    }

    glob.total = Math.floor((glob.endDate - glob.startDate)/86400);
    glob.days = Math.floor((glob.endDate - glob.now) / 86400);
    glob.hours = 24 - Math.floor(((glob.endDate - glob.now) % 86400) / 3600);
    glob.minutes = 60 - Math.floor((((glob.endDate - glob.now) % 86400) % 3600) / 60);
    glob.seconds = 60 - Math.floor((glob.endDate - glob.now) % 86400 % 3600 % 60);

    if (glob.now >= glob.endDate) {
        return;
    }

    var clock = {
        set: {
            days: function() {
                var cdays = jQuery(".canvas_days").get(0);
                var ctx = cdays.getContext("2d");
                ctx.clearRect(0, 0, cdays.width, cdays.height);
                ctx.beginPath();
                ctx.strokeStyle = glob.daysColor;

                ctx.shadowBlur = 10;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowColor = glob.daysGlow;

                ctx.arc(54.5, 54.5, 52.5, deg(0), deg(360 / glob.total * (glob.total - glob.days)));
                ctx.lineWidth = 14;
                ctx.stroke();
                jQuery(".clock-days .val").text(glob.days);
            },

            hours: function() {
                var cHr = jQuery(".canvas_hours").get(0);
                var ctx = cHr.getContext("2d");
                ctx.clearRect(0, 0, cHr.width, cHr.height);
                ctx.beginPath();
                ctx.strokeStyle = glob.hoursColor;

                ctx.shadowBlur = 6;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowColor = glob.hoursGlow;

                ctx.arc(54.5, 54.5, 52.5, deg(0), deg(15 * glob.hours));
                ctx.lineWidth = 6;
                ctx.stroke();
                jQuery(".clock-hours .val").text(24 - glob.hours);
            },

            minutes: function() {
                var cMin = jQuery(".canvas_minutes").get(0);
                var ctx = cMin.getContext("2d");
                ctx.clearRect(0, 0, cMin.width, cMin.height);
                ctx.beginPath();
                ctx.strokeStyle = glob.minutesColor;

                ctx.shadowBlur = 6;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowColor = glob.minutesGlow;

                ctx.arc(54.5, 54.5, 52.5, deg(0), deg(6 * glob.minutes));
                ctx.lineWidth = 6;
                ctx.stroke();
                jQuery(".clock-minutes .val").text(60 - glob.minutes);
            },
            seconds: function() {
                var cSec = jQuery(".canvas_seconds").get(0);
                var ctx = cSec.getContext("2d");
                ctx.clearRect(0, 0, cSec.width, cSec.height);
                ctx.beginPath();
                ctx.strokeStyle = glob.secondsColor;

                ctx.shadowBlur = 6;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowColor = glob.secondsGlow;

                ctx.arc(54.5, 54.5, 52.5, deg(0), deg(6 * glob.seconds));
                ctx.lineWidth = 6;
                ctx.stroke();

                jQuery(".clock-seconds .val").text(60 - glob.seconds);
            }
        },

        start: function() {
            /* Seconds */
            var cdown = setInterval(function() {
                if (glob.seconds > 59) {
                    if (60 - glob.minutes === 0 && 24 - glob.hours === 0 && glob.days === 0) {
                        clearInterval(cdown);

                        /* Countdown is complete */

                        return;
                    }
                    glob.seconds = 1;
                    if (glob.minutes > 59) {
                        glob.minutes = 1;
                        clock.set.minutes();
                        if (glob.hours > 23) {
                            glob.hours = 1;
                            if (glob.days > 0) {
                                glob.days--;
                                clock.set.days();
                            }
                        } else {
                            glob.hours++;
                        }
                        clock.set.hours();
                    } else {
                        glob.minutes++;
                    }
                    clock.set.minutes();
                } else {
                    glob.seconds++;
                }
                clock.set.seconds();
            }, 1000);
        }
    };
    clock.set.seconds();
    clock.set.minutes();
    clock.set.hours();
    clock.set.days();
    clock.start();
}







    /**  circular countdown.
    --------------------------------------------------------------------------------------------------- */
    var findClass = jQuery('.banner-right-content');

    if (findClass.length) {

        jQuery(document).ready(function() {
            "use strict";

            JBCountDown({
                secondsColor: "#0fbcf9",
                secondsGlow: "none",

                minutesColor: "#0be881",
                minutesGlow: "none",

                hoursColor: "#f53b57",
                hoursGlow: "none",

                daysColor: "#ffd32a",
                daysGlow: "none",

                // startDate   : "1443657600",
                endDate: "1445385600",
                now: "1444200921"
            });
        });
    } 

