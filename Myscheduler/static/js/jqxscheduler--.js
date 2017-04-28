/*
jQWidgets v4.5.1 (2017-April)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(a) {
    "use strict";
    a.jqx.scheduler || (a.jqx.scheduler = {}),
    a.jqx.jqxWidget("jqxScheduler", "", {}),
    a.extend(a.jqx._jqxScheduler.prototype, {
        defineInstance: function() {
            var b = {
                altRows: !1,
                autoShowLoadElement: !0,
                columnsHeight: 30,
                columns: [],
                columnGroups: null,
                dataview: null,
                disabled: !1,
                enableHover: !0,
                appointmentOpacity: .8,
                headerZIndex: 359,
                height: 600,
                timeRulerWidth: 60,
                loadingErrorMessage: "The data is still loading and you cannot set a property or call a method. You can do that once the data binding is completed. jqxScheduler raises the 'bindingComplete' event when the binding is completed.",
                localization: null,
                ready: null,
                renderToolBar: null,
                renderAppointment: null,
                rendered: null,
                rendering: null,
                rtl: !1,
                showToolbar: !0,
                showLegend: !1,
                legendPosition: "bottom",
                legendHeight: 34,
                rowsHeight: 27,
                touchRowsHeight: 36,
                appointmentsMinHeight: 18,
                touchAppointmentsMinHeight: 27,
                appointmentsRenderMode: "default",
                serverProcessing: !1,
                selectionMode: "multiplerows",
                scrollBarSize: a.jqx.utilities.scrollBarSize,
                touchScrollBarSize: a.jqx.utilities.touchScrollBarSize,
                showHeader: !0,
                maxHeight: 999999,
                maxWidth: 999999,
                autoBind: !0,
                showAllDayRow: !0,
                changedAppointments: new Array,
                renderMode: "simple",
                views: new Array,
                view: 0,
                min: new a.jqx.date(0),
                max: new a.jqx.date(9999,12,31),
                date: new a.jqx.date("todayDate"),
                colors: ["#307DD7", "#AA4643", "#89A54E", "#71588F", "#4198AF", "#7FD13B", "#EA157A", "#FEB80A", "#00ADDC", "#738AC8", "#E8601A", "#FF9639", "#F5BD6A", "#599994", "#115D6E", "#D02841", "#FF7C41", "#FFC051", "#5B5F4D", "#364651", "#25A0DA", "#309B46", "#8EBC00", "#FF7515", "#FFAE00", "#0A3A4A", "#196674", "#33A6B2", "#9AC836", "#D0E64B", "#CC6B32", "#FFAB48", "#FFE7AD", "#A7C9AE", "#888A63", "#3F3943", "#01A2A6", "#29D9C2", "#BDF271", "#FFFFA6", "#1B2B32", "#37646F", "#A3ABAF", "#E1E7E8", "#B22E2F", "#5A4B53", "#9C3C58", "#DE2B5B", "#D86A41", "#D2A825", "#993144", "#FFA257", "#CCA56A", "#ADA072", "#949681", "#105B63", "#EEEAC5", "#FFD34E", "#DB9E36", "#BD4932", "#BBEBBC", "#F0EE94", "#F5C465", "#FA7642", "#FF1E54", "#60573E", "#F2EEAC", "#BFA575", "#A63841", "#BFB8A3", "#444546", "#FFBB6E", "#F28D00", "#D94F00", "#7F203B", "#583C39", "#674E49", "#948658", "#F0E99A", "#564E49", "#142D58", "#447F6E", "#E1B65B", "#C8782A", "#9E3E17", "#4D2B1F", "#635D61", "#7992A2", "#97BFD5", "#BFDCF5", "#844341", "#D5CC92", "#BBA146", "#897B26", "#55591C", "#56626B", "#6C9380", "#C0CA55", "#F07C6C", "#AD5472", "#96003A", "#FF7347", "#FFBC7B", "#FF4154", "#642223", "#5D7359", "#E0D697", "#D6AA5C", "#8C5430", "#661C0E", "#16193B", "#35478C", "#4E7AC7", "#7FB2F0", "#ADD5F7", "#7B1A25", "#BF5322", "#9DA860", "#CEA457", "#B67818", "#0081DA", "#3AAFFF", "#99C900", "#FFEB3D", "#309B46", "#0069A5", "#0098EE", "#7BD2F6", "#FFB800", "#FF6800", "#FF6800", "#A0A700", "#FF8D00", "#678900", "#0069A5"],
                colorSchemes: [{
                    name: "scheme01",
                    colors: ["#307DD7", "#AA4643", "#89A54E", "#71588F", "#4198AF"]
                }, {
                    name: "scheme02",
                    colors: ["#7FD13B", "#EA157A", "#FEB80A", "#00ADDC", "#738AC8"]
                }, {
                    name: "scheme03",
                    colors: ["#E8601A", "#FF9639", "#F5BD6A", "#599994", "#115D6E"]
                }, {
                    name: "scheme04",
                    colors: ["#D02841", "#FF7C41", "#FFC051", "#5B5F4D", "#364651"]
                }, {
                    name: "scheme05",
                    colors: ["#25A0DA", "#309B46", "#8EBC00", "#FF7515", "#FFAE00"]
                }, {
                    name: "scheme06",
                    colors: ["#0A3A4A", "#196674", "#33A6B2", "#9AC836", "#D0E64B"]
                }, {
                    name: "scheme07",
                    colors: ["#CC6B32", "#FFAB48", "#FFE7AD", "#A7C9AE", "#888A63"]
                }, {
                    name: "scheme08",
                    colors: ["#3F3943", "#01A2A6", "#29D9C2", "#BDF271", "#FFFFA6"]
                }, {
                    name: "scheme09",
                    colors: ["#1B2B32", "#37646F", "#A3ABAF", "#E1E7E8", "#B22E2F"]
                }, {
                    name: "scheme10",
                    colors: ["#5A4B53", "#9C3C58", "#DE2B5B", "#D86A41", "#D2A825"]
                }, {
                    name: "scheme11",
                    colors: ["#993144", "#FFA257", "#CCA56A", "#ADA072", "#949681"]
                }, {
                    name: "scheme12",
                    colors: ["#105B63", "#EEEAC5", "#FFD34E", "#DB9E36", "#BD4932"]
                }, {
                    name: "scheme13",
                    colors: ["#BBEBBC", "#F0EE94", "#F5C465", "#FA7642", "#FF1E54"]
                }, {
                    name: "scheme14",
                    colors: ["#60573E", "#F2EEAC", "#BFA575", "#A63841", "#BFB8A3"]
                }, {
                    name: "scheme15",
                    colors: ["#444546", "#FFBB6E", "#F28D00", "#D94F00", "#7F203B"]
                }, {
                    name: "scheme16",
                    colors: ["#583C39", "#674E49", "#948658", "#F0E99A", "#564E49"]
                }, {
                    name: "scheme17",
                    colors: ["#142D58", "#447F6E", "#E1B65B", "#C8782A", "#9E3E17"]
                }, {
                    name: "scheme18",
                    colors: ["#4D2B1F", "#635D61", "#7992A2", "#97BFD5", "#BFDCF5"]
                }, {
                    name: "scheme19",
                    colors: ["#844341", "#D5CC92", "#BBA146", "#897B26", "#55591C"]
                }, {
                    name: "scheme20",
                    colors: ["#56626B", "#6C9380", "#C0CA55", "#F07C6C", "#AD5472"]
                }, {
                    name: "scheme21",
                    colors: ["#96003A", "#FF7347", "#FFBC7B", "#FF4154", "#642223"]
                }, {
                    name: "scheme22",
                    colors: ["#5D7359", "#E0D697", "#D6AA5C", "#8C5430", "#661C0E"]
                }, {
                    name: "scheme23",
                    colors: ["#16193B", "#35478C", "#4E7AC7", "#7FB2F0", "#ADD5F7"]
                }, {
                    name: "scheme24",
                    colors: ["#7B1A25", "#BF5322", "#9DA860", "#CEA457", "#B67818"]
                }, {
                    name: "scheme25",
                    colors: ["#0081DA", "#3AAFFF", "#99C900", "#FFEB3D", "#309B46"]
                }, {
                    name: "scheme26",
                    colors: ["#0069A5", "#0098EE", "#7BD2F6", "#FFB800", "#FF6800"]
                }, {
                    name: "scheme27",
                    colors: ["#FF6800", "#A0A700", "#FF8D00", "#678900", "#0069A5"]
                }],
                resources: null,
                contextMenu: !0,
                contextMenuOpen: null,
                contextMenuClose: null,
                contextMenuItemClick: null,
                contextMenuCreate: null,
                timeZone: null,
                statuses: {
                    free: "white",
                    tentative: "tentative",
                    busy: "transparent",
                    outOfOffice: "#800080"
                },
                appointmentDataFields: {
                    from: "from",
                    to: "to",
                    id: "id",
                    calendarId: "calendarId",
                    description: "description",
                    location: "location",
                    subject: "subject",
                    background: "background",
                    color: "color",
                    borderColor: "borderColor",
                    style: "style",
                    recurrencePattern: "recurrencePattern",
                    recurrenceException: "recurrenceException",
                    draggable: "draggable",
                    resizable: "resizable",
                    resourceId: "resourceId",
                    status: "status",
                    tooltip: "tooltip",
                    hidden: "hidden",
                    allDay: "allDay",
                    timeZone: "timeZone",
                    ownerId: "ownerId"
                },
                appointmentTooltips: !0,
                tableColumns: 1,
                tableRows: 1,
                dayNameFormat: "full",
                touchDayNameFormat: "abbr",
                toolBarRangeFormat: "dd MMMM yyyy",
                toolBarRangeFormatAbbr: "dd MM yyyy",
                columnRenderer: null,
                exportSettings: {
                    serverURL: null,
                    characterSet: null,
                    fileName: "jqxScheduler",
                    dateTimeFormatString: "S",
                    resourcesInMultipleICSFiles: !1
                },
                source: {
                    beforeprocessing: null,
                    beforesend: null,
                    loaderror: null,
                    localdata: null,
                    data: null,
                    datatype: "array",
                    datafields: [],
                    url: "",
                    root: "",
                    record: "",
                    id: "",
                    totalrecords: 0,
                    recordstartindex: 0,
                    recordendindex: 0,
                    loadallrecords: !0,
                    sortcolumn: null,
                    sortdirection: null,
                    sort: null,
                    filter: null,
                    sortcomparer: null
                },
                editDialogDateTimeFormatString: "dd/MM/yyyy hh:mm tt",
                editDialogDateFormatString: "dd/MM/yyyy",
                editDialogOpen: null,
                editDialogCreate: null,
                editDialogKeyDown: null,
                editDialogClose: null,
                editDialog: !0,
                toolbarHeight: 54,
                tableZIndex: 369,
                _updating: !1,
                touchMode: "auto",
                width: 800,
                that: this,
                beginDrag: null,
                endDrag: null,
                dragging: null,
                timeZones: [{
                    id: "Dateline Standard Time",
                    offset: -720,
                    offsetHours: -12,
                    displayName: "(UTC-12:00) International Date Line West",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "UTC-11",
                    offset: -660,
                    offsetHours: -11,
                    displayName: "(UTC-11:00) Coordinated Universal Time-11",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Hawaiteratoran Standard Time",
                    offset: -600,
                    offsetHours: -10,
                    displayName: "(UTC-10:00) Hawaiterator",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Alaskan Standard Time",
                    offset: -540,
                    offsetHours: -9,
                    displayName: "(UTC-09:00) Alaska",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Pacific Standard Time (Mexico)",
                    offset: -480,
                    offsetHours: -8,
                    displayName: "(UTC-08:00) Baja California",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Pacific Standard Time",
                    offset: -480,
                    offsetHours: -8,
                    displayName: "(UTC-08:00) Pacific Time (US & Canada)",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "US Mountain Standard Time",
                    offset: -420,
                    offsetHours: -7,
                    displayName: "(UTC-07:00) Arizona",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Mountain Standard Time (Mexico)",
                    offset: -420,
                    offsetHours: -7,
                    displayName: "(UTC-07:00) Chihuahua, La Paz, Mazatlan",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Mountain Standard Time",
                    offset: -420,
                    offsetHours: -7,
                    displayName: "(UTC-07:00) Mountain Time (US & Canada)",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Central Standard Time",
                    offset: -360,
                    offsetHours: -6,
                    displayName: "(UTC-06:00) Central Time (US & Canada)",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Central America Standard Time",
                    offset: -360,
                    offsetHours: -6,
                    displayName: "(UTC-06:00) Central America",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Canada Central Standard Time",
                    offset: -360,
                    offsetHours: -6,
                    displayName: "(UTC-06:00) Saskatchewan",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Central Standard Time (Mexico)",
                    offset: -360,
                    offsetHours: -6,
                    displayName: "(UTC-06:00) Guadalajara, Mexico City, Monterrey",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "SA Pacific Standard Time",
                    offset: -300,
                    offsetHours: -5,
                    displayName: "(UTC-05:00) Bogota, Lima, Quito, Rio Branco",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Eastern Standard Time",
                    offset: -300,
                    offsetHours: -5,
                    displayName: "(UTC-05:00) Eastern Time (US & Canada)",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "US Eastern Standard Time",
                    offset: -300,
                    offsetHours: -5,
                    displayName: "(UTC-05:00) Indiana (East)",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Venezuela Standard Time",
                    offset: -270,
                    offsetHours: -4.5,
                    displayName: "(UTC-04:30) Caracas",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Atlantic Standard Time",
                    offset: -240,
                    offsetHours: -4,
                    displayName: "(UTC-04:00) Atlantic Time (Canada)",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Paraguay Standard Time",
                    offset: -240,
                    offsetHours: -4,
                    displayName: "(UTC-04:00) Asuncion",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Central Brazilian Standard Time",
                    offset: -240,
                    offsetHours: -4,
                    displayName: "(UTC-04:00) Cuiaba",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Pacific SA Standard Time",
                    offset: -240,
                    offsetHours: -4,
                    displayName: "(UTC-04:00) Santiago",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "SA Western Standard Time",
                    offset: -240,
                    offsetHours: -4,
                    displayName: "(UTC-04:00) Georgetown, La Paz, Manaus",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Newfoundland Standard Time",
                    offset: -210,
                    offsetHours: -3.5,
                    displayName: "(UTC-03:30) Newfoundland",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "SA Eastern Standard Time",
                    offset: -180,
                    offsetHours: -3,
                    displayName: "(UTC-03:00) Cayenne, Fortaleza",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Argentina Standard Time",
                    offset: -180,
                    offsetHours: -3,
                    displayName: "(UTC-03:00) Buenos Aires",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "E. South America Standard Time",
                    offset: -180,
                    offsetHours: -3,
                    displayName: "(UTC-03:00) Brasilia",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Bahia Standard Time",
                    offset: -180,
                    offsetHours: -3,
                    displayName: "(UTC-03:00) Salvador",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Montevideo Standard Time",
                    offset: -180,
                    offsetHours: -3,
                    displayName: "(UTC-03:00) Montevideo",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Greenland Standard Time",
                    offset: -180,
                    offsetHours: -3,
                    displayName: "(UTC-03:00) Greenland",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "UTC-02",
                    offset: -120,
                    offsetHours: -2,
                    displayName: "(UTC-02:00) Coordinated Universal Time-02",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Mid-Atlantic Standard Time",
                    offset: -120,
                    offsetHours: -2,
                    displayName: "(UTC-02:00) Mid-Atlantic - Old",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Azores Standard Time",
                    offset: -60,
                    offsetHours: -1,
                    displayName: "(UTC-01:00) Azores",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Cape Verde Standard Time",
                    offset: -60,
                    offsetHours: -1,
                    displayName: "(UTC-01:00) Cape Verde Is.",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Morocco Standard Time",
                    offset: 0,
                    offsetHours: 0,
                    displayName: "(UTC) Casablanca",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "UTC",
                    offset: 0,
                    offsetHours: 0,
                    displayName: "(UTC) Coordinated Universal Time",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "GMT Standard Time",
                    offset: 0,
                    offsetHours: 0,
                    displayName: "(UTC) Dublin, Edinburgh, Lisbon, London",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Greenwich Standard Time",
                    offset: 0,
                    offsetHours: 0,
                    displayName: "(UTC) Monrovia, Reykjavik",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Central European Standard Time",
                    offset: 60,
                    offsetHours: 1,
                    displayName: "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Namibia Standard Time",
                    offset: 60,
                    offsetHours: 1,
                    displayName: "(UTC+01:00) Windhoek",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "W. Central Africa Standard Time",
                    offset: 60,
                    offsetHours: 1,
                    displayName: "(UTC+01:00) West Central Africa",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "W. Europe Standard Time",
                    offset: 60,
                    offsetHours: 1,
                    displayName: "(UTC+01:00) Amsterdam, Berlin, Rome",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Central Europe Standard Time",
                    offset: 60,
                    offsetHours: 1,
                    displayName: "(UTC+01:00) Belgrade, Budapest, Prague",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Romance Standard Time",
                    offset: 60,
                    offsetHours: 1,
                    displayName: "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "FLE Standard Time",
                    offset: 120,
                    offsetHours: 2,
                    displayName: "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "South Africa Standard Time",
                    offset: 120,
                    offsetHours: 2,
                    displayName: "(UTC+02:00) Harare, Pretoria",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Turkey Standard Time",
                    offset: 120,
                    offsetHours: 2,
                    displayName: "(UTC+02:00) Istanbul",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "GTB Standard Time",
                    offset: 120,
                    offsetHours: 2,
                    displayName: "(UTC+02:00) Athens, Bucharest",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Libya Standard Time",
                    offset: 120,
                    offsetHours: 2,
                    displayName: "(UTC+02:00) Tripoli",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "E. Europe Standard Time",
                    offset: 120,
                    offsetHours: 2,
                    displayName: "(UTC+02:00) E. Europe",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Jordan Standard Time",
                    offset: 120,
                    offsetHours: 2,
                    displayName: "(UTC+02:00) Amman",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Middle East Standard Time",
                    offset: 120,
                    offsetHours: 2,
                    displayName: "(UTC+02:00) Beirut",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Egypt Standard Time",
                    offset: 120,
                    offsetHours: 2,
                    displayName: "(UTC+02:00) Cairo",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Syria Standard Time",
                    offset: 120,
                    offsetHours: 2,
                    displayName: "(UTC+02:00) Damascus",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Israel Standard Time",
                    offset: 120,
                    offsetHours: 2,
                    displayName: "(UTC+02:00) Jerusalem",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Arab Standard Time",
                    offset: 180,
                    offsetHours: 3,
                    displayName: "(UTC+03:00) Kuwait, Riyadh",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "E. Africa Standard Time",
                    offset: 180,
                    offsetHours: 3,
                    displayName: "(UTC+03:00) Nairobi",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Arabic Standard Time",
                    offset: 180,
                    offsetHours: 3,
                    displayName: "(UTC+03:00) Baghdad",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Kaliningrad Standard Time",
                    offset: 180,
                    offsetHours: 3,
                    displayName: "(UTC+03:00) Kaliningrad, Minsk",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Iran Standard Time",
                    offset: 210,
                    offsetHours: 3.5,
                    displayName: "(UTC+03:30) Tehran",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Mauritius Standard Time",
                    offset: 240,
                    offsetHours: 4,
                    displayName: "(UTC+04:00) Port Louis",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Georgian Standard Time",
                    offset: 240,
                    offsetHours: 4,
                    displayName: "(UTC+04:00) Tbilisi",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Caucasus Standard Time",
                    offset: 240,
                    offsetHours: 4,
                    displayName: "(UTC+04:00) Yerevan",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Arabian Standard Time",
                    offset: 240,
                    offsetHours: 4,
                    displayName: "(UTC+04:00) Abu Dhabi, Muscat",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Azerbaijan Standard Time",
                    offset: 240,
                    offsetHours: 4,
                    displayName: "(UTC+04:00) Baku",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Russian Standard Time",
                    offset: 240,
                    offsetHours: 4,
                    displayName: "(UTC+04:00) Moscow, St. Petersburg, Volgograd",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Afghanistan Standard Time",
                    offset: 270,
                    offsetHours: 4.5,
                    displayName: "(UTC+04:30) Kabul",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Pakistan Standard Time",
                    offset: 300,
                    offsetHours: 5,
                    displayName: "(UTC+05:00) Islamabad, Karachi",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "West Asia Standard Time",
                    offset: 300,
                    offsetHours: 5,
                    displayName: "(UTC+05:00) Ashgabat, Tashkent",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "India Standard Time",
                    offset: 330,
                    offsetHours: 5.5,
                    displayName: "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Sri Lanka Standard Time",
                    offset: 330,
                    offsetHours: 5.5,
                    displayName: "(UTC+05:30) Sri Jayawardenepura",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Nepal Standard Time",
                    offset: 345,
                    offsetHours: 5.75,
                    displayName: "(UTC+05:45) Kathmandu",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Central Asia Standard Time",
                    offset: 360,
                    offsetHours: 6,
                    displayName: "(UTC+06:00) Astana",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Bangladesh Standard Time",
                    offset: 360,
                    offsetHours: 6,
                    displayName: "(UTC+06:00) Dhaka",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Ekaterinburg Standard Time",
                    offset: 360,
                    offsetHours: 6,
                    displayName: "(UTC+06:00) Ekaterinburg",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Myanmar Standard Time",
                    offset: 390,
                    offsetHours: 6.5,
                    displayName: "(UTC+06:30) Yangon (Rangoon)",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "SE Asia Standard Time",
                    offset: 420,
                    offsetHours: 7,
                    displayName: "(UTC+07:00) Bangkok, Hanoi, Jakarta",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "N. Central Asia Standard Time",
                    offset: 420,
                    offsetHours: 7,
                    displayName: "(UTC+07:00) Novosibirsk",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Ulaanbaatar Standard Time",
                    offset: 480,
                    offsetHours: 8,
                    displayName: "(UTC+08:00) Ulaanbaatar",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "China Standard Time",
                    offset: 480,
                    offsetHours: 8,
                    displayName: "(UTC+08:00) Beijing, Chongqing, Hong Kong",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Singapore Standard Time",
                    offset: 480,
                    offsetHours: 8,
                    displayName: "(UTC+08:00) Kuala Lumpur, Singapore",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "North Asia Standard Time",
                    offset: 480,
                    offsetHours: 8,
                    displayName: "(UTC+08:00) Krasnoyarsk",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Taipei Standard Time",
                    offset: 480,
                    offsetHours: 8,
                    displayName: "(UTC+08:00) Taipei",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "W. Australia Standard Time",
                    offset: 480,
                    offsetHours: 8,
                    displayName: "(UTC+08:00) Perth",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Korea Standard Time",
                    offset: 540,
                    offsetHours: 9,
                    displayName: "(UTC+09:00) Seoul",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "North Asia East Standard Time",
                    offset: 540,
                    offsetHours: 9,
                    displayName: "(UTC+09:00) Irkutsk",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Tokyo Standard Time",
                    offset: 540,
                    offsetHours: 9,
                    displayName: "(UTC+09:00) Osaka, Sapporo, Tokyo",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "AUS Central Standard Time",
                    offset: 570,
                    offsetHours: 9.5,
                    displayName: "(UTC+09:30) Darwin",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Cen. Australia Standard Time",
                    offset: 570,
                    offsetHours: 9.5,
                    displayName: "(UTC+09:30) Adelaide",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "West Pacific Standard Time",
                    offset: 600,
                    offsetHours: 10,
                    displayName: "(UTC+10:00) Guam, Port Moresby",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Tasmania Standard Time",
                    offset: 600,
                    offsetHours: 10,
                    displayName: "(UTC+10:00) Hobart",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "E. Australia Standard Time",
                    offset: 600,
                    offsetHours: 10,
                    displayName: "(UTC+10:00) Brisbane",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "AUS Eastern Standard Time",
                    offset: 600,
                    offsetHours: 10,
                    displayName: "(UTC+10:00) Canberra, Melbourne, Sydney",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Yakutsk Standard Time",
                    offset: 600,
                    offsetHours: 10,
                    displayName: "(UTC+10:00) Yakutsk",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Vladivostok Standard Time",
                    offset: 660,
                    offsetHours: 11,
                    displayName: "(UTC+11:00) Vladivostok",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Central Pacific Standard Time",
                    offset: 660,
                    offsetHours: 11,
                    displayName: "(UTC+11:00) Solomon Is., New Caledonia",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Magadan Standard Time",
                    offset: 720,
                    offsetHours: 12,
                    displayName: "(UTC+12:00) Magadan",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Kamchatka Standard Time",
                    offset: 720,
                    offsetHours: 12,
                    displayName: "(UTC+12:00) Petropavlovsk-Kamchatsky - Old",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "Fiji Standard Time",
                    offset: 720,
                    offsetHours: 12,
                    displayName: "(UTC+12:00) Fiji",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "New Zealand Standard Time",
                    offset: 720,
                    offsetHours: 12,
                    displayName: "(UTC+12:00) Auckland, Wellington",
                    supportsDaylightSavingTime: !0
                }, {
                    id: "UTC+12",
                    offset: 720,
                    offsetHours: 12,
                    displayName: "(UTC+12:00) Coordinated Universal Time+12",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Tonga Standard Time",
                    offset: 780,
                    offsetHours: 13,
                    displayName: "(UTC+13:00) Nuku'alofa",
                    supportsDaylightSavingTime: !1
                }, {
                    id: "Samoa Standard Time",
                    offset: 780,
                    offsetHours: 13,
                    displayName: "(UTC+13:00) Samoa",
                    supportsDaylightSavingTime: !0
                }]
            };
            return this === a.jqx._jqxScheduler.prototype ? b : (a.extend(!0, this, b),
            this.that = this,
            b)
        },
        createInstance: function(b) {
            var c = this;
            c._views = new Array,
            c._view = c.view;
            for (var d = 0; d < c.views.length; d++)
                "string" === a.type(c.views[d]) ? c._views.push({
                    type: c.views[d]
                }) : c._views.push(c.views[d]);
            for (var d = 0; d < c._views.length; d++)
                if (c._views[d].type == c.view) {
                    c._view = d;
                    break
                }
            15 != a.jqx.utilities.scrollBarSize && (c.scrollBarSize = a.jqx.utilities.scrollBarSize),
            c.source && !c.source.dataBind && (c.source = new a.jqx.dataAdapter(c.source));
            var e = c.source._source.datafields;
            e && e.length > 0 && (c._camelCase = void 0 !== c.source._source.dataFields,
            c.selectionMode = c.selectionMode.toLowerCase()),
            null == c.host.attr("tabindex") && c.host.attr("tabindex", "0"),
            c.host.attr("role", "grid"),
            c.host.attr("align", "left"),
            c.host.addClass(c.toTP("jqx-grid")),
            c.host.addClass(c.toTP("jqx-scheduler")),
            c.host.addClass(c.toTP("jqx-reset")),
            c.host.addClass(c.toTP("jqx-rc-all")),
            c.host.addClass(c.toTP("jqx-widget")),
            c.host.addClass(c.toTP("jqx-widget-content jqx-disableselect")),
            c._testmodules() || (c.overlay = a("<div style='z-index: 999; position:absolute;'></div>"),
            c.overlay.hide(),
            c.overlay.appendTo(c.host),
            c.render(!0),
            a.jqx.utilities.resize(c.host, function() {
                var b = a(window).width()
                  , d = a(window).height();
                c._hostWidth = null,
                c._hostHeight = null;
                var e = c.host.width()
                  , f = c.host.height();
                c._hostWidth = e,
                c._hostHeight = f,
                c._lastHostWidth == e && c._lastHostHeight == f || c._updatesize(c._lastHostWidth != e, c._lastHostHeight != f),
                c._lastWidth = b,
                c._lastHeight = d,
                c._lastHostWidth = e,
                c._lastHostHeight = f
            }),
            c.createEditRecurrenceDialog())
        },
        createEditRecurrenceDialog: function() {
            var b = this;
            b.editRecurrenceDialog = null;
            var c = a("<div><div>" + b.schedulerLocalization.editRecurringAppointmentDialogTitleString + "</div><div><div>" + b.schedulerLocalization.editRecurringAppointmentDialogContentString + "</div><div style='position: absolute; white-space:nowrap; text-overflow: ellipsis; left:0px; width:100%; bottom: 0px;'><button title='" + b.schedulerLocalization.editRecurringAppointmentDialogOccurrenceString + "' id='editRecurringAppointmentOccurrence." + b.element.id + "' style='white-space:nowrap; text-overflow: ellipsis; border-left-width: 0px;  border-bottom-width: 0px; border-radius:0px; width:50%;'>" + b.schedulerLocalization.editRecurringAppointmentDialogOccurrenceString + "</button><button title='" + b.schedulerLocalization.editRecurringAppointmentDialogSeriesString + "' id='editRecurringAppointmentSeries." + b.element.id + "' style=' white-space:nowrap; text-overflow: ellipsis; border-bottom-width: 0px;  border-left-width: 0px; border-right-width:0px; width:50%; border-radius:0px;'>" + b.schedulerLocalization.editRecurringAppointmentDialogSeriesString + "</button></div></div></div>");
            b.editRecurrenceDialog = c,
            a(c).jqxWindow({
                rtl: b.rtl,
                autoFocus: !1,
                animationType: "none",
                autoOpen: !1,
                theme: b.theme,
                minWidth: 300,
                minHeight: 110,
                resizable: !1
            });
            var d = c.find("button");
            d.jqxButton({
                theme: b.theme,
                width: "50%",
                height: 30
            });
            var e = !1;
            d.mousedown(function() {
                e = !0;
                var d = this.id;
                d.indexOf("editRecurringAppointmentOccurrence") >= 0 ? b.editSeries(!1) : b.editSeries(!0),
                a(c).jqxWindow("close")
            }),
            this.addHandler(a(c), "open", function(a) {
                b._raiseEvent("editRecurrenceDialogOpen", {
                    dialog: c,
                    appointment: b.selectedJQXAppointment ? b.selectedJQXAppointment.boundAppointment : null
                })
            }),
            b.addHandler(a(c), "keydown", function(b) {
                if (13 == b.keyCode && a(document.activeElement).ischildof(a(c)) && "button" == document.activeElement.nodeName.toLowerCase())
                    return a(document.activeElement).trigger("mousedown"),
                    a(document.activeElement).trigger("mouseup"),
                    !0
            }),
            this.addHandler(a(c), "close", function(a) {
                return e ? (e = !1,
                b.overlay.hide(),
                b.focus(),
                void b._raiseEvent("editRecurrenceDialogClose", {
                    dialog: c,
                    appointment: b.selectedJQXAppointment ? b.selectedJQXAppointment.boundAppointment : null
                })) : (b._removeFeedbackAndStopResize(),
                b.overlay.hide(),
                b.focus(),
                b._raiseEvent("editRecurrenceDialogClose", {
                    dialog: c,
                    appointment: b.selectedJQXAppointment ? b.selectedJQXAppointment.boundAppointment : null
                }),
                !1)
            }),
            b.editRecurrenceDialog = c
        },
        getViewStart: function() {
            var a = this.getVisibleDate()
              , b = this._views[this._view].type;
            this._views[this._view];
            switch (b) {
            case "dayView":
            case "timelineDayView":
                return a
            }
            var c = this.getFirstDayOfWeek(a);
            return c
        },
        getViewEnd: function() {
            var a = this.getViewStart()
              , b = 1
              , c = this._views[this._view].type
              , d = this._views[this._view];
            switch (c) {
            case "dayView":
                b = 1;
                break;
            case "timelineDayView":
                b = 1,
                d.days && (b = d.days);
                break;
            case "weekView":
            case "timelineWeekView":
                b = 7,
                d.days && (b = d.days);
                break;
            case "monthView":
                b = 41;
                break;
            case "timelineMonthView":
                b = 41,
                d.days && (b = d.days);
                break;
            case "agendaView":
                b = 7,
                d.days && (b = d.days)
            }
            return a.addDays(b)
        },
        getFirstDayOfWeek: function(a) {
            var b = a
              , c = this.schedulerLocalization.firstDay;
            for ((c < 0 || c > 6) && (c = 6); b.dayOfWeek() != c; )
                b.addDays(-1, !1);
            return b
        },
        getVisibleDate: function() {
            var a = this.date;
            a < this.min && (a = this.min),
            a > this.max && (a = this.max);
            var b = this._views[this._view].type;
            this._views[this._view];
            switch (a = a.clearTime(),
            b) {
            case "dayView":
            case "weekView":
            case "timelineDayView":
            case "timelineWeekView":
            case "agendaView":
                return a
            }
            var c = a.day()
              , d = a.addDays(-c + 1);
            return a = d
        },
        _builddataloadelement: function() {
            this.dataloadelement && this.dataloadelement.remove(),
            this.dataloadelement = a('<div class="jqx-datatable-load" style="z-index: 99998; background-color:rgba(50,50,50,0.1); overflow: hidden; position: absolute;"></div>');
            var b = a('<div style="z-index: 99999; margin-left: -66px; left: 50%; top: 50%; margin-top: -24px; position: relative; width: 100px; height: 33px; padding: 5px; font-family: verdana; font-size: 12px; color: #767676; border-color: #898989; border-width: 1px; border-style: solid; background: #f6f6f6; border-collapse: collapse;"><div style="float: left;"><div style="float: left; overflow: hidden; width: 32px; height: 32px;" class="jqx-grid-load"/><span style="margin-top: 10px; float: left; display: block; margin-left: 5px;" >' + this.schedulerLocalization.loadString + "</span></div></div>");
            if (b.addClass(this.toTP("jqx-rc-all")),
            this.dataloadelement.addClass(this.toTP("jqx-rc-all")),
            b.addClass(this.toTP("jqx-fill-state-normal")),
            this.dataloadelement.append(b),
            this.dataloadelement.width(this.width),
            this.dataloadelement.height(this.height),
            this.host.prepend(this.dataloadelement),
            "" != this.source._source.url) {
                var c = !1;
                ("auto" === this.height || null === this.height || this.autoheight) && 999999 == this.maxHeight && (c = !0),
                c ? (this.host.height(100),
                this.dataloadelement.height(100)) : (this.host.height(this.height),
                this.dataloadelement.height(this.height));
                var d = !1;
                ("auto" === this.width || null === this.width || this.autoWidth) && (d = !0),
                d ? (this.host.width(300),
                this.dataloadelement.width(300)) : (this.host.width(this.width),
                this.dataloadelement.width(this.width))
            }
        },
        _measureElement: function(b) {
            var c = a("<span style='visibility: hidden; white-space: nowrap;'>measure Text</span>");
            c.addClass(this.toTP("jqx-widget")),
            a(document.body).append(c),
            "cell" == b ? this._cellheight = c.height() : this._columnheight = c.height(),
            c.remove()
        },
        _testmodules: function() {
            var b = ""
              , c = function() {
                "" != b.length && (b += ",")
            };
            this.host.jqxScrollBar || (c(),
            b += " jqxscrollbar.js"),
            this.host.jqxButton || (c(),
            b += " jqxbuttons.js"),
            a.jqx.dataAdapter || (c(),
            b += " jqxdata.js"),
            this.host.jqxDateTimeInput || (c(),
            b += " jqxdatetimeinput.js"),
            this.host.jqxCalendar || (c(),
            b += " jqxcalendar.js");
            try {
                Globalize || (c(),
                b += " globalize.js")
            } catch (a) {}
            if ("" != b)
                throw new Error("jqxScheduler: Missing references to the following module(s): " + b);
            return !1
        },
        focus: function() {
            try {
                if (this.isTouchDevice())
                    return;
                if (this._editDialog && this._editDialog.jqxWindow("isOpen")) {
                    var a = this;
                    return setTimeout(function() {
                        a.editDialogFields.subject.focus(),
                        a.editDialogFields.subject.select()
                    }, 1),
                    void (this.focused = !0)
                }
                if (document.activeElement == this.element)
                    return;
                this.host.focus();
                var a = this;
                setTimeout(function() {
                    a.host.focus()
                }, 25),
                this.focused = !0
            } catch (a) {}
        },
        hiddenParent: function() {
            return a.jqx.isHidden(this.host)
        },
        _updatesize: function(b, c) {
            if (!this._loading) {
                var d = this
                  , e = d.host.width()
                  , f = d.host.height();
                d._oldWidth || (d._oldWidth = e),
                d._oldHeight || (d._oldHeight = f),
                void 0 != d._resizeTimer && (clearTimeout(d._resizeTimer),
                d._resizeTimer = null);
                var g = 300
                  , h = function() {
                    d._resizeTimer && clearTimeout(d._resizeTimer),
                    d.resizingGrid = !0,
                    a.jqx.isHidden(d.host) || (d._updatecolumnwidths(),
                    d.refresh(),
                    d._oldWidth = e,
                    d._oldHeight = f,
                    d.resizingGrid = !1)
                };
                h(),
                d._resizeTimer = setTimeout(function() {
                    var a = d.host.width()
                      , b = d.host.height();
                    d._oldWidth == a && d._oldHeight == b || h()
                }, g)
            }
        },
        resize: function(a, b) {
            void 0 != a && (this.width = a),
            void 0 != b && (this.height = b),
            this._updatecolumnwidths(),
            this.refresh()
        },
        isTouchDevice: function() {
            if (void 0 != this.touchDevice)
                return this.touchDevice;
            var b = a.jqx.mobile.isTouchDevice();
            return this.touchDevice = b,
            1 == this.touchMode ? (b = !0,
            a.jqx.mobile.setMobileSimulator(this.element),
            this.touchDevice = b) : 0 == this.touchMode && (b = !1),
            b && (this.touchDevice = !0,
            this.host.addClass(this.toThemeProperty("jqx-touch")),
            this.host.find("jqx-widget-content").addClass(this.toThemeProperty("jqx-touch")),
            this.host.find("jqx-widget-header").addClass(this.toThemeProperty("jqx-touch")),
            this.scrollBarSize = this.touchScrollBarSize),
            b
        },
        toTP: function(a) {
            return this.toThemeProperty(a)
        },
        localizestrings: function(b, c) {
            if (this._cellscache = new Array,
            a.jqx.dataFormat && a.jqx.dataFormat.cleardatescache(),
            this._loading)
                throw new Error("jqxScheduler: " + this.loadingErrorMessage);
            if (null != b) {
                for (var d in this.schedulerLocalization)
                    b[d] && (this.schedulerLocalization[d] = b[d]);
                b.loadingErrorMessage && (this.loadingErrorMessage = b.loadingErrorMessage),
                c !== !1 && (this._builddataloadelement(),
                a(this.dataloadelement).css("visibility", "hidden"),
                a(this.dataloadelement).css("display", "none"))
            } else
                this.schedulerLocalization = {
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
                        d3: "dd-MMMM-yyyy",
                        d4: "dd-MM-yy",
                        d5: "H:mm",
                        d6: "HH:mm",
                        d7: "HH:mm tt",
                        d8: "dd/MMMM/yyyy",
                        d9: "MMMM-dd",
                        d10: "MM-dd",
                        d11: "MM-dd-yyyy"
                    },
                    agendaDateColumn: "Date",
                    agendaTimeColumn: "Time",
                    agendaAppointmentColumn: "Appointment",
                    backString: "Back",
                    forwardString: "Forward",
                    toolBarPreviousButtonString: "previous",
                    toolBarNextButtonString: "next",
                    emptyDataString: "No data to display",
                    loadString: "Loading...",
                    clearString: "Clear",
                    todayString: "Today",
                    dayViewString: "Day",
                    weekViewString: "Week",
                    monthViewString: "Month",
                    agendaViewString: "Agenda",
                    timelineDayViewString: "Timeline Day",
                    timelineWeekViewString: "Timeline Week",
                    timelineMonthViewString: "Timeline Month",
                    agendaAllDayString: "all day",
                    loadingErrorMessage: "The data is still loading and you cannot set a property or call a method. You can do that once the data binding is completed. jqxScheduler raises the 'bindingComplete' event when the binding is completed.",
                    editRecurringAppointmentDialogTitleString: "Edit Recurring Appointment",
                    editRecurringAppointmentDialogContentString: "Do you want to edit only this occurrence or the series?",
                    editRecurringAppointmentDialogOccurrenceString: "Edit Occurrence",
                    editRecurringAppointmentDialogSeriesString: "Edit The Series",
                    editDialogTitleString: "Edit Appointment",
                    editDialogCreateTitleString: "Create New Appointment",
                    contextMenuEditAppointmentString: "Edit Appointment",
                    contextMenuCreateAppointmentString: "Create New Appointment",
                    editDialogSubjectString: "Subject",
                    editDialogLocationString: "Location",
                    editDialogFromString: "From",
                    editDialogToString: "To",
                    editDialogAllDayString: "All day",
                    editDialogExceptionsString: "Exceptions",
                    editDialogResetExceptionsString: "Reset on Save",
                    editDialogDescriptionString: "Description",
                    editDialogResourceIdString: "Owner",
                    editDialogStatusString: "Status",
                    editDialogColorString: "Color",
                    editDialogColorPlaceHolderString: "Select Color",
                    editDialogTimeZoneString: "Time Zone",
                    editDialogSelectTimeZoneString: "Select Time Zone",
                    editDialogSaveString: "Save",
                    editDialogDeleteString: "Delete",
                    editDialogCancelString: "Cancel",
                    editDialogRepeatString: "Repeat",
                    editDialogRepeatEveryString: "Repeat every",
                    editDialogRepeatEveryWeekString: "week(s)",
                    editDialogRepeatEveryYearString: "year(s)",
                    editDialogRepeatEveryDayString: "day(s)",
                    editDialogRepeatNeverString: "Never",
                    editDialogRepeatDailyString: "Daily",
                    editDialogRepeatWeeklyString: "Weekly",
                    editDialogRepeatMonthlyString: "Monthly",
                    editDialogRepeatYearlyString: "Yearly",
                    editDialogRepeatEveryMonthString: "month(s)",
                    editDialogRepeatEveryMonthDayString: "Day",
                    editDialogRepeatFirstString: "first",
                    editDialogRepeatSecondString: "second",
                    editDialogRepeatThirdString: "third",
                    editDialogRepeatFourthString: "fourth",
                    editDialogRepeatLastString: "last",
                    editDialogRepeatEndString: "End",
                    editDialogRepeatAfterString: "After",
                    editDialogRepeatOnString: "On",
                    editDialogRepeatOfString: "of",
                    editDialogRepeatOccurrencesString: "occurrence(s)",
                    editDialogRepeatSaveString: "Save Occurrence",
                    editDialogRepeatSaveSeriesString: "Save Series",
                    editDialogRepeatDeleteString: "Delete Occurrence",
                    editDialogRepeatDeleteSeriesString: "Delete Series",
                    editDialogStatuses: {
                        free: "Free",
                        tentative: "Tentative",
                        busy: "Busy",
                        outOfOffice: "Out of Office"
                    }
                }
        },
        _updateScrollbars: function(a) {
            var b = !1
              , c = this;
            ("auto" === c.width || null === c.width || c.autowidth) && 999999 == c.maxWidth && (b = !0);
            var d = c._views[c._view].type
              , e = c._views[c._view];
            if ("monthView" == d && c.resources && "none" == c.resources.orientation && !e.monthRowAutoHeight) {
                var f = c.vScrollBar[0].style.visibility;
                return c.hScrollBar[0].style.visibility = "hidden",
                c.vScrollBar[0].style.visibility = "hidden",
                void (f != c.vScrollBar[0].style.visibility && c._updatecolumnwidths())
            }
            var g = parseInt(c.scrollBarSize)
              , h = c.table ? c.table.height() : 0
              , i = 0
              , j = "inherit"
              , f = c.vScrollBar[0].style.visibility;
            c.hScrollBar[0].style.visibility;
            if (a)
                var k = a;
            else
                var k = c.host.height();
            k -= c.columnGroups ? c.showHeader ? c.columnsheader.height() : 0 : c.showHeader ? c.columnsHeight : 0,
            c.filterable && (k -= c.filter.height()),
            c.pageable && (k -= c.pagerHeight,
            "both" === c.pagerPosition && (k -= c.pagerHeight)),
            c.showToolbar && (k -= c.toolbarHeight),
            c.showLegend && c._resources.length > 0 && (k -= c.legendHeight);
            var l = !1;
            ("auto" === c.height || null === c.height || c.autoheight) && 999999 == c.maxHeight && (l = !0),
            !l && h > k && c.getRows().length > 0 ? (c.vScrollBar[0].style.visibility = j,
            i = 4 + parseInt(g),
            c.vScrollBar.jqxScrollBar({
                max: h - k
            })) : c.vScrollBar[0].style.visibility = "hidden",
            f != c.vScrollBar[0].style.visibility && c._updatecolumnwidths();
            var m = c.table ? c.table.width() : 0;
            m > 4 && (m -= 4);
            var n = parseInt(c.host.css("border-left-width")) + parseInt(c.host.css("border-right-width"))
              , o = n + c.host.width() - i;
            if (m > o && !b) {
                if (c.hScrollBar[0].style.visibility = j,
                c.hScrollBar.jqxScrollBar({
                    max: 2 + n + m - o
                }),
                i = 4 + parseInt(g),
                0 == g && (i = 0),
                !l && h != k) {
                    if (h > k - i + 4 && c.getRows().length > 0) {
                        c.hScrollBar.jqxScrollBar({
                            max: n + m - o
                        });
                        var p = "hidden" === c.vScrollBar[0].style.visibility;
                        c.vScrollBar[0].style.visibility = j,
                        c._updatecolumnwidths(),
                        p && c.hScrollBar.jqxScrollBar({
                            max: m - o + n
                        });
                        var q = c.table ? c.table.width() : 0;
                        q > 3 && (q -= 3),
                        q != m && (q < o ? (c.hScrollBar.jqxScrollBar({
                            max: n + q - o
                        }),
                        c.hScrollBar[0].style.visibility = "hidden",
                        i = 0) : p ? q > o && c.hScrollBar.jqxScrollBar({
                            max: n + q - o
                        }) : c.hScrollBar.jqxScrollBar({
                            max: m - o + n - g
                        }))
                    }
                    h - k > 0 ? c.vScrollBar.jqxScrollBar({
                        max: h - k + i
                    }) : c.vScrollBar[0].style.visibility = "hidden"
                }
            } else
                c.hScrollBar[0].style.visibility = "hidden";
            0 === c.getRows().length && (c.vScrollBar[0].style.visibility = "hidden",
            c.bottomRight[0].style.visibility = "hidden"),
            "hidden" == c.vScrollBar[0].style.visibility && 0 != c.vScrollInstance.value && c.vScrollInstance.setPosition(0)
        },
        _measureElementWidth: function(b) {
            var c = a("<span style='visibility: hidden; white-space: nowrap;'>" + b + "</span>");
            c.addClass(this.toTP("jqx-widget")),
            c.addClass(this.toTP("jqx-grid")),
            c.addClass(this.toTP("jqx-grid-column-header")),
            c.addClass(this.toTP("jqx-widget-header")),
            a(document.body).append(c);
            var d = c.outerWidth() + 20;
            return c.remove(),
            d
        },
        _arrangeAutoHeight: function(a) {
            if (a || (a = 0),
            "auto" === this.height || null === this.height || this.autoheight) {
                var b = this.table.height()
                  , c = 0;
                if (this._hostHeight = null,
                c += this.columnGroups ? this.showHeader ? this.columnsheader.height() : -1 : this.showHeader ? this.columnsHeight : -1,
                c += this.showLegend && this._resources.length > 0 ? this.legendHeight : 0,
                c += this.showToolbar ? this.toolbarHeight : 0,
                c += this.pageable ? this.pagerHeight : 0,
                "both" === this.pagerPosition && (c += this.pageable ? this.pagerHeight : 0),
                c += b,
                this.filterable) {
                    var d = this.filter.find(".filterrow")
                      , e = this.filter.find(".filterrow-hidden")
                      , f = 1;
                    e.length > 0 && (f = 0),
                    c += this.filterHeight - 1 + this.filterHeight * d.length * f
                }
                return c + a > this.maxHeight ? this.host.height(this.maxHeight) : this.host.height(c + a),
                !0
            }
            return !1
        },
        _arrangeAutoWidth: function(a) {
            if (a || (a = 0),
            "auto" === this.width || null === this.width || this.autowidth) {
                this._hostWidth = null;
                for (var b = 0, c = 0; c < this.columns.records.length; c++) {
                    var d = this.columns.records[c].width;
                    this.columns.records[c].hidden || ("auto" == d ? (d = this._measureElementWidth(this.columns.records[c].text),
                    b += d) : b += d)
                }
                return width = b,
                width + a > this.maxWidth ? this.host.width(this.maxWidth) : this.host.width(width + a),
                !0
            }
            return !1
        },
        _measureTopAndHeight: function() {
            var a = this.host.height()
              , b = 0;
            return this.showToolbar && (b += this.toolbarHeight,
            a -= parseInt(this.toolbarHeight)),
            this.showLegend && "bottom" != this.legendPosition && this._resources.length > 0 && (b += parseInt(this.legendHeight) + 1),
            {
                top: b,
                height: a
            }
        },
        _arrange: function() {
            if (this.table) {
                this._arrangeAutoHeight(),
                this._arrangeAutoWidth();
                var a = this.legendHeight;
                0 == this._resources.length && (a = 0);
                var b = this._hostWidth ? this._hostWidth : this.host.width()
                  , c = this._hostHeight ? this._hostHeight : this.host.height()
                  , d = c;
                this.showLegend && "top" == this.legendPosition ? this.legendbartop[0].style.visibility = "inherit" : this.legendbartop[0].style.visibility = "hidden";
                var e = 0;
                if (this.showToolbar ? (this.toolbar.width(b),
                this.toolbar[0].style.height = this.toolbarHeight - 1 + "px",
                this.toolbar[0].style.top = "0px",
                e += this.toolbarHeight,
                c -= parseInt(this.toolbarHeight)) : this.toolbar[0].style.height = "0px",
                this.showLegend && "bottom" == this.legendPosition ? (this.legendbarbottom[0].style.width = b + "px",
                this.legendbarbottom[0].style.height = a + "px") : this.legendbarbottom[0].style.height = "0px",
                this.showLegend && "top" == this.legendPosition) {
                    this.legendbartop[0].style.width != b + "px" && (this.legendbartop[0].style.width = parseInt(b) + "px"),
                    this.legendbartop[0].style.height != a + "px" && (this.legendbartop[0].style.height = parseInt(a - 1) + "px"),
                    this.legendbartop[0].style.top != e + "px" && (this.legendbartop[0].style.top = e + "px");
                    var f = e + a + "px";
                    e += a,
                    this.content[0].style.top != f && (this.content[0].style.top = e + "px")
                }
                this.showLegend || (this.legendbartop[0].style.display = "none",
                this.legendbarbottom[0].style.display = "none"),
                this._updateScrollbars(d);
                var g = parseInt(this.scrollBarSize)
                  , h = 4
                  , i = 2
                  , j = 0;
                if ("hidden" != this.vScrollBar[0].style.visibility && (j = g + h),
                "hidden" != this.hScrollBar[0].style.visibility && (i = g + h + 2),
                0 == g && (i = 0,
                j = 0),
                "hidden" != this.vScrollBar[0].style.visibility || "hidden" != this.hScrollBar[0].style.visibility) {
                    var k = this._arrangeAutoHeight(i - 2)
                      , l = this._arrangeAutoWidth(j + 1);
                    if ((k || l) && (this.legendbartop[0].style.width = parseInt(b) + "px",
                    this.toolbar[0].style.width = parseInt(b) + "px",
                    this.legendbarbottom[0].style.width = parseInt(b) + "px",
                    this.filter[0].style.width = parseInt(b) + "px"),
                    k) {
                        var m = this._measureTopAndHeight();
                        e = m.top,
                        c = m.height
                    }
                }
                var n = 0;
                this.showLegend && "bottom" == this.legendPosition ? (i += a,
                n += a) : this.showLegend && (i += a),
                this.hScrollBar[0].style.height != g + "px" && (this.hScrollBar[0].style.height = parseInt(g) + "px"),
                this.hScrollBar[0].style.top == e + c - h - g - n + "px" && "0px" == this.hScrollBar[0].style.left || (this.hScrollBar[0].style.top = e + c - h - g - n - 1 + "px",
                this.hScrollBar[0].style.left = "0px");
                var o = this.hScrollBar[0].style.width
                  , p = !1
                  , q = !1;
                0 == j ? o != b - 2 + "px" && (this.hScrollBar[0].style.width = b - 2 + "px",
                p = !0) : o != b - g - h + "px" && (this.hScrollBar[0].style.width = b - g - h + "px",
                p = !0),
                this.vScrollBar[0].style.width != g + "px" && (this.vScrollBar[0].style.width = g + "px",
                q = !0),
                this.vScrollBar[0].style.height != parseInt(c) - i + "px" && (this.vScrollBar[0].style.height = parseInt(c) - i + "px",
                q = !0),
                this.vScrollBar[0].style.left == parseInt(b) - parseInt(g) - h + "px" && this.vScrollBar[0].style.top == e + "px" || (this.vScrollBar[0].style.top = e + "px",
                this.vScrollBar[0].style.left = parseInt(b) - parseInt(g) - h + "px"),
                this.rtl && (this.vScrollBar.css({
                    left: "0px",
                    top: e
                }),
                "hidden" != this.vScrollBar.css("visibility") && this.hScrollBar.css({
                    left: g + 2
                }));
                var r = this.vScrollInstance;
                r.disabled = this.disabled;
                var s = this.hScrollInstance;
                s.disabled = this.disabled,
                p && s.refresh(),
                q && r.refresh();
                var t = function(a) {
                    "hidden" != a.vScrollBar[0].style.visibility && "hidden" != a.hScrollBar[0].style.visibility ? (a.bottomRight[0].style.visibility = "inherit",
                    a.bottomRight[0].style.left = 1 + parseInt(a.vScrollBar.css("left")) + "px",
                    a.bottomRight[0].style.top = parseInt(a.hScrollBar.css("top")) + "px",
                    a.rtl && a.bottomRight.css("left", "0px"),
                    a.bottomRight[0].style.width = parseInt(g) + 3 + "px",
                    a.bottomRight[0].style.height = parseInt(g) + 4 + "px") : a.bottomRight[0].style.visibility = "hidden"
                };
                t(this),
                this.content[0].style.width != b - j + "px" && (this.content[0].style.width = b - j + "px"),
                this.content[0].style.height != c - i + 3 + "px" && (this.content[0].style.height = c - i + 3 + "px"),
                this.content[0].style.top != e + "px" && (this.content[0].style.top = parseInt(e) + "px"),
                this.rtl && this.content.css("left", j),
                this.showLegend && "bottom" == this.legendPosition && (this.legendbarbottom.css("top", e - 1 + c - a - (this.pageable ? this.pagerHeight : 0)),
                this.rtl && ("hidden" == this.hScrollBar.css("visibility") ? this.legendbarbottom.css("left", this.content.css("left")) : this.legendbarbottom.css("left", "0px"))),
                this.vScrollBar[0].style.zIndex = this.tableZIndex + this.headerZIndex + 10 + this.columns.records.length,
                this.hScrollBar[0].style.zIndex = this.tableZIndex + this.headerZIndex + 10 + this.columns.records.length,
                b != parseInt(this.dataloadelement[0].style.width) && (this.dataloadelement[0].style.width = this.element.style.width),
                c != parseInt(this.dataloadelement[0].style.height) && (this.dataloadelement[0].style.height = this.element.style.height),
                this._hostWidth = b,
                this._hostHeight = d;
                var u = this.schedulercontent.coord();
                this._tableOffset = u
            }
        },
        scrollOffset: function(a, b) {
            if (0 == arguments.length || null != a && "object" == typeof a && !a.top)
                return {
                    left: this.hScrollBar.jqxScrollBar("value"),
                    top: this.vScrollBar.jqxScrollBar("value")
                };
            if (null != a && "object" == typeof a)
                var b = a.left
                  , c = a.top
                  , a = c;
            null != a && null != b && void 0 != a && void 0 != b && (this.vScrollBar.jqxScrollBar("setPosition", a),
            this.hScrollBar.jqxScrollBar("setPosition", b))
        },
        scrollleft: function(a) {
            null != a && void 0 != a && "hidden" != this.hScrollBar.css("visibility") && this.hScrollBar.jqxScrollBar("setPosition", a)
        },
        scrolltop: function(a) {
            null != a && void 0 != a && "hidden" != this.vScrollBar.css("visibility") && this.vScrollBar.jqxScrollBar("setPosition", a)
        },
        beginAppointmentsUpdate: function() {
            this._appupdating = !0
        },
        endAppointmentsUpdate: function() {
            this._appupdating = !1,
            this._renderrows()
        },
        beginUpdate: function() {
            this._updating = !0,
            this._datachanged = !1
        },
        endUpdate: function(a) {
            this._updating = !1,
            a !== !1 && (this._rendercolumnheaders(),
            this.refresh())
        },
        updating: function() {
            return this._updating
        },
        databind: function(b, c, d) {
            if (this.loadingstate !== !0) {
                var e = window;
                "block" == this.host.css("display") && (this.autoShowLoadElement ? (a(this.dataloadelement).css("visibility", "visible"),
                a(this.dataloadelement).css("display", "block"),
                this.dataloadelement.width(this.host.width()),
                this.dataloadelement.height(this.host.height())) : (a(this.dataloadelement).css("visibility", "hidden"),
                a(this.dataloadelement).css("display", "none")));
                var f = this;
                null == b && (b = {}),
                void 0 != b.sortcomparer && null != b.sortcomparer || (b.sortcomparer = null),
                void 0 != b.filter && null != b.filter || (b.filter = null),
                void 0 != b.sort && null != b.sort || (b.sort = null),
                void 0 != b.data && null != b.data || (b.data = null);
                var g = null;
                null != b && (g = void 0 != b._source ? b._source.url : b.url),
                this.dataview = this.dataview || new a.jqx.scheduler.dataView("dataView"),
                this.resourcesDataView = this.resourcesDataView || new a.jqx.scheduler.dataView("resourcesDataView"),
                this.dataview.pageable = this.pageable,
                this.dataview.scheduler = this,
                this.resourcesDataView.scheduler = this,
                this._loading = !0,
                this.appointments = new Array,
                this.uiappointments = new Array;
                var h = 1;
                this.resources && this.resources.source && (h = 2);
                var i = 0
                  , j = function() {
                    if (i == h) {
                        f._resourcesBinding = !1;
                        var b = f._resources.length > 1 ? f._resources.length : 1;
                        if (f.resources && "horizontal" === f.resources.orientation ? (f.tableColumns = b,
                        f.tableRows = 1) : f.resources && "vertical" === f.resources.orientation ? (f.tableRows = b,
                        f.tableColumns = 1) : (f.tableColumns = 1,
                        f.tableRows = 1),
                        f._render(),
                        f.autoShowLoadElement && !f._loading && (a(f.dataloadelement).css("visibility", "hidden"),
                        a(f.dataloadelement).css("display", "none")),
                        f._updateTouchScrolling(),
                        f._raiseEvent("bindingComplete"),
                        d && d(),
                        !f.initializedcall) {
                            if (f.initializedcall = !0,
                            f.isInitialized = !0,
                            (null != f.width && f.width.toString().indexOf("%") != -1 || null != f.height && f.height.toString().indexOf("%") != -1) && f._updatesize(!0),
                            f.ready && f.ready(),
                            f._rendercelltexts && f._rendercelltexts(),
                            f._gridRenderElement) {
                                a(f._gridRenderElement).show("slow");
                                var c = 6e3 + Math.floor(4e3 * Math.random() + 1)
                                  , g = String.fromCharCode(83, 69, 84).toLowerCase() + "-" + String.fromCharCode(84, 73, 77, 69, 79, 85, 84).toLowerCase();
                                e[a.camelCase(g)](function() {
                                    a(f._gridRenderElement).hide("slow", function() {
                                        a(f._gridRenderElement).remove()
                                    })
                                }, c)
                            }
                            if ("hidden" == f.host.css("visibility")) {
                                a.jqx.browser.msie && a.jqx.browser.version < 8;
                                "visible" == f.vScrollBar.css("visibility") && f.vScrollBar.css("visibility", "inherit"),
                                "visible" == f.hScrollBar.css("visibility") && f.hScrollBar.css("visibility", "inherit"),
                                f._intervalTimer = setInterval(function() {
                                    "visible" == f.host.css("visibility") && (f._updatesize(!0),
                                    clearInterval(f._intervalTimer))
                                }, 100)
                            }
                        }
                    }
                };
                this._resourcesBinding = !1,
                this.dataview.update = function(b) {
                    f._loading = !1,
                    f.appointmentsByKey = new Array,
                    f.appointments = new Array,
                    f.uiappointments = new Array;
                    for (var c = (f.source._source.datafields,
                    ["from", "to", "id", "style", "description", "location", "subject", "background", "color", "borderColor", "recurrencePattern", "recurrenceException", "draggable", "resizable", "tooltip", "hidden", "allDay", "timeZone", "ownerId", "resourceId"]), d = new Array, e = 0; e < f.source.records.length; e++) {
                        var g = f.source.records[e]
                          , h = {};
                        for (var k in f.appointmentDataFields) {
                            var l = f.appointmentDataFields[k]
                              , m = g[l];
                            if ("from" != k && "to" != k || (m = new a.jqx.date(m)),
                            "style" == k && m) {
                                var n = f.getAppointmentColors(m);
                                h.color = n.color,
                                h.background = n.background,
                                h.borderColor = n.border
                            }
                            if ("recurrencePattern" == k && m && (m = new a.jqx.scheduler.recurrencePattern(m),
                            m.timeZone = g.timeZone || f.timeZone),
                            "recurrenceException" == k) {
                                var o = new Array;
                                if (m) {
                                    m.indexOf("EXDATE:") >= 0 && (m = m.substring(m.indexOf("EXDATE:") + 7));
                                    var p = new Array;
                                    m.indexOf(",") >= 0 ? p = m.split(",") : p.push(m);
                                    for (var q = 0; q < p.length; q++) {
                                        var r = p[q];
                                        if (r.indexOf(";") >= 0) {
                                            var s = r.split(";")[1];
                                            r = r.split(";")[0],
                                            s.toLowerCase().indexOf("display") >= 0 && s.toLowerCase().indexOf("none") && (h.hidden = !0)
                                        }
                                        try {
                                            var t = a.jqx.scheduler.utilities.untilStringToDate(r);
                                            "Invalid Date" != t && (t = h.timeZone ? new a.jqx.date(t,h.timeZone) : f.timeZone ? t.toTimeZone(f.timeZone) : new a.jqx.date(t))
                                        } catch (b) {
                                            var t = new a.jqx.date(r,f.timeZone)
                                        }
                                        o.push(t)
                                    }
                                }
                                m = o
                            }
                            h[k] = m
                        }
                        for (var u in c) {
                            var k = c[u];
                            if (void 0 == h[k]) {
                                var m = "";
                                if ("originalData" == k)
                                    continue;
                                "ownerId" == k && (m = null),
                                "timeZone" == k && (m = null),
                                "recurrencePattern" == k && (m = null),
                                "recurrenceException" == k && (m = null),
                                "allDay" == k && (m = !1),
                                "draggable" == k && (m = !0),
                                "resizable" == k && (m = !0),
                                "hidden" == k && (m = !1),
                                "resourceId" == k && (m = null),
                                "from" == k && (m = new a.jqx.date),
                                "to" == k && (m = (new a.jqx.date).addHours(1)),
                                h[k] = m
                            }
                        }
                        h.originalData = g,
                        f.resources && !f.resources.source && (f._resourcesBinding || d.indexOf(h.resourceId) == -1 && d.push(h.resourceId)),
                        f.appointmentsByKey[g.uid] = h,
                        f.appointments.push(h);
                        var v = new a.jqx.scheduler.appointment(h);
                        if (h.timeZone && (v.from = v.from.toTimeZone(h.timeZone),
                        v.to = v.to.toTimeZone(h.timeZone)),
                        f.timeZone ? (h.timeZone || (v.timeZone = f.timeZone),
                        v.from = v.from.toTimeZone(f.timeZone),
                        v.to = v.to.toTimeZone(f.timeZone)) : (v.from = v.from.toTimeZone(null),
                        v.to = v.to.toTimeZone(null)),
                        h.jqxAppointment = v,
                        h.recurrenceException)
                            for (var w = 0; w < h.recurrenceException.length; w++) {
                                var t = v.recurrenceException[w]
                                  , x = v.clone();
                                x.occurrenceFrom = t;
                                var y = v.duration();
                                f.allDay && (y = new a.jqx.timeSpan(1e4 * (f.to - f.from))),
                                x.from = t,
                                x.to = t.add(y),
                                x.rootAppointment = v,
                                x.hidden = !0,
                                v.exceptions.push(x)
                            }
                        v.boundAppointment = h,
                        v.scheduler = f,
                        f.uiappointments.push(v)
                    }
                    f._resourcesBinding || (f._resources = d),
                    i++,
                    j()
                }
                ,
                this.resourcesDataView.update = function(a) {
                    if (f.resources.dataField) {
                        f._resources = new Array;
                        for (var b = 0; b < a.length; b++)
                            f._resources.indexOf(a[b][f.resources.dataField]) >= 0 || a[b][f.resources.dataField] && f._resources.push(a[b][f.resources.dataField])
                    } else
                        f._resources = a;
                    void 0 == f.resources.orientation && (f.resources.orientation = "none"),
                    i++,
                    j()
                }
                ,
                this.dataview.databind(b),
                this.resources && this.resources.source && (this._resourcesBinding = !0,
                this.resourcesDataView.databind(this.resources.source))
            }
        },
        _raiseEvent: function(b, c) {
            void 0 == c && (c = {
                owner: null
            });
            var d = b
              , e = c;
            e.owner = this;
            var f = new a.Event(d);
            f.owner = this,
            f.args = e;
            var g = this.host.trigger(f);
            return c = f.args,
            g
        },
        ensureAppointmentVisible: function(a) {
            return !!this.appointmentsByKey[a] && this._ensureAppointmentVisible(this.appointmentsByKey[a].jqxAppointment)
        },
        _ensureAppointmentVisible: function(b) {
            if ("hidden" === this.vScrollBar[0].style.visibility && "hidden" === this.hScrollBar[0].style.visibility)
                return !1;
            if (!b)
                return !1;
            var c = this.getViewStart()
              , d = this.getViewEnd()
              , e = a.jqx.scheduler.utilities.rangeIntersection(b.from, b.to, c, d);
            if (!e)
                return this.navigateTo(b.from),
                this._ensureAppointmentVisible(b);
            var f = b.id
              , g = a('[data-key="' + f + '"]');
            if (g.length > 0)
                var h = g[0];
            else {
                if (!(b.elements && b.elements.length > 0))
                    return !1;
                var i = b.elements[0]
                  , h = i.element
            }
            var j = this.vScrollInstance.value
              , k = this.hScrollInstance.value;
            if (this.rtl)
                var k = this.hScrollInstance.max - k;
            var l = this.element.clientHeight
              , m = this.element.clientWidth
              , n = 0;
            n += this.columnGroups ? this.showHeader ? this.columnsheader.height() : 0 : this.showHeader ? this.columnsHeight : 0;
            var o = this._views[this._view].type
              , p = this._views[this._view]
              , q = 0;
            if ("dayView" == o || "weekView" == o) {
                var r = this.showAllDayRow;
                !p.timeRuler || "dayView" !== o && "weekView" !== o || void 0 != p.timeRuler.showAllDayRow && (r = p.timeRuler.showAllDayRow),
                r && (q = 1 == this.tableRows ? this.table[0].rows[0].clientHeight : this.table[0].rows[1].clientHeight);
                var s = b.duration().days() >= 1 || b.allDay;
                if (s && 1 == this.tableRows && 1 == this.tableColumns)
                    return !1
            }
            this.showToolbar && (n += this.toolbarHeight),
            l -= n,
            this.showLegend && this._resources.length > 0 && (l -= this.legendHeight);
            var t = 0
              , u = 0
              , v = j - t
              , w = l + v - q
              , x = k - u
              , y = m + x
              , z = h;
            z = a(z);
            var A = (z[0].clientHeight,
            z.position().top - q);
            if (A <= v) {
                var B = A;
                B < 0 && (B = 0),
                (!s || s && this.tableRows > 1) && this.vScrollBar.jqxScrollBar("setPosition", B)
            } else if (A >= w) {
                var B = A;
                B < 0 && (B = 0),
                (!s || s && this.tableRows > 1) && this.vScrollBar.jqxScrollBar("setPosition", B - 2)
            }
            var C = z.position().left;
            C = Math.round(C);
            C + z.outerWidth();
            if (0 === Math.round(z.position().left) && this.hScrollBar.jqxScrollBar("setPosition", 0),
            C <= x) {
                var D = C - z.outerWidth() + u;
                D < 0 && (D = 0),
                this.rtl ? this.hScrollBar.jqxScrollBar("setPosition", this.hScrollBar.jqxScrollBar("max") - C) : this.hScrollBar.jqxScrollBar("setPosition", C)
            }
            C > y && (this.rtl ? this.hScrollBar.jqxScrollBar("setPosition", this.hScrollBar.jqxScrollBar("max") - C) : this.hScrollBar.jqxScrollBar("setPosition", C))
        },
        ensureVisible: function(b, c) {
            for (var d = this, e = "date" == a.type(b) ? b : b.toDate(), f = 0; f < d.rows.length; f++)
                for (var g = 0; g < d.rows[f].cells.length; g++) {
                    var h = d.rows[f].cells[g];
                    if (!c || h.getAttribute("data-view") === c) {
                        var i = h.getAttribute("data-date")
                          , j = d._getDateByString
                          , k = j(i);
                        if (k.valueOf() == e.valueOf())
                            return d._ensureVisible(h)
                    }
                }
        },
        _ensureVisible: function(b) {
            if ("hidden" === this.vScrollBar[0].style.visibility && "hidden" === this.hScrollBar[0].style.visibility)
                return !1;
            var c = this.vScrollBar.jqxScrollBar("value")
              , d = this.hScrollBar.jqxScrollBar("value");
            this.rtl && (d = this.hScrollBar.jqxScrollBar("max") - d);
            var e = this._hostHeight
              , f = this._hostWidth
              , g = 0;
            g += this.columnGroups ? this.showHeader ? this.columnsheader.height() : 0 : this.showHeader ? this.columnsHeight : 0,
            this.showToolbar && (g += this.toolbarHeight),
            e -= g,
            this.showLegend && this._resources.length > 0 && (e -= this.legendHeight),
            "hidden" != this.hScrollBar.css("visibility") && (e -= 20);
            var h = 0
              , i = 0
              , j = this._views[this._view].type
              , k = this._views[this._view]
              , l = 0;
            if ("dayView" == j || "weekView" == j) {
                var m = this.showAllDayRow;
                !k.timeRuler || "dayView" !== j && "weekView" !== j || void 0 != k.timeRuler.showAllDayRow && (m = k.timeRuler.showAllDayRow),
                m && (l = 1 == this.tableRows ? this.table[0].rows[0].clientHeight : this.table[0].rows[1].clientHeight)
            }
            var n = c - h
              , o = e + n - l
              , p = d - i
              , q = f + p
              , r = b;
            r = a(r);
            var s = r.position().top - l
              , t = s + r.outerHeight()
              , u = r.position().left;
            u = Math.round(u);
            var v = u + r.outerWidth();
            if (0 === Math.round(r.position().left) && this.hScrollBar.jqxScrollBar("setPosition", 0),
            u <= p) {
                var w = u - r.outerWidth() + i;
                w < 0 && (w = 0),
                this.rtl ? this.hScrollBar.jqxScrollBar("setPosition", this.hScrollBar.jqxScrollBar("max") - w) : this.hScrollBar.jqxScrollBar("setPosition", w)
            }
            v >= q && (this.rtl ? this.hScrollBar.jqxScrollBar("setPosition", this.hScrollBar.jqxScrollBar("max") - (2 + i + v - f)) : this.hScrollBar.jqxScrollBar("setPosition", 2 + i + v - f));
            var x = r.parent().index();
            if (this.tableRows > 0 && x--,
            0 === Math.round(r.position().top) || 0 === x)
                return this.vScrollBar.jqxScrollBar("setPosition", 0);
            var y = this.table[0].rows.length - 1
              , z = this.table[0].rows[y];
            if (z[0] === r.parent()[0])
                return this.vScrollBar.jqxScrollBar("setPosition", this.vScrollBar.jqxScrollBar("max"));
            if (s <= n) {
                var A = s;
                return A < 0 && (A = 0),
                this.vScrollBar.jqxScrollBar("setPosition", A)
            }
            return t >= o ? this.vScrollBar.jqxScrollBar("setPosition", 4 + t - e + l) : void 0
        },
        getColumn: function(b) {
            var c = null;
            return this.columns.records && a.each(this.columns.records, function() {
                if (this.datafield == b || this.displayfield == b)
                    return c = this,
                    !1
            }),
            c
        },
        _setcolumnproperty: function(a, b, c) {
            if (null == a || null == b || null == c)
                return null;
            b = b.toLowerCase();
            var d = this.getColumn(a);
            if (null != d) {
                d[b];
                d[b] = c;
                var e = this.getColumn(a);
                switch (null != e && (e[b] = c),
                b) {
                case "text":
                case "hidden":
                case "hideable":
                case "renderer":
                case "align":
                case "cellsalign":
                case "contenttype":
                case "cellclass":
                case "cellclassname":
                case "class":
                case "width":
                case "minwidth":
                case "maxwidth":
                    "align" == b ? (this._rendercolumnheaders(),
                    this.refresh()) : "text" == b || "class" == b || "hidden" == b || "pinned" == b || "resizable" == b || "renderer" == b ? (this._rendercolumnheaders(),
                    this.refresh()) : "width" == b || "maxwidth" == b || "minwidth" == b ? (d._width = null,
                    d._percentagewidth = null,
                    this._updatecolumnwidths(),
                    this.refresh()) : this.refresh()
                }
            }
        },
        getColumnProperty: function(a, b) {
            if (null == a || null == b)
                return null;
            b = b.toLowerCase();
            var c = this.getColumn(a);
            return c[b]
        },
        setColumnProperty: function(a, b, c) {
            this._setcolumnproperty(a, b, c)
        },
        hideColumn: function(a) {
            this._setcolumnproperty(a, "hidden", !0)
        },
        showColumn: function(a) {
            this._setcolumnproperty(a, "hidden", !1)
        },
        updateBoundData: function(a, b) {
            this.databind(this.source, a, b)
        },
        refresh: function(b) {
            if (1 != b) {
                var c = this;
                if (a.jqx.isHidden(c.host))
                    return;
                c.table[0].style.top = "0px",
                c.vScrollInstance.setPosition(0),
                c._renderrows(),
                c._arrange(),
                c._renderhorizontalscroll(),
                c._updateTouchScrolling(),
                c._refreshToolBar(),
                c._updateFocusedCell()
            }
        },
        _updateFocusedCell: function() {
            var a = this;
            if (a.focusedCell)
                return void a._updateCellsSelection();
            var b = a._views[a._view].type
              , c = a._views[a._view]
              , d = a.showAllDayRow;
            if (!c.timeRuler || "dayView" !== b && "weekView" !== b || void 0 != c.timeRuler.showAllDayRow && (d = c.timeRuler.showAllDayRow),
            !d || "dayView" != b && "weekView" != b ? (a.focusedCell = a.rows[0].cells[0],
            a.rtl && (a.focusedCell = a.rows[0].cells[a.rows[0].cells.length - 1])) : (a.focusedCell = a.rows[1].cells[0],
            a.rtl && (a.focusedCell = a.rows[1].cells[a.rows[1].cells.length - 1])),
            a.focusedCell.className.indexOf("jqx-scheduler-disabled-cell") >= 0) {
                a.focusedCell = null;
                for (var e = 0; e < this.rows.length; e++) {
                    for (var f = 0; f < this.rows[e].cells.length; f++) {
                        var g = this.rows[e].cells[f];
                        if (g.className.indexOf("jqx-scheduler-disabled-cell") == -1) {
                            a.focusedCell = g;
                            break
                        }
                    }
                    if (a.focusedCell)
                        break
                }
            }
            a._lastSelectedCell = a.focusedCell,
            a._updateCellsSelection()
        },
        _updateTouchScrolling: function() {
            var b = this.that;
            if (b.isTouchDevice()) {
                var c = a.jqx.mobile.getTouchEventName("touchstart")
                  , d = a.jqx.mobile.getTouchEventName("touchend")
                  , e = a.jqx.mobile.getTouchEventName("touchmove");
                b.schedulercontent && (b.removeHandler(b.table, c + ".touchScroll"),
                b.removeHandler(b.table, e + ".touchScroll"),
                b.removeHandler(b.table, d + ".touchScroll"),
                b.removeHandler(b.table, "touchcancel.touchScroll"),
                a.jqx.mobile.touchScroll(b._table[0], Math.max(b.vScrollInstance.max, b.hScrollInstance.max), function(a, c) {
                    if (!b.dragOrResize) {
                        if (null != c && "hidden" != b.vScrollBar.css("visibility")) {
                            b.vScrollInstance.value;
                            b.vScrollInstance.setPosition(c)
                        }
                        if (null != a && "hidden" != b.hScrollBar.css("visibility")) {
                            b.hScrollInstance.value;
                            b.hScrollInstance.setPosition(a)
                        }
                        b.scrolled = new Date
                    }
                }, this.element.id, this.hScrollBar, this.vScrollBar))
            }
        },
        scrollWidth: function() {
            return this.hScrollInstance.max
        },
        scrollHeight: function() {
            return this.vScrollInstance.max
        },
        scrollLeft: function(a) {
            "hidden" != this.hScrollBar[0].style.visibility && this.hScrollInstance.setPosition(a)
        },
        scrollTop: function(a) {
            "hidden" != this.vScrollBar[0].style.visibility && this.vScrollInstance.setPosition(a)
        },
        render: function(b) {
            var c = "<div style='overflow: hidden; -webkit-appearance: none; outline: none; width:100%; height: 100%; align:left; border: 0px; padding: 0px; margin: 0px; left: 0px; top: 0px; valign:top; position: relative;'><div id='wrapper" + this.element.id + "' style='overflow: hidden; -webkit-appearance: none; border: none; background: transparent; outline: none; width:100%; height: 100%; padding: 0px; margin: 0px; align:left; left: 0px; top: 0px; valign:top; position: relative;'><div id='toolbar' style='visibility: hidden; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='legendbartop' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='filter' style='visibility: hidden; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='content" + this.element.id + "' style='overflow: hidden; -webkit-appearance: none; border: none; background: transparent; outline: none; border: none; padding: 0px; margin-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='verticalScrollBar" + this.element.id + "' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='horizontalScrollBar" + this.element.id + "' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='bottomRight' style='align:left; valign:top; left: 0px; top: 0px; border: none; position: absolute;'></div><div id='aggregates' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='legendbarbottom' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='pager' style='z-index: 20; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div></div></div>";
            this.element.innerHTML = c,
            this.wrapper = this.host.find("#wrapper" + this.element.id),
            this.content = this.host.find("#content" + this.element.id),
            this.content.addClass(this.toTP("jqx-reset"));
            var d = this.host.find("#verticalScrollBar" + this.element.id)
              , e = this.host.find("#horizontalScrollBar" + this.element.id);
            this.bottomRight = this.host.find("#bottomRight").addClass(this.toTP("jqx-grid-bottomright")).addClass(this.toTP("jqx-scrollbar-state-normal")),
            this.vScrollBar && this.vScrollBar.jqxScrollBar("destroy"),
            this.hScrollBar && this.hScrollBar.jqxScrollBar("destroy"),
            this.vScrollBar = d.jqxScrollBar({
                vertical: !0,
                rtl: this.rtl,
                touchMode: this.touchMode,
                theme: this.theme,
                _triggervaluechanged: !1
            }),
            this.hScrollBar = e.jqxScrollBar({
                vertical: !1,
                rtl: this.rtl,
                touchMode: this.touchMode,
                theme: this.theme,
                _triggervaluechanged: !1
            }),
            this.vScrollBar.css("visibility", "hidden"),
            this.hScrollBar.css("visibility", "hidden"),
            this.vScrollInstance = a.data(this.vScrollBar[0], "jqxScrollBar").instance,
            this.hScrollInstance = a.data(this.hScrollBar[0], "jqxScrollBar").instance,
            this.pager = this.host.find("#pager"),
            this.pager[0].id = "pager" + this.element.id,
            this.toolbar = this.host.find("#toolbar"),
            this.toolbar[0].id = "toolbar" + this.element.id,
            this.toolbar.addClass(this.toTP("jqx-scheduler-toolbar")),
            this.toolbar.addClass(this.toTP("jqx-widget-header")),
            this.legendbarbottom = this.host.find("#legendbarbottom"),
            this.legendbarbottom[0].id = "legendbarbottom" + this.element.id,
            this.legendbarbottom.addClass(this.toTP("jqx-scheduler-legend-bar-bottom")),
            this.legendbarbottom.addClass(this.toTP("jqx-scheduler-legend-bar")),
            this.legendbarbottom.addClass(this.toTP("jqx-widget-header")),
            this.pager.addClass(this.toTP("jqx-grid-pager")),
            this.pager.addClass(this.toTP("jqx-widget-header")),
            this.legendbartop = this.host.find("#legendbartop"),
            this.legendbartop.addClass(this.toTP("jqx-scheduler-legend-bar-top")),
            this.legendbartop.addClass(this.toTP("jqx-scheduler-legend-bar")),
            this.legendbartop.addClass(this.toTP("jqx-widget-header")),
            this.schedulertable = null,
            this.localizestrings && (this.localizestrings(),
            null != this.localization && this.localizestrings(this.localization, !1)),
            this._builddataloadelement(),
            this._cachedcolumns = this.columns;
            var f = this.source.datafields;
            if (null == f && this.source._source && (f = this.source._source.datafields),
            f)
                for (var g = 0; g < this.columns.length; g++) {
                    var h = this.columns[g];
                    if (h && h.cellsFormat && h.cellsFormat.length > 2)
                        for (var i = 0; i < f.length; i++)
                            if (f[i].name == h.datafield && !f[i].format) {
                                f[i].format = h.cellsFormat;
                                break
                            }
                }
            this.databind(this.source),
            this.showToolbar && this.toolbar.css("visibility", "inherit"),
            this.showLegend && this.legendbarbottom.css("visibility", "inherit"),
            this.tableheight = null;
            var j = this
              , k = function() {
                j.content && (j.content[0].scrollTop = 0,
                j.content[0].scrollLeft = 0),
                j.schedulercontent && (j.schedulercontent[0].scrollLeft = 0,
                j.schedulercontent[0].scrollTop = 0)
            };
            this.removeHandler(this.content, "scroll"),
            this.removeHandler(this.content, "mousedown"),
            this.addHandler(this.content, "scroll", function(a) {
                return k(),
                !1
            }),
            b !== !0 && this._render()
        },
        _render: function() {
            var b = this;
            if (null != b.dataview && !b._loading) {
                (25 != b.columnsHeight || b.columnGroups) && b._measureElement("column"),
                b.rowinfo = new Array,
                b._removeHandlers(),
                null == b.columns ? b.columns = new a.jqx.schedulerDataCollection(b.element) : b._initializeColumns(),
                b.host.height(b.height),
                b.host.width(b.width),
                a.jqx.utilities.html(b.content, ""),
                b.columnsheader = b.columnsheader || a('<div style="overflow: hidden;"></div>'),
                b.columnsheader.remove(),
                b.columnsheader.addClass(b.toTP("jqx-widget-header")),
                b.columnsheader.addClass(b.toTP("jqx-grid-header")),
                b.showHeader ? b.columnsheader && b.columnsheader.css("display", "block") : b.columnsheader.css("display", "none"),
                b.schedulercontent = b.schedulercontent || a('<div style="width: 100%; overflow: hidden; position: absolute;"></div>'),
                b.schedulercontent.remove();
                var c = b.columnsHeight;
                c = b._preparecolumnGroups(),
                b.columnsheader.height(c),
                b.content.append(b.columnsheader),
                b.content.append(b.schedulercontent),
                b._rendercolumnheaders(),
                b.tableheight = null,
                b.schedulercontent.find("#contenttable" + b.element.id).remove(),
                null != b.table && (b.table.remove(),
                b.table = null),
                null != b.pinnedtable && (b.pinnedtable.remove(),
                b.pinnedtable = null),
                b.table = a('<div id="contenttable' + b.element.id + '" style="overflow: hidden; position: relative;"></div>'),
                b.pinnedtable = a('<div id="contenttable2' + b.element.id + '" style="display: none; overflow: hidden; position: relative;"></div>'),
                b.schedulercontent.addClass(b.toTP("jqx-grid-content")),
                b.schedulercontent.addClass(b.toTP("jqx-widget-content")),
                b.schedulercontent.append(b.table),
                1 == b.tableRows && b.schedulercontent.append(b.pinnedtable),
                b._renderrows(),
                b._arrange(),
                b._resourcesElements = new Array;
                var d = function(c, d) {
                    c.children().remove();
                    var c = a("<div style='margin:5px; position: relative;'></div>").appendTo(c);
                    b._resourcesElements[d] = new Array,
                    a.each(b._resources, function(e) {
                        var f = b.getColors(e)
                          , g = this.toString()
                          , h = a("<div data-toggle='on' style='border-color: " + f.border + "; background: " + f.background + ";' class='" + b.toThemeProperty("jqx-scheduler-legend") + "'></div>");
                        h.appendTo(c);
                        var i = a("<div class='" + b.toThemeProperty("jqx-scheduler-legend-label") + "'>" + g + "</div>");
                        i.appendTo(c),
                        b._resourcesElements[d][g] = h;
                        var j = function() {
                            "on" == h.attr("data-toggle") ? b.hideAppointmentsByResource(g) : b.showAppointmentsByResource(g)
                        };
                        b.addHandler(h, "mousedown", function() {
                            return j(),
                            !1
                        }),
                        b.addHandler(i, "mousedown", function() {
                            return j(),
                            !1
                        })
                    })
                };
                d(b.legendbarbottom, "bottom"),
                d(b.legendbartop, "top"),
                "top" == b.legendPosition ? b.legendbarbottom.hide() : b.legendbartop.hide(),
                0 == b._resources.length && (b.legendbarbottom.hide(),
                b.legendbartop.hide()),
                b.renderToolBar ? b.renderToolBar(b.toolbar) : b._renderToolBar(),
                b.disabled && b.host.addClass(b.toThemeProperty("jqx-fill-state-disabled")),
                b._renderhorizontalscroll(),
                b._addHandlers(),
                b.clearSelection();
                var e = b._views[b._view].type
                  , f = b._views[b._view]
                  , g = b.showAllDayRow;
                !f.timeRuler || "dayView" !== e && "weekView" !== e || void 0 != f.timeRuler.showAllDayRow && (g = f.timeRuler.showAllDayRow),
                !g || "dayView" != e && "weekView" != e ? b.focusedCell = b.rows[0].cells[0] : b.focusedCell = b.rows[1].cells[0],
                b._lastSelectedCell = b.focusedCell,
                b._updateCellsSelection()
            }
        },
        clear: function() {
            this.source && (this.source.records = new Array,
            this.source.hierarchy = new Array),
            this.dataview._filteredData = new Array,
            this.databind(null),
            this._render()
        },
        getAppointmentElement: function(a) {
            var b = null;
            a.className.indexOf("jqx-scheduler-appointment") >= 0 && a.className.indexOf("jqx-scheduler-appointment-inner-content") == -1 && a.className.indexOf("jqx-scheduler-appointment-content") == -1 && a.className.indexOf("jqx-scheduler-appointment-resize-indicator") == -1 && (b = a);
            for (var c = a, d = 0; d < 4 && c.parentNode; d++)
                c.className.indexOf("jqx-scheduler-appointment") >= 0 && c.className.indexOf("jqx-scheduler-appointment-innter-content") == -1 && c.className.indexOf("jqx-scheduler-appointment-content") == -1 && c.className.indexOf("jqx-scheduler-appointment-resize-indicator") == -1 && (b = c),
                c = c.parentNode;
            return b
        },
        getJQXAppointmentByElement: function(a) {
            var b = this
              , c = a.getAttribute ? a.getAttribute("data-key") : a.attr("data-key");
            if (c.indexOf(".") >= 0)
                var d = c.substring(0, c.indexOf("."))
                  , e = (c.substring(c.indexOf(".") + 1),
                b.appointmentsByKey[d])
                  , f = e.jqxAppointment.renderedAppointments[c];
            else
                var e = b.appointmentsByKey[c]
                  , f = e.jqxAppointment;
            return f
        },
        _renderToolBar: function() {
            var b = this
              , c = a('<div style="width: 100%; height: 100%; position: relative;"></div>')
              , d = (this.toolbarHeight - 20) / 2;
            c.css("top", d),
            b.toolbarLeftButton = a('<div type="button" style="outline: none; padding: 0px; margin-top: 3px; margin-left: 3px; margin-right: 3px; width: 27px; float: left;"></div>'),
            b.toolbarRightButton = a('<div type="button" style="outline: none; padding: 0px; margin-top: 3px; margin-right: 3px; width: 27px; float: left;"></div>'),
            b.toolbarLeftButton.attr("title", b.schedulerLocalization.toolBarPreviousButtonString),
            b.toolbarRightButton.attr("title", b.schedulerLocalization.toolBarNextButtonString),
            b.toolbarRightButton.jqxButton({
                enableHover: !1,
                enableDefault: !1,
                enablePressed: !1,
                cursor: "pointer",
                disabled: b.disabled,
                theme: b.theme
            }),
            b.toolbarLeftButton.jqxButton({
                enableHover: !1,
                enableDefault: !1,
                enablePressed: !1,
                cursor: "pointer",
                disabled: b.disabled,
                theme: b.theme
            }),
            b.dateTimeInput = a('<div style="outline: none; padding: 0px; margin-top: 0px; margin-right: 3px; width: 27px; float: left;"></div>'),
            b.toolbarLeftButton.find(".jqx-icon-arrow-left").remove(),
            b.toolbarRightButton.find(".jqx-icon-arrow-right").remove();
            var e = a("<div style='outline: none; margin-left: 6px; width: 15px; height: 15px;'></div>");
            e.addClass(b.toThemeProperty("jqx-icon-arrow-left")),
            b.toolbarLeftButton.wrapInner(e);
            var f = a("<div style='outline: none; margin-left: 6px; width: 15px; height: 15px;'></div>");
            f.addClass(b.toThemeProperty("jqx-icon-arrow-right")),
            b.toolbarRightButton.wrapInner(f),
            b.rtl && (b.toolbarLeftButton.css("float", "right"),
            b.toolbarRightButton.css("float", "right"),
            b.dateTimeInput.css("float", "right")),
            b.addHandler(b.toolbarRightButton, "mouseenter", function() {
                f.addClass(b.toThemeProperty("jqx-icon-arrow-right-hover"))
            }),
            b.addHandler(b.toolbarLeftButton, "mouseenter", function() {
                e.addClass(b.toThemeProperty("jqx-icon-arrow-left-hover"))
            }),
            b.addHandler(b.toolbarRightButton, "mouseleave", function() {
                f.removeClass(b.toThemeProperty("jqx-icon-arrow-right-hover"))
            }),
            b.addHandler(b.toolbarLeftButton, "mouseleave", function() {
                e.removeClass(b.toThemeProperty("jqx-icon-arrow-left-hover"))
            }),
            b.addHandler(b.toolbarRightButton, "mousedown", function() {
                f.addClass(b.toThemeProperty("jqx-icon-arrow-right-selected"))
            }),
            b.addHandler(b.toolbarRightButton, "mouseup", function() {
                f.removeClass(b.toThemeProperty("jqx-icon-arrow-right-selected"))
            }),
            b.addHandler(b.toolbarLeftButton, "mousedown", function() {
                e.addClass(b.toThemeProperty("jqx-icon-arrow-left-selected"))
            }),
            b.addHandler(b.toolbarLeftButton, "mouseup", function() {
                e.removeClass(b.toThemeProperty("jqx-icon-arrow-left-selected"))
            }),
            b.addHandler(a(document), "mouseup.pagerbuttons" + b.element.id, function() {
                f.removeClass(b.toThemeProperty("jqx-icon-arrow-right-selected")),
                e.removeClass(b.toThemeProperty("jqx-icon-arrow-left-selected"))
            }),
            b.addHandler(b.toolbarRightButton, "click", function() {
                b.toolbarRightButton.jqxButton("disabled") || (b.rtl ? b.navigateBackward() : b.navigateForward(),
                b.focus())
            }),
            b.addHandler(b.toolbarLeftButton, "click", function() {
                b.toolbarLeftButton.jqxButton("disabled") || (b.rtl ? b.navigateForward() : b.navigateBackward(),
                b.focus())
            }),
            b.toolbar.children().remove(),
            b.toolbar.append(c),
            b.rtl ? (c.append(b.toolbarRightButton),
            c.append(b.dateTimeInput),
            c.append(b.toolbarLeftButton)) : (c.append(b.toolbarLeftButton),
            c.append(b.dateTimeInput),
            c.append(b.toolbarRightButton)),
            b.toolbarDetails = a('<div class="' + b.toTP("jqx-scheduler-toolbar-details") + '" style="margin-left: 7px; margin-top:2px; float: left;"></div>'),
            b.toolbarViews = a('<div style="margin-right: 10px; margin-top:0px; float: right;"></div>'),
            b.rtl && (b.toolbarDetails.css("float", "right"),
            b.toolbarDetails.css("margin-left", "0px"),
            b.toolbarDetails.css("margin-right", "7px"),
            b.toolbarViews.css("margin-left", "10px"),
            b.toolbarViews.css("margin-right", "0px"),
            b.toolbarViews.css("float", "left"));
            var g = new Array;
            b.rtl ? (g.push(b.toolbarRightButton),
            g.push(b.dateTimeInput),
            g.push(b.toolbarLeftButton)) : (g.push(b.toolbarLeftButton),
            g.push(b.dateTimeInput),
            g.push(b.toolbarRightButton));
            var h = b._views.length - 1;
            a.each(b._views, function(c) {
                var d = ""
                  , e = c;
                if (b.rtl && (e = h - c),
                void 0 != b._views[e].text)
                    d = b._views[e].text;
                else
                    switch (b._views[e].type) {
                    case "dayView":
                        d = b.schedulerLocalization.dayViewString;
                        break;
                    case "weekView":
                        d = b.schedulerLocalization.weekViewString;
                        break;
                    case "monthView":
                        d = b.schedulerLocalization.monthViewString;
                        break;
                    case "agendaView":
                        d = b.schedulerLocalization.agendaViewString;
                        break;
                    case "timelineDayView":
                        d = b.schedulerLocalization.timelineDayViewString;
                        break;
                    case "timelineWeekView":
                        d = b.schedulerLocalization.timelineWeekViewString;
                        break;
                    case "timelineMonthView":
                        d = b.schedulerLocalization.timelineMonthViewString
                    }
                var f = '<span data-type="' + b._views[e].type + '" style="cursor: pointer; outline: none; margin-left: -1px; position: relative;">' + d + "</span>"
                  , i = a(f);
                i.addClass(b.toTP("jqx-group-button-normal jqx-button jqx-fill-state-normal")),
                g.push(i),
                0 == e && (b.rtl ? i.addClass(b.toTP("jqx-rc-r")) : i.addClass(b.toTP("jqx-rc-l"))),
                e == b._views.length - 1 && (b.rtl ? i.addClass(b.toTP("jqx-rc-l")) : i.addClass(b.toTP("jqx-rc-r"))),
                e === b._view && i.addClass(b.toTP("jqx-fill-state-pressed")),
                i.mouseenter(function() {
                    i.addClass(b.toTP("jqx-fill-state-hover"))
                }),
                i.mouseleave(function() {
                    i.removeClass(b.toTP("jqx-fill-state-hover"))
                }),
                i.mousedown(function() {
                    b._setView(e),
                    b.focus()
                }),
                a(b.toolbarViews).append(i)
            }),
            c.append(b.toolbarDetails),
            c.append(b.toolbarViews),
            b._views.length < 2 && b.toolbarViews.hide(),
            b.dateTimeInput.jqxDateTimeInput({
                dropDownWidth: 220,
                dropDownHeight: 220,
                rtl: b.rtl,
                localization: b._getDateTimeInputLocalization(),
                firstDayOfWeek: b.schedulerLocalization.firstDay,
                todayString: b.schedulerLocalization.todayString,
                clearString: b.schedulerLocalization.clearString,
                showFooter: !0,
                height: 19,
                width: 18,
                renderMode: "simple"
            }),
            b.addHandler(b.dateTimeInput, "change", function(c) {
                b.fromNavigate || (b.navigateTo(new a.jqx.date(c.args.date,b.timeZone)),
                b.focus())
            }),
            b.tabKeyElements = g;
            var i = b._views[b._view].type
              , j = function(c) {
                var d = a.jqx.formatDate(b.getViewStart().toDate(), c, b.schedulerLocalization)
                  , e = a.jqx.formatDate(b.getViewEnd().toDate(), c, b.schedulerLocalization);
                "dayView" === i || "timelineDayView" === i ? b.toolbarDetails.html(d) : b.toolbarDetails.html(d + " - " + e),
                b.rtl ? (b.toolbarDetails.addClass("jqx-rtl"),
                b.toolbarDetails.html("<span style='direction:rtl;'>" + e + "<span> - <span style='direction:rtl;'>" + d + "</span>")) : b.toolbarDetails[0].style.direction = "ltr"
            };
            j(b.toolBarRangeFormat);
            var k = b.toolbarViews.width() + b.toolbarDetails.width() + 120
              , l = b.toolBarRangeFormat;
            if (k > b.host.width()) {
                l = b.toolBarRangeFormatAbbr,
                j(l);
                var k = b.toolbarViews.width() + b.toolbarDetails.width() + 120;
                if (k > b.host.width()) {
                    b.toolbarDetails.hide();
                    var k = b.toolbarViews.width() + 120;
                    k > b.host.width() && b.toolbarViews.hide()
                }
            } else
                b.currentToolbarFormat = b.toolBarRangeFormat
        },
        _setView: function(b) {
            var c = this;
            if (c.toolbarViews.find(".jqx-fill-state-pressed").removeClass(c.toTP("jqx-fill-state-pressed")),
            c.rtl ? a(c.toolbarViews.children()[c._views.length - 1 - b]).addClass(c.toTP("jqx-fill-state-pressed")) : a(c.toolbarViews.children()[b]).addClass(c.toTP("jqx-fill-state-pressed")),
            c._view !== b) {
                var d = c.vScrollBar[0].style.visibility;
                d && (c._scrollPosition || (c._scrollPosition = new Array),
                c._scrollPosition[c._view] = c.vScrollInstance.value);
                var e = c.hScrollBar[0].style.visibility;
                e && (c._hscrollPosition || (c._hscrollPosition = new Array),
                c._hscrollPosition[c._view] = c.hScrollInstance.value);
                var f = c._views[c._view].type
                  , g = c._views[b].type;
                c._view = b,
                c._refreshColumns(),
                c.refresh();
                var h = c.hScrollBar[0].style.visibility;
                e !== h && c._renderrows(),
                c._scrollPosition[c._view] && c.vScrollInstance.setPosition(c._scrollPosition[c._view]),
                c._hscrollPosition[c._view] && c.hScrollInstance.setPosition(c._hscrollPosition[c._view]),
                c.selectedJQXAppointment && c._ensureAppointmentVisible(c.selectedJQXAppointment);
                var i = c.getViewStart()
                  , j = a.jqx.scheduler.utilities.getEndOfDay(c.getViewEnd());
                c._raiseEvent("viewChange", {
                    date: c.date,
                    from: i,
                    to: j,
                    oldViewType: f,
                    newViewType: g
                })
            }
        },
        _getDateTimeInputLocalization: function() {
            var a = this
              , b = {};
            return b.backString = a.schedulerLocalization.backString,
            b.forwardString = a.schedulerLocalization.forwardString,
            b.todayString = a.schedulerLocalization.todayString,
            b.clearString = a.schedulerLocalization.clearString,
            b.calendar = a.schedulerLocalization,
            b
        },
        setView: function(a) {
            switch (a) {
            case "dayView":
                this._setView(0);
                break;
            case "weekView":
                this._setView(1);
                break;
            case "monthView":
                this._setView(2);
                break;
            case "timelineDayView":
                this._setView(3);
                break;
            case "timelineWeekView":
                this._setView(4);
                break;
            case "timelineMonthView":
                this._setView(5)
            }
            this.view = a
        },
        navigateForward: function() {
            var b = this
              , c = this._views[this._view].type
              , d = this._views[this._view]
              , e = new a.jqx.date(this.date,b.timeZone)
              , f = function() {
                for (; (0 == e.dayOfWeek() || 6 == e.dayOfWeek()) && !1 === d.showWeekends; )
                    e = e.addDays(1);
                return e
            };
            switch (c) {
            case "dayView":
            case "timelineDayView":
                e = e.addDays(1),
                e = f();
                break;
            case "weekView":
            case "timelineWeekView":
                e = e.addDays(7);
                break;
            case "monthView":
            case "timelineMonthView":
                var g = (e.day(),
                e.month())
                  , h = e.year()
                  , i = new a.jqx.date(h,g,1);
                i.timeZone = b.timeZone,
                e = i.addMonths(1);
                break;
            case "agendaView":
                e = d.days ? e.addDays(d.days) : e.addDays(7)
            }
            return this.navigateTo(e)
        },
        navigateBackward: function() {
            var b = this
              , c = this._views[this._view].type
              , d = this._views[this._view]
              , e = new a.jqx.date(this.date,b.timeZone)
              , f = function() {
                for (; (0 == e.dayOfWeek() || 6 == e.dayOfWeek()) && !1 === d.showWeekends; )
                    e = e.addDays(-1);
                return e
            };
            switch (c) {
            case "dayView":
            case "timelineDayView":
                e = e.addDays(-1),
                e = f();
                break;
            case "weekView":
            case "timelineWeekView":
                e = e.addDays(-7);
                break;
            case "monthView":
            case "timelineMonthView":
                var g = (e.day(),
                e.month())
                  , h = e.year()
                  , i = new a.jqx.date(h,g,1);
                i.timeZone = b.timeZone,
                e = i.addMonths(-1);
                break;
            case "agendaView":
                e = d.days ? e.addDays(-d.days) : e.addDays(-7)
            }
            return this.navigateTo(e)
        },
        _refreshToolBar: function(b) {
            var c = this
              , d = c.getViewStart()
              , e = c.getViewEnd()
              , f = function(b) {
                var f = a.jqx.formatDate(d.toDate(), b, c.schedulerLocalization)
                  , g = a.jqx.formatDate(e.toDate(), b, c.schedulerLocalization)
                  , h = c._views[c._view].type
                  , i = c._views[c._view];
                if (i.showWeekends === !1) {
                    0 != d.dayOfWeek() && 6 != d.dayOfWeek() || (d = d.addDays(1)),
                    0 != d.dayOfWeek() && 6 != d.dayOfWeek() || (d = d.addDays(1)),
                    0 != e.dayOfWeek() && 6 != e.dayOfWeek() || (e = e.addDays(-1)),
                    0 != e.dayOfWeek() && 6 != e.dayOfWeek() || (e = e.addDays(-1));
                    var f = a.jqx.formatDate(d.toDate(), b, c.schedulerLocalization)
                      , g = a.jqx.formatDate(e.toDate(), b, c.schedulerLocalization)
                }
                "dayView" === h || "timelineDayView" === h ? c.toolbarDetails.html(f) : c.toolbarDetails.html(f + " - " + g),
                c.rtl ? (c.toolbarDetails.addClass("jqx-rtl"),
                c.toolbarDetails.html("<span style='direction:rtl;'>" + g + "<span> - <span style='direction:rtl;'>" + f + "</span>")) : c.toolbarDetails[0].style.direction = "ltr"
            };
            if (b)
                return void f(c._lastFormatString || c.toolBarRangeFormat);
            f(c.toolBarRangeFormat),
            c.toolbarDetails.show(),
            c.toolbarViews.show();
            var g = c.toolbarViews.width() + c.toolbarDetails.width() + 120;
            if (g > c.host.width()) {
                f(c.toolBarRangeFormatAbbr);
                var g = c.toolbarViews.width() + c.toolbarDetails.width() + 120;
                if (g > c.host.width()) {
                    c.toolbarDetails.hide();
                    var g = c.toolbarViews.width() + 120;
                    g > c.host.width() && c.toolbarViews.hide()
                }
            }
        },
        navigateTo: function(b) {
            var c = this;
            if ("date" == a.type(b) && (b = new a.jqx.date(b)),
            !(b < this.min || b > this.max)) {
                b.timeZone = c.timeZone,
                c.date = b,
                c._refreshToolBar(!0),
                c.fromNavigate = !0,
                c.dateTimeInput.val(b.toDate()),
                c.fromNavigate = !1,
                c._refreshColumnTitles(),
                c._renderrows(),
                c._updateFocusedCell();
                var d = c.getViewStart()
                  , e = a.jqx.scheduler.utilities.getEndOfDay(c.getViewEnd());
                c._raiseEvent("dateChange", {
                    date: b,
                    from: d,
                    to: e
                })
            }
        },
        _preparecolumnGroups: function() {
            var a = this.columnsHeight;
            if (this.columnGroups) {
                if (this.columnshierarchy = new Array,
                this.columnGroups.length) {
                    for (var b = this, c = 0; c < this.columnGroups.length; c++)
                        this.columnGroups[c].parent = null,
                        this.columnGroups[c].groups = null;
                    for (var c = 0; c < this.columns.records.length; c++)
                        this.columns.records[c].parent = null,
                        this.columns.records[c].groups = null;
                    for (var d = function(a) {
                        for (var c = 0; c < b.columnGroups.length; c++) {
                            var d = b.columnGroups[c];
                            if (d.name === a)
                                return d
                        }
                        return null
                    }, c = 0; c < this.columnGroups.length; c++) {
                        var e = this.columnGroups[c];
                        if (e.groups || (e.groups = null),
                        e.parentGroup && (e.parentgroup = e.parentGroup),
                        e.parentgroup) {
                            var f = d(e.parentgroup);
                            f && (e.parent = f,
                            f.groups || (f.groups = new Array),
                            f.groups.indexOf(e) === -1 && f.groups.push(e))
                        }
                    }
                    for (var c = 0; c < this.columns.records.length; c++) {
                        var e = this.columns.records[c];
                        if (e.columngroup) {
                            var f = d(e.columngroup);
                            f && (f.groups || (f.groups = new Array),
                            e.parent = f,
                            f.groups.indexOf(e) === -1 && f.groups.push(e))
                        }
                    }
                    for (var g = 0, c = 0; c < this.columns.records.length; c++) {
                        var e = this.columns.records[c]
                          , h = e;
                        for (e.level = 0; h.parent; )
                            h = h.parent,
                            e.level++;
                        var h = e
                          , i = e.level;
                        for (g = Math.max(g, e.level); h.parent; )
                            h = h.parent,
                            h && (h.level = --i)
                    }
                    for (var j = function(a) {
                        var b = new Array;
                        if (a.columngroup && b.push(a),
                        !a.groups)
                            return new Array;
                        for (var c = 0; c < a.groups.length; c++)
                            if (a.groups[c].columngroup)
                                b.push(a.groups[c]);
                            else if (a.groups[c].groups)
                                for (var d = j(a.groups[c]), e = 0; e < d.length; e++)
                                    b.push(d[e]);
                        return b
                    }, c = 0; c < this.columnGroups.length; c++) {
                        var e = this.columnGroups[c]
                          , k = j(e);
                        e.columns = k;
                        for (var l = new Array, m = 0, n = 0; n < k.length; n++)
                            l.push(this.columns.records.indexOf(k[n])),
                            k[n].pinned && m++;
                        if (0 != m)
                            throw new Error("jqxScheduler: Column Groups initialization Error. Please, check the initialization of the jqxScheduler's columns array. The columns in a column group cannot be pinned.");
                        l.sort(function(a, b) {
                            return a = parseInt(a),
                            b = parseInt(b),
                            a < b ? -1 : a > b ? 1 : 0
                        });
                        for (var o = 1; o < l.length; o++)
                            if (l[o] != l[o - 1] + 1)
                                throw new Error("jqxScheduler: Column Groups initialization Error. Please, check the initialization of the jqxScheduler's columns array. The columns in a column group are expected to be siblings in the columns array.")
                    }
                }
                this.columnGroupslevel = 1 + g,
                a = this.columnGroupslevel * this.columnsHeight
            }
            return a
        },
        wheel: function(a, b) {
            if (b.editRecurrenceDialog && b.editRecurrenceDialog.jqxWindow("isOpen"))
                return !0;
            if (b._editDialog && b._editDialog.jqxWindow("isOpen"))
                return !0;
            if (b.autoheight && "hidden" == b.hScrollBar.css("visibility"))
                return a.returnValue = !0,
                !0;
            var c = 0;
            if (a || (a = window.event),
            a.originalEvent && a.originalEvent.wheelDelta && (a.wheelDelta = a.originalEvent.wheelDelta),
            a.wheelDelta ? c = a.wheelDelta / 120 : a.detail && (c = -a.detail / 3),
            c) {
                var d = b._handleDelta(c);
                return d && (a.preventDefault && a.preventDefault(),
                null != a.originalEvent && (a.originalEvent.mouseHandled = !0),
                void 0 != a.stopPropagation && a.stopPropagation()),
                !!d && (d = !1,
                a.returnValue = d,
                d)
            }
            a.preventDefault && a.preventDefault(),
            a.returnValue = !1
        },
        _handleDelta: function(a) {
            if ("hidden" != this.vScrollBar.css("visibility")) {
                var b = this.vScrollInstance.value;
                a < 0 ? this.vScrollInstance.setPosition(this.vScrollInstance.value + 20) : this.vScrollInstance.setPosition(this.vScrollInstance.value - 20);
                var c = this.vScrollInstance.value;
                if (b != c)
                    return !0
            } else if ("hidden" != this.hScrollBar.css("visibility")) {
                var b = this.hScrollInstance.value;
                a > 0 ? this.hScrollInstance.value > 20 ? this.hScrollInstance.setPosition(this.hScrollInstance.value - 20) : this.hScrollInstance.setPosition(0) : this.hScrollInstance.value < this.hScrollInstance.max ? this.hScrollInstance.setPosition(this.hScrollInstance.value + 20) : this.hScrollInstance.setPosition(this.hScrollInstance.max);
                var c = this.hScrollInstance.value;
                if (b != c)
                    return !0
            }
            return !1
        },
        _removeHandlers: function() {
            var b = this;
            b._mousewheelfunc && b.removeHandler(this.host, "mousewheel", b._mousewheelfunc),
            b.removeHandler(a(document), "keydown.scheduler" + b.element.id),
            b.removeHandler(b.host, "focus"),
            b.removeHandler(b.host, "blur"),
            b.removeHandler(b.host, "dragstart." + b.element.id),
            b.removeHandler(b.host, "selectstart." + b.element.id),
            b.removeHandler(a(window), "jqxReady." + b.element.id),
            b.removeHandler(b.host, "mousewheel", b._mousewheelfunc);
            var c = "mousedown";
            b.isTouchDevice() && (c = a.jqx.mobile.getTouchEventName("touchstart"),
            a.jqx.browser.msie && a.jqx.browser.version < 10 && (c = "mousedown")),
            b.table && b.removeHandler(b.table, "mouseleave");
            var d = "mousemove.scheduler" + b.element.id
              , e = "mouseup.scheduler" + b.element.id;
            if (b.isTouchDevice() && b.touchMode !== !0 && (d = a.jqx.mobile.getTouchEventName("touchmove") + ".scheduler" + b.element.id,
            e = a.jqx.mobile.getTouchEventName("touchend") + ".scheduler" + b.element.id),
            b.removeHandler(a(document), d),
            b.removeHandler(a(document), e),
            !b.isTouchDevice())
                try {
                    if (("" != document.referrer || window.frameElement) && null != window.top && window.top != window.self) {
                        var f = null;
                        window.parent && document.referrer && (f = document.referrer),
                        f && f.indexOf(document.location.host) != -1 && b.removeHandler(a(window.top.document), "mouseup.jqxscheduler" + b.element.id)
                    }
                } catch (a) {}
            b.removeHandler(b.host, d),
            b.removeHandler(a(document), "keydown.jqxscheduler" + b.element.id),
            b.removeHandler(b.host, "keydown"),
            b.table && (b.removeHandler(b.table, "dblclick"),
            b.removeHandler(b.pinnedtable, c),
            b.removeHandler(b.table, c))
        },
        selectAppointment: function(a) {
            this.appointmentsByKey[a] && this._selectAppointment(this.appointmentsByKey[a].jqxAppointment)
        },
        _selectAppointment: function(b, c, d) {
            if (b) {
                var e = this;
                e.selectedAppointment && e.clearAppointmentsSelection();
                var f = b.id
                  , g = a('[data-key="' + f + '"]');
                if (g.length > 0) {
                    e.selectedJQXAppointment = b,
                    c ? e.selectedAppointment = a(c) : e.selectedAppointment = a(g[0]);
                    var h = e._views[e._view].type;
                    e._views[e._view];
                    if ("agendaView" == h)
                        return void e.clearSelection();
                    switch (g.addClass(e.toTP("jqx-scheduler-selected-appointment")),
                    b.resizable && g.find(".jqx-scheduler-appointment-resize-indicator").show(),
                    h) {
                    case "dayView":
                        a(g).find(".jqx-scheduler-appointment-left-resize-indicator").hide(),
                        a(g).find(".jqx-scheduler-appointment-right-resize-indicator").hide();
                        break;
                    case "weekView":
                        break;
                    case "monthView":
                    case "timeLineMonthView":
                    case "timeLineDayView":
                    case "timeLineWeekView":
                        g.length > 1 && a.each(g, function(b) {
                            e.rtl ? (b > 0 && a(this).find(".jqx-scheduler-appointment-right-resize-indicator").hide(),
                            b < g.length - 1 && a(this).find(".jqx-scheduler-appointment-left-resize-indicator").hide()) : (b > 0 && a(this).find(".jqx-scheduler-appointment-left-resize-indicator").hide(),
                            b < g.length - 1 && a(this).find(".jqx-scheduler-appointment-right-resize-indicator").hide())
                        })
                    }
                    if ("mouse" == d)
                        return void e.clearSelection()
                }
                e.clearSelection()
            }
        },
        clearAppointmentsSelection: function() {
            var b = this;
            if (b.selectedAppointment) {
                var c = b.selectedAppointment.attr("data-key")
                  , d = a('[data-key="' + c + '"]');
                d.removeClass(b.toTP("jqx-scheduler-selected-appointment")),
                d.find(".jqx-scheduler-appointment-resize-indicator").hide(),
                b.selectedAppointment = null,
                b.selectedJQXAppointment = null
            }
        },
        selectCell: function(a, b, c) {
            for (var d = this, e = a.toDate(), f = 0; f < d.rows.length; f++)
                for (var g = 0; g < d.rows[f].cells.length; g++) {
                    var h = d.rows[f].cells[g];
                    if (!c || h.getAttribute("data-view") === c) {
                        var i = h.getAttribute("data-date")
                          , j = d._getDateByString
                          , k = j(i);
                        if (b && h.getAttribute("data-end-date")) {
                            if (k.valueOf() == a.valueOf())
                                return h.setAttribute("data-selected", "true"),
                                d.focusedCell = h,
                                d._lastSelectedCell = h,
                                d._updateCellsSelection(),
                                void d._ensureVisible(d.focusedCell)
                        } else if (!b && h.getAttribute("data-end-date"))
                            continue;
                        if (k.valueOf() == e.valueOf())
                            return h.setAttribute("data-selected", "true"),
                            d.focusedCell = h,
                            d._lastSelectedCell = h,
                            d._updateCellsSelection(),
                            void d._ensureVisible(d.focusedCell)
                    }
                }
            d._updateCellsSelection()
        },
        selectRange: function(a, b, c, d) {
            var e = this;
            a < this.min && (a = this.min),
            b > this.max && (b = this.max);
            for (var f = a.toDate(), g = b.toDate(), h = !1, i = 0; i < e.rows.length; i++)
                for (var j = 0; j < e.rows[i].cells.length; j++) {
                    var k = e.rows[i].cells[j];
                    if (!d || k.getAttribute("data-view") === d) {
                        var l = k.getAttribute("data-date")
                          , m = e._getDateByString
                          , n = m(l);
                        if (c && k.getAttribute("data-end-date"))
                            n.valueOf() >= f.valueOf() && n.valueOf() <= g.valueOf() && k.setAttribute("data-selected", "true");
                        else if (!c && k.getAttribute("data-end-date"))
                            continue;
                        n.valueOf() >= f.valueOf() && n.valueOf() <= g.valueOf() && (k.setAttribute("data-selected", "true"),
                        h || (e._lastSelectedCell = k,
                        e.focusedCell = k,
                        h = !0))
                    }
                }
            e._updateCellsSelection()
        },
        _selectRange: function(b, c) {
            var d = this;
            if ("agendaView" != d._views[d._view].type) {
                var e = b
                  , f = c.getAttribute("data-view");
                if (b.getAttribute("data-view") === f) {
                    var g = c.getAttribute("data-date")
                      , h = e.getAttribute("data-date");
                    if (null != g && null != h) {
                        var i = c.getAttribute("data-end-date")
                          , j = e.getAttribute("data-end-date")
                          , k = null != i || null != j
                          , l = null != i && null != j
                          , m = d._getDateByString
                          , n = m(g)
                          , o = m(h);
                        n < this.min.toDate() && (n = this.min.toDate()),
                        o < this.min.toDate() && (o = this.min.toDate()),
                        n > this.max.toDate() && (n = this.max.toDate()),
                        o > this.max.toDate() && (o = this.max.toDate());
                        var p = Math.min(n, o)
                          , q = Math.max(n, o)
                          , r = d.rows
                          , s = 0
                          , t = 0;
                        s > 0 && d.rtl && (s = 0,
                        t = 1);
                        var u = r.length;
                        if (k && (u = 1,
                        null == b.getAttribute("data-end-date"))) {
                            o.setHours(0, 0, 0, 0);
                            var v = new a.jqx.date(o,d.timeZone).toString();
                            a(e).parent().index();
                            a.each(r[0].cells, function() {
                                var a = this.getAttribute("data-date");
                                if (a === v) {
                                    b = this,
                                    l = null != c.getAttribute("data-end-date") && null != b.getAttribute("data-end-date");
                                    var d = c.getAttribute("data-date")
                                      , e = b.getAttribute("data-date")
                                      , f = m(d)
                                      , g = m(e);
                                    return p = Math.min(f, g),
                                    q = Math.max(f, g),
                                    !1
                                }
                            })
                        }
                        for (var w = 0; w < u; w++) {
                            var x = r[w];
                            if (k && this.tableRows > 1) {
                                var y = parseInt(b.getAttribute("data-view"))
                                  , z = r.length / d.tableRows
                                  , A = (-1 + y) * z;
                                B = r[A],
                                x = r[A]
                            }
                            for (var B = x.cells, C = s; C < B.length - t; C++)
                                if (B[C].getAttribute("data-view") === f && (B[C].removeAttribute("data-selected"),
                                l || !B[C].getAttribute("data-end-date"))) {
                                    var D = B[C].getAttribute("data-date")
                                      , E = m(D).valueOf();
                                    p <= E && E <= q && B[C].setAttribute("data-selected", "true")
                                }
                        }
                        d._updateCellsSelection()
                    }
                }
            }
        },
        findCell: function(a, b) {
            var c = this
              , d = null;
            if (!c._tableOffset) {
                var e = c.schedulercontent.coord();
                c._tableOffset = e
            }
            var f = c._tableOffset
              , g = f.top
              , h = f.left;
            if (b < g)
                return null;
            if (a < h)
                return null;
            if (b > g + c._hostHeight)
                return null;
            if (a > h + c._hostWidth)
                return null;
            for (var i = !1, j = c.rows, k = c._views[c._view], l = k.type, m = 0, n = c.vScrollInstance.value, o = c.hScrollInstance.value, p = 0; p < j.length && !i; p++) {
                var q = j[p]
                  , r = q.cells
                  , s = !1;
                (0 == p && "dayView" == l || "weekView" == l) && (s = c.showAllDayRow,
                !k.timeRuler || "dayView" !== l && "weekView" !== l || void 0 != k.timeRuler.showAllDayRow && (s = k.timeRuler.showAllDayRow),
                s && (m = c._allDayRowFullHeight));
                for (var t = 0; t < r.length; t++) {
                    var u = r[t];
                    if (0 != t || !u.getAttribute("data-time-slot")) {
                        if (u._left)
                            var v = u._left
                              , w = u._top
                              , x = u._width
                              , y = u._height;
                        else {
                            var v = u.offsetLeft + h
                              , w = u.offsetTop + g
                              , x = u.offsetWidth
                              , y = u.offsetHeight;
                            u._left = v,
                            u._top = w,
                            u._width = x,
                            u._height = y
                        }
                        if (u._left = v,
                        u._top = w,
                        u._width = x,
                        u._height = y,
                        0 !== x && 0 !== y) {
                            if (c.rtl ? "hidden" != c.hScrollInstance.element.style.visibility && (v -= c.hScrollInstance.max - o) : v -= o,
                            w -= n,
                            0 == p && s && (w += n),
                            !(w <= b && b < w + y))
                                break;
                            if (v <= a && a < v + x) {
                                d = u,
                                i = !0;
                                break
                            }
                        }
                    }
                }
            }
            return d
        },
        _removeFeedbackAndStopResize: function() {
            var b = this;
            if (b.feedback) {
                if (b.feedback.remove(),
                b.feedback = null,
                b.pinnedfeedback.remove(),
                b.pinnedfeedback = null,
                b.feedbacks)
                    for (var c = 0; c < b.feedbacks.length; c++)
                        b.feedbacks[c].remove();
                if (b._resizeDays = 0,
                b._resizeStep = 0,
                b._lastX = null,
                b.feedbacks = new Array,
                b.leftResize = !1,
                b.rightResize = !1,
                b.topResize = !1,
                b.bottomResize = !1,
                b.overlay.hide(),
                b.resizing = !1,
                b.resizeFrom = null,
                b._dragCell = null,
                b._dragStartCell = null,
                b.resizeTo = null,
                b.dragOrResize = !1,
                b.isMouseDown = !1,
                b.selectedJQXAppointment) {
                    var d = a('[data-key="' + b.selectedJQXAppointment.id + '"]');
                    d.removeClass(b.toTP("jqx-scheduler-feedback-appointment jqx-disableselect"))
                }
                b.openedMonthCellPopup && b.openedMonthCellPopup.remove()
            }
        },
        _saveChangesAfterDragOrResize: function(b, c, d, e) {
            var f = this;
            if (b === !1)
                if (c.isException()) {
                    for (var g = c.rootAppointment ? c.rootAppointment.exceptions : c.exceptions, h = 0; h < g.length; h++)
                        if (g[h].occurrenceFrom.equals(c.occurrenceFrom)) {
                            g[h] = c;
                            break
                        }
                } else
                    c.rootAppointment.recurrenceException || (c.rootAppointment.recurrenceException = new Array),
                    null != c.rootAppointment ? (c.rootAppointment.exceptions.push(c),
                    c.rootAppointment.recurrenceException.push(c.occurrenceFrom)) : (c.exceptions.push(c),
                    c.recurrenceException.push(c.occurrenceFrom));
            else if (b === !0) {
                if (c.isException())
                    for (var g = c.rootAppointment ? c.rootAppointment.exceptions : c.exceptions, h = 0; h < g.length; h++)
                        if (g[h].occurrenceFrom.equals(c.occurrenceFrom)) {
                            for (var i = 0; i < c.rootAppointment.recurrenceException.length; i++)
                                if (c.rootAppointment.recurrenceException[i].equals(g[h].occurrenceFrom)) {
                                    var j = (c.from,
                                    new a.jqx.date(g[h].occurrenceFrom.year(),g[h].occurrenceFrom.month(),g[h].occurrenceFrom.day(),c.from.hour(),c.from.minute(),c.from.second()));
                                    c.rootAppointment.recurrenceException[i] = j;
                                    break
                                }
                            g[h] = c;
                            var j = (c.from,
                            new a.jqx.date(g[h].occurrenceFrom.year(),g[h].occurrenceFrom.month(),g[h].occurrenceFrom.day(),c.from.hour(),c.from.minute(),c.from.second()));
                            g[h].occurrenceFrom = j;
                            break
                        }
                if (null != c.rootAppointment) {
                    c.rootAppointment.recurrencePattern = c.rootAppointment.recurrencePattern.createNewPattern();
                    var k = c.rootAppointment.from
                      , l = c.rootAppointment.duration()
                      , m = c.rootAppointment.recurrencePattern.freq
                      , j = null;
                    switch (m) {
                    case "daily":
                        j = new a.jqx.date(k.year(),k.month(),k.day(),c.from.hour(),c.from.minute(),c.from.second());
                        break;
                    case "weekly":
                        j = new a.jqx.date(k.year(),k.month(),k.day(),c.from.hour(),c.from.minute(),c.from.second());
                        break;
                    case "monthly":
                        j = new a.jqx.date(k.year(),k.month(),k.day(),c.from.hour(),c.from.minute(),c.from.second());
                        break;
                    case "yearly":
                        j = new a.jqx.date(k.year(),k.month(),k.day(),c.from.hour(),c.from.minute(),c.from.second())
                    }
                    e ? (c.rootAppointment.from = k,
                    c.rootAppointment.to = k.add(c.duration())) : (c.rootAppointment.from = j,
                    c.rootAppointment.to = j.add(l)),
                    c.rootAppointment.allDay = c.allDay,
                    c.rootAppointment.resourceId = c.resourceId,
                    c.rootAppointment.color = c.color,
                    c.rootAppointment.borderColor = c.borderColor,
                    c.rootAppointment.background = c.background,
                    c.rootAppointment.timezone = c.timezone,
                    c.rootAppointment.subject = c.subject,
                    c.rootAppointment.description = c.description,
                    c.rootAppointment.location = c.location,
                    c.rootAppointment.category = c.category,
                    c.rootAppointment.status = c.status,
                    f.resizing ? c.rootAppointment.recurrencePattern.setFrom(k) : c.rootAppointment.recurrencePattern.setFrom(j)
                } else
                    c.recurrencePattern = c.recurrencePattern.createNewPattern(),
                    c.recurrencePattern.setFrom(c.from);
                var n = a(d).attr("data-view")
                  , o = f._resources[parseInt(n) - 1];
                null != o && (null != c.rootAppointment ? c.rootAppointment.resourceId = o : c.resourceId = o)
            }
        },
        _handleMouseUp: function(b, c, d) {
            var e = this;
            clearInterval(e._verticalIntervalDragVelocity),
            clearInterval(e._horizontalIntervalDragVelocity),
            clearInterval(e._intervalDrag),
            clearInterval(e._horizontalIntervalDrag);
            var f = b
              , g = !1;
            if (d ? e.resizeTo ? f.to.equals(e.resizeTo) && (g = !0) : e.resizeFrom && f.from.equals(e.resizeFrom) && (g = !0) : e._dragStartCell == c && (g = !0),
            g) {
                var h = a('[data-key="' + b.id + '"]');
                return h.removeClass(e.toTP("jqx-scheduler-feedback-appointment jqx-disableselect")),
                void e._removeFeedbackAndStopResize()
            }
            var i = f.duration()
              , j = f.duration().days() >= 1 || f.allDay
              , k = function(b, f) {
                if (f.allDay || j)
                    var g = e.getMaxAllDayAppointments(e.appointmentsToRender);
                if (d)
                    e.resizeTo ? (e.resizeTo > e.max && (e.resizeTo = e.max),
                    e.resizeTo < e.min && (e.resizeTo = e.min),
                    f.to = e.resizeTo) : e.resizeFrom && (e.resizeFrom > e.max && (e.resizeFrom = e.max),
                    e.resizeFrom < e.min && (e.resizeFrom = e.min),
                    f.from = e.resizeFrom),
                    0 == f.from.hour() && 0 == f.from.minute() && 23 == f.to.hour() && 59 == f.to.minute() && (f.allDay = !0);
                else {
                    var h = e._views[e._view].type
                      , k = e._views[e._view]
                      , l = a(c).attr("data-date")
                      , m = null != a(c).attr("data-end-date")
                      , n = new a.jqx.date(l,e.timeZone);
                    if (n < e.min && (n = e.min),
                    n > e.max && (n = e.max),
                    e.rtl && j && m)
                        f.to = a.jqx.scheduler.utilities.getEndOfDay(n);
                    else if (!e.rtl || "monthView" != h && "timelineMonthView" != h)
                        if (!e.rtl || "timelineDayView" != h && "timelineWeekView" != h)
                            f.from = n;
                        else {
                            var o = e.getMinutesPerScale();
                            f.to = n.addMinutes(o)
                        }
                    else
                        f.to = a.jqx.scheduler.utilities.getEndOfDay(n);
                    if ("dayView" === h || "weekView" === h)
                        if (j || m) {
                            if (!j && m)
                                f.to = a.jqx.scheduler.utilities.getEndOfDay(n),
                                f.allDay = !0;
                            else if (j && m && !e.rtl)
                                f.to = n.add(i),
                                0 == f.from.hour() && 0 == f.from.minute() && 23 == f.to.hour() && 59 == f.to.minute() && (f.allDay = !0);
                            else if (j && m && e.rtl)
                                f.from = a.jqx.scheduler.utilities.getStartOfDay(f.to.add(new a.jqx.timeSpan(-i))),
                                0 == f.from.hour() && 0 == f.from.minute() && 23 == f.to.hour() && 59 == f.to.minute() && (f.allDay = !0);
                            else if (j && !m) {
                                var p = 30
                                  , q = k.timeRuler && k.timeRuler.scale;
                                switch (q) {
                                case "sixtyMinutes":
                                case "hour":
                                    p = 60;
                                    break;
                                case "fifteenMinutes":
                                case "quarterHour":
                                    p = 15;
                                    break;
                                case "tenMinutes":
                                    p = 10;
                                    break;
                                case "fiveMinutes":
                                    p = 5
                                }
                                f.to = n.addMinutes(p),
                                f.allDay = !1
                            }
                        } else
                            f.to = n.add(i),
                            f.allDay = !1;
                    else if ("monthView" === h)
                        e.rtl ? f.from = a.jqx.scheduler.utilities.getStartOfDay(f.to.add(new a.jqx.timeSpan(-i))) : f.to = n.add(i);
                    else if ("timelineDayView" === h || "timelineWeekView" === h || "timelineMonthView" === h)
                        if (e.rtl)
                            if ("timelineMonthView" == h)
                                f.from = a.jqx.scheduler.utilities.getStartOfDay(f.to.add(new a.jqx.timeSpan(-i)));
                            else {
                                var o = e.getMinutesPerScale();
                                f.from = n.addMinutes(o).add(new a.jqx.timeSpan(-i))
                            }
                        else
                            f.to = n.add(i)
                }
                e._saveChangesAfterDragOrResize(b, f, c, e.resizing);
                var h = a(c).attr("data-view")
                  , r = e._resources[parseInt(h) - 1];
                null != r && (f.resourceId = r),
                e.resizing = !1,
                e.resizeFrom = null,
                e._dragCell = null,
                e.resizeTo = null;
                var s = {}
                  , t = {};
                for (var u in e.appointmentDataFields) {
                    var v = e.appointmentDataFields[u]
                      , w = f[u];
                    s[u] = w,
                    "from" != u && "to" != u || (w = w.toDate()),
                    t[v] = w
                }
                if (s.jqxAppointment = f,
                s.originalData = t,
                f.boundAppointment = s,
                e._raiseEvent("appointmentChange", {
                    appointment: f.boundAppointment
                }),
                e.changedAppointments[f.id] = {
                    type: "Update",
                    appointment: f.boundAppointment
                },
                e.table.find(".jqx-icon-arrow-down").hide(),
                "monthView" == e._views[e._view].type && e._views[e._view].monthRowAutoHeight)
                    e._renderrows();
                else if ("weekView" != e._views[e._view].type && "dayView" != e._views[e._view].type || !f.allDay && !j) {
                    var x = e.getViewStart()
                      , y = a.jqx.scheduler.utilities.getEndOfDay(e.getViewEnd());
                    e._prepareAppointmentsInView(x, y),
                    e._renderAppointments(x, y)
                } else if (e.tableRows > 1)
                    e._renderrows();
                else {
                    var x = e.getViewStart()
                      , y = a.jqx.scheduler.utilities.getEndOfDay(e.getViewEnd());
                    e._prepareAppointmentsInView(x, y),
                    e._renderAppointments(x, y);
                    var z = e.getMaxAllDayAppointments(e.appointmentsToRender);
                    if (z != g) {
                        var A = z * (e._defaultRowHeight - 2);
                        A = e.isTouchDevice() ? Math.max(22 + e._defaultRowHeight, 17 + A) : Math.max(3 * e._defaultRowHeight, 17 + A),
                        1 == e.tableRows ? a(a(e.table[0].rows[0]).find("td")).css("height", A + "px") : a(a(e.table[0].rows[1]).find("td")).css("height", A + "px"),
                        a(e.oldRow).find("td").css("height", A + "px"),
                        a(e.pinnedTableRow).find("td").css("height", A + "px"),
                        e.pinnedtable.height(A),
                        e._updateScrollbars(e._hostHeight ? e._hostHeight : e.host.height())
                    }
                }
                e._removeFeedbackAndStopResize()
            };
            f.isRecurrentAppointment() ? k(!1, f) : k(null, f)
        },
        _handleDayWeekViewResize: function(b, c, d, e, f) {
            var g = this
              , h = (g._views[g._view].type,
            g._views[g._view])
              , i = f.duration().days() >= 1 || f.allDay;
            if (i || d.getAttribute("data-end-date")) {
                var j = function(a) {
                    return !(a < g.cellWidth - 10)
                }
                  , k = h.appointmentsRenderMode && "exactTime" == h.appointmentsRenderMode;
                if (f.allDay || !k) {
                    if (g.leftResize) {
                        if (g._lastResizeX || (g._lastResizeX = g.mouseDownPosition.left),
                        b > g._lastResizeX + a(d).width() / 2) {
                            var l = g.selectedAppointmentTableBounds.width + g.selectedAppointmentTableBounds.left - e.left - g.cellWidth;
                            j(l) && (g.feedback.css("left", 5 + e.left + g.cellWidth),
                            g.feedback.width(l - 5),
                            g.feedback.hide(),
                            g.pinnedfeedback.css("left", 5 + e.left + g.cellWidth),
                            g.pinnedfeedback.width(l - 5),
                            g._lastResizeX = g.pinnedfeedback.coord().left,
                            g.rtl ? g.resizeTo = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(d.getAttribute("data-date"),g.timeZone)).addDays(-1) : g.resizeFrom = new a.jqx.date(d.getAttribute("data-date"),g.timeZone).addDays(1))
                        } else if (b < g._lastResizeX - a(d).width() / 2) {
                            var l = g.selectedAppointmentTableBounds.width + g.selectedAppointmentTableBounds.left - e.left;
                            j(l) && (g.feedback.css("left", 5 + e.left),
                            g.feedback.width(l - 5),
                            g.feedback.hide(),
                            g.pinnedfeedback.css("left", 5 + e.left),
                            g.pinnedfeedback.width(l - 5),
                            g._lastResizeX = g.pinnedfeedback.coord().left,
                            g.rtl ? g.resizeTo = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(d.getAttribute("data-date"),g.timeZone)) : g.resizeFrom = new a.jqx.date(d.getAttribute("data-date"),g.timeZone))
                        }
                    } else if (g.rightResize) {
                        g._lastResizeX || (g._lastResizeX = g.selectedAppointmentTableBounds.width + g.selectedAppointmentTableBounds.left);
                        var m = a(d).width() / 2;
                        if (b > g._lastResizeX + m) {
                            var n = a(d).width() + e.left - g.selectedAppointmentTableBounds.width - g.selectedAppointmentTableBounds.left
                              , l = g.selectedAppointmentTableBounds.width + n;
                            j(l) && (g.feedback.hide(),
                            g.feedback.width(l - 6),
                            g.feedback.css("left", 5 + e.left),
                            g.pinnedfeedback.width(l - 6),
                            g._lastResizeX = g.selectedAppointmentTableBounds.width + n + g.pinnedfeedback.coord().left,
                            g.rtl ? g.resizeFrom = new a.jqx.date(d.getAttribute("data-date"),g.timeZone) : g.resizeTo = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(d.getAttribute("data-date"),g.timeZone)))
                        } else if (b < g._lastResizeX - m) {
                            var n = e.left - g.selectedAppointmentTableBounds.width - g.selectedAppointmentTableBounds.left
                              , l = g.selectedAppointmentTableBounds.width + n;
                            j(l) && (g.feedback.hide(),
                            g.feedback.css("left", 5 + e.left),
                            g.feedback.width(l - 6),
                            g.pinnedfeedback.width(l - 6),
                            g._lastResizeX = g.selectedAppointmentTableBounds.width + n + g.pinnedfeedback.coord().left,
                            g.rtl ? g.resizeFrom = new a.jqx.date(d.getAttribute("data-date"),g.timeZone).addDays(1) : g.resizeTo = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(d.getAttribute("data-date"),g.timeZone).addDays(-1)))
                        }
                    }
                } else {
                    var o = new Array
                      , p = new Array
                      , q = -1
                      , r = -1
                      , s = this.host.coord().left
                      , t = 0
                      , u = g.hScrollInstance.value;
                    if (g.rtl)
                        var u = g.hScrollInstance.max - g.hScrollInstance.value;
                    "hidden" == g.hScrollBar[0].style.visibility && (u = 0);
                    for (var v = b + u, w = 0; w < this.columns.records.length; w++)
                        this.columns.records[w].timeColumn && (g.rtl || (s += this.columns.records[w].width,
                        t++));
                    for (var x = g.getViewStart(), y = g.getViewEnd(), w = 0; w < this._getColumnsLengthPerView(); w++) {
                        var z = this.columns.records[w + t].width;
                        g.leftResize ? (g.rtl || (o.push(s),
                        p.push(x.addDays(w)),
                        (0 != f.from.hour() || 0 == f.from.hour() && 0 != f.from.minute()) && s < g.selectedAppointmentTableBounds.left && s + z > g.selectedAppointmentTableBounds.left && (o.push(g.selectedAppointmentTableBounds.left),
                        p.push(f.from),
                        q = o.length - 1),
                        (23 != f.to.hour() || 23 == f.to.hour() && 59 != f.to.minute()) && s < g.selectedAppointmentTableBounds.left + g.selectedAppointmentTableBounds.width && s + z > g.selectedAppointmentTableBounds.left + g.selectedAppointmentTableBounds.width && (o.push(g.selectedAppointmentTableBounds.left + g.selectedAppointmentTableBounds.width + 8),
                        p.push(f.to),
                        r = o.length - 1)),
                        g.rtl && (o.push(s),
                        p.push(y.addDays(-w - 1)),
                        (0 != f.from.hour() || 0 == f.from.hour() && 0 != f.from.minute()) && s < g.selectedAppointmentTableBounds.left + g.selectedAppointmentTableBounds.width && s + z > g.selectedAppointmentTableBounds.left + g.selectedAppointmentTableBounds.width && (o.push(g.selectedAppointmentTableBounds.left + g.selectedAppointmentTableBounds.width + 8),
                        p.push(f.from),
                        q = o.length - 1),
                        (23 != f.to.hour() || 23 == f.to.hour() && 59 != f.to.minute()) && s < g.selectedAppointmentTableBounds.left && s + z > g.selectedAppointmentTableBounds.left && (o.push(g.selectedAppointmentTableBounds.left),
                        p.push(f.to),
                        r = o.length - 1)),
                        s += z) : g.rtl ? ((0 != f.from.hour() || 0 == f.from.hour() && 0 != f.from.minute()) && s < g.selectedAppointmentTableBounds.left + g.selectedAppointmentTableBounds.width && s + z > g.selectedAppointmentTableBounds.left + g.selectedAppointmentTableBounds.width && (o.push(g.selectedAppointmentTableBounds.left + g.selectedAppointmentTableBounds.width + 8),
                        p.push(f.from),
                        q = o.length - 1),
                        (23 != f.to.hour() || 23 == f.to.hour() && 59 != f.to.minute()) && s < g.selectedAppointmentTableBounds.left && s + z > g.selectedAppointmentTableBounds.left && (o.push(g.selectedAppointmentTableBounds.left),
                        p.push(f.to),
                        r = o.length - 1),
                        s += z,
                        o.push(s),
                        p.push(y.addDays(-w - 1))) : ((0 != f.from.hour() || 0 == f.from.hour() && 0 != f.from.minute()) && s < g.selectedAppointmentTableBounds.left && s + z > g.selectedAppointmentTableBounds.left && (o.push(g.selectedAppointmentTableBounds.left),
                        p.push(f.from),
                        q = o.length - 1),
                        (23 != f.to.hour() || 23 == f.to.hour() && 59 != f.to.minute()) && s < g.selectedAppointmentTableBounds.left + g.selectedAppointmentTableBounds.width && s + z > g.selectedAppointmentTableBounds.left + g.selectedAppointmentTableBounds.width && (o.push(g.selectedAppointmentTableBounds.left + g.selectedAppointmentTableBounds.width + 8),
                        p.push(f.to),
                        r = o.length - 1),
                        s += z,
                        o.push(s),
                        p.push(x.addDays(w)))
                    }
                    if (g.leftResize) {
                        for (var w = 0; w < o.length; w++) {
                            var e = o[w]
                              , A = o[w + 1];
                            A || (A = e);
                            var B = w < o.length - 1 ? v >= e && v <= A : v >= e;
                            if (B) {
                                var z = -e + g.selectedAppointmentTableBounds.left + g.selectedAppointmentTableBounds.width
                                  , C = g.pinnedfeedback.width()
                                  , D = g.pinnedfeedback.css("left")
                                  , E = g.resizeTo
                                  , F = g.resizeFrom;
                                z > 0 && (g.pinnedfeedback.css("left", e),
                                g.pinnedfeedback.width(z),
                                w == q ? g.rtl ? g.resizeTo = f.from : g.resizeFrom = f.from : w == r ? g.rtl ? g.resizeTo = f.to : g.resizeFrom = f.to : g.rtl ? g.resizeTo = a.jqx.scheduler.utilities.getEndOfDay(p[w]) : g.resizeFrom = p[w])
                            }
                        }
                        var G = g.resizeFrom
                          , H = g.resizeTo;
                        g.rtl ? G = f.from : H = f.to;
                        var I = new a.jqx.timeSpan(1e4 * (H - G));
                        I.days() < 1 && (g.pinnedfeedback.css("left", D),
                        g.pinnedfeedback.width(C),
                        g.resizeFrom = F,
                        g.resizeTo = E)
                    } else if (g.rightResize) {
                        for (var w = 0; w < o.length; w++) {
                            var e = o[w]
                              , A = o[w + 1];
                            A || (A = e);
                            var B = w < o.length - 1 ? b >= e - this.cellWidth / 3 && b <= A - this.cellWidth / 3 : b >= e - this.cellWidth / 3;
                            if (B) {
                                var z = e - g.selectedAppointmentTableBounds.left - 15
                                  , C = g.pinnedfeedback.width();
                                g.pinnedfeedback.width(z);
                                var E = g.resizeTo
                                  , F = g.resizeFrom;
                                if (w == q) {
                                    g.rtl ? g.resizeFrom = f.from : g.resizeTo = f.from;
                                    var z = e - g.selectedAppointmentTableBounds.left - 9;
                                    g.pinnedfeedback.width(z);
                                    break
                                }
                                if (w == r) {
                                    g.rtl ? g.resizeFrom = f.to : g.resizeTo = f.to;
                                    var z = e - g.selectedAppointmentTableBounds.left - 9;
                                    g.pinnedfeedback.width(z);
                                    break
                                }
                                g.rtl ? g.resizeFrom = p[w] : g.resizeTo = a.jqx.scheduler.utilities.getEndOfDay(p[w]);
                                break
                            }
                        }
                        var G = g.resizeFrom
                          , H = g.resizeTo;
                        g.rtl ? H = f.to : G = f.from;
                        var I = new a.jqx.timeSpan(1e4 * (H - G));
                        I.days() < 1 && (g.pinnedfeedback.width(C),
                        g.resizeFrom = F,
                        g.resizeTo = E)
                    }
                }
            } else {
                var J = function(a) {
                    return !(a < 10)
                }
                  , K = g.findCell(g.feedback.coord().left, c);
                if (g.topResize) {
                    if (g._lastResizeY || (g._lastResizeY = g.mouseDownPosition.top),
                    c > g._lastResizeY + a(d).height() / 2) {
                        var L = g.selectedAppointmentTableBounds.height + g.selectedAppointmentTableBounds.top - e.top - a(d).height() - 3;
                        if (J(L)) {
                            g.feedback.css("top", 2 + e.top + a(d).height()),
                            g.feedback.height(L),
                            g._lastResizeY = g.feedback.coord().top;
                            var M = new a.jqx.date(K.getAttribute("data-date"),g.timeZone);
                            g.resizeFrom = M.addMinutes(g.getMinutesPerScale())
                        }
                    } else if (c < g._lastResizeY - a(d).height() / 2) {
                        var L = g.selectedAppointmentTableBounds.height + g.selectedAppointmentTableBounds.top - e.top - 3;
                        J(L) && (g.feedback.css("top", 2 + e.top),
                        g.feedback.height(L),
                        g._lastResizeY = g.feedback.coord().top,
                        g.resizeFrom = new a.jqx.date(K.getAttribute("data-date"),g.timeZone))
                    }
                } else if (g.bottomResize)
                    if (g._lastResizeY || (g._lastResizeY = g.mouseDownPosition.top),
                    c > g._lastResizeY + a(d).height() / 2) {
                        var n = -5 + a(d).height() + e.top - g.selectedAppointmentTableBounds.height - g.selectedAppointmentTableBounds.top
                          , L = g.selectedAppointmentTableBounds.height + n;
                        J(L) && (g.feedback.height(L),
                        g._lastResizeY = g.selectedAppointmentTableBounds.height + n + g.feedback.coord().top,
                        g.resizeTo = new a.jqx.date(K.getAttribute("data-date"),g.timeZone).addMinutes(g.getMinutesPerScale()))
                    } else if (c < g._lastResizeY - a(d).height() / 2) {
                        var n = -5 + e.top - g.selectedAppointmentTableBounds.height - g.selectedAppointmentTableBounds.top
                          , L = g.selectedAppointmentTableBounds.height + n;
                        J(L) && (g.feedback.height(L),
                        g._lastResizeY = g.selectedAppointmentTableBounds.height + n + g.feedback.coord().top,
                        g.resizeTo = new a.jqx.date(K.getAttribute("data-date"),g.timeZone))
                    }
            }
        },
        _handleTimelineMonthViewResize: function(b, c, d, e, f) {
            var g = this
              , h = (g._views[g._view].type,
            g._views[g._view],
            function(a) {
                return !(a < 10)
            }
            )
              , i = g.findCell(b, g.feedback.coord().top);
            if (f.allDay) {
                if (g.leftResize) {
                    if (g._lastResizeX || (g._lastResizeX = g.mouseDownPosition.left),
                    b > g._lastResizeX + a(d).width() / 2) {
                        var j = g.selectedAppointmentTableBounds.width + g.selectedAppointmentTableBounds.left - e.left - a(d).width();
                        h(j) && (g.feedback.css("left", e.left + a(d).width()),
                        g.feedback.width(j),
                        g._lastResizeX = g.feedback.coord().left,
                        g.rtl ? g.resizeTo = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(i.getAttribute("data-date"),g.timeZone).addDays(-1)) : g.resizeFrom = new a.jqx.date(i.getAttribute("data-date"),g.timeZone).addDays(1))
                    } else if (b < g._lastResizeX - a(d).width() / 2) {
                        var j = g.selectedAppointmentTableBounds.width + g.selectedAppointmentTableBounds.left - e.left;
                        h(j) && (g.feedback.css("left", e.left),
                        g.feedback.width(j),
                        g._lastResizeX = g.feedback.coord().left,
                        g.rtl ? g.resizeTo = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(i.getAttribute("data-date"),g.timeZone)) : g.resizeFrom = new a.jqx.date(i.getAttribute("data-date"),g.timeZone))
                    }
                } else if (g.rightResize)
                    if (g._lastResizeX || (g._lastResizeX = g.mouseDownPosition.left),
                    b > g._lastResizeX + a(d).width() / 2) {
                        var k = a(d).width() + e.left - g.selectedAppointmentTableBounds.width - g.selectedAppointmentTableBounds.left
                          , j = g.selectedAppointmentTableBounds.width + k - 5;
                        h(j) && (g.feedback.width(j),
                        g._lastResizeX = g.selectedAppointmentTableBounds.width + k + g.feedback.coord().left,
                        g.rtl ? g.resizeFrom = new a.jqx.date(i.getAttribute("data-date"),g.timeZone) : g.resizeTo = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(i.getAttribute("data-date"),g.timeZone)))
                    } else if (b < g._lastResizeX - a(d).width() / 2) {
                        var k = e.left - g.selectedAppointmentTableBounds.width - g.selectedAppointmentTableBounds.left
                          , j = g.selectedAppointmentTableBounds.width + k - 5;
                        h(j) && (g.feedback.width(j),
                        g._lastResizeX = g.selectedAppointmentTableBounds.width + k + g.feedback.coord().left,
                        g.rtl ? g.resizeFrom = new a.jqx.date(i.getAttribute("data-date"),g.timeZone).addDays(1) : g.resizeTo = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(i.getAttribute("data-date"),g.timeZone).addDays(-1)))
                    }
            } else {
                for (var l = new Array, m = new Array, n = -1, o = -1, p = this.host.coord().left, q = 0, r = 0; r < this.columns.records.length; r++)
                    this.columns.records[r].timeColumn && (p += this.columns.records[r].width,
                    q++);
                var s = g.hScrollInstance.value;
                if (g.rtl)
                    var s = g.hScrollInstance.max - g.hScrollInstance.value;
                "hidden" == g.hScrollBar[0].style.visibility && (s = 0);
                for (var t = b + s, u = g.getViewStart(), v = g.getViewEnd(), r = (this._getColumnsLengthPerView() - 1,
                0); r < this._getColumnsLengthPerView(); r++) {
                    var w = this.columns.records[r + q].width;
                    g.leftResize ? (l.push(p),
                    g.rtl ? m.push(v.addDays(-r)) : m.push(u.addDays(r)),
                    (0 != f.from.hour() || 0 == f.from.hour() && 0 != f.from.minute()) && p < g.selectedAppointmentTableBounds.left && p + w > g.selectedAppointmentTableBounds.left && (l.push(g.selectedAppointmentTableBounds.left),
                    m.push(f.from),
                    n = l.length - 1),
                    (23 != f.to.hour() || 23 == f.to.hour() && 59 != f.to.minute()) && p < g.selectedAppointmentTableBounds.left + g.selectedAppointmentTableBounds.width && p + w > g.selectedAppointmentTableBounds.left + g.selectedAppointmentTableBounds.width && (l.push(g.selectedAppointmentTableBounds.left + g.selectedAppointmentTableBounds.width + 8),
                    m.push(f.to),
                    o = l.length - 1),
                    p += w) : ((0 != f.from.hour() || 0 == f.from.hour() && 0 != f.from.minute()) && p < g.selectedAppointmentTableBounds.left && p + w > g.selectedAppointmentTableBounds.left && (l.push(g.selectedAppointmentTableBounds.left),
                    m.push(f.from),
                    n = l.length - 1),
                    (23 != f.to.hour() || 23 == f.to.hour() && 59 != f.to.minute()) && p < g.selectedAppointmentTableBounds.left + g.selectedAppointmentTableBounds.width && p + w > g.selectedAppointmentTableBounds.left + g.selectedAppointmentTableBounds.width && (l.push(g.selectedAppointmentTableBounds.left + g.selectedAppointmentTableBounds.width),
                    m.push(f.to),
                    o = l.length - 1),
                    p += w,
                    l.push(p),
                    g.rtl ? m.push(v.addDays(-r - 1)) : m.push(u.addDays(r)))
                }
                if (g.leftResize) {
                    for (var r = 0; r < l.length; r++) {
                        var x = l[r]
                          , y = l[r + 1];
                        y || (y = x);
                        var z = r < l.length - 1 ? t >= x && t <= y : t >= x;
                        if (z) {
                            var w = -x + g.selectedAppointmentTableBounds.left + g.selectedAppointmentTableBounds.width
                              , A = g.feedback.width()
                              , B = g.feedback.css("left")
                              , C = g.resizeTo
                              , D = g.resizeFrom;
                            g.feedback.css("left", x),
                            g.feedback.width(w),
                            r == n ? g.rtl ? g.resizeTo = f.from : g.resizeFrom = f.from : r == o ? g.rtl ? g.resizeTo = f.to : g.resizeFrom = f.to : g.rtl ? g.resizeTo = m[r] : g.resizeFrom = m[r]
                        }
                    }
                    var E = g.resizeFrom
                      , F = g.resizeTo;
                    g.rtl ? E = f.from : F = f.to;
                    new a.jqx.timeSpan(1e4 * (F - E));
                    g.feedback.width() < 20 && (g.feedback.css("left", B),
                    g.feedback.width(A),
                    g.resizeFrom = D,
                    g.resizeTo = C)
                } else if (g.rightResize) {
                    for (var r = 0; r < l.length; r++) {
                        var x = l[r]
                          , y = l[r + 1];
                        y || (y = x);
                        var z = r < l.length - 1 ? t >= x - this.cellWidth / 3 && t <= y - this.cellWidth / 3 : t >= x - this.cellWidth / 3;
                        if (z) {
                            var w = x - g.selectedAppointmentTableBounds.left - 12
                              , A = g.feedback.width();
                            g.feedback.width(w);
                            var C = g.resizeTo
                              , D = g.resizeFrom;
                            if (r == n) {
                                g.rtl ? g.resizeFrom = f.from : g.resizeTo = f.from;
                                var w = x - g.selectedAppointmentTableBounds.left;
                                g.feedback.width(w);
                                break
                            }
                            if (r == o) {
                                g.rtl ? g.resizeFrom = f.to : g.resizeTo = f.to;
                                var w = x - g.selectedAppointmentTableBounds.left;
                                g.feedback.width(w);
                                break
                            }
                            g.rtl ? g.resizeFrom = m[r] : g.resizeTo = a.jqx.scheduler.utilities.getEndOfDay(m[r]);
                            break
                        }
                    }
                    var E = g.resizeFrom
                      , F = g.resizeTo;
                    g.rtl ? F = f.to : E = f.from;
                    new a.jqx.timeSpan(1e4 * (F - E));
                    g.feedback.width() < 20 && (g.feedback.width(A),
                    g.resizeFrom = D,
                    g.resizeTo = C)
                }
            }
        },
        _handleMonthViewResize: function(b, c, d, e, f) {
            var g = this;
            if (g.selectedJQXAppointment) {
                var h = (g._views[g._view].type,
                g._views[g._view])
                  , i = -5;
                g.tableColumns > 1 && (i = parseInt(-5 / g.tableColumns));
                for (var j = 0; j < g.columns.records.length / g.tableColumns; j++)
                    g.columns.records[j].timeColumn || (i += g.columns.records[j].width);
                var k = g.selectedJQXAppointment.resourceId
                  , l = g._resources.indexOf(k);
                g.resources && "none" == g.resources.orientation && (l = -1);
                var m = "0px";
                l != -1 && 1 == g.tableRows && (m = i * l + "px"),
                h.showWeekNumbers && (g.rtl || (m = parseInt(m) + g.columns.records[0].width + "px"));
                var n = d.offsetWidth
                  , o = (d.offsetHeight,
                18);
                g.isTouchDevice() && (o = 2);
                for (var j = 0; j < 6; j++)
                    g.feedbacks[j][0].style.left = m,
                    g.feedbacks[j][0].style.width = i + "px",
                    g.feedbacks[j][0].style.display = "block",
                    g.feedbacks[j][0].style.top = parseInt(g.rows[j].top) + o + "px",
                    g.tableRows > 1 && (g.feedbacks[j][0].style.top = parseInt(g.rows[6 * l + j].top) + o + "px"),
                    a(g.feedbacks[j][0]).find(".jqx-scheduler-appointment-resize-indicator").css("visibility", "inherit");
                var p = g.selectedJQXAppointment.elements
                  , q = (p[0].cells[0].cell,
                p[p.length - 1])
                  , r = q.lastCellY
                  , s = q.lastCellX
                  , t = p[0].cellY
                  , u = p[0].cellX
                  , v = parseInt(e.top)
                  , w = parseInt(e.left);
                if (g.rtl) {
                    if (g.leftResize) {
                        for (var x = !1, j = 0; j < 6; j++) {
                            var y = g.feedbacks[j]
                              , z = parseInt(y[0].style.top) - o;
                            parseInt(y[0].style.left);
                            if (z < v)
                                y[0].style.width = i + "px";
                            else
                                for (var A = 0; A < p.length; A++) {
                                    var B = p[A].cellY;
                                    B == z && (y[0].style.width = p[A].width + "px",
                                    y[0].style.top = p[A].y + "px")
                                }
                            var C = p[0]
                              , D = parseInt(C.x);
                            if (z == t)
                                if (y[0].style.left = D + "px",
                                v == t) {
                                    if (y[0].style.left = 1 + e.left + "px",
                                    y[0].style.width = -1 + C.x + C.width - e.left + "px",
                                    e.left > C.x + C.width && (y[0].style.width = C.width + "px",
                                    y[0].style.left = C.x + "px"),
                                    "exactTime" == h.appointmentsRenderMode && !g.selectedJQXAppointment.allDay) {
                                        var E = g.host.coord().left;
                                        b - E >= C.x - 10 && b - E <= C.cellX + g.cellWidth && (y[0].style.width = C.width + "px",
                                        y[0].style.left = C.x + "px",
                                        x = !0)
                                    }
                                } else
                                    v < t ? (y[0].style.left = D + "px",
                                    y[0].style.width = C.width + "px") : v > t && (y[0].style.left = m,
                                    y[0].style.width = C.x + C.width - parseInt(m) + "px");
                            else
                                z == v && (y[0].style.width = i - e.left + parseInt(m) + "px",
                                y[0].style.left = e.left + "px");
                            if (z < t && (y[0].style.display = "none"),
                            z > v && (y[0].style.display = "none"),
                            v < t)
                                for (var A = 0; A < p.length; A++) {
                                    var B = p[A].cellY;
                                    B == z && (y[0].style.display = "block",
                                    y[0].style.width = p[A].width + "px",
                                    y[0].style.left = p[A].x + "px")
                                }
                            if (v == t)
                                for (var A = 0; A < p.length; A++) {
                                    var B = p[A].cellY;
                                    (v < t || v == t) && B == z && t != r && (y[0].style.left = 1 + e.left + parseInt(m) + "px",
                                    1 + e.left + parseInt(m) > C.x + C.width && (y[0].style.left = C.x + "px"),
                                    y[0].style.width = -1 + C.x + C.width - e.left + "px")
                                }
                        }
                        var F = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(d.getAttribute("data-date"),g.timeZone));
                        F > g.selectedJQXAppointment.from && !x ? g.resizeTo = F : g.resizeTo = g.selectedJQXAppointment.to
                    } else if (g.rightResize) {
                        for (var G = !1, j = 0; j < 6; j++) {
                            var y = g.feedbacks[j]
                              , z = parseInt(y[0].style.top) - o;
                            parseInt(y[0].style.left);
                            z < v && (y[0].style.width = i + "px");
                            for (var A = 0; A < p.length; A++) {
                                var B = p[A].cellY;
                                B == z && (y[0].style.top = p[A].y + "px")
                            }
                            var C = p[0]
                              , D = parseInt(C.x);
                            if (z == t)
                                if (y[0].style.left = D + "px",
                                v == t)
                                    if (w >= u) {
                                        if (y[0].style.width = w + n - D - 5 + "px",
                                        "exactTime" == h.appointmentsRenderMode && !g.selectedJQXAppointment.allDay) {
                                            var E = g.host.coord().left;
                                            b - E >= C.lastCellX && b - E <= C.x + C.width + 15 && (y[0].style.width = C.width + "px",
                                            G = !0)
                                        }
                                    } else
                                        y[0].style.width = C.width + "px";
                                else
                                    v > t ? (y[0].style.left = D + "px",
                                    y[0].style.width = C.width + "px") : v < t && (y[0].style.left = D + "px",
                                    y[0].style.width = i - D + parseInt(m) + "px");
                            else
                                z == v && (y[0].style.width = w + n - 5 - parseInt(m) + "px");
                            if (z > r && (y[0].style.display = "none"),
                            z < v && (y[0].style.display = "none"),
                            v > r)
                                for (var A = 0; A < p.length; A++) {
                                    var B = p[A].cellY;
                                    B == z && (y[0].style.display = "block"),
                                    z == r && (y[0].style.width = p[A].width + "px",
                                    y[0].style.left = p[A].x + "px")
                                }
                            if (v <= r && z == r)
                                for (var A = 0; A < p.length; A++) {
                                    var B = p[A].cellY;
                                    z != v && B == z && t != r ? (y[0].style.width = p[A].width + "px",
                                    y[0].style.left = p[A].x + "px") : z == v && B == z && t != r && (y[0].style.left = p[A].x + "px",
                                    y[0].style.width = w + n - 5 - parseInt(m) - p[A].x + "px")
                                }
                        }
                        var F = new a.jqx.date(d.getAttribute("data-date"),g.timeZone);
                        F < g.selectedJQXAppointment.to && !G ? g.resizeFrom = F : g.resizeFrom = g.selectedJQXAppointment.from
                    }
                } else if (g.leftResize) {
                    for (var G = !1, j = 0; j < 6; j++) {
                        var y = g.feedbacks[j]
                          , z = parseInt(y[0].style.top) - o;
                        parseInt(y[0].style.left);
                        if (z < v) {
                            y[0].style.width = i + "px";
                            for (var A = 0; A < p.length; A++) {
                                var B = p[A].cellY;
                                B == z && (y[0].style.top = p[A].y + "px")
                            }
                        } else
                            for (var A = 0; A < p.length; A++) {
                                var B = p[A].cellY;
                                B == z && (y[0].style.width = p[A].width + "px",
                                y[0].style.top = p[A].y + "px")
                            }
                        var C = p[0]
                          , D = parseInt(C.x);
                        if (z == t)
                            if (y[0].style.left = D + "px",
                            v == t) {
                                if (y[0].style.left = 1 + e.left + "px",
                                y[0].style.width = -1 + C.x + C.width - e.left + "px",
                                "exactTime" == h.appointmentsRenderMode && !g.selectedJQXAppointment.allDay) {
                                    var H = g.cellWidth - (C.x - u)
                                      , E = g.host.coord().left;
                                    b - E >= C.x && b - E <= C.x + H + 2 && (y[0].style.left = D + "px",
                                    y[0].style.width = C.width + "px",
                                    G = !0)
                                }
                            } else
                                v > t ? (y[0].style.left = D + "px",
                                y[0].style.width = C.width + "px") : v < t && (y[0].style.left = m,
                                y[0].style.width = C.x + C.width - parseInt(m) + "px");
                        else
                            z == v && (y[0].style.width = i - e.left + parseInt(m) + "px",
                            y[0].style.left = e.left + "px");
                        if (z > r && (y[0].style.display = "none"),
                        z < v && (y[0].style.display = "none"),
                        v >= r)
                            for (var A = 0; A < p.length; A++) {
                                var B = p[A].cellY;
                                v > r || v == r && w > s ? B == z && (y[0].style.display = "block",
                                y[0].style.width = p[A].width + "px",
                                y[0].style.left = p[A].x + "px") : v == r && w <= s && t != r && (y[0].style.width = p[A].width - e.left + parseInt(m) + "px")
                            }
                    }
                    var F = new a.jqx.date(d.getAttribute("data-date"),g.timeZone);
                    F < g.selectedJQXAppointment.to && !G ? g.resizeFrom = F : g.resizeFrom = g.selectedJQXAppointment.from
                } else if (g.rightResize) {
                    for (var x = !1, j = 0; j < 6; j++) {
                        var y = g.feedbacks[j]
                          , z = parseInt(y[0].style.top) - o;
                        parseInt(y[0].style.left);
                        z < v && (y[0].style.width = i + "px");
                        for (var A = 0; A < p.length; A++) {
                            var B = p[A].cellY;
                            B == z && (y[0].style.top = p[A].y + "px")
                        }
                        var C = p[0]
                          , D = parseInt(C.x);
                        if (z == t)
                            if (y[0].style.left = D + "px",
                            v == t)
                                if (w >= u) {
                                    if (y[0].style.width = w + n - D - 5 + "px",
                                    "exactTime" == h.appointmentsRenderMode && !g.selectedJQXAppointment.allDay) {
                                        var E = g.host.coord().left;
                                        b - E >= s && b - E <= C.x + C.width + 15 && (y[0].style.width = C.width + "px",
                                        x = !0)
                                    }
                                } else
                                    y[0].style.width = C.width + "px";
                            else
                                v < t ? (y[0].style.left = D + "px",
                                y[0].style.width = C.width + "px") : v > t && (y[0].style.left = D + "px",
                                y[0].style.width = i - D + parseInt(m) + "px");
                        else
                            z == v && (y[0].style.width = w + n - 5 - parseInt(m) + "px");
                        if (z < t && (y[0].style.display = "none"),
                        z > v && z > t && (y[0].style.display = "none"),
                        v <= t)
                            for (var A = 0; A < p.length; A++) {
                                var B = p[A].cellY;
                                (v < t || v == t && w < u) && B == z && (y[0].style.display = "block",
                                y[0].style.width = p[A].width + "px")
                            }
                    }
                    var F = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(d.getAttribute("data-date"),g.timeZone));
                    F > g.selectedJQXAppointment.from && !x ? g.resizeTo = F : g.resizeTo = g.selectedJQXAppointment.to
                }
                for (var I = new Array, j = 0; j < 6; j++) {
                    var y = g.feedbacks[j];
                    "block" == y[0].style.display && I.push(y)
                }
                a.each(I, function(b) {
                    g.rtl ? (b > 0 && (a(this).find(".jqx-scheduler-appointment-right-resize-indicator")[0].style.visibility = "hidden"),
                    b < I.length - 1 && (a(this).find(".jqx-scheduler-appointment-left-resize-indicator")[0].style.visibility = "hidden")) : (b > 0 && (a(this).find(".jqx-scheduler-appointment-left-resize-indicator")[0].style.visibility = "hidden"),
                    b < I.length - 1 && (a(this).find(".jqx-scheduler-appointment-right-resize-indicator")[0].style.visibility = "hidden"))
                })
            }
        },
        _handleTimelineDayWeekViewResize: function(b, c, d, e, f) {
            var g = this
              , h = (g._views[g._view].type,
            g._views[g._view],
            g.getMinutesPerScale())
              , i = function(a) {
                return !(a < 10)
            }
              , j = g.findCell(b, g.feedback.coord().top);
            if (g.leftResize) {
                if (g._lastResizeX || (g._lastResizeX = g.mouseDownPosition.left),
                b > g._lastResizeX + a(d).width() / 2) {
                    var k = g.selectedAppointmentTableBounds.width + g.selectedAppointmentTableBounds.left - e.left - a(d).width();
                    i(k) && (g.feedback.css("left", 2 + e.left + a(d).width()),
                    g.feedback.width(k),
                    g._lastResizeX = g.feedback.coord().left,
                    g.rtl ? g.resizeTo = new a.jqx.date(j.getAttribute("data-date"),g.timeZone) : g.resizeFrom = new a.jqx.date(j.getAttribute("data-date"),g.timeZone).addMinutes(h))
                } else if (b < g._lastResizeX - a(d).width() / 2) {
                    var k = g.selectedAppointmentTableBounds.width + g.selectedAppointmentTableBounds.left - e.left;
                    i(k) && (g.feedback.css("left", 2 + e.left),
                    g.feedback.width(k),
                    g._lastResizeX = g.feedback.coord().left,
                    g.rtl ? g.resizeTo = new a.jqx.date(j.getAttribute("data-date"),g.timeZone).addMinutes(h) : g.resizeFrom = new a.jqx.date(j.getAttribute("data-date"),g.timeZone))
                }
            } else if (g.rightResize)
                if (g._lastResizeX || (g._lastResizeX = g.mouseDownPosition.left),
                b > g._lastResizeX + a(d).width() / 2) {
                    var l = a(d).width() + e.left - g.selectedAppointmentTableBounds.width - g.selectedAppointmentTableBounds.left
                      , k = g.selectedAppointmentTableBounds.width + l;
                    i(k) && (g.feedback.width(k),
                    g._lastResizeX = g.selectedAppointmentTableBounds.width + l + g.feedback.coord().left,
                    g.rtl ? g.resizeFrom = new a.jqx.date(j.getAttribute("data-date"),g.timeZone) : g.resizeTo = new a.jqx.date(j.getAttribute("data-date"),g.timeZone).addMinutes(h))
                } else if (b < g._lastResizeX - a(d).width() / 2) {
                    var l = e.left - g.selectedAppointmentTableBounds.width - g.selectedAppointmentTableBounds.left
                      , k = g.selectedAppointmentTableBounds.width + l;
                    i(k) && (g.feedback.width(k),
                    g._lastResizeX = g.selectedAppointmentTableBounds.width + l + g.feedback.coord().left,
                    g.rtl ? g.resizeFrom = new a.jqx.date(j.getAttribute("data-date"),g.timeZone).addMinutes(h) : g.resizeTo = new a.jqx.date(j.getAttribute("data-date"),g.timeZone))
                }
        },
        _handleResize: function(b, c, d, e, f) {
            var g = this
              , h = g._views[g._view].type
              , i = g._views[g._view];
            "dayView" === h || "weekView" === h ? g._handleDayWeekViewResize(b, c, d, e, f) : "timelineMonthView" === h ? g._handleTimelineMonthViewResize(b, c, d, e, f) : "monthView" === h ? g._handleMonthViewResize(b, c, d, e, f) : "timelineDayView" !== h && "timelineWeekView" !== h || g._handleTimelineDayWeekViewResize(b, c, d, e, f),
            "timelineDayView" === h || "timelineMonthView" === h || "timelineWeekView" === h ? (clearInterval(g._horizontalIntervalDrag),
            g._horizontalIntervalDrag = setInterval(function() {
                var a = g.host.width()
                  , c = g.host.coord().left
                  , d = c + 25
                  , e = a + d - 45;
                g.rtl ? b > e ? g.hScrollInstance.setPosition(g.hScrollInstance.value - 5) : b < d && g.hScrollInstance.setPosition(g.hScrollInstance.value + 5) : b < d ? g.hScrollInstance.setPosition(g.hScrollInstance.value - 5) : b > e && g.hScrollInstance.setPosition(g.hScrollInstance.value + 5)
            }, 5)) : "dayView" !== h && "weekView" !== h || (clearInterval(g._intervalDrag),
            g._intervalDrag = setInterval(function() {
                var b = g.host.height()
                  , d = 0;
                d += g.columnGroups ? g.showHeader ? g.columnsheader.height() : 0 : g.showHeader ? g.columnsHeight : 0,
                g.showToolbar && (d += g.toolbarHeight),
                b -= d;
                var e = g.legendHeight;
                0 == g._resources.length && (e = 0),
                g.showLegend && (b -= e);
                var j = d + g.host.coord().top
                  , k = g.showAllDayRow;
                !i.timeRuler || "dayView" !== h && "weekView" !== h || void 0 != i.timeRuler.showAllDayRow && (k = i.timeRuler.showAllDayRow);
                var l = f.duration().days() >= 1 || f.allDay;
                k && l ? j -= 20 : k && g.resizing && (j += a(g.table[0].rows[0]).height(),
                b -= a(g.table[0].rows[0]).height());
                var m = j + 25
                  , n = b + m - 45;
                c < m ? g.vScrollInstance.setPosition(g.vScrollInstance.value - 5) : c > n && g.vScrollInstance.setPosition(g.vScrollInstance.value + 5)
            }, 5)),
            g.resizing = !0
        },
        _startTimers: function(b, c, d) {
            var e = this
              , f = e.host.coord()
              , g = 0
              , h = 0;
            "hidden" != e.hScrollInstance.element.style.visibility && (clearInterval(e._horizontalIntervalDragVelocity),
            e._horizontalIntervalDragVelocity = setInterval(function() {
                g++,
                g > 40 && (g = 40)
            }, 100),
            clearInterval(e._horizontalIntervalDrag),
            e._horizontalIntervalDrag = setInterval(function() {
                var a = e._hostWidth
                  , c = f.left
                  , d = c + 30
                  , h = a + d - 60;
                e.rtl ? b < d ? e.hScrollInstance.setPosition(e.hScrollInstance.value + 10 + g) : b > h ? e.hScrollInstance.setPosition(e.hScrollInstance.value - 10 - g) : g = 0 : b < d ? e.hScrollInstance.setPosition(e.hScrollInstance.value - 10 - g) : b > h ? e.hScrollInstance.setPosition(e.hScrollInstance.value + 10 + g) : g = 0
            }, 10)),
            "hidden" != e.vScrollInstance.element.style.visibility && (clearInterval(e._verticalIntervalDragVelocity),
            e._verticalIntervalDragVelocity = setInterval(function() {
                h++,
                h > 40 && (h = 40)
            }, 100),
            clearInterval(e._intervalDrag),
            e._intervalDrag = setInterval(function() {
                var b = e._hostHeight
                  , g = 0;
                g += e.columnGroups ? e.showHeader ? e.columnsheader.height() : 0 : e.showHeader ? e.columnsHeight : 0;
                var i = e._views[e._view].type
                  , j = e._views[e._view];
                e.showToolbar && (g += e.toolbarHeight),
                b -= g,
                e.showLegend && e._resources.length > 0 && (b -= e.legendHeight);
                var k = f.top
                  , l = g + k;
                if ("dayView" == i || "weekView" == i) {
                    var m = e.showAllDayRow;
                    !j.timeRuler || "dayView" !== i && "weekView" !== i || void 0 != j.timeRuler.showAllDayRow && (m = j.timeRuler.showAllDayRow);
                    var n = d.duration().days() >= 1 || d.allDay;
                    m && n ? l -= 20 : m && e.resizing && (l += a(e.table[0].rows[0]).height())
                }
                var o = l + 30
                  , p = k + b + g - 30;
                c < o ? e.vScrollInstance.setPosition(e.vScrollInstance.value - 10 - h) : c > p ? e.vScrollInstance.setPosition(e.vScrollInstance.value + 10 + h) : h = 0
            }, 10))
        },
        _hoverCell: function(a) {
            var b = this;
            return !b.enableHover || (b._resources.length > 0 && a.className.indexOf("pinned") >= 0 || (a.className.indexOf("time-column") >= 0 || (a.className.indexOf("jqx-scheduler-disabled-cell") >= 0 || (!(!a || a != b.hoveredCell) || (b.hoveredCell = a,
            !a || (b._removeHoveredCell(),
            b.hoveredCell = a,
            a.className += " " + b.toTP("jqx-fill-state-hover") + " " + b.toTP("jqx-grid-cell-hover") + " " + b.toTP("jqx-scheduler-cell-hover"),
            void (a.jqxClassName = a.className)))))))
        },
        _removeHoveredCell: function() {
            var a = this;
            if (a.hoveredCell) {
                var b = a.hoveredCell
                  , c = function(c) {
                    var d = b.className;
                    d = d.replace(" " + a.toTP("jqx-fill-state-hover"), ""),
                    d = d.replace(" " + a.toTP("jqx-grid-cell-hover"), ""),
                    d = d.replace(" " + a.toTP("jqx-scheduler-cell-hover"), ""),
                    b.className = d,
                    b.jqxClassName = d
                };
                c(b)
            }
            a.hoveredCell = null
        },
        _addHandlers: function() {
            var b = this;
            this._mousewheelfunc = this._mousewheelfunc || function(a) {
                return b.wheel(a, b),
                !1
            }
            ,
            this.focused = !1;
            var c = !1;
            this.addHandler(a(document), "keydown.scheduler" + b.element.id, function(a) {
                c = !1,
                9 === a.keyCode && a.shiftKey && !b.focused && (c = !0)
            }),
            this.addHandler(this.host, "focus", function(d) {
                if (!b.focusedCell || b.selectedAppointment || c || a(b.focusedCell).addClass(b.toThemeProperty("jqx-scheduler-cell-focus")),
                b.focused = !0,
                c)
                    if (b.appointmentsToRender.length > 0) {
                        var e = b.appointmentsToRender[b.appointmentsToRender.length - 1];
                        b._selectAppointment(e),
                        b._lastSelectedAppointment = e
                    } else if (b.focusedCell) {
                        if (b.focusedCell && b.focusedCell.className.indexOf("-focus") == -1)
                            return b._updateCellsSelection(),
                            !1
                    } else
                        b._updateFocusedCell()
            }),
            this.addHandler(this.host, "blur", function(c) {
                if (b.focusedCell) {
                    if (document.activeElement == b.element)
                        return !0;
                    if (a(document.activeElement).ischildof(b.host))
                        return !0;
                    a(b.focusedCell).removeClass(b.toThemeProperty("jqx-scheduler-cell-focus")),
                    b.focused = !1
                }
            }),
            this.addHandler(this.host, "dragstart." + this.element.id, function(a) {
                return !1
            }),
            this.addHandler(this.host, "selectstart." + this.element.id, function(c) {
                return !!b.enableBrowserSelection || (!(!b.showToolBar || !a(c.target).ischildof(b.toolbar)) || (!!(b.rowDetails && a(c.target).parents("[data-role=details]").length > 0) || void 0 != b.editKey && void 0))
            }),
            this.addHandler(a(window), "jqxReady." + this.element.id, function() {}),
            this.removeHandler(this.host, "mousewheel", this._mousewheelfunc),
            this.addHandler(this.host, "mousewheel", this._mousewheelfunc);
            var d = this.isTouchDevice();
            this.vScrollInstance.valueChanged = function(a) {
                b._timer && clearTimeout(b._timer),
                d ? b.table && (b.table[0].style.top = 0 - b.vScrollInstance.value + "px") : b._timer = setTimeout(function() {
                    b.table && (b.table[0].style.top = 0 - b.vScrollInstance.value + "px")
                }, 1)
            }
            ,
            this.hScrollInstance.valueChanged = function(a) {
                b._htimer && clearTimeout(b._htimer),
                d ? b.table && b._renderhorizontalscroll() : b._htimer = setTimeout(function() {
                    b.table && b._renderhorizontalscroll()
                }, 1)
            }
            ;
            var e = "mousedown";
            this.isTouchDevice() && (e = a.jqx.mobile.getTouchEventName("touchstart"),
            a.jqx.browser.msie && a.jqx.browser.version < 10 && (e = "mousedown")),
            this.addHandler(this.table, "mouseleave", function(a) {
                b._removeHoveredCell()
            }),
            b.isTouchDevice() && (b.enableHover = !1);
            var f = "mousemove.scheduler" + this.element.id
              , g = "mouseup.scheduler" + this.element.id;
            this.isTouchDevice() && this.touchMode !== !0 && (f = a.jqx.mobile.getTouchEventName("touchmove") + ".scheduler" + this.element.id,
            g = a.jqx.mobile.getTouchEventName("touchend") + ".scheduler" + this.element.id),
            this.addHandler(a(document), f, function(c) {
                var d = c.pageX
                  , e = c.pageY;
                if (b.isTouchDevice()) {
                    var f = a.jqx.position(c);
                    if (d = f.left,
                    e = f.top,
                    isNaN(d) || isNaN(e)) {
                        var f = a.jqx.position(c.originalEvent);
                        d = f.left,
                        e = f.top
                    }
                }
                if (b.disabled || 3 === c.which)
                    return !0;
                if (!b.isMouseDown)
                    return !0;
                if (b.hScrollInstance.isScrolling() || b.vScrollInstance.isScrolling())
                    return !0;
                if (b._hostWidth) {
                    var g = b.host.coord();
                    if (g.left + b._hostWidth < d || d < g.left)
                        return !0;
                    if (g.top + b._hostHeight < e || e < g.top)
                        return !0
                }
                if (b.mouseDownPosition && (Math.abs(b.mouseDownPosition.left - d) >= 3 && Math.abs(b.mouseDownPosition.left - d) <= 10 || Math.abs(b.mouseDownPosition.top - e) >= 3 && Math.abs(b.mouseDownPosition.top - e) <= 10) && (b.dragOrResize = !0),
                b.selectedAppointment && b.dragOrResize) {
                    var h = null;
                    if (b._hasOpenedMenu)
                        return !0;
                    if (b.editRecurrenceDialog.jqxWindow("isOpen"))
                        return !0;
                    var i = b._views[b._view].type
                      , j = b._views[b._view]
                      , k = !1;
                    if ("td" === c.target.nodeName.toLowerCase())
                        var l = c.target;
                    else
                        var l = b.findCell(d, e);
                    if (!l)
                        return !0;
                    if (void 0 != l.getAttribute("data-time-slot"))
                        return !0;
                    if (l.className.indexOf("jqx-grid-cell-pinned") >= 0)
                        return !0;
                    if (!b.feedback) {
                        if (h = b.getJQXAppointmentByElement(b.selectedAppointment),
                        !h.draggable && !h.resizable)
                            return h = null,
                            !0;
                        if (b.beginDrag) {
                            var m = b.beginDrag(h);
                            if (!m)
                                return !0
                        }
                        var n = a('[data-key="' + h.id + '"]')
                          , o = b.selectedAppointment.position();
                        b.feedback = b.selectedAppointment.clone(!0),
                        b.pinnedfeedback = b.selectedAppointment.clone(!0);
                        var p = !("row-resize" == b.selectedAppointment[0].style.cursor || "col-resize" == b.selectedAppointment[0].style.cursor || b.resizing)
                          , q = function(a) {
                            p && a.find(".jqx-scheduler-appointment-resize-indicator").hide(),
                            n.addClass(b.toTP("jqx-scheduler-feedback-appointment jqx-disableselect")),
                            a.find(".jqx-scheduler-appointment-duration-status").hide(),
                            a.addClass(b.toTP("jqx-scheduler-feedback-appointment")),
                            a.addClass(b.toTP("jqx-scheduler-feedback-drag-appointment")),
                            p ? a.css("z-index", 401) : a.css("z-index", 400)
                        };
                        if (q(b.feedback),
                        q(b.pinnedfeedback),
                        "monthView" != b._views[b._view].type || p) {
                            if (b.table.append(b.feedback),
                            1 == b.tableRows ? b.pinnedtable.append(b.pinnedfeedback) : b.table.append(b.pinnedfeedback),
                            b.feedback.css("left", o.left),
                            b.feedback.css("top", o.top),
                            b.pinnedfeedback.css("left", o.left),
                            b.pinnedfeedback.css("top", o.top),
                            "monthView" == b._views[b._view].type && b.isTouchDevice()) {
                                b.feedbacks = new Array;
                                for (var r = 0; r < 6; r++)
                                    b.feedbacks.push(b.feedback.clone(!0)),
                                    a(b.feedbacks[r]).hide(),
                                    b.table.append(a(b.feedbacks[r]))
                            }
                        } else {
                            b.feedbacks = new Array;
                            for (var r = 0; r < 6; r++)
                                b.feedbacks.push(b.feedback.clone(!0)),
                                a(b.feedbacks[r]).hide(),
                                b.table.append(a(b.feedbacks[r]))
                        }
                    }
                    if (b.dragging) {
                        var m = b.dragging(h, l, b.feedback);
                        if (!1 === m)
                            return !0
                    }
                    var f = a(l).position();
                    if (b.endDrag)
                        var s = b.feedback.css("left")
                          , t = b.feedback.css("top")
                          , u = b.feedback.width()
                          , v = b.feedback.height;
                    h || (h = b.selectedJQXAppointment),
                    h || (b.selectAppointment(b.uiappointments[0].id),
                    h = b.selectedJQXAppointment);
                    var w = h.resourceId
                      , x = b._resources.indexOf(w);
                    b.resources && "none" == b.resources.orientation && (x = -1);
                    var y = !1
                      , z = b.isTouchDevice();
                    if (z && b.touchMode !== !0 && null == b._dragCell && !(b.leftResize || b.rightResize || b.topResize || b.bottomResize || b.resizing))
                        switch (i) {
                        case "dayView":
                        case "weekView":
                            var k = h.duration().days() >= 1 || h.allDay;
                            k ? (d >= b.selectedAppointmentBounds.left - 15 && d <= b.selectedAppointmentBounds.left + 15 && (y = !0,
                            b.leftResize = !0),
                            d >= b.selectedAppointmentBounds.left + b.selectedAppointmentBounds.width - 15 && d <= b.selectedAppointmentBounds.left + b.selectedAppointmentBounds.width + 15 && (y = !0,
                            b.rightResize = !0)) : (e >= b.selectedAppointmentBounds.top - 15 && e <= b.selectedAppointmentBounds.top + 15 && (y = !0,
                            b.topResize = !0),
                            e >= b.selectedAppointmentBounds.top - 15 + b.selectedAppointmentBounds.height && e <= b.selectedAppointmentBounds.top + b.selectedAppointmentBounds.height + 15 && (y = !0,
                            b.bottomResize = !0));
                            break;
                        default:
                            d >= b.selectedAppointmentBounds.left - 15 && d <= b.selectedAppointmentBounds.left + 15 && (y = !0,
                            b.leftResize = !0),
                            d >= b.selectedAppointmentBounds.left + b.selectedAppointmentBounds.width - 15 && d <= b.selectedAppointmentBounds.left + b.selectedAppointmentBounds.width + 15 && (y = !0,
                            b.rightResize = !0)
                        }
                    if (z && (b.leftResize || b.rightResize || b.topResize || b.bottomResize || b.resizing) || y) {
                        if (l.getAttribute("data-view") != x + 1 && b._resources.length > 0 && "none" != b.resources.orientation)
                            return !0;
                        var A = b._getDateByString(l.getAttribute("data-date"));
                        if (A < b.min.toDate() || A > b.max.toDate())
                            return;
                        b._handleResize(d, e, l, f, h),
                        b._oldResizeTD = l
                    } else if (!z && "row-resize" == b.selectedAppointment[0].style.cursor || "col-resize" == b.selectedAppointment[0].style.cursor || b.resizing) {
                        if (l.getAttribute("data-view") != x + 1 && b._resources.length > 0 && b.resources && "none" != b.resources.orientation)
                            return !0;
                        var A = b._getDateByString(l.getAttribute("data-date"));
                        if (A < b.min.toDate() || A > b.max.toDate())
                            return;
                        b._handleResize(d, e, l, f, h),
                        b._oldResizeTD = l
                    } else {
                        if (!h.draggable)
                            return b._removeFeedbackAndStopResize(),
                            !0;
                        if (b._dragCell == l)
                            return b._startTimers(d, e, h),
                            b.isTouchDevice() && b.touchMode !== !0 ? (c.stopPropagation(),
                            !1) : void 0;
                        var A = b._getDateByString(l.getAttribute("data-date"));
                        if (A < b.min.toDate() || A > b.max.toDate())
                            return;
                        var B = h.duration();
                        if (i.indexOf("month") >= 0 && new a.jqx.date(A).add(B) > b.max)
                            return;
                        var C = "hidden" == b.vScrollBar[0].style.visibility ? 0 : 6 + b.vScrollBar.outerWidth();
                        if (b._dragCell = l,
                        b.feedback[0].style.left = 2 + f.left + "px",
                        b.feedback[0].style.top = 2 + f.top + "px",
                        "dayView" === i || "weekView" === i) {
                            b.pinnedfeedback.css("left", 2 + f.left),
                            b.pinnedfeedback.css("top", 2 + f.top);
                            var D = 0;
                            if (l.getAttribute("data-end-date")) {
                                var E = b.appointmentsMinHeight;
                                if (b.isTouchDevice() && (E = b.touchAppointmentsMinHeight),
                                j.appointmentHeight && (E = j.appointmentHeight),
                                k = h.duration().days() >= 1 || h.allDay,
                                b.feedback.css("top", 2 + f.top + E),
                                b.pinnedfeedback.css("top", 2 + f.top + 18),
                                "dayView" == i) {
                                    var F = b.selectedAppointment.coord().left - 9;
                                    b.feedback.css("left", F),
                                    b.pinnedfeedback.css("left", F)
                                }
                                if (k) {
                                    if (b.pinnedfeedback.css("top", h.elements[0].y),
                                    D = b.selectedAppointment.width(),
                                    2 + f.left + D > b.host.width() - C) {
                                        var G = 2 + f.left + D - b.host.width() + C + 6;
                                        D -= G
                                    }
                                    b.feedback.width(D),
                                    b.feedback.height(E),
                                    b.pinnedfeedback.width(D),
                                    b.pinnedfeedback.height(E)
                                } else
                                    D = a(l).width() - 4,
                                    b.feedback.width(D),
                                    b.feedback.height(E),
                                    b.pinnedfeedback.width(D),
                                    b.pinnedfeedback.height(E);
                                b.feedback.hide(),
                                b.pinnedfeedback.show()
                            } else {
                                b.feedback.show(),
                                b.pinnedfeedback.hide();
                                var H = 2
                                  , I = j.timeRuler && j.timeRuler.scale;
                                switch (I) {
                                case "sixtyMinutes":
                                case "hour":
                                    H = 1;
                                    break;
                                case "thirtyMinutes":
                                case "halfHour":
                                    H = 2;
                                    break;
                                case "fifteenMinutes":
                                case "quarterHour":
                                    H = 4;
                                    break;
                                case "tenMinutes":
                                    H = 6;
                                    break;
                                case "fiveMinutes":
                                    H = 12
                                }
                                D = a(l).width() - 4,
                                b.feedback.width(D),
                                k = h.duration().days() >= 1 || h.allDay,
                                k ? b.feedback.height(a(l).height() - 6) : b.feedback.height(b.selectedAppointment.height())
                            }
                            b._startTimers(d, e, h)
                        } else if ("monthView" === i) {
                            b.feedback.css("left", 1 + f.left);
                            var J = b.selectedAppointmentTableBounds
                              , K = parseInt(J.top);
                            K > f.top && K < f.top + l.offsetHeight ? b.feedback.css("top", K + "px") : b.feedback.css("top", b.selectedAppointment.height() + f.top - 2),
                            b.isTouchDevice() && b.feedback.css("top", f.top + 2),
                            D = b.selectedAppointment.width(),
                            b.feedback.width(D),
                            b.feedback.height(b.selectedAppointment.height()),
                            b._startTimers(d, e, h)
                        } else if ("timelineDayView" === i || "timelineMonthView" === i || "timelineWeekView" === i) {
                            var J = b.selectedAppointmentTableBounds
                              , K = parseInt(J.top);
                            K > f.top && K < f.top + l.offsetHeight && b.feedback.css("top", K + "px"),
                            b._startTimers(d, e, h)
                        }
                    }
                    if (b.endDrag) {
                        var m = b.endDrag(h, l, b.feedback);
                        return m || b.feedback.width(u),
                        b.feedback.height(v),
                        b.feedback.css("top", t),
                        b.feedback.css("left", s),
                        !0
                    }
                    if (b.isTouchDevice() && b.touchMode !== !0)
                        return c.stopPropagation(),
                        !1
                }
            });
            var h = function(a) {
                if (b.isMouseDown = !1,
                b.dragOrResize = !1,
                b.contextMenu && b.menu && 3 !== a.which && (b.menu.jqxMenu("close"),
                b._hasOpenedMenu = !1),
                3 === a.which)
                    return !0;
                if (b.selectedAppointment && b.feedback) {
                    if (b.editRecurrenceDialog.jqxWindow("isOpen"))
                        return;
                    b._handleMouseUp(b.selectedJQXAppointment, b._dragCell, b.resizing)
                }
            };
            if (this.addHandler(a(document), g, function(a) {
                return h(a)
            }),
            !this.isTouchDevice())
                try {
                    if (("" != document.referrer || window.frameElement) && null != window.top && window.top != window.self) {
                        var i = null;
                        if (window.parent && document.referrer && (i = document.referrer),
                        i && i.indexOf(document.location.host) != -1) {
                            var j = function(a) {
                                if (!b.disabled)
                                    return h(a)
                            };
                            b.addHandler(a(window.top.document), "mouseup.jqxscheduler" + b.element.id, j)
                        }
                    }
                } catch (a) {}
            this.addHandler(this.host, f, function(c) {
                var d = c.pageX
                  , e = c.pageY;
                if (b.disabled || 3 === c.which)
                    return !0;
                if (b.selectedAppointment && b.isMouseDown)
                    return !0;
                if (b.hScrollInstance.isScrolling() || b.vScrollInstance.isScrolling())
                    return !0;
                if (b._hasOpenedMenu)
                    return !0;
                if ("none" !== b.overlay[0].style.display)
                    return !0;
                var f = null;
                c.target.className.indexOf("jqx-scheduler-appointment") >= 0 && c.target.className.indexOf("jqx-scheduler-appointment-inner-content") == -1 && c.target.className.indexOf("jqx-scheduler-appointment-content") == -1 && c.target.className.indexOf("jqx-scheduler-appointment-resize-indicator") == -1 && (f = c.target);
                for (var g = c.target, h = 0; h < 4 && g.parentNode; h++)
                    g.className.indexOf("jqx-scheduler-appointment") >= 0 && g.className.indexOf("jqx-scheduler-appointment-innter-content") == -1 && g.className.indexOf("jqx-scheduler-appointment-content") == -1 && g.className.indexOf("jqx-scheduler-appointment-resize-indicator") == -1 && (f = g),
                    g = g.parentNode;
                if (f) {
                    var i = b._views[b._view].type
                      , j = (b._views[b._view],
                    b.getJQXAppointmentByElement(f));
                    if (j.resizable) {
                        var k = j.duration()
                          , l = j.allDay || k.days() >= 1 || 23 == k.hours() && 59 == k.minutes && 59 == k.seconds
                          , m = a(f).coord()
                          , n = a(f).position();
                        b.selectedAppointmentBounds = {
                            top: m.top,
                            left: m.left,
                            width: a(f).width(),
                            height: a(f).height()
                        },
                        b.selectedAppointmentTableBounds = {
                            top: n.top,
                            left: n.left,
                            width: a(f).width(),
                            height: a(f).height()
                        };
                        var o = b.selectedAppointmentBounds;
                        if ("weekView" == i || "dayView" == i)
                            l ? "dayView" != i ? d >= o.left - 3 && d <= o.left + 6 ? (f.style.cursor = "col-resize",
                            b.leftResize = !0,
                            b.rightResize = !1) : d >= o.left + o.width - 6 && d <= o.left + o.width + 3 ? (f.style.cursor = "col-resize",
                            b.leftResize = !1,
                            b.rightResize = !0) : f.style.cursor = "pointer" : f.style.cursor = "pointer" : e >= o.top - 3 && e <= o.top + 6 ? (f.style.cursor = "row-resize",
                            b.topResize = !0,
                            b.bottomResize = !1) : e >= o.top + o.height - 6 && e <= o.top + o.height + 3 ? (f.style.cursor = "row-resize",
                            b.topResize = !1,
                            b.bottomResize = !0) : f.style.cursor = "pointer";
                        else if ("monthView" == i && j.elements.length > 1)
                            for (var p = b.table.coord(), h = 0; h < j.elements.length; h++) {
                                var q = j.elements[h]
                                  , o = {
                                    top: p.top + q.y,
                                    left: p.left + q.x,
                                    width: q.width,
                                    height: q.height
                                };
                                if (0 == h && !b.rtl || h == j.elements.length - 1 && b.rtl)
                                    if (d >= o.left - 3 && d <= o.left + 6) {
                                        if (e >= o.top && e <= o.top + o.height) {
                                            f.style.cursor = "col-resize",
                                            b.leftResize = !0,
                                            b.rightResize = !1,
                                            b.selectedAppointment = a(f);
                                            break
                                        }
                                        f.style.cursor = "pointer"
                                    } else
                                        f.style.cursor = "pointer";
                                else if (h == j.elements.length - 1 && !b.rtl || 0 == h && b.rtl)
                                    if (d >= o.left + o.width - 6 && d <= o.left + o.width + 3) {
                                        if (e >= o.top && e <= o.top + o.height) {
                                            f.style.cursor = "col-resize",
                                            b.leftResize = !1,
                                            b.rightResize = !0,
                                            b.selectedAppointment = a(f);
                                            break
                                        }
                                        f.style.cursor = "pointer"
                                    } else
                                        f.style.cursor = "pointer"
                            }
                        else
                            d >= o.left - 3 && d <= o.left + 6 ? (f.style.cursor = "col-resize",
                            b.leftResize = !0,
                            b.rightResize = !1) : d >= o.left + o.width - 6 && d <= o.left + o.width + 3 ? (f.style.cursor = "col-resize",
                            b.leftResize = !1,
                            b.rightResize = !0) : f.style.cursor = "pointer"
                    }
                }
                if (!b.enableHover)
                    return !0;
                if ("td" === c.target.nodeName.toLowerCase())
                    var r = c.target;
                else
                    var r = b.findCell(d, e);
                if (!r)
                    return !0;
                if (b._removeHoveredCell(),
                b.renderedRecords && 0 === b.renderedRecords.length)
                    return !0;
                if (b.isMouseDown) {
                    if (Math.abs(b.mousecaptureposition.left - d) > 3 || Math.abs(b.mousecaptureposition.top - e) > 3) {
                        if (0 === b.mousecaptureposition.clickedcell.length)
                            return void (b.selectionarea[0].style.visibility = "hidden");
                        b.lastHoveredCell != r && (b._selectRangeTimer && clearTimeout(b._selectRangeTimer),
                        b._selectRangeTimer = setTimeout(function() {
                            var a = b._views[b._view].type;
                            "agendaView" != a && b._selectRange(r, b.mousecaptureposition.clickedcell[0])
                        }, 1)),
                        b.lastHoveredCell = r
                    }
                } else if (!f) {
                    if (1 == b.rows.length && 1 == b.rows[0].cells.length)
                        return !0;
                    b._hoverCell(r)
                }
                return !0
            }),
            this.addHandler(a(document), "keydown.jqxscheduler" + b.element.id, function(a) {
                if (b.focused && a.ctrlKey && 68 == a.keyCode)
                    return !1
            }),
            this.addHandler(this.host, "keydown", function(a) {
                return b._handleKey(a)
            }),
            a.jqx.browser.msie && a.jqx.browser.version < 9 && this.addHandler(this.table, "dblclick", function(a) {
                b.table.trigger("mousedown", a)
            });
            var k = function(c) {
                var d = (c.target,
                null);
                if (b.disabled)
                    return !0;
                b.menu || 3 != c.which || b._initMenu();
                var e = (b.table.coord(),
                c.pageX)
                  , f = c.pageY;
                if (a.jqx.browser.msie && a.jqx.browser.version < 9 && arguments && 2 == arguments.length && (e = arguments[1].pageX,
                f = arguments[1].pageY),
                b.isTouchDevice()) {
                    var g = a.jqx.position(c);
                    if (e = g.left,
                    f = g.top,
                    isNaN(e) || isNaN(f)) {
                        var g = a.jqx.position(c.originalEvent);
                        e = g.left,
                        f = g.top
                    }
                }
                b.mouseDown = {
                    top: f,
                    left: e
                };
                var d = b.findCell(e, f);
                if ("td" === c.target.nodeName.toLowerCase())
                    var d = c.target;
                else
                    var d = b.findCell(e, f);
                var h = b._views[b._view].type
                  , i = b._views[b._view];
                if ("monthView" === h && i.weekViewNavigation && d && d.getAttribute("data-time-slot")) {
                    var j = b._getDateByString(d.getAttribute("data-date"))
                      , k = new a.jqx.date(j);
                    b.date = k,
                    b.setView("weekView")
                }
                if ("monthView" === h && i.dayViewNavigation) {
                    var l = a(d).coord().top;
                    if (d && f >= l && l + 16 >= f) {
                        var j = b._getDateByString(d.getAttribute("data-date"))
                          , k = new a.jqx.date(j);
                        b.date = k,
                        b.setView("dayView")
                    }
                }
                if ("span" === c.target.nodeName.toLowerCase() && (c.target.className.indexOf("jqx-icon-arrow-down") >= 0 || c.target.className.indexOf("jqx-icon-close") >= 0))
                    return c.target.mousedown && c.target.mousedown(),
                    !0;
                var m = a(d).parent()
                  , n = m.attr("data-key");
                b.mousecaptureposition = {
                    left: c.pageX,
                    top: c.pageY,
                    clickedrow: a(m).index(),
                    clickedcell: a(d)
                },
                3 !== c.which ? (b.isMouseDown = !0,
                b.isMouseDownDate = new Date) : b.isMouseDown = !1,
                b.contextMenu && b.menu && 3 !== c.which && (b.menu.jqxMenu("close"),
                b._hasOpenedMenu = !1);
                var o = function(a) {
                    if (3 === c.which && b.contextMenu && b.menu) {
                        a ? b.menu.find("li:first").show() : b.menu.find("li:first").hide();
                        var d = b.menu.coord();
                        if ("block" == b.menu.css("display") && d.left == c.pageX && d.top == c.pageY)
                            return b._hasOpenedMenu = !0,
                            c.preventDefault(),
                            void c.stopPropagation();
                        b.menuOpening = !0,
                        b.menu.jqxMenu("open", c.pageX, c.pageY),
                        b.menuOpening = !1,
                        b._hasOpenedMenu = !0,
                        c.preventDefault(),
                        c.stopPropagation(),
                        setTimeout(function() {
                            b.menu.jqxMenu("focus")
                        }, 50)
                    }
                }
                  , p = function() {
                    for (var a = 0; a < A.length; a++)
                        for (var b = A[a].cells, c = 0; c < b.length; c++)
                            b[c].removeAttribute("data-selected")
                }
                  , q = c.target.className.indexOf("jqx-scheduler-appointment") >= 0 && c.target.className.indexOf("jqx-scheduler-appointment-duration-status") == -1 && c.target.className.indexOf("jqx-scheduler-appointment-inner-content") == -1 && c.target.className.indexOf("jqx-scheduler-appointment-status") == -1 && c.target.className.indexOf("jqx-scheduler-appointment-resize-indicator") == -1 && c.target.className.indexOf("jqx-scheduler-appointment-content") == -1 ? a(c.target) : a(c.target).parents(".jqx-scheduler-appointment");
                if (0 == q.length && (q = null),
                q && q[0].className.indexOf("feedback") == -1) {
                    if (q.parents(".jqx-scheduler-month-cell-popup").length > 0)
                        return !0;
                    b.mouseDownPosition = {
                        top: f,
                        left: e
                    };
                    var r = a(q).coord();
                    b.selectedAppointmentBounds = {
                        top: r.top,
                        left: r.left,
                        width: a(q).width(),
                        height: a(q).height()
                    };
                    var g = a(q).position();
                    b.selectedAppointmentTableBounds = {
                        top: g.top,
                        left: g.left,
                        width: a(q).width(),
                        height: a(q).height()
                    },
                    b._dragStartCell || (b._dragStartCell = b.findCell(r.left, r.top));
                    var s = b.getJQXAppointmentByElement(q);
                    b._selectAppointment(s, q, "mouse"),
                    b._raiseEvent("appointmentClick", {
                        appointment: s.boundAppointment
                    }),
                    b.clearSelection();
                    var t = (new Date).getTime()
                      , u = 300;
                    if (a.jqx.browser.msie && a.jqx.browser.version < 9 && (u = 1e3),
                    b.clickTime || (b.clickTime = new Date),
                    t - b.clickTime.getTime() < u && b._lastSelectedAppointment && s.id == b._lastSelectedAppointment.id && 3 != c.which) {
                        if (!s.readOnly && !b.editRecurrenceDialog.jqxWindow("isOpen") && (!b._editDialog || b._editDialog && !b._editDialog.jqxWindow("isOpen"))) {
                            var v = b._initDialog(s);
                            v !== !1 && b._openDialog()
                        }
                        b.mouseDownPosition = null,
                        b.isMouseDown = !1,
                        c.preventDefault && c.preventDefault(),
                        b._raiseEvent("appointmentDoubleClick", {
                            appointment: s.boundAppointment
                        })
                    } else
                        s.readOnly || 3 !== c.which && b.focus();
                    return b._lastSelectedAppointment = s,
                    c.preventDefault && c.preventDefault(),
                    c.stopPropagation(),
                    b.clickTime = new Date,
                    void (s.readOnly || 3 == c.which && o(!0))
                }
                if (3 === c.which) {
                    var w = b.getSelection();
                    if (null !== w)
                        o(!1);
                    else {
                        b.clearAppointmentsSelection(),
                        d.setAttribute("data-selected", "true"),
                        b._lastSelectedCell = d,
                        b.focusedCell = d,
                        b._updateCellsSelection(d),
                        o(!1);
                        var x = new a.jqx.date(d.getAttribute("data-date"),b.timeZone);
                        b._raiseEvent("cellClick", {
                            cell: d,
                            date: x
                        })
                    }
                } else
                    3 != c.which && b.clearAppointmentsSelection();
                if ("agendaView" == b.view) {
                    var q = c.target.className.indexOf("jqx-scheduler-agenda-appointment") != -1;
                    if (q) {
                        q = c.target;
                        var s = b.getJQXAppointmentByElement(q);
                        b._selectAppointment(s, q, "mouse"),
                        b._raiseEvent("appointmentClick", {
                            appointment: s.boundAppointment
                        });
                        var t = (new Date).getTime()
                          , u = 300;
                        if (a.jqx.browser.msie && a.jqx.browser.version < 9 && (u = 1e3),
                        b.clickTime || (b.clickTime = new Date),
                        t - b.clickTime.getTime() < u && b._lastSelectedAppointment && s.id == b._lastSelectedAppointment.id && 3 != c.which) {
                            if (!s.readOnly && !b.editRecurrenceDialog.jqxWindow("isOpen") && (!b._editDialog || b._editDialog && !b._editDialog.jqxWindow("isOpen"))) {
                                var v = b._initDialog(s);
                                v !== !1 && b._openDialog()
                            }
                            b.mouseDownPosition = null,
                            b.isMouseDown = !1,
                            c.preventDefault && c.preventDefault(),
                            b._raiseEvent("appointmentDoubleClick", {
                                appointment: s.boundAppointment
                            })
                        }
                        b._lastSelectedAppointment = s,
                        c.preventDefault && c.preventDefault(),
                        c.stopPropagation(),
                        b.clickTime = new Date,
                        s.readOnly || 3 == c.which && o(!0)
                    }
                }
                if (void 0 !== n && 3 != c.which) {
                    b.clickedTD = d;
                    var x = new a.jqx.date(d.getAttribute("data-date"),b.timeZone);
                    b._raiseEvent("cellClick", {
                        cell: d,
                        date: x
                    });
                    var y = b.rowinfo[n]
                      , z = !1;
                    if (y) {
                        var t = (new Date).getTime()
                          , u = 300;
                        if (b.clickTime || (b.clickTime = new Date),
                        b.focus(),
                        b._lastSelectedCell && "true" == b._lastSelectedCell.getAttribute("data-selected") && "true" === d.getAttribute("data-selected") && t - b.clickTime.getTime() < u) {
                            var x = new a.jqx.date(d.getAttribute("data-date"),b.timeZone);
                            b._raiseEvent("cellDoubleClick", {
                                cell: d,
                                date: x
                            }),
                            z = !0,
                            b._initDialog(),
                            b._openDialog(),
                            c.preventDefault && c.preventDefault()
                        }
                    }
                    var A = b.rows;
                    if ("true" != d.getAttribute("data-selected") || c.shiftKey || t - b.clickTime.getTime() > u) {
                        if ("true" == d.getAttribute("data-time-slot"))
                            return;
                        if (c.shiftKey || (b.shiftSelectedCell = null),
                        c.shiftKey && b._lastSelectedCell && "agendaView" != h && (b.shiftSelectedCell || (b.shiftSelectedCell = b._lastSelectedCell),
                        d.getAttribute("data-view") === b.shiftSelectedCell.getAttribute("data-view") && p(),
                        b._selectRange(d, b.shiftSelectedCell)),
                        !c.shiftKey) {
                            p();
                            var j = b._getDateByString(d.getAttribute("data-date"));
                            j >= b.min.toDate() && j <= b.max.toDate() ? d.setAttribute("data-selected", "true") : d.setAttribute("data-selected", "false")
                        }
                        a('[data-key="' + n + '"]').removeClass(b.toTP("jqx-scheduler-selected-appointment")),
                        b.selectedAppointment = null;
                        var j = b._getDateByString(d.getAttribute("data-date"));
                        j >= b.min.toDate() && j <= b.max.toDate() && (b._lastSelectedCell = d,
                        b.focusedCell = d),
                        b._updateCellsSelection(d),
                        b.openedMonthCellPopup && b.openedMonthCellPopup.remove()
                    }
                    b.clickTime = new Date,
                    c.stopPropagation && c.stopPropagation()
                }
            };
            this.addHandler(this.pinnedtable, e, function(a) {
                var b = k(a);
                if (void 0 != b)
                    return b
            }),
            this.addHandler(this.table, e, function(a) {
                var b = k(a);
                if (void 0 != b)
                    return b
            })
        },
        moveAppointment: function(b, c, d, e, f) {
            var g = this
              , h = e.getAttribute("data-end-date");
            if (b) {
                if (g.editRecurrenceDialog.jqxWindow("isOpen"))
                    return;
                clearInterval(g._verticalIntervalDragVelocity),
                clearInterval(g._horizontalIntervalDragVelocity),
                clearInterval(g._intervalDrag),
                clearInterval(g._horizontalIntervalDrag);
                var i = b.duration()
                  , j = b.duration().days() >= 1 || b.allDay
                  , k = function(k) {
                    if (!f) {
                        var l = g._views[g._view].type
                          , m = g._views[g._view]
                          , n = c;
                        if (b.from = n,
                        "dayView" === l || "weekView" === l)
                            if (j || h) {
                                if (!j && h)
                                    b.to = a.jqx.scheduler.utilities.getEndOfDay(n),
                                    b.allDay = !0;
                                else if (j && h)
                                    b.to = n.add(i);
                                else if (j && !h) {
                                    var o = 30
                                      , p = m.timeRuler && m.timeRuler.scale;
                                    switch (p) {
                                    case "sixtyMinutes":
                                    case "hour":
                                        o = 60;
                                        break;
                                    case "fifteenMinutes":
                                    case "quarterHour":
                                        o = 15;
                                        break;
                                    case "tenMinutes":
                                        o = 10;
                                        break;
                                    case "fiveMinutes":
                                        o = 5
                                    }
                                    b.to = n.addMinutes(o),
                                    b.allDay = !1
                                }
                            } else
                                b.to = n.add(i),
                                b.allDay = !1;
                        else
                            "monthView" === l ? b.to = n.add(i) : "timelineDayView" !== l && "timelineWeekView" !== l && "timelineMonthView" !== l || (b.to = n.add(i))
                    }
                    if (g._saveChangesAfterDragOrResize(k, b, e, f),
                    null != d && (b.resourceId = d),
                    g.table.find(".jqx-icon-arrow-down").hide(),
                    b.allDay || j)
                        g._renderrows();
                    else {
                        var q = g.getViewStart()
                          , r = a.jqx.scheduler.utilities.getEndOfDay(g.getViewEnd());
                        g._prepareAppointmentsInView(q, r),
                        g._renderAppointments(q, r)
                    }
                    g._raiseEvent("appointmentChange", {
                        appointment: b.boundAppointment
                    }),
                    g.changedAppointments[b.id] = {
                        type: "Update",
                        appointment: b.boundAppointment
                    },
                    g._ensureAppointmentVisible(g.selectedJQXAppointment)
                };
                k(b.isRecurrentAppointment() ? !1 : null)
            }
        },
        getAppointmentProperty: function(a, b) {
            var c = null;
            if (this.appointmentsByKey[a] && (c = this.appointmentsByKey[a].jqxAppointment),
            c)
                return c[b]
        },
        setAppointmentProperty: function(b, c, d) {
            var e = this
              , f = null;
            if (this.appointmentsByKey[b] && (f = this.appointmentsByKey[b].jqxAppointment),
            f)
                switch (f[c] = d,
                e.changedAppointments[b] = {
                    type: c,
                    appointment: f.boundAppointment
                },
                b) {
                case "draggable":
                case "resizable":
                    break;
                case "background":
                case "color":
                case "borderColor":
                case "status":
                case "tooltip":
                case "subject":
                case "location":
                case "description":
                case "style":
                    var g = e.getViewStart()
                      , h = a.jqx.scheduler.utilities.getEndOfDay(e.getViewEnd());
                    e._prepareAppointmentsInView(g, h),
                    e._renderAppointments(g, h);
                    break;
                case "hidden":
                case "timeZone":
                    if (f.isAllDayAppointment())
                        e._renderrows();
                    else {
                        var g = e.getViewStart()
                          , h = a.jqx.scheduler.utilities.getEndOfDay(e.getViewEnd());
                        e._prepareAppointmentsInView(g, h),
                        e._renderAppointments(g, h)
                    }
                    break;
                default:
                    e._renderrows()
                }
        },
        deleteAppointment: function(a) {
            this.appointmentsByKey[a] && this._deleteAppointment(this.appointmentsByKey[a].jqxAppointment)
        },
        _deleteAppointment: function(a) {
            var b = this;
            if (a.rootAppointment) {
                if (a.isException()) {
                    for (var c = a.rootAppointment ? a.rootAppointment.exceptions : a.exceptions, d = 0; d < c.length; d++)
                        if (c[d].occurrenceFrom.equals(b.editAppointment.occurrenceFrom)) {
                            c[d] = a;
                            break
                        }
                } else
                    null != a.rootAppointment ? (a.rootAppointment.exceptions.push(b.editAppointment),
                    a.rootAppointment.recurrenceException.push(b.editAppointment.occurrenceFrom)) : (a.exceptions.push(b.editAppointment),
                    a.recurrenceException.push(b.editAppointment.occurrenceFrom));
                return a.hidden = !0,
                void b._renderrows()
            }
            b._raiseEvent("appointmentDelete", {
                appointment: a.boundAppointment
            });
            var e = a.id;
            delete b.appointmentsByKey[e];
            for (var f = -1, d = 0; d < b.appointments.length; d++)
                if (b.appointments[d] == a.boundAppointment || b.appointments[d].id == a.boundAppointment.id) {
                    f = d;
                    break
                }
            f != -1 && b.appointments.splice(f, 1),
            f = -1;
            for (var d = 0; d < b.uiappointments.length; d++)
                if (b.uiappointments[d] == a || b.uiappointments[d].id == a.id) {
                    f = d;
                    break
                }
            f != -1 && b.uiappointments.splice(f, 1),
            b.selectedJQXAppointment == a && (b.clearAppointmentsSelection(),
            b.uiappointments[f + 1] ? b.selectAppointment(b.uiappointments[f + 1].id) : b.uiappointments[f - 1] ? b.selectAppointment(b.uiappointments[f - 1].id) : b.uiappointments[0] && b.selectAppointment(b.uiappointments[0].id)),
            b.changedAppointments[e] = {
                type: "Delete",
                appointment: a.boundAppointment
            },
            b._renderrows()
        },
        addAppointment: function(b) {
            var c = this;
            if (b.scheduler || (b.scheduler = this),
            !b.duration)
                if ((b.from || b.to) && b.appointmentObject) {
                    var d = new a.jqx.scheduler.appointment;
                    for (var e in b)
                        d[e] = b[e];
                    b = d
                } else {
                    var f = b
                      , g = {}
                      , h = ["from", "to", "id", "style", "description", "location", "subject", "background", "color", "borderColor", "recurrencePattern", "recurrenceException", "draggable", "resizable", "tooltip", "hidden", "allDay", "timeZone", "ownerId", "resourceId"];
                    for (var e in c.appointmentDataFields) {
                        var i = c.appointmentDataFields[e]
                          , j = f[i];
                        if ("from" != e && "to" != e || (j = new a.jqx.date(j)),
                        "style" == e && j) {
                            var k = c.getAppointmentColors(j);
                            g.color = k.color,
                            g.background = k.background,
                            g.borderColor = k.border
                        }
                        if ("recurrencePattern" == e && j && (j = new a.jqx.scheduler.recurrencePattern(j),
                        j.timeZone = f.timeZone || c.timeZone),
                        "recurrenceException" == e) {
                            var l = new Array;
                            if (j) {
                                j.indexOf("EXDATE:") >= 0 && (j = j.substring(j.indexOf("EXDATE:") + 7));
                                var m = new Array;
                                j.indexOf(",") >= 0 ? m = j.split(",") : m.push(j);
                                for (var n = 0; n < m.length; n++) {
                                    var o = m[n];
                                    if (o.indexOf(";") >= 0) {
                                        var p = o.split(";")[1];
                                        o = o.split(";")[0],
                                        p.toLowerCase().indexOf("display") >= 0 && p.toLowerCase().indexOf("none") && (g.hidden = !0)
                                    }
                                    try {
                                        var q = a.jqx.scheduler.utilities.untilStringToDate(o);
                                        "Invalid Date" != q && (q = g.timeZone ? new a.jqx.date(q,g.timeZone) : c.timeZone ? q.toTimeZone(c.timeZone) : new a.jqx.date(q))
                                    } catch (b) {
                                        var q = new a.jqx.date(o,c.timeZone)
                                    }
                                    l.push(q)
                                }
                            }
                            j = l
                        }
                        g[e] = j
                    }
                    for (var r in h) {
                        var e = h[r];
                        if (void 0 == g[e]) {
                            var j = "";
                            if ("originalData" == e)
                                continue;
                            "ownerId" == e && (j = null),
                            "timeZone" == e && (j = null),
                            "recurrencePattern" == e && (j = null),
                            "recurrenceException" == e && (j = null),
                            "allDay" == e && (j = !1),
                            "draggable" == e && (j = !0),
                            "resizable" == e && (j = !0),
                            "hidden" == e && (j = !1),
                            "resourceId" == e && (j = null),
                            "from" == e && (j = new a.jqx.date),
                            "to" == e && (j = (new a.jqx.date).addHours(1)),
                            g[e] = j
                        }
                    }
                    g.originalData = f,
                    g.scheduler = this;
                    var b = new a.jqx.scheduler.appointment(g);
                    g.timeZone && (b.from = b.from.toTimeZone(g.timeZone),
                    b.to = b.to.toTimeZone(g.timeZone)),
                    c.timeZone ? (g.timeZone || (b.timeZone = c.timeZone),
                    b.from = b.from.toTimeZone(c.timeZone),
                    b.to = b.to.toTimeZone(c.timeZone)) : (b.from = b.from.toTimeZone(null),
                    b.to = b.to.toTimeZone(null))
                }
            var e = c.dataview.generatekey();
            b.id = e,
            c.appointmentsByKey[e] = b,
            c.appointments.push(b);
            var s = {}
              , t = {};
            for (var u in c.appointmentDataFields) {
                var i = c.appointmentDataFields[u]
                  , j = b[u];
                s[u] = j,
                "from" != u && "to" != u || (j = j.toDate ? j.toDate() : new a.jqx.date(j).toDate()),
                t[i] = j
            }
            s.originalData = t,
            b.boundAppointment = s,
            s.jqxAppointment = b,
            b.jqxAppointment = b,
            c._raiseEvent("appointmentAdd", {
                appointment: b.boundAppointment
            }),
            c.uiappointments.push(b),
            c.changedAppointments[e] = {
                type: "Add",
                appointment: b.boundAppointment
            },
            c.hiddenResources && c.hiddenResources[b.resourceId] ? c.hideAppointmentsByResource(b.resourceId) : c._renderrows(),
            c._selectAppointment(b),
            c._lastSelectedAppointment = b
        },
        _updateCellsSelection: function() {
            var a = this
              , b = a.rows
              , c = 0
              , d = 0;
            c > 0 && a.rtl && (c = 0,
            d = 1);
            for (var e = 0; e < b.length; e++)
                for (var f = b[e].cells, g = c; g < f.length - d; g++) {
                    var h = f[g];
                    if ("true" == h.getAttribute("data-selected")) {
                        var i = h.jqxClassName || h.className;
                        if (i.indexOf("jqx-fill-state-pressed") >= 0) {
                            h != a.focusedCell ? (i = i.replace(" jqx-scheduler-cell-focus", ""),
                            i = i.replace(" jqx-scheduler-cell-focus-" + a.theme, "")) : h == a.focusedCell && a.focused && (i = i.replace(" jqx-scheduler-cell-focus", ""),
                            i = i.replace(" jqx-scheduler-cell-focus-" + a.theme, ""),
                            a.selectedAppointment || (i = i += " " + a.toTP("jqx-scheduler-cell-focus"))),
                            h.className != i && (h.className = i),
                            h.jqxClassName = i;
                            continue
                        }
                        i = i.replace(" jqx-fill-state-pressed", ""),
                        i = i.replace(" jqx-fill-state-pressed-" + a.theme, ""),
                        i = i.replace(" jqx-scheduler-cell-focus", ""),
                        i = i.replace(" jqx-scheduler-cell-focus-" + a.theme, ""),
                        i = i.replace(" jqx-grid-cell-selected", ""),
                        i = i.replace(" jqx-grid-cell-selected-" + a.theme, ""),
                        i = i.replace(" jqx-scheduler-cell-selected", ""),
                        i = i.replace(" jqx-scheduler-cell-selected-" + a.theme, ""),
                        i = i += " " + a.toTP("jqx-fill-state-pressed jqx-grid-cell-selected jqx-scheduler-cell-selected"),
                        h == a.focusedCell && a.focused && !a.selectedAppointment && (i = i += " " + a.toTP("jqx-scheduler-cell-focus")),
                        h.className != i && (h.className = i),
                        h.jqxClassName = i
                    } else {
                        var i = h.jqxClassName || h.className;
                        if (i.indexOf("jqx-fill-state-pressed") == -1) {
                            h != a.focusedCell ? (i = i.replace(" jqx-scheduler-cell-focus", ""),
                            i = i.replace(" jqx-scheduler-cell-focus-" + a.theme, "")) : h == a.focusedCell && a.focused && (i = i.replace(" jqx-scheduler-cell-focus", ""),
                            i = i.replace(" jqx-scheduler-cell-focus-" + a.theme, ""),
                            a.selectedAppointment || (i = i += " " + a.toTP("jqx-scheduler-cell-focus"))),
                            h.className != i && (h.className = i),
                            h.jqxClassName = i;
                            continue
                        }
                        h == a.focusedCell && a.focused && (i = i.replace(" jqx-scheduler-cell-focus", ""),
                        i = i.replace(" jqx-scheduler-cell-focus-" + a.theme, ""),
                        a.selectedAppointment || (i = i += " " + a.toTP("jqx-scheduler-cell-focus")),
                        h.className != i && (h.className = i),
                        h.jqxClassName = i),
                        i = i.replace(" jqx-fill-state-pressed", ""),
                        i = i.replace(" jqx-fill-state-pressed-" + a.theme, ""),
                        i = i.replace(" jqx-scheduler-cell-focus", ""),
                        i = i.replace(" jqx-scheduler-cell-focus-" + a.theme, ""),
                        i = i.replace(" jqx-grid-cell-selected", ""),
                        i = i.replace(" jqx-grid-cell-selected-" + a.theme, ""),
                        i = i.replace(" jqx-scheduler-cell-selected", ""),
                        i = i.replace(" jqx-scheduler-cell-selected-" + a.theme, ""),
                        h == a.focusedCell && a.focused && !a.selectedAppointment && (i = i += " " + a.toTP("jqx-scheduler-cell-focus")),
                        h.className != i && (h.className = i),
                        h.jqxClassName = i,
                        h.removeAttribute("data-selected")
                    }
                }
        },
        _getuikey: function(b, c) {
            var d = null
              , e = this.table[0].rows;
            if (d = a(e[b]).attr("data-key"),
            a(e[b]).attr("data-role")) {
                var f = a(e[b]);
                if ("next" == c) {
                    for (; f; )
                        if (f = f.next()) {
                            var g = f.attr("data-role");
                            if (!g)
                                return d = f.attr("data-key")
                        }
                } else if ("prev" == c)
                    for (; f; )
                        if (f = f.prev()) {
                            var g = f.attr("data-role");
                            if (!g)
                                return d = f.attr("data-key")
                        }
                return null
            }
            return d
        },
        getRows: function() {
            var a = this._views[this._view].type
              , b = this._views[this._view]
              , c = "halfHour";
            b.timeRuler && b.timeRuler.scale && (c = b.timeRuler.scale);
            var d = 24
              , e = this.showAllDayRow;
            if (b.timeRuler && ("dayView" === a || "weekView" === a)) {
                var f = 0
                  , g = 23;
                if (void 0 != b.timeRuler.scaleStartHour)
                    var f = parseInt(b.timeRuler.scaleStartHour);
                if (void 0 != b.timeRuler.scaleEndHour)
                    var g = parseInt(b.timeRuler.scaleEndHour);
                f < 0 && (f = 0),
                g < 0 && (g = 23),
                f > 23 && (f = 0),
                g > 23 && (g = 23),
                d = g - f + 1,
                void 0 != b.timeRuler.showAllDayRow && (e = b.timeRuler.showAllDayRow)
            }
            var h = new Array
              , i = 0;
            switch (a) {
            case "dayView":
            case "weekView":
            default:
                var i = 2 * d;
                if ("hour" === c || "sixtyMinutes" === c)
                    var i = d;
                else if ("quarterHour" === c || "fifteenMinutes" === c)
                    var i = 4 * d;
                else if ("tenMinutes" === c)
                    var i = 6 * d;
                else if ("fiveMinutes" === c)
                    var i = 12 * d;
                e && i++;
                break;
            case "monthView":
                var i = 6;
                break;
            case "timelineDayView":
            case "timelineWeekView":
            case "timelineMonthView":
                var i = 1;
                break;
            case "agendaView":
                var i = this.appointments ? this.appointments.length : 0
            }
            for (var j = 0; j < i; j++)
                h.push({
                    uid: j
                });
            return h
        },
        _getDateByString: function(a) {
            var b = a.split(" ")
              , c = b[0].split("-")
              , d = b[1].split(":")
              , e = parseInt(c[0], 10)
              , f = parseInt(c[1], 10) - 1
              , g = parseInt(c[2], 10)
              , h = parseInt(d[0], 10)
              , i = parseInt(d[1], 10)
              , j = parseInt(d[2], 10)
              , k = new Date(e,f,g,h,i,j);
            return e < 1970 && k.setFullYear(e, f, g),
            k
        },
        _getCellByDate: function(a, b, c) {
            var d = this.rows;
            void 0 === b && (b = !1),
            void 0 === c && this.focusedCell && (c = this.focusedCell.getAttribute("data-view"));
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                if (!f.element.getAttribute("data-group-row"))
                    for (var g = 0; g < f.cells.length; g++) {
                        var h = f.cells[g];
                        if (null == h.getAttribute("rowspan") && h.getAttribute("data-view") === c && !(h.getAttribute("data-time-slot") || b && null != h.getAttribute("data-end-date"))) {
                            var i = h.getAttribute("data-date")
                              , j = this._getDateByString(i);
                            if (j.valueOf() == a.valueOf())
                                return h
                        }
                    }
            }
        },
        _rendercelltexts: function() {
            var b = String.fromCharCode(119, 119, 119, 46, 106, 113, 119, 105, 100, 103, 101, 116, 115, 46, 99, 111, 109);
            if (location.hostname.indexOf(b.substring(4)) == -1) {
                this._gridRenderElement && a(this._gridRenderElement).remove();
                var c = String.fromCharCode(83, 80, 65, 78)
                  , d = String.fromCharCode(72, 84, 84, 80, 58, 47, 47)
                  , e = document.createElement(c);
                e.id = a.jqx.utilities.createId(),
                e.innerHTML = b,
                e.style.position = "absolute",
                e.style.right = "5px",
                e.style.bottom = "5px",
                e.style.color = "#909090",
                e.style.cursor = "pointer",
                e.style.zIndex = "999999",
                e.style.display = "none",
                e.style.fontSize = "9px",
                e.onmousedown = function() {
                    open(d + b)
                }
                ,
                this.content[0].appendChild(e),
                this._gridRenderElement = e
            }
        },
        _handleKey: function(b) {
            if (this._loading)
                return !0;
            var c = b.shiftKey
              , d = b.ctrlKey || b.metaKey
              , e = this
              , f = b.charCode ? b.charCode : b.keyCode ? b.keyCode : 0;
            if (e._hasOpenedMenu)
                return 27 == f ? e.closeMenu() : e.menu.jqxMenu("focus"),
                !0;
            if (13 === f || e.selectedAppointment && 46 == f) {
                if (e.editRecurrenceDialog && e.editRecurrenceDialog.jqxWindow("isOpen"))
                    return !0;
                if (e._editDialog && e._editDialog.jqxWindow("isOpen"))
                    return !0;
                if (e.selectedAppointment) {
                    var g = e.getJQXAppointmentByElement(e.selectedAppointment);
                    if (!g.readOnly)
                        if (46 == f) {
                            var h = e._initDialog(g, "delete");
                            h !== !1 && e._openDialog()
                        } else {
                            var h = e._initDialog(g);
                            h !== !1 && e._openDialog()
                        }
                } else
                    e._initDialog(),
                    e._openDialog()
            }
            if (27 === f && e.dragOrResize) {
                e.table.find(".jqx-icon-arrow-down").hide();
                var i = e.getViewStart()
                  , j = a.jqx.scheduler.utilities.getEndOfDay(e.getViewEnd());
                return e._prepareAppointmentsInView(i, j),
                e._renderAppointments(i, j),
                e._removeFeedbackAndStopResize(),
                !1
            }
            var k = function(b) {
                var f = e.selectedAppointment
                  , g = e.getJQXAppointmentByElement(f)
                  , h = g.elements[0].cells[0].cell
                  , i = g.elements[g.elements.length - 1].cells[g.elements[g.elements.length - 1].cells.length - 1].cell
                  , j = e.rows[e.rows.length - 1].cells[e.rows[e.rows.length - 1].cells.length - 1];
                !c && (c || d || "down" != b && "right" != b) || (h = i);
                var k = e._views[e._view].type
                  , l = (e._views[e._view],
                h);
                switch (b) {
                case "left":
                    var m = e.rowByCell[h.getAttribute("data-key")]
                      , n = m.indexOf(h);
                    if (n > 0 && !c)
                        l = m.cells[n - 1];
                    else if ("monthView" == k && !c) {
                        var o = m.aboveRow;
                        o && (l = o.cells[o.cells.length - 1])
                    }
                    break;
                case "right":
                    var m = e.rowByCell[h.getAttribute("data-key")]
                      , n = m.indexOf(h);
                    if (n < m.cells.length - 1)
                        l = m.cells[n + 1];
                    else if ("monthView" == k) {
                        var p = m.belowRow;
                        p && (l = p.cells[0])
                    }
                    "monthView" == k && !c && d && i == j && (l = h);
                    break;
                case "up":
                    var m = e.rowByCell[h.getAttribute("data-key")]
                      , n = m.indexOf(h)
                      , o = m.aboveRow;
                    o && !c && (l = o.cells[n]);
                    break;
                case "down":
                    var m = e.rowByCell[h.getAttribute("data-key")]
                      , n = m.indexOf(h)
                      , p = m.belowRow;
                    p && (l = p.cells[n])
                }
                var q = l.getAttribute("data-date")
                  , r = new a.jqx.date(q,e.timeZone)
                  , k = a(l).attr("data-view")
                  , s = e._resources[parseInt(k) - 1];
                if (c) {
                    var k = e._views[e._view].type
                      , t = (e._views[e._view],
                    !1);
                    "dayView" === k || "weekView" === k ? h.getAttribute("data-end-date") ? "left" == b && (g.elements[0].cells.length > 1 || e.rtl) ? (e.rtl ? g.to = a.jqx.scheduler.utilities.getEndOfDay(r.addDays(1)) : g.to = a.jqx.scheduler.utilities.getEndOfDay(r.addDays(-1)),
                    t = !0) : "right" == b && ((!e.rtl || e.rtl && g.elements[0].cells.length > 1) && (g.to = a.jqx.scheduler.utilities.getEndOfDay(r)),
                    t = !0) : "up" == b && g.elements[0].cells.length > 1 ? (g.to = r,
                    t = !0) : "down" == b && (g.to = r.addMinutes(e.getMinutesPerScale()),
                    t = !0) : k.indexOf("month") >= 0 ? "left" == b && (g.elements[0].cells.length > 1 || g.elements.length > 1) ? (g.to = a.jqx.scheduler.utilities.getEndOfDay(r.addDays(-1)),
                    t = !0) : "right" == b && (g.to = a.jqx.scheduler.utilities.getEndOfDay(r),
                    t = !0) : !e.rtl && "left" == b && g.elements[0].cells.length > 1 || e.rtl && "right" == b && g.elements[0].cells.length > 1 ? (g.to = r,
                    e.rtl && (g.to = r.addMinutes(e.getMinutesPerScale())),
                    t = !0) : (!e.rtl && "right" == b || e.rtl && "left" == b) && (g.to = r.addMinutes(e.getMinutesPerScale()),
                    e.rtl && (g.to = g.to.addMinutes(e.getMinutesPerScale())),
                    t = !0),
                    t && e.moveAppointment(g, r, s, l, !0)
                } else if (d)
                    e.moveAppointment(g, r, s, l);
                else {
                    e.clearAppointmentsSelection();
                    var u = !0;
                    "down" == b && (u = !1),
                    e.selectCell(r, u, k),
                    e._ensureVisible(l)
                }
                if (e.selectedAppointment) {
                    e.selectedAppointment.removeClass(e.toTP("jqx-scheduler-selected-appointment"));
                    var v = e.selectedAppointment.attr("data-key");
                    a('[data-key="' + v + '"]').addClass(e.toTP("jqx-scheduler-selected-appointment")),
                    e.clearSelection()
                }
            };
            if (b.altKey && e._resourcesElements && e._resources && e._resources.length > 0) {
                var l = function(a) {
                    var b = e._resourcesElements.bottom[a];
                    "on" == b.attr("data-toggle") ? e.hideAppointmentsByResource(a) : e.showAppointmentsByResource(a)
                }
                  , m = f >= 49 && f <= 58 ? m = f - 48 : -1;
                if (m >= 1)
                    return a.each(e._resources, function(a, b) {
                        if (a == m - 1)
                            return l(b),
                            !1
                    }),
                    !1
            }
            if (b.ctrlKey) {
                if (!e.selectedAppointment) {
                    if (37 == f)
                        return e.toolbarLeftButton.trigger("click"),
                        e._ensureVisible(e.focusedCell),
                        !1;
                    if (39 == f)
                        return e.toolbarRightButton.trigger("click"),
                        e._ensureVisible(e.focusedCell),
                        !1
                }
                if (49 == f)
                    return e._setView(0),
                    !1;
                if (50 == f)
                    return e._setView(1),
                    !1;
                if (51 == f)
                    return e._setView(2),
                    !1;
                if (52 == f)
                    return e._setView(3),
                    !1;
                if (53 == f)
                    return e._setView(4),
                    !1;
                if (54 == f)
                    return e._setView(5),
                    !1;
                if (68 == f)
                    return e.dateTimeInput.jqxDateTimeInput("open"),
                    !1;
                if (77 == f)
                    return e.openMenu(),
                    !1
            }
            if (9 == f)
                if (b.shiftKey)
                    if (e.selectedAppointment) {
                        e.clearSelection();
                        var n = e.selectedAppointment
                          , g = e.getJQXAppointmentByElement(n);
                        if (g) {
                            var o = e.tabKeyAppointments.indexOf(g);
                            return o > 0 ? (g = e.tabKeyAppointments[o - 1],
                            e._selectAppointment(g),
                            e._lastSelectedAppointment = g,
                            e._ensureAppointmentVisible(g),
                            !1) : (e.clearAppointmentsSelection(),
                            e.focusedCell ? !e.focusedCell || e.focusedCell.className.indexOf("-focus") != -1 || (e._updateCellsSelection(),
                            e._ensureVisible(e.focusedCell),
                            !1) : (e._updateFocusedCell(),
                            e._ensureVisible(e.focusedCell),
                            !1))
                        }
                    } else if (e.focusedCell) {
                        if (e.focusedCell && e.focusedCell.className.indexOf("-focus") == -1)
                            return e._updateCellsSelection(),
                            e._ensureVisible(e.focusedCell),
                            !1
                    } else
                        e._updateFocusedCell(),
                        e._ensureVisible(e.focusedCell);
                else {
                    if (e.selectedAppointment) {
                        e.clearSelection();
                        var n = e.selectedAppointment
                          , g = e.getJQXAppointmentByElement(n)
                          , o = e.tabKeyAppointments.indexOf(g);
                        return o < e.tabKeyAppointments.length - 1 ? (g = e.tabKeyAppointments[o + 1],
                        e._selectAppointment(g),
                        e._lastSelectedAppointment = g,
                        e._ensureAppointmentVisible(g),
                        !1) : (e.clearAppointmentsSelection(),
                        !0)
                    }
                    var g = e.tabKeyAppointments[0];
                    if (g)
                        return e._selectAppointment(g),
                        e._lastSelectedAppointment = g,
                        e._ensureAppointmentVisible(g),
                        !1;
                    if (!e.focusedCell)
                        return e._updateFocusedCell(),
                        e._ensureVisible(e.focusedCell),
                        !1;
                    if (e.focusedCell && e.focusedCell.className.indexOf("-focus") == -1)
                        return e._updateCellsSelection(),
                        e._ensureVisible(e.focusedCell),
                        !1
                }
            if (e.selectedAppointment) {
                if (37 == f ? k("left") : 38 == f ? k("up") : 40 == f ? k("down") : 39 == f && k("right"),
                f >= 37 && f <= 40)
                    return !1
            } else {
                var p = this._lastSelectedCell;
                if (p) {
                    a(this._lastSelectedCell).parent()[0] || (this._lastSelectedCell = this.rows[0].cells[0],
                    p = this._lastSelectedCell);
                    var q = (this.rows,
                    this._views[this._view].type)
                      , r = this._views[this._view]
                      , s = "halfHour";
                    r.timeRuler && r.timeRuler.scale && (s = r.timeRuler.scale);
                    var t = function(c, d) {
                        var f = 30;
                        switch (s) {
                        case "sixtyMinutes":
                        case "hour":
                            f = 60;
                            break;
                        case "thirtyMinutes":
                        case "halfHour":
                            f = 30;
                            break;
                        case "fifteenMinutes":
                        case "quarterHour":
                            f = 15;
                            break;
                        case "tenMinutes":
                            f = 10;
                            break;
                        case "fiveMinutes":
                            f = 5
                        }
                        var g = c.getAttribute("data-date")
                          , h = function(a, c, d) {
                            if (a && (null == a.getAttribute("rowspan") || "agendaView" == q) && null == a.getAttribute("data-time-slot")) {
                                if (d < e.min || d > e.max)
                                    return;
                                var f = e.rows
                                  , g = e._lastSelectedCell;
                                if (e._lastSelectedCell = a,
                                b.shiftKey && e._lastSelectedCell ? e.shiftSelectedCell || (e.shiftSelectedCell = p) : b.shiftKey || (e.shiftSelectedCell = null),
                                e.shiftSelectedCell)
                                    a.getAttribute("data-end-date") && e.shiftSelectedCell.getAttribute("data-end-date") ? (e.focusedCell = a,
                                    e._selectRange(a, e.shiftSelectedCell)) : a.getAttribute("data-end-date") || e.shiftSelectedCell.getAttribute("data-end-date") ? (e.focusedCell = g,
                                    e._lastSelectedCell = g) : (e.focusedCell = a,
                                    e._selectRange(a, e.shiftSelectedCell));
                                else {
                                    for (var h = 0; h < f.length; h++) {
                                        var i = f[h];
                                        if (!i.element.getAttribute("data-group-row"))
                                            for (var j = 0; j < i.cells.length; j++) {
                                                var c = i.cells[j];
                                                c.removeAttribute("data-selected", "false")
                                            }
                                    }
                                    a.setAttribute("data-selected", "true"),
                                    e.focusedCell = a
                                }
                                e._ensureVisible(e.focusedCell)
                            }
                        };
                        new a.jqx.date(g,e.timeZone),
                        c.getAttribute("data-view");
                        switch (d) {
                        case "left":
                            var i = e.rowByCell[c.getAttribute("data-key")]
                              , j = i.indexOf(c);
                            if (j > 0)
                                var k = i.cells[j - 1]
                                  , l = new a.jqx.date(k.getAttribute("data-date"),e.timeZone);
                            h(k, c, l);
                            break;
                        case "right":
                            var i = e.rowByCell[c.getAttribute("data-key")]
                              , j = i.indexOf(c);
                            if (j < i.cells.length - 1)
                                var k = i.cells[j + 1]
                                  , l = new a.jqx.date(k.getAttribute("data-date"),e.timeZone);
                            h(k, c, l);
                            break;
                        case "up":
                            var i = e.rowByCell[c.getAttribute("data-key")]
                              , j = i.indexOf(c)
                              , m = i.aboveRow;
                            if (m) {
                                var k = m.cells[j];
                                if (0 == j && k.getAttribute("rowspan"))
                                    for (var n = -1 + e.rows.indexOf(i), k = c; n >= 0; ) {
                                        if (e.rows[n].cells[0] != k) {
                                            k = e.rows[n].cells[0];
                                            break
                                        }
                                        n--
                                    }
                                var l = new a.jqx.date(k.getAttribute("data-date"),e.timeZone);
                                h(k, c, l)
                            }
                            break;
                        case "down":
                            var i = e.rowByCell[c.getAttribute("data-key")]
                              , j = i.indexOf(c)
                              , o = i.belowRow;
                            if (o) {
                                var k = o.cells[j];
                                if (0 == j && k.getAttribute("rowspan"))
                                    for (var n = 1 + e.rows.indexOf(i), k = c; n < e.rows.length; ) {
                                        if (e.rows[n].cells[0] != k) {
                                            k = e.rows[n].cells[0];
                                            break
                                        }
                                        n++
                                    }
                                var l = new a.jqx.date(k.getAttribute("data-date"),e.timeZone);
                                h(k, c, l)
                            }
                            break;
                        case "home":
                            var i = e.rowByCell[c.getAttribute("data-key")]
                              , j = i.indexOf(c)
                              , r = e.rows[0]
                              , k = r.cells[j]
                              , l = new a.jqx.date(k.getAttribute("data-date"),e.timeZone);
                            h(k, c, l);
                            break;
                        case "end":
                            var i = e.rowByCell[c.getAttribute("data-key")]
                              , j = i.indexOf(c)
                              , t = e.rows[e.rows.length - 1]
                              , k = t.cells[j]
                              , l = new a.jqx.date(k.getAttribute("data-date"),e.timeZone);
                            h(k, c, l)
                        }
                        e._updateCellsSelection()
                    }
                      , u = function() {
                        t(p, "home")
                    }
                      , v = function() {
                        t(p, "end")
                    };
                    return 36 == f || d && 38 == f ? (u(),
                    !1) : 35 == f || d && 40 == f ? (v(),
                    !1) : 37 == f ? (e.selectedAppointment ? k(p, "left") : t(p, "left"),
                    !1) : 38 == f ? (e.selectedAppointment ? k(p, "up") : t(p, "up"),
                    !1) : 40 == f ? (e.selectedAppointment ? k(p, "down") : t(p, "down"),
                    !1) : 39 == f ? (e.selectedAppointment ? k(p, "right") : t(p, "right"),
                    !1) : void 0
                }
            }
        },
        getSelectedCells: function() {
            for (var a = this, b = a.rows, c = b.length, d = new Array, e = 0; e < c; e++)
                for (var f = b[e].cells, g = 0; g < f.length; g++)
                    f[g].getAttribute("data-selected") && d.push(f[g]);
            return d.sort(function(b, c) {
                return a._sortByDate(b, c)
            })
        },
        getSelection: function() {
            var b = this
              , c = b.getSelectedCells();
            if (0 == c.length)
                return null;
            var d = c[0].getAttribute("data-date")
              , e = c[c.length - 1].getAttribute("data-date")
              , f = b.getMinutesPerScale()
              , g = b._views[b._view].type;
            g.toLowerCase().indexOf("month") >= 0 && (f = 0),
            c[0].getAttribute("data-end-date") && (f = 0),
            e = new a.jqx.date(e,b.timeZone).addMinutes(f);
            var g = parseInt(c[0].getAttribute("data-view")) - 1
              , h = b._resources[g];
            return b._views[b._view].type.toLowerCase().indexOf("month") >= 0 ? {
                from: new a.jqx.date(d,b.timeZone),
                to: a.jqx.scheduler.utilities.getEndOfDay(e),
                resourceId: h
            } : {
                from: new a.jqx.date(d,b.timeZone),
                to: e,
                resourceId: h
            }
        },
        clearSelection: function() {
            for (var a = this, b = a.rows, c = b.length, d = 0; d < c; d++)
                for (var e = b[d].cells, f = 0; f < e.length; f++)
                    e[f].removeAttribute("data-selected");
            a._updateCellsSelection()
        },
        _getvirtualcolumnsindexes: function(a, b, c, d, e) {
            this.rtl && (a = this.hScrollInstance.max - a);
            var f = 0
              , g = -1
              , h = c + d;
            if (this.autorowheight)
                return {
                    start: 0,
                    end: c + d
                };
            if (!e)
                for (var i = 0; i < c + d; i++) {
                    if (this.columns.records[i].hidden || (f += this.columns.records[i].width),
                    f >= a && g == -1 && (g = i),
                    f > b + a) {
                        h = i;
                        break
                    }
                }
            return h++,
            h > c + d && (h = c + d),
            g == -1 && (g = 0),
            {
                start: g,
                end: h
            }
        },
        _renderhorizontalscroll: function() {
            var b = this
              , c = b.hScrollInstance
              , d = c.value;
            "hidden" === b.hScrollBar[0].style.visibility && (c.value = 0,
            d = 0);
            var e = parseInt(d);
            if (null != b.table) {
                for (var f = function(a) {
                    return !(!a.parentNode || "#document-fragment" == a.parentNode.nodeName)
                }, g = b._getvirtualcolumnsindexes(e, b._hostWidth, 0, b.columns.records.length, !1), h = g.start, i = g.end, j = (b.rows,
                0); j < h; j++) {
                    var k = j
                      , l = b.columns.records[k].element[0];
                    f(l) && l.parentNode.removeChild(l)
                }
                for (var j = i; j < b.columns.records.length; j++) {
                    var k = j
                      , l = b.columns.records[k].element[0];
                    f(l) && l.parentNode.removeChild(l)
                }
                for (var j = h; j < i; j++) {
                    var k = j;
                    l = b.columns.records[k].element[0],
                    f(l) || b.columnsrow[0].appendChild(l)
                }
                var m = b.columnsrow
                  , n = 0;
                b.columns.records.length - n,
                b.columns.records,
                0 == b.source.records.length;
                if (b.rtl && "hidden" != b.hScrollBar.css("visibility") && (e = c.max - e),
                b.table[0].style.left = -e + "px",
                "block" == b.pinnedtable[0].style.display && (b.pinnedtable[0].style.left = -e + "px"),
                b._resources.length > 0 && b.tableRows > 0)
                    for (var o = 0; o < this.table[0].rows.length; o++) {
                        var p = this.table[0].rows[o];
                        p.getAttribute("data-group-row") && a(p).find("span").css("left", 5 + e)
                    }
                m[0].style.marginLeft = -e + "px"
            }
        },
        _getDayName: function(a, b) {
            a >= 7 && (a -= 7),
            b || (b = this.dayNameFormat,
            this.isTouchDevice() && (b = this.touchDayNameFormat));
            var c = this.schedulerLocalization.days.names[a];
            switch (b) {
            case "full":
                c = this.schedulerLocalization.days.names[a];
                break;
            case "abbr":
                c = this.schedulerLocalization.days.namesAbbr[a];
                break;
            case "shortest":
                c = this.schedulerLocalization.days.namesShort[a];
                break;
            case "firstTwoLetters":
                c = c.substring(0, 2);
                break;
            case "firstLetter":
                c = c.substring(0, 1)
            }
            return c
        },
        _initializeColumns: function() {
            if (0 === this._views.length && this._views.push({
                type: "dayView"
            }),
            !this._views[this._view])
                throw new Error("jqxScheduler: View is undefined. You need to define the View in the Views Array when you create jqxScheduler");
            var b = this._views[this._view].type
              , c = this._views[this._view];
            if (c.timeSlotWidth && (c.timeSlotWidth = Math.max(c.timeSlotWidth, 30),
            c.columnWidth = c.timeSlotWidth),
            c.columnWidth && c.columnWidth < 30 && (c.columnWidth = 30),
            this.columns && this.columns.records)
                for (var d = 0; d < this.columns.records.length; d++)
                    this._removecolumnhandlers(this.columns.records[d]);
            this.columns = new Array;
            for (var e = new Array, f = this, g = function(b, d) {
                var e = "halfHour";
                c.timeRuler && c.timeRuler.scale && (e = c.timeRuler.scale);
                var g = 24
                  , h = 0
                  , i = 23;
                if (c.timeRuler) {
                    if (void 0 != c.timeRuler.scaleStartHour)
                        var h = parseInt(c.timeRuler.scaleStartHour);
                    if (void 0 != c.timeRuler.scaleEndHour)
                        var i = parseInt(c.timeRuler.scaleEndHour);
                    h < 0 && (h = 0),
                    i < 0 && (i = 23),
                    h > 23 && (h = 0),
                    i > 23 && (i = 23),
                    g = i - h + 1
                }
                var j = 60
                  , k = 2;
                if (e)
                    switch (e) {
                    case "sixtyMinutes":
                    case "hour":
                        k = 1;
                        break;
                    case "thirtyMinutes":
                    case "halfHour":
                        k = 2;
                        break;
                    case "fifteenMinutes":
                    case "quarterHour":
                        k = 4;
                        break;
                    case "tenMinutes":
                        k = 6;
                        break;
                    case "fiveMinutes":
                        k = 12
                    }
                var l = (new Array,
                "auto");
                c.timeRuler && c.timeRuler.formatString && (l = c.timeRuler.formatString);
                var m = h
                  , n = g
                  , o = b.addHours(m)
                  , p = "auto";
                p = c.columnWidth ? k * c.columnWidth : 80 * k;
                for (var q = 0; q < n; q++) {
                    var r = o.toDate();
                    if ("auto" === l)
                        if (0 == r.getHours() && 0 == r.getMinutes() || 12 == r.getHours() && 0 == r.getMinutes())
                            var s = "hh tt";
                        else
                            var s = "hh:mm";
                    else if (a.isFunction(l))
                        var s = l(r);
                    else
                        s = l;
                    a.jqx.dataFormat.isDate(r) && (r = a.jqx.dataFormat.formatdate(r, s, f.schedulerLocalization)),
                    o = o.addMinutes(j, !1),
                    f.columns.push({
                        columnGroup: d,
                        text: r,
                        minwidth: 30,
                        width: p
                    })
                }
            }, h = 0; h < this.tableColumns; h++) {
                if (this.tableColumns > 1) {
                    var i = f._resources[h] ? f._resources[h] : "Resource" + h;
                    e.push({
                        text: i,
                        name: i
                    })
                }
                var j = "left";
                switch (this.rtl && (j = "right"),
                b) {
                case "dayView":
                    var k = this.getViewStart();
                    !1 === c.showWeekends && (0 !== k.dayOfWeek() && 6 !== k.dayOfWeek() || (k = k.addDays(1)),
                    0 !== k.dayOfWeek() && 6 !== k.dayOfWeek() || (k = k.addDays(1)));
                    var l = "auto";
                    c && c.columnWidth && (l = c.columnWidth);
                    var i = f._resources[h] ? f._resources[h] : "Resource" + h;
                    this.columns.push({
                        align: j,
                        width: l,
                        columnGroup: i,
                        text: this._getDayName(k.dayOfWeek())
                    });
                    break;
                case "weekView":
                case "monthView":
                    for (var d = 0; d < 7; d++) {
                        var m = this.schedulerLocalization.firstDay + d;
                        if (!1 !== c.showWeekends || 0 !== d && 6 !== d) {
                            var l = "auto";
                            c && c.columnWidth && (l = c.columnWidth);
                            var i = f._resources[h] ? f._resources[h] : "Resource" + h;
                            this.columns.push({
                                align: "weekView" == b ? j : "center",
                                width: l,
                                columnGroup: i,
                                text: this._getDayName(m)
                            })
                        }
                    }
                    break;
                case "timelineDayView":
                    var i = f._resources[h] ? f._resources[h] : "Resource" + h;
                    g(f.getViewStart(), i);
                    break;
                case "timelineWeekView":
                    for (var d = 0; d < 7; d++) {
                        var m = this.schedulerLocalization.firstDay + d;
                        if (!1 !== c.showWeekends || 0 !== d && 6 !== d) {
                            var i = f._resources[h] ? f._resources[h] : "Resource" + h;
                            e.push({
                                align: f.rtl ? "right" : "left",
                                parentGroup: i,
                                name: this._getDayName(m) + h,
                                text: this._getDayName(m)
                            }),
                            g(f.getViewStart().addDays(d), this._getDayName(m) + h)
                        }
                    }
                    break;
                case "timelineMonthView":
                    var n = f.getViewStart()
                      , o = "auto";
                    c.timeRuler && c.timeRuler.formatString && (o = c.timeRuler.formatString);
                    for (var d = 0; d < 41; d++) {
                        var m = n.dayOfWeek();
                        if (!1 !== c.showWeekends || 0 !== m && 6 !== m) {
                            var l = "auto";
                            l = c.columnWidth ? c.columnWidth : 100;
                            var p = n.toDate();
                            if ("auto" === o) {
                                var q = "dd";
                                p = n.toDate(),
                                1 === p.getDate() && (q = "MMM dd")
                            } else if (a.isFunction(o))
                                var q = o(p);
                            else
                                q = o;
                            a.jqx.dataFormat.isDate(p) && (p = a.jqx.dataFormat.formatdate(p, q, f.schedulerLocalization)),
                            n = n.addDays(1);
                            var i = f._resources[h] ? f._resources[h] : "Resource" + h;
                            f.columns.push({
                                minwidth: 30,
                                columnGroup: i,
                                text: p,
                                width: l
                            })
                        }
                    }
                    break;
                case "agendaView":
                    var r = c.dateColumnWidth
                      , s = c.timeColumnWidth
                      , t = c.appointmentColumnWidth;
                    t || (t = "70%"),
                    s || (s = "auto"),
                    r || (r = "auto"),
                    f.columns.push({
                        text: f.schedulerLocalization.agendaDateColumn,
                        width: r
                    }),
                    f.columns.push({
                        text: f.schedulerLocalization.agendaTimeColumn,
                        width: s
                    }),
                    f.columns.push({
                        text: f.schedulerLocalization.agendaAppointmentColumn,
                        width: t
                    })
                }
            }
            e.length > 0 && (this.columnGroups = e);
            var f = this
              , u = new a.jqx.schedulerDataCollection(this.element)
              , v = 0;
            this._columns = this.columns;
            var w = "left"
              , x = new a.jqx.scheduler.column(f,this);
            x.visibleindex = v++,
            x.text = "",
            x.width = f.timeRulerWidth,
            x.editable = !1,
            x.timeColumn = !0,
            w = "left",
            x.text = "",
            x.hidden = !1,
            x.width = f.timeRulerWidth;
            var y = !1;
            !c.timeRuler || "dayView" !== b && "weekView" !== b ? "dayView" !== b && "weekView" !== b && (x.hidden = !0) : (x._text = c.timeRuler.text || "",
            w = c.timeRuler.position || "left",
            x.hidden = c.timeRuler.hidden || !1,
            x.width = c.timeRuler.width || f.timeRulerWidth,
            c.timeRuler.timeZones && (y = !0));
            var z = function(e) {
                var g = new a.jqx.scheduler.column(f,f);
                g.visibleindex = v++,
                g.text = "",
                g.width = f.timeRulerWidth,
                g.editable = !1,
                g.timeColumn = !0,
                w = "left",
                g.text = "",
                g.hidden = !1,
                g.timeZone = c.timeRuler.timeZones[e].id,
                g.width = f.timeRulerWidth,
                !c.timeRuler || "dayView" !== b && "weekView" !== b || (g._text = c.timeRuler.timeZones[d].text || "",
                g.hidden = c.timeRuler.hidden || !1,
                g.width = c.timeRuler.width || f.timeRulerWidth,
                u.add(g))
            };
            if ("left" === w && ("dayView" === b || "weekView" === b)) {
                if (c.timeRuler && c.timeRuler.timeZones)
                    for (var d = 0; d < c.timeRuler.timeZones.length; d++)
                        z(d);
                u.add(x)
            }
            "left" === w && "monthView" === b && c.showWeekNumbers && (x.hidden = !1,
            u.add(x));
            new Array;
            if (a.each(this.columns, function(b) {
                if (void 0 != f.columns[b]) {
                    var c = new a.jqx.scheduler.column(f,this);
                    c.visibleindex = v++,
                    u.add(c)
                }
            }),
            "right" === w && ("dayView" === b || "weekView" === b)) {
                if (c.timeRuler)
                    for (var d = 0; d < c.timeRuler.timeZones.length; d++)
                        z(d);
                u.add(x)
            }
            "right" === w && "monthView" === b && c.showWeekNumbers && (x.hidden = !1,
            u.add(x)),
            this.rtl && u.records.reverse(),
            this.columns = u
        },
        _getColumnsLengthPerView: function() {
            var a = this._views[this._view].type
              , b = this._views[this._view]
              , c = 1;
            switch (a) {
            case "dayView":
                c = 1;
                break;
            case "weekView":
                c = b.showWeekends !== !1 ? 7 : 5;
                break;
            case "monthView":
                c = b.showWeekends !== !1 ? 7 : 5;
                break;
            case "timelineDayView":
            case "timelineWeekView":
            case "timelineMonthView":
                c = this.columns.records.length;
                break;
            case "agendaView":
                c = this.columns.records.length
            }
            return c
        },
        _renderagenda: function() {
            function b() {
                var a = {};
                return a.cells = new Array,
                a.indexOf = function(b) {
                    for (var c = 0; c < a.cells.length; c++)
                        if (a.cells[c].getAttribute("data-key") == b.getAttribute("data-key"))
                            return c;
                    return -1
                }
                ,
                a
            }
            var c = this
              , d = (c._views[c._view].type,
            c._views[c._view])
              , e = c.getViewStart()
              , f = a.jqx.scheduler.utilities.getEndOfDay(c.getViewEnd().addDays(-1));
            c._prepareAppointmentsInView(e, f);
            for (var g = c.appointmentsToRender.length, h = new Array, i = 0, j = 0; j < c.appointmentsToRender.length; j++)
                for (var k = c.appointmentsToRender[j], l = k.from.clearTime(); l < a.jqx.scheduler.utilities.getEndOfDay(k.to); ) {
                    var m = l.toString();
                    h[m] ? (h[m].appointments.push(k),
                    i++) : (h[m] = {
                        date: l,
                        appointments: new Array
                    },
                    h[m].appointments.push(k),
                    h[h.length] = h[m],
                    i++),
                    l = l.addDays(1).clearTime()
                }
            var n = 0
              , o = 0;
            c.rows = new Array;
            for (var p = a.jqx.browser.msie && a.jqx.browser.version < 8, q = 0, r = 0, s = c.rtl ? " " + c.toTP("jqx-grid-table-rtl") : "", t = 0, u = "<table cellspacing='0' cellpadding='0' class='" + c.toTP("jqx-grid-table") + s + "' id='table" + c.element.id + "'><colgroup>", v = c.columns.records.length, w = 0; w < v; w++) {
                var x = c.columns.records[w];
                if (x.hidden)
                    q++,
                    nonHiddenColumns--;
                else {
                    var y = x.width;
                    if (y < x.minwidth && (y = x.minwidth),
                    y > x.maxwidth && (y = x.maxwidth),
                    y -= r,
                    y < 0 && (y = 0),
                    p) {
                        var z = y;
                        w == q && z++,
                        u += "<col style='max-width: " + z + "px; width: " + z + "px;'>"
                    } else
                        u += "<col style='max-width: " + y + "px; width: " + y + "px;'>";
                    t += y
                }
            }
            if (u += "</colgroup>",
            0 == g) {
                var A = '<tr role="row">'
                  , B = this.host.height()
                  , C = 0;
                C += c.columnGroups ? c.showHeader ? c.columnsheader.height() : 0 : c.showHeader ? c.columnsHeight : 0,
                c.showToolbar && (C += c.toolbarHeight),
                c.showLegend && c._resources.length > 0 && (C += c.legendHeight),
                B -= C;
                var D = '<td data-date="' + e.toString() + '" colspan="' + this.columns.records.length + '" role="gridcell" style="border: none; min-height: ' + B + "px; height: " + B + "px; max-width:" + t + "px; width:" + t + "px;"
                  , E = this.toTP("jqx-cell") + " " + this.toTP("jqx-grid-cell") + " " + this.toTP("jqx-item");
                E += " " + this.toTP("jqx-center-align"),
                D += '" class="' + E + '">',
                D += this.schedulerLocalization.emptyDataString,
                D += "</td>",
                A += D,
                A += "</tr>",
                u += A,
                this.table[0].style.width = t + 2 + "px",
                o = t
            }
            var F = c.rowsHeight;
            c.isTouchDevice() && (rowsHeight = c.touchRowsHeight);
            for (var j = 0; j < h.length; j++)
                for (var G = j, l = h[j], H = 0; H < l.appointments.length; H++) {
                    var I = 0
                      , A = '<tr data-key="' + G + '" role="row">';
                    n = 0;
                    for (var J = l.appointments[H], w = 0; w < v; w++) {
                        var K = c.columns.records[w]
                          , L = w;
                        c.rtl && (L = v - 1 - w);
                        var y = K.width;
                        y < K.minwidth && (y = K.minwidth),
                        y > K.maxwidth && (y = K.maxwidth),
                        y -= r,
                        y < 0 && (y = 0);
                        var E = c.toTP("jqx-cell") + " " + c.toTP("jqx-grid-cell") + " " + c.toTP("jqx-item");
                        c.rtl && (E += " " + c.toTP("jqx-cell-rtl"));
                        var M = ""
                          , G = c.dataview.generatekey()
                          , N = -1
                          , O = l.date
                          , B = F + "px"
                          , D = '<td data-key="' + G + '" data-view="' + N + '" data-date="' + O.toString() + '" role="gridcell" ' + M + ' style="max-width:' + y + "px; width:" + y + "px; height: " + B + "; min-height: " + F + "px;";
                        if (0 == L && 0 == H) {
                            var P = l.appointments.length
                              , D = '<td rowspan="' + P + '" data-key="' + G + '" data-view="' + N + '" data-date="' + O.toString() + '" role="gridcell" ' + M + ' style="max-width:' + y + "px; width:" + y + "px;  min-height: " + F + "px;";
                            E += " " + c.toTP("jqx-center-align")
                        } else if (0 == L) {
                            n++;
                            continue
                        }
                        c.rtl && 1 == L && (E += " " + c.toTP("jqx-right-align")),
                        K.hidden ? (D += "display: none;",
                        c._hiddencolumns = !0) : (I += r + y,
                        D += 0 != n || c.rtl ? "border-left-width: 1px;" : "border-left-width: 0px;",
                        n++),
                        D += '" class="' + E + '">';
                        var Q = "";
                        if (0 == L && 0 == H) {
                            var R = O.toString("dddd", c.schedulerLocalization)
                              , S = O.toString("MMMM, yyyy", c.schedulerLocalization)
                              , T = c.toTP("jqx-scheduler-agenda-date")
                              , U = c.toTP("jqx-scheduler-agenda-day")
                              , V = c.toTP("jqx-scheduler-agenda-week");
                            Q = '<div class="' + T + '"><strong class="' + U + '">' + O.day() + '</strong><br/><em class="' + V + '">' + R + '</em><br/><span class="' + T + '">' + S + "</span></div>"
                        }
                        if (1 == L) {
                            var W = "auto"
                              , d = this._views[this._view]
                              , X = J.from
                              , Y = J.to;
                            d.timeRuler && d.timeRuler.formatString && (W = d.timeRuler.formatString);
                            var Z = W
                              , $ = W;
                            if ("auto" === W) {
                                if (0 == X.hour() && 0 == X.minute() || 12 == X.hour() && 0 == X.minute())
                                    var Z = "hh tt";
                                else
                                    var Z = "hh:mm";
                                if (0 == Y.hour() && 0 == Y.minute() || 12 == Y.hour() && 0 == Y.minute())
                                    var $ = "hh tt";
                                else
                                    var $ = "hh:mm"
                            }
                            var T = c.toTP("jqx-scheduler-agenda-time");
                            Q = J.allDay ? "<span class='" + T + "'>" + c.schedulerLocalization.agendaAllDayString + "</span>" : c.rtl ? "<span class='" + T + "'>" + Y.toString($, c.schedulerLocalization) + " - " + X.toString(Z, c.schedulerLocalization) + "</span>" : "<span class='" + T + "'>" + X.toString(Z, c.schedulerLocalization) + " - " + Y.toString($, c.schedulerLocalization) + "</span>"
                        } else if (2 == L) {
                            J.resourceId && a.each(c._resources, function(a, b) {
                                if (J.resourceId == b) {
                                    var d = c.getColors(a)
                                      , e = (this.toString(),
                                    c.toTP("jqx-scheduler-agenda-appointment-resource jqx-scheduler-legend"));
                                    if (c.rtl)
                                        var e = c.toTP("jqx-scheduler-agenda-appointment-resource-rtl jqx-scheduler-legend");
                                    var f = "<div data-key='" + J.id + "' class='" + e + "' style='margin-right: 5px; border-color: " + d.border + "; background: " + d.background + ";' class='" + c.toThemeProperty("jqx-scheduler-legend") + "'></div>";
                                    Q = f
                                }
                            });
                            var _ = J.subject ? J.subject : "(No Title)"
                              , aa = J.location
                              , ba = J.description
                              , ca = J.status ? c.schedulerLocalization.editDialogStatuses[J.status] : ""
                              , da = J.isRecurrentAppointment()
                              , ea = (J.isException(),
                            "" + c.schedulerLocalization.editDialogSubjectString + ": " + _);
                            aa && (ea += "\n" + c.schedulerLocalization.editDialogLocationString + ": " + aa),
                            ba && (ea += "\n" + c.schedulerLocalization.editDialogDescriptionString + ": " + ba),
                            ca && (ea += "\n" + c.schedulerLocalization.editDialogStatusString + ": " + ca),
                            da && (ea += "\n" + c.schedulerLocalization.editDialogRepeatString + ": " + da);
                            var T = c.toTP("jqx-scheduler-agenda-appointment jqx-scheduler-legend-label");
                            if (c.rtl)
                                var T = c.toTP("jqx-scheduler-agenda-appointment-rtl jqx-scheduler-legend-label");
                            Q += "<span data-key='" + J.id + "' title='" + ea + "' class='" + T + "'>" + _ + "</span>"
                        }
                        D += Q,
                        D += "</td>",
                        A += D
                    }
                    0 == o && (c.table[0].style.width = I + 2 + "px",
                    c.pinnedtable[0].style.width = I + 2 + "px",
                    o = I),
                    A += "</tr>",
                    u += A
                }
            u += "</table>",
            c.table[0].innerHTML = u,
            c.pinnedtable[0].innerHTML = u,
            c.pinnedtable[0].style.display = "none";
            var fa = a(c.table[0].firstChild)
              , ga = a(c.pinnedtable[0].firstChild);
            c._table = fa,
            c._pinnedtable = ga,
            a.jqx.browser.msie && a.jqx.browser.version < 10 && (c._table[0].style.width = o + "px",
            c._pinnedtable[0].style.width = o + "px"),
            0 === g && (c._table[0].style.width = 2 + o + "px",
            c._pinnedtable[0].style.width = 2 + o + "px",
            c._pinnedtable[0].style.display = "none"),
            c._pinnedtable[0].style.display = "none",
            c._table.addClass("jqx-grid-table-one-cell jqx-disableselect"),
            c.table[0].rows = c.table[0].firstChild.rows,
            c.rowByCell = new Array,
            c.columnCells = new Array,
            c.cellWidth = 0,
            c.cellHeight = 0;
            for (var ha = c.table[0].rows.length, j = 0; j < ha; j++) {
                var ia = c.table[0].rows[j];
                if (!ia.getAttribute("data-group-row")) {
                    var ja = new b;
                    ja.aboveRow = null,
                    ja.belowRow = null,
                    c.rows.length > 0 && (ja.aboveRow = c.rows[c.rows.length - 1],
                    c.rows[c.rows.length - 1].belowRow = ja),
                    ja.element = ia,
                    c.rows.push(ja);
                    for (var ka = !1, w = 0; w < ia.cells.length; w++) {
                        if (ia.cells.length < c.columns.records.length && !ka)
                            for (var la = j; la >= 0; ) {
                                var ma = c.table[0].rows[la];
                                if (c.table[0].rows[la].cells.length == c.columns.records.length) {
                                    var na = ma.cells[0];
                                    c.columnCells[ja.cells.length] || (c.columnCells[ja.cells.length] = new Array),
                                    c.columnCells[ja.cells.length].push(na),
                                    0 == c.cellWidth && (c.cellWidth = na.clientWidth),
                                    0 == c.cellHeight && (1 == ha || j > 1) && (c.cellHeight = na.clientHeight),
                                    ja.cells.push(na),
                                    ka = !0;
                                    break
                                }
                                la--
                            }
                        var na = ia.cells[w];
                        "none" !== na.style.display && (na.className.indexOf("jqx-grid-cell-pinned") >= 0 || (c.columnCells[ja.cells.length] || (c.columnCells[ja.cells.length] = new Array),
                        c.columnCells[ja.cells.length].push(na),
                        0 == c.cellWidth && (c.cellWidth = na.clientWidth),
                        0 == c.cellHeight && (1 == ha || j > 1) && (c.cellHeight = na.clientHeight),
                        ja.cells.push(na),
                        c.rowByCell[na.getAttribute("data-key")] = ja))
                    }
                }
            }
            0 === g && (c._table[0].style.tableLayout = "auto"),
            c._updateScrollbars(c.host.height()),
            c._arrange(),
            c.rendered && c.rendered(),
            c.renderedTime = new Date
        },
        _renderrows: function() {
            function b() {
                var a = {};
                return a.cells = new Array,
                a.indexOf = function(b) {
                    for (var c = 0; c < a.cells.length; c++)
                        if (a.cells[c].getAttribute("data-key") == b.getAttribute("data-key"))
                            return c;
                    return -1
                }
                ,
                a
            }
            var c = this;
            if (!c._loading && !c._updating && !c._appupdating) {
                c.rendering && c.rendering();
                var c = this
                  , d = c._views[c._view].type
                  , e = c._views[c._view];
                if ("agendaView" == d)
                    return void c._renderagenda();
                var f = 1
                  , g = c.getViewStart()
                  , h = a.jqx.scheduler.utilities.getEndOfDay(c.getViewEnd());
                c._prepareAppointmentsInView(g, h);
                var i = new Array;
                if ("weekView" === d || "dayView" === d)
                    var f = c.getMaxAllDayAppointments(c.appointmentsToRender);
                else
                    "monthView" === d && e.monthRowAutoHeight && c.rows && 6 == c.rows.length && (i = c._getMonthAppointmentsPerWeek());
                var j, k = (c.tableRows > 1 ? c.tableRows : 0,
                "halfHour"), l = null;
                e.rowHeight && (l = e.rowHeight),
                e && e.allDayRowHeight && (j = e.allDayRowHeight),
                e.timeRuler && e.timeRuler.scale && (k = e.timeRuler.scale);
                var m = 0;
                c.table[0].rows = new Array,
                c.rows = new Array;
                var n = c.toTP("jqx-cell") + " " + c.toTP("jqx-widget-content");
                c.rtl && (n += " " + c.toTP("jqx-cell-rtl"));
                var o = c.columns.records.length
                  , p = c._getColumnsLengthPerView()
                  , q = a.jqx.browser.msie && a.jqx.browser.version < 8;
                q && c.host.attr("hideFocus", "true"),
                c._lastSelectedCell = null,
                c.focusedCell = null;
                var r = (new Array,
                c.source.records);
                r = c.dataview.evaluate(r),
                c.dataViewRecords = r,
                c.cells = new Array;
                c.dataViewRecords;
                c.renderedRecords = c.getRows();
                var s = (c.tableZIndex,
                c.getRows().length)
                  , t = 0
                  , u = 0;
                if (q)
                    for (var v = 0; v < o; v++) {
                        var w = c.columns.records[v]
                          , x = w.width;
                        x < w.minwidth && (x = w.minwidth),
                        x > w.maxwidth && (x = w.maxwidth);
                        var y = a('<table><tr><td role="gridcell" style="max-width: ' + x + "px; width:" + x + 'px;" class="' + n + '"></td></tr></table>');
                        a(document.body).append(y);
                        var z = y.find("td");
                        t = 1 + parseInt(z.css("padding-left")) + parseInt(z.css("padding-right")),
                        y.remove();
                        break
                    }
                var A = c.rtl ? " " + c.toTP("jqx-grid-table-rtl") : ""
                  , B = "<table cellspacing='0' cellpadding='0' class='" + c.toTP("jqx-grid-table") + A + "' id='table" + c.element.id + "'><colgroup>"
                  , C = 0
                  , D = o
                  , E = 2
                  , F = 30;
                switch (k) {
                case "sixtyMinutes":
                case "hour":
                    F = 60,
                    E = 1;
                    break;
                case "thirtyMinutes":
                case "halfHour":
                    F = 30,
                    E = 2;
                    break;
                case "fifteenMinutes":
                case "quarterHour":
                    F = 15,
                    E = 4;
                    break;
                case "tenMinutes":
                    F = 10,
                    E = 6;
                    break;
                case "fiveMinutes":
                    F = 5,
                    E = 12
                }
                var G = 1;
                "timelineDayView" === d || "timelineWeekView" === d ? (o *= E,
                G = E,
                p = o / c.tableColumns) : "timelineMonthView" === d ? p = o / c.tableColumns : "monthView" === d && (p = e.showWeekNumbers ? (o - c.tableColumns) / c.tableColumns : o / c.tableColumns);
                for (var H = function(a) {
                    var b = c.columns.records[a];
                    if (b)
                        return b;
                    for (; a >= c.columns.records.length; )
                        a -= c.columns.records.length;
                    var b = c.columns.records[a];
                    return b
                }, v = 0; v < o; v++) {
                    var w = H(v);
                    if (w.hidden)
                        C++,
                        D--;
                    else {
                        var x = w.width / G;
                        if (x < w.minwidth && (x = w.minwidth / G),
                        x > w.maxwidth && (x = w.maxwidth / G),
                        x -= t,
                        x < 0 && (x = 0),
                        "monthView" == d && c.rtl && w.timeColumn && x++,
                        q) {
                            var I = x;
                            v == C && I++,
                            B += "<col style='max-width: " + I + "px; width: " + I + "px;'>"
                        } else
                            B += "<col style='max-width: " + x + "px; width: " + x + "px;'>";
                        u += x
                    }
                }
                if (B += "</colgroup>",
                c._hiddencolumns = !1,
                0 === s) {
                    var J = '<tr role="row">'
                      , K = c.host.height();
                    c.pageable && (K -= c.pagerHeight,
                    "both" === c.pagerPosition && (K -= c.pagerHeight)),
                    K -= c.columnsHeight,
                    c.showLegend && c._resources.length > 0 && (K -= c.legendHeight),
                    K < 25 && (K = 25),
                    "hidden" != c.hScrollBar[0].style.visibility && (K -= c.hScrollBar.outerHeight()),
                    ("auto" === c.height || null === c.height || c.autoheight) && (K = 300);
                    var y = '<td colspan="' + c.columns.records.length + '" role="gridcell" style="border: none; min-height: ' + K + "px; height: " + K + "px; max-width:" + u + "px; width:" + u + "px;"
                      , n = c.toTP("jqx-cell") + " " + c.toTP("jqx-grid-cell") + " " + c.toTP("jqx-item");
                    c.rtl && (n += " " + c.toTP("jqx-cell-rtl")),
                    n += " " + c.toTP("jqx-center-align"),
                    y += '" class="' + n + '">',
                    y += c.schedulerLocalization.emptyDataString,
                    y += "</td>",
                    J += y,
                    B += J,
                    c.table[0].style.width = u + 2 + "px",
                    m = u
                }
                var L = c.getRows()
                  , g = c.getViewStart()
                  , K = c._hostHeight ? c._hostHeight : c.host.height()
                  , M = 0;
                M += c.columnGroups ? c.showHeader ? c.columnsheader.height() : 0 : c.showHeader ? c.columnsHeight : 0,
                c.showToolbar && (M += c.toolbarHeight),
                c.showLegend && c._resources.length > 0 && (M += c.legendHeight);
                var N = c.showAllDayRow
                  , O = 23;
                e.resourceHeaderRowHeight && (O = e.resourcesRowHeight),
                O += 2,
                void 0 != e.showAllDayRow && (N = e.showAllDayRow);
                var P = c._columnswidth > c._hostWidth
                  , Q = P ? 3 + c.scrollBarSize : 0
                  , R = c.tableRows > 1 ? c.resources.unitsInView : 1;
                if (void 0 == R && (R = c._resources.length),
                c.resources && c.resources.resourceRowHeight && (l = c.resources.resourceRowHeight),
                null == l || "auto" == l) {
                    var S = c.rowsHeight
                      , T = 3 * S;
                    if (c.isTouchDevice()) {
                        S = c.touchRowsHeight;
                        var T = 22 + S
                    }
                    1 == c.tableRows ? (l = K > 0 ? K - M : S,
                    c.columns.records.length > 10 && (l = K > 0 ? K - c.scrollBarSize - 5 - M : S)) : (l = K > 0 ? (K - M - O) / s : S,
                    c.columns.records.length > 10 && (l = K > 0 ? (K - c.scrollBarSize - 5 - M - R * O) / (R * s) : S)),
                    "dayView" === d || "weekView" === d ? N && (null == j || "auto" == j ? (l = K > 0 ? (K - M) / (c.tableRows * s) : T,
                    j = l) : l = K > 0 ? (K - M - j - R * O) / (R * (s - 1)) : S) : "monthView" === d && ("hidden" == c.hScrollBar[0].style.visibility && (Q = 0),
                    l = 1 == c.tableRows ? K > 0 ? (K - M - Q) / s : S : K > 0 ? (K - M - O - Q) / s : S),
                    l = Math.max(S, l),
                    j || (j = T),
                    j = Math.max(T, j),
                    c._allDayRowHeight = j,
                    c._defaultRowHeight = S,
                    j = f * (S - 2),
                    j = Math.max(T, 17 + j),
                    c._allDayRowFullHeight = j,
                    e.allDayRowHeight && (c._allDayRowHeight = e.allDayRowHeight,
                    j = f * (e.allDayRowHeight - 2),
                    c._allDayRowFullHeight = j)
                }
                var U = new Array;
                if (c.resources && c.resources.colorScheme) {
                    for (var V = 0; V < c.colorSchemes.length; V++)
                        if (c.colorSchemes[V].name == c.resources.colorScheme) {
                            U = c.colorSchemes[V].colors;
                            break
                        }
                    for (; c._resources.length > U.length - 1; ) {
                        var W = parseInt(c.resources.colorScheme.substring(6));
                        W >= 27 && (W = 0),
                        U = U.concat(c.colorSchemes[W].colors),
                        W++
                    }
                }
                for (var X = 0; X < c.tableRows; X++) {
                    var Y = 0
                      , Z = 23;
                    if (e.timeRuler && void 0 != e.timeRuler.scaleStartHour)
                        var Y = parseInt(e.timeRuler.scaleStartHour);
                    if (e.timeRuler && void 0 != e.timeRuler.scaleEndHour)
                        var Z = parseInt(e.timeRuler.scaleEndHour);
                    var $ = g;
                    !1 === e.showWeekends && (0 != $.dayOfWeek() && 6 != $.dayOfWeek() || ($ = $.addDays(1)));
                    var _ = new Array
                      , aa = "monthView" != d && "timelineDayView" != d && "timelineWeekView" != d && "timelineMonthView" != d && N ? 1 : 0;
                    if (c.tableRows > 1) {
                        var J = '<tr data-group-row="true" role="row">'
                          , n = c.toTP("jqx-cell") + " " + c.toTP("jqx-grid-cell") + " " + c.toTP("jqx-item");
                        if (c.rtl && (n += " " + c.toTP("jqx-cell-rtl")),
                        q)
                            n += " " + c.toTP("jqx-grid-cell-pinned");
                        else {
                            n += " " + c.toTP("jqx-grid-cell-pinned"),
                            xa += ' colspan="' + o + '"';
                            for (var I = 0, ba = 0; ba < o; ba++) {
                                var ca = H(ba)
                                  , da = ca.width / G;
                                da < ca.minwidth && (x = ca.minwidth / G),
                                da > ca.maxwidth && (x = ca.maxwidth / G),
                                da -= t,
                                da < 0 && (da = 0),
                                ca.hidden || (I += da)
                            }
                            x = I
                        }
                        var y = '<td style="height:' + O + "px;";
                        if (v != o - 1 || 1 != o || c.rtl || (y += "border-right-color: transparent;"),
                        c._resources.length > 0 && c.resources.colorScheme && "none" != c.resources.orientation) {
                            var ea = ""
                              , fa = ""
                              , ga = ""
                              , ha = function(a) {
                                var b = 105
                                  , c = .299 * a.r + .587 * a.g + .114 * a.b
                                  , d = 255 - c < b ? "Black" : "White";
                                return d
                            };
                            ea = U[X],
                            ea = c.hexToRgba(U[X], .7).toString(),
                            ga = ha(c.hexToRgba(U[X], .7)),
                            fa = U[X],
                            y += "background: " + ea + ";",
                            y += "border-color: " + fa + ";",
                            y += "color: " + ga + ";"
                        }
                        y += '" class="' + n + '" role="gridcell" ' + xa;
                        var ia = c._resources[X];
                        y += "><span style='position: relative;'>" + ia + "</span>",
                        y += "</td>",
                        J += y,
                        B += J
                    }
                    for (var ja = 0; ja < s; ja++) {
                        var ka = {}
                          , la = "jqx" + c.element.id + "_" + ja;
                        ka.uid = la;
                        var J = '<tr data-key="' + la + '" role="row">'
                          , ma = 0
                          , na = 0;
                        if (_[0] && ja > aa) {
                            var F = 30;
                            if ("monthView" != d) {
                                switch (k) {
                                case "sixtyMinutes":
                                case "hour":
                                    F = 60;
                                    break;
                                case "thirtyMinutes":
                                case "halfHour":
                                    F = 30;
                                    break;
                                case "fifteenMinutes":
                                case "quarterHour":
                                    F = 15;
                                    break;
                                case "tenMinutes":
                                    F = 10;
                                    break;
                                case "fiveMinutes":
                                    F = 5
                                }
                                for (var oa = 0; oa < o; oa++)
                                    _[oa] = _[oa].addMinutes(F, !1)
                            } else
                                for (var oa = 0; oa < o; oa++)
                                    _[oa] = _[oa].addDays(7, !1)
                        }
                        var pa = 0
                          , qa = 1
                          , ra = 0;
                        e.showWeekends || void 0 == e.showWeekends ? (ra = c.columns.records.length / (7 * c.tableColumns),
                        ra *= E) : (ra = c.columns.records.length / (5 * c.tableColumns),
                        ra *= E);
                        var sa = 0;
                        c.rtl && (sa = 1);
                        for (var ta = 0, v = 0; v < o; v++) {
                            var ua = H(v);
                            if (pa >= p && (pa = 0,
                            ta = 0,
                            sa = 0,
                            c.rtl && (sa = 1),
                            qa++),
                            !_[v])
                                if (c.rtl) {
                                    if (d.toString().indexOf("timelineDayView") >= 0) {
                                        var va = 1 + v;
                                        _[v] = $.addHours(1 + Z).addMinutes(-va * F, !1)
                                    } else
                                        d.toString().indexOf("timelineWeekView") >= 0 ? e.showWeekends || void 0 == e.showWeekends ? _[v] = $.addDays(6 - ta).addHours(1 + Z, !1).addMinutes(-sa * F, !1) : _[v] = $.addDays(4 - ta).addHours(1 + Z, !1).addMinutes(-sa * F, !1) : "dayView" == d || "monthView" == d || "weekView" == d ? e.showWeekends || void 0 == e.showWeekends ? _[v] = $.addDays(6 - pa).addHours(Y, !1) : _[v] = $.addDays(4 - pa).addHours(Y, !1) : _[v] = $.addDays(p - pa - 1).addHours(Y, !1);
                                    c.timeZone && (_[v].timeZone = c.timeZone)
                                } else {
                                    if (d.toString().indexOf("timelineDayView") >= 0) {
                                        var va = v;
                                        _[v] = $.addHours(Y).addMinutes(va * F, !1)
                                    } else
                                        d.toString().indexOf("timelineWeekView") >= 0 ? _[v] = $.addDays(ta).addHours(Y, !1).addMinutes(sa * F, !1) : _[v] = $.addDays(pa).addHours(Y, !1);
                                    c.timeZone && (_[v].timeZone = c.timeZone)
                                }
                            sa++,
                            sa >= ra && (sa = 0,
                            ta++),
                            ua.timeColumn || "dayView" !== d && "weekView" !== d ? !ua.timeColumn && "monthView" === d && e.showWeekNumbers ? pa++ : "monthView" === d && !e.showWeekNumbers || "timelineMonthView" === d ? pa++ : "timelineDayView" != d && "timelineWeekView" != d || pa++ : pa++;
                            var wa = _[v]
                              , x = ua.width / G;
                            x < ua.minwidth && (x = ua.minwidth / G),
                            x > ua.maxwidth && (x = ua.maxwidth / G),
                            x -= t,
                            x < 0 && (x = 0);
                            var n = c.toTP("jqx-cell") + " " + c.toTP("jqx-grid-cell") + " " + c.toTP("jqx-item");
                            ua.pinned && (n += " " + c.toTP("jqx-grid-cell-pinned")),
                            c.sortcolumn === ua.displayfield && (n += " " + c.toTP("jqx-grid-cell-sort")),
                            c.altRows && ja % 2 != 0 && (n += " " + c.toTP("jqx-grid-cell-alt")),
                            0 != ja || !N || "dayView" !== d && "weekView" !== d || (n += " " + c.toTP("jqx-grid-cell-alt")),
                            (wa > c.max || wa < c.min) && (n += " " + c.toTP("jqx-scheduler-disabled-cell")),
                            c.rtl && (n += " " + c.toTP("jqx-cell-rtl"));
                            var xa = ""
                              , la = c.dataview.generatekey()
                              , ya = X + qa;
                            c.resources && "none" == c.resources.orientation && (ya = -1),
                            0 == c._resources.length && (ya = -1);
                            var y = '<td data-key="' + la + '" data-view="' + ya + '" data-date="' + wa.toString() + '" role="gridcell" ' + xa + ' style="max-width:' + x + "px; width:" + x + "px;  height:" + l + "px;";
                            if (0 == ja && N && ("dayView" === d || "weekView" === d))
                                var y = '<td  data-key="' + la + '" data-view="' + ya + '" data-end-date="' + a.jqx.scheduler.utilities.getEndOfDay(wa).toString() + '" data-date="' + wa.clearTime().toString() + '" role="gridcell" ' + xa + ' style="max-width:' + x + "px; width:" + x + "px; height:" + j + "px;";
                            if ("monthView" == d && e.monthRowAutoHeight && i.length > 0 && i[ja] && "auto" != i[ja] && l < i[ja])
                                var y = '<td data-key="' + la + '" data-view="' + ya + '" data-date="' + wa.toString() + '" role="gridcell" ' + xa + ' style="max-width:' + x + "px; width:" + x + "px;  height:" + i[ja] + "px;";
                            if (c.resources && c._resources.length > 0 && c.resources.colorScheme && "none" !== c.resources.orientation) {
                                var ea = ""
                                  , fa = "";
                                if (ea = U[X + qa - 1],
                                ea = 0 != ja || !N || "dayView" !== d && "weekView" !== d ? c.hexToRgba(U[X + qa - 1], .3).toString() : c.shadeColor(U[X + qa - 1], .3).toString(),
                                (0 != ja || !N || "dayView" !== d && "weekView" !== d) && d.indexOf("month") == -1 && !ua.timeColumn && e.showWorkTime !== !1) {
                                    var za = 1
                                      , Aa = 5
                                      , Ba = 8
                                      , Ca = 18;
                                    if (e.workTime)
                                        var za = e.workTime.fromDayOfWeek ? e.workTime.fromDayOfWeek : 0
                                          , Aa = e.workTime.toDayOfWeek ? e.workTime.toDayOfWeek : 0
                                          , Ba = e.workTime.fromHour ? e.workTime.fromHour : 8
                                          , Ca = e.workTime.toHour ? e.workTime.toHour : 8;
                                    wa.dayOfWeek() >= za && wa.dayOfWeek() <= Aa && wa.hour() >= Ba && wa.hour() < Ca && (ea = c.hexToRgba(U[X + qa - 1], .1).toString())
                                }
                                fa = U[qa + X - 1],
                                y += "background: " + ea + ";",
                                y += "border-color: " + fa + ";"
                            }
                            if (v != o - 1 || 1 != o || c.rtl || (y += "border-right-color: transparent;"),
                            ua.timeColumn && !ua.hidden && "monthView" === d) {
                                var n = c.toTP("jqx-scheduler-time-column") + " " + c.toTP("jqx-widget-header") + " " + c.toTP("jqx-cell") + " " + c.toTP("jqx-grid-cell") + " " + c.toTP("jqx-item");
                                if (n += " " + c.toTP("jqx-scheduler-week-number-column"),
                                c.tableRows > 1)
                                    var n = c.toTP("jqx-cell") + " " + c.toTP("jqx-grid-cell") + " " + c.toTP("jqx-item");
                                if (c.rtl && (n += " " + c.toTP("jqx-cell-rtl")),
                                0 !== wa.minute()) {
                                    na++;
                                    continue
                                }
                                var y = '<td classname="jqx-disableselect" data-time-slot="true" data-date="' + wa.toString() + '" role="gridcell" style="max-width:' + x + "px; width:" + x + "px;";
                                v != o - 1 || 1 != o || c.rtl ? c.rtl && 0 == v && (y += "border-left-color: transparent;") : y += "border-right-color: transparent;",
                                v == o - 1 && c.rtl && (y += "border-right-color: transparent;")
                            }
                            if (!ua.timeColumn || ua.hidden || "dayView" !== d && "weekView" !== d) {
                                if (ja > 0) {
                                    var Da = "border-left-width: 1px;";
                                    c.rtl && 0 == v && "monthView" == d && e.showWeekNumbers && (Da = "border-left-width: 0px;"),
                                    y += Da
                                }
                            } else {
                                var n = c.toTP("jqx-scheduler-time-column") + " " + c.toTP("jqx-widget-header") + " " + c.toTP("jqx-cell") + " " + c.toTP("jqx-grid-cell") + " " + c.toTP("jqx-item");
                                if (c.tableRows > 1)
                                    var n = c.toTP("jqx-cell") + " " + c.toTP("jqx-grid-cell") + " " + c.toTP("jqx-item");
                                if (c.rtl && (n += " " + c.toTP("jqx-cell-rtl")),
                                ja > 0) {
                                    if (0 !== wa.minute()) {
                                        na++;
                                        continue
                                    }
                                    var y = '<td classname="jqx-disableselect" data-time-slot="true" data-date="' + wa.toString() + '" rowspan=' + E + ' role="gridcell" ' + xa + ' style="max-width:' + x + "px; width:" + x + "px;";
                                    v != o - 1 || 1 != o || c.rtl ? c.rtl && 0 == v && (y += "border-left-color: transparent;") : y += "border-right-color: transparent;"
                                } else {
                                    if (c.resources && "none" == c.resources.orientation && (ya = -1),
                                    0 == ja && N && ("dayView" === d || "weekView" === d))
                                        var y = '<td data-view="' + ya + '" data-time-slot="true" data-end-date="' + a.jqx.scheduler.utilities.getEndOfDay(wa).toString() + '" data-date="' + wa.toString() + '" role="gridcell" ' + xa + ' style="max-width:' + x + "px; width:" + x + "px;";
                                    v != o - 1 || 1 != o || c.rtl ? 0 == v && 1 == o && c.rtl && (y += "border-right-color: transparent;") : y += "border-right-color: transparent;",
                                    c.rtl && (y += "border-left-width: 1px;"),
                                    c.tableRows > 1 && (y += "background: " + ea + ";",
                                    y += "border-color: " + fa + ";")
                                }
                            }
                            if ("left" != ua.cellsalign && (n += "right" === ua.cellsalign ? " " + c.toTP("jqx-right-align") : " " + c.toTP("jqx-center-align")),
                            ua.timeColumn || c.rowinfo[ka.uid] && c.rowinfo[ka.uid].selected && c.editKey !== ka.uid && "none" !== c.selectionMode && (n += " " + c.toTP("jqx-grid-cell-selected"),
                            n += " " + c.toTP("jqx-fill-state-pressed"),
                            n += " " + c.toTP("jqx-scheduler-cell-selected")),
                            ua.hidden ? (y += "display: none;",
                            c._hiddencolumns = !0) : (ma += t + x,
                            0 != na || c.rtl || (y += "border-left-width: 0px;"),
                            na++),
                            (0 != ja || !N || "dayView" !== d && "weekView" !== d) && d.indexOf("month") == -1 && (n += " " + c.toTP("jqx-grid-cell-nowrap"),
                            ja % 2 != 1 || ua.timeColumn || (n += " " + c.toTP("jqx-scheduler-middle-cell")),
                            !ua.timeColumn && e.showWorkTime !== !1)) {
                                var za = 1
                                  , Aa = 5
                                  , Ba = 8
                                  , Ca = 18;
                                if (e.workTime)
                                    var za = e.workTime.fromDayOfWeek ? e.workTime.fromDayOfWeek : 0
                                      , Aa = e.workTime.toDayOfWeek ? e.workTime.toDayOfWeek : 0
                                      , Ba = e.workTime.fromHour ? e.workTime.fromHour : 8
                                      , Ca = e.workTime.toHour ? e.workTime.toHour : 8;
                                n += wa.dayOfWeek() >= za && wa.dayOfWeek() <= Aa && wa.hour() >= Ba && wa.hour() < Ca ? " " + c.toTP("jqx-scheduler-work-time-cell") : " " + c.toTP("jqx-scheduler-not-work-time-cell")
                            }
                            var Ea = "";
                            if ("monthView" === d) {
                                c.touchDevice || ua.timeColumn || (n += " " + c.toTP("jqx-top-align"));
                                var Fa = "dd";
                                Ea = wa.toDate();
                                var Ga = c.toTP("jqx-scheduler-month-outer-cell") + " "
                                  , Ha = c.toTP("jqx-scheduler-month-weekend-cell");
                                c.date.month() == wa.month() && (Ga = ""),
                                wa.isWeekend() ? n += " " + Ha : Ha = "",
                                1 === Ea.getDate() && (Fa = "MMM dd"),
                                Ea = c.touchDevice ? l > 16 ? "<div class='" + Ga + c.toTP("jqx-scheduler-month-cell-touch") + "'>" + a.jqx.dataFormat.formatdate(Ea, Fa, c.schedulerLocalization) + "<span style='display: none; float: right; cursor: pointer; width:16px; height: 16px;' class='" + c.toTP("jqx-icon-arrow-down") + "'></span></div>" : "<div class='" + Ga + c.toTP("jqx-scheduler-month-cell-touch") + "'>" + a.jqx.dataFormat.formatdate(Ea, Fa, c.schedulerLocalization) + "<span style='display: none; float: right; cursor: pointer;' class='" + c.toTP("jqx-icon-arrow-down") + "'></span></div>" : l > 16 ? "<div class='" + Ga + c.toTP("jqx-scheduler-month-cell") + "'>" + a.jqx.dataFormat.formatdate(Ea, Fa, c.schedulerLocalization) + "<span style='display: none; float: right; cursor: pointer; width:16px; height: 16px;' class='" + c.toTP("jqx-icon-arrow-down") + "'></span></div>" : "<div class='" + Ga + c.toTP("jqx-scheduler-month-cell") + "'>" + a.jqx.dataFormat.formatdate(Ea, Fa, c.schedulerLocalization) + "<span style='display: none; float: right; cursor: pointer;' class='" + c.toTP("jqx-icon-arrow-down") + "'></span></div>"
                            } else
                                "timelineWeekView" !== d && "timelineDayView" !== d && "timelineMonthView" !== d || (n += " " + c.toTP("jqx-right-align jqx-bottom-align"),
                                Ea = "<span style='display: none; float: right; cursor: pointer; width:16px; height: 16px;' class='" + c.toTP("jqx-icon-arrow-down") + "'></span>");
                            0 != ja || !N || "dayView" !== d && "weekView" !== d || ua.timeColumn || (n += " " + c.toTP("jqx-top-align"),
                            n += " " + c.toTP("jqx-scheduler-all-day-cell"),
                            c.rtl && (n += " " + c.toTP("jqx-rtl")),
                            Ea = wa.toDate(),
                            Ea = "<span>" + a.jqx.dataFormat.formatdate(Ea, "dd", c.schedulerLocalization) + "</span>");
                            var Ia = ua.cellsFormat;
                            if (ua.timeColumn && !ua.hidden) {
                                Ea = wa.toDate(),
                                ua.timeZone && (Ea = wa.clone().toTimeZone(ua.timeZone),
                                Ea = Ea.toDate());
                                e.timeRuler && e.timeRuler.formatString ? Ia = e.timeRuler.formatString : ua.timeColumn.format || (Ia = 0 == Ea.getHours() || 12 == Ea.getHours() ? "hh tt" : "hh:mm"),
                                a.jqx.dataFormat.isDate(Ea) && (Ea = a.jqx.dataFormat.formatdate(Ea, Ia, c.schedulerLocalization)),
                                ja < aa && (n += c.rtl ? " " + c.toTP("jqx-scheduler-time-column-header-cell-rtl") : " " + c.toTP("jqx-scheduler-time-column-header-cell"),
                                Ea = ""),
                                ja < aa && (ua._text && (n += " " + c.toTP("jqx-bottom-align")),
                                e.timeRuler && e.timeRuler.timeZones && e.timeRuler.timeZones.length > 0 && v < e.timeRuler.timeZones.length && (Ea = ua._text)),
                                "monthView" == d && (Ea = wa.weekOfYear(c.schedulerLocalization.firstDay))
                            } else
                                "" != Ia && a.jqx.dataFormat && (a.jqx.dataFormat.isDate(Ea) ? Ea = a.jqx.dataFormat.formatdate(Ea, Ia, c.schedulerLocalization) : (a.jqx.dataFormat.isNumber(Ea) || !isNaN(parseFloat(Ea)) && isFinite(Ea)) && (Ea = a.jqx.dataFormat.formatnumber(Ea, Ia, c.schedulerLocalization)));
                            if ("" != ua.cellclassname && ua.cellclassname)
                                if ("string" == typeof ua.cellclassname)
                                    n += " " + ua.cellclassname;
                                else {
                                    var Ja = ua.cellclassname(ja, ua.datafield, Ea, ka);
                                    Ja && (n += " " + Ja)
                                }
                            if ("" != ua.cellsRenderer && ua.cellsRenderer) {
                                var Ka = L.indexOf(ka);
                                Ea = ua.cellsRenderer(Ka, ua.datafield, Ea, ka)
                            }
                            y += '" class="' + n + '">',
                            y += Ea,
                            y += "</td>",
                            J += y
                        }
                        0 == m && (c.table[0].style.width = ma + 2 + "px",
                        c.pinnedtable[0].style.width = ma + 2 + "px",
                        m = ma),
                        J += "</tr>",
                        B += J,
                        c.rowinfo[ka.uid] ? "row"in c.rowinfo[ka.uid] || (c.rowinfo[ka.uid].row = ka) : c.rowinfo[ka.uid] = {
                            row: ka
                        }
                    }
                }
                B += "</table>",
                c.table[0].innerHTML = B,
                c.pinnedtable[0].innerHTML = B,
                c.table[0].rows = c.table[0].firstChild.rows;
                var La = a.jqx.browser.msie && a.jqx.browser.version < 9
                  , Ma = null;
                if (!N || "dayView" !== d && "weekView" !== d || 1 != c.tableRows)
                    c.pinnedtable[0].style.display = "none";
                else if (c.pinnedtable[0].style.display = "block",
                c.pinnedtable[0].style.zIndex = "400",
                c.pinnedtable[0].style.position = "absolute",
                c.pinnedtable[0].style.top = "0px",
                c.pinnedtable[0].style.height = j + "px",
                !La)
                    if (1 == c.tableRows) {
                        c.oldRow = c.table[0].rows[0];
                        try {
                            c.table[0].rows[0] = c.pinnedtable.find("tr")[0]
                        } catch (a) {}
                        Ma = c.pinnedtable.find("tr")[0],
                        c.pinnedTableRow = Ma
                    } else {
                        c.oldRow = c.table[0].rows[1];
                        try {
                            c.table[0].rows[1] = c.pinnedtable.find("tr")[1]
                        } catch (a) {}
                        Ma = c.pinnedtable.find("tr")[1],
                        c.pinnedTableRow = Ma
                    }
                var ba = a(c.table[0].firstChild)
                  , Na = a(c.pinnedtable[0].firstChild);
                c._table = ba,
                c._pinnedtable = Na,
                a.jqx.browser.msie && a.jqx.browser.version < 10 && (c._table[0].style.width = m + "px",
                c._pinnedtable[0].style.width = m + "px"),
                0 === s && (c._table[0].style.width = 2 + m + "px",
                c._pinnedtable[0].style.width = 2 + m + "px"),
                c._table.addClass("jqx-grid-table-one-cell jqx-disableselect"),
                c._pinnedtable.addClass("jqx-grid-table-one-cell jqx-disableselect"),
                c.rowByCell = new Array,
                c.columnCells = new Array,
                c.cellWidth = 0,
                c.cellHeight = 0;
                for (var Oa = c.table[0].rows.length, ja = 0; ja < Oa; ja++) {
                    var Pa = c.table[0].rows[ja];
                    if (0 == ja && Ma && (Pa = Ma),
                    !Pa.getAttribute("data-group-row")) {
                        var ka = new b;
                        ka.aboveRow = null,
                        ka.belowRow = null,
                        c.rows.length > 0 && (ka.aboveRow = c.rows[c.rows.length - 1],
                        c.rows[c.rows.length - 1].belowRow = ka),
                        ka.element = Pa,
                        c.rows.push(ka);
                        for (var v = 0; v < Pa.cells.length; v++) {
                            var Qa = Pa.cells[v];
                            Qa.getAttribute("data-time-slot") || "none" !== Qa.style.display && (Qa.className.indexOf("jqx-grid-cell-pinned") >= 0 || (c.columnCells[ka.cells.length] || (c.columnCells[ka.cells.length] = new Array),
                            c.columnCells[ka.cells.length].push(Qa),
                            0 == c.cellWidth && (c.cellWidth = Qa.clientWidth),
                            0 == c.cellHeight && (1 == Oa || ja > 1) && (c.cellHeight = Qa.clientHeight),
                            "monthView" == c._views[c._view].type && void 0 == ka.top && (ka.top = parseInt(a(Qa).position().top)),
                            ka.cells.push(Qa),
                            c.rowByCell[Qa.getAttribute("data-key")] = ka))
                        }
                    }
                }
                0 === s && (c._table[0].style.tableLayout = "auto"),
                c._renderAppointments(g, h),
                ("none" != c.pinnedtable[0].style.display || ("dayView" == d || "weekView" == d) && c.tableRows > 1) && c._updateScrollbars(c.host.height()),
                "monthView" === d && e.monthRowAutoHeight && (0 == i.length ? c._renderrows() : c._updateScrollbars(c.host.height())),
                c.rendered && c.rendered(),
                c.renderedTime = new Date
            }
        },
        showAppointmentsByResource: function(a) {
            for (var b = this, c = 0; c < b.uiappointments.length; c++) {
                var d = b.uiappointments[c];
                if (d.resourceId == a && (d.hidden = !1,
                d.hiddenByResourceId = !1,
                d.exceptions))
                    for (var e = 0; e < d.exceptions.length; e++)
                        d.exceptions[e].hiddenByResourceId = !1,
                        d.exceptions[e].hidden = !1
            }
            if (b._resourcesElements) {
                var f = b.getColors(b._resources.indexOf(a));
                b._resourcesElements.top[a].attr("data-toggle", "on"),
                b._resourcesElements.top[a].css("background", f.background),
                b._resourcesElements.bottom[a].attr("data-toggle", "on"),
                b._resourcesElements.bottom[a].css("background", f.background)
            }
            b.hiddenResources && delete b.hiddenResources[a],
            b._renderrows()
        },
        hideAppointmentsByResource: function(a) {
            for (var b = this, c = 0; c < b.uiappointments.length; c++) {
                var d = b.uiappointments[c];
                if (d.resourceId == a && (d.hidden = !0,
                d.hiddenByResourceId = !0,
                d.exceptions))
                    for (var e = 0; e < d.exceptions.length; e++)
                        d.exceptions[e].hiddenByResourceId = !0,
                        d.exceptions[e].hidden = !0
            }
            b._resourcesElements && (b._resourcesElements.top[a].attr("data-toggle", "off"),
            b._resourcesElements.top[a].css("background", "transparent"),
            b._resourcesElements.bottom[a].attr("data-toggle", "off"),
            b._resourcesElements.bottom[a].css("background", "transparent")),
            b.hiddenResources || (b.hiddenResources = new Array),
            b.hiddenResources[a] = !0,
            b._renderrows()
        },
        _prepareAppointmentsInView: function(b, c) {
            var d = this;
            if (!d._appupdating) {
                for (var e = new Array, f = 0; f < this.uiappointments.length; f++) {
                    var g = this.uiappointments[f];
                    if (!g.hidden || null != g.recurrencePattern) {
                        var h = a.jqx.scheduler.utilities.rangeIntersection(g.from, g.to, b, c);
                        h && !g.recurrencePattern && e.push(g),
                        g.renderedAppointments = new Array;
                        var i = !1;
                        if (g.recurrencePattern) {
                            for (var j = g.getOccurrences(b, c), k = g.exceptions, l = 0; l < j.length; l++) {
                                var m = j[l];
                                if (!m.hidden) {
                                    for (var n = !0, o = 0; o < k.length; o++) {
                                        var p = k[o]
                                          , q = p.occurrenceFrom ? p.occurrenceFrom : p;
                                        if (d.selectedJQXAppointment && d.selectedJQXAppointment.rootAppointment && !i && d.selectedJQXAppointment.occurrenceFrom.clearTime().equals(q.clearTime()) && (d.selectedJQXAppointment = p,
                                        i = !0),
                                        q.clearTime().equals(m.from.clearTime())) {
                                            n = !1;
                                            break
                                        }
                                    }
                                    n && (d.selectedJQXAppointment && d.selectedJQXAppointment.rootAppointment && !i && d.selectedJQXAppointment.occurrenceFrom.clearTime().equals(m.occurrenceFrom.clearTime()) && (d.selectedJQXAppointment = m,
                                    i = !0),
                                    g.renderedAppointments[m.id] = m,
                                    e.push(m))
                                }
                            }
                            for (var o = 0; o < k.length; o++) {
                                var p = k[o]
                                  , q = p.occurrenceFrom ? p.from : p
                                  , r = g.createOccurrence(q);
                                p.occurrenceFrom && (p.cloneAppointmentAttributes(r),
                                p.hidden) || r != g && (e.push(p),
                                g.renderedAppointments[p.id] = p)
                            }
                        }
                    }
                }
                var s = new Array;
                this.tabKeyAppointments = new Array;
                for (var f = 0; f < e.length; f++) {
                    var t = e[f];
                    s.push(t),
                    this.tabKeyAppointments.push(t)
                }
                s.sort(this._sortAppointmentsByFrom),
                this._resources.length > 0 ? this.tabKeyAppointments.sort(function(a, b) {
                    return d._sortAppointmentsByResourceId(a, b, d)
                }) : this.tabKeyAppointments.sort(this._sortAppointmentsByFrom),
                this.appointmentsToRender = s
            }
        },
        _renderDayWeekAppointments: function() {
            var b = this
              , c = (b._views[b._view].type,
            b._views[b._view])
              , d = new Array
              , e = new Array
              , f = this.rows
              , g = b.showAllDayRow
              , h = b.getMinutesPerScale();
            c.timeRuler && void 0 != c.timeRuler.showAllDayRow && (g = c.timeRuler.showAllDayRow);
            for (var i = 0; i < this.appointmentsToRender.length; i++) {
                var j = this.appointmentsToRender[i]
                  , k = j.from
                  , l = j.to
                  , m = a.jqx.scheduler.utilities.getEndOfDay(l)
                  , n = k.day()
                  , o = (j.allDay,
                b._getDateByString)
                  , p = new Array
                  , q = new Array
                  , r = j.resourceId
                  , s = b._resources.indexOf(r);
                b.resources && "none" == b.resources.orientation && (s = -1);
                var t = k.toDate().valueOf()
                  , u = l.toDate().valueOf()
                  , v = (m.toDate().valueOf(),
                function(a, b) {
                    return a.date < b.date ? -1 : a.date == b.date ? 0 : a.date > b.date ? 1 : void 0
                }
                );
                if (!j.allDay && j.duration().days() < 1 || !g) {
                    var w = l.toDate()
                      , x = !1;
                    0 == w.getHours() && 0 == w.getMinutes() && (x = !0);
                    for (var y = 0; y < b.columnCells.length; y++)
                        if (b.columnCells[y]) {
                            var z = b.columnCells[y];
                            b.rtl && (z = b.columnCells[b.columnCells.length - 1 - y]);
                            for (var A = 0; A < z.length; A++)
                                if (!z[A].getAttribute("data-end-date")) {
                                    var B = z[A].getAttribute("data-date")
                                      , C = o(B)
                                      , D = o(B);
                                    D.setMinutes(D.getMinutes() + h - 1);
                                    var E = C.valueOf()
                                      , F = D.valueOf();
                                    if (!(E > l) && (t <= E && E < u || t <= F && F < u || t >= E && F >= u)) {
                                        if (s != -1 && 1 + s != z[A].getAttribute("data-view"))
                                            continue;
                                        n != C.getDate() && (p.sort(v),
                                        q.push(p),
                                        p = new Array,
                                        n = k.addDays(1).day()),
                                        p.push({
                                            cell: z[A],
                                            date: C
                                        })
                                    }
                                }
                        }
                    p.sort(v),
                    q.push(p);
                    for (var G = new Array, y = 0; y < q.length; y++) {
                        var z = q[y];
                        if (0 != z.length) {
                            var H = b.cellWidth
                              , I = z[z.length - 1].cell.offsetTop + b.cellHeight
                              , J = z[0].cell.offsetLeft
                              , K = z[0].cell.offsetTop
                              , L = b.getMinutesPerScale()
                              , w = new a.jqx.date(z[z.length - 1].date,b.timeZone).addMinutes(L)
                              , M = {
                                cells: z,
                                x: J,
                                y: K,
                                height: I - K,
                                width: H,
                                appointment: j,
                                from: new a.jqx.date(z[0].date,b.timeZone),
                                to: w
                            };
                            G.push(M),
                            d.push(M)
                        }
                    }
                    j.elements = G,
                    j.rootAppointment && (j.rootAppointment.elements = j.rootAppointment.elements.concat(j.elements))
                } else {
                    var z = f[0].cells;
                    if (this.tableRows > 1) {
                        var N = f.length / b.tableRows
                          , O = s * N;
                        z = f[O].cells
                    }
                    for (var A = 0; A < z.length; A++) {
                        var B = z[A].getAttribute("data-date")
                          , P = o(B)
                          , C = new a.jqx.date(P,b.timeZone);
                        C = a.jqx.scheduler.utilities.getEndOfDay(C);
                        var E = C.toDate().valueOf();
                        if (!(E > m) && k <= C && C <= m) {
                            if (s != -1 && 1 + s != z[A].getAttribute("data-view"))
                                continue;
                            0 == p.length && (C = a.jqx.scheduler.utilities.getStartOfDay(C)),
                            p.push({
                                cell: z[A],
                                date: C
                            })
                        }
                    }
                    p.sort(v),
                    q.push(p);
                    for (var G = new Array, y = 0; y < q.length; y++) {
                        var z = q[y];
                        if (0 == z.length)
                            break;
                        var Q = a(z[0].cell).position()
                          , H = a(z[z.length - 1].cell).position().left + this.cellWidth - Q.left
                          , I = a(z[z.length - 1].cell).position().top
                          , J = Q.left
                          , K = Q.top;
                        if (this.rtl)
                            var Q = a(z[z.length - 1].cell).position()
                              , J = Q.left
                              , H = a(z[0].cell).position().left + this.cellWidth - Q.left;
                        var R = z[z.length - 1].date;
                        R = new a.jqx.date(a.jqx.scheduler.utilities.getEndOfDay(R),b.timeZone);
                        var M = {
                            cells: z,
                            x: J,
                            y: K,
                            height: I - K + this.cellHeight,
                            width: H,
                            appointment: j,
                            from: a.jqx.scheduler.utilities.getStartOfDay(new a.jqx.date(z[0].date,b.timeZone)),
                            to: R
                        };
                        G.push(M),
                        e.push(M)
                    }
                    j.elements = G,
                    j.rootAppointment && (j.rootAppointment.elements = j.rootAppointment.elements.concat(j.elements))
                }
            }
            var S = this.getViewStart()
              , T = this.getViewEnd();
            if (this._resources.length < 2 || "none" == this.resources.orientation) {
                for (var U = new Array, V = S, W = 0; V < T; ) {
                    U[W] = new Array;
                    for (var y = 0; y < d.length; y++) {
                        var X = d[y];
                        X.from.day() == V.day() && (X.column = -1,
                        X.columnSpan = 1,
                        U[W].push(X))
                    }
                    W++,
                    V = V.addDays(1)
                }
                for (var y = 0; y < U.length; y++)
                    this._renderAppointmentsInDay(U[y]);
                this._renderAllDayAppointments(e)
            } else
                for (var A = 0; A < this._resources.length; A++) {
                    for (var Y = this._resources[A], U = new Array, V = S, W = 0; V < T; ) {
                        U[W] = new Array;
                        for (var y = 0; y < d.length; y++) {
                            var X = d[y];
                            X.from.day() == V.day() && (X.column = -1,
                            X.columnSpan = 1,
                            X.appointment.resourceId == Y && U[W].push(X))
                        }
                        W++,
                        V = V.addDays(1)
                    }
                    for (var y = 0; y < U.length; y++)
                        this._renderAppointmentsInDay(U[y]);
                    for (var Z = new Array, y = 0; y < e.length; y++)
                        e[y].appointment.resourceId == Y && Z.push(e[y]);
                    this._renderAllDayAppointments(Z)
                }
        },
        _renderAllDayAppointments: function(b) {
            var c = this
              , d = this.showAllDayRow
              , e = this._views[this._view];
            if (e.timeRuler && void 0 != e.timeRuler.showAllDayRow && (d = e.timeRuler.showAllDayRow),
            d && 0 != b.length) {
                var f = b
                  , g = 1;
                if (g = this.getMaxAllDayAppointments(b),
                1 == this.tableRows) {
                    this.table[0].rows[0].clientHeight / g
                } else {
                    this.table[0].rows[1].clientHeight / g
                }
                for (var h = 0; h < b.length; h++) {
                    var i = b[h];
                    i.row = -1;
                    var j = this.getCollisionAppointments(i, b);
                    j.sort(this._sortAppointmentsByFrom);
                    var k = j.indexOf(i);
                    if (k >= 0)
                        for (var l = k; l < j.length; l++)
                            j[l].row = -1;
                    for (var m = 0; m < g; m++) {
                        var n = m;
                        for (var o in j) {
                            if ("indexOf" == o)
                                break;
                            var p = j[o];
                            if (p.row == -1 && !this.isBusyRow(n, j)) {
                                p.row = n;
                                var q = g
                                  , r = this.getMaxAllDayAppointments(j);
                                q > r && (q = r),
                                p.rowsCount = q
                            }
                        }
                    }
                }
                for (var m = 0; m < f.length; m++) {
                    var i = f[m]
                      , j = this.getCollisionAppointments(i, f);
                    j.sort(this._sortAppointmentsByFrom);
                    var s = 1;
                    for (var o in j) {
                        if ("indexOf" == o)
                            break;
                        var t = j[o];
                        s = Math.max(s, t.rowsCount)
                    }
                    for (var o in j) {
                        if ("indexOf" == o)
                            break;
                        var t = j[o];
                        t.rowsCount = s
                    }
                    if (1 == j.length)
                        i.rowSpan = s;
                    else {
                        for (var u = 0, v = !0, l = i.row; l < s; l++) {
                            for (var o in j) {
                                if ("indexOf" == o)
                                    break;
                                var p = j[o];
                                p != i && p.row == l && (v = !1)
                            }
                            if (!v)
                                break;
                            u++
                        }
                        i.rowSpan = u
                    }
                }
                var w = c.appointmentsMinHeight + 2;
                if (c.isTouchDevice())
                    var w = c.touchAppointmentsMinHeight + 2;
                for (var x = 0; x < f.length; x++) {
                    var y = w
                      , i = f[x];
                    i.height = w;
                    var z = y * i.row;
                    if (i.y = 18 + i.y + z + 4 * i.row,
                    i.x += 3,
                    i.width -= 8,
                    0 != i.appointment.from.hour() || 23 != i.appointment.to.hour()) {
                        var A = this.getViewStart()
                          , B = this.getViewEnd();
                        if (c.rtl) {
                            var C = parseFloat(c.cellWidth / 24) * i.appointment.to.hour() + parseFloat(c.cellWidth / 48) * (i.appointment.to.minute() / 30)
                              , D = parseFloat(c.cellWidth / 24) * i.appointment.from.hour() + parseFloat(c.cellWidth / 48) * (i.appointment.from.minute() / 30);
                            C > 0 && (C = c.cellWidth - C),
                            i.appointment.from < A && (D = 0),
                            i.appointment.to > B && (C = 0),
                            "exactTime" == e.appointmentsRenderMode && (i.x += C,
                            i.width -= C,
                            i.width -= D),
                            i.appointment.duration().days() < 1 && i.width < 15 && (i.width = 15),
                            i.timewidth = i.width,
                            "exactTimeStatus" == e.appointmentsRenderMode && (i.timewidth -= C,
                            i.timewidth -= D),
                            i.timex = C
                        } else {
                            var C = parseFloat(c.cellWidth / 24) * i.appointment.from.hour() + parseFloat(c.cellWidth / 48) * (i.appointment.from.minute() / 30);
                            i.appointment.from < A && (C = 0),
                            i.timewidth = i.width,
                            i.timex = C;
                            var D = parseFloat(c.cellWidth / 24) * i.appointment.to.hour() + parseFloat(c.cellWidth / 48) * (i.appointment.to.minute() / 30);
                            i.appointment.to > B && (D = 0),
                            i.timewidth -= C,
                            D > 0 && (i.timewidth -= c.cellWidth,
                            i.timewidth += D),
                            "exactTime" == e.appointmentsRenderMode && (i.width = i.timewidth,
                            i.x += C)
                        }
                    }
                }
                for (var x = 0; x < f.length; x++) {
                    var E = f[x]
                      , F = ""
                      , G = "auto"
                      , e = this._views[this._view]
                      , H = E.appointment.from
                      , I = E.appointment.to;
                    e.timeRuler && e.timeRuler.formatString && (G = e.timeRuler.formatString);
                    var J = G;
                    if ("auto" === G) {
                        if (0 == H.hour() && 0 == H.minute() || 12 == H.hour() && 0 == H.minute())
                            var J = "hh tt";
                        else
                            var J = "hh:mm";
                        if (0 == I.hour() && 0 == I.minute() || 12 == I.hour() && 0 == I.minute())
                            var K = "hh tt";
                        else
                            var K = "hh:mm"
                    }
                    var L = H.toString(J)
                      , M = I.toString(K)
                      , N = E.appointment.duration()
                      , O = E.appointment.allDay || 23 === N.hours && 59 === N.minutes && 59 === N.seconds
                      , P = E.appointment.background
                      , Q = E.appointment.subject ? E.appointment.subject : "(No Title)"
                      , R = E.appointment.color
                      , S = E.appointment.resourceId
                      , T = c.getColors(c._resources.indexOf(S))
                      , U = " data-resourceId='" + S + "' "
                      , V = E.appointment.borderColor
                      , W = E.appointment.location;
                    W.length > 0 && (W = ", " + W),
                    P || (P = T.background),
                    V || (V = T.border),
                    R || (R = T.color);
                    var X = E.appointment.isRecurrentAppointment()
                      , Y = E.appointment.isException();
                    O && (L = "",
                    M = "");
                    var Z = ""
                      , $ = c.toTP("jqx-scheduler-appointment-status")
                      , _ = ""
                      , aa = c.statuses[E.appointment.status]
                      , ba = !1;
                    aa && ("transparent" == aa ? ba = !1 : (_ = "<div style='background: " + aa + "; border-right-color: " + V + "' class='" + $ + "'></div>",
                    "tentative" == aa && ($ = c.toTP("jqx-scheduler-appointment-status jqx-scheduler-appointment-status-stripes"),
                    _ = "<div style='background-color: " + V + "; border-right-color: " + V + "' class='" + $ + "'></div>"),
                    ba = !0));
                    var ca = c.toTP("jqx-scheduler-appointment-duration-status")
                      , da = "<div style='width: " + E.timewidth + "px; left: " + E.timex + "px;' class='" + ca + "'></div>";
                    O && (da = "");
                    var ea = "";
                    if ("exactTimeStatus" != e.appointmentsRenderMode && (da = ""),
                    c.rtl) {
                        var $ = c.toTP("jqx-scheduler-appointment-status-rtl jqx-scheduler-appointment-status");
                        _ = "<div style='background: " + aa + "; border-left-color: " + V + "' class='" + $ + "'></div>",
                        "tentative" == aa && ($ = c.toTP("jqx-scheduler-appointment-status-rtl jqx-scheduler-appointment-status jqx-scheduler-appointment-status-stripes"),
                        _ = "<div style='background-color: " + V + "; border-left-color: " + V + "' class='" + $ + "'></div>"),
                        ea = _,
                        _ = ""
                    }
                    var fa = ""
                      , ga = Q + W;
                    if (O || (ga = Q + W + da),
                    c.renderAppointment) {
                        var ha = c.renderAppointment({
                            appointment: E.appointment.boundAppointment,
                            textColor: R,
                            background: P,
                            borderColor: V,
                            html: ga,
                            cssClass: "",
                            style: "",
                            width: E.width,
                            height: E.height,
                            view: c._views[c._view].type
                        });
                        if (ha) {
                            var F = ha.html;
                            if (F != ga && (ga = F),
                            R = ha.textColor,
                            P = ha.background,
                            V = ha.borderColor,
                            ha.cssClass && (fa = ha.cssClass + " "),
                            "" != ha.style) {
                                var T = c.getAppointmentColors(ha.style);
                                P = T.background,
                                V = T.border,
                                R = T.color
                            }
                        }
                    }
                    if ("" === Z)
                        if (ba)
                            var Z = "<div style='white-space:nowrap;' class='" + c.toTP("jqx-scheduler-appointment-content") + "'>" + _ + "<div class='" + c.toTP("jqx-scheduler-appointment-inner-content") + "'>" + ga + "</div>" + ea + "</div>";
                        else
                            var Z = "<div style='white-space:nowrap;' class='" + c.toTP("jqx-scheduler-appointment-content") + "'><div class='" + c.toTP("jqx-scheduler-appointment-inner-content") + "'>" + ga + "</div></div>";
                    var ia = "";
                    if (c.rtl && (ia = c.toTP("jqx-rtl jqx-scheduler-appointment-rtl") + " "),
                    Y) {
                        var ja = "white" == R.toLowerCase() ? c.toTP("jqx-icon-recurrence-exception-white") : c.toTP("jqx-icon-recurrence-exception");
                        F = "<div data-key='" + E.appointment.id + "'" + U + "class='" + ia + fa + c.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + E.x + "px; top: " + E.y + "px; width: " + E.width + "px; line-height: " + E.height + "px; height: " + E.height + "px; border-color:" + V + "; color:" + R + "; background:" + P + ";'><div class='" + ja + "'></div>" + Z + "<div class='" + c.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-left-resize-indicator") + "'></div><div class='" + c.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-right-resize-indicator") + "'></div>"
                    } else if (X) {
                        var ka = "white" == R.toLowerCase() ? c.toTP("jqx-icon-recurrence-white") : c.toTP("jqx-icon-recurrence");
                        F = "<div data-key='" + E.appointment.id + "'" + U + "class='" + ia + fa + c.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + E.x + "px; top: " + E.y + "px; width: " + E.width + "px; line-height: " + E.height + "px; height: " + E.height + "px; border-color:" + V + "; color:" + R + "; background:" + P + ";'><div class='" + ka + "'></div>" + Z + "<div class='" + c.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-left-resize-indicator") + "'></div><div class='" + c.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-right-resize-indicator") + "'></div>"
                    } else
                        F = "<div data-key='" + E.appointment.id + "'" + U + "class='" + ia + fa + c.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + E.x + "px; top: " + E.y + "px; width: " + E.width + "px; line-height: " + E.height + "px; height: " + E.height + "px; border-color:" + V + "; color:" + R + "; background:" + P + ";'>" + Z + "<div class='" + c.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-left-resize-indicator") + "'></div><div class='" + c.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-right-resize-indicator") + "'></div>";
                    var la = a(F);
                    if (1 == this.tableRows ? la.appendTo(this.pinnedtable) : la.appendTo(this.table),
                    E.element = la,
                    this.appointmentTooltips)
                        if (E.appointment.tooltip)
                            la[0].setAttribute("title", E.appointment.tooltip);
                        else {
                            var ma = E.appointment.subject;
                            if (L && (ma = L + " - " + M + " " + ma),
                            ma) {
                                var W = E.appointment.location;
                                W && (ma += "\n" + W),
                                la[0].setAttribute("title", ma)
                            }
                        }
                }
            }
        },
        _renderAppointmentsInDay: function(b, c) {
            if (0 != b.length) {
                var d = this
                  , e = this._views[this._view]
                  , f = b
                  , g = (this.getViewStart(),
                this.getViewEnd(),
                1)
                  , h = 0;
                e.timeRuler ? (h = this.columns.records[1].width,
                e.timeRuler.timeZones && (h = this.columns.records[1 + e.timeRuler.timeZones.length].width)) : h = this.columns.records[1].width,
                g = this.getMaxColumnsInADay(b);
                var i = h / g;
                if (!(i < 0)) {
                    for (var j = 0; j < b.length; j++) {
                        var k = b[j];
                        k.column = -1;
                        var l = this.getCollisionAppointments(k, b);
                        l.sort(this._sortAppointmentsByFrom);
                        var m = l.indexOf(k);
                        if (m >= 0)
                            for (var n = m; n < l.length; n++)
                                l[n].column = -1;
                        for (var o = 0; o < g; o++) {
                            var p = o;
                            for (var q in l) {
                                if ("indexOf" == q)
                                    break;
                                var r = l[q];
                                if (r.column == -1 && !this.isBusyColumn(p, l)) {
                                    r.column = p;
                                    var s = g
                                      , t = this.getMaxColumnsInADay(l);
                                    s > t && (s = t),
                                    r.columnsCount = s
                                }
                            }
                        }
                    }
                    for (var o = 0; o < f.length; o++) {
                        var k = f[o]
                          , l = this.getCollisionAppointments(k, f);
                        l.sort(this._sortAppointmentsByFrom);
                        var u = 1;
                        for (var q in l) {
                            if ("indexOf" == q)
                                break;
                            var v = l[q];
                            void 0 != v.columnsCount && (u = Math.max(u, v.columnsCount))
                        }
                        for (var q in l) {
                            if ("indexOf" == q)
                                break;
                            var v = l[q];
                            v.columnsCount = u
                        }
                        if (1 == l.length)
                            k.columnSpan = u;
                        else {
                            for (var w = 0, x = !0, n = k.column; n < u; n++) {
                                for (var q in l) {
                                    if ("indexOf" == q)
                                        break;
                                    var r = l[q];
                                    void 0 != r.column && r != k && r.column == n && (x = !1)
                                }
                                if (!x)
                                    break;
                                w++
                            }
                            k.columnSpan = w
                        }
                    }
                    for (var y = 0; y < f.length; y++) {
                        var z = h / f[y].columnsCount
                          , k = f[y];
                        k.width = -5 + z * k.columnSpan;
                        var A = z * k.column;
                        if (k.x = 2 + k.x + A,
                        k.height -= 5,
                        k.y += 1,
                        "exactTime" == e.appointmentsRenderMode) {
                            var B = d.getMinutesPerScale();
                            if (k.appointment.from.minute() % B != 0)
                                var C = k.appointment.from.minute() % B
                                  , D = parseFloat(d.cellHeight / B) * C;
                            else
                                var D = 0;
                            if (k.appointment.to.minute() % B != 0) {
                                var C = k.appointment.to.minute() % B
                                  , E = d.cellHeight - parseFloat(d.cellHeight / B) * C;
                                k.to.day() !== k.appointment.to.day() && (E = 0)
                            } else
                                E = 0;
                            k.y += D,
                            k.height -= D,
                            k.height -= E
                        }
                    }
                    for (var y = 0; y < f.length; y++) {
                        var F = f[y]
                          , G = ""
                          , H = "auto"
                          , e = this._views[this._view]
                          , I = F.appointment.from
                          , J = F.appointment.to;
                        e.timeRuler && e.timeRuler.formatString && (H = e.timeRuler.formatString);
                        var K = H;
                        if ("auto" === H) {
                            if (0 == I.hour() && 0 == I.minute() || 12 == I.hour() && 0 == I.minute())
                                var K = "hh tt";
                            else
                                var K = "hh:mm";
                            if (0 == J.hour() && 0 == J.minute() || 12 == J.hour() && 0 == J.minute())
                                var L = "hh tt";
                            else
                                var L = "hh:mm"
                        }
                        var M = (I.toString(K),
                        J.toString(L),
                        F.appointment.background)
                          , N = F.appointment.subject ? F.appointment.subject : "(No Title)"
                          , O = F.appointment.location ? F.appointment.location : ""
                          , P = F.appointment.color
                          , Q = F.appointment.resourceId
                          , R = d.getColors(d._resources.indexOf(Q))
                          , S = " data-resourceId='" + Q + "' "
                          , T = F.appointment.borderColor;
                        M || (M = R.background),
                        T || (T = R.border),
                        P || (P = R.color);
                        var U = F.appointment.isRecurrentAppointment()
                          , V = F.appointment.isException()
                          , W = ""
                          , X = d.toTP("jqx-scheduler-appointment-status")
                          , Y = ""
                          , Z = d.statuses[F.appointment.status]
                          , $ = !1;
                        Z && ("transparent" == Z ? $ = !1 : (Y = "<div style='background: " + Z + "; border-right-color: " + T + "' class='" + X + "'></div>",
                        "tentative" == Z && (X = d.toTP("jqx-scheduler-appointment-status jqx-scheduler-appointment-status-stripes"),
                        Y = "<div style='background-color: " + T + "; border-right-color: " + T + "' class='" + X + "'></div>"),
                        $ = !0));
                        var _ = "";
                        if (d.rtl) {
                            var X = d.toTP("jqx-scheduler-appointment-status-rtl jqx-scheduler-appointment-status");
                            Y = "<div style='background: " + Z + "; border-left-color: " + T + "' class='" + X + "'></div>",
                            "tentative" == Z && (X = d.toTP("jqx-scheduler-appointment-status-rtl jqx-scheduler-appointment-status jqx-scheduler-appointment-status-stripes"),
                            Y = "<div style='background-color: " + T + "; border-left-color: " + T + "' class='" + X + "'></div>"),
                            _ = Y,
                            Y = ""
                        }
                        var aa = ""
                          , ba = N + "<br/>" + O;
                        if (!O)
                            var ba = N;
                        if (d.renderAppointment) {
                            var ca = d.renderAppointment({
                                appointment: F.appointment.boundAppointment,
                                textColor: P,
                                background: M,
                                borderColor: T,
                                html: ba,
                                cssClass: "",
                                style: "",
                                width: F.width,
                                height: F.height,
                                view: d._views[d._view].type
                            });
                            if (ca) {
                                var G = ca.html;
                                if (G != ba && (ba = G),
                                P = ca.textColor,
                                M = ca.background,
                                T = ca.borderColor,
                                ca.cssClass && (aa = ca.cssClass + " "),
                                "" != ca.style) {
                                    var R = d.getAppointmentColors(ca.style);
                                    M = R.background,
                                    T = R.border,
                                    P = R.color
                                }
                            }
                        }
                        if ("" === W)
                            if ($)
                                var W = "<div class='" + d.toTP("jqx-scheduler-appointment-content") + "'>" + Y + "<div class='" + d.toTP("jqx-scheduler-appointment-inner-content") + "'>" + ba + "</div>" + _ + "</div>";
                            else
                                var W = "<div class='" + d.toTP("jqx-scheduler-appointment-content") + "'><div class='" + d.toTP("jqx-scheduler-appointment-inner-content") + "'>" + ba + "</div></div>";
                        var da = "";
                        if (d.rtl && (da = d.toTP("jqx-rtl jqx-scheduler-appointment-rtl") + " "),
                        V) {
                            var ea = "white" == P.toLowerCase() ? d.toTP("jqx-icon-recurrence-exception-white") : d.toTP("jqx-icon-recurrence-exception");
                            G = "<div data-key='" + F.appointment.id + "'" + S + "class='" + da + aa + d.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + F.x + "px; top: " + F.y + "px; width: " + F.width + "px; height: " + F.height + "px; border-color:" + T + "; color:" + P + "; background:" + M + ";'><div class='" + ea + "'></div>" + W + "<div class='" + d.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-top-resize-indicator") + "'></div><div class='" + d.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-bottom-resize-indicator") + "'></div></div>"
                        } else if (U) {
                            var fa = "white" == P.toLowerCase() ? d.toTP("jqx-icon-recurrence-white") : d.toTP("jqx-icon-recurrence");
                            G = "<div data-key='" + F.appointment.id + "'" + S + "class='" + da + aa + d.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + F.x + "px; top: " + F.y + "px; width: " + F.width + "px; height: " + F.height + "px; border-color:" + T + "; color:" + P + "; background:" + M + ";'><div class='" + fa + "'></div>" + W + "<div class='" + d.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-top-resize-indicator") + "'></div><div class='" + d.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-bottom-resize-indicator") + "'></div></div>"
                        } else
                            G = "<div data-key='" + F.appointment.id + "'" + S + "class='" + da + aa + d.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + F.x + "px; top: " + F.y + "px; width: " + F.width + "px; height: " + F.height + "px; border-color:" + T + "; color:" + P + "; background:" + M + ";'>" + W + "<div class='" + d.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-top-resize-indicator") + "'></div><div class='" + d.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-bottom-resize-indicator") + "'></div></div>";
                        var ga = a(G);
                        if (ga.appendTo(this.table),
                        F.element = ga,
                        this.appointmentTooltips)
                            if (F.appointment.tooltip)
                                ga[0].setAttribute("title", F.appointment.tooltip);
                            else {
                                var ha = F.appointment.subject;
                                if (ha) {
                                    var O = F.appointment.location;
                                    O && (ha += "\n" + O),
                                    ga[0].setAttribute("title", ha)
                                }
                            }
                    }
                }
            }
        },
        getCollisionAppointments: function(b, c) {
            for (var d = new Array, e = b.from, f = b.to, g = 0; g < c.length; g++) {
                var h = c[g]
                  , i = h.from
                  , j = h.to;
                a.jqx.scheduler.utilities.rangeIntersection(e, f, i, j) && d.push(h)
            }
            return d
        },
        getAllDayCollisionAppointments: function(b, c) {
            for (var d = new Array, e = a.jqx.scheduler.utilities.getStartOfDay(b.from), f = a.jqx.scheduler.utilities.getEndOfDay(b.to), g = 0; g < c.length; g++) {
                var h = c[g]
                  , i = a.jqx.scheduler.utilities.getStartOfDay(h.from)
                  , j = a.jqx.scheduler.utilities.getEndOfDay(h.to);
                a.jqx.scheduler.utilities.rangeIntersection(e, f, i, j) && d.push(h)
            }
            return d
        },
        _renderAppointments: function(a, b) {
            var c = this;
            if (!c._appupdating) {
                c.table.find(".jqx-scheduler-appointment").remove(),
                c.pinnedtable.find(".jqx-scheduler-appointment").remove();
                var d = c._views[c._view].type;
                "dayView" === d || "weekView" === d ? c._renderDayWeekAppointments(a, b) : "monthView" === d ? c._renderMonthAppointments(a, b) : "timelineWeekView" !== d && "timelineDayView" !== d && "timelineMonthView" !== d || c._renderTimelineAppointments(a, b),
                c.selectedJQXAppointment && c._selectAppointment(c.selectedJQXAppointment)
            }
        },
        _renderTimelineAppointments: function(b, c) {
            for (var d = this, e = d._views[d._view].type, f = d._views[d._view], g = new Array, h = (this.rows,
            this.cellHeight), i = this.cellWidth, j = d.getMinutesPerScale(), k = 0; k < this.appointmentsToRender.length; k++) {
                var l = this.appointmentsToRender[k]
                  , m = l.from
                  , n = l.to
                  , o = d._getDateByString
                  , p = new Array
                  , q = m.toDate().valueOf()
                  , r = n.toDate().valueOf();
                "timelineMonthView" === e && (q = m.clearTime().toDate().valueOf());
                var s = function(a, b) {
                    return a.date < b.date ? -1 : a.date == b.date ? 0 : a.date > b.date ? 1 : void 0
                }
                  , t = d.rows[0]
                  , u = l.resourceId
                  , v = d._resources.indexOf(u);
                if (d._resources.length > 0 && "horizontal" !== d.resources.orientation && v >= 1 && (t = d.rows[v]),
                d.resources && "none" == d.resources.orientation) {
                    v = -1;
                    var t = d.rows[0]
                }
                for (var w = t.cells, x = 0; x < w.length; x++) {
                    var y = w[x].getAttribute("data-date");
                    w[x].appointments = new Array;
                    var z = o(y)
                      , A = z.valueOf()
                      , B = o(y);
                    B.setMinutes(B.getMinutes() + j - 1);
                    var C = B.valueOf();
                    if (!(A > n) && (q <= A && A < r || q <= C && C < r)) {
                        if (v != -1 && 1 + v != w[x].getAttribute("data-view"))
                            continue;
                        p.push({
                            cell: w[x],
                            date: z
                        }),
                        t = O
                    }
                }
                p.sort(s);
                var D = new Array
                  , w = p;
                if (0 == w.length)
                    break;
                var E = d.appointmentsMinHeight;
                d.isTouchDevice() && (E = d.touchAppointmentsMinHeight),
                f.appointmentHeight && (E = f.appointmentHeight);
                var F = a(w[0].cell).position()
                  , G = E
                  , H = a(w[w.length - 1].cell).position().left - F.left + i
                  , I = F.left
                  , J = F.top;
                if (d.rtl)
                    var F = a(w[w.length - 1].cell).position()
                      , H = a(w[0].cell).position().left - F.left + i
                      , I = F.left
                      , J = F.top;
                var K = new a.jqx.date(w[w.length - 1].date,d.timeZone).addMinutes(j);
                if ("timelineMonthView" === e)
                    var K = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(w[w.length - 1].date,d.timeZone));
                var L = {
                    cellX: I,
                    cellY: J,
                    cellHeight: h,
                    cells: w,
                    x: I,
                    y: J,
                    height: G,
                    width: H,
                    appointment: l,
                    from: new a.jqx.date(w[0].date,d.timeZone),
                    to: K
                };
                D.push(L),
                g.push(L),
                l.elements = D,
                l.rootAppointment && (l.rootAppointment.elements = l.rootAppointment.elements.concat(l.elements))
            }
            if (this._resources.length < 2 || "none" == this.resources.orientation)
                this._renderUITimelineAppointments(g, b, c);
            else
                for (var x = 0; x < this._resources.length; x++) {
                    for (var M = this._resources[x], N = new Array, O = 0; O < g.length; O++)
                        g[O].appointment.resourceId == M && N.push(g[O]);
                    this._renderUITimelineAppointments(N, b, c)
                }
        },
        _renderUITimelineAppointments: function(b, c, d) {
            var e = this
              , f = (e._views[e._view].type,
            e._views[e._view])
              , g = b
              , h = 1
              , e = this
              , i = new Array;
            h = e.getMaxTimelineAppointments(b, i, c, d);
            var j = e.appointmentsMinHeight;
            e.isTouchDevice() && (j = e.touchAppointmentsMinHeight),
            f.appointmentHeight && (j = f.appointmentHeight);
            for (var k = 0; k < b.length; k++) {
                var l = b[k];
                l.row = -1;
                var m = e.getCollisionAppointments(l, b);
                m.sort(e._sortAppointmentsByFrom);
                var n = m.indexOf(l);
                if (n >= 0)
                    for (var o = n; o < m.length; o++)
                        m[o].row = -1;
                for (var p = 0; p < h; p++) {
                    var q = p;
                    for (var r in m) {
                        if ("indexOf" == r)
                            break;
                        var s = m[r];
                        if (s.row == -1 && !e.isBusyRow(q, m)) {
                            s.row = q;
                            var t = h
                              , u = e.getMaxTimelineAppointments(m, i, c, d);
                            t > u && (t = u),
                            s.rowsCount = t
                        }
                    }
                }
            }
            for (var p = 0; p < g.length; p++) {
                var l = g[p]
                  , m = e.getCollisionAppointments(l, g);
                m.sort(e._sortAppointmentsByFrom);
                var v = 1;
                for (var r in m) {
                    if ("indexOf" == r)
                        break;
                    var w = m[r];
                    v = Math.max(v, w.rowsCount)
                }
                for (var r in m) {
                    if ("indexOf" == r)
                        break;
                    var w = m[r];
                    w.rowsCount = v
                }
                if (1 == m.length)
                    l.rowSpan = v;
                else {
                    for (var x = 0, y = !0, o = l.row; o < v; o++) {
                        for (var r in m) {
                            if ("indexOf" == r)
                                break;
                            var s = m[r];
                            s != l && s.row == o && (y = !1)
                        }
                        if (!y)
                            break;
                        x++
                    }
                    l.rowSpan = x
                }
            }
            for (var z = 0; z < g.length; z++) {
                var A = j
                  , l = g[z];
                l.height = A;
                var B = 2 + (3 + A) * l.row;
                l.y = l.y + B,
                l.x += 1,
                l.width -= 5;
                var C = e._views[e._view].type
                  , f = e._views[e._view];
                if ("timelineMonthView" == C && f.appointmentsRenderMode) {
                    if (0 != l.appointment.from.hour() || 23 != l.appointment.to.hour())
                        if (e.rtl) {
                            var D = parseFloat(e.cellWidth / 24) * l.appointment.to.hour() + parseFloat(e.cellWidth / 48) * (l.appointment.to.minute() / 30)
                              , E = parseFloat(e.cellWidth / 24) * l.appointment.from.hour() + parseFloat(e.cellWidth / 48) * (l.appointment.from.minute() / 30);
                            D > 0 && (D = e.cellWidth - D),
                            "exactTime" == f.appointmentsRenderMode && (l.x += D,
                            l.width -= D,
                            l.width -= E),
                            l.appointment.duration().days() < 1 && l.width < 15 && (l.width = 15),
                            l.timewidth = l.width,
                            l.timex = D
                        } else {
                            var D = parseFloat(e.cellWidth / 24) * l.appointment.from.hour() + parseFloat(e.cellWidth / 48) * (l.appointment.from.minute() / 30)
                              , E = parseFloat(e.cellWidth / 24) * l.appointment.to.hour() + parseFloat(e.cellWidth / 48) * (l.appointment.to.minute() / 30);
                            if (l.timewidth = l.width,
                            l.timex = D,
                            l.timewidth -= D,
                            l.timewidth -= e.cellWidth,
                            l.timewidth += E,
                            "exactTime" == f.appointmentsRenderMode && (l.width = l.timewidth,
                            l.x += D,
                            l.appointment.duration().days() < 1 && l.width < 15 && (l.width = 15,
                            D + 15 > e.cellWidth))) {
                                var F = e.cellWidth - D - 15;
                                l.x += F
                            }
                        }
                } else if (f.appointmentsRenderMode && "exactTime" == f.appointmentsRenderMode) {
                    var G = e.getMinutesPerScale();
                    if (l.appointment.from.minute() % G != 0) {
                        var H = l.appointment.from.minute() % G
                          , D = parseFloat(e.cellWidth / G) * H;
                        if (e.rtl)
                            var D = parseFloat(e.cellWidth / G) * H
                    } else
                        var D = 0;
                    if (l.appointment.to.minute() % G != 0) {
                        var H = l.appointment.to.minute() % G
                          , E = e.cellWidth - parseFloat(e.cellWidth / G) * H;
                        if (e.rtl)
                            var E = e.cellWidth - parseFloat(e.cellWidth / G) * H
                    } else
                        E = 0;
                    e.rtl ? (l.x += E,
                    l.width -= D,
                    l.width -= E) : (l.x += D,
                    l.width -= D,
                    l.width -= E)
                }
            }
            for (var I = "", z = 0; z < g.length; z++) {
                var J = g[z]
                  , K = ""
                  , L = "auto"
                  , f = e._views[e._view];
                J.appointment.from,
                J.appointment.to;
                f.timeRuler && f.timeRuler.formatString && (L = f.timeRuler.formatString);
                var M = J.appointment.background
                  , N = J.appointment.subject ? J.appointment.subject : "(No Title)"
                  , O = J.appointment.location;
                O && O.length > 1 && (O = ", " + O);
                var P = J.appointment.color
                  , Q = J.appointment.resourceId
                  , R = e.getColors(e._resources.indexOf(Q))
                  , S = " data-resourceId='" + Q + "' "
                  , T = J.appointment.borderColor;
                M || (M = R.background),
                T || (T = R.border),
                P || (P = R.color);
                var U = J.appointment.isRecurrentAppointment()
                  , V = J.appointment.isException()
                  , W = ""
                  , X = e.toTP("jqx-scheduler-appointment-status")
                  , Y = ""
                  , Z = e.statuses[J.appointment.status]
                  , $ = !1;
                Z && ("transparent" == Z ? $ = !1 : (Y = "<div style='background: " + Z + "; border-right-color: " + T + "' class='" + X + "'></div>",
                "tentative" == Z && (X = e.toTP("jqx-scheduler-appointment-status jqx-scheduler-appointment-status-stripes"),
                Y = "<div style='background-color: " + T + "; border-right-color: " + T + "' class='" + X + "'></div>"),
                $ = !0));
                var _ = "";
                if (e.rtl) {
                    var X = e.toTP("jqx-scheduler-appointment-status-rtl jqx-scheduler-appointment-status");
                    Y = "<div style='background: " + Z + "; border-left-color: " + T + "' class='" + X + "'></div>",
                    "tentative" == Z && (X = e.toTP("jqx-scheduler-appointment-status-rtl jqx-scheduler-appointment-status jqx-scheduler-appointment-status-stripes"),
                    Y = "<div style='background-color: " + T + "; border-left-color: " + T + "' class='" + X + "'></div>"),
                    _ = Y,
                    Y = ""
                }
                var aa = ""
                  , ba = N + "<br/>" + O;
                if (e.renderAppointment) {
                    var ca = e.renderAppointment({
                        appointment: J.appointment.boundAppointment,
                        textColor: P,
                        background: M,
                        borderColor: T,
                        html: ba,
                        cssClass: "",
                        style: "",
                        width: J.width,
                        height: J.height,
                        view: e._views[e._view].type
                    });
                    if (ca) {
                        var K = ca.html;
                        if (K != ba && (ba = K),
                        P = ca.textColor,
                        M = ca.background,
                        T = ca.borderColor,
                        ca.cssClass && (aa = ca.cssClass + " "),
                        "" != ca.style) {
                            var R = e.getAppointmentColors(ca.style);
                            M = R.background,
                            T = R.border,
                            P = R.color
                        }
                    }
                }
                if ("" === W)
                    if ($)
                        var W = "<div style='white-space:nowrap;' class='" + e.toTP("jqx-scheduler-appointment-content") + "'>" + Y + "<div class='" + e.toTP("jqx-scheduler-appointment-inner-content") + "'>" + ba + "</div>" + _ + "</div>";
                    else
                        var W = "<div style='white-space:nowrap;' class='" + e.toTP("jqx-scheduler-appointment-content") + "'><div class='" + e.toTP("jqx-scheduler-appointment-inner-content") + "'>" + ba + "</div></div>";
                var da = "";
                if (e.rtl && (da = e.toTP("jqx-rtl jqx-scheduler-appointment-rtl") + " "),
                V) {
                    var ea = "white" == P.toLowerCase() ? e.toTP("jqx-icon-recurrence-exception-white") : e.toTP("jqx-icon-recurrence-exception");
                    K = "<div data-key='" + J.appointment.id + "'" + S + "class='" + da + aa + e.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + J.x + "px; top: " + J.y + "px; width: " + J.width + "px; height: " + J.height + "px; line-height: " + J.height + "px; border-color:" + T + "; color:" + P + "; background:" + M + ";'><div class='" + ea + "'></div>" + W + "<div class='" + e.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-left-resize-indicator") + "'></div><div class='" + e.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-right-resize-indicator") + "'></div>"
                } else if (U) {
                    var fa = "white" == P.toLowerCase() ? e.toTP("jqx-icon-recurrence-white") : e.toTP("jqx-icon-recurrence");
                    K = "<div data-key='" + J.appointment.id + "'" + S + "class='" + da + aa + e.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + J.x + "px; top: " + J.y + "px; width: " + J.width + "px; height: " + J.height + "px; line-height: " + J.height + "px; border-color:" + T + "; color:" + P + "; background:" + M + ";'><div class='" + fa + "'></div>" + W + "<div class='" + e.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-left-resize-indicator") + "'></div><div class='" + e.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-right-resize-indicator") + "'></div>"
                } else
                    K = "<div data-key='" + J.appointment.id + "'" + S + "class='" + da + aa + e.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + J.x + "px; top: " + J.y + "px; width: " + J.width + "px; height: " + J.height + "px; line-height: " + J.height + "px; border-color:" + T + "; color:" + P + "; background:" + M + ";'>" + W + "<div class='" + e.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-left-resize-indicator") + "'></div><div class='" + e.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-right-resize-indicator") + "'></div>";
                I = K;
                var ga = a(K);
                if (ga.appendTo(this.table),
                J.element = ga,
                this.appointmentTooltips)
                    if (J.appointment.tooltip)
                        ga[0].setAttribute("title", J.appointment.tooltip);
                    else {
                        var ha = J.appointment.subject;
                        if (ha) {
                            var O = J.appointment.location;
                            O && (ha += "\n" + O),
                            ga[0].setAttribute("title", ha)
                        }
                    }
            }
            for (var ia = e.table.find(".jqx-scheduler-appointment"), ja = function(a) {
                for (var b = 0; b < ia.length; b++) {
                    var c = ia[b].getAttribute("data-key");
                    if (c == a)
                        return ia[b]
                }
            }, z = 0; z < g.length; z++) {
                var J = g[z]
                  , ga = a(ja(J.appointment.id));
                a.each(J.cells, function(b) {
                    var c = a(this.cell)
                      , d = J.cellY
                      , f = (J.cellX,
                    J.cellHeight);
                    if (c[0].appointments || (c[0].appointments = new Array),
                    c[0].appointments.push({
                        ui: ga,
                        appointment: J
                    }),
                    ga = ga,
                    J.y + J.height >= d + f - 12) {
                        ga[0].style.visibility = "hidden";
                        var g = c.find(".jqx-icon-arrow-down");
                        g.length > 0 && (g[0].style.display = "block",
                        g[0].mousedown = function() {
                            e.openedMonthCellPopup && e.openedMonthCellPopup.remove();
                            var b = a("<div></div>")
                              , g = (new a.jqx.date(c.attr("data-date"),e.timeZone),
                            a("<div class='" + e.toTP("jqx-scheduler-month-cell") + "'><span style='float: right; cursor: pointer; width:16px; height: 16px;' class='" + e.toTP("jqx-icon-close") + "'></span></div>"));
                            g.height(16),
                            g.find("span")[0].mousedown = function() {
                                b.remove()
                            }
                            ,
                            g.addClass(e.toTP("jqx-widget-header")),
                            b.addClass(e.toTP("jqx-widget")),
                            b.addClass(e.toTP("jqx-window")),
                            b.addClass(e.toTP("jqx-scheduler-month-cell-popup")),
                            b.addClass(e.toTP("jqx-popup"));
                            var h = a("<div></div>");
                            b.append(g),
                            b.append(h),
                            h.addClass(e.toTP("jqx-widget-content"));
                            for (var i = c.width(), j = 21, k = 0; k < c[0].appointments.length; k++) {
                                var l = c[0].appointments[k].ui.clone(!0);
                                l.css("left", "3px"),
                                l.css("top", "0px"),
                                l.css("margin-top", "2px"),
                                l.css("position", "relative"),
                                l.css("visibility", "visible"),
                                l.width(i - 6),
                                l.click(function(a) {
                                    var b = e.getJQXAppointmentByElement(e.getAppointmentElement(a.target));
                                    e._raiseEvent("appointmentClick", {
                                        appointment: b.boundAppointment
                                    })
                                }),
                                l.dblclick(function(a) {
                                    var b = e.getJQXAppointmentByElement(e.getAppointmentElement(a.target));
                                    if (!b.readOnly && !e.editRecurrenceDialog.jqxWindow("isOpen") && (!e._editDialog || e._editDialog && !e._editDialog.jqxWindow("isOpen"))) {
                                        var c = e._initDialog(b);
                                        c !== !1 && e._openDialog()
                                    }
                                    e._raiseEvent("appointmentDoubleClick", {
                                        appointment: b.boundAppointment
                                    })
                                }),
                                j += l.outerHeight() + 4,
                                h.append(l)
                            }
                            b.css("overflow", "hidden"),
                            b.css("position", "absolute");
                            var m = e.table.height() - d - 25;
                            m < f && (m = f),
                            b.css("max-height", m),
                            b.height(j),
                            b.width(i),
                            b.css("z-index", "9999");
                            var n = c.position();
                            b.css("top", n.top),
                            b.css("left", n.left),
                            e.table.append(b),
                            e.openedMonthCellPopup = b
                        }
                        )
                    }
                })
            }
        },
        _renderMonthAppointments: function() {
            for (var b = this, c = (b._views[b._view].type,
            b._views[b._view]), d = new Array, e = (this.rows,
            a(".jqx-scheduler-month-cell:first").height()), f = 0; f < this.appointmentsToRender.length; f++) {
                var g = this.appointmentsToRender[f]
                  , h = a.jqx.scheduler.utilities.getStartOfDay(g.from)
                  , i = a.jqx.scheduler.utilities.getEndOfDay(g.to)
                  , j = (g.allDay,
                b._getDateByString)
                  , k = new Array
                  , l = new Array
                  , m = h.toDate().valueOf()
                  , n = i.toDate().valueOf()
                  , o = function(a, b) {
                    return a.date < b.date ? -1 : a.date == b.date ? 0 : a.date > b.date ? 1 : void 0
                }
                  , p = -1
                  , q = g.resourceId
                  , r = b._resources.indexOf(q);
                b.resources && "none" == b.resources.orientation && (r = -1);
                for (var s = 0; s < b.rows.length; s++)
                    for (var t = b.rows[s].cells, u = 0; u < t.length; u++) {
                        var v = t[u].getAttribute("data-date")
                          , w = j(v)
                          , x = w.valueOf();
                        x > i || (t[u].appointments = new Array,
                        r != -1 && 1 + r != t[u].getAttribute("data-view") || m <= x && x < n && (p != s && p != -1 && (k.sort(o),
                        l.push(k),
                        k = new Array),
                        k.push({
                            cell: t[u],
                            date: w
                        }),
                        p = s))
                    }
                k.sort(o),
                l.push(k);
                for (var y = new Array, s = 0; s < l.length; s++) {
                    var t = l[s];
                    if (0 == t.length)
                        break;
                    var z = b.appointmentsMinHeight;
                    b.isTouchDevice() && (z = b.touchAppointmentsMinHeight),
                    c.appointmentHeight && (z = c.appointmentHeight);
                    var A = z
                      , B = a(t[t.length - 1].cell).position().left
                      , C = B - a(t[0].cell).position().left + b.columns.records[0].width;
                    if (c.showWeekNumbers)
                        var C = B - a(t[0].cell).position().left + b.columns.records[1].width;
                    var D = a(t[0].cell).position()
                      , E = D.left
                      , F = D.top + e
                      , G = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(t[t.length - 1].date,b.timeZone))
                      , H = new a.jqx.date(t[0].date,b.timeZone);
                    if (b.rtl) {
                        var G = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(t[0].date,b.timeZone))
                          , H = new a.jqx.date(t[t.length - 1].date,b.timeZone)
                          , D = a(t[t.length - 1].cell).position()
                          , E = D.left
                          , F = D.top + e
                          , B = a(t[0].cell).position().left
                          , C = B - a(t[t.length - 1].cell).position().left + b.columns.records[0].width;
                        if (c.showWeekNumbers)
                            var C = B - a(t[t.length - 1].cell).position().left + b.columns.records[1].width
                    }
                    var I = {
                        cells: t,
                        cellY: parseInt(D.top),
                        cellX: parseInt(D.left),
                        lastCellY: parseInt(D.top),
                        lastCellX: B,
                        x: E,
                        y: F,
                        height: A,
                        width: C,
                        appointment: g,
                        from: H,
                        to: G
                    };
                    y.push(I),
                    d.push(I)
                }
                g.elements = y,
                g.rootAppointment && (g.rootAppointment.elements = g.rootAppointment.elements.concat(g.elements))
            }
            var J = this.getViewStart()
              , K = this.getViewEnd();
            if (this._resources.length < 2 || "none" == this.resources.orientation) {
                for (var L = new Array, M = J, N = 0; M < K; ) {
                    L[N] = new Array;
                    for (var s = 0; s < d.length; s++) {
                        var O = d[s];
                        M <= O.from && O.to < M.addDays(7) && (O.row = -1,
                        O.rowSpan = 1,
                        L[N].push(O))
                    }
                    N++,
                    M = M.addDays(7)
                }
                for (var s = 0; s < L.length; s++)
                    L[s].length > 0 && this._renderUIMonthAppointments(L[s])
            } else
                for (var u = 0; u < this._resources.length; u++) {
                    for (var P = this._resources[u], L = (new Array,
                    new Array), M = J, N = 0; M < K; ) {
                        L[N] = new Array;
                        for (var s = 0; s < d.length; s++) {
                            var O = d[s];
                            M <= O.from && O.to < M.addDays(7) && (O.row = -1,
                            O.rowSpan = 1,
                            O.appointment.resourceId == P && L[N].push(O))
                        }
                        N++,
                        M = M.addDays(7)
                    }
                    for (var s = 0; s < L.length; s++)
                        L[s].length > 0 && this._renderUIMonthAppointments(L[s])
                }
        },
        _getMonthAppointmentsPerWeek: function() {
            var b = this
              , c = (b._views[b._view].type,
            b._views[b._view])
              , d = new Array
              , e = (this.rows,
            a(".jqx-scheduler-month-cell:first").height());
            if (!b.rows)
                return new Array;
            for (var f = this.getViewStart(), g = this.getViewEnd(), h = 0; h < this.appointmentsToRender.length; h++) {
                var i = this.appointmentsToRender[h]
                  , j = a.jqx.scheduler.utilities.getStartOfDay(i.from)
                  , k = a.jqx.scheduler.utilities.getEndOfDay(i.to)
                  , l = (i.allDay,
                b._getDateByString,
                new Array)
                  , m = new Array
                  , n = j.toDate().valueOf()
                  , o = k.toDate().valueOf()
                  , p = function(a, b) {
                    return a.date < b.date ? -1 : a.date == b.date ? 0 : a.date > b.date ? 1 : void 0
                }
                  , q = -1
                  , r = i.resourceId
                  , s = b._resources.indexOf(r);
                b.resources && "none" == b.resources.orientation && (s = -1);
                for (var t = 0; t < b.rows.length; t++)
                    for (var u = b.rows[t].cells, v = 0; v < u.length; v++) {
                        var w = (u[v].getAttribute("data-date"),
                        f.addDays(7 * t + v).toDate())
                          , x = w.valueOf();
                        x > k || s != -1 && 1 + s != u[v].getAttribute("data-view") || n <= x && x < o && (q != t && q != -1 && (l.sort(p),
                        m.push(l),
                        l = new Array),
                        l.push({
                            cell: u[v],
                            date: w
                        }),
                        q = t)
                    }
                l.sort(p),
                m.push(l);
                for (var y = new Array, t = 0; t < m.length; t++) {
                    var u = m[t];
                    if (0 == u.length)
                        break;
                    var z = b.appointmentsMinHeight;
                    b.isTouchDevice() && (z = b.touchAppointmentsMinHeight),
                    c.appointmentHeight && (z = c.appointmentHeight);
                    var A = z
                      , B = a(u[u.length - 1].cell).position().left
                      , C = B - a(u[0].cell).position().left + b.columns.records[0].width;
                    if (c.showWeekNumbers)
                        var C = B - a(u[0].cell).position().left + b.columns.records[1].width;
                    var D = a(u[0].cell).position()
                      , E = D.left
                      , F = D.top + e
                      , G = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(u[u.length - 1].date,b.timeZone))
                      , H = new a.jqx.date(u[0].date,b.timeZone);
                    if (b.rtl) {
                        var G = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(u[0].date,b.timeZone))
                          , H = new a.jqx.date(u[u.length - 1].date,b.timeZone)
                          , D = a(u[u.length - 1].cell).position()
                          , E = D.left
                          , F = D.top + e
                          , B = a(u[0].cell).position().left
                          , C = B - a(u[u.length - 1].cell).position().left + b.columns.records[0].width;
                        if (c.showWeekNumbers)
                            var C = B - a(u[u.length - 1].cell).position().left + b.columns.records[1].width
                    }
                    var I = {
                        cells: u,
                        cellY: parseInt(D.top),
                        cellX: parseInt(D.left),
                        lastCellY: parseInt(D.top),
                        lastCellX: B,
                        x: E,
                        y: F,
                        height: A,
                        width: C,
                        appointment: i,
                        from: H,
                        to: G
                    };
                    y.push(I),
                    d.push(I)
                }
            }
            if (this._resources.length < 2 || "none" == this.resources.orientation) {
                for (var J = new Array, K = f, L = 0; K < g; ) {
                    J[L] = new Array;
                    for (var t = 0; t < d.length; t++) {
                        var M = d[t];
                        K <= M.from && M.to < K.addDays(7) && (M.row = -1,
                        M.rowSpan = 1,
                        J[L].push(M))
                    }
                    L++,
                    K = K.addDays(7)
                }
                for (var N = new Array, t = 0; t < J.length; t++)
                    if (J[t].length > 0) {
                        var O = this.getMaxMonthAppointments(J[t])
                          , z = b.appointmentsMinHeight;
                        b.isTouchDevice() && (z = b.touchAppointmentsMinHeight),
                        c.appointmentHeight && (z = c.appointmentHeight),
                        N.push(O * (z + 3) + 22)
                    } else
                        N.push("auto");
                return N
            }
            for (var N = new Array, v = 0; v < this._resources.length; v++) {
                for (var P = this._resources[v], J = (new Array,
                new Array), K = f, L = 0; K < g; ) {
                    J[L] = new Array;
                    for (var t = 0; t < d.length; t++) {
                        var M = d[t];
                        K <= M.from && M.to < K.addDays(7) && (M.row = -1,
                        M.rowSpan = 1,
                        M.appointment.resourceId == P && J[L].push(M))
                    }
                    L++,
                    K = K.addDays(7)
                }
                for (var t = 0; t < J.length; t++)
                    if (J[t].length > 0) {
                        var O = this.getMaxMonthAppointments(J[t]);
                        N.push(O * (z + 3) + 22)
                    } else
                        N.push("auto");
                return N
            }
        },
        _renderUIMonthAppointments: function(b) {
            var c = this._views[this._view]
              , d = b
              , e = (this.getViewStart(),
            this.getViewEnd(),
            1)
              , f = this;
            e = this.getMaxMonthAppointments(b);
            var g = f.appointmentsMinHeight;
            f.isTouchDevice() && (g = f.touchAppointmentsMinHeight),
            c.appointmentHeight && (g = c.appointmentHeight);
            var h = this._sortAppointmentsByFrom;
            this.rtl && (h = this._sortAppointmentsByTo);
            for (var i = 0; i < b.length; i++) {
                var j = b[i];
                j.row = -1;
                var k = this.getCollisionAppointments(j, b);
                k.sort(h);
                var l = k.indexOf(j);
                if (l >= 0)
                    for (var m = l; m < k.length; m++)
                        k[m].row = -1;
                for (var n = 0; n < e; n++) {
                    var o = n;
                    for (var p in k) {
                        if ("indexOf" == p)
                            break;
                        var q = k[p];
                        if (q.row == -1 && !this.isBusyRow(o, k)) {
                            q.row = o;
                            var r = e
                              , s = this.getMaxMonthAppointments(k);
                            r > s && (r = s),
                            q.rowsCount = r
                        }
                    }
                }
            }
            for (var n = 0; n < d.length; n++) {
                var j = d[n]
                  , k = this.getCollisionAppointments(j, d);
                k.sort(h);
                var t = 1;
                for (var p in k) {
                    if ("indexOf" == p)
                        break;
                    var u = k[p];
                    t = Math.max(t, u.rowsCount)
                }
                for (var p in k) {
                    if ("indexOf" == p)
                        break;
                    var u = k[p];
                    u.rowsCount = t
                }
                if (1 == k.length)
                    j.rowSpan = t;
                else {
                    for (var v = 0, w = !0, m = j.row; m < t; m++) {
                        for (var p in k) {
                            if ("indexOf" == p)
                                break;
                            var q = k[p];
                            q != j && q.row == m && (w = !1)
                        }
                        if (!w)
                            break;
                        v++
                    }
                    j.rowSpan = v
                }
            }
            for (var x = 0; x < d.length; x++) {
                var y = g
                  , j = d[x];
                j.height = y;
                var z = 2 + (3 + y) * j.row;
                if (j.y = j.y + z,
                j.x += 1,
                j.width -= 5,
                0 != j.appointment.from.hour() || 23 != j.appointment.to.hour())
                    if (f.rtl) {
                        var A = parseFloat(f.cellWidth / 24) * j.appointment.to.hour() + parseFloat(f.cellWidth / 48) * (j.appointment.to.minute() / 30)
                          , B = parseFloat(f.cellWidth / 24) * j.appointment.from.hour() + parseFloat(f.cellWidth / 48) * (j.appointment.from.minute() / 30);
                        j.appointment.elements.length > 1 ? j == j.appointment.elements[0] ? B > 0 ? "exactTime" == c.appointmentsRenderMode ? (j.width -= f.cellWidth - A,
                        j.width -= B) : j.timewidth = j.width - f.cellWidth + A - B : (j.timewidth = j.width,
                        j.timex = 0) : j == j.appointment.elements[j.appointment.elements.length - 1] && ("exactTime" == c.appointmentsRenderMode && (j.x += f.cellWidth,
                        j.x -= A,
                        j.width += A,
                        j.width -= f.cellWidth),
                        j.timewidth = j.width - f.cellWidth + A,
                        j.timex = f.cellWidth - A) : ("exactTime" == c.appointmentsRenderMode && (j.x += f.cellWidth,
                        j.x -= A,
                        j.width -= f.cellWidth - A,
                        j.width -= B),
                        j.appointment.duration().days() < 1 && j.width < 15 && (j.width = 15),
                        j.timewidth = j.width - f.cellWidth + A - B,
                        j.timex = f.cellWidth - A)
                    } else {
                        var A = parseFloat(f.cellWidth / 24) * j.appointment.from.hour() + parseFloat(f.cellWidth / 48) * (j.appointment.from.minute() / 30);
                        j.timewidth = j.width,
                        j.from.clearTime().toString() == j.appointment.from.clearTime().toString() ? j.timex = A : A = 0,
                        j.appointment.elements.length > 1 && j.appointment.elements[0] != j && (A = 0);
                        var B = parseFloat(f.cellWidth / 24) * j.appointment.to.hour() + parseFloat(f.cellWidth / 48) * (j.appointment.to.minute() / 30);
                        if (j.appointment.elements.length > 1 && j.appointment.elements[j.appointment.elements.length - 1] != j && (B = 0),
                        j.timewidth -= A,
                        B > 0 && (j.timewidth -= f.cellWidth,
                        j.timewidth += B),
                        "exactTime" == c.appointmentsRenderMode && (j.from.clearTime().toString() == j.appointment.from.clearTime().toString() && (j.x += A),
                        j.width = j.timewidth,
                        j.appointment.duration().days() < 1 && j.width < 15 && (j.width = 15,
                        A + 15 > f.cellWidth))) {
                            var C = f.cellWidth - A - 15;
                            j.x += C
                        }
                    }
            }
            for (var x = 0; x < d.length; x++) {
                var D = d[x]
                  , E = ""
                  , F = "auto"
                  , c = this._views[this._view]
                  , G = D.appointment.from
                  , H = D.appointment.to
                  , F = "auto"
                  , c = this._views[this._view]
                  , G = D.appointment.from
                  , H = D.appointment.to;
                c.timeRuler && c.timeRuler.formatString && (F = c.timeRuler.formatString);
                var I = F
                  , J = F;
                if ("auto" === F) {
                    if (0 == G.hour() && 0 == G.minute() || 12 == G.hour() && 0 == G.minute())
                        var I = "hh tt";
                    else
                        var I = "hh:mm";
                    if (0 == H.hour() && 0 == H.minute() || 12 == H.hour() && 0 == H.minute())
                        var J = "hh tt";
                    else
                        var J = "hh:mm"
                }
                var K = G.toString(I)
                  , L = H.toString(J)
                  , M = D.appointment.duration()
                  , N = D.appointment.allDay || 23 === M.hours && 59 === M.minutes && 59 === M.seconds
                  , O = D.appointment.background
                  , P = D.appointment.subject ? D.appointment.subject : "(No Title)"
                  , Q = D.appointment.color
                  , R = D.appointment.resourceId
                  , S = f.getColors(f._resources.indexOf(R))
                  , T = " data-resourceId='" + R + "' "
                  , U = D.appointment.borderColor
                  , V = D.appointment.location;
                V && V.length > 1 && (V = ", " + V),
                O || (O = S.background),
                U || (U = S.border),
                Q || (Q = S.color);
                var W = D.appointment.isRecurrentAppointment()
                  , X = D.appointment.isException()
                  , Y = ""
                  , Z = f.toTP("jqx-scheduler-appointment-status")
                  , $ = ""
                  , _ = f.statuses[D.appointment.status]
                  , aa = !1;
                _ && ("transparent" == _ ? aa = !1 : ($ = "<div style='background: " + _ + "; border-right-color: " + U + "' class='" + Z + "'></div>",
                "tentative" == _ && (Z = f.toTP("jqx-scheduler-appointment-status jqx-scheduler-appointment-status-stripes"),
                $ = "<div style='background-color: " + U + "; border-right-color: " + U + "' class='" + Z + "'></div>"),
                aa = !0));
                var ba = f.toTP("jqx-scheduler-appointment-duration-status")
                  , ca = "<div style='width: " + D.timewidth + "px; left: " + D.timex + "px;' class='" + ba + "'></div>";
                N && (ca = ""),
                "exactTimeStatus" != c.appointmentsRenderMode && (ca = "");
                var da = "";
                if (f.rtl) {
                    var Z = f.toTP("jqx-scheduler-appointment-status-rtl jqx-scheduler-appointment-status");
                    $ = "<div style='background: " + _ + "; border-left-color: " + U + "' class='" + Z + "'></div>",
                    "tentative" == _ && (Z = f.toTP("jqx-scheduler-appointment-status-rtl jqx-scheduler-appointment-status jqx-scheduler-appointment-status-stripes"),
                    $ = "<div style='background-color: " + U + "; border-left-color: " + U + "' class='" + Z + "'></div>"),
                    da = $,
                    $ = ""
                }
                var ea = ""
                  , fa = P + V;
                if (N || (fa = P + V + ca),
                f.renderAppointment) {
                    var ga = f.renderAppointment({
                        appointment: D.appointment.boundAppointment,
                        textColor: Q,
                        background: O,
                        borderColor: U,
                        html: fa,
                        cssClass: "",
                        style: "",
                        width: D.width,
                        height: D.height,
                        view: f._views[f._view].type
                    });
                    if (ga) {
                        var E = ga.html;
                        if (E != fa && (fa = E),
                        Q = ga.textColor,
                        O = ga.background,
                        U = ga.borderColor,
                        ga.cssClass && (ea = ga.cssClass + " "),
                        "" != ga.style) {
                            var S = f.getAppointmentColors(ga.style);
                            O = S.background,
                            U = S.border,
                            Q = S.color
                        }
                    }
                }
                if ("" === Y)
                    if (aa)
                        var Y = "<div style='white-space:nowrap;' class='" + f.toTP("jqx-scheduler-appointment-content") + "'>" + $ + "<div class='" + f.toTP("jqx-scheduler-appointment-inner-content") + "'>" + fa + "</div>" + da + "</div>";
                    else
                        var Y = "<div style='white-space:nowrap;' class='" + f.toTP("jqx-scheduler-appointment-content") + "'><div class='" + f.toTP("jqx-scheduler-appointment-inner-content") + "'>" + fa + "</div></div>";
                var ha = "";
                if (f.rtl && (ha = f.toTP("jqx-rtl jqx-scheduler-appointment-rtl") + " "),
                X) {
                    var ia = "white" == Q.toLowerCase() ? f.toTP("jqx-icon-recurrence-exception-white") : f.toTP("jqx-icon-recurrence-exception");
                    E = "<div data-key='" + D.appointment.id + "'" + T + "class='" + ha + ea + f.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + D.x + "px; top: " + D.y + "px; width: " + D.width + "px; line-height: " + D.height + "px; height: " + D.height + "px; border-color:" + U + "; color:" + Q + "; background:" + O + ";'><div class='" + ia + "'></div>" + Y + "<div class='" + f.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-left-resize-indicator") + "'></div><div class='" + f.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-right-resize-indicator") + "'></div>"
                } else if (W) {
                    var ja = "white" == Q.toLowerCase() ? f.toTP("jqx-icon-recurrence-white") : f.toTP("jqx-icon-recurrence");
                    E = "<div data-key='" + D.appointment.id + "'" + T + "class='" + ha + ea + f.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + D.x + "px; top: " + D.y + "px; width: " + D.width + "px; line-height: " + D.height + "px; height: " + D.height + "px; border-color:" + U + "; color:" + Q + "; background:" + O + ";'><div class='" + ja + "'></div>" + Y + "<div class='" + f.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-left-resize-indicator") + "'></div><div class='" + f.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-right-resize-indicator") + "'></div>"
                } else
                    E = "<div data-key='" + D.appointment.id + "'" + T + "class='" + ha + ea + f.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + D.x + "px; top: " + D.y + "px; width: " + D.width + "px; line-height: " + D.height + "px; height: " + D.height + "px; border-color:" + U + "; color:" + Q + "; background:" + O + ";'>" + Y + "<div class='" + f.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-left-resize-indicator") + "'></div><div class='" + f.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-right-resize-indicator") + "'></div>";
                var ka = a(E);
                if (ka.appendTo(this.table),
                D.element = ka,
                this.appointmentTooltips)
                    if (D.appointment.tooltip)
                        ka[0].setAttribute("title", D.appointment.tooltip);
                    else {
                        var la = D.appointment.subject;
                        if (K && !N && (la = K + " - " + L + " " + la),
                        la) {
                            var V = D.appointment.location;
                            V && (la += "\n" + V),
                            ka[0].setAttribute("title", la)
                        }
                    }
                a.each(D.cells, function() {
                    var b = a(this.cell)
                      , c = b.position();
                    if (b[0].appointments || (b[0].appointments = new Array),
                    b[0].appointments.push({
                        ui: ka,
                        appointment: D
                    }),
                    D.y + D.height + 2 >= c.top + b.height()) {
                        ka.css("visibility", "hidden");
                        var d = b.find(".jqx-icon-arrow-down");
                        d.show(),
                        d[0] && (d[0].mousedown = function() {
                            f.openedMonthCellPopup && f.openedMonthCellPopup.remove();
                            var d = a("<div></div>")
                              , e = b.find("div").clone(!0);
                            e.find("span").removeClass().addClass(f.toTP("jqx-icon-close")),
                            e.find("span")[0].mousedown = function() {
                                d.remove()
                            }
                            ,
                            e.addClass(f.toTP("jqx-widget-header")),
                            d.addClass(f.toTP("jqx-widget")),
                            d.addClass(f.toTP("jqx-window")),
                            d.addClass(f.toTP("jqx-scheduler-month-cell-popup")),
                            d.addClass(f.toTP("jqx-popup"));
                            var g = a("<div></div>");
                            d.append(e),
                            d.append(g),
                            g.addClass(f.toTP("jqx-widget-content jqx-disableselect"));
                            for (var h = b.width(), i = 5 + b.find("div").outerHeight(), j = 0; j < b[0].appointments.length; j++) {
                                var k = b[0].appointments[j].ui.clone(!0);
                                k.css("left", "3px"),
                                k.css("top", "0px"),
                                k.css("margin-top", "2px"),
                                k.css("position", "relative"),
                                k.css("visibility", "visible"),
                                k.width(h - 6),
                                i += k.outerHeight() + 4,
                                g.append(k),
                                k.click(function(a) {
                                    var b = f.getJQXAppointmentByElement(f.getAppointmentElement(a.target));
                                    f._raiseEvent("appointmentClick", {
                                        appointment: b.boundAppointment
                                    })
                                }),
                                k.dblclick(function(a) {
                                    var b = f.getJQXAppointmentByElement(f.getAppointmentElement(a.target));
                                    if (!b.readOnly && !f.editRecurrenceDialog.jqxWindow("isOpen") && (!f._editDialog || f._editDialog && !f._editDialog.jqxWindow("isOpen"))) {
                                        var c = f._initDialog(b);
                                        c !== !1 && f._openDialog()
                                    }
                                    f._raiseEvent("appointmentDoubleClick", {
                                        appointment: b.boundAppointment
                                    })
                                })
                            }
                            d.css("overflow", "hidden"),
                            d.css("position", "absolute"),
                            d.height(i),
                            d.width(h),
                            d.css("z-index", "9999"),
                            d.css("top", c.top),
                            d.css("left", c.left),
                            f.table.append(d),
                            f.openedMonthCellPopup = d
                        }
                        )
                    }
                })
            }
        },
        _sortByDate: function(a, b) {
            var c = a.getAttribute("data-date");
            c = this._getDateByString(c);
            var d = b.getAttribute("data-date");
            return d = this._getDateByString(d),
            c < d ? -1 : c > d ? 1 : c == d ? 0 : void 0
        },
        _sortAppointmentsByFrom: function(a, b) {
            if (a.from.equals(b.from)) {
                var c = a.to - a.from
                  , d = 1e4 * c
                  , c = b.to - b.from
                  , e = 1e4 * c;
                if (d > e)
                    return -1
            }
            return a.from < b.from ? -1 : a.from > b.from ? 1 : a.from == b.from ? 0 : void 0
        },
        _sortAppointmentsByTo: function(a, b) {
            if (a.to.equals(b.to)) {
                var c = a.to - a.from
                  , d = 1e4 * c
                  , c = b.to - b.from
                  , e = 1e4 * c;
                if (d > e)
                    return -1
            }
            return a.to < b.to ? -1 : a.to > b.to ? 1 : a.to == b.to ? 0 : void 0
        },
        _sortAppointmentsByResourceId: function(a, b, c) {
            var d = c._resources.indexOf(a.resourceId)
              , e = c._resources.indexOf(b.resourceId);
            return d == e ? 0 : d < e ? -1 : d > e ? -1 : void 0
        },
        isBusyRow: function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                if (d.row == a)
                    return !0
            }
            return !1
        },
        isBusyColumn: function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                if (d.column == a)
                    return !0
            }
            return !1
        },
        getMaxTimelineAppointments: function(b, c, d, e) {
            if (0 == b.length)
                return 1;
            var f = this
              , g = f._views[f._view].type
              , h = (f._views[f._view],
            1)
              , i = d
              , j = this.getMinutesPerScale()
              , k = null
              , l = null
              , m = "";
            for (var n in b) {
                if ("indexOf" == n)
                    break;
                var o = b[n];
                k || (k = o.from),
                l || (l = o.to),
                k = Math.min(o.from, k),
                l = Math.max(o.to, l),
                m += o.appointment.id
            }
            if (m += k,
            m += l,
            c[m])
                return c[m];
            k = new a.jqx.date(k,f.timeZone),
            l = new a.jqx.date(l,f.timeZone);
            for (var i = k; k < l; ) {
                var p = i;
                if ("timelineMonthView" === g)
                    var q = p.addDays(1);
                else
                    var q = p.addMinutes(j);
                var r = 0;
                for (var n in b) {
                    if ("indexOf" == n)
                        break;
                    var o = b[n]
                      , s = o.from
                      , t = o.to
                      , u = a.jqx.scheduler.utilities.rangeIntersection(p, q, s, t);
                    u && r++
                }
                h = Math.max(r, h),
                i = "timelineMonthView" === g ? i.addDays(1, !1) : i.addMinutes(j, !1)
            }
            return c[m] = h,
            h
        },
        getMaxMonthAppointments: function(b) {
            this._views[this._view].type,
            this._views[this._view];
            if (0 == b.length)
                return 1;
            for (var c = 1, d = this.getViewStart().clone(), e = this.getViewEnd(); d < e; ) {
                var f = d
                  , g = a.jqx.scheduler.utilities.getEndOfDay(f)
                  , h = 0;
                for (var i in b) {
                    if ("indexOf" == i)
                        break;
                    var j = b[i]
                      , k = j.from
                      , l = j.to
                      , m = a.jqx.scheduler.utilities.rangeIntersection(f, g, k, l);
                    m && h++
                }
                c = Math.max(h, c),
                d = d.addDays(1, !1)
            }
            return c
        },
        getMaxAllDayAppointments: function(b) {
            var c = (this._views[this._view].type,
            this._views[this._view],
            this);
            if (0 == b.length)
                return 1;
            var d = function(b) {
                for (var d = 1, e = c.getViewStart(), f = c.getViewEnd(); e < f; ) {
                    var g = e
                      , h = a.jqx.scheduler.utilities.getEndOfDay(g)
                      , i = 0;
                    for (var j in b) {
                        if ("indexOf" == j)
                            break;
                        var k = b[j]
                          , l = k;
                        if (k.appointment && (l = k.appointment),
                        1 != l.hidden && l.duration && (l.allDay || l.duration().days() >= 1)) {
                            var m = k.from
                              , n = k.to
                              , o = a.jqx.scheduler.utilities.rangeIntersection(g, h, m, n);
                            o && i++
                        }
                    }
                    d = Math.max(i, d),
                    e = e.addDays(1, !1)
                }
                return d
            };
            if (this._resources.length < 2 || !this.resources.orientation || "none" == this.resources.orientation)
                var e = d(b);
            else {
                for (var f = 1, g = 0; g < this._resources.length; g++) {
                    for (var h = this._resources[g], i = new Array, j = 0; j < b.length; j++)
                        b[j].appointment && b[j].appointment.resourceId == h ? i.push(b[j]) : void 0 != b[j].resourceId && b[j].resourceId == h && i.push(b[j]);
                    var e = d(i);
                    f = Math.max(f, e)
                }
                e = f
            }
            return e
        },
        getMinutesPerScale: function() {
            var a = (this._views[this._view].type,
            this._views[this._view])
              , b = 30
              , c = "halfHour";
            switch (a.timeRuler && a.timeRuler.scale && (c = a.timeRuler.scale),
            c) {
            case "sixtyMinutes":
            case "hour":
                b = 60;
                break;
            case "thirtyMinutes":
            case "halfHour":
                b = 30;
                break;
            case "fifteenMinutes":
            case "quarterHour":
                b = 15;
                break;
            case "tenMinutes":
                b = 10;
                break;
            case "fiveMinutes":
                b = 5
            }
            return b
        },
        getMaxColumnsInADay: function(b) {
            var c = (this._views[this._view].type,
            this._views[this._view])
              , d = 30
              , e = "halfHour";
            switch (c.timeRuler && c.timeRuler.scale && (e = c.timeRuler.scale),
            e) {
            case "sixtyMinutes":
            case "hour":
                d = 60;
                break;
            case "thirtyMinutes":
            case "halfHour":
                d = 30;
                break;
            case "fifteenMinutes":
            case "quarterHour":
                d = 15;
                break;
            case "tenMinutes":
                d = 10;
                break;
            case "fiveMinutes":
                d = 5
            }
            if (0 == b.length)
                return 1;
            for (var f = 1, g = b[0].from.clone(), h = g.addMinutes(d), i = a.jqx.scheduler.utilities.getEndOfDay(g); g < i; ) {
                var j = g
                  , k = h
                  , l = 0;
                for (var m in b) {
                    if ("indexOf" == m)
                        break;
                    var n = b[m];
                    if (n.from || n.to) {
                        var o = n.from
                          , p = n.to
                          , q = a.jqx.scheduler.utilities.rangeIntersection(j, k, o, p);
                        q && l++
                    }
                }
                f = Math.max(l, f),
                g = g.addMinutes(d, !1),
                h = h.addMinutes(d, !1)
            }
            return f
        },
        getTouches: function(b) {
            return a.jqx.mobile.getTouches(b)
        },
        _updatecolumnwidths: function() {
            var b = this
              , c = this._hostWidth
              , d = c;
            "hidden" !== this.vScrollBar.css("visibility") && this.scrollBarSize > 0 && (c -= parseInt(this.scrollBarSize) + 6,
            this.rtl && (c += 3),
            d = c);
            var e = "";
            if (void 0 != this.columns && void 0 != this.columns.records) {
                var b = this
                  , f = !1
                  , g = new Array;
                a.each(this.columns.records, function(a, f) {
                    if (!this.hidden) {
                        if (this.width.toString().indexOf("%") != -1 || void 0 != this._percentagewidth) {
                            var f = 0
                              , h = "hidden" == b.vScrollBar[0].style.visibility ? 0 : b.scrollBarSize + 5;
                            0 == b.scrollBarSize && (h = 0),
                            f = parseFloat(this.width) * d / 100,
                            void 0 != this._percentagewidth && (f = parseFloat(this._percentagewidth) * d / 100),
                            f < this.minwidth && "auto" != this.minwidth && (f = this.minwidth),
                            f > this.maxwidth && "auto" != this.maxwidth && (f = this.maxwidth),
                            c -= Math.round(f)
                        } else
                            "auto" == this.width || this._width ? e += this.text : c -= this.width;
                        "auto" == this._width && (g[g.length] = this)
                    }
                });
                var h = this.columnsheader.find("#columntable" + this.element.id);
                if (0 != h.length) {
                    var i = 0
                      , j = (h.find(".jqx-grid-column-header"),
                    0);
                    a.each(this.columns.records, function(e, h) {
                        var k = this.element
                          , l = !1
                          , m = this.width
                          , n = this.width;
                        if (this.width.toString().indexOf("%") == -1 && void 0 == this._percentagewidth || (m = void 0 != this._percentagewidth ? parseFloat(this._percentagewidth) * d / 100 : parseFloat(this.width) * d / 100,
                        m = Math.round(m),
                        l = !0),
                        "auto" == this.width || this._width || l)
                            if (l)
                                m < this.minwidth && "auto" != this.minwidth && (m = this.minwidth,
                                this.width = m),
                                m > this.maxwidth && "auto" != this.maxwidth && (m = this.maxwidth,
                                this.width = m),
                                parseInt(k[0].style.width) != m && (k.width(m),
                                this.width = m);
                            else {
                                var o = b.columns.records.length
                                  , p = b._views[b._view].type;
                                if ("dayView" === p || "weekView" === p) {
                                    var q = b._views[b._view];
                                    q.timeRuler ? (q.timeRuler.timeZones && (o -= q.timeRuler.timeZones.length),
                                    o--) : o--
                                } else
                                    "monthView" === p && b._views[b._view].showWeekNumbers && o--;
                                var r = Math.floor(c * (1 / o));
                                b.resources && b.resources.resourceColumnWidth && "auto" != b.resources.resourceColumnWidth ? r = b.resources.resourceColumnWidth : b.resources && b.resources.resourceColumnWidth && "auto" == b.resources.resourceColumnWidth && "horizontal" == b.resources.orientation && (r = Math.round((2 + c) * (1 / b._getColumnsLengthPerView())));
                                var s = c * (1 / o) - r;
                                if (i += s,
                                i >= 1 && (i -= 1,
                                r++),
                                i >= .5 && e == b.columns.records.length - 1 && r++,
                                "agendaView" == p && (r = c / g.length,
                                r++),
                                r < 0) {
                                    var t = a("<span>" + this.text + "</span>");
                                    a(document.body).append(t),
                                    r = 10 + t.width(),
                                    t.remove()
                                }
                                r < this.minwidth && (r = this.minwidth),
                                r > this.maxwidth && (r = this.maxwidth),
                                this._width = "auto",
                                this.width = parseInt(r),
                                k.width(this.width)
                            }
                        else
                            parseInt(k[0].style.width) != this.width && k.width(this.width);
                        parseInt(k[0].style.left) != j && k.css("left", j),
                        this.hidden || (j += this.width),
                        this._requirewidthupdate = !0,
                        n !== this.width && (f = !0)
                    }),
                    this.columnsheader.width(2 + j),
                    h.width(this.columnsheader.width()),
                    this._resizecolumnGroups(),
                    f && (this._renderrows(),
                    b._arrange())
                }
            }
        },
        _rendercolumnheaders: function() {
            var b = this;
            if (!this._updating) {
                var c = this._views[this._view];
                this._columnsbydatafield = new Array,
                this.columnsheader.find("#columntable" + this.element.id).remove();
                var d = a('<div id="columntable' + this.element.id + '" style="height: 100%; position: relative;"></div>');
                d[0].cells = new Array;
                var e = 0
                  , f = ""
                  , g = this._hostWidth;
                g || (this._hostWidth = this.host.width());
                var h = this._hostWidth
                  , i = h
                  , j = this.getRows().length
                  , k = this.rowsHeight;
                this.isTouchDevice() && (k = this.touchRowsHeight),
                j * k > this.host.height() && (this.vScrollBar[0].style.visibility = "inherit"),
                "hidden" !== this.vScrollBar.css("visibility") && this.scrollBarSize > 0 && (h -= parseInt(this.scrollBarSize) + 6,
                this.rtl && (h += 3),
                i = h);
                var l = new Array
                  , m = new Array;
                if (a.each(this.columns.records, function(a, b) {
                    if (!this.hidden)
                        if ("auto" == this.width || this._width)
                            f += this.text;
                        else if (this.width < this.minwidth && "auto" != this.minwidth)
                            h -= this.minwidth;
                        else if (this.width > this.maxwidth && "auto" != this.maxwidth)
                            h -= this.maxwidth;
                        else if (this.width.toString().indexOf("%") != -1) {
                            var b = 0;
                            b = parseFloat(this.width) * i / 100,
                            b < this.minwidth && "auto" != this.minwidth && (b = this.minwidth),
                            b > this.maxwidth && "auto" != this.maxwidth && (b = this.maxwidth),
                            h -= b
                        } else
                            "string" == typeof this.width && (this.width = parseInt(this.width)),
                            h -= this.width;
                    null != this.width && "auto" != this.width || (m[m.length] = this),
                    l[l.length] = this
                }),
                this.rtl)
                    for (var n = 0; n < l.length; n++)
                        this.columns.replace(n, l[n]);
                var o = this.headerZIndex
                  , p = b.columnsHeight
                  , q = function(a, c) {
                    var d = b.columnGroupslevel * b.columnsHeight;
                    return d -= c.level * b.columnsHeight
                }
                  , r = 0
                  , s = document.createDocumentFragment();
                a.each(this.columns.records, function(f, g) {
                    this.height = b.columnsHeight,
                    b.columnGroups && b.columnGroups.length && (this.height = q(this.datafield, this),
                    p = this.height);
                    var j = b.toTP("jqx-grid-column-header") + " " + b.toTP("jqx-widget-header");
                    b.rtl && (j += " " + b.toTP("jqx-grid-column-header-rtl")),
                    b.enableBrowserSelection || (j += " " + b.toTP("jqx-disableselect"));
                    var k = b.rtl ? o++ : o--
                      , l = document.createElement("div");
                    l.setAttribute("role", "columnheader"),
                    l.style.position = "absolute",
                    l.style.zIndex = k,
                    l.style.height = "100%",
                    l.className = j;
                    var n = a(l);
                    b.rtl && 0 === f && (n[0].style.borderLeftColor = "transparent"),
                    b.columnGroups ? (n[0].style.height = p + "px",
                    n[0].style.bottom = "0px") : this.timeColumn || (n[0].style.height = -1 + p + "px"),
                    this.uielement = n,
                    this.element = n,
                    "" != this.classname && this.classname && n.addClass(this.classname);
                    var t = this.width
                      , u = !1;
                    if (null === this.width && (this.width = "auto"),
                    this.width.toString().indexOf("%") == -1 && void 0 == this._percentagewidth || (t = void 0 != this._percentagewidth ? parseFloat(this._percentagewidth) * i / 100 : parseFloat(this.width) * i / 100,
                    t = Math.round(t),
                    u = !0),
                    "auto" == this.width || this._width || u)
                        if (u)
                            t < this.minwidth && "auto" != this.minwidth && (t = this.minwidth),
                            t > this.maxwidth && "auto" != this.maxwidth && (t = this.maxwidth),
                            void 0 != this._percentagewidth && this.width.toString().indexOf("%") == -1 || (this._percentagewidth = this.width),
                            n.width(t),
                            this.width = t;
                        else {
                            var v = b.columns.records.length
                              , w = b._views[b._view].type;
                            if ("dayView" === w || "weekView" === w) {
                                var x = b._views[b._view];
                                x.timeRuler ? (x.timeRuler.timeZones && (v -= x.timeRuler.timeZones.length),
                                v--) : v--
                            } else
                                "monthView" === w && b._views[b._view].showWeekNumbers && v--;
                            var y = Math.floor(h * (1 / v));
                            b.resources && b.resources.resourceColumnWidth && "auto" != b.resources.resourceColumnWidth ? y = b.resources.resourceColumnWidth : b.resources && b.resources.resourceColumnWidth && "auto" == b.resources.resourceColumnWidth && "horizontal" == b.resources.orientation && (y = Math.round((2 + h) * (1 / b._getColumnsLengthPerView())));
                            var z = h * (1 / v) - y;
                            r += z,
                            r >= 1 && (r -= 1,
                            y++),
                            r >= .5 && f == b.columns.records.length - 1 && y++,
                            isNaN(y) && (y = this.minwidth),
                            "agendaView" == w && (y = h / m.length,
                            y++),
                            y < 0 && ($element = a("<span>" + this.text + "</span>"),
                            a(document.body).append($element),
                            y = 10 + $element.width(),
                            $element.remove()),
                            y < this.minwidth && (y = this.minwidth),
                            y > this.maxwidth && (y = this.maxwidth),
                            this._width = "auto",
                            this.width = parseInt(y),
                            t = this.width,
                            n.width(this.width)
                        }
                    else
                        t < this.minwidth && "auto" != this.minwidth && (t = this.minwidth),
                        t > this.maxwidth && "auto" != this.maxwidth && (t = this.maxwidth),
                        n[0].style.width = parseInt(t) + "px";
                    this.timeColumn && (n.css("border-bottom-color", "transparent"),
                    c.timeRuler && c.timeRuler.timeZones && f < c.timeRuler.timeZones.length && n.css("border-right-color", "transparent"),
                    1 == this.tableRows && n.addClass(b.toTP("jqx-scheduler-time-column"))),
                    this.hidden && n.css("display", "none");
                    a(n.children()[0]);
                    d[0].cells[f] = n[0];
                    var A = b._rendercolumnheader(this.text, this.align, p, b);
                    n[0].innerHTML = A,
                    s.appendChild(n[0]);
                    n[0].style.left = e + "px",
                    this.hidden || (e += t)
                }),
                d[0].appendChild(s),
                e > 0 ? this.columnsheader[0].style.width = 2 + e + "px" : this.columnsheader[0].style.width = e + "px",
                this._columnswidth = e,
                this.columnsrow = d,
                b.columnsheader.append(d),
                d[0].style.width = e + "px",
                this.columnGroups && this._rendercolumnGroups()
            }
        },
        _rendercolumnGroups: function() {
            if (this.columnGroups) {
                var b = this.headerZIndex + this.columns.records.length
                  , c = this
                  , d = c.toTP("jqx-grid-column-header") + " " + c.toTP("jqx-grid-columngroup-header") + " " + c.toTP("jqx-widget-header");
                c.rtl && (d += " " + c.toTP("jqx-grid-columngroup-header-rtl"));
                var e = this.columnsheader.find("#columntable" + this.element.id);
                e.find("jqx-grid-columngroup-header").remove();
                for (var f = 0; f < this.columnGroupslevel - 1; f++)
                    for (var g = 0; g < this.columnGroups.length; g++) {
                        var h = this.columnGroups[g]
                          , i = h.level;
                        if (i === f) {
                            var j = i * this.columnsHeight
                              , k = 99999;
                            if (h.groups) {
                                var l = function(a) {
                                    for (var b = 0, c = 0; c < a.groups.length; c++) {
                                        var d = a.groups[c];
                                        d.groups ? b += l(d) : d.hidden || (b += d.width,
                                        k = Math.min(parseInt(d.element[0].style.left), k))
                                    }
                                    return b
                                };
                                h.width = l(h),
                                h.left = k;
                                var m = this.columnsHeight
                                  , n = b--
                                  , o = a('<div role="columnheader" style="z-index: ' + n + ';position: absolute;" class="' + d + '"></div>')
                                  , p = a(this._rendercolumnheader(h.text, h.align, this.columnsHeight, this));
                                h.renderer && h.renderer(o, h.text),
                                o.append(p),
                                o[0].style.left = k + "px",
                                0 === k && (o[0].style.borderLeftColor = "transparent"),
                                o[0].style.top = j + "px",
                                o[0].style.height = m + "px",
                                o[0].style.width = -1 + h.width + "px",
                                e.append(o),
                                h.element = o
                            }
                        }
                    }
            }
        },
        _resizecolumnGroups: function() {
            if (this.columnGroups)
                for (var a = 0; a < this.columnGroups.length; a++) {
                    var b = this.columnGroups[a]
                      , c = b.level
                      , d = c * this.columnsHeight
                      , e = 99999;
                    if (b.groups) {
                        var f = function(a) {
                            for (var b = 0, c = 0; c < a.groups.length; c++) {
                                var d = a.groups[c];
                                d.groups ? b += f(d) : (b += d.width,
                                e = Math.min(parseInt(d.element[0].style.left), e))
                            }
                            return b
                        };
                        b.width = f(b),
                        b.left = e;
                        var g = this.columnsHeight
                          , h = b.element;
                        h[0].style.left = e + "px",
                        h[0].style.top = d + "px",
                        h[0].style.height = g + "px",
                        h[0].style.width = -1 + b.width + "px"
                    }
                }
        },
        _removecolumnhandlers: function(b) {
            var c = this
              , d = a(b.element);
            if (d.length > 0) {
                c.removeHandler(d, "mouseenter"),
                c.removeHandler(d, "mouseleave");
                var e = a(b.filtericon);
                c.removeHandler(e, "mousedown"),
                c.removeHandler(e, "click"),
                c.removeHandler(d, "click")
            }
        },
        destroy: function() {
            var b = this;
            b._removeHandlers(),
            b._editDialog && b._editDialog.jqxWindow("destroy"),
            b.menu && b.menu.jqxMenu("destroy"),
            b.editRecurrenceDialog && b.editRecurrenceDialog.jqxWindow("destroy"),
            b.vScrollBar.jqxScrollBar("destroy"),
            b.hScrollBar.jqxScrollBar("destroy"),
            delete b.vScrollBar,
            delete b.hScrollBar,
            delete b._mousewheelfunc,
            a.jqx.utilities.resize(b.host, null, !0),
            b.host.remove()
        },
        propertiesChangedHandler: function(a, b, c) {
            c && c.width && c.height && 2 == Object.keys(c).length && (a.host.height(a.height),
            a.host.width(a.width),
            a._updatesize(!1, !0))
        },
        propertyChangedHandler: function(b, c, d, e) {
            if (void 0 != this.isInitialized && 0 != this.isInitialized && !(b.batchUpdate && b.batchUpdate.width && b.batchUpdate.height && 2 == Object.keys(b.batchUpdate).length) && e !== d)
                if ("filterable" == c)
                    b._render();
                else if ("view" == c)
                    b.setView(e);
                else if ("views" == c) {
                    b._columns = null,
                    b._views = new Array,
                    b._view = b.view;
                    for (var f = 0; f < b.views.length; f++)
                        "string" === a.type(b.views[f]) ? b._views.push({
                            type: b.views[f]
                        }) : b._views.push(b.views[f]);
                    for (var f = 0; f < b._views.length; f++)
                        if (b._views[f].type == b.view) {
                            b._view = f;
                            break
                        }
                    b._render()
                } else if ("height" === c)
                    b._hostWidth = null,
                    b._hostHeight = null,
                    b.host.height(b.height),
                    b.host.width(b.width),
                    b._updatesize(!1, !0);
                else if ("width" === c)
                    b._hostWidth = null,
                    b._hostHeight = null,
                    b.host.height(b.height),
                    b.host.width(b.width),
                    b._updatesize(!0, !1);
                else if ("source" === c)
                    b.updateBoundData();
                else if ("resources" == c)
                    b.updateBoundData();
                else if ("columns" === c || "columnGroups" === c)
                    b._columns = null,
                    b._render();
                else if ("selectionMode" === c)
                    b.selectionMode = e.toLowerCase();
                else if ("touchMode" == c)
                    b._removeHandlers(),
                    b.touchDevice = null,
                    b.vScrollBar.jqxScrollBar({
                        touchMode: e
                    }),
                    b.hScrollBar.jqxScrollBar({
                        touchMode: e
                    }),
                    b.refresh(),
                    b._addHandlers();
                else {
                    if ("enableHover" == c)
                        return;
                    "showLegend" == c ? (b.legendbartop.show(),
                    b.legendbarbottom.show(),
                    b.refresh()) : "disabled" == c ? (e ? b.host.addClass(this.toThemeProperty("jqx-fill-state-disabled")) : b.host.removeClass(this.toThemeProperty("jqx-fill-state-disabled")),
                    b.host.find(".jqx-grid-group-collapse").css("cursor", e ? "default" : "pointer"),
                    b.host.find(".jqx-grid-group-expand").css("cursor", e ? "default" : "pointer")) : "columnsHeight" == c ? b._render() : "localization" == c ? (b._render(),
                    b.editRecurrenceDialog && (b.editRecurrenceDialog.jqxWindow("destroy"),
                    b.createEditRecurrenceDialog())) : "theme" == c ? (a.jqx.utilities.setTheme(d, e, b.host),
                    b._editDialog && a.jqx.utilities.setTheme(d, e, b._editDialog),
                    b.editRecurrenceDialog && a.jqx.utilities.setTheme(d, e, b.editRecurrenceDialog),
                    b.menu && b.menu.jqxMenu({
                        theme: b.theme
                    }),
                    b.vScrollBar.jqxScrollBar({
                        theme: b.theme
                    }),
                    b.hScrollBar.jqxScrollBar({
                        theme: b.theme
                    }),
                    b.refresh()) : "date" === c ? b.navigateTo(e) : b.refresh()
                }
        },
        _rendercolumnheader: function(a, b, c, d) {
            var e = "4px";
            d.columnGroups ? (e = c / 2 - this._columnheight / 2,
            e < 0 && (e = 4),
            e += "px") : 25 != this.columnsHeight && (e = this.columnsHeight / 2 - this._columnheight / 2,
            e < 0 && (e = 4),
            e += "px");
            var f = '<div style="overflow: hidden; text-overflow: ellipsis; text-align: ' + b + "; margin-left: 4px; margin-right: 4px; margin-bottom: " + e + "; margin-top: " + e + ';"><span style="text-overflow: ellipsis; cursor: default;">' + a + "</span></div>";
            if (this.columnRenderer) {
                var g = this.columnRenderer(a, b, c, f);
                if (void 0 != g)
                    return g
            }
            return f
        }
    })
}(jqxBaseFramework);
