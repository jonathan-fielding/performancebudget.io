function getResourceSize(resourceSizes, type) {
  const foundResource = resourceSizes.filter((resource) => {
    return resource.resourceType === type;
  });
  
  return foundResource.length ? foundResource[0].budget : 0;
}

module.exports = function parseLighthouseBudget(obj) {
  const budget = obj[0]; // Only supporting first item in array
  const { resourceSizes } = budget;

  return {
      javascript: getResourceSize(resourceSizes, 'script'),
      css: getResourceSize(resourceSizes, 'stylesheet'),
      images: getResourceSize(resourceSizes, 'image'),
      video: getResourceSize(resourceSizes, 'media'),
      fonts: getResourceSize(resourceSizes, 'font'),
      html: getResourceSize(resourceSizes, 'document'),
      total: getResourceSize(resourceSizes, 'total'),
  };
}