import { Carousel } from "@/components/Carousel";
import { CarouselItem } from "@/components/CarouselItem";
import { Footer } from "@/components/Footer";
import { StepItem } from "@/components/StepItem";
import { Steps } from "@/components/Steps";
import { Characteristics } from "@/components/Tabs/Characteristics";
import { PetTab } from "@/components/Tabs/PetTab";
import { ResultsTab } from "@/components/Tabs/ResultsTab";
import { Topbar } from "@/components/Topbar";
import { useForm } from "@/hooks/useForm";
import { Dog } from "@/icons/Dog";
import { Pencil } from "@/icons/Pencil";
import { Pointer } from "@/icons/Pointer";
import { Toaster } from "react-hot-toast";

const initialForm = {
    currentSelected: 0,
    pet: "",
    characteristics: [],
};

export default function Home() {
    const formController = useForm(initialForm);
    return (
        <>
            <Toaster />
            <Topbar />
            <section>
                <Steps>
                    <StepItem
                        icon={<Dog size={20} />}
                        id={0}
                        currentSelected={formController.fields.currentSelected}
                    >
                        Select your pet
                    </StepItem>
                    <StepItem
                        icon={<Pencil size={20} />}
                        id={1}
                        currentSelected={formController.fields.currentSelected}
                    >
                        Add your pet&apos;s characteristics
                    </StepItem>
                    <StepItem
                        icon={<Pointer size={20} />}
                        id={2}
                        currentSelected={formController.fields.currentSelected}
                    >
                        Pick the perfect name
                    </StepItem>
                </Steps>
                <Carousel
                    currentSelected={formController.fields.currentSelected}
                >
                    <CarouselItem>
                        <PetTab formController={formController} />
                    </CarouselItem>
                    <CarouselItem>
                        <Characteristics formController={formController} />
                    </CarouselItem>
                    <CarouselItem>
                        <ResultsTab formController={formController} />
                    </CarouselItem>
                </Carousel>
            </section>

            <Footer />
        </>
    );
}
