$(document).ready(function () {
    var appointments = new Array();

    var appointment1 = {
        id: "id1",
        description: "George brings projector for presentations.",
        location: "",
        subject: "Quarterly Project Review Meeting",
        calendar: "Room 1",
        start: new Date(2015, 10, 23, 9, 0, 0),
        end: new Date(2015, 10, 23, 16, 0, 0)
    }

    var appointment2 = {
        id: "id2",
        description: "",
        location: "",
        subject: "IT Group Mtg.",
        calendar: "Room 2",
        start: new Date(2015, 10, 24, 10, 0, 0),
        end: new Date(2015, 10, 24, 15, 0, 0)
    }

    var appointment3 = {
        id: "id3",
        description: "",
        location: "",
        subject: "Course Social Media",
        calendar: "Room 3",
        start: new Date(2015, 10, 27, 11, 0, 0),
        end: new Date(2015, 10, 27, 13, 0, 0)
    }

    var appointment4 = {
        id: "id4",
        description: "",
        location: "",
        subject: "New Projects Planning",
        calendar: "Room 2",
        start: new Date(2015, 10, 23, 16, 0, 0),
        end: new Date(2015, 10, 23, 18, 0, 0)
    }

    var appointment5 = {
        id: "id5",
        description: "",
        location: "",
        subject: "Interview with James",
        calendar: "Room 1",
        start: new Date(2015, 10, 25, 15, 0, 0),
        end: new Date(2015, 10, 25, 17, 0, 0)
    }

    var appointment6 = {
        id: "id6",
        description: "",
        location: "",
        subject: "Interview with Nancy",
        calendar: "Room 4",
        start: new Date(2015, 10, 26, 14, 0, 0),
        end: new Date(2015, 10, 26, 16, 0, 0)
    }
    appointments.push(appointment1);
    appointments.push(appointment2);
    appointments.push(appointment3);
    appointments.push(appointment4);
    appointments.push(appointment5);
    appointments.push(appointment6);


    // prepare the data
    var source =
    {
        dataType: "array",
        dataFields: [
            { name: 'id', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'location', type: 'string' },
            { name: 'subject', type: 'string' },
            { name: 'calendar', type: 'string' },
            { name: 'start', type: 'date' },
            { name: 'end', type: 'date' }
        ],
        id: 'id',
        localData: appointments
    };
    var adapter = new $.jqx.dataAdapter(source);
    $("#scheduler").on('bindingComplete', function (event) {
        var args = event.args;
        console.log("bindingComplete is raised");
    });

    $("#scheduler").jqxScheduler({
        date: new $.jqx.date(2015, 11, 23),
        width: 850,
        height: 600,
        source: adapter,
        showLegend: false,
        ready: function () {
            $("#scheduler").jqxScheduler('ensureAppointmentVisible', 'id1');
        },
        resources:
        {
            colorScheme: "scheme05",
            dataField: "calendar",
            source:  new $.jqx.dataAdapter(source)
        },
        appointmentDataFields:
        {
            from: "start",
            to: "end",
            id: "id",
            description: "description",
            location: "place",
            subject: "subject",
            resourceId: "calendar"
        },
        view: 'weekView',
        views:
        [
            'dayView',
            'weekView',
            'monthView'
        ]
    });
            $("#scheduler").on('appointmentDelete', function (event) {
                var args = event.args;
                var appointment = args.appointment;
                console.log("appointmentDelete is raised");
            });

            $("#scheduler").on('appointmentAdd', function (event) {
                var args = event.args;
                var appointment = args.appointment;
                console.log("appointmentAdd is raised");
            });

            $("#scheduler").on('appointmentDoubleClick', function (event) {
                var args = event.args;
                var appointment = args.appointment;
                // appointment fields
                // originalData - the bound data.
                // from - jqxDate object which returns when appointment starts.
                // to - jqxDate objet which returns when appointment ends.
                // status - String which returns the appointment's status("busy", "tentative", "outOfOffice", "free", "").
                // resourceId - String which returns the appointment's resouzeId
                // hidden - Boolean which returns whether the appointment is visible.
                // allDay - Boolean which returns whether the appointment is allDay Appointment.
                // resiable - Boolean which returns whether the appointment is resiable Appointment.
                // draggable - Boolean which returns whether the appointment is resiable Appointment.
                // id - String or Number which returns the appointment's ID.
                // subject - String which returns the appointment's subject.
                // location - String which returns the appointment's location.
                // description - String which returns the appointment's description.
                // tooltip - String which returns the appointment's tooltip.

                $("#log").html("appointmentDoubleClick is raised");
            });

            $("#scheduler").on('cellClick', function (event) {
                var args = event.args;
                var cell = args.cell;
               
                console.log("cellClick is raised");
            });

            $("#scheduler").on('cellDoubleClick', function (event) {
                var args = event.args;
                var cell = args.cell;
               
                console.log("cellDoubleClick is raised");
            });
            
            $("#scheduler").on('contextMenuOpen', function (event) {
                var args = event.args;
                var menu = args.menu;
                var appointment = args.appointment;
               
                console.log("contextMenuOpen is raised");
            });
            
            $("#scheduler").on('contextMenuClose', function (event) {
                var args = event.args;
                var menu = args.menu;
                var appointment = args.appointment;
               
                console.log("contextMenuClose is raised");
            });
            
            $("#scheduler").on('contextMenuItemClick', function (event) {
                var args = event.args;
                var menu = args.menu;
                var appointment = args.appointment;
                var item = args.item;
               
                console.log("contextMenuItemClick is raised");
            });
            
            $("#scheduler").on('viewChange', function (event) {
                var args = event.args;
                var from = args.from;
                var to = args.to;
                var date = args.date;
                console.log("viewChange is raised");
            });
    
            $("#scheduler").on('dateChange', function (event) {
                var args = event.args;
                var from = args.from;
                var to = args.to;
                var date = args.date;
                console.log("dateChange is raised");
            });
            
            $("#scheduler").on('contextMenuCreate', function (event) {
                var args = event.args;
                var menu = args.menu;
                var appointment = args.appointment;
                var item = args.item;
               
                console.log("contextMenuCreate is raised");
            });
            
            $("#scheduler").on('editRecurrenceDialogOpen', function (event) {
                var args = event.args;
                var dialog = args.dialog;
                var appointment = args.appointment;
               
                console.log("editRecurrenceDialogOpen is raised");
            });
            
            $("#scheduler").on('editRecurrenceDialogClose', function (event) {
                var args = event.args;
                var dialog = args.dialog;
                var appointment = args.appointment;
               
                console.log("editRecurrenceDialogClose is raised");
            });
            
           $("#scheduler").on('editDialogCreate', function (event) {
                var args = event.args;
                var dialog = args.dialog;
                var appointment = args.appointment;
                var fields = args.fields;
                
                console.log("editDialogCreate is raised");
            });
            
            $("#scheduler").on('editDialogOpen', function (event) {
                var args = event.args;
                var dialog = args.dialog;
                var appointment = args.appointment;
                var fields = args.fields;
                
                console.log("editDialogOpen is raised");
            });
            
           $("#scheduler").on('editDialogClose', function (event) {
                var args = event.args;
                var dialog = args.dialog;
                var appointment = args.appointment;
                var fields = args.fields;
                
                console.log("editDialogClose is raised");
            });
            
            
            $("#scheduler").on('appointmentChange', function (event) {
                var args = event.args;
                var appointment = args.appointment;
                // appointment fields
                // originalData - the bound data.
                // from - jqxDate object which returns when appointment starts.
                // to - jqxDate objet which returns when appointment ends.
                // status - String which returns the appointment's status("busy", "tentative", "outOfOffice", "free", "").
                // resourceId - String which returns the appointment's resouzeId
                // hidden - Boolean which returns whether the appointment is visible.
                // allDay - Boolean which returns whether the appointment is allDay Appointment.
                // resiable - Boolean which returns whether the appointment is resiable Appointment.
                // draggable - Boolean which returns whether the appointment is resiable Appointment.
                // id - String or Number which returns the appointment's ID.
                // subject - String which returns the appointment's subject.
                // location - String which returns the appointment's location.
                // description - String which returns the appointment's description.
                // tooltip - String which returns the appointment's tooltip.

                console.log("appointmentChange is raised");
            });    
            
                $("#scheduler").on('appointmentClick', function (event) {
                var args = event.args;
                var appointment = args.appointment;
                // appointment fields
                // originalData - the bound data.
                // from - jqxDate object which returns when appointment starts.
                // to - jqxDate objet which returns when appointment ends.
                // status - String which returns the appointment's status("busy", "tentative", "outOfOffice", "free", "").
                // resourceId - String which returns the appointment's resouzeId
                // hidden - Boolean which returns whether the appointment is visible.
                // allDay - Boolean which returns whether the appointment is allDay Appointment.
                // resiable - Boolean which returns whether the appointment is resiable Appointment.
                // draggable - Boolean which returns whether the appointment is resiable Appointment.
                // id - String or Number which returns the appointment's ID.
                // subject - String which returns the appointment's subject.
                // location - String which returns the appointment's location.
                // description - String which returns the appointment's description.
                // tooltip - String which returns the appointment's tooltip.

                console.log("appointmentClick is raised");
            });    
            
                $("#scheduler").on('appointmentDoubleClick', function (event) {
                var args = event.args;
                var appointment = args.appointment;
                // appointment fields
                // originalData - the bound data.
                // from - jqxDate object which returns when appointment starts.
                // to - jqxDate objet which returns when appointment ends.
                // status - String which returns the appointment's status("busy", "tentative", "outOfOffice", "free", "").
                // resourceId - String which returns the appointment's resouzeId
                // hidden - Boolean which returns whether the appointment is visible.
                // allDay - Boolean which returns whether the appointment is allDay Appointment.
                // resiable - Boolean which returns whether the appointment is resiable Appointment.
                // draggable - Boolean which returns whether the appointment is resiable Appointment.
                // id - String or Number which returns the appointment's ID.
                // subject - String which returns the appointment's subject.
                // location - String which returns the appointment's location.
                // description - String which returns the appointment's description.
                // tooltip - String which returns the appointment's tooltip.

                console.log("appointmentDoubleClick is raised");
            });    
});