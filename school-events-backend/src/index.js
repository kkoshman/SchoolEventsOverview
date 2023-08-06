const {google} = require('googleapis');
const calendar = google.calendar('v3');
const moment = require('moment');

const schoolCalendarId = 'pdodotvn7mfgdreeb4ojld04vk@group.calendar.google.com';

module.exports.handler = async(event) => {
    console.log("Start handler school-events-handler");
    const auth = new google.auth.GoogleAuth({
        keyFilename: 'creds/classrepupdate-7835-d5e0bb97c6f6.json',
        scopes: ['https://www.googleapis.com/auth/calendar',
                 'https://www.googleapis.com/auth/calendar.events']
      });
    const authClient = await auth.getClient();
    google.options({auth: authClient});


    const getRes = await calendar.calendarList.get({
        calendarId: schoolCalendarId,
      });
    console.log(getRes.data);
}

module.exports.handler();