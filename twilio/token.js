// Twilio Function: /token
// Ger appen en inloggningsbiljett för att ringa. Skyddad med PIN.
exports.handler = function (context, event, callback) {
  const response = new Twilio.Response();
  response.appendHeader('Access-Control-Allow-Origin', '*');
  response.appendHeader('Content-Type', 'application/json');

  if (!context.APP_PIN || event.pin !== context.APP_PIN) {
    response.setStatusCode(403);
    response.setBody(JSON.stringify({ error: 'fel pin' }));
    return callback(null, response);
  }

  const AccessToken = Twilio.jwt.AccessToken;
  const VoiceGrant = AccessToken.VoiceGrant;

  const token = new AccessToken(
    context.ACCOUNT_SID,
    context.API_KEY_SID,
    context.API_KEY_SECRET,
    { identity: 'kim', ttl: 3600 }
  );
  token.addGrant(new VoiceGrant({ outgoingApplicationSid: context.TWIML_APP_SID }));

  response.setBody(JSON.stringify({ token: token.toJwt() }));
  return callback(null, response);
};
