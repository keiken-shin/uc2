import PropTypes from 'prop-types';

export function ProgressBar({ barLength, currentPage }) {
  const activeWidth = (currentPage / barLength) * 100;

  return (
    <div className="h-2 w-full rounded-xl bg-neutral-200 overflow-hidden lg:w-96">
      <div
        className="bg-green-500 h-full rounded-xl"
        style={{ width: `${activeWidth}%` }}
      />
    </div>
  );
}

ProgressBar.propTypes = {
  barLength: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};
