import PropTypes from 'prop-types';

export function RadioButton({ label, value, name, onChange, checked }) {
  return (
    <label
      className={`py-4 px-6 rounded-lg border-2 transition-all ease-in-out bg-primary ${
        checked
          ? 'border-green-500 text-green-600'
          : 'border-neutral-400 text-neutral-800'
      }`}
    >
      <input
        type="radio"
        value={value}
        name={name}
        onChange={onChange}
        className="hidden"
        checked={checked}
      />
      <span className="capitalize">{label}</span>
    </label>
  );
}

RadioButton.defaultProps = {
  checked: false,
};

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
};
