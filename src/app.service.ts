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

  loadAllImages() {
    const imageFolder = join(__dirname, this.imageFolder);
    glob(`${imageFolder}*.*`, (err, files) => {
      files.forEach(element => {
        if (
          element
            .split('/')
            .pop(-1)
            .split('.')[1] === 'jpg' ||
          element
            .split('/')
            .pop(-1)
            .split('.')[1] === 'png' ||
          element
            .split('/')
            .pop(-1)
            .split('.')[1] === 'jpeg'
        ) {
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
        if (
          element
            .split('/')
            .pop(-1)
            .split('.')[1] === 'jpg' ||
          element
            .split('/')
            .pop(-1)
            .split('.')[1] === 'png' ||
          element
            .split('/')
            .pop(-1)
            .split('.')[1] === 'jpeg'
        ) {
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

  loadAllVideos() {
    const imageFolder = join(__dirname, this.videoFolder);
    glob(`${imageFolder}*.*`, (err, files) => {
      files.forEach(element => {
        if (
          element
            .split('/')
            .pop(-1)
            .split('.')[1] === 'mp4' ||
          element
            .split('/')
            .pop(-1)
            .split('.')[1] === '3gp' ||
          element
            .split('/')
            .pop(-1)
            .split('.')[1] === 'flv' ||
          element
            .split('/')
            .pop(-1)
            .split('.')[1] === 'mvk'
        ) {
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
        if (
          element
            .split('/')
            .pop(-1)
            .split('.')[1] === 'jpg' ||
          element
            .split('/')
            .pop(-1)
            .split('.')[1] === 'png' ||
          element
            .split('/')
            .pop(-1)
            .split('.')[1] === 'jpeg'
        ) {
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
}
