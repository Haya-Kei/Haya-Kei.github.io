import "../styles/Gallery.css";
import stackPhotoA from "../img/DSC06673_1.37.1.png";
import stackPhotoB from "../img/DSC06673_1.33.1.png";
import gridPhotoA from "../img/DSC06673_1.24.1.png";
import gridPhotoB from "../img/hiyoshi_image.JPG";
import gridPhotoC from "../img/tree_image.PNG";
import gridPhotoD from "../img/Untitled_1.11.1.png";

const photos = [
  { src: stackPhotoA, alt: "Photograph 01" },
  { src: stackPhotoB, alt: "Photograph 02" },
  { src: gridPhotoA, alt: "Photograph 03" },
  { src: gridPhotoB, alt: "Photograph 04" },
  { src: gridPhotoC, alt: "Photograph 05" },
  { src: gridPhotoD, alt: "Photograph 06" },
];

function Gallery() {
  return (
    <div className="gallery-page">
      <section className="section gallery-grid-section">
        <div className="section-inner">
          <div className="section-header">
            <p className="eyebrow">Photo Gallery</p>
            <h1 className="section-title">Gallery</h1>
          </div>
        </div>
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <figure className="gallery-grid__item" key={index}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;
