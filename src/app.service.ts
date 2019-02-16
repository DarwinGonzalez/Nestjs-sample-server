import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { glob } from 'glob';

@Injectable()
export class AppService {
  // This are the relative routes for the folders that contains the images/videos (should change this to yours)
  private imageFolder = '../../public/images/';
  private videoFolder = '../../public/videos/';

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

  // Function that load images when the constructor is called
  loadAllImages() {
    const imageFolder = join(__dirname, this.imageFolder);
    glob(`${imageFolder}*.*`, (err, files) => {
      files.forEach(element => {
        if (this.checkImgExtension(element)) {
          this.imageNames.push(element);
        }
      });
    });
  }

  // Function that get all images URL's and return an array with all of it
  getAllImages(): any {
    const imageFolder = join(__dirname, this.imageFolder);
    glob(`${imageFolder}*.*`, (err, files) => {
      this.clearImagesNames();
      files.forEach(element => {
        if (this.checkImgExtension(element)) {
          this.imageNames.push(element);
        }
      });
    });
    return this.imageNames;
  }

  // Function that returns URL video given a name (maybe delete in the future)
  getVideoByName(videoName): string {
    const videoPath = this.getVideoPath(videoName);
    return videoPath;
  }

  // Function that load videos when the constructor is called
  loadAllVideos() {
    const imageFolder = join(__dirname, this.videoFolder);
    glob(`${imageFolder}*.*`, (err, files) => {
      files.forEach(element => {
        if (this.checkVideoExtension(element)) {
          this.videoNames.push(element);
        }
      });
    });
  }

  // Function that get all videos URL's and return an array with all of it
  getAllVideos(): any {
    const imageFolder = join(__dirname, this.videoFolder);
    glob(`${imageFolder}*.*`, (err, files) => {
      files.forEach(element => {
        if (this.checkVideoExtension(element)) {
          this.videoNames.push(element);
        }
      });
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

  // Function that check if the files of the folder are images
  private checkImgExtension(absolutePath): boolean {
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
        .split('.')[1] === 'flv' ||
      absolutePath
        .split('/')
        .pop(-1)
        .split('.')[1] === 'mvk'
    ) {
      return true;
    } else {
      return false;
    }
  }
}
