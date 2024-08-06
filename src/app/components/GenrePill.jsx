'use client';

export default function GenrePill(props) {

    const handleClick = () => {
        console.log("you clicked " + props.name);
        
          };
        

  return (
    <div key={props.id} className="genre-pill" onClick={handleClick}>
        <p>{props.name}</p>
    </div>
  );
}