"use client";

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/utils/tailwind_cn";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
// type CarouselPlugin = UseCarouselParameters[1]
type EmblaPlugin = NonNullable<Parameters<typeof useEmblaCarousel>[1]>[number];
type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: EmblaPlugin[]; // ← tableau de plugins
  orientation?: "horizontal" | "vertical";
  loop?: boolean;
  autoplay?: number; // en millisecondes
  setApi?: (api: CarouselApi) => void;
  itemsToShow?: number;
  dots?: boolean | React.ComponentProps<typeof Button>["variant"]
};

type CarouselDotsProps = React.ComponentProps<"div"> & {
  variant?: React.ComponentProps<typeof Button>["variant"];
  size?: React.ComponentProps<typeof Button>["size"];
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  itemsToShow?: number;
  dots?: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  loop = false,
  autoplay,
  itemsToShow = 1, // ← valeur par défaut
  dots = false,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  // Auto
  const autoplayPlugin = React.useMemo(() => autoplay ? Autoplay({ delay: autoplay, stopOnInteraction: false }) : null, [autoplay]);

  const carouselPlugins = React.useMemo<EmblaPlugin[] | undefined>(() => {
    // on part d’un tableau vide
    const list: EmblaPlugin[] = [];

    // si l’utilisateur a passé d’autres plugins, on les ajoute
    if (plugins) {
      list.push(...plugins);
    }

    // si on a un autoplayPlugin, on l’ajoute aussi
    if (autoplayPlugin) {
      list.push(autoplayPlugin);
    }

    // si on n’a rien, on renvoie undefined
    return list.length > 0 ? list : undefined;
  }, [plugins, autoplayPlugin]);

  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
      loop,
    },
    carouselPlugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  // Si dots est un booléen, on l'utilise tel quel, sinon on le traite comme une chaîne de caractères
  const showDots = dots !== false
  const dotsVariant = typeof dots === "string" ? dots : ("dot" as const)

// si on a juste un nombre, on génère un objet de breakpoints par défaut
const responsiveItems = React.useMemo<Record<number, number>>(() => {
  const max = itemsToShow
  return {
    0: 1,                                           // base
    640:   Math.floor(Math.min(2, max)),            // sm
    768:   Math.floor(Math.min(3, max)),            // md
    1024:  Math.floor(Math.min(max / 1.25, max)),   // lg
    1280:  Math.floor(Math.min(max / 1.125, max)),  // xl
    1536:  max                                      // 2xl
  }
}, [itemsToShow]);

// on trie les breakpoints
const breakpoints = React.useMemo(
  () => Object.keys(responsiveItems)
                 .map((k) => parseInt(k))
                 .sort((a, b) => a - b),
  [responsiveItems]
)

// 3) État pour le count effectif
const [count, setCount] = React.useState(responsiveItems[breakpoints[0]])

React.useEffect(() => {
  const update = () => {
    const w = window.innerWidth
    let val = responsiveItems[breakpoints[0]]
    for (const bp of breakpoints) {
      if (w >= bp) val = responsiveItems[bp]
    }
    setCount(val)
  }
  update()
  window.addEventListener("resize", update)
  return () => window.removeEventListener("resize", update)
}, [breakpoints, responsiveItems])
  
    // À chaque resize, on recalcule
    React.useEffect(() => {
      if (typeof itemsToShow === "object") {
        const update = () => {
          const w = window.innerWidth
          let val = itemsToShow[breakpoints[0]]
          for (const bp of breakpoints) {
            if (w >= bp) val = itemsToShow[bp]
          }
          setCount(val)
        }
        update()
        window.addEventListener("resize", update)
        return () => window.removeEventListener("resize", update)
      }
    }, [breakpoints, itemsToShow])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
        orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        itemsToShow: count,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        onMouseEnter={() => autoplayPlugin?.stop()}
        onMouseLeave={() => autoplayPlugin?.play()}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        <div className="relative">
          {children}
        </div>
        {showDots  && <CarouselDots variant={dotsVariant}/>}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          " flex",
          orientation === "horizontal" ? "gap-x-0" : "flex-col gap-y-4",
          className
        )}
        {...props}
      />
    </div>
  );
}
CarouselContent.displayName = "CarouselContent";

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation, itemsToShow } = useCarousel();
  // pour horizontal : on veut flex-basis = 100% / itemsToShow
  // Si on affiche plusieurs items en horizontal, on calcule un flex-basis en %.
  const flexStyle =
    orientation === "horizontal" && itemsToShow
      ? { flex: `0 0 ${100 / itemsToShow}%` }
      : undefined;
  const isEven = typeof itemsToShow === "number" && itemsToShow % 2 === 0;

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        isEven && "translate-x-1/2",
        // orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      style={{ ...flexStyle }}
      {...props}
    />
  );
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev, opts } = useCarousel();

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -left-12 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev && !opts?.loop}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}
CarouselPrevious.displayName = "CarouselPrevious";

function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext, opts } = useCarousel();

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext && !opts?.loop}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}
CarouselNext.displayName = "CarouselNext";

function CarouselDots({
  variant = "dot",
  size = "dot",
  className,
  ...props
}: CarouselDotsProps) {
  const { api } = useCarousel();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [dotsCount, setDotsCount] = React.useState(0);

  const onSelect = React.useCallback(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, [api]);

  React.useEffect(() => {
    if (!api) return;
    setDotsCount(api.scrollSnapList().length);
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  if (dotsCount <= 1) return null;

  return (
    <div
      className={cn("flex justify-center space-x-2 mt-4", className)}
      data-slot="carousel-dots"
      {...props}
    >
      {Array.from({ length: dotsCount }).map((_, idx) => (
        <Button
          key={idx}
          variant={variant}
          size={size}
          onClick={() => api?.scrollTo(idx)}
          aria-label={`Slide ${idx + 1}`}
          className={cn(
            "rounded-full p-0 aspect-square transition-transform",
            selectedIndex === idx
              ? "scale-110" // dot actif un peu plus grand
              : "opacity-50 hover:opacity-80"
          )}
        />
      ))}
    </div>
  );
}
CarouselDots.displayName = "CarouselDots";
export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
};
