import React, {useState, useCallback} from "react";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
import { Image } from "antd";

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
            </div> : <Image.PreviewGroup>
                {photos.map((item, i) => (
                        <Image
                            width={400}
                            src={item.src}
                            key={i}
                        />
                    )
                )}
            </Image.PreviewGroup>
    );
}

export default AllPhoto
