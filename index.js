const j = require("@gnaudio/jabra-node-sdk");
j.createJabraApplication('JabraMidiController').then((jabra) => { // JabraMidiController is appID here
    jabra.on('attach', (device) => {
        console.log('Press any key on Jabra device ' + device.deviceName);
        // device.getSupportedButtonEventsAsync().then((data) => {console.log('test', data)})
        // device.setRemoteMmiActionAsync(j.enumRemoteMmiType.MMI_TYPE_LED_BUSYLIGHT, j.enumRemoteMmiSequence.MMI_LED_SEQUENCE_ON)

        // If you are creating a softphone, consider using GN protocol when device supports it
        // in order to receive all events. E.g. device.setHidWorkingStateAsync(j.enumHidState.GN_HID);
        device.
        // device.on('btnPress', (btnType, btnValue) => {
        //   // console.log(j.enumDeviceBtnType)
        //   // console.log('New input from device is received: ', device.setHidWorkingStateAsync(j.enumHidState.GN_HID));
        //   console.log('New input from device is received: ', j.enumDeviceBtnType[btnType], btnValue);
        //   if (j.enumDeviceBtnType[btnType] == "OffHook" && btnValue == true) {
        //     console.log("PC || Start/Stop")
        //   }
        //   else if (j.enumDeviceBtnType[btnType] == "LineBusy" && btnValue == true) {
        //     console.log("Tel Banc || Start Rec")
        //   }
        //   else if (j.enumDeviceBtnType[btnType] == "LineBusy" && btnValue == false) {
        //     console.log("Tel Vert || Stop Rec")
        //   }
        // });
    });   
    jabra.on('detach', (device) => {
      console.log('deconnecte')
    }) 
});