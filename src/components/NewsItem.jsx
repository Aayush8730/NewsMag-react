const NewsItem = ({title ,description ,src , url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-1 px-1 py-2" style= {{maxWidth : "345px" , minHeight : "468px" }}>
      <img src= {src?src:"https://images.pexels.com/photos/2538121/pexels-photo-2538121.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480&fit=crop&h=408"} style = {{minHeight : "284px"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">
          {description?description.slice(0,90) :"The description of the news is not available the api. Click on Read More to know more!!"}
          
        </p>
        <a href= {url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
