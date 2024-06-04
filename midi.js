var easymidi = require('easymidi');

var output = new easymidi.Output('Jabra Midi Controller Bus 1');

// Start
output.send('noteon', {
  note: 1,
  velocity: 127
});

// Stop
output.send('noteon', {
  note: 2,
  velocity: 127
});

// Rec
output.send('noteon', {
  note: 3,
  velocity: 127
});