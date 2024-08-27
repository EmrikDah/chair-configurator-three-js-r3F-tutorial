import { useCustomization } from "../contexts/Customization";

const Configurator = () => {
  const {
    cabinetColors,
    cabinetColor,
    setCabinetColor,
    drawerColors,
    drawerColor,
    setDrawerColor,
  } = useCustomization();

  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">cabinet color</div>
        <div className="configurator__section__values">
          {cabinetColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === cabinetColor.color ? "item--active" : ""
              }`}
              onClick={() => setCabinetColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="configurator__section">
        <div className="configurator__section__title">drawer color</div>
        <div className="configurator__section__values">
          {drawerColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === drawerColor.color ? "item--active" : ""
              }`}
              onClick={() => setDrawerColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Configurator;
