type PropTypes = {
  url: string;
  fileName: string;
};

export const handleDownload = async ({ url, fileName }: PropTypes) => {
  // using Java Script method to get PDF file
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    // Creating new object of PDF file
    const fileURL = window.URL.createObjectURL(blob);
    // Setting various property values
    const link = document.createElement('a');
    link.href = fileURL;
    link.download = fileName;
    // some browser needs the anchor to be in the doc
    document.body.append(link);
    link.click();
    setTimeout(() => {
      // For Firefox it is necessary to delay revoking the ObjectURL
      document.body.removeChild(link);
      window.URL.revokeObjectURL(fileURL);
    }, 100);
  } catch (error) {
    console.error('error downloading pdf: ', error);
  }
};
