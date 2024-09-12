import { validateUrl } from './validations.js';

async function fetchData(url) {
  if (!validateUrl(url)) {
    throw new Error('Invalid URL');
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export { fetchData };