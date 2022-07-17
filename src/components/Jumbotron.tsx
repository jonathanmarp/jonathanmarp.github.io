// -- MUI Component
import { Button } from "@mui/material";

// -- MUI Icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Jumbotron: Function = (props: { language: boolean }): any => {
  return (
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-[80%] h-full flex">
          {/* Content */}
          <div className="h-full w-full lg:w-1/2 flex items-center justify-center">
            <div>
              {/* Name */}
              <h1 className="font-bold text-7xl md:text-8xl">Jonathan Gilbert Marpaung</h1>

              {/* Button */}
              <div className="mt-5">
                <Button 
                  variant="text" 
                  color="inherit"
                  href="#about"
                  endIcon={<ArrowForwardIcon />}>{ props.language ? "GET STARTED" : "Memulai" }</Button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="h-full w-1/2 hidden lg:inline-block">
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative">
                <div className="LogoBlock"></div>
                <div className="border border-black text-black LogoBlock absolute top-0 right-0">
                  <h1 className="text-8xl">G</h1>
                </div>
                <div className="flex">
                  <div className="bg-black text-white LogoBlock">
                    <h1 className="text-8xl">J</h1>
                  </div>
                  <div className="border-r border-black text-black LogoBlock rotate-90">
                    <h1 className="text-8xl">M</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Jumbotron;