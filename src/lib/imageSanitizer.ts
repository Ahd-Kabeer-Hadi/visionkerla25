const sanitizeImageUrl = (url : string) => {
    try {
      const decodedUrl = decodeURIComponent(url);
      const urlObject = new URL(decodedUrl);
      return urlObject.origin + urlObject.pathname;
    } catch (error) {
      console.error("Invalid URL:", error);
      return "";
    }
  };

  export default sanitizeImageUrl