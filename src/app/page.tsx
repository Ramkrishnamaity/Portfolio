import PhotoFrame from "@/components/home/PhotoFrame"
import SocialLinks from "@/components/home/SocialLinks"
import Status from "@/components/home/Status"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

const Home: React.FC = () => {

  return (
    <section className="w-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">

          {/* text part */}
          <div className="text-center lg:text-left order-2 lg:order-none">
            <span>Software Developer</span>

            <h1 className="h1 mb-6">
              Hello I'm<br /> <span className="text-accent">Ramkrishna Maity</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eveniet eaque id. Perspiciatis obcaecati totam quia blanditiis possimus atque numquam!
            </p>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button
                size="lg"
                variant="outline"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 lg:mb-0">
                <SocialLinks containerStyle="flex gap-6" iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:trasition-all duration-500" />
              </div>
            </div>

          </div>

          {/* image part */}
          <div className="order-1 lg:order-none mb-8 lg:mb-0">
            <PhotoFrame />
          </div>

        </div>
      </div>
      {/* status */}
      <Status />
    </section>
  )
}

export default Home