// import { createJabraApplication, JabraError } from '@gnaudio/jabra-node-sdk';
const j = require("@gnaudio/jabra-node-sdk");
j.createJabraApplication('6ff2-29731b96-cc01-43d5-a45d-782251e53415').then((jabra) => { // 123 is appID here 
  jabra.on('attach', (device) => {

      device.

      device.on('btnPress', (btnType, btnValue) => {
        console.log('New input from device is received: ', j.enumDeviceBtnType[btnType], btnValue);
        }); 
        device.isRingerSupportedAsync().then( (supported) => {
            if (supported) {
              device.ringAsync().then ( () => {
                console.log('ringing');

                

              }) // ring the device
              
              setTimeout(() => {
                device.unringAsync().then(() => {
                    console.log('stopped ringing');
                });
              }, 5000); // stop ringing the device after 5 second
            }          
        });
    });
    
    jabra.on('detach', (device) => {
        console.log('Device detached with deviceID:', device.deviceID);

        // In this demo example, we will auto shutdown once all jabra devices are removed:
        let remainingAttachedDevices = jabra.getAttachedDevices();
        if (remainingAttachedDevices.length == 0) {
            jabra.disposeAsync().then (() => {}); // Cleanup and allow node process to exit.
        }
    });
});