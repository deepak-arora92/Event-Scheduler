/*
jQWidgets v4.5.1 (2017-April)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(a) {
    "use strict";
    a.jqx.scheduler || (a.jqx.scheduler = {}),
    a.jqx.scheduler.utilities = {
        weekDays: {
            Sunday: 0,
            Monday: 1,
            Tuesday: 2,
            Wednesday: 3,
            Thursday: 4,
            Friday: 5,
            Saturday: 6
        },
        guid: function() {
            function a() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return a() + a()
        },
        areWeekDaysIncluded: function(b, c) {
            var d = !1;
            return a.each(b, function(a, b) {
                if (b === c)
                    return d = !0,
                    !1
            }),
            d
        },
        getStartOfDay: function(b) {
            var c = new a.jqx.date(b.year(),b.month(),b.day(),0,0,0);
            return c.timeZone = b.timeZone,
            c
        },
        getEndOfDay: function(b) {
            var c = new a.jqx.date(b.year(),b.month(),b.day(),23,59,59);
            return c.timeZone = b.timeZone,
            c
        },
        getDaysCount: function(a, b) {
            for (var c = 1; a < b; )
                a.day() != b.day() && c++,
                a = a.addDays(1);
            return c
        },
        getStartOfWeek: function(a, b) {
            var c = a.dayOfWeek()
              , d = b.firstDay;
            c < d && (c += 7);
            var e = c - d
              , f = a.addDays(-e);
            return f.date()
        },
        getEndOfWeek: function(a, b, c) {
            var d = 7
              , e = that.getStartOfWeek(a, dateTimeFormat, c);
            return e.addDays(d)
        },
        getEndOfMonth: function(b, c) {
            var d = b.daysInMonth()
              , e = new a.jqx.date(b.year(),b.month(),d,23,59,59);
            return e.timeZone = b.timeZone,
            e
        },
        rangeIntersection: function(a, b, c, d) {
            var e = a.valueOf()
              , f = c.valueOf()
              , g = b.valueOf()
              , h = d.valueOf();
            if (f >= e && f < g)
                return !0;
            if (f < e && h > e)
                return !0;
            if (e == f || g == h)
                return !0;
            if (e < f) {
                if (g > f && g < h)
                    return !0;
                if (g > h)
                    return !0
            } else {
                if (h > e && h < g)
                    return !0;
                if (h > g)
                    return !0
            }
            return !1
        },
        rangeContains: function(a, b, c, d) {
            return a <= c && d <= b
        },
        monthDays: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        msPerDay: 864e5,
        maxYear: 9999,
        ORDINAL_BASE: new Date(1970,0,1),
        getYearDay: function(b) {
            var c = new Date(b.getFullYear(),b.getMonth(),b.getDate());
            return Math.ceil((c - new Date(b.getFullYear(),0,1)) / a.jqx.scheduler.utilities.msPerDay) + 1
        },
        isLeapYear: function(a) {
            return a instanceof Date && (a = a.getFullYear()),
            a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
        },
        tzOffset: function(a) {
            return 60 * a.getTimezoneOffset() * 1e3
        },
        monthRange: function(b, c) {
            var d = new Date(b,c,1);
            return [a.jqx.scheduler.utilities.getWeekday(d), a.jqx.scheduler.utilities.getMonthDays(d)]
        },
        getMonthDays: function(b) {
            var c = b.getMonth();
            return 1 == c && a.jqx.scheduler.utilities.isLeapYear(b) ? 29 : a.jqx.scheduler.utilities.monthDays[c]
        },
        getWeekday: function(a) {
            var b = [6, 0, 1, 2, 3, 4, 5];
            return b[a.getDay()]
        },
        combine: function(a, b) {
            return b = b || a,
            new Date(a.getFullYear(),a.getMonth(),a.getDate(),b.getHours(),b.getMinutes(),b.getSeconds())
        },
        sort: function(a) {
            a.sort(function(a, b) {
                return a.getTime() - b.getTime()
            })
        },
        timeToUntilString: function(a) {
            for (var b, c = new Date(a), d = [c.getUTCFullYear(), c.getUTCMonth() + 1, c.getUTCDate(), "T", c.getUTCHours(), c.getUTCMinutes(), c.getUTCSeconds(), "Z"], e = 0; e < d.length; e++)
                b = d[e],
                !/[TZ]/.test(b) && b < 10 && (d[e] = "0" + String(b));
            return d.join("")
        },
        untilStringToDate: function(a) {
            var b = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z)?$/
              , c = b.exec(a);
            if (!c)
                throw new Error("Invalid UNTIL value: " + a);
            return new Date(Date.UTC(c[1], c[2] - 1, c[3], c[5] || 0, c[6] || 0, c[7] || 0))
        },
        Time: function(a, b, c) {
            this.hour = a,
            this.minute = b,
            this.second = c,
            this.that = this,
            this.getHours = function() {
                return that.hour
            }
            ,
            this.getMinutes = function() {
                return that.minute
            }
            ,
            this.getSeconds = function() {
                return that.second
            }
            ,
            this.getTime = function() {
                return 1e3 * (60 * that.hour * 60 + 60 * that.minute + that.second)
            }
        }
    },
    a.jqx.scheduler.appointment = function() {
        var b = this;
        if (b.from = new a.jqx.date,
        b.to = (new a.jqx.date).addHours(1),
        b.subject = "",
        b.description = "",
        b.location = "",
        b.tooltip = "",
        b.hidden = !1,
        b.resourceId = null,
        b.id = "",
        b.background = null,
        b.color = null,
        b.borderColor = null,
        b.status = "busy",
        b.style = null,
        b.exceptions = new Array,
        b.exceptionDates = new Array,
        b.recurrencePattern = null,
        b.recurrenceException = new Array,
        b.occurrenceEnumerator = null,
        b.rootAppointment = null,
        b.hiddenByResourceId = !1,
        b.draggable = !0,
        b.resizable = !0,
        b.recurrentAppointment = !1,
        b.allDay = !1,
        b.readOnly = !1,
        b.showStatus = !0,
        b.timeZone = null,
        b.scheduler = null,
        b.elements = new Array,
        b.appointmentObject = !0,
        b.duration = function() {
            var c = b.to - b.from
              , d = 1e4 * c;
            return new a.jqx.timeSpan(d)
        }
        ,
        b.toJSON = function(a) {
            var c = function(a) {
                return (a < 10 ? "0" : "") + a
            }
              , d = function(a, b) {
                return a ? b ? "" + a.getUTCFullYear() + "-" + c(a.getUTCMonth() + 1) + "-" + c(a.getUTCDate()) + "T" + c(a.getUTCHours()) + ":" + c(a.getUTCMinutes()) + ":" + c(a.getUTCSeconds()) + "Z" : "" + a.getFullYear() + "-" + c(a.getMonth() + 1) + "-" + c(a.getDate()) + "T" + c(a.getHours()) + ":" + c(a.getMinutes()) + ":" + c(a.getSeconds()) + "Z" : ""
            }
              , e = function() {
                for (var a = "", c = 0; c < b.recurrenceException.length; c++)
                    a += b.recurrenceException[c].toString(),
                    c < b.recurrenceException.length - 1 && (a += ",");
                return a
            }
              , f = {};
            return f.id = b.id,
            f.from = d(b.from.toDate(), a),
            f.to = d(b.to.toDate(), a),
            f.subject = b.subject,
            f.status = b.status,
            f.location = b.location,
            f.description = b.description,
            f.title = b.title,
            f.resourceId = b.resourceId,
            b.recurrencePattern ? f.recurrencePattern = b.recurrencePattern.toString() : f.recurrencePattern = "",
            b.recurrenceException && b.recurrenceException.length > 0 ? f.recurrenceException = e() : f.recurrenceException = "",
            f.dtstamp = d(new Date, a),
            JSON.stringify(f)
        }
        ,
        b.toString = function(a) {
            var c = function(a) {
                for (var b = ""; a.length > 75; )
                    b += a.substr(0, 75) + "\n",
                    a = " " + a.substr(75);
                return b += a
            }
              , d = function(a) {
                return (a < 10 ? "0" : "") + a
            }
              , e = function(a, b) {
                return a ? b ? "" + a.getFullYear() + d(a.getMonth() + 1) + d(a.getDate()) + "T" + d(a.getHours()) + d(a.getMinutes()) + d(a.getSeconds()) : "" + a.getUTCFullYear() + d(a.getUTCMonth() + 1) + d(a.getUTCDate()) + "T" + d(a.getUTCHours()) + d(a.getUTCMinutes()) + d(a.getUTCSeconds()) + "Z" : ""
            }
              , f = function() {
                for (var c = "", d = 0; d < b.recurrenceException.length; d++)
                    c += e(b.recurrenceException[d].toDate(), a),
                    d < b.recurrenceException.length - 1 && (c += ",");
                return c
            }
              , g = b.status;
            return g || (g = "CONFIRMED"),
            "busy" == g.toLowerCase() && (g = "CONFIRMED"),
            "tentative" == g.toLowerCase() && (g = "TENTATIVE"),
            "free" == g.toLowerCase() && (g = "CANCELLED"),
            "outOfOffice" == g.toLowerCase() && (g = "CANCELLED"),
            "BEGIN:VEVENT\nUID:" + b.id + "\nDTSTAMP:" + e(new Date, a) + "\n" + c("TITLE:" + b.subject) + "\nDTSTART:" + e(b.from.toDate(), a) + "\nDTEND:" + e(b.to.toDate(), a) + "\n" + (b.recurrencePattern ? "RRULE:" + b.recurrencePattern.toString() + "\n" : "") + (b.recurrenceException && b.recurrenceException.length > 0 ? "EXDATE:" + f() + "\n" : "") + (b.subject ? c("SUMMARY:" + b.subject) + "\n" : "") + "TRANSP:OPAQUE\n" + (b.status ? c("STATUS:" + g) + "\n" : "") + (b.description ? c("DESCRIPTION:" + b.description) + "\n" : "") + (b.location ? c("LOCATION:" + b.location) + "\n" : "") + "END:VEVENT"
        }
        ,
        b.range = function() {
            return b.allDay ? {
                from: a.jqx.scheduler.utilities.getStartOfDay(b.from),
                to: a.jqx.scheduler.utilities.getEndOfDay(b.to)
            } : {
                from: b.from,
                to: b.to
            }
        }
        ,
        b.clearRecurrence = function() {
            b.recurrencePattern && (b.exceptions = new Array,
            b.exceptionDates = new Array,
            b.recurrencePattern = null,
            b.recurrenceException = new Array,
            b.hidden = !1)
        }
        ,
        b.isAllDayAppointment = function() {
            return this.duration().days() >= 1 || this.allDay
        }
        ,
        b.cloneAppointmentAttributes = function(a) {
            a.subject = b.subject,
            a.description = b.description,
            a.location = b.location,
            a.tooltip = b.tooltip,
            a.resourceId = b.resourceId,
            a.category = b.category,
            a.status = b.status,
            a.rootAppointment = b,
            a.color = b.color,
            a.borderColor = b.borderColor,
            a.background = b.background,
            a.hidden = b.hidden,
            a.timezone = b.timeZone,
            a.style = b.style,
            a.hiddenByResourceId = b.hiddenByResourceId
        }
        ,
        b.createOccurrence = function(c) {
            if (null == c)
                return null;
            var d = new a.jqx.scheduler.appointment;
            d.allDay = b.allDay;
            var e = b.duration();
            return b.allDay && (e = new a.jqx.timeSpan(1e4 * (b.to - b.from))),
            d.from = c,
            d.to = c.add(e),
            d.occurrenceFrom = c.clone(),
            d.subject = b.subject,
            d.description = b.description,
            d.location = b.location,
            d.tooltip = b.tooltip,
            d.resourceId = b.resourceId,
            d.category = b.category,
            d.status = b.status,
            d.rootAppointment = b,
            d.color = b.color,
            d.draggable = b.draggable,
            d.resizable = b.resizable,
            d.borderColor = b.borderColor,
            d.background = b.background,
            d.recurrentAppointment = !0,
            d.timeZone = b.timeZone,
            d.style = b.style,
            d.hiddenByResourceId = b.hiddenByResourceId,
            d.boundAppointment = b.boundAppointment,
            b.hiddenByResourceId && (d.hidden = !0),
            d.id = b.id + "." + a.jqx.scheduler.utilities.guid(),
            b.hidden = !0,
            b.occurrenceIndex++,
            d
        }
        ,
        b.clone = function() {
            var c = new a.jqx.scheduler.appointment;
            return c.allDay = b.allDay,
            c.from = b.from.clone(),
            c.to = b.to.clone(),
            c.subject = b.subject,
            c.description = b.description,
            c.location = b.location,
            c.tooltip = b.tooltip,
            c.resourceId = b.resourceId,
            c.category = b.category,
            c.status = b.status,
            c.color = b.color,
            c.borderColor = b.borderColor,
            c.background = b.background,
            c.style = b.style,
            c.timeZone = b.timeZone,
            c.hiddenByResourceId = b.hiddenByResourceId,
            b.hiddenByResourceId && (c.hidden = !0),
            c.id = b.id + "." + a.jqx.scheduler.utilities.guid(),
            c
        }
        ,
        b.isRecurrentAppointment = function() {
            return b.recurrentAppointment || null != b.recurrencePattern
        }
        ,
        b.anyExceptions = function() {
            return null != b.exceptions && b.exceptions.length > 0
        }
        ,
        b.anyOccurrences = function() {
            return null != b.occurrenceEnumerator && b.occurrenceEnumerator.getNextAppointment()
        }
        ,
        b.isException = function() {
            var a = b.rootAppointment || this;
            if (!a.recurrenceException)
                return !1;
            for (var c = 0; c < a.recurrenceException.length; c++) {
                var d = a.recurrenceException[c];
                if (b.occurrenceFrom && d.equals(b.occurrenceFrom))
                    return !0
            }
            return !1
        }
        ,
        b.getOccurrences = function(c, d) {
            b.occurrenceIndex = 0;
            var e = null !== c ? c : b.from
              , f = new a.jqx.scheduler.recurrentAppointmentsList(b,b.calendar,e,d,b.scheduler);
            return b.occurrences = f.list,
            f.list
        }
        ,
        1 === arguments.length)
            if ("object" == a.type(arguments[0]))
                for (var c in arguments[0]) {
                    var d = arguments[0][c];
                    void 0 !== this[c] && (this[c] = d)
                }
            else
                b.from = arguments[0],
                b.to = new a.jqx.date(b.from).addHours(1);
        else
            2 === arguments.length ? (b.from = arguments[0],
            b.to = arguments[1]) : 3 === arguments.length ? (b.from = arguments[0],
            b.to = arguments[1],
            b.subject = arguments[2]) : 3 === arguments.length && (b.from = arguments[0],
            b.to = arguments[1],
            b.subject = arguments[2],
            b.description = arguments[3]);
        null != b.recurrencePattern && b.recurrencePattern.setFrom(b.from)
    }
    ,
    a.jqx.scheduler.recurrentAppointmentsList = function() {
        var b = this;
        return b.recurrentAppointment = null,
        b.currentTime = null,
        b.calendar = a.jqx.scheduler.calendar,
        b.from = new a.jqx.date(0),
        b.to = new a.jqx.date(9999,12,31),
        b.foundItems = 0,
        b.list = new Array,
        b.scheduler = null,
        b.getOccurrences = function(c, d, e) {
            return void 0 == c ? b.list : new a.jqx.scheduler.recurrentAppointmentsList(c,b.calendar,d,e).list
        }
        ,
        b.current = function() {
            return b.recurrentAppointment.createOccurrence(b.currentTime)
        }
        ,
        b.fillList = function() {
            b.currentTime = null,
            b.foundItems = 0,
            b.list = new Array;
            var a = b.recurrentAppointment.recurrencePattern;
            if (a.step = 0,
            a.current = 0,
            a.currentYearDay = 0,
            null == a)
                return !1;
            for (; b.getNextAppointment(a); ) {
                var c = b.current();
                c && b.list.push(c)
            }
        }
        ,
        b.getNextAppointment = function(a) {
            if (null == b.recurrentAppointment)
                return !1;
            var c = 4294967295
              , d = (this.scheduler._views[this.scheduler._view].type,
            this.scheduler._views[this.scheduler._view])
              , e = 0;
            switch (a.freq) {
            case "weekly":
                e = 7;
                break;
            case "monthly":
                e = 31;
                break;
            case "yearly":
                e = 365
            }
            for (var f = 0; f < c; f++) {
                var g = a.getNewOccurenceDate();
                if (a.currentTime = g,
                a.to < g && a.to.addDays(e) >= g || b.to < g && b.to.addDays(e) >= g)
                    return b.currentTime = null,
                    !0;
                if (a.to.addDays(e) < g || b.to.addDays(e) < g)
                    return b.currentTime = null,
                    !1;
                var h = !0;
                if (h = b.getCanSetTime(a, g, h),
                a.canCreateNewOccurence(g, b.calendar)) {
                    var i = !0;
                    !1 === d.showWeekends && (6 != g.dayOfWeek() && 0 != g.dayOfWeek() || (i = !1)),
                    i && b.foundItems++
                }
                if (h)
                    return b.currentTime = g,
                    !(b.foundItems > a.count)
            }
            return !1
        }
        ,
        b.getCanSetTime = function(a, c, d) {
            return a.canCreateNewOccurence(c, b.calendar) || (d = !1),
            c < b.from && c.add(b.recurrentAppointment.duration()) <= b.from && (d = !1),
            b.to <= c && (d = !1),
            d
        }
        ,
        b.isException = function(a, c, d) {
            for (var e = b.recurrentAppointment.exceptions, f = 0; f < e.length; f++)
                if (d.isDateInExceptionAppointment(a, c, e[f]) && -1 === d.newExceptions.indexOf(e[f]))
                    return !0;
            return !1
        }
        ,
        arguments && arguments.length > 0 && (b.recurrentAppointment = arguments[0],
        arguments[1] && (b.calendar = arguments[1]),
        arguments[2] && (b.from = arguments[2]),
        arguments[3] && (b.to = arguments[3]),
        arguments[4] && (b.scheduler = arguments[4]),
        void 0 === arguments[2] && (b.from = new a.jqx.date(0),
        b.to = new a.jqx.date(9999,12,31)),
        b.fillList()),
        b
    }
    ,
    a.jqx.scheduler.recurrencePattern = function() {
        var b = this
          , c = {
            from: new a.jqx.date(0),
            to: new a.jqx.date(9999,12,31),
            count: 1e3,
            interval: 1,
            exceptions: new Array,
            newExceptions: new Array,
            month: 1,
            day: 1,
            current: 0,
            currentYearDay: 0,
            step: 0,
            days: [],
            bynweekday: [],
            isEveryWeekDay: !0,
            timeZone: null,
            weekDays: {
                Sunday: 0,
                Monday: 1,
                Tuesday: 2,
                Wednesday: 3,
                Thursday: 4,
                Friday: 5,
                Saturday: 6
            },
            freq: "daily",
            bymonth: null,
            bymonthday: null,
            byyearday: null,
            byweekno: null,
            byweekday: null
        };
        return a.extend(!0, b, c),
        b.getNewOccurenceDate = function() {
            var c = function(a, b) {
                var c = 0
                  , d = [];
                if (a instanceof Array)
                    for (; c < b; c++)
                        d[c] = [].concat(a);
                else
                    for (; c < b; c++)
                        d[c] = a;
                return d
            }
              , d = function(a, b) {
                var c = a % b;
                return c * b < 0 ? c + b : c
            }
              , e = function(a, b) {
                1 === arguments.length && (b = a,
                a = 0);
                for (var c = [], d = a; d < b; d++)
                    c.push(d);
                return c
            }
              , f = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366]
              , g = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365]
              , h = b.from.year()
              , i = [6, 0, 1, 2, 3, 4, 5]
              , j = function(a) {
                b.yearlen = a % 4 != 0 || a % 100 == 0 && a % 400 != 0 ? 365 : 366,
                b.nextyearlen = (1 + a) % 4 != 0 || (1 + a) % 100 == 0 && (1 + a) % 400 != 0 ? 365 : 366;
                var c = (new Date(a,0,1),
                i[new Date(a,0,1).getDay()])
                  , d = function() {
                    for (var a = [], b = 0; b < 55; b++)
                        a = a.concat(e(7));
                    return a
                }();
                365 == b.yearlen ? (b.wdaymask = d.slice(c),
                b.mrange = [].concat(g)) : (b.wdaymask = d.slice(c),
                b.mrange = [].concat(f))
            };
            switch (j(h),
            b.freq) {
            case "daily":
            default:
                var k = b.from.add(new a.jqx.timeSpan(b.step * b.interval,0,0,0));
                return b.step++,
                k;
            case "weekly":
                if (b.byweekday) {
                    var k = new a.jqx.date(b.from,b.timeZone);
                    if (k = k.addDays(7 * (b.step * b.interval)),
                    b.step >= 1) {
                        k = k.addDays(-b.from.dayOfWeek());
                        var l = k.addDays(7)
                    } else
                        var l = k.addDays(7 - b.from.dayOfWeek());
                    for (var m = k, n = 0; n < 7 && i[m.dayOfWeek()] !== b.byweekday[b.current] && !(m >= l); n++)
                        m = m.addDays(1);
                    k = m,
                    b.current++,
                    void 0 == b.byweekday[b.current] && (b.current = 0,
                    b.step++)
                }
                return k;
            case "monthly":
                if (b.bynweekday.length > 0) {
                    var k = new a.jqx.date(b.from.year(),b.from.month(),1,b.from.hour(),b.from.minute(),b.from.second());
                    k.timeZone = b.timeZone,
                    k = k.addMonths(b.step * b.interval),
                    j(k.year());
                    var o = k.month()
                      , p = [b.mrange.slice(o - 1, o + 1)][0]
                      , q = p[0]
                      , r = p[1];
                    r -= 1,
                    b.nwdaymask = c(0, b.yearlen),
                    b.step++;
                    for (var s = 0; s < b.bynweekday.length; s++) {
                        var t = b.bynweekday[s][0]
                          , u = b.bynweekday[s][1];
                        u < 0 ? (n = r + 7 * (u + 1),
                        n -= d(b.wdaymask[n] - t, 7)) : (n = q + 7 * (u - 1),
                        n += d(7 - b.wdaymask[n] + t, 7)),
                        q <= n && n <= r && (b.nwdaymask[n] = 1)
                    }
                    var v = n + 1
                      , w = v - q
                      , k = new a.jqx.date(b.from.year(),b.from.month(),w,b.from.hour(),b.from.minute(),b.from.second());
                    k.timeZone = b.timeZone,
                    k = k.addMonths((b.step - 1) * b.interval)
                } else if (b.bymonthday.length > 0) {
                    var k = new a.jqx.date(b.from.year(),b.from.month(),b.bymonthday[b.current],b.from.hour(),b.from.minute(),b.from.second());
                    k.timeZone = b.timeZone,
                    k = k.addMonths(b.step * b.interval),
                    b.current++,
                    b.bymonthday[b.current] || (b.current = 0,
                    b.step++)
                } else {
                    var k = new a.jqx.date(b.from.year(),b.from.month(),b.day,b.from.hour(),b.from.minute(),b.from.second());
                    k.timeZone = b.timeZone,
                    k = k.addMonths(b.step * b.interval),
                    b.step++
                }
                return k;
            case "yearly":
                if (b.bymonth && b.bymonth.length > 0)
                    if (b.bynweekday.length > 0) {
                        var k = new a.jqx.date(b.from.year(),b.bymonth[b.current],1,b.from.hour(),b.from.minute(),b.from.second());
                        k.timeZone = b.timeZone,
                        k = k.addYears(b.step * b.interval),
                        j(k.year());
                        var o = k.month()
                          , p = [b.mrange.slice(o - 1, o + 1)][0]
                          , q = p[0]
                          , r = p[1];
                        r -= 1,
                        b.nwdaymask = c(0, b.yearlen);
                        for (var s = 0; s < b.bynweekday.length; s++) {
                            var t = b.bynweekday[s][0]
                              , u = b.bynweekday[s][1];
                            u < 0 ? (n = r + 7 * (u + 1),
                            n -= d(b.wdaymask[n] - t, 7)) : (n = q + 7 * (u - 1),
                            n += d(7 - b.wdaymask[n] + t, 7)),
                            q <= n && n <= r && (b.nwdaymask[n] = 1)
                        }
                        var v = n + 1
                          , w = v - q;
                        k = new a.jqx.date(k.year(),b.bymonth[b.current],w,b.from.hour(),b.from.minute(),b.from.second()),
                        k.timeZone = b.timeZone,
                        b.step++
                    } else if (b.byyearday.length > 0) {
                        var k = new a.jqx.date(b.from.year(),b.bymonth[b.current],b.byyearday[b.currentYearDay],b.from.hour(),b.from.minute(),b.from.second());
                        k.timeZone = b.timeZone,
                        k = k.addYears(b.step * b.interval),
                        b.currentYearDay++,
                        b.byyearday[b.currentYearDay] || (b.currentYearDay = 0,
                        b.current++,
                        b.bymonth[b.current] || (b.current = 0,
                        b.step++))
                    } else {
                        var k = new a.jqx.date(b.from.year(),b.bymonth[b.current],b.from.day(),b.from.hour(),b.from.minute(),b.from.second());
                        k.timeZone = b.timeZone,
                        k = k.addYears(b.step * b.interval),
                        b.current++,
                        b.bymonth[b.current] || (b.current = 0,
                        b.step++)
                    }
                else if (b.byyearday && b.byyearday.length > 0) {
                    var k = new a.jqx.date(b.from.year(),b.from.month(),b.byyearday[b.current],b.from.hour(),b.from.minute(),b.from.second());
                    k.timeZone = b.timeZone,
                    k = k.addYears(b.step * b.interval),
                    b.current++,
                    b.byyearday[b.current] || (b.current = 0,
                    b.step++)
                } else if (null != b.byweekno) {
                    var x = function(c, d) {
                        var e = 1
                          , f = new a.jqx.date(d.year(),1,1,d.hour(),d.minute(),d.second());
                        for (f.timeZone = b.timeZone; e != c && (f = f.addDays(7),
                        e++,
                        !(e > 53)); )
                            ;
                        for (; a.jqx.scheduler.utilities.getWeekday(f.toDate()) != b.wkst; )
                            f = f.addDays(1);
                        return f
                    }
                      , k = b.from.addYears(b.step * b.interval);
                    if (k = x(b.byweekno[b.current], k),
                    b.byweekday) {
                        for (var m = k, n = 0; n < 7 && i[m.dayOfWeek()] !== b.byweekday[b.currentYearDay]; n++)
                            m = m.addDays(1);
                        k = m,
                        b.currentYearDay++,
                        b.byweekday[b.currentYearDay] || (b.currentYearDay = 0,
                        b.current++,
                        b.byweekno[b.current] || (b.current = 0,
                        b.step++))
                    } else
                        b.current++,
                        b.byweekno[b.current] || (b.current = 0,
                        b.step++)
                } else {
                    var k = new a.jqx.date(b.from.year(),b.month,b.day,b.from.hour(),b.from.minute(),b.from.second());
                    k.timeZone = b.timeZone,
                    k = k.addYears(b.step * b.interval),
                    b.step++
                }
                return k
            }
        }
        ,
        b.isDateInExceptionAppointment = function(a, c, d) {
            switch (b.freq) {
            case "daily":
            case "weekly":
            default:
                return a.year() == d.from.year() && a.dayOfYear() == d.from.dayOfYear()
            }
        }
        ,
        b.createNewPattern = function() {
            if (b.ical) {
                var c = new a.jqx.scheduler.recurrencePattern(b.ical);
                return c
            }
            var c = new a.jqx.scheduler.recurrencePattern;
            return c.from = b.from,
            c.to = b.to,
            c.count = b.count,
            c.interval = b.interval,
            c.exceptions = b.exceptions,
            c.newExceptions = b.newExceptions,
            c.weekDays = b.weekDays,
            c.isEveryWeekDay = b.isEveryWeekDay,
            c.month = b.month,
            c.day = b.day,
            c.current = b.current,
            c.currentYearDay = b.currentYearDay,
            c.step = b.step,
            c.days = b.days,
            c.bynweekday = b.bynweekday,
            c.bymonth = b.bymonth,
            c.bymonthday = b.bymonthday,
            c.byyearday = b.byyearday,
            c.byweekno = b.byweekno,
            c.byweekday = b.byweekday,
            c.freq = c.freq,
            c.timeZone = c.timeZone,
            c
        }
        ,
        b.equals = function(a) {
            var c = b.from == a.from && b.to == a.to && b.count === a.count && b.interval === a.interval && b.day === a.day && b.month === a.month;
            return c
        }
        ,
        b.isDayOfWeekIncluded = function(c) {
            var d = c.dayOfWeek();
            return a.jqx.scheduler.utilities.areWeekDaysIncluded(b.weekDays, d)
        }
        ,
        b.getWeekIndexFromDate = function(c, d) {
            var e = d.firstDay
              , f = a.jqx.scheduler.utilities.getStartOfWeek(b.from, d, e)
              , g = new a.jqx.timeSpan(c.subtract(f));
            return parseInt(g.days() / 7)
        }
        ,
        b.canCreateNewOccurence = function(a, c) {
            a.toDate();
            switch (b.freq) {
            case "daily":
            default:
                return (!b.bymonth || b.bymonth.indexOf(a.month()) != -1) && (!b.isEveryWeekDay || !!b.isDayOfWeekIncluded(a, c));
            case "weekly":
                var d = b.getWeekIndexFromDate(a, c);
                if (b.bymonth && b.bymonth.indexOf(a.month()) == -1)
                    return !1;
                if (d % b.interval != 0)
                    return !1;
                if (b.weekDays == {}) {
                    if (b.from.dayOfWeek() != start.dayOfWeek())
                        return !1
                } else if (!b.isDayOfWeekIncluded(a, c))
                    return !1;
                break;
            case "monthly":
            case "yearly":
                if (b.bymonth && b.bymonth.indexOf(a.month()) == -1)
                    return !1;
                if (a < b.from)
                    return !1
            }
            return !0
        }
        ,
        b.toString = function() {
            var b = {};
            b.dtstart = this.from.toDate(),
            b.until = this.to ? this.to.toDate() : null,
            b.count = this.count;
            var c = {};
            c.YEARLY = 0,
            c.MONTHLY = 1,
            c.WEEKLY = 2,
            c.DAILY = 3,
            c.HOURLY = 4,
            c.MINUTELY = 5,
            c.SECONDLY = 6,
            b.freq = c[this.freq.toUpperCase()],
            "YEARLY" == b.freq && (b.bymonth = this.bymonth ? this.bymonth : (new Array).push(this.month)),
            b.byweekday = new Array;
            var d = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
            a.each(this.weekDays, function() {
                var a = this;
                a--,
                a < 0 && (a = 6),
                b.byweekday.push(a)
            }),
            void 0 != this.byyearday && (b.byyearday = this.byyearday),
            void 0 != this.byweekno && (b.byweekno = this.byweekno),
            b.bymonthday = this.bymonthday,
            b.wkst = d[this.wkst],
            b.interval = this.interval;
            var e = new a.jqx.ICalRule(b);
            return e.toString()
        }
        ,
        b.init = function(c) {
            var d = new a.jqx.ICalRule(b.ical,c)
              , e = d.options;
            if (b.from = e.dtstart ? new a.jqx.date(e.dtstart,b.timeZone) : b.from,
            b.count = void 0 != e.count ? e.count : b.count,
            b.freq = d.FREQUENCIES[e.freq].toLowerCase(),
            b.interval = void 0 != e.interval ? e.interval : b.interval,
            b.to = e.until ? new a.jqx.date(e.until,b.timeZone) : b.to,
            b.wkst = e.wkst,
            b.bymonth = e.bymonth,
            b.bymonth && b.bymonth.length > 0 ? b.month = b.bymonth[0] : b.month = b.from.month(),
            b.day = b.from.day(),
            void 0 != e.byweekday) {
                b.weekDays = {};
                for (var f = 0; f < e.byweekday.length; f++) {
                    var g = e.byweekday[f];
                    switch (g) {
                    case 0:
                        b.weekDays.Monday = 1;
                        break;
                    case 1:
                        b.weekDays.Tuesday = 2;
                        break;
                    case 2:
                        b.weekDays.Wednesday = 3;
                        break;
                    case 3:
                        b.weekDays.Thursday = 4;
                        break;
                    case 4:
                        b.weekDays.Friday = 5;
                        break;
                    case 5:
                        b.weekDays.Saturday = 6;
                        break;
                    case 6:
                        b.weekDays.Sunday = 0
                    }
                }
                b.byweekday = e.byweekday
            }
            return b.byweekno = e.byweekno,
            e.bynweekday && (b.bynweekday = e.bynweekday),
            void 0 != e.bymonthday && (b.bymonthday = e.bymonthday.sort(),
            b.bymonthday[0] && (b.day = b.bymonthday[0])),
            void 0 != e.byyearday && (b.day = e.byyearday[0],
            b.byyearday = e.byyearday.sort()),
            e
        }
        ,
        b.setFrom = function(a) {
            b.from = a.clone(),
            b.ical && b.init(a)
        }
        ,
        1 == arguments.length && (b.ical = arguments[0],
        b.init()),
        b
    }
    ,
    a.jqx.scheduler.calendar = {
        "/": "/",
        ":": ":",
        firstDay: 0,
        days: {
            names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
        },
        months: {
            names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
            namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
        },
        AM: ["AM", "am", "AM"],
        PM: ["PM", "pm", "PM"],
        eras: [{
            name: "A.D.",
            start: null,
            offset: 0
        }],
        twoDigitYearMax: 2029,
        patterns: {
            d: "M/d/yyyy",
            D: "dddd, MMMM dd, yyyy",
            t: "h:mm tt",
            T: "h:mm:ss tt",
            f: "dddd, MMMM dd, yyyy h:mm tt",
            F: "dddd, MMMM dd, yyyy h:mm:ss tt",
            M: "MMMM dd",
            Y: "yyyy MMMM",
            S: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
            ISO: "yyyy-MM-dd hh:mm:ss",
            ISO2: "yyyy-MM-dd HH:mm:ss",
            d1: "dd.MM.yyyy",
            d2: "dd-MM-yyyy",
            zone1: "yyyy-MM-ddTHH:mm:ss-HH:mm",
            zone2: "yyyy-MM-ddTHH:mm:ss+HH:mm",
            custom: "yyyy-MM-ddTHH:mm:ss.fff",
            custom2: "yyyy-MM-dd HH:mm:ss.fff"
        },
        percentsymbol: "%",
        currencysymbol: "$",
        currencysymbolposition: "before",
        decimalseparator: ".",
        thousandsseparator: ","
    },
    a.jqx.ICalRule = function(b, c) {
        var d = this
          , e = function(a, b) {
            1 === arguments.length && (b = a,
            a = 0);
            for (var c = [], d = a; d < b; d++)
                c.push(d);
            return c
        }
          , f = function(a, b) {
            var c = 0
              , d = [];
            if (a instanceof Array)
                for (; c < b; c++)
                    d[c] = [].concat(a);
            else
                for (; c < b; c++)
                    d[c] = a;
            return d
        }
          , g = function(a) {
            return !(a instanceof Array && 0 == a.length) && Boolean(a)
        }
          , h = function(a, b) {
            return a.indexOf(b) != -1
        }
          , i = ([].concat(f(1, 31), f(2, 28), f(3, 31), f(4, 30), f(5, 31), f(6, 30), f(7, 31), f(8, 31), f(9, 30), f(10, 31), f(11, 30), f(12, 31), f(1, 7)),
        [].concat(f(1, 31), f(2, 29), f(3, 31), f(4, 30), f(5, 31), f(6, 30), f(7, 31), f(8, 31), f(9, 30), f(10, 31), f(11, 30), f(12, 31), f(1, 7)),
        e(1, 29))
          , j = e(1, 30)
          , k = e(1, 31)
          , l = e(1, 32);
        [].concat(l, j, l, k, l, k, l, l, k, l, k, l, l.slice(0, 7)),
        [].concat(l, i, l, k, l, k, l, l, k, l, k, l, l.slice(0, 7));
        i = e(-28, 0),
        j = e(-29, 0),
        k = e(-30, 0),
        l = e(-31, 0);
        var m = ([].concat(l, j, l, k, l, k, l, l, k, l, k, l, l.slice(0, 7)),
        [].concat(l, i, l, k, l, k, l, l, k, l, k, l, l.slice(0, 7)),
        function() {
            for (var a = [], b = 0; b < 55; b++)
                a = a.concat(e(7));
            return a
        }(),
        function(a, b) {
            var c = this;
            if (0 === b)
                throw new Error("Can't create weekday with n == 0");
            this.weekday = a,
            this.n = b,
            this.nth = function(a) {
                return c.n == a ? c : new m(c.weekday,a)
            }
            ,
            this.equals = function(a) {
                return c.weekday == a.weekday && c.n == a.n
            }
            ,
            this.toString = function() {
                var a = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"][c.weekday];
                return this.n && (a = (c.n > 0 ? "+" : "") + String(c.n) + a),
                a
            }
            ,
            this.getJsWeekday = function() {
                return 6 == c.weekday ? 0 : c.weekday + 1
            }
        }
        );
        this.FREQUENCIES = ["YEARLY", "MONTHLY", "WEEKLY", "DAILY", "HOURLY", "MINUTELY", "SECONDLY"],
        this.YEARLY = 0,
        this.MONTHLY = 1,
        this.WEEKLY = 2,
        this.DAILY = 3,
        this.HOURLY = 4,
        this.MINUTELY = 5,
        this.SECONDLY = 6,
        this.MO = new m(0),
        this.TU = new m(1),
        this.WE = new m(2),
        this.TH = new m(3),
        this.FR = new m(4),
        this.SA = new m(5),
        this.SU = new m(6);
        var n = {
            freq: null,
            dtstart: null,
            interval: 1,
            wkst: d.MO,
            count: null,
            until: null,
            bysetpos: null,
            bymonth: null,
            bymonthday: null,
            byyearday: null,
            byweekno: null,
            byweekday: null,
            byhour: null,
            byminute: null,
            bysecond: null,
            byeaster: null
        };
        this._string = null,
        this.toString = function() {
            var b, c, e, f, g, i = this.origOptions, j = [];
            c = Object.keys(i),
            e = Object.keys(n);
            for (var k = 0; k < c.length; k++)
                if (h(e, c[k]) && (b = c[k].toUpperCase(),
                f = i[c[k]],
                g = [],
                !(null === f || f instanceof Array && !f.length))) {
                    switch (b) {
                    case "FREQ":
                        f = d.FREQUENCIES[i.freq];
                        break;
                    case "WKST":
                        f || (f = 0),
                        f = f.toString();
                        break;
                    case "BYWEEKDAY":
                        b = "BYDAY",
                        f instanceof Array || (f = [f]);
                        for (var l, o = 0; o < f.length; o++)
                            l = f[o],
                            l instanceof m || (l = l instanceof Array ? new m(l[0],l[1]) : new m(l)),
                            g[o] = l.toString();
                        f = g;
                        break;
                    case "DTSTART":
                    case "UNTIL":
                        f = a.jqx.scheduler.utilities.timeToUntilString(f);
                        break;
                    default:
                        if (f instanceof Array) {
                            for (var o = 0; o < f.length; o++)
                                g[o] = String(f[o]);
                            f = g
                        } else
                            f = String(f)
                    }
                    j.push([b, f])
                }
            for (var p = [], k = 0; k < j.length; k++) {
                var q = j[k];
                p.push(q[0] + "=" + q[1].toString())
            }
            return p.join(";")
        }
        ,
        this.parseString = function(b) {
            if (b = b.replace(/^\s+|\s+$/, ""),
            !b.length)
                return null;
            var c, e, f, g, h, i = b.split(";"), j = {};
            for (c = 0; c < i.length; c++)
                if (h = i[c].split("="),
                f = h[0],
                g = h[1],
                "" != f)
                    switch (f) {
                    case "COUNT":
                    case "INTERVAL":
                    case "BYSETPOS":
                    case "BYMONTH":
                    case "BYMONTHDAY":
                    case "BYYEARDAY":
                    case "BYWEEKNO":
                    case "BYHOUR":
                    case "BYMINUTE":
                    case "BYSECOND":
                        if (g.indexOf(",") != -1)
                            for (g = g.split(","),
                            e = 0; e < g.length; e++)
                                /^[+-]?\d+$/.test(g[e]) && (g[e] = Number(g[e]));
                        else
                            /^[+-]?\d+$/.test(g) && (g = Number(g));
                        f = f.toLowerCase(),
                        j[f] = g;
                        break;
                    case "BYDAY":
                        var k, l, n, o = g.split(",");
                        for (j.byweekday = [],
                        e = 0; e < o.length; e++)
                            n = o[e],
                            2 == n.length ? (l = d[n],
                            j.byweekday.push(l)) : (n = n.match(/^([+-]?\d)([A-Z]{2})$/),
                            k = Number(n[1]),
                            l = n[2],
                            l = d[l].weekday,
                            j.byweekday.push(new m(l,k)));
                        break;
                    case "FREQ":
                        j.freq = d[g];
                        break;
                    case "WKST":
                        j.wkst = d[g];
                        break;
                    case "DTSTART":
                        j.dtstart = a.jqx.scheduler.utilities.untilStringToDate(g);
                        break;
                    case "UNTIL":
                        j.until = a.jqx.scheduler.utilities.untilStringToDate(g);
                        break;
                    case "BYEASTER":
                        j.byeaster = Number(g);
                        break;
                    default:
                        throw new Error("Unknown ICalRule property '" + f + "'")
                    }
            return d.options = j,
            j
        }
        ,
        "string" === a.type(b) ? this.options = this.parseString(b) : this.options = b || {};
        var b = this.options;
        Array.prototype.forEach || (Array.prototype.forEach = function(a, b) {
            var c, d;
            if (null == this)
                throw new TypeError(" this is null or not defined");
            var e = Object(this)
              , f = e.length >>> 0;
            if ("function" != typeof a)
                throw new TypeError(a + " is not a function");
            for (arguments.length > 1 && (c = b),
            d = 0; d < f; ) {
                var g;
                d in e && (g = e[d],
                a.call(c, g, d, e)),
                d++
            }
        }
        ),
        Object.keys || (Object.keys = function() {
            var a = Object.prototype.hasOwnProperty
              , b = !{
                toString: null
            }.propertyIsEnumerable("toString")
              , c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
              , d = c.length;
            return function(e) {
                if ("object" != typeof e && ("function" != typeof e || null === e))
                    throw new TypeError("Object.keys called on non-object");
                var f, g, h = [];
                for (f in e)
                    a.call(e, f) && h.push(f);
                if (b)
                    for (g = 0; g < d; g++)
                        a.call(e, c[g]) && h.push(c[g]);
                return h
            }
        }()),
        this.origOptions = {};
        var o = []
          , p = Object.keys(this.options)
          , q = Object.keys(n);
        if (p.forEach(function(a) {
            this.origOptions[a] = this.options[a],
            h(q, a) || o.push(a)
        }, this),
        o.length)
            throw new Error("Invalid options: " + o.join(", "));
        if (!d.FREQUENCIES[this.options.freq] && null === b.byeaster)
            throw new Error("Invalid Frequency: " + String(b.freq));
        q.forEach(function(a) {
            h(p, a) || (b[a] = n[a])
        });
        var r = this.options;
        if (null !== r.byeaster && (r.freq = this.YEARLY),
        r.dtstart || (r.dtstart = new Date,
        r.dtstart.setMilliseconds(0)),
        c && (r.dtstart = c.toDate()),
        null === r.wkst ? r.wkst = this.MO.weekday : "number" == typeof r.wkst || (null == r.wkst ? r.wkst = this.MO.weekday : r.wkst = r.wkst.weekday),
        null !== r.bysetpos) {
            "number" == typeof r.bysetpos && (r.bysetpos = [r.bysetpos]);
            for (var s = 0; s < r.bysetpos.length; s++) {
                var t = r.bysetpos[s];
                if (0 == t || !(-366 <= t && t <= 366))
                    throw new Error("bysetpos must be between 1 and 366, or between -366 and -1")
            }
        }
        if (!(g(r.byweekno) || g(r.byyearday) || g(r.bymonthday) || null !== r.byweekday || null !== r.byeaster))
            switch (r.freq) {
            case this.YEARLY:
                r.bymonth || (r.bymonth = r.dtstart.getMonth() + 1),
                r.bymonthday = r.dtstart.getDate();
                break;
            case this.MONTHLY:
                r.bymonthday = r.dtstart.getDate();
                break;
            case this.WEEKLY:
                r.byweekday = a.jqx.scheduler.utilities.getWeekday(r.dtstart)
            }
        if (null === r.bymonth || r.bymonth instanceof Array || (r.bymonth = [r.bymonth]),
        null === r.byyearday || r.byyearday instanceof Array || (r.byyearday = [r.byyearday]),
        null === r.bymonthday)
            r.bymonthday = [],
            r.bynmonthday = [];
        else if (r.bymonthday instanceof Array) {
            var u = []
              , v = [];
            for (s = 0; s < r.bymonthday.length; s++) {
                var t = r.bymonthday[s];
                t > 0 ? u.push(t) : t < 0 && v.push(t)
            }
            r.bymonthday = u,
            r.bynmonthday = v
        } else
            r.bymonthday < 0 ? (r.bynmonthday = [r.bymonthday],
            r.bymonthday = []) : (r.bynmonthday = [],
            r.bymonthday = [r.bymonthday]);
        if (null === r.byweekno || r.byweekno instanceof Array || (r.byweekno = [r.byweekno]),
        null === r.byweekday)
            r.bynweekday = null;
        else if ("number" == typeof r.byweekday)
            r.byweekday = [r.byweekday],
            r.bynweekday = null;
        else if (r.byweekday instanceof m)
            !r.byweekday.n || r.freq > this.MONTHLY ? (r.byweekday = [r.byweekday.weekday],
            r.bynweekday = null) : (r.bynweekday = [[r.byweekday.weekday, r.byweekday.n]],
            r.byweekday = null);
        else {
            var w = []
              , x = [];
            for (s = 0; s < r.byweekday.length; s++) {
                var y = r.byweekday[s];
                "number" == typeof y ? w.push(y) : !y.n || r.freq > this.MONTHLY ? w.push(y.weekday) : x.push([y.weekday, y.n])
            }
            r.byweekday = g(w) ? w : null,
            r.bynweekday = g(x) ? x : null
        }
        if (null === r.byhour ? r.byhour = r.freq < this.HOURLY ? [r.dtstart.getHours()] : null : "number" == typeof r.byhour && (r.byhour = [r.byhour]),
        null === r.byminute ? r.byminute = r.freq < this.MINUTELY ? [r.dtstart.getMinutes()] : null : "number" == typeof r.byminute && (r.byminute = [r.byminute]),
        null === r.bysecond ? r.bysecond = r.freq < this.SECONDLY ? [r.dtstart.getSeconds()] : null : "number" == typeof r.bysecond && (r.bysecond = [r.bysecond]),
        r.freq >= this.HOURLY)
            this.timeset = null;
        else {
            if (this.timeset = [],
            r.byhour)
                for (s = 0; s < r.byhour.length; s++)
                    for (var z = r.byhour[s], A = 0; A < r.byminute.length; A++)
                        for (var B = r.byminute[A], C = 0; C < r.bysecond.length; C++) {
                            var D = r.bysecond[C];
                            this.timeset.push(new a.jqx.scheduler.utilities.Time(z,B,D))
                        }
            a.jqx.scheduler.utilities.sort(this.timeset)
        }
        return this
    }
}(jqxBaseFramework),
function(a) {
    "use strict";
    a.extend(a.jqx._jqxScheduler.prototype, {
        _getexportcolor: function(a) {
            var b = a;
            if ("transparent" == a && (b = "#FFFFFF"),
            b && b.toString() || (b = "#FFFFFF"),
            b.toString().indexOf("rgb") != -1) {
                var c = b.split(",");
                if (b.toString().indexOf("rgba") != -1) {
                    var d = parseInt(c[0].substring(5))
                      , e = parseInt(c[1])
                      , f = parseInt(c[2])
                      , g = parseInt(c[3].substring(1, 4))
                      , h = {
                        r: d,
                        g: e,
                        b: f
                    }
                      , i = this._rgbToHex(h);
                    return 0 == d && 0 == e && 0 == f && 0 == g ? "#ffffff" : "#" + i
                }
                var d = parseInt(c[0].substring(4))
                  , e = parseInt(c[1])
                  , f = parseInt(c[2].substring(1, 4))
                  , h = {
                    r: d,
                    g: e,
                    b: f
                }
                  , i = this._rgbToHex(h);
                return "#" + i
            }
            if (b.toString().indexOf("#") != -1 && 4 == b.toString().length) {
                var j = b.toString().substring(1, 4);
                b += j
            }
            return b
        },
        _rgbToHex: function(a) {
            return this._intToHex(a.r) + this._intToHex(a.g) + this._intToHex(a.b)
        },
        _intToHex: function(a) {
            var b = parseInt(a).toString(16);
            return 1 == b.length && (b = "0" + b),
            b.toUpperCase()
        },
        exportData: function(b) {
            var c = this;
            if (!a.jqx.dataAdapter.ArrayExporter)
                throw "jqxScheduler: Missing reference to jqxdata.export.js!";
            var d = this.exportSettings.serverURL
              , e = this.exportSettings.characterSet
              , f = this.exportSettings.fileName;
            void 0 === f && (f = "jqxScheduler");
            var c = this;
            if ("ical" != b && "ics" != b) {
                var g = this.getDataAppointments()
                  , h = new Array
                  , i = {}
                  , j = {}
                  , k = this.host.find(".jqx-grid-cell:first");
                k.removeClass(this.toThemeProperty("jqx-grid-cell-selected")),
                k.removeClass(this.toThemeProperty("jqx-fill-state-pressed")),
                k.removeClass(this.toThemeProperty("jqx-grid-cell-hover")),
                k.removeClass(this.toThemeProperty("jqx-fill-state-hover"));
                var l = "cell"
                  , m = 1
                  , n = "column"
                  , o = 1
                  , p = a(this.columns.records[0].element)
                  , q = 0;
                a.each(this.appointmentDataFields, function(a, d) {
                    if (i[d] = {},
                    i[d].text = d,
                    i[d].width = 100,
                    i[d].formatString = "",
                    i[d].localization = c.schedulerLocalization,
                    "from" == a || "to" == a ? (i[d].type = "date",
                    i[d].formatString = c.exportSettings.dateTimeFormatString) : i[d].type = "string",
                    i[d].cellsAlign = "left",
                    h.push(i[d]),
                    l = "cell" + m,
                    n = "column" + o,
                    "html" == b || "xls" == b || "pdf" == b) {
                        var e = function(a, e, f, g, h, k, l, m, n) {
                            j[a] = {},
                            void 0 != e && (j[a]["font-size"] = e.css("font-size"),
                            j[a]["font-weight"] = e.css("font-weight"),
                            j[a]["font-style"] = e.css("font-style"),
                            j[a]["background-color"] = c._getexportcolor(e.css("background-color")),
                            j[a].color = c._getexportcolor(e.css("color")),
                            j[a]["border-color"] = c._getexportcolor(e.css("border-top-color")),
                            f ? j[a]["text-align"] = "left" : (j[a]["text-align"] = "left",
                            j[a].formatString = "",
                            j[a].dataType = "string",
                            "from" != l && "to" != l || (j[a].dataType = "date",
                            j[a].formatString = c.exportSettings.dateTimeFormatString)),
                            "html" != b && "pdf" != b || (j[a]["border-top-width"] = e.css("border-top-width"),
                            j[a]["border-left-width"] = e.css("border-left-width"),
                            j[a]["border-right-width"] = e.css("border-right-width"),
                            j[a]["border-bottom-width"] = e.css("border-bottom-width"),
                            j[a]["border-top-style"] = e.css("border-top-style"),
                            j[a]["border-left-style"] = e.css("border-left-style"),
                            j[a]["border-right-style"] = e.css("border-right-style"),
                            j[a]["border-bottom-style"] = e.css("border-bottom-style"),
                            f ? (0 == q && (j[a]["border-left-width"] = e.css("border-right-width")),
                            j[a]["border-top-width"] = e.css("border-right-width"),
                            j[a]["border-bottom-width"] = e.css("border-bottom-width")) : (0 == q && (j[a]["border-left-width"] = "1px"),
                            j[a]["border-right-width"] = "1px")),
                            f && (i[d].style = a),
                            i[d].cellStyle = a)
                        };
                        e(n, p, !0, !1, this, c, a),
                        o++,
                        e(l, k, !1, !1, this, c, a),
                        m++
                    }
                    q++
                });
                var r = a.jqx.dataAdapter.ArrayExporter(g, i, j, d);
                if (null == f) {
                    this._renderrows();
                    var s = r.exportTo(b);
                    return setTimeout(function() {
                        c.exporting = !1
                    }, 50),
                    s
                }
                r.exportToFile(b, f, d, e),
                this._renderrows(),
                setTimeout(function() {
                    c.exporting = !1
                }, 50)
            } else if (c._resources.length > 1 && f && c.resourcesInMultipleICSFiles)
                for (var g = this.getAppointments(), t = 0; t < c._resources.length; t++) {
                    for (var u = c._resources[t], v = new Array, w = 0; w < g.length; w++) {
                        var x = g[w];
                        x.resourceId == u && v.push(x)
                    }
                    for (var y = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:jqxScheduler\nMETHOD:PUBLISH\n", z = 0; z < v.length; z++)
                        y += v[z].jqxAppointment.toString(),
                        z < v.length - 1 && (y += "\n");
                    y += "\nEND:VCALENDAR";
                    for (var A = y.length, B = new Uint8Array(new ArrayBuffer(A)), z = 0; z < A; z++)
                        B[z] = y.charCodeAt(z);
                    var C = new Blob([B],{
                        type: "application/calendar"
                    });
                    saveAs(C, f + "_" + u + ".ics")
                }
            else {
                for (var g = this.getAppointments(), y = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:jqxScheduler\nMETHOD:PUBLISH\n", t = 0; t < g.length; t++)
                    y += g[t].jqxAppointment.toString(),
                    t < g.length - 1 && (y += "\n");
                y += "\nEND:VCALENDAR";
                var A = y.length
                  , B = new Uint8Array(new ArrayBuffer(A));
                for (t = 0; t < A; t++)
                    B[t] = y.charCodeAt(t);
                var C = new Blob([B],{
                    type: "application/calendar"
                });
                if (!f)
                    return y;
                saveAs(C, f + ".ics")
            }
        },
        shadeColor: function(a, b) {
            var c = parseInt(a.slice(1), 16)
              , d = b < 0 ? 0 : 255
              , e = b < 0 ? b * -1 : b
              , f = c >> 16
              , g = c >> 8 & 255
              , h = 255 & c;
            return "#" + (16777216 + 65536 * (Math.round((d - f) * e) + f) + 256 * (Math.round((d - g) * e) + g) + (Math.round((d - h) * e) + h)).toString(16).slice(1)
        },
        hexToRgba: function(b, c) {
            var d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(b)
              , e = function() {
                var b = a.jqx.browser.msie && a.jqx.browser.version < 10;
                return void 0 == this.alpha || b ? "rgb(" + this.r + ", " + this.g + ", " + this.b + ")" : (this.alpha > 1 ? this.alpha = 1 : this.alpha < 0 && (this.alpha = 0),
                "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")")
            };
            return void 0 == c ? d ? {
                r: parseInt(d[1], 16),
                g: parseInt(d[2], 16),
                b: parseInt(d[3], 16),
                toString: e
            } : null : (c > 1 ? c = 1 : c < 0 && (c = 0),
            d ? {
                r: parseInt(d[1], 16),
                g: parseInt(d[2], 16),
                b: parseInt(d[3], 16),
                alpha: c,
                toString: e
            } : null)
        },
        getAppointmentColors: function(a) {
            var b = ""
              , c = ""
              , d = "";
            b = this.hexToRgba(a, this.appointmentOpacity).toString(),
            c = a;
            var e = function(a) {
                var b = 105
                  , c = .299 * a.r + .587 * a.g + .114 * a.b
                  , d = 255 - c < b ? "Black" : "White";
                return d
            };
            return d = e(this.hexToRgba(a, .7)),
            {
                background: b,
                color: d,
                border: c
            }
        },
        getColors: function(a) {
            a == -1 && (a = 0);
            var b = ""
              , c = ""
              , d = ""
              , e = this.resources ? this.resources.colorScheme : null;
            e || (e = "scheme01");
            for (var f = new Array, g = 0; g < this.colorSchemes.length; g++)
                if (this.colorSchemes[g].name == e) {
                    f = this.colorSchemes[g].colors;
                    break
                }
            for (; a > f.length - 1; ) {
                var h = parseInt(e.substring(6));
                h >= 27 && (h = 0),
                f = f.concat(this.colorSchemes[h].colors),
                h++
            }
            b = f[a],
            b = this.hexToRgba(f[a], .7).toString(),
            c = f[a];
            var i = function(a) {
                var b = 105
                  , c = .299 * a.r + .587 * a.g + .114 * a.b
                  , d = 255 - c < b ? "Black" : "White";
                return d
            };
            return d = i(this.hexToRgba(f[a], .7)),
            {
                background: b,
                color: d,
                border: c
            }
        },
        getAppointments: function() {
            for (var a = this.uiappointments, b = new Array, c = 0; c < a.length; c++) {
                var d = a[c].boundAppointment;
                d.toString = d.jqxAppointment.toString,
                b.push(d)
            }
            return b
        },
        getDataAppointments: function() {
            for (var b = this.uiappointments, c = new Array, d = 0; d < b.length; d++) {
                var e = b[d].boundAppointment
                  , f = {};
                a.each(this.appointmentDataFields, function(b, c) {
                    if (f[c] = e[b],
                    "from" != b && "to" != b || "date" != a.type(e[b]) && (f[c] = e[b].toDate()),
                    "recurrencePattern" == b && e[b] && (f[c] = e[b].toString()),
                    "recurrenceException" == b && e[b]) {
                        f[c] = "";
                        for (var d = 0; d < e[b].length; d++)
                            f[c] += e[b][d].toString(),
                            d < e[b].length - 1 && (f[c] += ",")
                    }
                    try {
                        JSON && (f.toString = function() {
                            return JSON.stringify(f)
                        }
                        )
                    } catch (a) {}
                }),
                c.push(f)
            }
            return c
        },
        _refreshColumns: function() {
            this._initializeColumns(),
            this.columnsheader = this.columnsheader || a('<div style="overflow: hidden;"></div>'),
            this.columnsheader.children().remove();
            var b = this.columnsHeight;
            b = this._preparecolumnGroups(),
            this.columnsheader.height(b),
            this._rendercolumnheaders()
        },
        _refreshColumnTitles: function() {
            var b = this._views[this._view].type
              , c = this._views[this._view]
              , d = this
              , e = new Array;
            if (d.columns.records[0].timeColumn && e.push({}),
            c.timeRuler && c.timeRuler.timeZones)
                for (var f = 0; f < c.timeRuler.timeZones.length; f++)
                    e.push({});
            for (var g = function(b, f, g) {
                var h = "halfHour";
                c.timeRuler && c.timeRuler.scale && (h = c.timeRuler.scale);
                var i = 24
                  , j = 0
                  , k = 23;
                if (c.timeRuler) {
                    if (void 0 != c.timeRuler.scaleStartHour)
                        var j = parseInt(c.timeRuler.scaleStartHour);
                    if (void 0 != c.timeRuler.scaleEndHour)
                        var k = parseInt(c.timeRuler.scaleEndHour);
                    j < 0 && (j = 0),
                    k < 0 && (k = 23),
                    j > 23 && (j = 0),
                    k > 23 && (k = 23),
                    i = k - j + 1
                }
                var l = 60
                  , m = 2;
                if (h)
                    switch (h) {
                    case "sixtyMinutes":
                    case "hour":
                        m = 1;
                        break;
                    case "thirdyMinutes":
                    case "halfHour":
                        m = 2;
                        break;
                    case "fifteenMinutes":
                    case "quarterHour":
                        m = 4;
                        break;
                    case "tenMinutes":
                        m = 6;
                        break;
                    case "fiveMinutes":
                        m = 12
                    }
                var n = (new Array,
                "auto");
                c.timeRuler && c.timeRuler.formatString && (n = c.timeRuler.formatString);
                var o = j
                  , p = i
                  , q = b.addHours(o);
                if (d.rtl)
                    var q = b.addHours(k);
                for (var r = 0; r < p; r++) {
                    var s = q.toDate();
                    if ("auto" === n)
                        if (0 == s.getHours() && 0 == s.getMinutes() || 12 == s.getHours() && 0 == s.getMinutes())
                            var t = "hh tt";
                        else
                            var t = "hh:mm";
                    else if (a.isFunction(n))
                        var t = n(s);
                    else
                        t = n;
                    a.jqx.dataFormat.isDate(s) && (s = a.jqx.dataFormat.formatdate(s, t, d.schedulerLocalization)),
                    q = d.rtl ? q.addMinutes(-l) : q.addMinutes(l),
                    e.push({}),
                    d.columns.records[e.length - 1].text = s
                }
            }, h = (this.tableColumns,
            0); h < this.tableColumns; h++)
                switch (b) {
                case "dayView":
                    var i = this.getViewStart();
                    !1 === c.showWeekends && (0 !== i.dayOfWeek() && 6 !== i.dayOfWeek() || (i = i.addDays(1)),
                    0 !== i.dayOfWeek() && 6 !== i.dayOfWeek() || (i = i.addDays(1))),
                    e.push({}),
                    this.columns.records[e.length - 1].text = this._getDayName(i.dayOfWeek());
                    break;
                case "weekView":
                case "monthView":
                    for (var f = 0; f < 7; f++) {
                        var j = this.schedulerLocalization.firstDay + f;
                        (!1 !== c.showWeekends || 0 !== f && 6 !== f) && (e.push({}),
                        d.rtl && (j = 6 - j),
                        this.columns.records[e.length - 1].text = this._getDayName(j))
                    }
                    break;
                case "timelineDayView":
                    var k = d._resources[h] ? d._resources[h] : "Resource" + h;
                    g(d.getViewStart(), k);
                    break;
                case "timelineWeekView":
                    for (var f = 0; f < 7; f++) {
                        var j = this.schedulerLocalization.firstDay + f;
                        (!1 !== c.showWeekends || 0 !== f && 6 !== f) && (d.rtl && (j = 6 - j),
                        g(d.getViewStart().addDays(f), this._getDayName(j)))
                    }
                    break;
                case "timelineMonthView":
                    var l = d.getViewStart()
                      , m = "auto";
                    c.timeRuler && c.timeRuler.formatString && (m = c.timeRuler.formatString);
                    for (var f = 0; f < 41; f++) {
                        var j = l.dayOfWeek();
                        if (!1 !== c.showWeekends || 0 !== j && 6 !== j) {
                            d.rtl && (j = 6 - j);
                            var n = l.toDate();
                            if ("auto" === m) {
                                var o = "dd";
                                n = l.toDate(),
                                1 === n.getDate() && (o = "MMM dd")
                            } else if (a.isFunction(m))
                                var o = m(n);
                            else
                                o = m;
                            a.jqx.dataFormat.isDate(n) && (n = a.jqx.dataFormat.formatdate(n, o, d.schedulerLocalization)),
                            l = l.addDays(1),
                            e.push({}),
                            d.columns.records[e.length - 1].text = n
                        }
                    }
                }
            for (var p = d.columnsHeight, q = function(a, b) {
                var c = d.columnGroupslevel * d.columnsHeight;
                return c -= b.level * d.columnsHeight
            }, f = 0; f < this.columns.records.length; f++) {
                var r = this.columns.records[f];
                if (!r.timeColumn) {
                    d.columnGroups && d.columnGroups.length && (p = q(r.datafield, r));
                    var s = null != r.renderer ? r.renderer(r.text, r.align, p) : d._rendercolumnheader(r.text, r.align, p, r);
                    null == s && (s = d._rendercolumnheader(r.text, r.align, p, d)),
                    null != r.renderer && (s = a(s)),
                    a(r.element).html(s)
                }
            }
        },
        initRepeatPanels: function(b, c, d) {
            var e = this
              , f = a("<div></div>");
            c.append(f);
            var g = a("<div class='jqx-scheduler-edit-dialog-label'>" + e.schedulerLocalization.editDialogRepeatString + "</div>").appendTo(f)
              , h = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(f)
              , i = a("<div></div>").appendTo(h)
              , j = a("<div></div>");
            c.append(j);
            var k = a("<div></div>");
            j.append(k);
            var l = function(b, c) {
                var f = a("<div></div>").appendTo(b)
                  , g = a("<div class='jqx-scheduler-edit-dialog-label'>" + e.schedulerLocalization.editDialogRepeatEndString + "</div>").appendTo(f)
                  , h = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(f)
                  , i = a("<div style='position:relative; float:left;'><span style='margin-left:2px;'>" + e.schedulerLocalization.editDialogRepeatNeverString + "</span></div>").appendTo(h);
                i.jqxRadioButton({
                    rtl: e.rtl,
                    groupName: "end" + c,
                    theme: e.theme,
                    width: 200,
                    height: 25,
                    checked: !0
                }),
                e.editDialogFields[c].repeatEndNever = i,
                e.editDialogFields[c].repeatEndNeverLabel = g;
                var j = a("<div class='jqx-scheduler-edit-dialog-label'></div>").appendTo(f)
                  , k = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(f)
                  , l = a("<div style='position:relative;  float:left;'><span style='margin-left:2px;'>" + e.schedulerLocalization.editDialogRepeatAfterString + "</span></div>").appendTo(k);
                l.jqxRadioButton({
                    rtl: e.rtl,
                    groupName: "end" + c,
                    theme: e.theme,
                    width: 60,
                    height: 25,
                    checked: !1
                });
                var m = a("<div style='margin-left: 3px; float:left;'></div>").appendTo(k);
                m.jqxNumberInput({
                    rtl: e.rtl,
                    decimal: 10,
                    min: 1,
                    inputMode: "simple",
                    height: 25,
                    width: 50,
                    spinButtons: !0,
                    decimalDigits: 0,
                    theme: e.theme
                });
                a("<div style='float: left; margin-left: 5px; line-height:25px;'>" + e.schedulerLocalization.editDialogRepeatOccurrencesString + "</div>").appendTo(k);
                e.editDialogFields[c].repeatEndAfter = l,
                e.editDialogFields[c].repeatEndAfterValue = m,
                e.editDialogFields[c].repeatEndAfterLabel = j;
                var n = a("<div class='jqx-scheduler-edit-dialog-label'></div>").appendTo(f)
                  , o = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(f)
                  , p = a("<div style='position:relative; float:left;'><span style='margin-left:2px;'>" + e.schedulerLocalization.editDialogRepeatOnString + "</span></div>").appendTo(o);
                p.jqxRadioButton({
                    rtl: e.rtl,
                    groupName: "end" + c,
                    theme: e.theme,
                    width: 60,
                    height: 25,
                    checked: !1
                });
                var q = a("<div style='margin-left: 3px; float:left;'></div>").appendTo(o);
                q.jqxDateTimeInput({
                    dropDownWidth: 220,
                    dropDownHeight: 220,
                    rtl: e.rtl,
                    localization: e._getDateTimeInputLocalization(),
                    firstDayOfWeek: e.schedulerLocalization.firstDay,
                    todayString: e.schedulerLocalization.todayString,
                    clearString: e.schedulerLocalization.clearString,
                    value: d,
                    formatString: e.editDialogDateFormatString,
                    height: 25,
                    width: 150,
                    theme: e.theme
                });
                q.jqxDateTimeInput("getInstance");
                return e.editDialogFields[c].repeatEndOn = p,
                e.editDialogFields[c].repeatEndOnValue = q,
                e.editDialogFields[c].repeatEndOnLabel = n,
                f
            };
            k.detach(),
            e.editDialogFields.repeatEndPanel = {},
            e.editDialogFields.repeatEndPanelContainer = k,
            l(k, "repeatEndPanel");
            var m = function() {
                var b = a("<div style='visibility: hidden;'></div>").appendTo(a(document.body))
                  , c = a("<div class='jqx-scheduler-edit-dialog-label'>" + e.schedulerLocalization.editDialogRepeatEveryString + "</div>").appendTo(b)
                  , d = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(b)
                  , f = a("<div style='float:left;'></div>").appendTo(d);
                f.jqxNumberInput({
                    rtl: e.rtl,
                    decimal: 1,
                    min: 1,
                    inputMode: "simple",
                    height: 25,
                    width: 50,
                    spinButtons: !0,
                    decimalDigits: 0,
                    theme: e.theme
                });
                a("<div style='float: left; margin-left: 5px; line-height:25px;'>" + e.schedulerLocalization.editDialogRepeatEveryDayString + "</div>").appendTo(d);
                e.editDialogFields.daily = {},
                e.editDialogFields.daily.repeatDayInterval = f,
                e.editDialogFields.daily.repeatDayLabel = c,
                e.editDialogFields.daily.panel = b,
                b.detach(),
                e.editDialogFields.weekly = {};
                var g = a("<div style='visibility: hidden;'></div>").appendTo(a(document.body))
                  , h = a("<div class='jqx-scheduler-edit-dialog-label'>" + e.schedulerLocalization.editDialogRepeatEveryString + "</div>").appendTo(g)
                  , i = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(g)
                  , j = a("<div style='float:left;'></div>").appendTo(i);
                j.jqxNumberInput({
                    rtl: e.rtl,
                    decimal: 1,
                    min: 1,
                    inputMode: "simple",
                    height: 25,
                    width: 50,
                    spinButtons: !0,
                    decimalDigits: 0,
                    theme: e.theme
                });
                a("<div style='float: left; margin-left: 5px; line-height:25px;'>" + e.schedulerLocalization.editDialogRepeatEveryWeekString + "</div>").appendTo(i);
                e.editDialogFields.weekly.repeatWeekInterval = j,
                e.editDialogFields.weekly.repeatWeekIntervalLabel = h;
                var k = a("<div class='jqx-scheduler-edit-dialog-label'>" + e.schedulerLocalization.editDialogRepeatOnString + "</div>").appendTo(g)
                  , l = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(g)
                  , m = a("<div style='float:left;'></div>").appendTo(l);
                e.editDialogFields.weekly.repeatDaysLabel = k,
                e.editDialogFields.weekly.repeatDays = new Array;
                for (var n = 0; n < 7; n++) {
                    var o = e._getDayName(n, "firstTwoLetters")
                      , p = a("<div style='position:relative; top: 6px; float:left;'><span style='margin-left:2px;'>" + o + "</span></div>");
                    m.append(p);
                    var q = 1 == n;
                    p.jqxCheckBox({
                        rtl: e.rtl,
                        height: 25,
                        checked: q,
                        width: 50,
                        theme: e.theme
                    }),
                    e.editDialogFields.weekly.repeatDays.push(p)
                }
                e.editDialogFields.weekly.panel = g,
                g.detach(),
                e.editDialogFields.monthly = {};
                var r = a("<div style='visibility: hidden;'></div>").appendTo(a(document.body))
                  , s = a("<div class='jqx-scheduler-edit-dialog-label'>" + e.schedulerLocalization.editDialogRepeatEveryString + "</div>").appendTo(r)
                  , t = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(r)
                  , u = a("<div style='float:left;'></div>").appendTo(t);
                u.jqxNumberInput({
                    rtl: e.rtl,
                    decimal: 1,
                    min: 1,
                    inputMode: "simple",
                    height: 25,
                    width: 50,
                    spinButtons: !0,
                    decimalDigits: 0,
                    theme: e.theme
                });
                a("<div style='float: left; margin-left: 5px; line-height:25px;'>" + e.schedulerLocalization.editDialogRepeatEveryMonthString + "</div>").appendTo(t);
                e.editDialogFields.monthly.repeatMonth = u,
                e.editDialogFields.monthly.repeatMonthLabel = s;
                var v = a("<div class='jqx-scheduler-edit-dialog-label'>" + e.schedulerLocalization.editDialogRepeatOnString + "</div>").appendTo(r)
                  , w = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(r)
                  , x = a("<div style='float:left;'></div>").appendTo(w)
                  , y = a("<div style='position:relative; top: 6px; float:left;'><span style='margin-left:2px;'>" + e.schedulerLocalization.editDialogRepeatEveryMonthDayString + "</span></div>").appendTo(x);
                y.jqxRadioButton({
                    rtl: e.rtl,
                    groupName: "month",
                    height: 25,
                    width: 60,
                    checked: !0,
                    theme: e.theme
                });
                var z = a("<div style='float:left;'></div>").appendTo(x);
                z.jqxNumberInput({
                    rtl: e.rtl,
                    decimal: 1,
                    min: 1,
                    inputMode: "simple",
                    height: 25,
                    width: 50,
                    spinButtons: !0,
                    decimalDigits: 0,
                    theme: e.theme
                }),
                e.editDialogFields.monthly.repeatMonthDay = z,
                e.editDialogFields.monthly.repeatMonthDayBool = y,
                e.editDialogFields.monthly.repeatMonthDayLabel = v;
                var A = a("<div class='jqx-scheduler-edit-dialog-label'></div>").appendTo(r)
                  , B = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(r)
                  , C = a("<div style='float:left;'></div>").appendTo(B)
                  , D = a("<div style='position:relative; top: 6px; float:left;'><span style='margin-left:2px;'></span></div>").appendTo(C);
                D.jqxRadioButton({
                    groupName: "month",
                    height: 25,
                    width: 25,
                    checked: !1,
                    theme: e.theme
                });
                var E = a("<div style='float:left;'></div>").appendTo(C)
                  , F = new Array;
                F.push(e.schedulerLocalization.editDialogRepeatFirstString),
                F.push(e.schedulerLocalization.editDialogRepeatSecondString),
                F.push(e.schedulerLocalization.editDialogRepeatThirdString),
                F.push(e.schedulerLocalization.editDialogRepeatFourthString),
                F.push(e.schedulerLocalization.editDialogRepeatLastString),
                E.jqxDropDownList({
                    dropDownWidth: 150,
                    selectedIndex: 0,
                    source: F,
                    autoDropDownHeight: !0,
                    height: 25,
                    width: "auto",
                    theme: e.theme
                });
                for (var G = a("<div style='margin-left: 5px; float:left;'></div>").appendTo(C), H = new Array, n = 0; n < 7; n++) {
                    var o = e._getDayName(n);
                    H.push(o)
                }
                G.jqxDropDownList({
                    rtl: e.rtl,
                    dropDownWidth: 150,
                    autoDropDownHeight: !0,
                    selectedIndex: 1,
                    source: H,
                    height: 25,
                    width: "auto",
                    theme: e.theme
                }),
                e.editDialogFields.monthly.repeatDayOfWeekBool = D,
                e.editDialogFields.monthly.repeatDayOfWeek = G,
                e.editDialogFields.monthly.repeatDayOfWeekLabel = A,
                e.editDialogFields.monthly.repeatDayOfWeekType = E,
                e.editDialogFields.monthly.panel = r,
                r.detach(),
                e.editDialogFields.yearly = {};
                var I = a("<div style='visibility: hidden;'></div>").appendTo(a(document.body))
                  , J = a("<div class='jqx-scheduler-edit-dialog-label'>" + e.schedulerLocalization.editDialogRepeatEveryString + "</div>").appendTo(I)
                  , K = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(I)
                  , L = a("<div style='float:left;'></div>").appendTo(K);
                L.jqxNumberInput({
                    decimal: 1,
                    min: 1,
                    inputMode: "simple",
                    height: 25,
                    width: 50,
                    spinButtons: !0,
                    decimalDigits: 0,
                    theme: e.theme
                });
                a("<div style='float: left; margin-left: 5px; line-height:25px;'>" + e.schedulerLocalization.editDialogRepeatEveryYearString + "</div>").appendTo(K);
                e.editDialogFields.yearly.repeatYear = L,
                e.editDialogFields.yearly.repeatYearLabel = J;
                var M = a("<div class='jqx-scheduler-edit-dialog-label'>" + e.schedulerLocalization.editDialogRepeatOnString + "</div>").appendTo(I)
                  , N = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(I)
                  , O = a("<div style='float:left;'></div>").appendTo(N)
                  , P = a("<div style='position:relative; top: 6px; float:left;'></span></div>").appendTo(O);
                P.jqxRadioButton({
                    rtl: e.rtl,
                    groupName: "year",
                    height: 25,
                    width: 25,
                    checked: !0,
                    theme: e.theme
                }),
                e.editDialogFields.yearly.repeatYearBool = P,
                e.editDialogFields.yearly.repeatYearBoolLabel = M;
                for (var Q = a("<div style='float:left;'></div>").appendTo(O), R = new Array, n = 0; n < 12; n++) {
                    var S = e.schedulerLocalization.months.names[n];
                    R.push(S)
                }
                Q.jqxDropDownList({
                    selectedIndex: 0,
                    height: 25,
                    dropDownWidth: 150,
                    width: "auto",
                    source: R,
                    theme: e.theme
                }),
                e.editDialogFields.yearly.repeatYearMonth = Q;
                var T = a("<div style='margin-left: 5px; float:left;'></div>").appendTo(O);
                T.jqxNumberInput({
                    decimal: 1,
                    min: 1,
                    inputMode: "simple",
                    height: 25,
                    width: 50,
                    spinButtons: !0,
                    decimalDigits: 0,
                    theme: e.theme
                }),
                e.editDialogFields.yearly.repeatYearDay = T;
                var U = a("<div class='jqx-scheduler-edit-dialog-label'></div>").appendTo(I)
                  , V = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(I)
                  , W = a("<div style='float:left;'></div>").appendTo(V)
                  , X = a("<div style='position:relative; top: 6px; float:left;'><span style='margin-left:2px;'></span></div>").appendTo(W);
                X.jqxRadioButton({
                    rtl: e.rtl,
                    groupName: "year",
                    height: 25,
                    width: 25,
                    checked: !1,
                    theme: e.theme
                });
                var Y = a("<div style='float:left;'></div>").appendTo(W);
                e.editDialogFields.yearly.repeatDayOfWeekBool = X,
                e.editDialogFields.yearly.repeatDayOfWeekType = Y,
                e.editDialogFields.yearly.repeatDayOfWeekLabel = U;
                var Z = new Array;
                Z.push(e.schedulerLocalization.editDialogRepeatFirstString),
                Z.push(e.schedulerLocalization.editDialogRepeatSecondString),
                Z.push(e.schedulerLocalization.editDialogRepeatThirdString),
                Z.push(e.schedulerLocalization.editDialogRepeatFourthString),
                Z.push(e.schedulerLocalization.editDialogRepeatLastString),
                Y.jqxDropDownList({
                    dropDownWidth: 150,
                    selectedIndex: 0,
                    source: Z,
                    autoDropDownHeight: !0,
                    height: 25,
                    width: "auto",
                    theme: e.theme
                });
                var $ = a("<div style='margin-left: 5px; float:left;'></div>").appendTo(W);
                e.editDialogFields.yearly.repeatDayOfWeek = $;
                for (var _ = new Array, n = 0; n < 7; n++) {
                    var o = e._getDayName(n);
                    _.push(o)
                }
                $.jqxDropDownList({
                    rtl: e.rtl,
                    dropDownWidth: 150,
                    selectedIndex: 1,
                    autoDropDownHeight: !0,
                    source: _,
                    height: 25,
                    width: "auto",
                    theme: e.theme
                });
                for (var R = new Array, aa = (a("<div style='line-height:25px; height: 25px; margin-left: 5px; float:left;'>" + e.schedulerLocalization.editDialogRepeatOfString + "</div>").appendTo(W),
                a("<div style='margin-left: 5px; float:left;'></div>").appendTo(W)), n = 0; n < 12; n++) {
                    var S = e.schedulerLocalization.months.names[n];
                    R.push(S)
                }
                e.editDialogFields.yearly.repeatDayOfWeekMonth = aa,
                aa.jqxDropDownList({
                    rtl: e.rtl,
                    dropDownWidth: 150,
                    selectedIndex: 0,
                    source: R,
                    height: 25,
                    width: "auto",
                    theme: e.theme
                }),
                e.editDialogFields.yearly.panel = I,
                I.detach()
            };
            e.editAppointment && e.editAppointment.rootAppointment,
            m();
            var n = a("<div></div>");
            c.append(n);
            var o = a("<div class='jqx-scheduler-edit-dialog-label'>" + e.schedulerLocalization.editDialogExceptionsString + "</div>").appendTo(n)
              , p = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(n)
              , q = a("<div style='position:relative; top:2px;'>" + e.schedulerLocalization.editDialogResetExceptionsString + "</div>").appendTo(p);
            q.jqxCheckBox({
                height: 25,
                width: "100%",
                theme: e.theme
            }),
            n.hide(),
            e.editDialogFields.resetExceptions = q,
            e.editDialogFields.resetExceptionsLabel = o,
            e.editDialogFields.resetExceptionsContainer = n;
            var r = new Array;
            r.push(e.schedulerLocalization.editDialogRepeatNeverString),
            r.push(e.schedulerLocalization.editDialogRepeatDailyString),
            r.push(e.schedulerLocalization.editDialogRepeatWeeklyString),
            r.push(e.schedulerLocalization.editDialogRepeatMonthlyString),
            r.push(e.schedulerLocalization.editDialogRepeatYearlyString),
            i.jqxDropDownList({
                rtl: e.rtl,
                width: "100%",
                height: 25,
                autoDropDownHeight: !0,
                theme: e.theme,
                source: r,
                selectedIndex: 0
            }),
            e.editDialogFields.repeat = i,
            e.editDialogFields.repeatLabel = g,
            e.editDialogFields.repeatContainer = f,
            e.editDialogFields.repeatPanel = j,
            this.addHandler(i, "change", function(a) {
                var d = a.args.item.index;
                (function() {
                    switch (j.children().detach(),
                    d) {
                    case 0:
                        break;
                    case 1:
                        e.editDialogFields.daily.panel.css("visibility", "visible"),
                        j.append(e.editDialogFields.daily.panel);
                        break;
                    case 2:
                        e.editDialogFields.weekly.panel.css("visibility", "visible"),
                        j.append(e.editDialogFields.weekly.panel);
                        break;
                    case 3:
                        e.editDialogFields.monthly.panel.css("visibility", "visible"),
                        j.append(e.editDialogFields.monthly.panel);
                        break;
                    case 4:
                        e.editDialogFields.yearly.panel.css("visibility", "visible"),
                        j.append(e.editDialogFields.yearly.panel)
                    }
                    j.append(k),
                    0 == d ? e.editDialogFields.repeatEndPanelContainer.hide() : e.editDialogFields.repeatEndPanelContainer.show(),
                    e.isTouchDevice() || (b.jqxWindow({
                        height: 150
                    }),
                    b.jqxWindow({
                        height: c[0].scrollHeight + 40
                    }))
                })()
            })
        },
        _initMenu: function() {
            var b = this;
            if (this.host.jqxMenu) {
                if (this.menu) {
                    if (this._hasOpenedMenu)
                        return;
                    this.removeHandler(this.menu, "keydown"),
                    this.removeHandler(this.menu, "closed"),
                    this.removeHandler(this.menu, "itemclick"),
                    this.menu.jqxMenu("destroy"),
                    this.menu.removeData(),
                    this.menu.remove()
                }
                this.menuitemsarray = new Array,
                this.menu = a('<div id="menu.jqxscheduler' + this.element.id + '" style="white-space: nowrap; z-index: 9999999999999;"></div>'),
                this.host.append(this.menu),
                this.addHandler(a(window), "orientationchange.jqxscheduler" + this.element.id, function() {
                    b.menu.jqxMenu("close"),
                    b._hasOpenedMenu = !1
                }),
                this.addHandler(a(window), "orientationchanged.jqxscheduler" + this.element.id, function() {
                    b.menu.jqxMenu("close"),
                    b._hasOpenedMenu = !1
                }),
                this.removeHandler(this.menu, "keydown"),
                this.addHandler(this.menu, "keydown", function(a) {
                    27 == a.keyCode && (b.menu.jqxMenu("close"),
                    b._hasOpenedMenu = !1,
                    b.focus())
                }),
                this.addHandler(this.menu, "open", function(a) {
                    b.contextMenuOpen && b.contextMenuOpen(b.menu, b.selectedJQXAppointment ? b.selectedJQXAppointment.boundAppointment : null, a),
                    b._raiseEvent("contextMenuOpen", {
                        menu: b.menu,
                        appointment: b.selectedJQXAppointment ? b.selectedJQXAppointment.boundAppointment : null
                    }),
                    b._removeFeedbackAndStopResize()
                }),
                this.addHandler(this.menu, "close", function(a) {
                    b.contextMenuClose && b.contextMenuClose(b.menu, b.selectedJQXAppointment ? b.selectedJQXAppointment.boundAppointment : null, a),
                    b._hasOpenedMenu = !1,
                    document.activeElement && document.activeElement.className.indexOf("jqx-menu") >= 0 && !b.menuOpening && b.focus(),
                    b._raiseEvent("contextMenuClose", {
                        menu: b.menu,
                        appointment: b.selectedJQXAppointment ? b.selectedJQXAppointment.boundAppointment : null
                    })
                }),
                this.addHandler(this.host, "contextmenu", function(a) {
                    return a.preventDefault(),
                    a.stopPropagation(),
                    !1
                }),
                this.addHandler(this.menu, "itemclick", function(a) {
                    var c = b.menu.jqxMenu("getItem", a.args.id);
                    if (b._raiseEvent("contextMenuItemClick", {
                        item: c,
                        menu: b.menu,
                        appointment: b.selectedJQXAppointment ? b.selectedJQXAppointment.boundAppointment : null
                    }),
                    b.contextMenuItemClick) {
                        var d = b.contextMenuItemClick(b.menu, b.selectedJQXAppointment ? b.selectedJQXAppointment.boundAppointment : null, a);
                        if (1 == d)
                            return new Date - b.renderedTime > 500 && b._renderrows(),
                            b.menu.jqxMenu("close"),
                            void (b._hasOpenedMenu = !1)
                    }
                    if ("createAppointment" == c.id)
                        b._initDialog(),
                        b._openDialog(),
                        "keyboard" == a.args.clickType && (b.menu.jqxMenu("close"),
                        b._hasOpenedMenu = !1);
                    else {
                        if ("editAppointment" != c.id)
                            return "keyboard" == a.args.clickType && (b.menu.jqxMenu("close"),
                            b._hasOpenedMenu = !1),
                            !0;
                        var e = b.getJQXAppointmentByElement(b.selectedAppointment);
                        if (!e.readOnly) {
                            var d = b._initDialog(e);
                            d !== !1 && b._openDialog()
                        }
                        "keyboard" == a.args.clickType && (b.menu.jqxMenu("close"),
                        b._hasOpenedMenu = !1)
                    }
                });
                var c = new Array;
                c.push({
                    label: this.schedulerLocalization.contextMenuEditAppointmentString,
                    id: "editAppointment"
                }),
                c.push({
                    label: this.schedulerLocalization.contextMenuCreateAppointmentString,
                    id: "createAppointment"
                });
                var d = {
                    rtl: this.rtl,
                    keyboardNavigation: !0,
                    source: c,
                    popupZIndex: 999999,
                    autoOpenPopup: !1,
                    mode: "popup",
                    theme: this.theme,
                    animationShowDuration: 0,
                    animationHideDuration: 0,
                    animationShowDelay: 0
                };
                b.contextMenuCreate && b.contextMenuCreate(b.menu, d),
                b._raiseEvent("contextMenuCreate", {
                    menu: b.menu,
                    settings: d
                }),
                this.menu.jqxMenu(d)
            }
        },
        _initDialog: function(b, c) {
            var d = this
              , e = null;
            if (b && b.isRecurrentAppointment() && !d.editRecurrenceDialog.jqxWindow("isOpen")) {
                var f = d.host.coord()
                  , g = f.top + d.host.height() / 2 - d.editRecurrenceDialog.height() / 2
                  , h = f.left + d.host.width() / 2 - d.editRecurrenceDialog.width() / 2;
                d.editRecurrenceDialog.find("button:first").focus(),
                setTimeout(function() {
                    d.editRecurrenceDialog.find("button:first").focus()
                }, 25),
                d.editRecurrenceDialog.jqxWindow("move", h, g),
                d.editRecurrenceDialog.jqxWindow("open"),
                d.editSeries = function(a) {
                    a ? (d._initDialog(b.rootAppointment),
                    d._openDialog()) : (d._initDialog(b),
                    d._openDialog())
                }
                ,
                d.overlay.show(),
                d.overlay.width(d.host.width()),
                d.overlay.height(d.host.height());
                var f = d.host.coord();
                return d.overlay.offset(f),
                d._editDialog || d._initDialog(),
                !1
            }
            if (d.editAppointment = b,
            b || (e = d.getSelection(),
            e || (d.focus(),
            d.focusedCell && (d.focusedCell.setAttribute("data-selected", "true"),
            d._lastSelectedCell = d.focusedCell,
            d._updateCellsSelection(d.focusedCell),
            e = d.getSelection()))),
            e || b) {
                var i = e ? e.from : b.from
                  , j = e ? e.to : b.to
                  , k = d.getSelectedCells();
                if (k.length > 0) {
                    var l = k[k.length - 1].getAttribute("data-end-date");
                    l && (j = a.jqx.scheduler.utilities.getEndOfDay(j))
                }
                d._editStart = i,
                d._editEnd = j
            }
            if (d.editDialogFields && d.editDialogFields.resourceContainer && d._resources.length > 0) {
                for (var m = new Array, n = 0; n < d._resources.length; n++)
                    m.push(d._resources[n]);
                var o = !0;
                m.length > 10 && (o = !1),
                d.editDialogFields.resource.jqxDropDownList({
                    source: m,
                    selectedIndex: 0,
                    autoDropDownHeight: o
                }),
                b || d.editDialogFields.resource.val(e.resourceId)
            }
            if (d.editDialogFields && d.editDialogFields.repeatContainer && (b && b.rootAppointment ? (d.editDialogFields.repeatContainer.hide(),
            d.editDialogFields.repeatPanel.hide()) : (d.editDialogFields.repeatContainer.show(),
            d.editDialogFields.repeatPanel.show())),
            null == d._editDialog) {
                d._editDialog = null;
                var p = null == b ? d.schedulerLocalization.editDialogCreateTitleString : d.schedulerLocalization.editDialogTitleString
                  , q = a("<div><div>" + p + "</div><div id='dialog" + this.element.id + "'></div></div>");
                a(q).jqxWindow({
                    rtl: d.rtl,
                    zIndex: 99999,
                    autoFocus: !1,
                    autoOpen: !1,
                    animationType: "none",
                    theme: d.theme,
                    width: 530,
                    maxHeight: 800,
                    minHeight: 110,
                    resizable: !1,
                    initContent: function() {
                        d.editDialogFields = {},
                        null == i && null == j && d._editStart && d._editEnd && (i = d._editStart,
                        j = d._editEnd),
                        q.jqxWindow("setTitle", p);
                        var c = a(q.children()[1])
                          , f = a("<div></div>");
                        c.append(f);
                        var g = a("<div class='jqx-scheduler-edit-dialog-label'>" + d.schedulerLocalization.editDialogSubjectString + "</div>").appendTo(f)
                          , h = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(f)
                          , k = a("<input type='text'/>").appendTo(h);
                        k.jqxInput({
                            rtl: d.rtl,
                            width: "100%",
                            height: 25,
                            theme: d.theme
                        }),
                        k.css("box-sizing", "border-box"),
                        d.editDialogFields.subject = k,
                        d.editDialogFields.subjectLabel = g,
                        d.editDialogFields.subjectContainer = f;
                        var l = a("<div></div>");
                        c.append(l);
                        var m = a("<div class='jqx-scheduler-edit-dialog-label'>" + d.schedulerLocalization.editDialogLocationString + "</div>").appendTo(l)
                          , n = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(l)
                          , o = a("<input type='text'/>").appendTo(n);
                        o.jqxInput({
                            rtl: d.rtl,
                            width: "100%",
                            height: 25,
                            theme: d.theme
                        }),
                        o.css("box-sizing", "border-box"),
                        d.editDialogFields.location = o,
                        d.editDialogFields.locationLabel = m,
                        d.editDialogFields.locationContainer = l;
                        var r = a("<div></div>");
                        c.append(r);
                        var s = a("<div class='jqx-scheduler-edit-dialog-label'>" + d.schedulerLocalization.editDialogFromString + "</div>").appendTo(r)
                          , t = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(r)
                          , u = a("<div></div>").appendTo(t)
                          , v = null;
                        if (i)
                            v = i.toDate();
                        else {
                            var w = new Date;
                            w.setHours(9, 0, 0),
                            v = w
                        }
                        u.jqxDateTimeInput({
                            dropDownWidth: 220,
                            dropDownHeight: 220,
                            rtl: d.rtl,
                            localization: d._getDateTimeInputLocalization(),
                            firstDayOfWeek: d.schedulerLocalization.firstDay,
                            todayString: d.schedulerLocalization.todayString,
                            clearString: d.schedulerLocalization.clearString,
                            value: v,
                            formatString: d.editDialogDateTimeFormatString,
                            width: "100%",
                            showTimeButton: !0,
                            height: 25,
                            theme: d.theme
                        }),
                        d.editDialogFields.from = u,
                        d.editDialogFields.fromLabel = s,
                        d.editDialogFields.fromContainer = r;
                        var x = a("<div></div>");
                        c.append(x);
                        var y = a("<div class='jqx-scheduler-edit-dialog-label'>" + d.schedulerLocalization.editDialogToString + "</div>").appendTo(x)
                          , z = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(x)
                          , A = a("<div></div>").appendTo(z)
                          , B = null;
                        if (j)
                            B = j.toDate();
                        else {
                            var w = new Date;
                            w.setHours(10, 0, 0),
                            B = w
                        }
                        A.jqxDateTimeInput({
                            dropDownWidth: 220,
                            dropDownHeight: 220,
                            rtl: d.rtl,
                            localization: d._getDateTimeInputLocalization(),
                            firstDayOfWeek: d.schedulerLocalization.firstDay,
                            todayString: d.schedulerLocalization.todayString,
                            clearString: d.schedulerLocalization.clearString,
                            value: B,
                            formatString: d.editDialogDateTimeFormatString,
                            width: "100%",
                            showTimeButton: !0,
                            height: 25,
                            theme: d.theme
                        }),
                        d.editDialogFields.to = A,
                        d.editDialogFields.toLabel = y,
                        d.editDialogFields.toContainer = x,
                        d._changeFromUser = !0,
                        d.addHandler(u, "change", function(b) {
                            if (d._changeFromUser) {
                                var c = (b.args,
                                b.args.oldValue)
                                  , e = A.val("date")
                                  , f = new a.jqx.date(e) - new a.jqx.date(c);
                                if (f > 0) {
                                    var g = 1e4 * f
                                      , h = a.jqx.timeSpan(g)
                                      , i = new a.jqx.date(b.args.newValue).add(h);
                                    A.val(i.toDate())
                                }
                            }
                        }),
                        d.addHandler(A, "change", function(a) {
                            if (d._changeFromUser) {
                                var b = (a.args,
                                a.args.oldValue)
                                  , c = A.val("date");
                                u.val("date") >= c && A.val(b)
                            }
                        });
                        var C = a("<div></div>");
                        c.append(C);
                        var D = a("<div class='jqx-scheduler-edit-dialog-label'>" + d.schedulerLocalization.editDialogAllDayString + "</div>").appendTo(C)
                          , E = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(C)
                          , F = a("<div style='position:relative;'></div>").appendTo(E);
                        F.jqxCheckBox({
                            rtl: d.rtl,
                            height: 25,
                            width: 25,
                            theme: d.theme
                        }),
                        d.editDialogFields.allDay = F,
                        d.editDialogFields.allDayLabel = D,
                        d.editDialogFields.allDayContainer = C,
                        d.addHandler(C, "change", function(a) {
                            a.args.checked ? (A.jqxDateTimeInput({
                                showTimeButton: !1,
                                formatString: d.editDialogDateFormatString
                            }),
                            u.jqxDateTimeInput({
                                showTimeButton: !1,
                                formatString: d.editDialogDateFormatString
                            })) : (A.jqxDateTimeInput({
                                showTimeButton: !0,
                                formatString: d.editDialogDateTimeFormatString
                            }),
                            u.jqxDateTimeInput({
                                showTimeButton: !0,
                                formatString: d.editDialogDateTimeFormatString
                            }))
                        }),
                        a.jqx.scheduler.utilities.getStartOfDay(i).equals(i) && a.jqx.scheduler.utilities.getEndOfDay(j).equals(j) && d.editDialogFields.allDay.val(!0),
                        (d._views[d._view].type.indexOf("month") >= 0 || i && i.equals(j) || j && j.equals(a.jqx.scheduler.utilities.getEndOfDay(j))) && d.editDialogFields.allDay.val(!0);
                        var G = a("<div></div>");
                        c.append(G);
                        //var H = a("<div class='jqx-scheduler-edit-dialog-label'>" + d.schedulerLocalization.editDialogTimeZoneString + "</div>").appendTo(G)
                        //  , I = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(G)
                        //  , J = a("<div></div>").appendTo(I)
                        //  , K = new Array;
                        //K.push({
                        //    displayName: d.schedulerLocalization.editDialogSelectTimeZoneString,
                        //    id: null
                        //}),
                        //K = K.concat(d.timeZones);
                        //for (var L = 0; L < K.length; L++) {
                        //    var M = K[L]
                        //      , N = M.displayName.indexOf(")");
                        //    if (N >= 0)
                        //        var O = M.displayName.substring(2 + N);
                        //    else
                        //        var O = M.displayName;
                        //    M.searchName = O
                        //}
                        //J.jqxDropDownList({
                        //    rtl: d.rtl,
                        //    placeHolder: d.schedulerLocalization.editDialogSelectTimeZoneString,
                        //    width: "100%",
                        //    height: 25,
                        //    theme: d.theme,
                        //    searchMember: "searchName",
                        //    source: K,
                        //    displayMember: "displayName",
                        //    valueMember: "id"
                        //}),
                        //d.editDialogFields.timeZone = J,
                        //d.editDialogFields.timeZoneLabel = H,
                        //d.editDialogFields.timeZoneContainer = G,
                        d.initRepeatPanels(q, c, j.toDate()),
                        d.editDialogFields && d.editDialogFields.repeatContainer && (d.editAppointment && d.editAppointment.rootAppointment ? (d.editDialogFields.repeatContainer.hide(),
                        d.editDialogFields.repeatPanel.hide()) : (d.editDialogFields.repeatContainer.show(),
                        d.editDialogFields.repeatPanel.show()));
                        var P = a("<div></div>");
                        c.append(P);
                        var Q = a("<div class='jqx-scheduler-edit-dialog-label'>" + d.schedulerLocalization.editDialogDescriptionString + "</div>").appendTo(P)
                          , R = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(P)
                          , S = a("<textarea type='text' resizable='off' style='position:relative; top: 3px; padding:3px;'></textarea>").appendTo(R);
                        S.jqxInput({
                            rtl: d.rtl,
                            height: 40,
                            width: "100%",
                            theme: d.theme
                        }),
                        S.css("box-sizing", "border-box"),
                        d.editDialogFields.description = S,
                        d.editDialogFields.descriptionLabel = Q,
                        d.editDialogFields.descriptionContainer = P;
                        var T = a("<div></div>");
                        c.append(T);
                        var U = a("<div class='jqx-scheduler-edit-dialog-label'>" + d.schedulerLocalization.editDialogColorString + "</div>").appendTo(T)
                          , V = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(T)
                          , W = a("<div></div>").appendTo(V)
                          , X = function(a) {
                            if (a == -1)
                                return "";
                            var b = d.colors[a]
                              , c = ""
                              , c = "";
                            return c += "<div style='margin-top: 1px; float: left; border-radius: 3px; width: 96%; height: 20px; border: none; background:" + b + "; margin-left: 2%;'></div>"
                        }
                          , Y = function(a, b) {
                            if (b < 0)
                                return a.css("top", "4px"),
                                a.css("position", "relative"),
                                a[0].outerHTML;
                            var c = d.colors[b]
                              , e = "";
                            return e += "<div style='margin-top: 2px; float: left; border-radius: 3px; width: 96%; height: 20px; border: none; background:" + c + "; margin-left: 2%;'></div>"
                        };
                        W.jqxDropDownList({
                            rtl: d.rtl,
                            selectedIndex: -1,
                            placeHolder: d.schedulerLocalization.editDialogColorPlaceHolderString,
                            selectionRenderer: Y,
                            renderer: X,
                            source: d.colors,
                            height: 25,
                            width: "100%",
                            theme: d.theme
                        }),
                        d.editDialogFields.color = W,
                        d.editDialogFields.colorLabel = U,
                        d.editDialogFields.colorContainer = T;
                        var Z = a("<div></div>");
                        c.append(Z);
                        //var $ = a("<div class='jqx-scheduler-edit-dialog-label'>" + d.schedulerLocalization.editDialogStatusString + "</div>").appendTo(Z)
                        //  , _ = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(Z)
                        //  , aa = a("<div></div>").appendTo(_);
                        //aa.jqxDropDownList({
                        //    rtl: d.rtl,
                        //    selectedIndex: 2,
                        //    autoDropDownHeight: !0,
                        //    source: d.schedulerLocalization.editDialogStatuses,
                        //    height: 25,
                        //    width: "100%",
                        //    theme: d.theme
                        //}),
                        //d.editDialogFields.status = aa,
                        //d.editDialogFields.statusLabel = $,
                        //d.editDialogFields.statusContainer = Z;
                        var ba = a("<div></div>");
                        c.append(ba);
                        //for (var ca = a("<div class='jqx-scheduler-edit-dialog-label'>" + d.schedulerLocalization.editDialogResourceIdString + "</div>").appendTo(ba), da = a("<div class='jqx-scheduler-edit-dialog-field'></div>").appendTo(ba), ea = a("<div></div>").appendTo(da), fa = new Array, L = 0; L < d._resources.length; L++)
                        //    fa.push(d._resources[L]);
                        //var ga = !0;
                        //fa.length > 10 && (ga = !1),
                        //ea.jqxDropDownList({
                        //    rtl: d.rtl,
                        //    source: fa,
                        //    selectedIndex: 0,
                        //    autoDropDownHeight: ga,
                        //    height: 25,
                        //    width: "100%",
                        //    theme: d.theme
                        //}),
                        //d.editDialogFields.resource = ea,
                        //d.editDialogFields.resourceLabel = ca,
                        //d.editDialogFields.resourceContainer = ba,
                        //0 == fa.length && ba.hide(),
                        //!b && e && d.editDialogFields.resource.val(e.resourceId);
                        var ha = a("<div></div>");
                        c.append(ha);
                        var ia = a("<div style='width:100%;' class='jqx-scheduler-edit-dialog-field'></div>").appendTo(ha)
                          , ja = a("<button style='margin-left: 5px; float:right;'>" + d.schedulerLocalization.editDialogCancelString + "</button>").appendTo(ia)
                          , ka = a("<button style='margin-left: 5px; float:right;'>" + d.schedulerLocalization.editDialogDeleteString + "</button>").appendTo(ia)
                          , la = a("<button style='display: none; margin-left: 5px; float:right;'>" + d.schedulerLocalization.editDialogRepeatDeleteSeriesString + "</button>").appendTo(ia)
                          , ma = a("<button style='display: none; margin-left: 5px; float:right;'>" + d.schedulerLocalization.editDialogRepeatDeleteString + "</button>").appendTo(ia)
                          , na = a("<button style='margin-left: 5px; float:right;'>" + d.schedulerLocalization.editDialogSaveString + "</button>").appendTo(ia)
                          , oa = a("<button style='display: none; margin-left: 5px; float:right;'>" + d.schedulerLocalization.editDialogRepeatSaveSeriesString + "</button>").appendTo(ia)
                          , pa = a("<button style='display: none; margin-left: 5px; float:right;'>" + d.schedulerLocalization.editDialogRepeatSaveString + "</button>").appendTo(ia)
                          , qa = 25;
                        d.isTouchDevice() && (qa = null),
                        ka.jqxButton({
                            rtl: d.rtl,
                            theme: d.theme,
                            height: qa
                        }),
                        la.jqxButton({
                            rtl: d.rtl,
                            theme: d.theme,
                            height: qa
                        }),
                        ma.jqxButton({
                            rtl: d.rtl,
                            theme: d.theme,
                            height: qa
                        }),
                        na.jqxButton({
                            rtl: d.rtl,
                            theme: d.theme,
                            height: qa
                        }),
                        ja.jqxButton({
                            rtl: d.rtl,
                            theme: d.theme,
                            height: qa
                        }),
                        oa.jqxButton({
                            rtl: d.rtl,
                            theme: d.theme,
                            height: qa
                        }),
                        pa.jqxButton({
                            rtl: d.rtl,
                            theme: d.theme,
                            height: qa
                        }),
                        oa.hide(),
                        pa.hide(),
                        d.editDialogFields.saveOccurrenceButton = pa,
                        d.editDialogFields.saveSeriesButton = oa,
                        d.editDialogFields.saveButton = na,
                        d.editDialogFields.cancelButton = ja,
                        d.editDialogFields.deleteButton = ka,
                        d.editDialogFields.deleteSeriesButton = la,
                        d.editDialogFields.deleteExceptionsButton = ma,
                        d.editDialogFields.buttons = ia,
                        d.addHandler(ka, "click", function() {
                            q.jqxWindow("close"),
                            d.overlay.hide(),
                            d._deleteAppointment(d.editAppointment)
                        }),
                        d.addHandler(ja, "click", function() {
                            q.jqxWindow("close"),
                            d.overlay.hide()
                        }),
                        d.addHandler(pa, "click", function() {
                            if (d.editAppointment.isException()) {
                                for (var a = d.editAppointment.rootAppointment ? d.editAppointment.rootAppointment.exceptions : d.editAppointment.exceptions, b = 0; b < a.length; b++)
                                    if (a[b].occurrenceFrom.equals(d.editAppointment.occurrenceFrom)) {
                                        a[b] = d.editAppointment;
                                        break
                                    }
                            } else
                                null != d.editAppointment.rootAppointment ? (d.editAppointment.rootAppointment.exceptions.push(d.editAppointment),
                                d.editAppointment.rootAppointment.recurrenceException.push(d.editAppointment.occurrenceFrom)) : (d.editAppointment.exceptions.push(d.editAppointment),
                                d.editAppointment.recurrenceException.push(d.editAppointment.occurrenceFrom));
                            var c = d._setAppointmentPropertiesFromDialog(d.editAppointment, "occurrence");
                            c && (d.changedAppointments[d.editAppointment.id] = {
                                type: "Update",
                                appointment: d.editAppointment.boundAppointment
                            },
                            d._raiseEvent("appointmentChange", {
                                appointment: d.editAppointment.boundAppointment
                            }),
                            d._renderrows(),
                            q.jqxWindow("close"),
                            d.overlay.hide())
                        }),
                        d.addHandler(oa, "click", function() {
                            var a = d.editAppointment;
                            a.rootAppointment && (a = a.rootAppointment);
                            var b = d._setAppointmentPropertiesFromDialog(a, "series");
                            b && (d.changedAppointments[a.id] = {
                                type: "Update",
                                appointment: a.boundAppointment
                            },
                            d._raiseEvent("appointmentChange", {
                                appointment: a.boundAppointment
                            }),
                            d._renderrows(),
                            q.jqxWindow("close"),
                            d.overlay.hide())
                        }),
                        d.addHandler(na, "click", function() {
                            var b = !0;
                            if (null == d.editAppointment) {
                                var c = new a.jqx.scheduler.appointment;
                                b = d._setAppointmentPropertiesFromDialog(c, "none"),
                                b && d.addAppointment(c)
                            } else
                                d.editAppointment.rootAppointment ? (pa.trigger("click"),
                                b = !1) : d.editAppointment.isRecurrentAppointment() ? (oa.trigger("click"),
                                b = !1) : (b = d._setAppointmentPropertiesFromDialog(d.editAppointment, "none"),
                                b && (d.changedAppointments[d.editAppointment.id] = {
                                    type: "Update",
                                    appointment: d.editAppointment ? d.editAppointment.boundAppointment : null
                                },
                                d._raiseEvent("appointmentChange", {
                                    appointment: d.editAppointment.boundAppointment
                                }),
                                d._renderrows()));
                            b && (q.jqxWindow("close"),
                            d.overlay.hide())
                        }),
                        d.addHandler(q, "close", function(a) {
                            d.overlay.hide(),
                            d.focus(),
                            d.editDialogClose && d.editDialogClose(q, d.editDialogFields, d.editAppointment ? d.editAppointment.boundAppointment : null),
                            d._raiseEvent("editDialogClose", {
                                dialog: q,
                                fields: d.editDialogFields,
                                appointment: d.editAppointment ? d.editAppointment.boundAppointment : null
                            })
                        }),
                        d.editDialogCreate && d.editDialogCreate(q, d.editDialogFields, d.editAppointment),
                        d._raiseEvent("editDialogCreate", {
                            dialog: q,
                            fields: d.editDialogFields,
                            appointment: d.editAppointment ? d.editAppointment.boundAppointment : null
                        }),
                        q.jqxWindow({
                            height: c[0].scrollHeight + 40
                        })
                    }
                }),
                d._editDialog = q
            }
            d.dialogOpenings || (d.dialogOpenings = 0),
            d.removeHandler(d._editDialog, "open"),
            d.addHandler(d._editDialog, "open", function(f) {
                if (d.editDialogOpen && d.editDialogFields) {
                    var g = d.editDialogOpen(q, d.editDialogFields, d.editAppointment ? d.editAppointment.boundAppointment : null);
                    if (1 == g)
                        return
                }
                d.rtl && (d._editDialog.find(".jqx-scheduler-edit-dialog-label").addClass(d.toThemeProperty("jqx-scheduler-edit-dialog-label-rtl")),
                d._editDialog.find(".jqx-scheduler-edit-dialog-field").addClass(d.toThemeProperty("jqx-scheduler-edit-dialog-field-rtl")),
                d.editDialogFields.saveOccurrenceButton.css("float", "left"),
                d.editDialogFields.saveSeriesButton.css("float", "left"),
                d.editDialogFields.saveButton.css("float", "left"),
                d.editDialogFields.cancelButton.css("float", "left"),
                d.editDialogFields.deleteButton.css("float", "left"),
                d.editDialogFields.deleteSeriesButton.css("float", "left"),
                d.editDialogFields.deleteExceptionsButton.css("float", "left"),
                d.editDialogFields.buttons.css("width", "auto"),
                d.editDialogFields.allDay.css("float", "right")),
                setTimeout(function() {
                    var a = d.editAppointment ? d.editAppointment.boundAppointment : null;
                    d.editAppointment && d.editAppointment.rootAppointment && (a = d.editAppointment.rootAppointment.boundAppointment),
                    d._raiseEvent("editDialogOpen", {
                        dialog: d._editDialog,
                        fields: d.editDialogFields,
                        appointment: a
                    })
                });
                var h = function() {
                    setTimeout(function() {
                        c ? d.editDialogFields.deleteButton.focus() : (d.editDialogFields.subject.focus(),
                        d.editDialogFields.subject.select())
                    }, 1)
                };
                return 0 != d.dialogOpenings || b ? void (d.editDialogFields && (d.editDialogFields.subject.val(""),
                d.editDialogFields.location.val(""),
                h(),
                d.editDialogFields.resetExceptions.val(!1),
                d.editDialogFields.description.val(""),
                b || d.editDialogFields.deleteButton.hide(),
                b ? (d.dialogOpenings++,
                d.editDialogFields.deleteButton.show(),
                d.editDialogFields.subject.val(b.subject),
                d.editDialogFields.location.val(b.location),
                d.editDialogFields.description.val(b.description),
                //d.editDialogFields.timeZone.val(b.timeZone),
                d.colors.indexOf(b.borderColor) >= 0 ? d.editDialogFields.color.val(b.borderColor) : d.editDialogFields.color.jqxDropDownList("clearSelection"),
                //d.editDialogFields.allDay.val(b.allDay),
                //d.editDialogFields.resource.val(b.resourceId),
                //d.editDialogFields.status.val(b.status),
                b.timeZone && (b.from = b.from.toTimeZone(b.timeZone),
                b.to = b.to.toTimeZone(b.timeZone)),
                i = b.from,
                j = b.to,
                a.jqx.scheduler.utilities.getStartOfDay(i).equals(i) && a.jqx.scheduler.utilities.getEndOfDay(j).equals(j) && d.editDialogFields.allDay.val(!0),
                d._setAppointmentPropertiesToDialog(b, i, j, e ? e.resourceId : null)) : (d.editDialogFields.saveButton.show(),
                d._setAppointmentPropertiesToDialog(null, i, j, e ? e.resourceId : null)),
                i && j && (d._changeFromUser = !1,
                d.editDialogFields.from.val(i.toDate()),
                d.editDialogFields.to.val(j.toDate()),
                d._changeFromUser = !0),
                d.isTouchDevice() || (d._editDialog.jqxWindow({
                    height: 150
                }),
                d._editDialog.jqxWindow({
                    height: a(d._editDialog.children())[1].scrollHeight + 40
                })))) : (d.dialogOpenings++,
                d.isTouchDevice() || (d._editDialog.jqxWindow({
                    height: 150
                }),
                d._editDialog.jqxWindow({
                    height: a(d._editDialog.children())[1].scrollHeight + 40
                })),
                void h())
            }),
            d.removeHandler(d._editDialog, "keydown"),
            d.addHandler(d._editDialog, "keydown", function(c) {
                if (d.editDialogKeyDown) {
                    var e = d.editDialogKeyDown(q, d.editDialogFields, d.editAppointment, c);
                    if (void 0 != e)
                        return e
                }
                if (13 == c.keyCode) {
                    if (a(document.activeElement).ischildof(d._editDialog)) {
                        if ("button" == document.activeElement.nodeName.toLowerCase())
                            return !0;
                        b ? b.isException() || b.rootAppointment ? d.editDialogFields.saveOccurrenceButton.trigger("click") : b.isRecurrentAppointment() ? d.editDialogFields.saveSeriesButton.trigger("click") : d.editDialogFields.saveButton.trigger("click") : d.editDialogFields.saveButton.trigger("click")
                    }
                } else
                    27 == c.keyCode && d.editDialogFields.cancelButton.trigger("click")
            })
        },
        openMenu: function(b, c) {
            var d = this;
            d.menu || d._initMenu();
            d._views[d._view].type;
            if (d.contextMenu && d.menu) {
                if (d.selectedAppointment ? d.menu.jqxMenu("showItem", "editAppointment") : d.menu.jqxMenu("hideItem", "editAppointment"),
                arguments.length < 2) {
                    if (d.selectedAppointment) {
                        var e = d.selectedAppointment.coord();
                        b = e.left,
                        c = e.top
                    } else if (d.focusedCell)
                        var e = a(d.focusedCell).coord();
                    b = e.left,
                    c = e.top
                }
                d.menu.jqxMenu("open", b, c),
                d._hasOpenedMenu = !0
            }
        },
        closeMenu: function() {
            var a = this;
            a.contextMenu && a.menu && setTimeout(function() {
                a.menu.jqxMenu("close")
            })
        },
        closeDialog: function() {
            var a = this;
            a._editDialog.jqxWindow("close")
        },
        openDialog: function(a, b) {
            var c = this;
            c._views[c._view].type;
            if (c.selectedJQXAppointment) {
                var d = c._initDialog(c.selectedJQXAppointment);
                d !== !1 && c._openDialog(a, b)
            } else
                null == c.getSelection() && (c.focus(),
                c.focusedCell.setAttribute("data-selected", "true"),
                c._lastSelectedCell = c.focusedCell,
                c._updateCellsSelection(c.focusedCell)),
                c._initDialog(),
                c._openDialog(a, b)
        },
        _openDialog: function(a, b) {
            var c = this;
            c._views[c._view].type;
            if (c.editDialog) {
                var d = c.host.coord();
                c.overlay.show(),
                c.overlay.css("z-index", 9999999),
                c.overlay.width(c.host.width()),
                c.overlay.height(c.host.height()),
                c.overlay.offset(d);
                var e = c.isTouchDevice();
                if (e)
                    c._editDialog.jqxWindow("move", d.left, d.top),
                    c._editDialog.jqxWindow({
                        draggable: !1,
                        maxWidth: c.host.width(),
                        maxHeight: c.host.height()
                    }),
                    c._editDialog.jqxWindow({
                        width: c.host.width(),
                        height: c.host.height()
                    }),
                    c._editDialog.jqxWindow("open"),
                    c._editDialog.jqxWindow("move", d.left, d.top);
                else if (void 0 != a && void 0 != b)
                    c._editDialog.jqxWindow("move", a, b),
                    c._editDialog.jqxWindow("open");
                else {
                    var f = c._editDialog.height();
                    f < 400 && (f = 400);
                    var g = d.top + c.host.height() / 2 - f / 2
                      , h = d.left + c.host.width() / 2 - c._editDialog.width() / 2;
                    c._editDialog.jqxWindow("move", h, g),
                    c._editDialog.jqxWindow("open")
                }
                setTimeout(function() {
                    c.overlay.css("z-index", 999)
                }, 50)
            }
        },
        _setAppointmentPropertiesFromDialog: function(b, c) {
            var d = this
              , e = function(b) {
                var e = d._views[d._view].type
                  , f = (d._views[d._view],
                d.editDialogFields.from.val("date"))
                  , g = d.editDialogFields.to.val("date");
                if (f > g)
                    return d.editDialogFields.from.jqxDateTimeInput("focus"),
                    !1;
                if (f == g)
                    return e.indexOf("month") >= 0;
                if ( //b.resourceId = d.editDialogFields.resource.val(),
                //"none" == d.editDialogFields.resourceContainer.css("display") && (b.resourceId = ""),
                b.description = d.editDialogFields.description.val(),
                b.allDay = d.editDialogFields.allDay.val(),
                //b.status = d.editDialogFields.status.val(),
                b.location = d.editDialogFields.location.val(),
                //b.timeZone = d.editDialogFields.timeZone.val(),
                //"" == b.timeZone && "" != d.timeZone && (b.timeZone = d.timeZone),
                b.from = new a.jqx.date(f,b.timeZone),
                b.to = new a.jqx.date(g,b.timeZone),
                d.timeZone ? (b.from = b.from.toTimeZone(d.timeZone),
                b.to = b.to.toTimeZone(d.timeZone)) : (b.from = b.from.toTimeZone(null),
                b.to = b.to.toTimeZone(null)),
                b.allDay && (b.from = a.jqx.scheduler.utilities.getStartOfDay(b.from),
                b.to = a.jqx.scheduler.utilities.getEndOfDay(b.to)),
                d.editDialogFields.color.val()) {
                    var h = d.getAppointmentColors(d.editDialogFields.color.val());
                    b.color = h.color,
                    b.background = h.background,
                    b.borderColor = h.border
                }
                b.subject = d.editDialogFields.subject.val();
                var i = d.editDialogFields.repeat.jqxDropDownList("selectedIndex")
                  , j = new a.jqx.scheduler.recurrencePattern
                  , k = d.editDialogFields.repeatEndPanel;
                if (j.timeZone = d.timeZone,
                j.from = b.from.clone(),
                "occurrence" == c && b.rootAppointment && (j.from = b.rootAppointment.from.clone()),
                d.editDialogFields.resetExceptions.val() && (b.exceptions = new Array,
                b.recurrenceException = new Array),
                k.repeatEndNever.val())
                    j.count = 1e3,
                    j.to = new a.jqx.date(9999,12,31);
                else if (k.repeatEndAfter.val())
                    j.count = k.repeatEndAfterValue.val(),
                    j.to = new a.jqx.date(9999,12,31);
                else if (k.repeatEndOn.val()) {
                    j.count = 1e3;
                    var g = new a.jqx.date(k.repeatEndOnValue.jqxDateTimeInput("getDate"),d.timeZone);
                    j.to = g
                }
                switch (i) {
                case 0:
                default:
                    b.clearRecurrence();
                    break;
                case 1:
                    var l = d.editDialogFields.daily
                      , m = l.repeatDayInterval.val();
                    j.interval = m,
                    j.freq = "daily";
                    break;
                case 2:
                    var n = d.editDialogFields.weekly
                      , m = n.repeatWeekInterval.val()
                      , o = [{
                        Sunday: 0
                    }, {
                        Monday: 1
                    }, {
                        Tuesday: 2
                    }, {
                        Wednesday: 3
                    }, {
                        Thursday: 4
                    }, {
                        Friday: 5
                    }, {
                        Saturday: 6
                    }]
                      , p = n.repeatDays
                      , q = new Array;
                    j.weekDays = {};
                    for (var r = 0; r < 7; r++) {
                        var s = p[r].val();
                        s && (0 == r ? q.push(6) : q.push(r - 1),
                        a.extend(j.weekDays, o[r]))
                    }
                    j.freq = "weekly",
                    j.byweekday = q,
                    j.interval = m;
                    break;
                case 3:
                    var t = d.editDialogFields.monthly
                      , m = t.repeatMonth.val();
                    if (t.repeatMonthDayBool.val())
                        j.day = t.repeatMonthDay.val(),
                        j.bymonthday = new Array,
                        j.bymonthday.push(j.day);
                    else {
                        var u = t.repeatDayOfWeek.jqxDropDownList("selectedIndex")
                          , v = new Array;
                        0 == u ? u = 6 : u--;
                        var w = t.repeatDayOfWeekType.jqxDropDownList("selectedIndex")
                          , x = "";
                        switch (w) {
                        case 0:
                            x = 1;
                            break;
                        case 1:
                            x = 2;
                            break;
                        case 2:
                            x = 3;
                            break;
                        case 3:
                            x = 4;
                            break;
                        case 4:
                            x = -1
                        }
                        v.push([u, x]),
                        j.bynweekday = v
                    }
                    j.freq = "monthly",
                    j.interval = m;
                    break;
                case 4:
                    var y = d.editDialogFields.yearly
                      , m = y.repeatYear.val();
                    if (y.repeatYearBool.val())
                        j.day = y.repeatYearDay.val(),
                        j.month = y.repeatYearMonth.jqxDropDownList("selectedIndex"),
                        j.bymonth = new Array,
                        j.bymonth.push(1 + j.month),
                        j.byyearday = new Array,
                        j.byyearday.push(j.day);
                    else {
                        j.month = y.repeatDayOfWeekMonth.jqxDropDownList("selectedIndex"),
                        j.bymonth = new Array,
                        j.bymonth.push(1 + j.month);
                        var u = y.repeatDayOfWeek.jqxDropDownList("selectedIndex")
                          , v = new Array;
                        0 == u ? u = 6 : u--;
                        var w = y.repeatDayOfWeekType.jqxDropDownList("selectedIndex")
                          , x = "";
                        switch (w) {
                        case 0:
                            x = 1;
                            break;
                        case 1:
                            x = 2;
                            break;
                        case 2:
                            x = 3;
                            break;
                        case 3:
                            x = 4;
                            break;
                        case 4:
                            x = -1
                        }
                        v.push([u, x]),
                        j.bynweekday = v
                    }
                    j.freq = "yearly",
                    j.interval = m
                }
                b.rootAppointment ? b.rootAppointment.recurrencePattern = j : i > 0 && (b.recurrencePattern = j);
                var z = {}
                  , A = {};
                for (var B in d.appointmentDataFields) {
                    var C = d.appointmentDataFields[B]
                      , D = b[B];
                    z[B] = D,
                    "from" != B && "to" != B || (D = D.toDate()),
                    A[C] = D
                }
                return z.originalData = A,
                z.jqxAppointment = b,
                b.boundAppointment = z,
                !0
            }(b);
            return e
        },
        _setAppointmentPropertiesToDialog: function(b, c, d, e) {
            var f = this
              , g = function() {
                var a = f.editDialogFields.repeatEndPanel;
                a.repeatEndNever.jqxRadioButton({
                    checked: !0
                }),
                a.repeatEndAfterValue.val(1),
                a.repeatEndOnValue.val(b);
                var b = d.toDate();
                if (f.editDialogFields.daily) {
                    var c = f.editDialogFields.daily;
                    c.repeatDayInterval.val(1)
                }
                if (f.editDialogFields.weekly) {
                    for (var e = f.editDialogFields.weekly, g = 0; g < e.repeatDays.length; g++)
                        1 == g ? e.repeatDays[g].jqxCheckBox({
                            checked: !0
                        }) : e.repeatDays[g].jqxCheckBox({
                            checked: !1
                        });
                    e.repeatWeekInterval.val(1)
                }
                if (f.editDialogFields.monthly) {
                    var h = f.editDialogFields.monthly;
                    h.repeatDayOfWeek.jqxDropDownList("selectIndex", 1),
                    h.repeatDayOfWeekBool.jqxRadioButton({
                        checked: !1
                    }),
                    h.repeatDayOfWeekType.jqxDropDownList("selectIndex", 0),
                    h.repeatMonthDayBool.jqxRadioButton({
                        checked: !0
                    }),
                    h.repeatMonthDay.val(1),
                    h.repeatMonth.val(1)
                }
                if (f.editDialogFields.yearly) {
                    var i = f.editDialogFields.yearly;
                    i.repeatDayOfWeekMonth.jqxDropDownList("selectIndex", 0),
                    i.repeatDayOfWeekBool.jqxRadioButton({
                        checked: !1
                    }),
                    i.repeatDayOfWeekType.jqxDropDownList("selectIndex", 0),
                    i.repeatDayOfWeek.jqxDropDownList("selectIndex", 1),
                    i.repeatYear.val(1),
                    i.repeatYearMonth.jqxDropDownList("selectIndex", 0),
                    i.repeatYearDay.val(1),
                    i.repeatYearBool.val(!0)
                }
            };
            //if (g(),
            //b && b.isRecurrentAppointment() ? b.rootAppointment ? f.editDialogFields.resetExceptionsContainer.hide() : f.editDialogFields.resetExceptionsContainer.show() : b && (f.editDialogFields.resetExceptionsContainer.hide(),
            //f.editDialogFields.repeat.jqxDropDownList("selectIndex", 0)),
            //!b)
            //    return f.editDialogFields.timeZone.jqxDropDownList("clearSelection"),
                //e ? f.editDialogFields.resource.val(e) : f.editDialogFields.resource.jqxDropDownList("selectIndex", 0),
                f.editDialogFields.allDay.val(!1),
                (f._views[f._view].type.indexOf("month") >= 0 || c && c.equals(d) || d && d.equals(a.jqx.scheduler.utilities.getEndOfDay(d))) && f.editDialogFields.allDay.val(!0),
                f.editDialogFields.color.jqxDropDownList("clearSelection"),
                f.editDialogFields.description.val(""),
                f.editDialogFields.subject.val(""),
                void f.editDialogFields.repeat.jqxDropDownList("selectIndex", 0);
            var h = function(a) {
                var b = a.recurrencePattern;
                if (a.rootAppointment)
                    var b = a.rootAppointment.recurrencePattern;
                if (null != b) {
                    var c = b.freq
                      , d = 0;
                    "daily" == c && (d = 1),
                    "weekly" == c && (d = 2),
                    "monthly" == c && (d = 3),
                    "yearly" == c && (d = 4);
                    var e = f.editDialogFields.repeatEndPanel;
                    switch (1e3 != b.count ? (e.repeatEndAfter.jqxRadioButton({
                        checked: !0
                    }),
                    e.repeatEndAfterValue.val(b.count)) : 9999 != b.to.year() ? (e.repeatEndOn.jqxRadioButton({
                        checked: !0
                    }),
                    e.repeatEndOnValue.val(b.to.toDate())) : e.repeatEndNever.jqxRadioButton({
                        checked: !0
                    }),
                    f.editDialogFields.repeat.jqxDropDownList("selectIndex", d),
                    d) {
                    case 1:
                        var g = b.interval
                          , h = f.editDialogFields.daily;
                        h.repeatDayInterval.val(g);
                        break;
                    case 2:
                        var g = b.interval
                          , i = f.editDialogFields.weekly;
                        i.repeatWeekInterval.val(g);
                        for (var j = b.byweekday, k = 0; k < 7; k++) {
                            var l = i.repeatDays[k];
                            l.val(!1)
                        }
                        for (var k = 0; k < j.length; k++) {
                            var l = j[k];
                            6 == l ? i.repeatDays[0].val(!0) : i.repeatDays[l + 1].val(!0)
                        }
                        break;
                    case 3:
                        var m = f.editDialogFields.monthly;
                        if (m.repeatMonth.val(b.interval),
                        b.bymonthday && b.bymonthday.length > 0)
                            m.repeatMonthDayBool.jqxRadioButton({
                                checked: !0
                            }),
                            m.repeatMonthDay.val(b.day);
                        else {
                            m.repeatDayOfWeekBool.jqxRadioButton({
                                checked: !0
                            });
                            var n = b.bynweekday
                              , o = n[0][0];
                            o++,
                            7 == o && (o = 0),
                            m.repeatDayOfWeek.jqxDropDownList("selectIndex", o);
                            var p = n[0][1]
                              , q = "";
                            switch (p) {
                            case 1:
                                q = 0;
                                break;
                            case 2:
                                q = 1;
                                break;
                            case 3:
                                q = 2;
                                break;
                            case 4:
                                q = 3;
                                break;
                            case -1:
                                q = 4
                            }
                            m.repeatDayOfWeekType.jqxDropDownList("selectIndex", q)
                        }
                        break;
                    case 4:
                        var r = f.editDialogFields.yearly;
                        if (b.byyearday && b.byyearday.length > 0 && (r.repeatYearDay.val(b.byyearday[0]),
                        r.repeatYearBool.val(!0)),
                        b.bymonth && b.bymonth.length > 0 && (r.repeatYearMonth.val(b.bymonth[0]),
                        r.repeatYearBool.val(!0)),
                        !b.byyearday || b.byyearday && 0 == b.byyearday.length) {
                            r.repeatDayOfWeekMonth.val(b.bymonth[0]),
                            r.repeatDayOfWeekBool.jqxRadioButton({
                                checked: !0
                            });
                            var n = b.bynweekday
                              , o = n[0][0];
                            o++,
                            7 == o && (o = 0),
                            r.repeatDayOfWeek.jqxDropDownList("selectIndex", o);
                            var p = n[0][1]
                              , q = "";
                            switch (p) {
                            case 1:
                                q = 0;
                                break;
                            case 2:
                                q = 1;
                                break;
                            case 3:
                                q = 2;
                                break;
                            case 4:
                                q = 3;
                                break;
                            case -1:
                                q = 4
                            }
                            r.repeatDayOfWeekType.jqxDropDownList("selectIndex", q)
                        }
                    }
                }
            };
            h(b)
        }
    }),
    a.jqx.scheduler.column = function(b, c) {
        return this.owner = b,
        this.datafield = null,
        this.displayfield = null,
        this.text = "",
        this.sortable = !0,
        this.editable = !0,
        this.hidden = !1,
        this.hideable = !0,
        this.groupable = !0,
        this.renderer = null,
        this.cellsRenderer = null,
        this.columntype = null,
        this.cellsFormat = "",
        this.align = "center",
        this.cellsalign = "center",
        this.width = "auto",
        this.minwidth = 60,
        this.maxwidth = "auto",
        this.pinned = !1,
        this.visibleindex = -1,
        this.filterable = !0,
        this.filter = null,
        this.resizable = !0,
        this.draggable = !0,
        this.initeditor = null,
        this.createeditor = null,
        this.destroyeditor = null,
        this.geteditorvalue = null,
        this.autoCellHeight = !0,
        this.validation = null,
        this.classname = "",
        this.cellclassname = "",
        this.rendered = null,
        this.exportable = !0,
        this.nullable = !0,
        this.columngroup = null,
        this.columntype = "textbox",
        this.getcolumnproperties = function() {
            return {
                nullable: this.nullable,
                sortable: this.sortable,
                hidden: this.hidden,
                groupable: this.groupable,
                width: this.width,
                align: this.align,
                editable: this.editable,
                minwidth: this.minwidth,
                maxwidth: this.maxwidth,
                resizable: this.resizable,
                datafield: this.datafield,
                text: this.text,
                exportable: this.exportable,
                cellsalign: this.cellsalign,
                pinned: this.pinned,
                cellsFormat: this.cellsFormat,
                columntype: this.columntype,
                classname: this.classname,
                cellclassname: this.cellclassname,
                menu: this.menu
            }
        }
        ,
        this.setproperty = function(a, b) {
            if (this[a]) {
                var c = this[a];
                this[a] = b,
                this.owner._columnPropertyChanged(this, a, b, c)
            } else if (this[a.toLowerCase()]) {
                var c = this[a.toLowerCase()];
                this[a.toLowerCase()] = b,
                this.owner._columnPropertyChanged(this, a.toLowerCase(), b, c)
            }
        }
        ,
        this._initfields = function(c) {
            if (null != c) {
                var d = this;
                if (a.jqx.hasProperty(c, "dataField") && (this.datafield = a.jqx.get(c, "dataField")),
                a.jqx.hasProperty(c, "displayField") ? this.displayfield = a.jqx.get(c, "displayField") : this.displayfield = this.datafield,
                a.jqx.hasProperty(c, "columnType") && (this.columntype = a.jqx.get(c, "columnType")),
                a.jqx.hasProperty(c, "validation") && (this.validation = a.jqx.get(c, "validation")),
                a.jqx.hasProperty(c, "autoCellHeight") && (this.autoCellHeight = a.jqx.get(c, "autoCellHeight")),
                a.jqx.hasProperty(c, "text") ? this.text = a.jqx.get(c, "text") : this.text = this.displayfield,
                a.jqx.hasProperty(c, "sortable") && (this.sortable = a.jqx.get(c, "sortable")),
                a.jqx.hasProperty(c, "hidden") && (this.hidden = a.jqx.get(c, "hidden")),
                a.jqx.hasProperty(c, "groupable") && (this.groupable = a.jqx.get(c, "groupable")),
                a.jqx.hasProperty(c, "renderer") && (this.renderer = a.jqx.get(c, "renderer")),
                a.jqx.hasProperty(c, "align") && (this.align = a.jqx.get(c, "align")),
                a.jqx.hasProperty(c, "cellsAlign") && (this.cellsalign = a.jqx.get(c, "cellsAlign")),
                a.jqx.hasProperty(c, "cellsFormat") && (this.cellsFormat = a.jqx.get(c, "cellsFormat")),
                a.jqx.hasProperty(c, "width") && (this.width = a.jqx.get(c, "width")),
                a.jqx.hasProperty(c, "minWidth") && (this.minwidth = a.jqx.get(c, "minWidth")),
                a.jqx.hasProperty(c, "maxWidth") && (this.maxwidth = a.jqx.get(c, "maxWidth")),
                a.jqx.hasProperty(c, "cellsRenderer") && (this.cellsRenderer = a.jqx.get(c, "cellsRenderer")),
                a.jqx.hasProperty(c, "columnType") && (this.columntype = a.jqx.get(c, "columnType")),
                a.jqx.hasProperty(c, "pinned") && (this.pinned = a.jqx.get(c, "pinned")),
                a.jqx.hasProperty(c, "filterable") && (this.filterable = a.jqx.get(c, "filterable")),
                a.jqx.hasProperty(c, "filter") && (this.filter = a.jqx.get(c, "filter")),
                a.jqx.hasProperty(c, "resizable") && (this.resizable = a.jqx.get(c, "resizable")),
                a.jqx.hasProperty(c, "draggable") && (this.draggable = a.jqx.get(c, "draggable")),
                a.jqx.hasProperty(c, "editable") && (this.editable = a.jqx.get(c, "editable")),
                a.jqx.hasProperty(c, "initEditor") && (this.initeditor = a.jqx.get(c, "initEditor")),
                a.jqx.hasProperty(c, "createEditor") && (this.createeditor = a.jqx.get(c, "createEditor")),
                a.jqx.hasProperty(c, "destroyEditor") && (this.destroyeditor = a.jqx.get(c, "destroyEditor")),
                a.jqx.hasProperty(c, "getEditorValue") && (this.geteditorvalue = a.jqx.get(c, "getEditorValue")),
                a.jqx.hasProperty(c, "className") && (this.classname = a.jqx.get(c, "className")),
                a.jqx.hasProperty(c, "cellClassName") && (this.cellclassname = a.jqx.get(c, "cellClassName")),
                a.jqx.hasProperty(c, "rendered") && (this.rendered = a.jqx.get(c, "rendered")),
                a.jqx.hasProperty(c, "exportable") && (this.exportable = a.jqx.get(c, "exportable")),
                a.jqx.hasProperty(c, "nullable") && (this.nullable = a.jqx.get(c, "nullable")),
                a.jqx.hasProperty(c, "columnGroup") && (this.columngroup = a.jqx.get(c, "columnGroup")),
                !c instanceof String && "string" != typeof c)
                    for (var e in c)
                        if (!d.hasOwnProperty(e) && !d.hasOwnProperty(e.toLowerCase()))
                            throw b.host.remove(),
                            new Error("jqxScheduler: Invalid property name - " + e + ".")
            }
        }
        ,
        this._initfields(c),
        this
    }
    ,
    a.jqx.schedulerDataCollection = function(a) {
        return this.records = new Array,
        this.owner = a,
        this.updating = !1,
        this.beginUpdate = function() {
            this.updating = !0
        }
        ,
        this.resumeupdate = function() {
            this.updating = !1
        }
        ,
        this.clear = function() {
            this.records = new Array
        }
        ,
        this.replace = function(a, b) {
            this.records[a] = b
        }
        ,
        this.isempty = function(a) {
            return void 0 == this.records[a]
        }
        ,
        this.initialize = function(a) {
            a < 1 && (a = 1),
            this.records[a - 1] = -1
        }
        ,
        this.length = function() {
            return this.records.length
        }
        ,
        this.indexOf = function(a) {
            return this.records.indexOf(a)
        }
        ,
        this.add = function(a) {
            return null != a && (this.records[this.records.length] = a,
            !0)
        }
        ,
        this.insertAt = function(a, b) {
            return null != a && void 0 != a && (null != b && (a >= 0 && (a < this.records.length ? (this.records.splice(a, 0, b),
            !0) : this.add(b))))
        }
        ,
        this.remove = function(a) {
            if (null == a || void 0 == a)
                return !1;
            var b = this.records.indexOf(a);
            return b != -1 && (this.records.splice(b, 1),
            !0)
        }
        ,
        this.removeAt = function(a) {
            if (null == a || void 0 == a)
                return !1;
            if (a < 0)
                return !1;
            if (a < this.records.length) {
                this.records[a];
                return this.records.splice(a, 1),
                !0
            }
            return !1
        }
        ,
        this
    }
    ,
    a.jqx.scheduler.dataView = function(b) {
        return this.that = this,
        this.scheduler = null,
        this.records = [],
        this.rows = [],
        this.columns = [],
        this.filters = new Array,
        this.pagesize = 0,
        this.pagenum = 0,
        this.source = null,
        this.databind = function(c, d) {
            var e = this;
            if (a.isArray(c))
                return void e.update(c);
            var f = !!c._source
              , g = null;
            this._sortData = null,
            this._sortHierarchyData = null,
            f ? (g = c,
            c = c._source) : g = new a.jqx.dataAdapter(c,{
                autoBind: !1
            });
            var h = function(a) {
                g.recordids = [],
                g.records = new Array,
                g.cachedrecords = new Array,
                g.originaldata = new Array,
                g._options.totalrecords = a.totalrecords,
                g._options.originaldata = a.originaldata,
                g._options.recordids = a.recordids,
                g._options.cachedrecords = new Array,
                g._options.pagenum = a.pagenum,
                g._options.pageable = a.pageable,
                void 0 != c.type && (g._options.type = c.type),
                void 0 != c.formatdata && (g._options.formatData = c.formatdata),
                void 0 != c.contenttype && (g._options.contentType = c.contenttype),
                void 0 != c.async && (g._options.async = c.async),
                void 0 != c.updaterow && (g._options.updaterow = c.updaterow),
                void 0 != c.addrow && (g._options.addrow = c.addrow),
                void 0 != c.deleterow && (g._options.deleterow = c.deleterow),
                0 == a.pagesize && (a.pagesize = 10),
                g._options.pagesize = a.pagesize
            }
              , i = function(a) {
                a.originaldata = g.originaldata,
                a.records = g.records,
                a.hierarchy = g.hierarchy,
                a.scheduler.serverProcessing || (a._sortData = null,
                a._sortfield = null,
                a._filteredData = null,
                a._sortHierarchyData = null),
                a.hierarchy || (a.hierarchy = new Array,
                g.hierarchy = new Array),
                g._source.totalrecords ? a.totalrecords = g._source.totalrecords : g._source.totalRecords ? a.totalrecords = g._source.totalRecords : 0 !== a.hierarchy.length ? a.totalrecords = a.hierarchy.length : a.totalrecords = a.records.length,
                a.cachedrecords = g.cachedrecords
            };
            h(this),
            this.source = c,
            void 0 !== d && (uniqueId = d);
            var e = this;
            switch (c.datatype) {
            case "local":
            case "array":
            default:
                if (null == c.localdata && (c.localdata = []),
                null != c.localdata) {
                    g.unbindBindingUpdate(b + e.scheduler.element.id),
                    (!e.scheduler.autoBind && e.scheduler.isInitialized || e.scheduler.autoBind) && g.dataBind();
                    var j = function() {
                        i(e),
                        e.update(g.records)
                    };
                    j(),
                    g.bindBindingUpdate(b + e.scheduler.element.id, j)
                }
                break;
            case "ics":
            case "json":
            case "jsonp":
            case "xml":
            case "xhtml":
            case "script":
            case "text":
            case "csv":
            case "tab":
                if (null != c.localdata) {
                    g.unbindBindingUpdate(b + e.scheduler.element.id),
                    (!e.scheduler.autoBind && e.scheduler.isInitialized || e.scheduler.autoBind) && g.dataBind();
                    var j = function(a) {
                        i(e),
                        e.update(g.records)
                    };
                    return j(),
                    void g.bindBindingUpdate(b + e.scheduler.element.id, j)
                }
                var k = {}
                  , l = g._options.data;
                g._options.data ? a.extend(g._options.data, k) : (c.data && a.extend(k, c.data),
                g._options.data = k);
                var j = function() {
                    var b = a.jqx.browser.msie && a.jqx.browser.version < 9
                      , c = function() {
                        i(e),
                        e.update(g.records)
                    };
                    if (b)
                        try {
                            c()
                        } catch (a) {}
                    else
                        c()
                };
                g.unbindDownloadComplete(b + e.scheduler.element.id),
                g.bindDownloadComplete(b + e.scheduler.element.id, j),
                g._source.loaderror = function(a, b, c) {
                    j()
                }
                ,
                (!e.scheduler.autoBind && e.scheduler.isInitialized || e.scheduler.autoBind) && g.dataBind(),
                g._options.data = l
            }
        }
        ,
        this.addFilter = function(a, b) {
            this._sortData = null,
            this._sortHierarchyData = null;
            for (var c = -1, d = 0; d < this.filters.length; d++)
                if (this.filters[d].datafield == a) {
                    c = d;
                    break
                }
            c == -1 ? this.filters[this.filters.length] = {
                filter: b,
                datafield: a
            } : this.filters[c] = {
                filter: b,
                datafield: a
            }
        }
        ,
        this.removeFilter = function(a) {
            this._sortData = null,
            this._sortHierarchyData = null;
            for (var b = 0; b < this.filters.length; b++)
                if (this.filters[b].datafield == a) {
                    this.filters.splice(b, 1);
                    break
                }
        }
        ,
        this._compare = function(b, c, d) {
            var b = b
              , c = c;
            if (void 0 === b && (b = null),
            void 0 === c && (c = null),
            null === b && null === c)
                return 0;
            if (null === b && null !== c)
                return 1;
            if (null !== b && null === c)
                return 1;
            if (b = b.toString(),
            c = c.toString(),
            a.jqx.dataFormat)
                if (d && "" != d)
                    switch (d) {
                    case "number":
                    case "int":
                    case "float":
                        return b < c ? -1 : b > c ? 1 : 0;
                    case "date":
                    case "time":
                        return b < c ? -1 : b > c ? 1 : 0;
                    case "string":
                    case "text":
                        b = String(b).toLowerCase(),
                        c = String(c).toLowerCase()
                    }
                else {
                    if (a.jqx.dataFormat.isNumber(b) && a.jqx.dataFormat.isNumber(c))
                        return b < c ? -1 : b > c ? 1 : 0;
                    if (a.jqx.dataFormat.isDate(b) && a.jqx.dataFormat.isDate(c))
                        return b < c ? -1 : b > c ? 1 : 0;
                    a.jqx.dataFormat.isNumber(b) || a.jqx.dataFormat.isNumber(c) || (b = String(b).toLowerCase(),
                    c = String(c).toLowerCase())
                }
            try {
                if (b < c)
                    return -1;
                if (b > c)
                    return 1
            } catch (a) {}
            return 0
        }
        ,
        this._equals = function(a, b) {
            return 0 === this._compare(a, b)
        }
        ,
        this.evaluate = function(a) {
            if (this.scheduler.serverProcessing)
                return a;
            var b = new Array;
            if (this.filters.length) {
                var c = new Array
                  , d = function(a, b) {
                    for (var d = 0; d < a.length; d++) {
                        var e = a[d];
                        e._visible = !0;
                        for (var f = void 0, g = 0; g < this.filters.length; g++) {
                            var h = this.filters[g].filter
                              , i = e[this.filters[g].datafield]
                              , j = h.evaluate(i);
                            f = void 0 == f ? j : "or" == h.operator ? f || j : f && j
                        }
                        e._visible = !1,
                        (f || e.aggregate) && (e._visible = !0,
                        b.push(e),
                        c[e.uid] = e)
                    }
                };
                if (this._filteredData)
                    this.rows = this._filteredData;
                else {
                    if (this.source.hierarchy || this.scheduler.source.hierarchy && this.scheduler.source.hierarchy.length > 0) {
                        var e = new Array
                          , f = function(a, b) {
                            for (var c = 0; c < b.length; c++) {
                                var d = b[c];
                                e.push(d),
                                d.records && d.records.length > 0 && f(d, d.records)
                            }
                        };
                        f(null, a),
                        d.call(this, e, b);
                        for (var g = 0; g < b.length; g++)
                            for (var h = b[g]; h.parent; ) {
                                var i = h.parent;
                                c[i.uid] || (i._visible = !0,
                                c[i.uid] = i),
                                h = i
                            }
                        b = a
                    } else
                        d.call(this, a, b);
                    this._filteredData = b,
                    this.rows = b
                }
            } else
                this.rows = a;
            return this.rows
        }
        ,
        this.getid = function(b, c, d) {
            if (a(b, c).length > 0)
                return a(b, c).text();
            if (this.rows && "" != b && void 0 != b && this.rows.length > 0) {
                var e = this.rows[this.rows.length - 1][b];
                null == e && (e = null);
                for (var f = 1; f <= 100; f++) {
                    var g = this.scheduler.appointmentsByKey[f + e];
                    if (!g) {
                        if (this.scheduler && this.scheduler.treeGrid && this.scheduler.treescheduler.virtualModeCreateRecords) {
                            var g = this.scheduler.appointmentsByKey["jqx" + e + f];
                            if (g)
                                continue;
                            return "jqx" + e + f
                        }
                        return e + f
                    }
                }
            }
            if (void 0 != b && b.toString().length > 0) {
                var h = a(c).attr(b);
                if (null != h && h.toString().length > 0)
                    return this.scheduler && this.scheduler.treeGrid && this.scheduler.treescheduler.virtualModeCreateRecords ? "jqx" + h : h
            }
            if (this.rows && this.rows.length > 0) {
                var g = this.scheduler.appointmentsByKey[d];
                if (g) {
                    var e = this.rows[this.rows.length - 1][b];
                    null == e && (e = "");
                    for (var f = 1; f <= 1e3; f++) {
                        var g = this.scheduler.appointmentsByKey[f + e];
                        if (!g) {
                            if (this.scheduler && this.scheduler.treeGrid && this.scheduler.treescheduler.virtualModeCreateRecords) {
                                var g = this.scheduler.appointmentsByKey["jqx" + e + f];
                                if (g)
                                    continue;
                                return "jqx" + e + f
                            }
                            return e + f
                        }
                    }
                }
            }
            if (this.scheduler && this.scheduler.treeGrid && this.scheduler.treescheduler.virtualModeCreateRecords) {
                var g = this.scheduler.appointmentsByKey["jqx" + d];
                if (!g)
                    return "jqx" + d;
                for (var f = d + 1; f <= 100; f++) {
                    var g = this.scheduler.appointmentsByKey["jqx" + f];
                    if (!g) {
                        var g = this.scheduler.appointmentsByKey["jqx" + f];
                        if (g)
                            continue;
                        return "jqx" + f
                    }
                }
            }
            return d
        }
        ,
        this.generatekey = function() {
            var a = function() {
                return 16 * (1 + Math.random()) | 0
            };
            return "" + a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a()
        }
        ,
        this
    }
}(jqxBaseFramework);
