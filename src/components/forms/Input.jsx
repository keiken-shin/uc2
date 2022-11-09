import PropTypes from 'prop-types';

export function Input({ label, value, name, type, onChange }) {
  return (
    <label className="relative">
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        className="w-full h-12 border bg-primary border-neutral-400 rounded-xl lg:w-96 appearance-none outline-none px-4"
      />
      <span className="absolute -top-2 left-6 text-sm bg-primary px-2 font-medium">
        {label}
      </span>
    </label>
  );
}

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};
