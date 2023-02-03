import { Carousel } from "@/components/Carousel";
import { CarouselItem } from "@/components/CarouselItem";
import { Footer } from "@/components/Footer";
import { StepItem } from "@/components/StepItem";
import { Steps } from "@/components/Steps";
import { Topbar } from "@/components/Topbar";
import { Dog } from "@/icons/Dog";
import { Pencil } from "@/icons/Pencil";
import { Pointer } from "@/icons/Pointer";

export default function Home() {
    return (
        <>
            <Topbar />
            <section>
                <Steps>
                    <StepItem
                        icon={<Dog size={20} />}
                        id={0}
                        currentSelected={0}
                    >
                        Select your pet
                    </StepItem>
                    <StepItem
                        icon={<Pencil size={20} />}
                        id={1}
                        currentSelected={0}
                    >
                        Add your pet&apos;s characteristics
                    </StepItem>
                    <StepItem
                        icon={<Pointer size={20} />}
                        id={2}
                        currentSelected={0}
                    >
                        Pick the perfect name
                    </StepItem>
                </Steps>
                <Carousel>
                    <CarouselItem>
                        <h1>Select your pet type</h1>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quia praesentium incidunt sit
                                nemo velit magni natus modi optio provident
                                ullam itaque illo numquam exercitationem totam
                                neque sunt, eum, voluptates voluptate!
                            </p>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <h1>Select your pet type</h1>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quia praesentium incidunt sit
                                nemo velit magni natus modi optio provident
                                ullam itaque illo numquam exercitationem totam
                                neque sunt, eum, voluptates voluptate!
                            </p>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <h1>Select your pet type</h1>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quia praesentium incidunt sit
                                nemo velit magni natus modi optio provident
                                ullam itaque illo numquam exercitationem totam
                                neque sunt, eum, voluptates voluptate!
                            </p>
                        </div>
                    </CarouselItem>
                </Carousel>
            </section>

            <Footer />
        </>
    );
}
