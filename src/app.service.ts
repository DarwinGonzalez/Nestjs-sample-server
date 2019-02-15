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
    this.getAllImages();
    this.getAllVideos();
  }

  // Function that returns URL image given a name (maybe delete in the future)
  getImageByName(imgName): string {
    const imgPath = this.getImgPath(imgName);
    return imgPath;
  }

  // Function that get all images URL's and return an array with all of it
  getAllImages() {
    const imageFolder = join(__dirname, this.imageFolder);
    glob(`${imageFolder}*.*`, (err, files) => {
      files.forEach(element => {
        if (
          element.split('.')[1] === 'jpg' ||
          element.split('.')[1] === 'png' ||
          element.split('.')[1] === 'jpeg'
        ) {
          this.imageNames.push(element);
        }
      });
    });
  }

  // Function that returns URL video given a name (maybe delete in the future)
  getVideoByName(videoName): string {
    const videoPath = this.getVideoPath(videoName);
    return videoPath;
  }

  // Function that get all videos URL's and return an array with all of it
  getAllVideos() {
    const imageFolder = join(__dirname, this.videoFolder);
    glob(`${imageFolder}*.*`, (err, files) => {
      files.forEach(element => {
        if (
          element.split('.')[1] === 'mp4' ||
          element.split('.')[1] === '3gp' ||
          element.split('.')[1] === 'flv' ||
          element.split('.')[1] === 'mvk'
        ) {
          this.videoNames.push(element);
        }
      });
    });
  }

  // Function that get the absolute path of the image
  private getImgPath(imgName: string) {
    return join(__dirname, this.imageFolder, imgName);
  }

  // Function that get the absolute path of the video
  private getVideoPath(videoName: string) {
    return join(__dirname, this.videoFolder, videoName);
  }
}
