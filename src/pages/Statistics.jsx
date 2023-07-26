import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

function Statistics() {
    const navigate = useNavigate()
    const { id } = useParams()

    const [error, setError] = useState(null);
    const [result, setResult] = useState([]);

    async function fetchStat() {
        const options = {
            method: 'GET',
            url: `https://footapi7.p.rapidapi.com/api/player/${id}/statistics/national`,
            headers: {
                'X-RapidAPI-Key': 'd0a361207emshd9d440f586327bep117b9ajsnd6dfd6565af6',
                'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setResult(response.data);
        } catch (err) {
            setError(err.message);
        }
    }

    useEffect(()=>{
        fetchStat()
    },[id])

    return <div className="px-12">
        <div className="flex justify-between my-3">
            <h1 className="text-2xl">Player national team statistics</h1>
            <button onClick={() => navigate(-1)} className="hover:underline font-semibold">Back</button>
        </div>

        {/* error */}

        <h1 className="text-red-500 text-xl">{error}</h1>
        
        {/* result */}
        <div>
            {console.log(result)}
        </div>

    </div>
}

export default Statistics