import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";

const ModalImgDetail = ({ isOpen, onClose, imgInfo }) => {
  console.log(imgInfo);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{imgInfo?.title ?? "Image"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={imgInfo?.url} width="100%" />
        </ModalBody>
        <ModalFooter>
          <Stack spacing={3} align="flex-start">
            <Text>Upload date: {imgInfo?.uploadDate}</Text>
            <Text>By: {imgInfo?.user ?? "Anonymous"}</Text>
            <Text>Rating: {imgInfo?.rating}</Text>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalImgDetail;
