// pages/api/video.js
import { createReadStream } from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.resolve('./public/videos/HOSETestDrive.mp4'); // Adjust the path to your file
  
  // Set the headers for inline display
  res.setHeader('Content-Type', 'video/mp4');
  res.setHeader('Content-Disposition', 'inline; filename="HOSETestDrive.mp4"'); // 'inline' for display, 'attachment' for download
  
  // Create a read stream and pipe it to the response
  const fileStream = createReadStream(filePath);
  fileStream.pipe(res);
}
