import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { glob } from 'glob';

@Injectable()
export class AppService {
  // This are the relative routes for the folders that contains the images/videos (should change this to yours)
  private imageFolder = '../../public/images/';
  private videoFolder = '../../public/videos/';
  private IPAddress = '10.80.132.57';
  private PORT = '8887';

  // This URL's are used to serve the images/videos from local (IP/Port must be change to the machine that runs the backEnd)
  private serverImagesURL = `http://${this.IPAddress}:${this.PORT}/images/`;
  private serverVideosURL = `http://${this.IPAddress}:${this.PORT}/videos/`;

  public imageNames = Array<string>();
  public videoNames = Array<string>();

  constructor() {
    this.loadAllImages();
    this.loadAllVideos();
  }

  // Function that returns URL image given a name (maybe delete in the future)
  getImageByName(imgName): string {
    const imgPath = this.getImgPath(imgName);
    return imgPath;
  }

  loadAllImages() {
    const imageFolder = join(__dirname, this.imageFolder);
    const files = glob.sync(`${imageFolder}*.*`);
    files.forEach(element => {
      if (this.checkImageExtension(element)) {
        this.imageNames.push(
          this.serverImagesURL + element.split('/').pop(-1)
        );
      }
    });
  }

  // Function that get all images URL's and return an array with all of it
  getAllImages(): any {
    const imageFolder = join(__dirname, this.imageFolder);
    const files = glob.sync(`${imageFolder}*.*`);
    this.clearImagesNames();
    files.forEach(element => {
      if (this.checkImageExtension(element)) {
        this.imageNames.push(
          this.serverImagesURL + element.split('/').pop(-1)
        );
      }
    });
    return this.imageNames;
  }

  // Function that returns URL video given a name (maybe delete in the future)
  getVideoByName(videoName): string {
    const videoPath = this.getVideoPath(videoName);
    return videoPath;
  }

  loadAllVideos() {
    const videoFolder = join(__dirname, this.videoFolder);
    const files = glob.sync(`${videoFolder}*.*`);
    files.forEach(element => {
      if (this.checkVideoExtension(element)) {
        this.videoNames.push(
          this.serverVideosURL + element.split('/').pop(-1)
        );
      }
    });
  }

  // Function that get all videos URL's and return an array with all of it
  getAllVideos(): any {
    const videoFolder = join(__dirname, this.videoFolder);
    const files = glob.sync(`${videoFolder}*.*`);
    this.clearVideoNames();
    files.forEach(element => {
      if (this.checkVideoExtension(element)) {
        this.videoNames.push(
          this.serverVideosURL + element.split('/').pop(-1)
        );
      }
    });
    return this.videoNames;
  }

  // Function that get the absolute path of the image
  private getImgPath(imgName: string) {
    return join(__dirname, this.imageFolder, imgName);
  }

  // Function that get the absolute path of the video
  private getVideoPath(videoName: string) {
    return join(__dirname, this.videoFolder, videoName);
  }

  // Funtion that clears the array of images names
  private clearImagesNames() {
    this.imageNames = [];
  }

  // Funtion that clears the array of videos names
  private clearVideoNames() {
    this.videoNames = [];
  }

  // Function that check if the files of the folder are images
  private checkImageExtension(absolutePath): boolean {
    if (
      absolutePath
        .split('/')
        .pop(-1)
        .split('.')[1] === 'jpg' ||
      absolutePath
        .split('/')
        .pop(-1)
        .split('.')[1] === 'png' ||
      absolutePath
        .split('/')
        .pop(-1)
        .split('.')[1] === 'jpeg'
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Function that check if the files of the folder are videos
  private checkVideoExtension(absolutePath): boolean {
    if (
      absolutePath
        .split('/')
        .pop(-1)
        .split('.')[1] === 'mp4' ||
      absolutePath
        .split('/')
        .pop(-1)
        .split('.')[1] === '3gp' ||
      absolutePath
        .split('/')
        .pop(-1)
        .split('.')[1] === 'webm' ||
      absolutePath
        .split('/')
        .pop(-1)
        .split('.')[1] === 'mvk' ||
      absolutePath
        .split('/')
        .pop(-1)
        .split('.')[1] === 'flv'
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Return an array of images availables in the web to test the slideshow
  getAllTest(): any {
    return [
      'https://images.unsplash.com/photo-1550424844-f7b914439c1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1550410668-07111b31da19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1111&q=80',
      'https://images.unsplash.com/photo-1550347438-be4afb6ccc60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1095&q=80',
      'https://images.unsplash.com/photo-1550368760-861a8bfe1769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1550409174-a8ea3586299c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80'
    ];
  }

  // Return an array of videos availables in the web to test the videoComponent
  getAllTestVideo(): any {
    return ['https://i.imgur.com/T0zz6b7.mp4'];
  }
}
