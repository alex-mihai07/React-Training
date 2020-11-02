import React, {useEffect, useState} from "react";
import axios from "axios";

const URL =  "https://hn.algolia.com/api/v1/search";
const ERROR_TYPES = {
    "Network Error": "Something happen! please retry"
};

const App4 = () => {
    const [articles, setArticles] = useState([]);
    const [query, setQuery] = useState('redux');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchArticles = async () => {
        setIsLoading(true);
        setErrorMessage('');

        try {
            const response = await axios(`${URL}?query=${query}`);
            const { hits } = response.data;

            setArticles(hits);
        } catch (e) {
            setErrorMessage(ERROR_TYPES[e.message] ?? "Ooooops!");
        }

        setIsLoading(false);
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    const handleOnChange = (event) => {
        setQuery(event.target.value)
    };

    const handleOnClick = (event) => {
      fetchArticles();
    };

    const ShowContent = () => {
        if (isLoading) {
            return <p>Loading ...</p>
        }

        if (errorMessage.length) {
            return <p>Error: {errorMessage}</p>
        }

        return <ul>
            {articles.map(item =>
                <li key={item.objectID}>{item.author} - {item.title}</li>)
            }
        </ul>;
    };

    return (
        <div>
            <div>
                <label htmlFor='search-id'/>
                <input type="text" id='search-id' value={query} onChange={handleOnChange}/>
                <button onClick={handleOnClick}>Search</button>
            </div>
            <ShowContent />
        </div>
    )
};

export default App4
