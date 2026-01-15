require("dotenv").config();
const getNews = async (req, res) => {
    try {
        const apiKey = process.env.GNEWS_API_KEY;

        if (!apiKey) {
            return res.status(500).json({
                message: "GNews API key not configured"
            });
        }

        // Example: top headlines from India
        const url = `https://gnews.io/api/v4/top-headlines?country=in&lang=en&token=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({
                message: "Failed to fetch news",
                error: data
            });
        }

        res.status(200).json({
            news: data.articles
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong while fetching news",
            error: error.message
        });
    }
};

module.exports = {
    getNews
};
