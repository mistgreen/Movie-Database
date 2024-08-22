import Image from 'next/image';

export default function Footer() {
    return (
      <footer>
        <div>
          <h4>Marie Stringer 2024</h4>
          <p>This site is powered with support from 
          <Image 
                src="/tmdb.png" 
                alt="tmdb logo"
                width={40}  // Specify width
                height={10} // Specify height
            /></p>
          </div>
      </footer>
    );
  }
  