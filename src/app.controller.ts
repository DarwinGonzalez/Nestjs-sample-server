import { Controller, Get, Res, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Given a name of an image it return the image path
  @Get('image/:imgName')
  getImageByName(@Param('imgName') imgName, @Res() res) {
    const imgPath = this.appService.getImageByName(imgName);
    return res.send(imgPath);
  }

  // Returns a vector of URL's of each image in the directory images
  @Get('images')
  getAllImages(@Res() res) {
    const imagePaths = this.appService.imageNames;
    return res.send(imagePaths);
  }

  // Given a name of a video it return the video path
  @Get('video/:videoName')
  getVideoByName(@Param('videoName') videoName, @Res() res) {
    const videoPath = this.appService.getImageByName(videoName);
    return res.send(videoPath);
  }

  // Returns an array of URL's of each video in the directory videos
  @Get('videos')
  getAllVideos(@Res() res) {
    const videosPaths = this.appService.videoNames;
    return res.send(videosPaths);
  }
}
