import Icon from "./Icon";
import { nearbyPlaces } from "@/lib/data";

export default function NearbyPlaces() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1">
      {nearbyPlaces.map((place) => (
        <div
          key={place.name}
          className="flex items-center justify-between gap-4 py-3 border-b border-black/10"
        >
          <div className="flex items-center gap-3">
            <Icon name="location" className="size-4 text-gold shrink-0" />
            <span className="font-raleway text-[14px]">{place.name}</span>
          </div>
          <span className="font-poppins text-[13px] text-black/50 shrink-0">
            {place.distance}
          </span>
        </div>
      ))}
    </div>
  );
}
