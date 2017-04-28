/*
jQWidgets v4.5.1 (2017-April)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(a) {
    a.jqx.jqxWidget("jqxCalendar", "", {}),
    a.extend(a.jqx._jqxCalendar.prototype, {
        defineInstance: function() {
            var b = {
                disabled: !1,
                restrictedDates: new Array,
                multipleMonthRows: 1,
                multipleMonthColumns: 1,
                minDate: a.jqx._jqxDateTimeInput.getDateTime(new Date),
                maxDate: a.jqx._jqxDateTimeInput.getDateTime(new Date),
                min: new Date(1900,0,1),
                max: new Date(2100,0,1),
                navigationDelay: 400,
                stepMonths: 1,
                width: null,
                height: null,
                value: a.jqx._jqxDateTimeInput.getDateTime(new Date),
                firstDayOfWeek: 0,
                showWeekNumbers: !1,
                showDayNames: !0,
                enableWeekend: !1,
                enableOtherMonthDays: !0,
                showOtherMonthDays: !0,
                rowHeaderWidth: 25,
                columnHeaderHeight: 20,
                titleHeight: 30,
                dayNameFormat: "firstTwoLetters",
                monthNameFormat: "default",
                titleFormat: ["MMMM yyyy", "yyyy", "yyyy", "yyyy"],
                enableViews: !0,
                readOnly: !1,
                culture: "default",
                enableFastNavigation: !0,
                enableHover: !0,
                enableAutoNavigation: !0,
                enableTooltips: !1,
                backText: "Back",
                forwardText: "Forward",
                specialDates: new Array,
                keyboardNavigation: !0,
                selectionMode: "default",
                selectableDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                todayString: "Today",
                clearString: "Clear",
                showFooter: !1,
                selection: {
                    from: null,
                    to: null
                },
                canRender: !0,
                _checkForHiddenParent: !0,
                height: null,
                rtl: !1,
                view: "month",
                views: ["month", "year", "decade"],
                changing: null,
                change: null,
                localization: {
                    backString: "Back",
                    forwardString: "Forward",
                    todayString: "Today",
                    clearString: "Clear",
                    calendar: {
                        name: "Gregorian_USEnglish",
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
                            ISO: "yyyy-MM-dd hh:mm:ss"
                        }
                    }
                },
                events: ["backButtonClick", "nextButtonClick", "valuechanged", "cellMouseDown", "cellMouseUp", "cellSelected", "cellUnselected", "change", "viewChange"]
            };
            return this === a.jqx._jqxCalendar.prototype ? b : (a.extend(!0, this, b),
            this.minDate._setYear(1900),
            this.minDate._setMonth(1),
            this.minDate._setDay(1),
            this.minDate._setHours(0),
            this.minDate._setMinutes(0),
            this.minDate._setSeconds(0),
            this.minDate._setMilliseconds(0),
            this.maxDate._setYear(2100),
            this.maxDate._setMonth(1),
            this.maxDate._setDay(1),
            this.maxDate._setHours(0),
            this.maxDate._setMinutes(0),
            this.maxDate._setSeconds(0),
            this.maxDate._setMilliseconds(0),
            this.value._setHours(0),
            this.value._setMinutes(0),
            this.value._setSeconds(0),
            this.value._setMilliseconds(0),
            b)
        },
        _createFromInput: function(b) {
            var c = this;
            if ("input" == c.element.nodeName.toLowerCase()) {
                c.field = c.element,
                c.field.className && (c._className = c.field.className);
                var d = {
                    title: c.field.title
                };
                if (c.field.value && (d.value = c.field.value),
                c.field.checked && (d.checked = !0),
                c.field.id.length ? d.id = c.field.id.replace(/[^\w]/g, "_") + "_" + b : d.id = a.jqx.utilities.createId() + "_" + b,
                c.field.getAttribute("min")) {
                    var e = new Date(c.field.getAttribute("min"));
                    "Invalid Date" != e && (c.min = e)
                }
                if (c.field.getAttribute("max")) {
                    var f = new Date(c.field.getAttribute("max"));
                    "Invalid Date" != f && (c.max = f)
                }
                var g = a("<div></div>", d);
                g[0].style.cssText = c.field.style.cssText,
                c.width || (c.width = a(c.field).width()),
                c.height || (c.height = a(c.field).outerHeight()),
                a(c.field).hide().after(g);
                var h = c.host.data();
                if (c.host = g,
                c.host.data(h),
                c.element = g[0],
                c.element.id = c.field.id,
                c.field.id = d.id,
                c._className && (c.host.addClass(c._className),
                a(c.field).removeClass(c._className)),
                c.field.tabIndex) {
                    var i = c.field.tabIndex;
                    c.field.tabIndex = -1,
                    c.element.tabIndex = i
                }
            }
        },
        createInstance: function(b) {
            var c = this;
            c._createFromInput("jqxCalendar"),
            this.setCalendarSize(),
            "" === this.element.id && (this.element.id = a.jqx.utilities.createId()),
            "date" == a.type(this.value) && (this.value = a.jqx._jqxDateTimeInput.getDateTime(this.value)),
            this.element.innerHTML = "",
            this.host.attr("data-role", "calendar");
            var d = (this.element.id,
            this);
            if (this.propertyChangeMap.width = function(a, b, c, e) {
                d.setCalendarSize()
            }
            ,
            this.propertyChangeMap.height = function(a, b, c, e) {
                d.setCalendarSize()
            }
            ,
            a.global && a.global.preferCulture(this.culture),
            "default" != this.culture) {
                if (a.global)
                    a.global.preferCulture(this.culture),
                    this.localization.calendar = a.global.culture.calendar;
                else if (Globalize) {
                    var e = Globalize.culture(this.culture);
                    this.localization.calendar = e.calendar
                }
                this.firstDayOfWeek = this.localization.calendar.firstDay
            }
            "Back" != this.localization.backString && (this.backText = this.localization.backString),
            "Forward" != this.localization.forwardString && (this.forwardText = this.localization.forwardString),
            "Today" != this.localization.todayString && this.localization.todayString && (this.todayString = this.localization.todayString),
            "Clear" != this.localization.clearString && this.localization.clearString && (this.clearString = this.localization.clearString),
            this.localization.calendar && void 0 != this.localization.calendar.firstDay && "default" != this.culture && (this.firstDayOfWeek = this.localization.calendar.firstDay),
            this.setMaxDate(this.max, !1),
            this.setMinDate(this.min, !1),
            this.host.attr("tabIndex") || this.host.attr("tabIndex", 0),
            this.host.css("outline", "none"),
            this.host.addClass(this.toThemeProperty("jqx-calendar")),
            this.host.addClass(this.toThemeProperty("jqx-widget")),
            this.host.addClass(this.toThemeProperty("jqx-widget-content")),
            this.host.addClass(this.toThemeProperty("jqx-rc-all")),
            this._addInput(),
            this.views.indexOf("month") == -1 && (this.view = "year"),
            this.views.indexOf("year") == -1 && this.views.indexOf("month") == -1 && (this.view = "decade"),
            this.addHandler(this.host, "keydown", function(a) {
                var b = !0;
                return d.keyboardNavigation && void 0 != d._handleKey && (b = d._handleKey(a),
                b || (a.stopPropagation && a.stopPropagation(),
                a.preventDefault && a.preventDefault())),
                b
            });
            var f = !1
              , g = this
              , h = !1;
            null != d.width && d.width.toString().indexOf("%") != -1 && (h = !0),
            null != d.height && d.height.toString().indexOf("%") != -1 && (h = !0),
            a.jqx.utilities.resize(this.host, function() {
                var a = g.host.find("#View" + d.element.id);
                f ? g.refreshTitle(a) : (f = !0,
                g.render()),
                h && (d.refreshTimer && clearTimeout(d.refreshTimer),
                d.refreshTimer = setTimeout(function() {
                    d.refreshControl()
                }, 1))
            }, !1, this._checkForHiddenParent);
            this.propertyChangeMap.disabled = function(a, b, c, e) {
                e ? a.host.addClass(d.toThemeProperty("jqx-fill-state-disabled")) : a.host.removeClass(d.toThemeProperty("jqx-fill-state-disabled")),
                d.refreshControl()
            }
        },
        _addInput: function() {
            var b = this.host.attr("name");
            this.input = a("<input type='hidden'/>"),
            this.host.append(this.input),
            b && this.input.attr("name", b),
            this.input.val(this.getDate().toString())
        },
        setCalendarSize: function() {
            null != this.width && this.width.toString().indexOf("px") != -1 ? this.host.width(this.width) : void 0 == this.width || isNaN(this.width) || this.host.width(this.width),
            null != this.width && this.width.toString().indexOf("%") != -1 && this.host.css("width", this.width),
            null != this.height && this.height.toString().indexOf("px") != -1 ? this.host.height(this.height) : void 0 == this.height || isNaN(this.height) || this.host.height(this.height),
            null != this.height && this.height.toString().indexOf("%") != -1 && this.host.css("height", this.height)
        },
        _getYearAndMonthPart: function(a) {
            if (!a)
                return new Date(1900,0,1);
            var b = new Date(a.getFullYear(),a.getMonth(),1);
            return b
        },
        _handleKey: function(b) {
            if (this.readOnly)
                return !0;
            var c = b.keyCode
              , d = this._getSelectedDate();
            if (void 0 == d) {
                if ("month" != this.view || 37 != c && 38 != c && 39 != c && 40 != c)
                    return !0;
                this.selectedDate = new Date(this.value.year,this.value.month - 1,1),
                this._selectDate(this.selectedDate, "key"),
                d = this.selectedDate
            }
            if (b.altKey)
                return !0;
            if (this._animating)
                return !1;
            if ("month" != this.view && 13 == c) {
                var e = this._getSelectedCell();
                this._setDateAndSwitchViews(e, b, "keyboard")
            }
            if ("year" == this.view) {
                var f = d.getMonth()
                  , g = this._getYearAndMonthPart(this.getMinDate())
                  , h = this._getYearAndMonthPart(this.getMaxDate());
                switch (c) {
                case 37:
                    if (0 == f) {
                        var i = new Date(d.getFullYear() - 1,11,1);
                        i >= g ? (this.selectedDate = i,
                        this.navigateBackward()) : this.selectedDate != g && (this.selectedDate = g,
                        this.navigateBackward())
                    } else {
                        var i = new Date(d.getFullYear(),f - 1,1);
                        i >= g && this._selectDate(i, "key")
                    }
                    return !1;
                case 38:
                    var i = new Date(d.getFullYear(),f - 4,1);
                    return i < g && (i = g),
                    f - 4 < 0 ? (this.selectedDate = i,
                    this.navigateBackward()) : this._selectDate(i, "key"),
                    !1;
                case 40:
                    var i = new Date(d.getFullYear(),f + 4,1);
                    return i > h && (i = h),
                    f + 4 > 11 ? (this.selectedDate = i,
                    this.navigateForward()) : this._selectDate(i, "key"),
                    !1;
                case 39:
                    if (11 == f) {
                        var i = new Date(d.getFullYear() + 1,0,1);
                        i <= h ? (this.selectedDate = i,
                        this.navigateForward()) : this.selectedDate != h && (this.selectedDate = h,
                        this.navigateForward())
                    } else {
                        var i = new Date(d.getFullYear(),f + 1,1);
                        i <= h && this._selectDate(i, "key")
                    }
                    return !1
                }
                return !0
            }
            if ("decade" == this.view) {
                var j = this._renderStartDate.getFullYear()
                  , k = this._renderEndDate.getFullYear()
                  , l = d.getFullYear()
                  , m = this.getMinDate().getFullYear()
                  , n = this.getMaxDate().getFullYear();
                switch (c) {
                case 37:
                    return l - 1 >= m && (l <= j ? (this.selectedDate = new Date(l - 1,d.getMonth(),1),
                    this.navigateBackward()) : this._selectDate(new Date(l - 1,d.getMonth(),1), "key")),
                    !1;
                case 38:
                    var o = l - 4;
                    return l - 4 < m && (o = m),
                    o < j ? (this.selectedDate = new Date(o,d.getMonth(),1),
                    this.navigateBackward()) : this._selectDate(new Date(o,d.getMonth(),1), "key"),
                    !1;
                case 40:
                    var o = l + 4;
                    return o > n && (o = n),
                    o > k ? (this.selectedDate = new Date(o,d.getMonth(),1),
                    this.navigateForward()) : this._selectDate(new Date(o,d.getMonth(),1), "key"),
                    !1;
                case 39:
                    return l + 1 <= n && (l == k ? (this.selectedDate = new Date(l + 1,d.getMonth(),1),
                    this.navigateForward()) : this._selectDate(new Date(l + 1,d.getMonth(),1), "key")),
                    !1
                }
                return !0
            }
            var p = new a.jqx._jqxDateTimeInput.getDateTime(d)
              , q = this.getViewStart()
              , r = this.getViewEnd()
              , s = a.data(this.element, "View" + this.element.id);
            if (void 0 == s || null == s)
                return !0;
            if (36 == c)
                return p._setDay(1),
                !this._isDisabled(p.dateTime) && (this._selectDate(p.dateTime, "key"),
                !1);
            if (35 == c) {
                var t = this.value._daysInMonth(this.value.year, this.value.month);
                return p._setDay(t),
                !this._isDisabled(p.dateTime) && (this._selectDate(p.dateTime, "key"),
                !1)
            }
            var u = 1;
            if (b.ctrlKey && (u = 12),
            34 == c) {
                var v = this.navigateForward(u);
                if (v) {
                    if (p._addMonths(u),
                    this._isDisabled(p.dateTime))
                        return !1;
                    this._selectDate(p.dateTime, "key")
                }
                return !1
            }
            if (33 == c) {
                var v = this.navigateBackward(u);
                if (v) {
                    if (p._addMonths(-u),
                    this._isDisabled(p.dateTime))
                        return !1;
                    this._selectDate(p.dateTime, "key")
                }
                return !1
            }
            if (38 == c) {
                if (p._addDays(-7),
                p.dateTime < this.getMinDate())
                    return !1;
                if (p.dateTime < q) {
                    var v = this.navigateBackward();
                    if (!v)
                        return !1
                }
                if (this._isDisabled(p.dateTime))
                    return !1;
                this._selectDate(p.dateTime, "key");
                for (var w = 0; w < s.cells.length; w++) {
                    var e = s.cells[w]
                      , x = e.getDate();
                    if (e.isOtherMonth && e.isSelected && x <= p.dateTime) {
                        this.value.day = x.getDate(),
                        this.navigateBackward(),
                        this._selectDate(p.dateTime, "key");
                        break
                    }
                }
                return !1
            }
            if (40 == c) {
                if (p._addDays(7),
                p.dateTime > this.getMaxDate())
                    return !1;
                if (p.dateTime > r) {
                    var v = this.navigateForward();
                    if (!v)
                        return !1
                }
                if (this._isDisabled(p.dateTime))
                    return !1;
                this._selectDate(p.dateTime, "key");
                for (var w = 0; w < s.cells.length; w++) {
                    var e = s.cells[w]
                      , x = e.getDate();
                    if (e.isOtherMonth && e.isSelected && x >= p.dateTime) {
                        this.value.day = x.getDate(),
                        this.navigateForward(),
                        this._selectDate(p.dateTime, "key");
                        break
                    }
                }
                return !1
            }
            if (37 == c) {
                if (p._addDays(-1),
                p.dateTime < this.getMinDate())
                    return !1;
                if (p.dateTime < q) {
                    var v = this.navigateBackward();
                    if (!v)
                        return !1
                }
                if (this._isDisabled(p.dateTime))
                    return !1;
                this._selectDate(p.dateTime, "key");
                for (var w = 0; w < s.cells.length; w++) {
                    var e = s.cells[w]
                      , x = e.getDate();
                    if (e.isOtherMonth && e.isSelected && x <= p.dateTime) {
                        if (p.dateTime < this.getMinDate() || p.dateTime > this.getMaxDate())
                            return !1;
                        if (this._isDisabled(p.dateTime))
                            return !1;
                        this.navigateBackward(),
                        this._selectDate(p.dateTime, "key");
                        break
                    }
                }
                return !1
            }
            if (39 == c) {
                if (p._addDays(1),
                p.dateTime > this.getMaxDate())
                    return !1;
                if (p.dateTime > r) {
                    var v = this.navigateForward();
                    if (!v)
                        return !1
                }
                if (this._isDisabled(p.dateTime))
                    return !1;
                this._selectDate(p.dateTime, "key");
                for (var w = 0; w < s.cells.length; w++) {
                    var e = s.cells[w]
                      , x = e.getDate();
                    if (e.isOtherMonth && e.isSelected && x >= p.dateTime) {
                        if (p.dateTime < this.getMinDate() || p.dateTime > this.getMaxDate())
                            return !1;
                        this.navigateForward(),
                        this._selectDate(p.dateTime, "key");
                        break
                    }
                }
                return !1
            }
            return !0
        },
        render: function() {
            if (this.canRender) {
                this.host.children().remove();
                var a = this._renderSingleCalendar("View" + this.element.id);
                this.host.append(a)
            }
        },
        addSpecialDate: function(a, b, c) {
            if (1 == this.multipleMonthRows && 1 == this.multipleMonthColumns) {
                var d = this.specialDates.length;
                this.specialDates[d] = {
                    Date: a,
                    Class: b,
                    Tooltip: c
                },
                this.refreshControl()
            }
        },
        refresh: function(a) {
            this.render()
        },
        invalidate: function() {
            this.refreshControl()
        },
        refreshControl: function() {
            1 == this.multipleMonthRows && 1 == this.multipleMonthColumns && this.refreshSingleCalendar("View" + this.element.id, null)
        },
        getViewStart: function() {
            var a = this.getVisibleDate()
              , b = this.getFirstDayOfWeek(a);
            return b.dateTime
        },
        getViewEnd: function() {
            var b = this.getViewStart()
              , c = new a.jqx._jqxDateTimeInput.getDateTime(b);
            return c._addDays(41),
            c.dateTime
        },
        refreshSingleCalendar: function(a, b) {
            if (this.canRender) {
                var c = this.host.find("#" + a)
                  , d = this.getVisibleDate()
                  , e = this.getFirstDayOfWeek(d);
                this.refreshCalendarCells(c, e, a),
                this.refreshTitle(c),
                this.refreshRowHeader(c, a),
                void 0 != this.selectedDate && this._selectDate(this.selectedDate);
                var f = this.host.height() - this.titleHeight - this.columnHeaderHeight;
                this.showDayNames || (f = this.host.height() - this.titleHeight),
                this.showFooter && (f -= 20);
                var g = c.find("#cellsTable" + a)
                  , h = c.find("#calendarRowHeader" + a);
                g.height(f),
                h.height(f)
            }
        },
        refreshRowHeader: function(b, c) {
            if (this.showWeekNumbers) {
                var d = this.getVisibleDate()
                  , e = this.getFirstDayOfWeek(d)
                  , f = (e.dayOfWeek,
                this.getWeekOfYear(e))
                  , g = new a.jqx._jqxDateTimeInput.getDateTime(new Date(e.dateTime));
                g._addDays(5),
                g.dayOfWeek = g.dateTime.getDay();
                var h = (this.getWeekOfYear(g),
                this.rowHeader.find("table"));
                h.width(this.rowHeaderWidth);
                for (var i = e, j = new Array, k = 0; k < 6; k++) {
                    var l = (f.toString(),
                    new a.jqx._jqxCalendar.cell(i.dateTime))
                      , m = k + 1 + this.element.id
                      , n = a(h[0].rows[k].cells[0]);
                    l.element = n,
                    l.row = k,
                    l.column = 0;
                    var o = n.find("#headerCellContent" + m);
                    o.addClass(this.toThemeProperty("jqx-calendar-row-cell")),
                    o[0].innerHTML = f,
                    j[k] = l,
                    i = new a.jqx._jqxDateTimeInput.getDateTime(new Date(i._addWeeks(1))),
                    f = this.getWeekOfYear(i)
                }
                var p = a.data(this.element, b[0].id);
                p.rowCells = j,
                this._refreshOtherMonthRows(p, c)
            }
        },
        _refreshOtherMonthRows: function(a, b) {
            if (!this.showOtherMonthDays) {
                this._displayLastRow(!0, b),
                this._displayFirstRow(!0, b);
                for (var c = !1, d = !1, e = 0; e < a.cells.length; e++) {
                    var f = a.cells[e];
                    f.isVisible && e < 7 ? c = !0 : f.isVisible && e >= a.cells.length - 7 && (d = !0)
                }
                c || this._displayFirstRow(!1, b),
                d || this._displayLastRow(!1, b)
            }
        },
        _displayLastRow: function(b, c) {
            var d = this.host.find("#" + c)
              , e = d.find("#calendarRowHeader" + d[0].id).find("table")
              , f = null;
            if (this.showWeekNumbers && e[0].cells)
                var f = a(e[0].rows[5]);
            var g = a(d.find("#cellTable" + d[0].id)[0].rows[5]);
            b ? (this.showWeekNumbers && f && f.css("display", "table-row"),
            g.css("display", "table-row")) : (this.showWeekNumbers && f && f.css("display", "none"),
            g.css("display", "none"))
        },
        _displayFirstRow: function(b, c) {
            var d = this.host.find("#" + c)
              , e = d.find("#calendarRowHeader" + d[0].id).find("table")
              , f = null;
            if (this.showWeekNumbers && e[0].cells)
                var f = a(e[0].rows[0]);
            var g = a(d.find("#cellTable" + d[0].id)[0].rows[0]);
            b ? (this.showWeekNumbers && f && f.css("display", "table-row"),
            g.css("display", "table-row")) : (this.showWeekNumbers && f && f.css("display", "none"),
            g.css("display", "none"))
        },
        _renderSingleCalendar: function(b, c) {
            if (this.canRender) {
                var d = this.host.find("#" + b.toString());
                null != d && d.remove();
                var e = a("<div id='" + b.toString() + "'></div>")
                  , f = this.getVisibleDate()
                  , g = this.getFirstDayOfWeek(f)
                  , h = new a.jqx._jqxDateTimeInput.getDateTime(g.dateTime);
                h._addMonths(1);
                var i = a.jqx._jqxCalendar.monthView(g, h, null, null, null, e);
                void 0 == c || null == c ? (this.host.append(e),
                void 0 == this.height || isNaN(this.height) ? null != this.height && this.height.toString().indexOf("px") != -1 && e.height(this.height) : e.height(this.height),
                void 0 == this.width || isNaN(this.width) ? null != this.width && this.width.toString().indexOf("px") != -1 && e.width(this.width) : e.width(this.width),
                null != this.width && this.width.toString().indexOf("%") != -1 && e.width("100%"),
                null != this.height && this.height.toString().indexOf("%") != -1 && e.height("100%")) : c.append(e),
                a.data(this.element, b, i);
                var j = this.host.height() - this.titleHeight - this.columnHeaderHeight;
                this.showDayNames || (j = this.host.height() - this.titleHeight),
                this.showFooter && (j -= 20),
                this.rowHeaderWidth < 0 && (this.rowHeaderWidth = 0),
                this.columnHeaderHeight < 0 && (this.columnHeaderHeight = 0),
                this.titleHeight < 0 && (this.titleHeight = 0);
                var k = this.rowHeaderWidth
                  , l = this.columnHeaderHeight;
                this.showWeekNumbers || (k = 0),
                this.showDayNames || (l = 0);
                var m = "<div style='height:" + this.titleHeight + "px;'><table role='grid' style='margin: 0px; width: 100%; height: 100%; border-spacing: 0px;' cellspacing='0' cellpadding='0'><tr role='row' id='calendarTitle' width='100%'><td role='gridcell' NOWRAP id='leftNavigationArrow'></td><td aria-live='assertive' aria-atomic='true' role='gridcell' align='center' NOWRAP id='calendarTitleHeader'></td><td role='gridcell' NOWRAP id='rightNavigationArrow'></td></tr></table></div>"
                  , n = "<table role='grid' class='" + this.toThemeProperty("jqx-calendar-month") + "' style='margin: 0px; border-spacing: 0px;' cellspacing='0' cellpadding='0'><tr role='row' id='calendarHeader' height='" + l + "'><td role='gridcell' id='selectCell' width='" + k + "'></td><td role='gridcell' colspan='2' style='border: none; padding-left: 2px; padding-right: 2px' id='calendarColumnHeader'></td></tr><tr role='row' id='calendarContent'><td role='gridcell' id='calendarRowHeader' valign='top' height='" + j + "' width='" + k + "'></td><td role='gridcell' valign='top' colspan='2' style='padding-left: 2px; padding-right: 2px' id='cellsTable' height='" + j + "'></td></tr></table>"
                  , o = "<div id='footer' style='margin: 0px; display: none; height:" + p + "px;'><table style='width: 100%; height: 100%; border-spacing: 0px;' cellspacing='0' cellpadding='0'><tr id='calendarFooter'><td align='right' id='todayButton'></td><td align='left' colspan='2' id=doneButton></td></tr></table></div>";
                e[0].innerHTML = m + n + o,
                this.header = e.find("#calendarHeader"),
                this.header[0].id = "calendarHeader" + b,
                this.header.addClass(this.toThemeProperty("calendar-header")),
                this.columnHeader = e.find("#calendarColumnHeader"),
                this.columnHeader[0].id = "calendarColumnHeader" + b,
                this.table = e.find("#cellsTable"),
                this.table[0].id = "cellsTable" + b,
                this.rowHeader = e.find("#calendarRowHeader"),
                this.rowHeader[0].id = "calendarRowHeader" + b,
                this.selectCell = e.find("#selectCell"),
                this.selectCell[0].id = "selectCell" + b,
                this.title = e.find("#calendarTitle"),
                this.title[0].id = "calendarTitle" + b,
                this.leftButton = e.find("#leftNavigationArrow"),
                this.leftButton[0].id = "leftNavigationArrow" + b,
                this.titleHeader = e.find("#calendarTitleHeader"),
                this.titleHeader[0].id = "calendarTitleHeader" + b,
                this.rightButton = e.find("#rightNavigationArrow"),
                this.rightButton[0].id = "rightNavigationArrow" + b,
                this.footer = e.find("#calendarFooter"),
                this._footer = e.find("#footer"),
                this._footer[0].id = "footer" + b,
                this.footer[0].id = "calendarFooter" + b,
                this.todayButton = e.find("#todayButton"),
                this.todayButton[0].id = "todayButton" + b,
                this.doneButton = e.find("#doneButton"),
                this.doneButton[0].id = "doneButton" + b,
                this.title.addClass(this.toThemeProperty("jqx-calendar-title-container"));
                var p = 20;
                if (this.showFooter && this._footer.css("display", "block"),
                e.find("tr").addClass(this.toThemeProperty("jqx-reset")),
                e.addClass(this.toThemeProperty("jqx-widget-content")),
                e.addClass(this.toThemeProperty("jqx-calendar-month-container")),
                this.month = e,
                this.selectCell.addClass(this.toThemeProperty("jqx-reset")),
                this.selectCell.addClass(this.toThemeProperty("jqx-calendar-top-left-header")),
                this.showWeekNumbers ? this._renderRowHeader(e) : (this.table[0].colSpan = 3,
                this.columnHeader[0].colSpan = 3,
                this.rowHeader.css("display", "none"),
                this.selectCell.css("display", "none")),
                this.showFooter) {
                    this.footer.height(20);
                    var q = a("<a href='javascript:;'>" + this.todayString + "</a>");
                    q.appendTo(this.todayButton);
                    var r = a("<a href='javascript:;'>" + this.clearString + "</a>");
                    r.appendTo(this.doneButton),
                    r.addClass(this.toThemeProperty("jqx-calendar-footer")),
                    q.addClass(this.toThemeProperty("jqx-calendar-footer"));
                    var s = this
                      , t = "mousedown";
                    a.jqx.mobile.isTouchDevice() && (t = a.jqx.mobile.getTouchEventName("touchstart")),
                    this.addHandler(q, t, function() {
                        return s.today ? s.today() : s.setDate(new Date, "mouse"),
                        !1
                    }),
                    this.addHandler(r, t, function() {
                        return s.clear ? s.clear() : s.setDate(null, "mouse"),
                        !1
                    })
                }
                "month" != this.view && this.header.hide(),
                this.showDayNames && "month" == this.view && this.renderColumnHeader(e),
                this.oldView = this.view,
                this.renderCalendarCells(e, g, b),
                void 0 != c && null != c || this.renderTitle(e),
                this._refreshOtherMonthRows(i, b),
                e.find("tbody").css({
                    border: "none",
                    background: "transparent"
                }),
                void 0 != this.selectedDate && this._selectDate(this.selectedDate);
                var u = this;
                return this.addHandler(this.host, "focus", function() {
                    u.focus()
                }),
                e
            }
        },
        _getTitleFormat: function() {
            switch (this.view) {
            case "month":
                return this.titleFormat[0];
            case "year":
                return this.titleFormat[1];
            case "decade":
                return this.titleFormat[2];
            case "centuries":
                return this.titleFormat[3]
            }
        },
        renderTitle: function(b) {
            var c = a("<div role='button' style='float: left;'></div>")
              , d = a("<div role='button' style='float: right;'></div>")
              , e = this.title;
            e.addClass(this.toThemeProperty("jqx-reset")),
            e.addClass(this.toThemeProperty("jqx-widget-header")),
            e.addClass(this.toThemeProperty("jqx-calendar-title-header"));
            var f = e.find("td");
            if (a.jqx.browser.msie && a.jqx.browser.version < 8) {
                if ("transparent" != f.css("background-color")) {
                    var g = e.css("background-color");
                    f.css("background-color", g)
                }
                if ("transparent" != f.css("background-image")) {
                    var h = e.css("background-image")
                      , i = e.css("background-repeat");
                    e.css("background-position");
                    f.css("background-image", h),
                    f.css("background-repeat", i),
                    f.css("background-position", "left center scroll")
                }
            } else
                f.css("background-color", "transparent");
            this.disabled && e.addClass(this.toThemeProperty("jqx-calendar-title-header-disabled")),
            c.addClass(this.toThemeProperty("jqx-calendar-title-navigation")),
            c.addClass(this.toThemeProperty("jqx-icon-arrow-left")),
            c.appendTo(this.leftButton);
            var j = this.leftButton;
            d.addClass(this.toThemeProperty("jqx-calendar-title-navigation")),
            d.addClass(this.toThemeProperty("jqx-icon-arrow-right")),
            d.appendTo(this.rightButton);
            var k = this.rightButton;
            this.enableTooltips && a(j).jqxTooltip && (a(j).jqxTooltip({
                name: this.element.id,
                position: "mouse",
                theme: this.theme,
                content: this.backText
            }),
            a(k).jqxTooltip({
                name: this.element.id,
                position: "mouse",
                theme: this.theme,
                content: this.forwardText
            }));
            var l = this.titleHeader
              , m = this._format(this.value.dateTime, this._getTitleFormat(), this.culture);
            if ("decade" == this.view) {
                var n = this._format(this._renderStartDate, this._getTitleFormat(), this.culture)
                  , o = this._format(this._renderEndDate, this._getTitleFormat(), this.culture);
                m = n + " - " + o
            } else if ("centuries" == this.view) {
                var n = this._format(this._renderCenturyStartDate, this._getTitleFormat(), this.culture)
                  , o = this._format(this._renderCenturyEndDate, this._getTitleFormat(), this.culture);
                m = n + " - " + o
            }
            var p = a("<div style='background: transparent; margin: 0; padding: 0; border: none;'>" + m + "</div>");
            l.append(p),
            p.addClass(this.toThemeProperty("jqx-calendar-title-content"));
            var q = parseInt(c.width())
              , r = b.width() - 2 * q;
            l.find(".jqx-calendar-title-content").width(r);
            a.data(c, "navigateLeft", this),
            a.data(d, "navigateRight", this);
            var s = a.jqx.mobile.isTouchDevice();
            if (!this.disabled) {
                var t = this;
                this.addHandler(l, "mousedown", function(a) {
                    if (t.enableViews) {
                        if (!t._viewAnimating && !t._animating) {
                            var b = t.view;
                            switch (t.oldView = b,
                            t.view) {
                            case "month":
                                t.view = "year";
                                break;
                            case "year":
                                t.view = "decade"
                            }
                            if (t.views.indexOf("year") == -1 && "year" == t.view && (t.view = "decade"),
                            t.views.indexOf("decade") == -1 && "decade" == t.view && (t.view = b),
                            b != t.view) {
                                var c = "View" + t.element.id
                                  , d = t.host.find("#" + c)
                                  , e = t.getVisibleDate()
                                  , f = t.getFirstDayOfWeek(e);
                                t.renderCalendarCells(d, f, c, !0),
                                t.refreshTitle(d),
                                t._raiseEvent("8")
                            }
                        }
                        return !1
                    }
                }),
                this.addHandler(c, "mousedown", function(b) {
                    if (t._animating)
                        return !1;
                    a.data(c, "navigateLeftRepeat", !0);
                    var d = a.data(c, "navigateLeft");
                    return d.enableFastNavigation && !s && d.startRepeat(d, c, !0, t.navigationDelay + 200),
                    d.navigateBackward(t.stepMonths, "arrow"),
                    b.stopPropagation(),
                    b.preventDefault(),
                    d._raiseEvent(0, b)
                }),
                this.addHandler(c, "mouseup", function(b) {
                    a.data(c, "navigateLeftRepeat", !1)
                }),
                this.addHandler(c, "mouseleave", function(b) {
                    a.data(c, "navigateLeftRepeat", !1)
                }),
                this.addHandler(d, "mousedown", function(b) {
                    if (t._animating)
                        return !1;
                    a.data(d, "navigateRightRepeat", !0);
                    var c = a.data(d, "navigateRight");
                    return c.enableFastNavigation && !s && c.startRepeat(c, d, !1, t.navigationDelay + 200),
                    c.navigateForward(t.stepMonths, "arrow"),
                    b.stopPropagation(),
                    b.preventDefault(),
                    c._raiseEvent(1, b)
                }),
                this.addHandler(d, "mouseup", function(b) {
                    a.data(d, "navigateRightRepeat", !1)
                }),
                this.addHandler(d, "mouseleave", function(b) {
                    a.data(d, "navigateRightRepeat", !1)
                })
            }
        },
        refreshTitle: function(b) {
            var c = this._format(this.value.dateTime, this._getTitleFormat(), this.culture);
            if ("decade" == this.view) {
                var d = this._format(this._renderStartDate, this._getTitleFormat(), this.culture)
                  , e = this._format(this._renderEndDate, this._getTitleFormat(), this.culture);
                c = d + " - " + e
            } else if ("centuries" == this.view) {
                var d = this._format(this._renderCenturyStartDate, this._getTitleFormat(), this.culture)
                  , e = this._format(this._renderCenturyEndDate, this._getTitleFormat(), this.culture);
                c = d + " - " + e
            }
            var f = this.titleHeader;
            if (this.titleHeader) {
                var g = f.find(".jqx-calendar-title-content")
                  , h = a("<div style='background: transparent; margin: 0; padding: 0; border: none;'>" + c + "</div>");
                f.append(h),
                h.addClass(this.toThemeProperty("jqx-calendar-title-content")),
                null != g && g.remove()
            }
        },
        startRepeat: function(b, c, d, e) {
            var f = window.setTimeout(function() {
                var g = a.data(c, "navigateLeftRepeat");
                return d || (g = a.data(c, "navigateRightRepeat")),
                g ? (e < 25 && (e = 25),
                void (d ? (b.navigateBackward(1, "arrow"),
                b.startRepeat(b, c, !0, e)) : (b.navigateForward(1, "arrow"),
                f = b.startRepeat(b, c, !1, e)))) : void window.clearTimeout(f)
            }, e)
        },
        navigateForward: function(a, b) {
            void 0 != a && null != a || (a = this.stepMonths);
            var c = this.value.year;
            if ("decade" == this.view) {
                if (c = this._renderStartDate.getFullYear() + 12,
                this._renderEndDate.getFullYear() >= this.getMaxDate().getFullYear())
                    return
            } else
                "year" == this.view ? c = this.value.year + 1 : "centuries" == this.view && (c = this.value.year + 100);
            if ("month" != this.view) {
                var d = this.getMaxDate().getFullYear();
                if ((d < c || c > d) && (c = d),
                this.value.year == c) {
                    if ("decade" !== this.view)
                        return;
                    if (!(this.value.year > this._renderEndDate.getFullYear()))
                        return;
                    this.value.year = c,
                    this.value.month = 1,
                    this.value.day = 1
                }
                this.value.year = c,
                this.value.month = 1,
                this.value.day = 1
            }
            var e = this.value.day
              , f = this.value.month;
            if (f + a <= 12) {
                var g = this.value._daysInMonth(this.value.year, this.value.month + a);
                e > g && (e = g)
            }
            if ("month" == this.view) {
                var h = new Date(this.value.year,this.value.month - 1 + a,e);
                "arrow" == b && 7 == this.selectableDays.length && "range" != this.selectionMode && (this.selectedDate = new Date(this.value.year,this.value.month - 1 + a,1))
            } else
                var h = new Date(this.value.year,this.value.month - 1,e);
            return this.navigateTo(h)
        },
        navigateBackward: function(a, b) {
            void 0 != a && null != a || (a = this.stepMonths);
            var c = this.value.year;
            if ("decade" == this.view ? c = this._renderStartDate.getFullYear() - 12 : "year" == this.view ? c = this.value.year - 1 : "centuries" == this.view && (c = this.value.year - 100),
            "month" != this.view) {
                var d = this.getMinDate().getFullYear();
                if (c < d && (c = d),
                "decade" == this.view && this._renderStartDate && this._renderStartDate.getFullYear() == c)
                    return;
                this.value.year = c,
                this.value.month = 1,
                this.value.day = 1
            }
            var e = this.value.day
              , f = this.value.month;
            if (f - a >= 1) {
                var g = this.value._daysInMonth(this.value.year, this.value.month - a);
                e > g && (e = g)
            }
            if ("month" == this.view) {
                var h = new Date(this.value.year,this.value.month - 1 - a,e);
                "arrow" == b && 7 == this.selectableDays.length && "range" != this.selectionMode && (this.selectedDate = new Date(this.value.year,this.value.month - 1 - a,1))
            } else
                var h = new Date(this.value.year,this.value.month - 1,e);
            return this.navigateTo(h)
        },
        _isRestrictedRange: function(a, b) {
            if (a > b)
                return !0;
            for (var c = a; c.valueOf() <= b.valueOf(); ) {
                if (this._isRestrictedDate(c))
                    return !0;
                c.setDate(c.getDate() + 1)
            }
            return !1
        },
        _hasUnrestrictedRanges: function(a, b) {
            if (a > b)
                return !1;
            for (var c = a; c.valueOf() <= b.valueOf(); ) {
                if (!this._isRestrictedDate(c))
                    return !0;
                c.setDate(c.getDate() + 1)
            }
            return !1
        },
        _getNextUnrestrictedDay: function(a, b) {
            if (a > b)
                return null;
            for (var c = a; c.valueOf() <= b.valueOf(); ) {
                if (!this._isRestrictedDate(c))
                    return c;
                c.setDate(c.getDate() + 1)
            }
            return null
        },
        _isRestrictedDate: function(b) {
            var c = this;
            if (!a.isArray(c.restrictedDates))
                return !1;
            for (var d = 0; d < c.restrictedDates.length; d++) {
                var e = c.restrictedDates[d];
                if ("object" == typeof e && void 0 != e.from && void 0 != e.to) {
                    var f = e.from
                      , g = e.to;
                    if (b.valueOf() >= f.valueOf() && b.valueOf() <= g.valueOf())
                        return !0
                } else if (e.getMonth() == b.getMonth() && e.getDate() == b.getDate() && e.getFullYear() == b.getFullYear())
                    return !0
            }
            return !1
        },
        _isDisabled: function(a) {
            var b = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
              , c = a.getDay()
              , d = b[c];
            return this.selectableDays.indexOf(d) == -1 || !!this._isRestrictedDate(a)
        },
        refreshCalendarCells: function(b, c, d) {
            if ("year" == this.view || "decade" == this.view || "centuries" == this.view)
                return void this.refreshViews(b, c, d);
            for (var e = this.table, f = e.find("#cellTable" + d.toString()), g = c, h = new Array, i = 0, j = new a.jqx._jqxDateTimeInput.getDateTime(new Date), k = 0; k < 6; k++)
                for (var l = 0; l < 7; l++) {
                    var m = k + 1
                      , n = l;
                    this.rtl && (n = 6 - n);
                    var o = n + 1
                      , p = "#cell" + m + o + this.element.id
                      , q = new Date(g.dateTime.getFullYear(),g.dateTime.getMonth(),g.dateTime.getDate())
                      , r = new a.jqx._jqxCalendar.cell(q)
                      , s = a(f[0].rows[k].cells[o - 1]);
                    s[0].id = p.substring(1),
                    r.element = s,
                    r.row = k,
                    r.column = l,
                    r.isVisible = !0,
                    r.isOtherMonth = !1,
                    r.isToday = !1,
                    r.isWeekend = !1,
                    r.isHighlighted = !1,
                    r.isSelected = !1,
                    g.month != this.value.month && (r.isOtherMonth = !0,
                    r.isVisible = this.showOtherMonthDays),
                    this._isRestrictedDate(q) && (r.isRestricted = !0,
                    r.isDisabled = !0),
                    r.isDisabled || (q < this.getMinDate() || q > this.getMaxDate() || this._isDisabled(q)) && (r.isDisabled = !0),
                    g.month == j.month && g.day == j.day && g.year == j.year && (r.isToday = !0),
                    g.isWeekend() && (r.isWeekend = !0),
                    a.data(this.element, "cellContent" + p.substring(1), r),
                    a.data(this.element, p.substring(1), r),
                    h[i] = r,
                    i++,
                    a.jqx.utilities.html(s, g.day),
                    this._applyCellStyle(r, s, s),
                    g = new a.jqx._jqxDateTimeInput.getDateTime(new Date(g._addDays(1)))
                }
            var t = a.data(this.element, b[0].id);
            void 0 != t && null != t && (t.cells = h),
            this.renderedCells = h,
            this._refreshOtherMonthRows(t, d)
        },
        _getDecadeAndCenturiesData: function() {
            var a = new Array
              , b = new Array
              , c = this.getMaxDate().getFullYear() - this.getMinDate().getFullYear();
            c < 12 && (c = 12);
            var d = this.getMinDate()
              , e = this.getMaxDate()
              , f = this.value.dateTime.getFullYear();
            if ("decade" == this.view) {
                f + 12 > e.getFullYear() && (f = e.getFullYear() - 11),
                f < d.getFullYear() && (f = d.getFullYear());
                for (var g = 0; g < c; g++) {
                    var h = new Date(d.getFullYear() + g,0,1);
                    if (d.getFullYear() <= f && f <= h.getFullYear()) {
                        for (var i = new Date(h.getFullYear(),h.getMonth(),1), j = 0; j < 12; j++) {
                            var k = new Date(i.getFullYear() + j,this.value.dateTime.getMonth(),this.value.dateTime.getDate())
                              , l = k.getFullYear();
                            d.getFullYear() <= l && l <= e.getFullYear() ? (a.push(l),
                            b.push(k),
                            0 == j && (this._renderStartDate = k),
                            this._renderEndDate = k) : (a.push(l),
                            b.push(k))
                        }
                        break
                    }
                }
            } else if ("centuries" == this.view)
                for (var g = 0; g < c; g += 120) {
                    var h = new Date(d.getFullYear() + g + 120,0,1);
                    if (d.getFullYear() <= f && f <= h.getFullYear()) {
                        var i = new Date(h.getFullYear() - 130,h.getMonth(),1);
                        i < d && (i = d);
                        for (var j = 0; j < 12; j++) {
                            var m = new Date(i.getFullYear() + 10 * j,i.getMonth(),1);
                            i.getFullYear() >= d.getFullYear() && m.getFullYear() <= e.getFullYear() && (a.push("<span style='visibility: hidden;'>-</span>" + m.getFullYear() + "-" + (m.getFullYear() + 9)),
                            b.push(m),
                            0 == j && (this._renderCenturyStartDate = m),
                            this._renderCenturyEndDate = new Date(m.getFullYear() + 9,0,1))
                        }
                        break
                    }
                }
            return {
                years: a,
                dates: b
            }
        },
        refreshViews: function(b, c, d) {
            for (var e = new Array, f = b.find("#cellTable" + d.toString()), g = this._getDecadeAndCenturiesData(), h = g.years, i = g.dates, j = 0, k = this.getMinDate(), l = this.getMaxDate(), m = 0; m < 3; m++)
                for (var n = 0; n < 4; n++) {
                    var o = n;
                    this.rtl && (o = 3 - o);
                    var p = new Date(this.value.dateTime);
                    p.setDate(1),
                    p.setMonth(4 * m + o);
                    var q = new a.jqx._jqxCalendar.cell(p)
                      , r = f[0].rows["row" + (1 + m) + this.element.id]
                      , s = a(r.cells[n]);
                    q.isSelected = !1,
                    q.isVisible = !0,
                    q.element = s,
                    q.row = m,
                    q.column = n,
                    q.index = e.length;
                    var t = "";
                    if ("year" == this.view) {
                        var u = this.localization.calendar.months.names
                          , v = u[4 * m + o];
                        switch (this.monthNameFormat) {
                        case "default":
                            v = this.localization.calendar.months.namesAbbr[4 * m + o];
                            break;
                        case "shortest":
                            v = this.localization.calendar.months.namesShort[4 * m + o];
                            break;
                        case "firstTwoLetters":
                            v = v.substring(0, 2);
                            break;
                        case "firstLetter":
                            v = v.substring(0, 1)
                        }
                        t = v
                    } else
                        "decade" != this.view && "centuries" != this.view || (t = h[4 * m + o],
                        void 0 == t && (t = "<span style='cursor: default; visibility: hidden;'>2013</span>"),
                        q.setDate(i[4 * m + o]));
                    var p = q.getDate();
                    "year" == this.view ? p.getMonth() == this.getDate().getMonth() && p.getFullYear() == this.getDate().getFullYear() && (q.isSelected = !0) : p.getFullYear() == this.getDate().getFullYear() && (q.isSelected = !0),
                    "year" == this.view ? (this._getYearAndMonthPart(p) < this._getYearAndMonthPart(k) && (q.isDisabled = !0),
                    this._getYearAndMonthPart(p) > this._getYearAndMonthPart(l) && (q.isDisabled = !0)) : (p.getFullYear() < k.getFullYear() && (q.isDisabled = !0),
                    p.getFullYear() > l.getFullYear() && (q.isDisabled = !0)),
                    a.jqx.utilities.html(s, t),
                    e[j] = q,
                    j++
                }
            var w = a.data(this.element, b[0].id);
            void 0 != w && null != w && (w.cells = e),
            this.renderedCells = e,
            this._applyCellStyles()
        },
        _createViewClone: function() {
            var a = this.host.find(".jqx-calendar-month")
              , b = a.clone();
            return b.css("position", "absolute"),
            b.css("top", a.position().top),
            b
        },
        _addCellsTable: function(a, b) {
            var c = this
              , d = this.showFooter ? 20 : 0;
            "month" != this.view ? b.height(this.host.height() - this.titleHeight) : b.height(this.host.height() - this.titleHeight - this.columnHeaderHeight - d),
            this._viewAnimating = !0;
            var e = this.host.find(".jqx-calendar-month-container");
            e.css("position", "relative");
            var f = (this.host.find(".jqx-calendar-month"),
            this._createViewClone());
            e.append(f),
            "month" != this.view ? (this.header.fadeOut(0),
            this.showWeekNumbers && this.rowHeader.fadeOut(0),
            this.showFooter && this._footer.fadeOut(0)) : (this.header.fadeIn(this.navigationDelay + 200),
            this.showWeekNumbers && this.rowHeader.fadeIn(this.navigationDelay + 200),
            this.showFooter && this._footer.fadeIn(this.navigationDelay + 200)),
            a.children().remove(),
            a.append(b),
            this._animateViews(f, b, function() {
                c.selectedDate || "range" == c.selectionMode || (c.selectedDate = c.renderedCells[0].getDate());
                try {
                    c.renderedCells[0].element.focus(),
                    setTimeout(function() {
                        c.renderedCells[0].element.focus()
                    }, 10)
                } catch (a) {}
                c._viewAnimating = !1
            }),
            b.addClass(this.toThemeProperty("jqx-calendar-view"))
        },
        _animateViews: function(a, b, c) {
            var d = this;
            return d._viewAnimating = !0,
            d.oldView == d.view ? (a.remove(),
            b.fadeOut(0),
            b.fadeIn(0),
            void c()) : (a.fadeOut(this.navigationDelay + 100, function() {
                a.remove()
            }),
            b.fadeOut(0),
            void b.fadeIn(this.navigationDelay + 200, function() {
                c()
            }))
        },
        focus: function() {
            if (!this.disabled)
                try {
                    if (this.renderedCells && this.renderedCells.length > 0) {
                        var a = this;
                        a.selectedDate || "range" == a.selectionMode || this.setDate(new Date, "mouse"),
                        this.element.focus()
                    }
                } catch (a) {}
        },
        renderViews: function(b, c, d) {
            var e = this
              , f = new Array
              , g = a("<table role='grid' style='border-color: transparent; width: 100%; height: 100%;' cellspacing='2' cellpadding='0' id=cellTable" + d.toString() + "><tr role='row' id='row1" + this.element.id + "'><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td></tr><tr role='row' id='row2" + this.element.id + "'><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td></tr><tr role='row' id='row3" + this.element.id + "'><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td></tr></table>")
              , h = this.host.find(".jqx-calendar-month-container");
            h.css("position", "relative");
            var i = b.find("#cellsTable" + b[0].id);
            i[0].style.borderColor = "transparent";
            var j = this._getDecadeAndCenturiesData()
              , k = j.years
              , l = j.dates
              , m = 0
              , n = this.getMinDate()
              , o = this.getMaxDate()
              , p = new Date(this.value.dateTime);
            p.setDate(1);
            for (var q = 0; q < 3; q++)
                for (var r = 0; r < 4; r++) {
                    var s = r;
                    this.rtl && (s = 3 - s);
                    var t = g[0].rows["row" + (1 + q) + this.element.id]
                      , u = new Date(p);
                    u.setMonth(4 * q + s);
                    var v = new a.jqx._jqxCalendar.cell(u)
                      , w = a(t.cells[r]);
                    v.isVisible = !0,
                    v.element = w,
                    v.row = q,
                    v.column = r,
                    v.index = f.length,
                    v.isSelected = !1;
                    var x = "";
                    if ("year" == this.view) {
                        u.getMonth() == this.getDate().getMonth() && u.getFullYear() == this.getDate().getFullYear() && (v.isSelected = !0);
                        var y = this.localization.calendar.months.names
                          , z = y[4 * q + s];
                        switch (this.monthNameFormat) {
                        case "default":
                            z = this.localization.calendar.months.namesAbbr[4 * q + s];
                            break;
                        case "shortest":
                            z = this.localization.calendar.months.namesShort[4 * q + s];
                            break;
                        case "firstTwoLetters":
                            z = z.substring(0, 2);
                            break;
                        case "firstLetter":
                            z = z.substring(0, 1)
                        }
                        x = z
                    } else
                        "decade" != this.view && "centuries" != this.view || (x = k[4 * q + s],
                        v.setDate(l[4 * q + s]),
                        v.getDate().getFullYear() == this.getDate().getFullYear() && (v.isSelected = !0),
                        void 0 == x && (x = "<span style='cursor: default; visibility: hidden;'>2013</span>"));
                    var u = v.getDate();
                    if ("year" == this.view) {
                        var A = new Date(u);
                        A.setDate(1),
                        A.setHours(0, 0, 0, 0),
                        A.setMonth(u.getMonth() + 1),
                        A = new Date(A.valueOf() - 1),
                        (this._getYearAndMonthPart(u) < this._getYearAndMonthPart(n) || this._getYearAndMonthPart(u) > this._getYearAndMonthPart(o) || !this._hasUnrestrictedRanges(u, A)) && (v.isDisabled = !0)
                    } else {
                        var B = new Date(u);
                        B.setMonth(0),
                        B.setDate(1),
                        B.setHours(0, 0, 0, 0),
                        B.setFullYear(u.getFullYear() + 1),
                        B = new Date(B.valueOf() - 1),
                        (u.getFullYear() < n.getFullYear() || u.getFullYear() > o.getFullYear() || !this._hasUnrestrictedRanges(u, B)) && (v.isDisabled = !0)
                    }
                    a.jqx.utilities.html(w, x),
                    f[m] = v,
                    m++
                }
            a.each(f, function() {
                var a = this.element
                  , b = this;
                e.disabled || (e.addHandler(a, "mousedown", function(a) {
                    e._setDateAndSwitchViews(b, a, "mouse")
                }),
                e.addHandler(a, "mouseover", function(a) {
                    var c = e.renderedCells[b.index];
                    "centuries" != e.view && c.element.html().toLowerCase().indexOf("span") != -1 || (c.isHighlighted = !0,
                    e._applyCellStyle(c, c.element, c.element))
                }),
                e.addHandler(a, "mouseout", function(a) {
                    var c = e.renderedCells[b.index];
                    "centuries" != e.view && c.element.html().toLowerCase().indexOf("span") != -1 || (c.isHighlighted = !1,
                    e._applyCellStyle(c, c.element, c.element))
                }))
            });
            var C = a.data(this.element, b[0].id);
            void 0 != C && null != C && (C.cells = f),
            this.renderedCells = f,
            this._addCellsTable(i, g),
            this._applyCellStyles()
        },
        _setDateAndSwitchViews: function(b, c, d) {
            if (!this._viewAnimating && !this._animating) {
                var e = (this.getDate(),
                this.renderedCells[b.index].getDate())
                  , f = this.value.dateTime.getDate()
                  , g = new Date(e);
                this.views.indexOf("month") != -1 ? g.setDate(f) : (g.setDate(1),
                e.setDate(1)),
                g.getMonth() == e.getMonth() && (e = g);
                var h = this.getMinDate()
                  , i = this.getMaxDate();
                if ("year" == this.view) {
                    if (this._getYearAndMonthPart(e) < this._getYearAndMonthPart(h))
                        return;
                    if (this._getYearAndMonthPart(e) > this._getYearAndMonthPart(i))
                        return
                } else {
                    if (e.getFullYear() < h.getFullYear())
                        return;
                    if (e.getFullYear() > i.getFullYear())
                        return
                }
                switch ("range" != this.selectionMode && this._selectDate(e, d),
                this.oldView = this.view,
                this.view) {
                case "year":
                    this.view = "month";
                    break;
                case "decade":
                    this.view = "year"
                }
                this.views.indexOf("month") == -1 && (this.view = "year"),
                this.views.indexOf("year") == -1 && (this.view = "decade"),
                "year" == this.view ? (this._getYearAndMonthPart(e) < this._getYearAndMonthPart(h) && (e = h),
                this._getYearAndMonthPart(e) > this._getYearAndMonthPart(i) && (e = i)) : (e.getFullYear() < h.getFullYear() && (e = h),
                e.getFullYear() > i.getFullYear() && (e = i)),
                this.changing && this.selectedDate && (this.selectedDate.getFullYear() != e.getFullYear() || this.selectedDate.getMonth() != e.getMonth() || this.selectedDate.getDate() != e.getDate()) && (e = this.selectedDate),
                this.value._setYear(e.getFullYear()),
                this.value._setDay(e.getDate()),
                this.value._setMonth(e.getMonth() + 1),
                this.value._setDay(e.getDate());
                var j = this.getVisibleDate()
                  , k = this.getFirstDayOfWeek(j)
                  , l = "View" + this.element.id;
                if (this.renderCalendarCells(this.month, k, l, !0),
                this.refreshTitle(this.month),
                this.showWeekNumbers && this.refreshRowHeader(this.month, l),
                3 == this.views.length && "month" == this.view)
                    if ("range" != this.selectionMode)
                        this._selectDate(this.selectedDate, "view");
                    else {
                        var m = this;
                        a.each(this.renderedCells, function(b) {
                            var c = this
                              , d = c.getDate()
                              , f = a(c.element);
                            if (0 == f.length)
                                return !1;
                            var g = function(a) {
                                if (null == a)
                                    return new Date;
                                var b = new Date;
                                return b.setHours(0, 0, 0, 0),
                                b.setFullYear(a.getFullYear(), a.getMonth(), a.getDate()),
                                b
                            };
                            c.isOtherMonth || g(d).toString() != g(e).toString() || (m.value._setMonth(e.getMonth() + 1),
                            m.value._setDay(e.getDate()),
                            m.value._setYear(e.getFullYear())),
                            c.isSelected = !1,
                            c.isDisabled = !1,
                            g(d) < g(m.selection.from) && 1 == m._clicks && (c.isDisabled = !0),
                            m.getMaxDate() < d && (c.isDisabled = !0),
                            m.getMinDate() > d && (c.isDisabled = !0),
                            m._isDisabled(d) && (c.isDisabled = !0),
                            c.isDisabled || g(d) >= g(m.selection.from) && g(d) <= g(m.selection.to) && (c.isSelected = !0)
                        }),
                        this._applyCellStyles()
                    }
                "month" != this.view && ("year" == this.oldView || this.views.indexOf("year") == -1 && "decade" == this.view) && ("keyboard" != d && this._raiseEvent("3"),
                this._raiseEvent("5", {
                    selectionType: "mouse"
                })),
                this._raiseEvent("8")
            }
        },
        renderCalendarCells: function(b, c, d, e) {
            if ("year" == this.view || "decade" == this.view || "centuries" == this.view)
                return void this.renderViews(b, c, d);
            var f = a("<table role='grid' style='width: 100%; height: 100%; border-color: transparent;' cellspacing='2' cellpadding='1' id=cellTable" + d.toString() + "><tr role='row'><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td></tr><tr role='row'><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td></tr><tr role='row'><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td></tr><tr role='row'><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td></tr><tr role='row'><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td></tr><tr role='row'><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td></tr></table>")
              , g = this.table;
            if (g[0].style.borderColor = "transparent",
            void 0 == e) {
                var h = g.find("#cellTable" + d.toString());
                null != h && h.remove(),
                g.append(f)
            }
            var i = c
              , j = this.showDayNames ? 1 : 0
              , k = this.showWeekNumbers ? 1 : 0
              , l = new Array
              , m = 0
              , n = (b.width() - this.rowHeaderWidth - 2) / 7;
            this.showWeekNumbers || (n = (b.width() - 2) / 7),
            n = parseInt(n);
            for (var o = new a.jqx._jqxDateTimeInput.getDateTime(new Date), p = 0; p < 6; p++) {
                for (var q = 0; q < 7; q++) {
                    var r = p + 1
                      , s = q;
                    this.rtl && (s = 6 - s);
                    var t = s + 1
                      , u = "#cell" + r + t + this.element.id
                      , v = new Date(i.dateTime.getFullYear(),i.dateTime.getMonth(),i.dateTime.getDate())
                      , w = new a.jqx._jqxCalendar.cell(v)
                      , x = a(f[0].rows[p].cells[t - 1]);
                    x[0].id = u.substring(1),
                    w.isVisible = !0,
                    w.isDisabled = !1,
                    i.month != this.value.month && (w.isOtherMonth = !0,
                    w.isVisible = this.showOtherMonthDays),
                    this._isRestrictedDate(v) && (w.isRestricted = !0,
                    w.isDisabled = !0),
                    w.isDisabled || (v < this.getMinDate() || v > this.getMaxDate() || this._isDisabled(v)) && (w.isDisabled = !0),
                    i.month == o.month && i.day == o.day && i.year == o.year && (w.isToday = !0),
                    i.isWeekend() && (w.isWeekend = !0),
                    w.element = x,
                    w.row = j,
                    w.column = k,
                    a.jqx.utilities.html(x, i.day),
                    i = new a.jqx._jqxDateTimeInput.getDateTime(new Date(i._addDays(1))),
                    a.data(this.element, "cellContent" + u.substring(1), w),
                    a.data(this.element, "" + u.substring(1), w);
                    var y = this;
                    if (this.addHandler(x, "mousedown", function(b) {
                        if (!y.readOnly && !y.disabled) {
                            var c = a(b.target)
                              , d = a.data(y.element, c[0].id);
                            y._raiseEvent(3, b);
                            if (null != d && void 0 != d) {
                                var e = d.getDate();
                                if (y.getMinDate() <= e && e <= y.getMaxDate() && !d.isDisabled)
                                    if (d.isOtherMonth && y.enableAutoNavigation)
                                        d.row < 2 ? y.navigateBackward() : y.navigateForward(),
                                        y._selectDate(d.getDate(), "mouse", b.shiftKey);
                                    else {
                                        new Date(y.getDate());
                                        y._selectDate(d.getDate(), "mouse", b.shiftKey),
                                        y.value._setYear(e.getFullYear()),
                                        y.value._setDay(1),
                                        y.value._setMonth(e.getMonth() + 1),
                                        y.value._setDay(e.getDate());
                                        var f = y.host.find(".jqx-calendar-month");
                                        f.stop(),
                                        f.css("margin-left", "0px");
                                        y.getDate();
                                        y._raiseEvent("2"),
                                        d.isOtherMonth && y._raiseEvent("5", {
                                            selectionType: "mouse"
                                        })
                                    }
                            }
                            return !1
                        }
                    }),
                    !y.disabled) {
                        var z = function(b, c) {
                            if (!y.readOnly) {
                                var d = a(b.target)
                                  , e = a.data(y.element, d[0].id);
                                if (null != e && void 0 != e) {
                                    var f = e.getDate();
                                    y.getMinDate() <= f && f <= y.getMaxDate() && (e.isHighlighted = c,
                                    y._applyCellStyle(e, e.element, d))
                                }
                            }
                        };
                        this.addHandler(x, "mouseenter", function(a) {
                            return z(a, !0),
                            !1
                        }),
                        this.addHandler(x, "mouseleave", function(a) {
                            return z(a, !1),
                            !1
                        })
                    }
                    k++,
                    l[m] = w,
                    m++
                }
                k = 0,
                j++
            }
            var A = a.data(this.element, b[0].id);
            void 0 != A && null != A && (A.cells = l),
            this.renderedCells = l,
            void 0 != e && this._addCellsTable(g, f),
            this._applyCellStyles(),
            this._refreshOtherMonthRows(A, d)
        },
        setMaxDate: function(b, c) {
            null != b && "string" == typeof b && (b = new Date(b),
            "Invalid Date" == b) || (this.maxDate = a.jqx._jqxDateTimeInput.getDateTime(b),
            c !== !1 && this.render())
        },
        getMaxDate: function() {
            return null != this.maxDate && void 0 != this.maxDate ? this.maxDate.dateTime : null
        },
        setMinDate: function(b, c) {
            null != b && "string" == typeof b && (b = new Date(b),
            "Invalid Date" == b) || (this.minDate = a.jqx._jqxDateTimeInput.getDateTime(b),
            c !== !1 && this.render())
        },
        getMinDate: function() {
            return null != this.minDate && void 0 != this.minDate ? this.minDate.dateTime : null
        },
        navigateTo: function(b, c) {
            if ("month" == this.view) {
                var d = this.getMinDate()
                  , e = new Date(this.getMaxDate().getFullYear(),this.getMaxDate().getMonth() + 1,this.getMaxDate().getDate());
                if (b < this._getYearAndMonthPart(d) || b > this._getYearAndMonthPart(e))
                    return !1
            } else if (b && (b.getFullYear() < this.getMinDate().getFullYear() || b.getFullYear() > this.getMaxDate().getFullYear()))
                return !1;
            if (null == b)
                return !1;
            if (void 0 == c) {
                var f = this;
                if (this._animating)
                    return;
                this._animating = !0;
                var g = this.host.find(".jqx-calendar-month-container");
                this._viewClone && (this._viewClone.stop(),
                this._viewClone.remove()),
                this._newViewClone && (this._newViewClone.stop(),
                this._newViewClone.remove());
                var h = this.host.find(".jqx-calendar-month");
                h.stop(),
                h.css("margin-left", "0px");
                var i = h.clone();
                this._viewClone = i;
                var j = new Date(this.value.dateTime);
                this.value._setYear(b.getFullYear()),
                this.value._setDay(b.getDate()),
                this.value._setMonth(b.getMonth() + 1),
                f.refreshControl(),
                g.css("position", "relative"),
                i.css("position", "absolute"),
                i.css("top", h.position().top),
                g.append(i),
                a.jqx.browser.msie && a.jqx.browser.version < 8 && (this.month.css("position", "relative"),
                this.month.css("overflow", "hidden"),
                this.table.css("position", "relative"),
                this.table.css("overflow", "hidden"));
                var k = -this.host.width();
                b < j && ("month" == this.view && b.getMonth() != j.getMonth() ? k = this.host.width() : b.getFullYear() != j.getFullYear() && (k = this.host.width())),
                i.animate({
                    marginLeft: parseInt(k) + "px"
                }, this.navigationDelay, function() {
                    i.remove()
                });
                var l = h.clone();
                this._newViewClone = l,
                l.css("position", "absolute"),
                l.css("top", h.position().top),
                g.append(l),
                l.css("margin-left", -k),
                h.css("visibility", "hidden"),
                l.animate({
                    marginLeft: "0px"
                }, this.navigationDelay, function() {
                    l.remove(),
                    h.css("visibility", "inherit"),
                    f._animating = !1
                })
            } else {
                this.value._setYear(b.getFullYear()),
                this.value._setDay(b.getDate()),
                this.value._setMonth(b.getMonth() + 1);
                var h = this.host.find(".jqx-calendar-month");
                h.stop(),
                h.css("margin-left", "0px"),
                this.refreshControl()
            }
            return this._raiseEvent("2"),
            this._raiseEvent("8"),
            !0
        },
        setDate: function(a) {
            return null != a && "string" == typeof a && (a = new Date(a)),
            0 == this.canRender && (this.canRender = !0,
            this.render()),
            this.navigateTo(a, "api"),
            this._selectDate(a),
            "range" == this.selectionMode && this._selectDate(a, "mouse"),
            !0
        },
        val: function(a) {
            return 0 != arguments.length && (null == a && this.setDate(null),
            a instanceof Date && this.setDate(a),
            "string" == typeof a && this.setDate(a)),
            this.getDate()
        },
        getDate: function() {
            return void 0 == this.selectedDate ? new Date : this.selectedDate
        },
        getValue: function() {
            return void 0 == this.value ? new Date : this.value.dateTime
        },
        setRange: function(a, b) {
            0 == this.canRender && (this.canRender = !0,
            this.render()),
            this.navigateTo(a, "api"),
            this._selectDate(a, "mouse"),
            this._selectDate(b, "mouse")
        },
        getRange: function() {
            return this.selection
        },
        _selectDate: function(b, c, d) {
            if ("none" != this.selectionMode) {
                null != c && void 0 != c || (c = "none"),
                null != d && void 0 != d || (d = !1);
                var e = a.data(this.element, "View" + this.element.id);
                if (void 0 != e && null != e) {
                    if (this.changing && b && this.selectedDate) {
                        if (this.selectedDate.getFullYear() != b.getFullYear() || this.selectedDate.getDate() != b.getDate() || this.selectedDate.getMonth() != b.getMonth())
                            var f = this.changing(this.selectedDate, b);
                        f && (b = f)
                    }
                    var g = this;
                    this.input && (null != b ? this.input.val(b.toString()) : this.input.val(""));
                    var h = this.selectedDate;
                    if (this.selectedDate = b,
                    "month" != this.view)
                        return h != b && this._raiseEvent(7, {
                            selectionType: c
                        }),
                        a.each(this.renderedCells, function(d) {
                            var e = this
                              , f = e.getDate()
                              , h = a(e.element);
                            h.find("#cellContent" + h[0].id);
                            if (null == b)
                                e.isSelected = !1,
                                e.isDisabled = !1;
                            else if (e.isSelected = !1,
                            f && (f.getMonth() == b.getMonth() && "year" == g.view && f.getFullYear() == b.getFullYear() || "decade" == g.view && f.getFullYear() == b.getFullYear())) {
                                e.isSelected = !0;
                                try {
                                    "none" != c && e.element.focus()
                                } catch (a) {}
                            }
                            g._applyCellStyle(e, h, h)
                        }),
                        void (this.change && this.change(b));
                    if ("month" == this.view && "range" == this.selectionMode && "key" == c) {
                        var i = this.getVisibleDate()
                          , j = this.getFirstDayOfWeek(i);
                        this.refreshCalendarCells(this.month, j, "View" + this.element.id)
                    }
                    var k = !1;
                    return a.each(this.renderedCells, function(e) {
                        var f = this
                          , h = f.getDate()
                          , i = a(f.element)
                          , j = i;
                        if (0 == i.length)
                            return !1;
                        if (null == b)
                            f.isSelected = !1,
                            f.isDisabled = !1,
                            0 == e && (g.selection = {
                                from: null,
                                to: null
                            },
                            g._raiseEvent("2"),
                            g._raiseEvent("5", {
                                selectionType: c
                            }));
                        else if ("range" != g.selectionMode || "key" == c) {
                            if (h.getDate() == b.getDate() && h.getMonth() == b.getMonth() && h.getFullYear() == b.getFullYear() && f.isSelected)
                                return g._applyCellStyle(f, i, j),
                                void g._raiseEvent("5", {
                                    selectionType: c
                                });
                            if (f.isSelected && g._raiseEvent("6", {
                                selectionType: c
                            }),
                            f.isSelected = !1,
                            h.getDate() == b.getDate() && h.getMonth() == b.getMonth() && h.getFullYear() == b.getFullYear()) {
                                f.isSelected = !0,
                                0 == e && (g.selection = {
                                    date: b
                                });
                                try {
                                    "none" != c && (f.element.focus(),
                                    g.host.focus())
                                } catch (a) {}
                                f.isOtherMonth || (g.value._setMonth(b.getMonth() + 1),
                                g.value._setDay(b.getDate()),
                                g.value._setYear(b.getFullYear()),
                                g._raiseEvent("2"),
                                g._raiseEvent("5", {
                                    selectionType: c
                                }))
                            }
                            "range" == g.selectionMode && (g._clicks = 0,
                            g.selection = {
                                from: b,
                                to: b
                            })
                        } else if ("range" == g.selectionMode) {
                            if ("view" == c)
                                return f.isSelected = !1,
                                f.isDisabled = !1,
                                g.getMaxDate() < h && (f.isDisabled = !0),
                                g.getMinDate() > h && (f.isDisabled = !0),
                                g._isRestrictedDate(h) && (f.isDisabled = !0,
                                f.isRestricted = !0),
                                !f.isDisabled && g._isDisabled(h) && (f.isDisabled = !0),
                                g._applyCellStyle(f, i, j),
                                !0;
                            if (0 == e)
                                if ("none" != c)
                                    if (void 0 == g._clicks && (g._clicks = 0),
                                    g._clicks++,
                                    d && g._clicks++,
                                    1 == g._clicks)
                                        g.selection = {
                                            from: b,
                                            to: b
                                        };
                                    else {
                                        var l = g.selection.from
                                          , m = l <= b ? l : b
                                          , n = l <= b ? b : l;
                                        if (m)
                                            var o = new Date(m.getFullYear(),m.getMonth(),m.getDate());
                                        if (n)
                                            var p = new Date(n.getFullYear(),n.getMonth(),n.getDate(),23,59,59);
                                        g.selection = {
                                            from: o,
                                            to: p
                                        },
                                        g._clicks = 0
                                    }
                                else
                                    null != g.selection && null != g.selection.from || (g.selection = {
                                        from: b,
                                        to: b
                                    },
                                    void 0 == g._clicks && (g._clicks = 0),
                                    g._clicks++,
                                    2 == g._clicks && (g._clicks = 0));
                            var q = function(a) {
                                if (null == a)
                                    return new Date;
                                var b = new Date;
                                return b.setHours(0, 0, 0, 0),
                                b.setFullYear(a.getFullYear(), a.getMonth(), a.getDate()),
                                b
                            };
                            f.isOtherMonth || q(h).toString() != q(b).toString() || (g.value._setMonth(b.getMonth() + 1),
                            g.value._setDay(b.getDate()),
                            g.value._setYear(b.getFullYear()),
                            g._raiseEvent("2"),
                            g._raiseEvent("5", {
                                selectionType: c
                            })),
                            f.isSelected = !1,
                            f.isDisabled = k,
                            q(h) < q(g.selection.from) && 1 == g._clicks && (f.isDisabled = !0),
                            g.getMaxDate() < h && (f.isDisabled = !0),
                            g.getMinDate() > h && (f.isDisabled = !0),
                            g._isRestrictedDate(h) && (f.isRestricted = !0,
                            f.isDisabled = !0),
                            !f.isDisabled && g._isDisabled(h) && (f.isDisabled = !0),
                            f.isDisabled ? !g.allowRestrictedDaysInRange && q(h) >= q(g.selection.from) && g.selection.to == g.selection.from && (k = !0) : q(h) >= q(g.selection.from) && q(h) <= q(g.selection.to) && (f.isSelected = !0)
                        }
                        g._applyCellStyle(f, i, j)
                    }),
                    "range" == g.selectionMode && 0 == g._clicks ? void g._raiseEvent(7, {
                        selectionType: c
                    }) : void ("range" != g.selectionMode && h != b && (g._raiseEvent(7, {
                        selectionType: c
                    }),
                    this.change && this.change(b)))
                }
            }
        },
        _getSelectedDate: function() {
            var b = a.data(this.element, "View" + this.element.id);
            if (void 0 != b && null != b) {
                if ("month" != this.view)
                    return this.selectedDate;
                for (var c = 0; c < b.cells.length; c++) {
                    var d = b.cells[c]
                      , e = d.getDate();
                    if (d.isSelected)
                        return e
                }
                return this.selectedDate ? this.selectedDate : void 0
            }
        },
        _getSelectedCell: function() {
            var b = a.data(this.element, "View" + this.element.id);
            if (void 0 != b && null != b)
                for (var c = 0; c < b.cells.length; c++) {
                    var d = b.cells[c];
                    d.getDate();
                    if (d.isSelected)
                        return d
                }
        },
        _applyCellStyle: function(b, c, d) {
            var e = this;
            (null == d || null != d && 0 == d.length) && (d = c);
            var f = "";
            if (f = this.toThemeProperty("jqx-rc-all"),
            f += " " + this.toThemeProperty("jqx-item"),
            (this.disabled || b.isDisabled && !b.isRestricted) && (f += " " + this.toThemeProperty("jqx-calendar-cell-disabled"),
            f += " " + this.toThemeProperty("jqx-fill-state-disabled")),
            !this.disabled && b.isRestricted && (f += " " + this.toThemeProperty("jqx-calendar-cell-restrictedDate")),
            b.isOtherMonth && this.enableOtherMonthDays && b.isVisible && (f += " " + this.toThemeProperty("jqx-calendar-cell-othermonth")),
            b.isWeekend && this.enableWeekend && b.isVisible && b.isVisible && (f += " " + this.toThemeProperty("jqx-calendar-cell-weekend")),
            b.isVisible ? (f += " " + this.toThemeProperty("jqx-calendar-cell"),
            "month" != this.view && d.length > 0 && d.html().toLowerCase().indexOf("span") != -1 && d.css("cursor", "default")) : f += " " + this.toThemeProperty("jqx-calendar-cell-hidden"),
            d.removeAttr("aria-selected"),
            b.isSelected && b.isVisible) {
                f += " " + this.toThemeProperty("jqx-calendar-cell-selected"),
                f += " " + this.toThemeProperty("jqx-fill-state-pressed"),
                d.attr("aria-selected", !0),
                this.host.removeAttr("aria-activedescendant").attr("aria-activedescendant", d[0].id);
                var g = b.getDate();
                this._isDisabled(g) && (f += " " + this.toThemeProperty("jqx-calendar-cell-selected-invalid"))
            }
            if (b.isHighlighted && b.isVisible && this.enableHover && (b.isDisabled || (f += " " + this.toThemeProperty("jqx-calendar-cell-hover"),
            f += " " + this.toThemeProperty("jqx-fill-state-hover"))),
            f += " " + this.toThemeProperty("jqx-calendar-cell-" + this.view),
            b.isToday && b.isVisible && (f += " " + this.toThemeProperty("jqx-calendar-cell-today")),
            d[0].className = f,
            this.specialDates.length > 0) {
                var h = this;
                a.each(this.specialDates, function() {
                    void 0 != this.Class && null != this.Class && "" != this.Class ? d.removeClass(this.Class) : d.removeClass(e.toThemeProperty("jqx-calendar-cell-specialDate"));
                    var c = b.getDate();
                    if (c.getFullYear() == this.Date.getFullYear() && c.getMonth() == this.Date.getMonth() && c.getDate() == this.Date.getDate()) {
                        if (null == b.tooltip && null != this.Tooltip && (b.tooltip = this.Tooltip,
                        a(d).jqxTooltip)) {
                            var f = this.Class;
                            a(d).jqxTooltip({
                                value: {
                                    cell: b,
                                    specialDate: this.Date
                                },
                                name: h.element.id,
                                content: this.Tooltip,
                                position: "mouse",
                                theme: h.theme,
                                opening: function(a) {
                                    return !!d.hasClass(e.toThemeProperty("jqx-calendar-cell-specialDate")) || !!d.hasClass(f)
                                }
                            })
                        }
                        return d.removeClass(e.toThemeProperty("jqx-calendar-cell-othermonth")),
                        d.removeClass(e.toThemeProperty("jqx-calendar-cell-weekend")),
                        void 0 == this.Class || "" == this.Class ? (d.addClass(e.toThemeProperty("jqx-calendar-cell-specialDate")),
                        !1) : (d.addClass(this.Class),
                        !1)
                    }
                })
            }
        },
        _applyCellStyles: function() {
            var b = a.data(this.element, "View" + this.element.id);
            if (void 0 != b && null != b)
                for (var c = 0; c < b.cells.length; c++) {
                    var d = b.cells[c]
                      , e = a(d.element)
                      , f = e.find("#cellContent" + e[0].id);
                    0 == f.length && (f = e),
                    this._applyCellStyle(d, e, f)
                }
        },
        getWeekOfYear: function(a) {
            var b = new Date(a.dateTime);
            dowOffset = this.firstDayOfWeek;
            var c = new Date(b.getFullYear(),0,1)
              , d = c.getDay() - dowOffset;
            d = d >= 0 ? d : d + 7;
            var e, f = Math.floor((b.getTime() - c.getTime() - 6e4 * (b.getTimezoneOffset() - c.getTimezoneOffset())) / 864e5) + 1;
            return d < 4 ? (e = Math.floor((f + d - 1) / 7) + 1,
            e > 52 && (nYear = new Date(b.getFullYear() + 1,0,1),
            nday = nYear.getDay() - dowOffset,
            nday = nday >= 0 ? nday : nday + 7,
            e = nday < 4 ? 1 : 53)) : e = Math.floor((f + d - 1) / 7),
            e
        },
        renderColumnHeader: function(b) {
            if (this.showDayNames) {
                var c = a("<table role='grid' style='border-spacing: 0px; border-collapse: collapse; width: 100%; height: 100%;' cellspacing='0' cellpadding='1'><tr role='row'><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td><td role='gridcell'></td></tr></table>");
                c.find("table").addClass(this.toThemeProperty("jqx-reset")),
                c.find("tr").addClass(this.toThemeProperty("jqx-reset")),
                c.find("td").css({
                    background: "transparent",
                    padding: 1,
                    margin: 0,
                    border: "none"
                }),
                c.addClass(this.toThemeProperty("jqx-reset")),
                c.addClass(this.toThemeProperty("jqx-widget-content")),
                c.addClass(this.toThemeProperty("jqx-calendar-column-header")),
                this.columnHeader.append(c);
                var d = this.getVisibleDate()
                  , e = this.getFirstDayOfWeek(d)
                  , f = (e.dayOfWeek,
                this.getWeekOfYear(e),
                this.firstDayOfWeek)
                  , g = this.localization.calendar.days.names
                  , h = new Array
                  , i = e
                  , j = (b.width() - this.rowHeaderWidth - 2) / 7;
                this.showWeekNumbers || (j = (b.width() - 2) / 7);
                for (var k = 0; k < 7; k++) {
                    var l = g[f];
                    switch (this.rtl && (l = g[6 - f]),
                    this.dayNameFormat) {
                    case "default":
                        l = this.localization.calendar.days.namesAbbr[f],
                        this.rtl && (l = this.localization.calendar.days.namesAbbr[6 - f]);
                        break;
                    case "shortest":
                        l = this.localization.calendar.days.namesShort[f],
                        this.rtl && (l = this.localization.calendar.days.namesShort[6 - f]);
                        break;
                    case "firstTwoLetters":
                        l = l.substring(0, 2);
                        break;
                    case "firstLetter":
                        l = l.substring(0, 1)
                    }
                    var m = new a.jqx._jqxCalendar.cell(i.dateTime)
                      , n = k + 1
                      , o = n + this.element.id
                      , p = a(c[0].rows[0].cells[k])
                      , q = k;
                    this.enableTooltips && a(p).jqxTooltip && a(p).jqxTooltip({
                        name: this.element.id,
                        content: g[f],
                        theme: this.theme,
                        position: "mouse"
                    }),
                    f >= 6 ? f = 0 : f++,
                    k = q,
                    m.element = p,
                    m.row = 0,
                    m.column = k + 1;
                    var r = this._textwidth(l)
                      , s = "<div style='padding: 0; margin: 0; border: none; background: transparent;' id='columnCell" + o + "'>" + l + "</div>";
                    if (p.append(s),
                    p.find("#columnCell" + o).addClass(this.toThemeProperty("jqx-calendar-column-cell")),
                    p.width(j),
                    this.disabled && p.find("#columnCell" + o).addClass(this.toThemeProperty("jqx-calendar-column-cell-disabled")),
                    r > 0 && j > 0)
                        for (; r > p.width() && 0 != l.length; )
                            l = l.substring(0, l.length - 1),
                            a.jqx.utilities.html(p.find("#columnCell" + o), l),
                            r = this._textwidth(l);
                    h[k] = m,
                    i = new a.jqx._jqxDateTimeInput.getDateTime(new Date(i._addDays(1)))
                }
                parseInt(this.columnHeader.width()) > parseInt(this.host.width()) && this.columnHeader.width(this.host.width());
                var t = a.data(this.element, b[0].id);
                t.columnCells = h
            }
        },
        _format: function(b, c, d) {
            var e = !1;
            try {
                void 0 != Globalize && (e = !0)
            } catch (a) {}
            if (a.global)
                return a.global.culture.calendar = this.localization.calendar,
                a.global.format(b, c, this.culture);
            if (e)
                try {
                    return Globalize.cultures[this.culture] ? (Globalize.cultures[this.culture].calendar = this.localization.calendar,
                    Globalize.format(b, c, this.culture)) : Globalize.format(b, c, this.culture)
                } catch (a) {
                    return Globalize.format(b, c)
                }
            else if (a.jqx.dataFormat)
                return a.jqx.dataFormat.formatdate(b, c, this.localization.calendar)
        },
        _textwidth: function(b) {
            var c = a("<span>" + b + "</span>");
            c.addClass(this.toThemeProperty("jqx-calendar-column-cell")),
            a(this.host).append(c);
            var d = c.width();
            return c.remove(),
            d
        },
        _textheight: function(b) {
            var c = a("<span>" + b + "</span>");
            a(this.host).append(c);
            var d = c.height();
            return c.remove(),
            d
        },
        _renderRowHeader: function(b) {
            var c = this.getVisibleDate()
              , d = this.getFirstDayOfWeek(c)
              , e = (d.dayOfWeek,
            this.getWeekOfYear(d))
              , f = new a.jqx._jqxDateTimeInput.getDateTime(new Date(d.dateTime));
            f._addDays(5),
            f.dayOfWeek = f.dateTime.getDay();
            this.getWeekOfYear(f);
            53 == e && 0 == f.dateTime.getMonth() && (e = 1);
            var g = a("<table style='overflow: hidden; width: 100%; height: 100%;' cellspacing='0' cellpadding='1'><tr><td></td></tr><tr><td/></tr><tr><td/></tr><tr><td/></tr><tr><td/></tr><tr><td/></tr></table>");
            g.find("table").addClass(this.toThemeProperty("jqx-reset")),
            g.find("td").addClass(this.toThemeProperty("jqx-reset")),
            g.find("tr").addClass(this.toThemeProperty("jqx-reset")),
            g.addClass(this.toThemeProperty("jqx-calendar-row-header")),
            g.width(this.rowHeaderWidth),
            this.rowHeader.append(g);
            for (var h = d, i = new Array, j = 0; j < 6; j++) {
                var k = e.toString()
                  , l = new a.jqx._jqxCalendar.cell(h.dateTime)
                  , m = j + 1 + this.element.id
                  , n = a(g[0].rows[j].cells[0]);
                l.element = n,
                l.row = j,
                l.column = 0;
                var o = "<div style='background: transparent; border: none; padding: 0; margin: 0;' id ='headerCellContent" + m + "'>" + k + "</div>";
                n.append(o),
                n.find("#headerCellContent" + m).addClass(this.toThemeProperty("jqx-calendar-row-cell")),
                i[j] = l,
                h = new a.jqx._jqxDateTimeInput.getDateTime(new Date(h._addWeeks(1))),
                e = this.getWeekOfYear(h)
            }
            var p = a.data(this.element, b[0].id);
            p.rowCells = i
        },
        getFirstDayOfWeek: function(b) {
            var c = b;
            (this.firstDayOfWeek < 0 || this.firstDayOfWeek > 6) && (this.firstDayOfWeek = 6);
            var d = c.dayOfWeek - this.firstDayOfWeek;
            d <= 0 && (d += 7);
            var e = a.jqx._jqxDateTimeInput.getDateTime(c._addDays(-d));
            return e
        },
        getVisibleDate: function() {
            var b = new a.jqx._jqxDateTimeInput.getDateTime(new Date(this.value.dateTime));
            b < this.minDate && (b = this.minDate),
            b > this.maxDate && (this.visibleDate = this.maxDate),
            b.dateTime.setHours(0);
            var c = b.day
              , d = a.jqx._jqxDateTimeInput.getDateTime(b._addDays(-c + 1));
            return b = d
        },
        destroy: function(b) {
            a.jqx.utilities.resize(this.host, null, !0),
            this.host.removeClass(),
            0 != b && this.host.remove()
        },
        _raiseEvent: function(b, c) {
            void 0 == c && (c = {
                owner: null
            });
            var d = this.events[b]
              , e = c ? c : {};
            e.owner = this;
            var f = new a.Event(d);
            if (f.owner = this,
            f.args = e,
            0 == b || 1 == b || 2 == b || 3 == b || 4 == b || 5 == b || 6 == b || 7 == b || 8 == b) {
                f.args.date = f.args.selectedDate = this.getDate(),
                f.args.range = this.getRange();
                var g = this.getViewStart()
                  , h = this.getViewEnd();
                f.args.view = {
                    from: g,
                    to: h
                }
            }
            if (7 == b) {
                var i = e.selectionType;
                i || (i = null),
                "key" == i && (i = "keyboard"),
                "none" == i && (i = null),
                e.type = i
            }
            var j = this.host.trigger(f);
            return 0 != b && 1 != b || (j = !1),
            j
        },
        propertyMap: function(a) {
            return "value" == a ? "range" != this.selectionMode ? this.getDate() : this.getRange() : null
        },
        _setSize: function() {
            var a = this.host.find("#View" + this.element.id);
            if (a.length > 0) {
                this.setCalendarSize(),
                void 0 == this.height || isNaN(this.height) ? null != this.height && this.height.toString().indexOf("px") != -1 && a.height(this.height) : a.height(this.height),
                void 0 == this.width || isNaN(this.width) ? null != this.width && this.width.toString().indexOf("px") != -1 && a.width(this.width) : a.width(this.width);
                var b = this.host.height() - this.titleHeight - this.columnHeaderHeight
                  , c = "View" + this.element.id;
                a.find("#cellsTable" + c).height(b),
                a.find("#calendarRowHeader" + c).height(b),
                this.refreshControl()
            }
        },
        resize: function() {
            this._setSize()
        },
        clear: function() {
            "range" == this.selectionMode ? (this._clicks = 1,
            this.setRange(null, null),
            this._raiseEvent(7)) : this.setDate(null, "mouse"),
            this._clicks = 0,
            this.selection = {
                from: null,
                to: null
            }
        },
        today: function() {
            "range" == this.selectionMode ? this.setRange(new Date, new Date) : this.setDate(new Date, "mouse")
        },
        propertiesChangedHandler: function(a, b, c) {
            c.width && c.height && 2 == Object.keys(c).length && a._setSize()
        },
        propertyChangedHandler: function(b, c, d, e) {
            if (void 0 != this.isInitialized && 0 != this.isInitialized && !(b.batchUpdate && b.batchUpdate.width && b.batchUpdate.height && 2 == Object.keys(b.batchUpdate).length) && "enableHover" != c && "keyboardNavigation" != c) {
                if ("localization" == c && this.localization && (this.localization.backString && (this.backText = this.localization.backString),
                this.localization.forwardString && (this.forwardText = this.localization.forwardString),
                this.localization.todayString && (this.todayString = this.localization.todayString),
                this.localization.clearString && (this.clearString = this.localization.clearString),
                this.firstDayOfWeek = this.localization.calendar.firstDay),
                "culture" == c)
                    try {
                        if (a.global)
                            a.global.preferCulture(b.culture),
                            b.localization.calendar = a.global.culture.calendar;
                        else if (Globalize) {
                            var f = Globalize.culture(b.culture);
                            b.localization.calendar = f.calendar
                        }
                        b.localization.calendar && void 0 != b.localization.calendar.firstDay && "default" != b.culture && (b.firstDayOfWeek = b.localization.calendar.firstDay)
                    } catch (a) {}
                return "views" == c ? (b.views.indexOf("month") == -1 && (b.view = "year"),
                b.views.indexOf("year") == -1 && b.views.indexOf("month") == -1 && (b.view = "decade"),
                void b.render()) : ("showFooter" == c && b.render(),
                "width" == c || "height" == c ? void b._setSize() : void ("theme" == c ? a.jqx.utilities.setTheme(d, e, b.host) : "rowHeaderWidth" == c || "showWeekNumbers" == c ? b.render() : (b.view = "month",
                b.render())))
            }
        }
    })
}(jqxBaseFramework),
function(a) {
    a.jqx._jqxCalendar.cell = function(b) {
        var c = {
            dateTime: new a.jqx._jqxDateTimeInput.getDateTime(b),
            _date: b,
            getDate: function() {
                return this._date
            },
            setDate: function(b) {
                this.dateTime = new a.jqx._jqxDateTimeInput.getDateTime(b),
                this._date = b
            },
            isToday: !1,
            isWeekend: !1,
            isOtherMonth: !1,
            isVisible: !0,
            isSelected: !1,
            isHighlighted: !1,
            element: null,
            row: -1,
            column: -1,
            tooltip: null
        };
        return c
    }
    ,
    a.jqx._jqxCalendar.monthView = function(a, b, c, d, e, f) {
        var g = {
            start: a,
            end: b,
            cells: c,
            rowCells: d,
            columnCells: e,
            element: f
        };
        return g
    }
}(jqxBaseFramework);
