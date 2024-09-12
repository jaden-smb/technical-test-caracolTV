async function registerPartial(name, path) {
    const response = await fetch(path);
    const template = await response.text();
    Handlebars.registerPartial(name, template);
  }
  
  export { registerPartial };