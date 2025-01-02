import { useState, useRef, useEffect } from "react";

import Wave from "./Wave";
import Menu from "./sections/menu/Menu";
import Intro from "./sections/intro/Intro";
import AboutMe from "./sections/about-me/AboutMe";
import Projects from "./sections/projects/Projects";
import Footer from "./sections/footer/Footer";

function Home() {
  const [showMenuPC, setShowMenuPC] = useState(false);
  const [isAboutMeInView, setIsAboutMeInView] = useState(false);
  const [roverAppear, setRoverAppear] = useState(false);
  const targetRef = useRef(null);
  const roverRef = useRef(null); // Ref for Projects section

  function handleScroll() {
    setShowMenuPC(
      window.scrollY >
        document.getElementById("intro").getBoundingClientRect().bottom
        ? true
        : false
    );
  }

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    const aboutMeObserver = new IntersectionObserver(
      ([entry]) => {
        setIsAboutMeInView(entry.isIntersecting); // Update state based on visibility
      },
      { threshold: 0.5 } // 50% of the div must be in view to trigger
    );

    const roverObserver = new IntersectionObserver(
      ([entry]) => {
        setRoverAppear(entry.isIntersecting); // Update state for rover appearance
      },
      { threshold: 0.8 } // 50% of the Projects section must be in view
    );

    if (targetRef.current) {
      aboutMeObserver.observe(targetRef.current);
    }

    if (roverRef.current) {
      roverObserver.observe(roverRef.current);
    }

    // Clean up observers on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (targetRef.current) {
        aboutMeObserver.unobserve(targetRef.current);
      }
      if (roverRef.current) {
        roverObserver.unobserve(roverRef.current);
      }
    };
  }, []);

  return (
    <div className="Home">
      <Menu showMenuPC={showMenuPC} />
      <Intro />
      <Wave
        colorOld={"#0a0c10"}
        colorNew={["#24292f"]}
        waveCode={[
          "M0 573L9.3 483.5C18.7 394 37.3 215 56.2 171C75 127 94 218 112.8 228.3C131.7 238.7 150.3 168.3 169 187.2C187.7 206 206.3 314 225 330.8C243.7 347.7 262.3 273.3 281.2 224.7C300 176 319 153 337.8 147C356.7 141 375.3 152 394 190.8C412.7 229.7 431.3 296.3 450 318C468.7 339.7 487.3 316.3 506.2 345C525 373.7 544 454.3 562.8 436.5C581.7 418.7 600.3 302.3 619 272.7C637.7 243 656.3 300 675 332.3C693.7 364.7 712.3 372.3 731.2 398C750 423.7 769 467.3 787.8 411.3C806.7 355.3 825.3 199.7 844 200.3C862.7 201 881.3 358 890.7 436.5L900 515L900 601L890.7 601C881.3 601 862.7 601 844 601C825.3 601 806.7 601 787.8 601C769 601 750 601 731.2 601C712.3 601 693.7 601 675 601C656.3 601 637.7 601 619 601C600.3 601 581.7 601 562.8 601C544 601 525 601 506.2 601C487.3 601 468.7 601 450 601C431.3 601 412.7 601 394 601C375.3 601 356.7 601 337.8 601C319 601 300 601 281.2 601C262.3 601 243.7 601 225 601C206.3 601 187.7 601 169 601C150.3 601 131.7 601 112.8 601C94 601 75 601 56.2 601C37.3 601 18.7 601 9.3 601L0 601Z",
        ]}
      />
      <div ref={targetRef} styles={"display: flex"}>
        <AboutMe isInView={isAboutMeInView} />
      </div>
      <Wave
        colorOld={"#0a0c10"}
        colorNew={["#24292f"]}
        waveCode={[
          "M0 81L9.3 71.3C18.7 61.7 37.3 42.3 56.2 97.3C75 152.3 94 281.7 112.8 357.5C131.7 433.3 150.3 455.7 169 413.5C187.7 371.3 206.3 264.7 225 282.3C243.7 300 262.3 442 281.2 447C300 452 319 320 337.8 223.2C356.7 126.3 375.3 64.7 394 46.3C412.7 28 431.3 53 450 61C468.7 69 487.3 60 506.2 119.2C525 178.3 544 305.7 562.8 383.8C581.7 462 600.3 491 619 493.5C637.7 496 656.3 472 675 396.3C693.7 320.7 712.3 193.3 731.2 130.2C750 67 769 68 787.8 86.7C806.7 105.3 825.3 141.7 844 201.3C862.7 261 881.3 344 890.7 385.5L900 427L900 0L890.7 0C881.3 0 862.7 0 844 0C825.3 0 806.7 0 787.8 0C769 0 750 0 731.2 0C712.3 0 693.7 0 675 0C656.3 0 637.7 0 619 0C600.3 0 581.7 0 562.8 0C544 0 525 0 506.2 0C487.3 0 468.7 0 450 0C431.3 0 412.7 0 394 0C375.3 0 356.7 0 337.8 0C319 0 300 0 281.2 0C262.3 0 243.7 0 225 0C206.3 0 187.7 0 169 0C150.3 0 131.7 0 112.8 0C94 0 75 0 56.2 0C37.3 0 18.7 0 9.3 0L0 0Z",
        ]}
      />
      <div ref={roverRef}>
        <Projects roverAppear={roverAppear} />
      </div>
      <Wave
        colorOld={"#0a0c10"}
        colorNew={["#24292f", "#1d2025", "#15171b", "#0a0c10"]}
        waveCode={[
          "M0 463L39 261L78 409L117 385L157 133L196 121L235 429L274 246L313 167L352 385L391 145L430 114L470 511L509 463L548 263L587 307L626 213L665 80L704 99L743 13L783 467L822 137L861 477L900 255L900 601L861 601L822 601L783 601L743 601L704 601L665 601L626 601L587 601L548 601L509 601L470 601L430 601L391 601L352 601L313 601L274 601L235 601L196 601L157 601L117 601L78 601L39 601L0 601Z",
          "M0 188L39 123L78 587L117 592L157 460L196 208L235 167L274 204L313 305L352 198L391 242L430 550L470 273L509 280L548 414L587 340L626 221L665 527L704 169L743 410L783 295L822 275L861 520L900 326L900 601L861 601L822 601L783 601L743 601L704 601L665 601L626 601L587 601L548 601L509 601L470 601L430 601L391 601L352 601L313 601L274 601L235 601L196 601L157 601L117 601L78 601L39 601L0 601Z",
          "M0 273L39 566L78 356L117 269L157 305L196 430L235 571L274 571L313 342L352 248L391 360L430 482L470 442L509 463L548 510L587 348L626 298L665 527L704 594L743 348L783 533L822 386L861 549L900 391L900 601L861 601L822 601L783 601L743 601L704 601L665 601L626 601L587 601L548 601L509 601L470 601L430 601L391 601L352 601L313 601L274 601L235 601L196 601L157 601L117 601L78 601L39 601L0 601Z",
          "M0 482L39 456L78 425L117 515L157 430L196 582L235 590L274 574L313 404L352 498L391 448L430 361L470 538L509 414L548 533L587 376L626 359L665 433L704 560L743 495L783 404L822 574L861 511L900 540L900 601L861 601L822 601L783 601L743 601L704 601L665 601L626 601L587 601L548 601L509 601L470 601L430 601L391 601L352 601L313 601L274 601L235 601L196 601L157 601L117 601L78 601L39 601L0 601Z",
        ]}
      />
      <Footer />
    </div>
  );
}

export default Home;
