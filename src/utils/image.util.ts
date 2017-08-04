export class ImageUtils {

  private static _acceptedFormats: Array<string> = ['jpg', 'jpeg', 'gif', 'png'];

  public static imageFormatCheck(imageURL: string) {
    console.log('ImageURL:', imageURL.split('.'));
    const extension = imageURL.split('.')[imageURL.split('.').length - 1];
    console.log('Extension: ', extension);
    return this._acceptedFormats.includes(extension);
  }
}
