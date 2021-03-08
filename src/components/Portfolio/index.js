import React, { useEffect, useState } from "react";
// import Gallery from "react-grid-gallery";
import { SRLWrapper } from "simple-react-lightbox";
import images from "./data";
import { Nav, Panel } from "rsuite";

const index = () => {
  // const [portimages, setportimages] = useState([
  //   {
  //     src: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1",
  //     caption: "Lorem ipsum dolor sit amet",
  //     thumbnail: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1",
  //     thumbnailWidth: 416,
  //     thumbnailHeight: 174,
  //   },
  //   {
  //     src: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2",
  //     caption: "Commodo commodo dolore",
  //     thumbnail: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2",
  //     thumbnailWidth: 416,
  //     thumbnailHeight: 174,
  //   },
  //   {
  //     src: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3",
  //     caption: "Commodo commodo dolore",
  //     thumbnail: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3",
  //     thumbnailWidth: 416,
  //     thumbnailHeight: 174,
  //   },
  //   {
  //     src: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4",
  //     caption: "Lorem ipsum dolor sit amet",
  //     thumbnail: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4",
  //     thumbnailWidth: 416,
  //     thumbnailHeight: 174,
  //   },
  //   {
  //     src: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5",
  //     caption: "Commodo commodo dolore",
  //     thumbnail: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5",
  //     thumbnailWidth: 416,
  //     thumbnailHeight: 174,
  //   },
  //   {
  //     src: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=6",
  //     caption: "Commodo commodo dolore",
  //     thumbnail: "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=6",
  //     thumbnailWidth: 416,
  //     thumbnailHeight: 174,
  //   },
  // ]);

  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <section className="portfolio-sec" id="portfolio">
      <div className="container">
        <h3 className="title">Portfolio</h3>
        <div className="row">
          <div className="col-md-12">
            <div className="tags">
              <Nav>
                <TagButton
                  name="all"
                  tagActive={tag === "all" ? true : false}
                  handleSetTag={setTag}
                />

                <TagButton
                  name="social Media"
                  tagActive={tag === "social Media" ? true : false}
                  handleSetTag={setTag}
                />

                <TagButton
                  name="ui / ux"
                  tagActive={tag === "ui / ux" ? true : false}
                  handleSetTag={setTag}
                />

                <TagButton
                  name="Graphic Design"
                  tagActive={tag === "Graphic Design" ? true : false}
                  handleSetTag={setTag}
                />
                <TagButton
                  name="2d gif Animation"
                  tagActive={tag === "2d gif Animation" ? true : false}
                  handleSetTag={setTag}
                />
              </Nav>
            </div>
          </div>
        </div>
        <SRLWrapper>
          <div className="container">
            <div className="row">
              {filteredImages.map((image) => (
                <div key={image.id} className="col-lg-4 col-md-6 my-2">
                  <Panel shaded bordered bodyFill>
                    <a href={image.url}>
                      <img className="image" src={image.url} alt="" />
                    </a>
                  </Panel>
                </div>
              ))}
            </div>
          </div>
        </SRLWrapper>
      </div>
    </section>
  );
};

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <Nav.Item
      onClick={() => handleSetTag(name)}
      className={`tag ${tagActive ? "active" : null}`}
    >
      {name.toUpperCase()}
    </Nav.Item>

    // <button
    //   className={`tag ${tagActive ? "active" : null}`}
    //   onClick={() => handleSetTag(name)}
    // >
    //   {name.toUpperCase()}
    // </button>
  );
};

export default index;
