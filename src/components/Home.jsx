import React, { useEffect, useState } from "react";

const Home = () => {
  const [heroData, setHeroData] = useState([]);
  const getHeroes = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ddf941c91fmsha955b7daa3acf24p16f1a1jsnae26af1ac5bb",
        "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
      },
    };

    const data = await fetch(
      "https://superhero-search.p.rapidapi.com/api/heroes",
      options
    );
    const res = await data.json();
    setHeroData(res);
  };
  useEffect(() => {
    getHeroes();
  }, []);

  return (
    <div className="heroDiv">
      {heroData &&
        heroData.map((ele, key) => {
          const relationArray=ele.connections.relatives.split(",").slice(0,3)
          return (
            
              <div key={key} className="heroImageDiv">
                <img src={ele.images.md} alt="" />
                <div className="heroDetailsDiv">
                <span className="name">{ele.name}</span>

                {ele.biography.firstAppearance !== "-" &&ele.biography.firstAppearance!==null ? (
                  <span className="appeared">
                    <span>First appeared</span> in {ele.biography.firstAppearance}
                  </span>
                ) : null}

                {ele.biography.publisher !== "-" && ele.biography.publisher!==null ? (
                  <span className="publisher">
                    <span>Published by</span> {ele.biography.publisher}
                  </span>
                ) : null}

                {ele.work.occupation !== "-" &&  ele.work.occupation!==null? (
                  <span className="occupation">
                    <span>A</span> {ele.work.occupation}
                  </span>
                ) : null}
                {ele.connections.relatives !== "-" && ele.connections.relatives!==null? (
                  <span className="relations">
                    <span>Relations:</span>
                    {
                      relationArray.map((ele,key)=>{
                        return (
                          <span 
                          key={key}
                          className="indRelation">
                            -{ele}
                          </span>
                        )
                      })
                    }
                  </span>
                ) : null}
              </div>
              </div>
          );
        })}
    </div>
  );
};

export default Home;
