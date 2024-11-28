import React from "react";

const TextCard: React.FC = () => {
  return (
    <div className="text-justify rounded-lg border border-solid border-[#9eb0cc] w-full h-[29.125rem] px-3 py-4 bg-[#e5e6e1] mt-4">
      <p className="font-leagueScript text-xl font-semibold text-[#2f2e8a] mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        sollicitudin sapien mi, in posuere ex finibus sed. Aliquam vestibulum,
        dui et finibus mollis, lacus dolor malesuada sem, at aliquam ex nibh
        vitae arcu. Nam eu porttitor arcu. Proin eget laoreet tellus, quis
        consequat massa. Integer eget elit finibus, feugiat ipsum vel,
        ullamcorper ante. Fusce at iaculis magna. Proin pellentesque felis id
        est porttitor malesuada.
      </p>
    </div>
  );
};

export default TextCard;
