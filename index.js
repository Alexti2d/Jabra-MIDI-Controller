const j = require("@gnaudio/jabra-node-sdk");
const easymidi = require('easymidi');

const output = new easymidi.Output('Jabra Midi Controller Bus 1');

j.createJabraApplication('JabraMidiController').then((jabra) => { // JabraMidiController is appID here
    jabra.on('attach', (device) => {
        console.log('Press any key on Jabra device ' + device.deviceName);

        // device.offhookAsync(true)


        device.on('btnPress', (btnType, btnValue) => {
          // console.log(j.enumDeviceBtnType)
          // console.log(j.DeviceEventsList)
          console.log("\n")
          // console.log('New input from device is received: ', j.enumDeviceBtnType[btnType], btnValue);
          if (j.enumDeviceBtnType[btnType] == "OffHook" && btnValue == true) {
            console.log("PC || Start")
            device.offhookAsync(true)
            // Start
            output.send('noteon', {
              note: 1,
              velocity: 127
            });
          }
          else if (j.enumDeviceBtnType[btnType] == "OffHook" && btnValue == false) {
            console.log("PC || Stop")
            device.onhookAsync(false)
            // Stop
            output.send('noteon', {
              note: 2,
              velocity: 127
            });
          }
          else if (j.enumDeviceBtnType[btnType] == "LineBusy") {
            console.log("Tel || Rec")
            // Rec
            output.send('noteon', {
              note: 3,
              velocity: 127
            });
          }
          else if (j.enumDeviceBtnType[btnType] == "Mute" && btnValue == true) {
            console.log("Mute || Start Solo")
            // Mute
            output.send('noteon', {
              note: 4,
              velocity: 127
            });
          }
          else if (j.enumDeviceBtnType[btnType] == "Unmute" && btnValue == true) {
            console.log("Mute || Stop Solo")
            // Mute
            output.send('noteon', {
              note: 4,
              velocity: 127
            });
          }
        });
    });   
    jabra.on('detach', (device) => {
      console.log('deconnecte')
    }) 
});