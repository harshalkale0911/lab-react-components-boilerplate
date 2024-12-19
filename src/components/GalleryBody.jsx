import './GalleryBody.css';
import { imageData } from './ImageGallery';
 

function GalleryBody() {
  return (
    <div>
      {imageData.map((image) => (
        <div key={image.id} className="column">
          <img src={image.img} alt="Gallery" />
        </div>
      ))}
    </div>
  );
}

export default GalleryBody;
