'use client'

export default function LoadMoreButton() {
    const handleClick = () => {
        console.log('Ive been clicked');
        
    }
    
    return (
        <button onClick={handleClick}>
          Load More
        </button>
      );
  }