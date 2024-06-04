// import {WebMidi} from "webmidi";
const {WebMidi} = require("./node_modules/webmidi/dist/cjs/webmidi.cjs");


async function start() {

  await WebMidi.enable().then(() => console.log("WebMidi enabled!"))
  .catch(err => alert(err));

  // List available inputs
  console.log("Available inputs: ");

  WebMidi.inputs.forEach(input => {
    console.log("\t" + input.name);
    input.addListener("noteon", e => console.log(e.note.identifier));
  });

  // List available outputs
  console.log("Available outputs: ");

  WebMidi.outputs.forEach(output => {
    console.log("\t" + output.name);
  });

  const myOutput = WebMidi.getOutputByName("Microsoft GS Wavetable Synth");
  myOutput.sendAllSoundOff();

}

start();