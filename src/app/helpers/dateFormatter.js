export default function formatDate(releaseDate) {
    const date = new Date(releaseDate);
    const day = String(date.getDate()).padStart(2, '0'); // Ensures two digits
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensures two digits, months are 0-indexed
    const year = date.getFullYear();
    return `${year}`;
  }