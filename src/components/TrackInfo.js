import React from "react";

export default function TrackInfo(props) {
  return (
    //Track info seen in modal: each track image with description and course length
    <div className="modal-tracks">
      {/* Track 0 */}
      <div className="modal-track0">
        {/* Title & Image */}
        <p>{props.item.tracks[props.item.id].track}</p>
        <img
          className="trackImgs"
          src={props.item.tracks[0].thumbnail}
          alt="track"
        />
        {/* Description */}
        <p>{props.item.tracks[0].desc.main}</p>
        <p>{props.item.tracks[0].desc.lengths}</p>
      </div>

      {/* Track 1 */}
      <div className="modal-track1">
        {/* Title & Image */}
        <p>{props.item.tracks[1].track}</p>
        <img
          className="trackImgs"
          src={props.item.tracks[1].thumbnail}
          alt="track"
        />
        {/* Description */}
        <p>{props.item.tracks[1].desc.main}</p>
        <p>{props.item.tracks[1].desc.lengths}</p>
      </div>
    </div>
  );
}
