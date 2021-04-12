import React from "react";
import SearchBar from "./components/SearchBar";
import unsplash from "./components/api/unsplush";
import ImageList from "./components/ImageList";


class App extends React.Component{
  state = { images: [] };
  
  onSearchSubmit = async  term => {
    const response = await unsplash.get("/search/photos",{
      params: {query: term}
    });
    this.setState({images: response.data.results});
  }

  render(){
  return (
    <div className = "ui segment" style = {{marginTop:"10px"}}>
    <SearchBar onSubmit = {this.onSearchSubmit} />
      Found: {this.state.images.length} images 
      <ImageList images = { this.state.images} />
    
    </div>
  );
  }
}

export default App;
