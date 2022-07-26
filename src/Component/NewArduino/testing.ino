[23/7 20.23] BaraAnanda: void HomePage() {
  info = 0;
  webpage += F("<h4>Select File to Upload</h4>");
  webpage += F("<FORM action='/fupload' method='post' enctype='multipart/form-data'>");
  webpage += F("<input class='buttons' style='width:40%' type='file' name='fupload' id = 'fupload' value=''><br>");
  webpage += F("<br><button class='buttons' style='width:10%' type='submit'>Upload File</button><br>");
  webpage += F("<a href='/'>[Back]</a><br><br>");
  server.send(200, "text/html", webpage);
  SendHTML_Content();
  SendHTML_Stop(); // Stop is needed because no content length was sent
}
[23/7 20.23] BaraAnanda: if (UploadFile) {        // If the file was successfully created
      //info = 1;
      //test2.print(info);
      //Serial.println(kirim);

      UploadFile.close();   // Close the file again
      Serial.print("Upload Size: "); Serial.println(uploadfile.totalSize);
      webpage = "";
      //append_page_header();
      webpage += F("<h3>File was successfully uploaded</h3>");
      webpage += F("<h2>Uploaded File Name: "); webpage += uploadfile.filename + "</h2>";
      webpage += F("<h2>File Size: "); webpage += file_size(uploadfile.totalSize) + "</h2><br>";
      //append_page_footer();
      server.send(200, "text/html", webpage);
    }