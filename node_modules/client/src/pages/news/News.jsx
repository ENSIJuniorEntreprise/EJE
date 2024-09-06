import React, { useEffect, useState } from 'react';
import { RightArticle } from "./RightArticle";
import Button from "./Button";
import Search from "./Search";
import FirstHighlight from "./FirstHighlight";
import Banner from "./Banner";
import Loader from '../../components/Loader';
import { BaseUrl } from './../../api/axios'; 

export function News() {
  const [articles, setArticles] = useState([]);
  const [article0, setArticle0] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Add loading state
  const articlesPerPage = 3;

  useEffect(() => {
    fetch(`${BaseUrl}/article/recent`)
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles);
        const frontArticle = data.articles.find(article => article.onFront === true);
        setArticle0(frontArticle);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
        setLoading(false); // Set loading to false even if there is an error
      });
  }, []);

  const handleSearch = (query) => {
    if (query) {
      setLoading(true); // Set loading to true when starting a search
      fetch(`http://localhost:8000/article/rz?search=${query}`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.articles);
          setLoading(false); // Set loading to false after search results are fetched
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
          setLoading(false); // Set loading to false even if there is an error
        });
    } else {
      setSearchResults([]);
    }
  };

  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const displayedArticles = searchResults.length > 0 ? searchResults.slice(startIndex, endIndex) : articles.slice(startIndex, endIndex);

  return (
    <div>
      <div className="news bg-[#1F2029]">
        <Banner />
        {loading ? (
          <Loader/>
        ) : (
          <>
            <FirstHighlight {...article0} />

            <div style={{ margin: "20px auto" }} className="xxs:w-[90%] md:w-[90%] lg:w-[90%] dlg:w-[70%] sm:max-w-full">
              <h1 className="text-[#2DA2DD] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 font-montserrat">
                Discover
              </h1>
              <h1 className="text-[#DFDED2F7] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat">
                Our latest news
              </h1>
              <br />
              <div className="bg-[#2DA2DD] h-1 w-[100px] sm:w-[200px] mb-4"></div>
            </div>

            <Search onSearch={handleSearch} />
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
                {displayedArticles.map((article, index) => (
                  <RightArticle key={index} {...article} reverse={index % 2 !== 0} />
                ))}
              </div>
            </div>

            <br />
            <br />
            <Button
              onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
              totalPages={Math.ceil((searchResults.length > 0 ? searchResults.length : articles.length) / articlesPerPage)}
            />

            <br />
            <br />
          </>
        )}
      </div>
    </div>
  );
}
