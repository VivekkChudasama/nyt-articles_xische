import React, { useState, useEffect } from 'react';
import ArticleList from './components/ArticleList';
import ArticleDetails from './components/ArticleDetails';
import { fetchArticles } from './services/api';

const App = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const [period, setPeriod] = useState(7); // Default to 7 days
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const loadArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchArticles(period);
        setArticles(data);
      } catch (err) {
        setError('Failed to fetch articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, [period]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 mainContainer">
      <div className="container mx-auto px-10 py-12">
        <h1 className="text-2xl font-bold mb-4 text-center">NY Times Most Popular Articles</h1>

        {!selectedArticle ? (
          <>
            <div className="flex justify-center mb-4">
              <label className="mr-2 text-lg font-medium">Select Period:</label>
              <select
                value={period}
                onChange={(e) => setPeriod(Number(e.target.value))}
                className="border rounded px-2 py-1 text-lg"
              >
                <option value={1}>Last 1 Day</option>
                <option value={7}>Last 7 Days</option>
                <option value={30}>Last 30 Days</option>
              </select>
            </div>

            {/* Show Loading or Error */}
            {loading && <p className="text-center text-blue-500">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {/* Articles List */}
            {!loading && !error && (
              <ArticleList articles={articles} onSelectArticle={setSelectedArticle} />
            )}
          </>
        ) : (
          <ArticleDetails article={selectedArticle} onBack={() => setSelectedArticle(null)} />
        )}
      </div>
    </div>
  );
};

export default App;
