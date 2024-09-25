
export default function ActorCard(props) {
  const actorImage = props.profile_path ? `https://image.tmdb.org/t/p/w500/${props.profile_path}` : './person-placeholder.jpeg';
  return (
    <div key={props.id} className="actor-card">
      <div className="actor-card-wrapper">

          <ul className="actor-details">
            <div className="actor-poster-container">
{actorImage && <li>
              <img className="actor-poster" src={actorImage} alt={`${props.name} poster`} />
            </li>}
            </div>
            

            <div className="actor-background-box">
              <div className="actor-text-box">

                <li className="actor-name">{props.name}</li>
                {/* <li className="actor-character">{props.character}</li> */}
              </div>
            </div>
          </ul>
        
        
      </div>
    </div>
  );
}
