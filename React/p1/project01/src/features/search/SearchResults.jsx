import { useSelector } from 'react-redux';

export const SearchResults = () => {
    const { results, status } = useSelector((state) => state.search);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error fetching hotels.</p>;
    if (!results.length) return <p>No hotels found.</p>;


    console.log("results", results)

    return (
        <div>
            {results.map((item, index) => (
                <div key={index} style={{ marginBottom: '1rem' }}>
                    <h3>{item.name}</h3>
                    <p>{item.location.city}, {item.location.country}</p>
                    <p>₹{item.pricePerNight} / night</p>
                    <p>Rating: {item.rating}</p>
                </div>
            ))}

        </div>
    );
};
