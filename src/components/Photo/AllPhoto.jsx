import React, {useState, useCallback} from "react";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

const AllPhoto = ({photos}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, {photos, index}) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        photos.length >= 2 ?
            <div>
                <Gallery photos={photos} onClick={openLightbox} targetRowHeight={250}/>
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div> : <div>
                {photos.map((item, i) => (
                        <img src={item.src} key={i} style={{width: '400px', height: "auto"}}/>
                    )
                )}
            </div>
    );
}

export default AllPhoto
