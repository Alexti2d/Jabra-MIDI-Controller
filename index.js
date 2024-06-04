const j = require("@gnaudio/jabra-node-sdk");
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
            
          }
          else if (j.enumDeviceBtnType[btnType] == "OffHook" && btnValue == false) {
            console.log("PC || Stop")
            device.onhookAsync(false)
          }
          else if (j.enumDeviceBtnType[btnType] == "LineBusy" && btnValue == true) {
            console.log("Tel || Start Solo")
          }
          else if (j.enumDeviceBtnType[btnType] == "LineBusy" && btnValue == false) {
            console.log("Tel || Stop Solo")
          }
          else if (j.enumDeviceBtnType[btnType] == "Mute" && btnValue == true) {
            console.log("Mute || Start Rec")
          }
          else if (j.enumDeviceBtnType[btnType] == "Unmute" && btnValue == true) {
            console.log("Mute || Stop Rec")
          }
        });
    });   
    jabra.on('detach', (device) => {
      console.log('deconnecte')
    }) 
});