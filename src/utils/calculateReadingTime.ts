// src/utils/calculateReadingTime.ts

export default function calculateReadingTime(text: string): string {
    const wordsPerMinute = 200; // Average reading speed
    const textLength = text.split(/\s+/).length; // Split by spaces to get word count
    const minutes = Math.ceil(textLength / wordsPerMinute);
  
    return `${minutes} min read`;
  }
  