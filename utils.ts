export const handleDownload = async (url: string, fileName: string) => {
  // using Java Script method to get PDF file
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    // Creating new object of PDF file
    const fileURL = window.URL.createObjectURL(blob);
    // Setting various property values
    const alink = document.createElement('a');
    alink.href = fileURL;
    alink.download = fileName;
    alink.click();
    return Promise.resolve();
  } catch (error) {
    console.error('error downloading pdf: ', error);
  }
};
