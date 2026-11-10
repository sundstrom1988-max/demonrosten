// Twilio Function: /voice
// Körs när appen ringer: kopplar samtalet vidare till numret du slog.
exports.handler = function (context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();
  const to = event.To;

  if (to && /^\+\d{8,15}$/.test(to)) {
    const dial = twiml.dial({ callerId: context.CALLER_ID, answerOnBridge: true });
    dial.number(to);
  } else {
    twiml.say({ language: 'sv-SE' }, 'Ogiltigt nummer.');
  }

  return callback(null, twiml);
};
