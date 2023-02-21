import React from 'react'

const Search = ({searchData,setSearchData}) => {
  console.log(searchData)
  return (
    <div className='heroDiv'>
        {searchData &&
          searchData.map((ele, key) => {
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
                  <button 
                  className='closeBtn'
                  type='button'
                  onClick={()=>setSearchData([])}
                  >
                    Close
                  </button>
                </div>
                </div>
            );
          })}
    </div>
  )
}

export default Search
