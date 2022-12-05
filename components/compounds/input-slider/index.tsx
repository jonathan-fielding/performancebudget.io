export default function InputSlider(props: any) {
  return (
    <div>
      <label htmlFor={props.name} className="mb-2 block">
        {props.name}
        <span className="float-right">
          {props.userValue}
          {props.unit}
        </span>
      </label>
      <input
        name={props.name}
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        className="range range-md w-72 range-primary"
        onChange={props.changeValue}
      />
    </div>
  );
}
