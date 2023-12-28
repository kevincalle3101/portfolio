import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import {
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  useDisclosure,
  Button
} from "@nextui-org/react";
import { caraouselHook } from "@/utils/hooks/caraousel";
import { useMemo } from "react";
import Image from "next/image";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

interface Project {
  title: string;
  description: string;
  imgCover: string;
  gitUrl: string;
  previewUrl: string;
  imagePathArray: string[];
}

const ProjectCard = ({ imgCover, title, description, gitUrl, previewUrl, imagePathArray } : Project) => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  let imagePathArrayLength: number = useMemo(() => {
    return imagePathArray.length
  }, [imagePathArray])
  const { position, clickNext, clickPrev } = caraouselHook(imagePathArrayLength);

  return (
    <div>
      <div className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgCover})`, backgroundSize: "cover"}}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl} target="blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <button
            onClick={onOpen}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </button>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        {/* <p className="text-[#ADB7BE]">{description}</p> */}
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={true}
      // className="bg-blue100 dark:bg-blue1000 text-black dark:text-gray100"
      size="2xl" 
      backdrop="opaque"
      classNames={{
        body: "py-6",
        // backdrop: "bg-[#4c0519]/10 backdrop-opacity-40",
        base: "border-[#292f46] bg-[#19172c] dark:bg-[#121212] text-white",
        header: "border-b-[1px] border-[#ADB7BE]/60",
        footer: "border-t-[1px] border-[#ADB7BE]/60",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
      >
      <ModalContent>
      {(onClose) => (
        <>
         <ModalHeader className="flex flex-col gap-1 text-3xl">{title}</ModalHeader>
              <ModalBody>
                <p>{description}</p>
                <ArrowBackIosRoundedIcon onClick={clickPrev}/>
                <Image src={imagePathArray[position]} alt={title} className="rounded-xl" width={1000} height={500} />
                <ArrowForwardIosRoundedIcon onClick={clickNext}/>
              </ModalBody>
              <ModalFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button> */}
                <Button className="bg-[#e11d48] shadow-lg shadow-rose-500/30" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
        </>
      )}
      </ModalContent>
      </Modal>
    </div>
  );
};

export default ProjectCard;
