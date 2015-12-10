function showToast () {
   if(typeof Windows !== undefined) {
     var notifications = Windows.UI.Notifications;
     var template = notifications.ToastTemplateType.toastImageAndText01;
     var toastXml = notifications.ToastNotificationManager.getTemplateContent(template);
     var toastTextElements = toastXml.getElementsByTagName("text");
     toastTextElements[0].appendChild(toastXml.createTextNode("Toast from Codepen"));
     var toastImageElements = toastXml.getElementsByTagName("image");
     toastImageElements[0].setAttribute("src", "http://assets.codepen.io/assets/social/facebook-default.png");
     toastImageElements[0].setAttribute("alt", "red graphic");
     var toast = new notifications.ToastNotification(toastXml);
     var toastNotifier = notifications.ToastNotificationManager.createToastNotifier();
     toastNotifier.show(toast);
   }
}

function  systemAlertCommandInvokedHandler() {
  console.log ("OUTPUT: The " + command.label + " was selected");
}

function cameraCapture() {
  if(typeof Windows != 'undefined') {
   var captureUI = new Windows.Media.Capture.CameraCaptureUI();
   //Set the format of the picture that's going to be captured (.png, .jpg, ...)
   captureUI.photoSettings.format = Windows.Media.Capture.CameraCaptureUIPhotoFormat.png;
   //Pop up the camera UI to take a picture
   captureUI.captureFileAsync(Windows.Media.Capture.CameraCaptureUIMode.photo).then(function (capturedItem) {
      // Do something with the picture
   });
  }
}

function tileNotificationExpiration() {
    var Notifications = Windows.UI.Notifications;
    var tileXml = Notifications.TileUpdateManager.getTemplateContent(Notifications.TileTemplateType.tileWide310x150Text04);

    var currentTime = new Date();
    var seconds = 30;

    var tileTextAttributes = tileXml.getElementsByTagName("text");
    tileTextAttributes[0].appendChild(tileXml.createTextNode("This notification will expire at " + new Date(currentTime.getTime() + seconds * 1000)));

    var tileNotification = new Notifications.TileNotification(tileXml);

    // Set the expiration time on the notification
    var expiryTime = new Date(currentTime.getTime() + seconds * 1000);

    tileNotification.expirationTime = expiryTime;
    Notifications.TileUpdateManager.createTileUpdaterForApplication().update(tileNotification);
}
