import SeriesData from "../api/SeriesData.json";

const NetflixSeries = () => {
    return (
        <ul>
            {SeriesData.map((CurElem) => (
                <li key={CurElem.id}>
                    <div>
                        <img 
                            src={CurElem.img_url}
                            alt="series"
                            width="40%"
                            height="40%"
                        />
                    </div>
                    <h1>Name: {CurElem.name}</h1>
                    <h3>Rating: {CurElem.rating}</h3>
                    <p>Summary: {CurElem.description}</p>
                    <p>Cast: {CurElem.cast}</p>
                    <a href={CurElem.watch_url} target="_blank" rel="noopener noreferrer">
                        <button>Watch Now</button>
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default NetflixSeries;
