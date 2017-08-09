export class ImageUtils {

  private static _acceptedFormats: Array<string> = ['jpg', 'jpeg', 'gif', 'png'];
  private static _acceptedTypes: Array<string> = [
    'image/jpg', 'image/jpeg', 'image/png', 'image/gif'
  ];

  public static imageStringFormatCheck(imageURL: string) {
    console.log('ImageURL:', imageURL.split('.'));
    const extension = imageURL.split('.')[imageURL.split('.').length - 1];
    console.log('Extension: ', extension);
    return this._acceptedFormats.includes(extension);
  }

  public static imageObjectFormatCheck(imageObj) {
    console.log('ImageObj:', imageObj);
    return this._acceptedTypes.includes(imageObj.type);
  }
}
