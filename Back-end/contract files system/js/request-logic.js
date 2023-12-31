// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!


function getContentType(filename) {
  const extension = filename.match(/.*\.([^\.]*)$/)[1];
  const contentTypes={
    'html': 'text/html',
    'jpg': 'image/jpeg',
    'css': 'text/css',
    'jpeg': 'image/jpeg',
    'unknown': 'text/plain'
  }

  return contentTypes[extension];
}