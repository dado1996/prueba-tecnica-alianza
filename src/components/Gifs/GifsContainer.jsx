import {
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { getSearch, getTrending } from "../../services/images";
import ModalImgDetail from "../Modals/ModalImgDetail";

const GifsContainer = () => {
  const { auth } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [imageList, setImageList] = useState([]);
  const [modalImage, setModalImage] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [imageQuantity, setImageQuantity] = useState("25");

  const setImages = async () => {
    try {
      if (!searchQuery) {
        const response = await getTrending(imageQuantity);
        const result = response.data;
        setImageList(
          result.data.map((i) => ({
            url: i.images.original.url,
            id: i.id,
            w: i.images.original.width,
            h: i.images.original.height,
            title: i.title,
            user: i.username,
            rating: i.rating,
            uploadDate: i.import_datetime,
          }))
        );
      } else {
        const response = await getSearch(searchQuery, imageQuantity);
        const result = response.data;
        setImageList(
          result.data.map((i) => ({
            url: i.images.original.url,
            id: i.id,
            w: i.images.original.width,
            h: i.images.original.height,
            title: i.title,
            user: i.username,
            rating: i.rating,
            uploadDate: i.import_datetime,
          }))
        );
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    setImages();
  }, [searchQuery, imageQuantity]);

  return (
    <>
      <ModalImgDetail
        isOpen={modalImage}
        onClose={() => {
          setModalImage(false);
          setCurrentImage(null);
        }}
        imgInfo={currentImage}
      />
      <Flex direction="column" width="100vw" padding="1rem">
        <Flex justifyContent="space-around" gap="1.5rem">
          <Input
            type="text"
            id="search"
            placeholder="Search..."
            onChange={(txt) => setSearchQuery(txt.target.value)}
            background="white"
          />

          <Select
            placeholder="Seleccione la cantidad..."
            onChange={(event) => setImageQuantity(event.target.value)}
            background="white"
            maxWidth="100px"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </Select>

          <Text>Hi, {auth && auth.name}</Text>
        </Flex>
        <Grid
          gap="2rem"
          templateColumns="repeat(auto-fit, minmax(240px, 1fr))"
          autoRows="240px"
        >
          {imageList.map((img) => (
            <GridItem
              key={img.id}
              backgroundImage={`url(${img.url})`}
              backgroundRepeat="no-repeat"
              colSpan={img.w >= 480 && 2}
              rowSpan={img.h >= 480 && 2}
              onClick={() => {
                setModalImage(true);
                setCurrentImage(img);
              }}
              cursor="pointer"
              border="1px solid"
              borderColor="blackAlpha.100"
              borderRadius="8px"
            />
          ))}
        </Grid>
      </Flex>
    </>
  );
};

export default GifsContainer;
